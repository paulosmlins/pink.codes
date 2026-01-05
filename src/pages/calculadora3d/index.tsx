'use client';

import { useState, useEffect, useRef } from 'react';

// --- TIPOS ---
type Config = {
  kwhPrice: number;
  feeML: number;
  feeShopee: number;
  printerPrice: number;
  printerLifespan: number;
};

type Project = {
  id: string;
  name: string;
  date: string;
  costs: {
    material: number;
    energy: number;
    labor: number;
    machine: number;
    total: number;
  };
  salePrice: number;
  profit: number;
  roi: number;
  originalInputs: {
    filamentPrice: number | string;
    filamentWeight: number | string;
    powerConsumption: number | string;
    printTime: number | string;
    laborRate: number | string;
    failMargin: number | string;
    profitMargin: number | string;
  };
};

export default function Calculadora3D() {
  // --- ESTADOS ---
  const [mounted, setMounted] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  // Configurações Globais
  const [config, setConfig] = useState<Config>({
    kwhPrice: 0.95,
    feeML: 18,
    feeShopee: 20,
    printerPrice: 7600,
    printerLifespan: 7000
  });

  // Inputs da Calculadora - INICIANDO VAZIOS ('')
  const [inputs, setInputs] = useState({
    filamentPrice: '' as number | string,
    filamentWeight: '' as number | string,
    powerConsumption: '' as number | string,
    printTime: '' as number | string,
    laborRate: '' as number | string,
    failMargin: '' as number | string,
    profitMargin: 500 as number | string,
    projectName: ''
  });

  const [savedProjects, setSavedProjects] = useState<Project[]>([]);
  const settingsRef = useRef<HTMLDivElement>(null);

  // --- EFEITOS (CARREGAR E SALVAR) ---
  useEffect(() => {
    setMounted(true);
    const storedConfig = localStorage.getItem('3dcalc_config_v2');
    const storedProjects = localStorage.getItem('3dcalc_projects_v2');
    // Carrega o rascunho dos inputs (persistência do F5)
    const storedDraft = localStorage.getItem('3dcalc_draft_v1');

    if (storedConfig) setConfig(JSON.parse(storedConfig));
    if (storedProjects) setSavedProjects(JSON.parse(storedProjects));
    if (storedDraft) setInputs(JSON.parse(storedDraft));
  }, []);

  // Salvar Config
  useEffect(() => {
    if (mounted) localStorage.setItem('3dcalc_config_v2', JSON.stringify(config));
  }, [config, mounted]);

  // Salvar Projetos
  useEffect(() => {
    if (mounted) localStorage.setItem('3dcalc_projects_v2', JSON.stringify(savedProjects));
  }, [savedProjects, mounted]);

  // Salvar Rascunho dos Inputs (Sempre que digitar algo)
  useEffect(() => {
    if (mounted) localStorage.setItem('3dcalc_draft_v1', JSON.stringify(inputs));
  }, [inputs, mounted]);

  // Fechar menu ao clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (settingsRef.current && !settingsRef.current.contains(event.target as Node)) {
        setShowSettings(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // --- CÁLCULOS ---
  // Helper para garantir que string vazia vire zero no cálculo
  const getVal = (val: number | string) => Number(val) || 0;

  const valFilamentPrice = getVal(inputs.filamentPrice);
  const valFilamentWeight = getVal(inputs.filamentWeight);
  const valPower = getVal(inputs.powerConsumption);
  const valPrintTime = getVal(inputs.printTime);
  const valLaborRate = getVal(inputs.laborRate);
  const valFailMargin = getVal(inputs.failMargin);
  const valProfitMargin = getVal(inputs.profitMargin);

  const calcMaterial = valFilamentPrice * (valFilamentWeight / 1000);
  const calcMaterialWithFail = calcMaterial * (1 + valFailMargin / 100);
  const calcEnergy = (valPower / 1000) * valPrintTime * config.kwhPrice;
  const calcLabor = valPrintTime * valLaborRate;

  const machineHourlyRate =
    config.printerLifespan > 0 ? config.printerPrice / config.printerLifespan : 0;
  const calcMachine = machineHourlyRate * valPrintTime;

  const custoTotal = calcMaterialWithFail + calcEnergy + calcLabor + calcMachine;
  const vendaBase = custoTotal * (1 + valProfitMargin / 100);
  const lucroReal = vendaBase - custoTotal;

  const priceML = vendaBase / (1 - config.feeML / 100);
  const taxaML = priceML - vendaBase;
  const priceShopee = vendaBase / (1 - config.feeShopee / 100);
  const taxaShopee = priceShopee - vendaBase;

  // --- AÇÕES ---

  // Limpar APENAS os campos numéricos e o nome (Reset Total)
  const handleClearFields = () => {
    setInputs({
      filamentPrice: '',
      filamentWeight: '',
      powerConsumption: '',
      printTime: '',
      laborRate: '',
      failMargin: '',
      profitMargin: 500,
      projectName: ''
    });
    setEditingId(null);
    // Limpa também do localStorage para garantir
    localStorage.removeItem('3dcalc_draft_v1');
  };

  const clearForm = () => {
    setInputs({ ...inputs, projectName: '' });
    setEditingId(null);
  };

  const handleSaveProject = () => {
    if (!inputs.projectName) {
      alert('Digite um nome para o projeto');
      return;
    }
    const newProject: Project = {
      id: crypto.randomUUID(),
      name: inputs.projectName,
      date: new Date().toLocaleDateString('pt-BR'),
      costs: {
        material: calcMaterialWithFail,
        energy: calcEnergy,
        labor: calcLabor,
        machine: calcMachine,
        total: custoTotal
      },
      salePrice: vendaBase,
      profit: lucroReal,
      roi: valProfitMargin,
      originalInputs: { ...inputs }
    };
    setSavedProjects([newProject, ...savedProjects]);
    clearForm();
  };

  const handleUpdateProject = () => {
    if (!editingId) return;
    const updatedProjects = savedProjects.map((p) => {
      if (p.id === editingId) {
        return {
          ...p,
          costs: {
            material: calcMaterialWithFail,
            energy: calcEnergy,
            labor: calcLabor,
            machine: calcMachine,
            total: custoTotal
          },
          salePrice: vendaBase,
          profit: lucroReal,
          roi: valProfitMargin,
          originalInputs: { ...inputs }
        };
      }
      return p;
    });
    setSavedProjects(updatedProjects);
    clearForm();
  };

  const handleSelectProject = (project: Project) => {
    if (editingId === project.id) return;
    setEditingId(null);
    setInputs({ ...inputs, ...project.originalInputs, projectName: project.name });
  };

  const handleEditMode = (e: React.MouseEvent, project: Project) => {
    e.stopPropagation();
    setEditingId(project.id);
    setInputs({ ...inputs, ...project.originalInputs, projectName: project.name });
  };

  const handleDeleteProject = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (editingId === id) clearForm();
    setSavedProjects(savedProjects.filter((p) => p.id !== id));
  };

  const handleExportExcel = () => {
    let csvContent = 'data:text/csv;charset=utf-8,';
    csvContent += 'Nome,Data,Material,Energia,Mao de Obra,Maquina,Total,Venda,Lucro,ROI %\n';
    savedProjects.forEach((p) => {
      const row = [
        p.name,
        p.date,
        p.costs.material.toFixed(2),
        p.costs.energy.toFixed(2),
        p.costs.labor.toFixed(2),
        p.costs.machine.toFixed(2),
        p.costs.total.toFixed(2),
        p.salePrice.toFixed(2),
        p.profit.toFixed(2),
        p.roi
      ].join(',');
      csvContent += row + '\n';
    });
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'projetos_3d.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!mounted) return null;

  return (
    <div className="flex justify-center h-screen w-full bg-[#1a1b1e] text-gray-100 font-sans overflow-hidden selection:bg-[#FF48A1] selection:text-white">
      <main className=" p-4 w-full md:p-8 overflow-y-auto md:w-9/12">
        {/* HEADER & SETTINGS DROPDOWN */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            {editingId ? (
              <span className="text-[#FF48A1]">Editando: {inputs.projectName}</span>
            ) : (
              'Calculadora de Custos'
            )}
          </h2>

          <div className="relative" ref={settingsRef}>
            <button
              onClick={() => setShowSettings(!showSettings)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${showSettings ? 'bg-[#FF48A1] text-white border-[#FF48A1]' : 'bg-[#25262b] text-gray-300 border-white/10 hover:border-white/30'}`}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              Configurações
            </button>

            {/* MENU SUSPENSO */}
            {showSettings && (
              <div className="absolute top-12 right-0 w-96 bg-[#25262b] border border-white/10 rounded-xl p-5 shadow-2xl z-50 animate-in slide-in-from-top-2">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-[#FF48A1] text-xs font-bold uppercase tracking-wider mb-2">
                      Energia & Taxas
                    </h3>
                    <div className="space-y-3">
                      <InputGroup
                        label="Custo kWh (R$)"
                        value={config.kwhPrice}
                        onChange={(v: any) => setConfig({ ...config, kwhPrice: v })}
                      />
                      <InputGroup
                        label="Taxa Mercado Livre (%)"
                        value={config.feeML}
                        onChange={(v: any) => setConfig({ ...config, feeML: v })}
                        suffix="ML"
                        color="text-yellow-400"
                      />
                      <InputGroup
                        label="Taxa Shopee (%)"
                        value={config.feeShopee}
                        onChange={(v: any) => setConfig({ ...config, feeShopee: v })}
                        suffix="SH"
                        color="text-orange-500"
                      />
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <h3 className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">
                      Máquina (Depreciação)
                    </h3>
                    <div className="space-y-3">
                      <InputGroup
                        label="Valor da Impressora (R$)"
                        value={config.printerPrice}
                        onChange={(v: any) => setConfig({ ...config, printerPrice: v })}
                      />
                      <InputGroup
                        label="Vida Útil (Horas)"
                        value={config.printerLifespan}
                        onChange={(v: any) => setConfig({ ...config, printerLifespan: v })}
                        hint="Ex: 3000h (Define custo/hora)"
                      />
                    </div>
                    <div className="bg-black/30 p-2 rounded border border-white/5 flex justify-between items-center mt-3">
                      <span className="text-xs text-gray-400">Custo Hora:</span>
                      <span className="text-white font-bold text-sm">
                        R$ {machineHourlyRate.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8  pb-20">
          {/* --- ESQUERDA: INPUTS E RESULTADO --- */}
          <div className="xl:col-span-8 space-y-6">
            {/* Inputs Principais */}
            <div className="bg-[#25262b] border border-white/10 rounded-2xl p-6 grid grid-cols-2 md:grid-cols-4 gap-5 shadow-lg">
              <div className="col-span-2 md:col-span-1">
                <InputGroup
                  label="Filamento (R$/kg)"
                  value={inputs.filamentPrice}
                  onChange={(v: any) => setInputs({ ...inputs, filamentPrice: v })}
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <InputGroup
                  label="Peso Usado (g)"
                  value={inputs.filamentWeight}
                  onChange={(v: any) => setInputs({ ...inputs, filamentWeight: v })}
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <InputGroup
                  label="Tempo Print (h)"
                  value={inputs.printTime}
                  onChange={(v: any) => setInputs({ ...inputs, printTime: v })}
                />
              </div>

              {/* CAMPO MÃO DE OBRA + BOTÃO LIMPAR */}
              <div className="col-span-2 md:col-span-1 flex flex-col justify-between">
                <InputGroup
                  label="Mão de Obra (R$/h)"
                  value={inputs.laborRate}
                  onChange={(v: any) => setInputs({ ...inputs, laborRate: v })}
                  color="text-[#FF48A1]"
                />
              </div>

              <div className="col-span-2 md:col-span-1">
                <InputGroup
                  label="Lucro (%)"
                  value={inputs.profitMargin}
                  onChange={(v: any) => setInputs({ ...inputs, profitMargin: v })}
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <InputGroup
                  label="Falha (%)"
                  value={inputs.failMargin}
                  onChange={(v: any) => setInputs({ ...inputs, failMargin: v })}
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <InputGroup
                  label="Consumo (W)"
                  value={inputs.powerConsumption}
                  onChange={(v: any) => setInputs({ ...inputs, powerConsumption: v })}
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                {/* --- BOTÃO LIMPAR CAMPOS ADICIONADO AQUI --- */}
                <label className="text-xs font-semibold text-transparent uppercase tracking-wide">
                  Botão
                </label>
                <button
                  onClick={handleClearFields}
                  className="w-full bg-[#FF48A1] hover:bg-[#d43583] text-white font-bold px-6 py-[7px] rounded-lg transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(255,72,161,0.4)]"
                  title="Limpar todos os campos da calculadora"
                >
                  Limpar Campos
                </button>
              </div>
            </div>

            {/* Resultado Visual */}
            <div className="bg-[#25262b] border border-white/10 rounded-2xl p-8 relative overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 mb-6 text-[#FF48A1] font-bold text-xl">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <h3>Resultado Financeiro</h3>
              </div>

              <div className="flex flex-col md:flex-row items-stretch justify-between gap-10">
                {/* Box de Preço */}
                <div className="flex-none w-full md:w-64 bg-[#141517] border-2 border-[#FF48A1]/50 rounded-xl p-6 flex flex-col justify-center items-center shadow-lg">
                  <span className="text-xs text-gray-400 uppercase tracking-widest mb-2 font-semibold">
                    Preço de Venda
                  </span>
                  <span className="text-4xl font-bold text-white tracking-tight">
                    R$ {vendaBase.toFixed(2)}
                  </span>
                  <div className="w-full h-px bg-white/10 my-4"></div>
                  <span className="text-xs text-gray-400 uppercase tracking-widest mb-1">
                    Lucro Líquido
                  </span>
                  <span className="text-xl font-bold text-green-400">
                    R$ {lucroReal.toFixed(2)}
                  </span>
                </div>

                {/* Lista Detalhada */}
                <div className="flex-1 w-full space-y-3">
                  <ResultRow label="Material (+ falha)" value={calcMaterialWithFail} />
                  <ResultRow label="Energia" value={calcEnergy} />
                  <ResultRow label="Depreciação Máquina" value={calcMachine} />
                  <ResultRow label="Mão de Obra" value={calcLabor} color="text-[#FF48A1]" />
                  <div className="h-px bg-white/10 my-2"></div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400 font-semibold">Custo Total</span>
                    <span className="font-bold text-gray-200">R$ {custoTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Marketplaces Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* ML (Amarelo) */}
              <div className="bg-[#25262b] border border-yellow-400/30 rounded-xl p-5 relative shadow-lg hover:border-yellow-400/50 transition-all">
                <div className="absolute top-4 right-4 text-yellow-400">
                  <span className="text-xs font-bold border border-yellow-400/50 px-2 py-0.5 rounded">
                    ML
                  </span>
                </div>
                <h5 className="text-yellow-400 font-bold text-sm mb-1 uppercase">Mercado Livre</h5>
                <div className="text-3xl font-bold text-white mb-1">R$ {priceML.toFixed(2)}</div>
                <div className="text-xs text-gray-400">
                  Taxa: <span className="text-white">R$ {taxaML.toFixed(2)}</span> ({config.feeML}%)
                </div>
              </div>

              {/* Shopee (Laranja) */}
              <div className="bg-[#25262b] border border-orange-500/30 rounded-xl p-5 relative shadow-lg hover:border-orange-500/50 transition-all">
                <div className="absolute top-4 right-4 text-orange-500">
                  <span className="text-xs font-bold border border-orange-500/50 px-2 py-0.5 rounded">
                    SH
                  </span>
                </div>
                <h5 className="text-orange-500 font-bold text-sm mb-1 uppercase">Shopee</h5>
                <div className="text-3xl font-bold text-white mb-1">
                  R$ {priceShopee.toFixed(2)}
                </div>
                <div className="text-xs text-gray-400">
                  Taxa: <span className="text-white">R$ {taxaShopee.toFixed(2)}</span> (
                  {config.feeShopee}%)
                </div>
              </div>
            </div>

            {/* Barra de Ação (Salvar / Atualizar) */}
            <div className="bg-[#25262b] p-4 rounded-xl border border-white/10 flex gap-2 shadow-lg sticky bottom-4 z-10">
              {editingId ? (
                <button
                  onClick={handleUpdateProject}
                  className="w-full bg-[#FF48A1] hover:bg-[#d43583] text-white font-bold px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(255,72,161,0.4)]"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                    <polyline points="17 21 17 13 7 13 7 21" />
                    <polyline points="7 3 7 8 15 8" />
                  </svg>
                  SALVAR ALTERAÇÕES
                </button>
              ) : (
                <>
                  <input
                    type="text"
                    placeholder="Nome do Projeto..."
                    className="flex-1 bg-[#141517] border border-white/10 rounded-lg px-4 text-white focus:border-[#FF48A1] outline-none placeholder:text-gray-600 font-medium"
                    value={inputs.projectName}
                    onChange={(e) => setInputs({ ...inputs, projectName: e.target.value })}
                  />
                  <button
                    onClick={handleSaveProject}
                    className="bg-[#FF48A1] hover:bg-[#d43583] text-white font-bold px-6 py-2 rounded-lg transition-colors flex items-center gap-2"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                      <polyline points="17 21 17 13 7 13 7 21" />
                      <polyline points="7 3 7 8 15 8" />
                    </svg>
                    Salvar
                  </button>
                </>
              )}
            </div>
            {editingId && (
              <div className="text-center pb-8">
                <button
                  onClick={clearForm}
                  className="text-xs text-gray-500 hover:text-white underline"
                >
                  Cancelar Edição
                </button>
              </div>
            )}
          </div>

          {/* --- DIREITA: LISTA DE PROJETOS --- */}
          <div className="xl:col-span-4 flex flex-col bg-[#25262b] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
            <div className="p-5 border-b border-white/5 flex justify-between items-center bg-[#2C2E33]">
              <h3 className="font-bold text-white tracking-wide">Meus Projetos</h3>
              <button
                onClick={handleExportExcel}
                className="text-xs bg-[#1a1b1e] border border-white/10 px-3 py-1.5 rounded text-gray-300 hover:text-white hover:border-[#FF48A1] transition-all flex items-center gap-1"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" x2="12" y1="15" y2="3" />
                </svg>
                CSV
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
              {savedProjects.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-40 text-gray-600">
                  <p className="text-sm">Nenhum projeto salvo.</p>
                </div>
              ) : (
                savedProjects.map((project) => (
                  <div
                    key={project.id}
                    onClick={() => handleSelectProject(project)}
                    className={`group relative p-4 rounded-xl border cursor-pointer transition-all ${
                      editingId === project.id
                        ? 'bg-[#FF48A1]/10 border-[#FF48A1] shadow-[0_0_10px_rgba(255,72,161,0.2)]'
                        : 'bg-[#1a1b1e] border-white/5 hover:border-white/20 hover:bg-[#202124]'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4
                          className={`font-bold text-sm ${editingId === project.id ? 'text-[#FF48A1]' : 'text-gray-200'}`}
                        >
                          {project.name}
                        </h4>
                        <p className="text-[10px] text-gray-500">{project.date}</p>
                      </div>

                      <div className="flex gap-2">
                        <button
                          onClick={(e) => handleEditMode(e, project)}
                          className="p-1.5 rounded-md text-gray-500 hover:text-white hover:bg-white/10 transition-all"
                          title="Editar"
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                          </svg>
                        </button>
                        <button
                          onClick={(e) => handleDeleteProject(e, project.id)}
                          className="p-1.5 rounded-md text-gray-500 hover:text-red-500 hover:bg-red-500/10 transition-all"
                          title="Excluir"
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className="flex justify-between items-end border-t border-white/5 pt-2">
                      <span className="text-xs text-gray-500">
                        Lucro:{' '}
                        <span className="text-green-500 font-medium">
                          R$ {project.profit.toFixed(2)}
                        </span>
                      </span>
                      <span className="text-white font-bold text-sm">
                        R$ {project.salePrice.toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </main>

      <style jsx global>{`
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #1a1b1e;
        }
        ::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #444;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-in {
          animation: fadeIn 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

// --- SUB-COMPONENTES (MODIFICADO PARA ACEITAR STRING VAZIA) ---

const InputGroup = ({ label, value, onChange, suffix, color = 'text-white', hint }: any) => (
  <div className="flex flex-col">
    <div className="flex justify-between mb-1.5">
      <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{label}</label>
      {suffix && <span className={`text-[10px] font-bold ${color}`}>{suffix}</span>}
    </div>
    <div className="relative group">
      <input
        type="number"
        step="0.01"
        value={value}
        onChange={(e) => {
          const val = e.target.value;
          // Se for vazio, passa string vazia. Se tiver número, passa o número.
          onChange(val === '' ? '' : Number(val));
        }}
        className="w-full bg-[#141517] border border-white/10 focus:border-[#FF48A1] rounded-lg p-2.5 text-white outline-none transition-all font-mono text-sm shadow-inner focus:shadow-[0_0_10px_rgba(255,72,161,0.1)]"
      />
    </div>
    {hint && <p className="text-[10px] text-gray-500 mt-1">{hint}</p>}
  </div>
);

const ResultRow = ({
  label,
  value,
  color = 'text-gray-300'
}: {
  label: string;
  value: number;
  color?: string;
}) => (
  <div className="flex justify-between items-center text-sm border-b border-white/5 pb-2 last:border-0 last:pb-0">
    <span className="text-gray-500">{label}</span>
    <span className={`font-medium ${color}`}>R$ {value.toFixed(2)}</span>
  </div>
);
