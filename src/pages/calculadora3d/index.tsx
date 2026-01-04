'use client';

import { useState } from 'react';

export default function Calculadora3D() {
  const [filamentoPreco, setFilamentoPreco] = useState<number>(120);
  const [filamentoQtd, setFilamentoQtd] = useState<number>(76);
  const [consumo, setConsumo] = useState<number>(200);
  const [tempo, setTempo] = useState<number>(3);
  const [kwh, setKwh] = useState<number>(0.69568);
  const [maoObra, setMaoObra] = useState<number>(0);
  const [lucro, setLucro] = useState<number>(400);

  const custoFilamento = filamentoPreco * (filamentoQtd / 1000);
  const custoEnergia = (consumo / 1000) * tempo * kwh;
  const custoMaoObra = maoObra * tempo;
  const custoTotal = custoFilamento + custoEnergia + custoMaoObra;
  const precoFinal = custoTotal * (1 + lucro / 100);

  return (
    <main className="min-h-screen bg-neutral-950 flex items-center justify-center p-6">
      <section className="w-screen max-w-screen-xl rounded-2xl border border-neutral-800 bg-neutral-900 shadow-xl p-8 space-y-8">
        <header className="text-center space-y-1">
          <h1 className="text-2xl font-bold text-white">Calculadora de Custos – Impressão 3D</h1>
          <p className="text-sm text-neutral-400">Precificação profissional</p>
        </header>

        {/* FILAMENTO */}
        <div className="space-y-3">
          <h2 className="text-[#FF48A1] font-semibold">Filamento</h2>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="number"
              value={filamentoPreco}
              onChange={(e) => setFilamentoPreco(Number(e.target.value))}
              className="input"
              placeholder="Preço R$/kg"
            />
            <input
              type="number"
              value={filamentoQtd}
              onChange={(e) => setFilamentoQtd(Number(e.target.value))}
              className="input"
              placeholder="Quantidade (g)"
            />
          </div>
        </div>

        {/* ENERGIA */}
        <div className="space-y-3">
          <h2 className="text-[#FF48A1] font-semibold">Energia & Tempo</h2>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="number"
              value={consumo}
              onChange={(e) => setConsumo(Number(e.target.value))}
              className="input"
              placeholder="Consumo (W)"
            />
            <input
              type="number"
              value={tempo}
              onChange={(e) => setTempo(Number(e.target.value))}
              className="input"
              placeholder="Tempo (h)"
            />
            <input
              type="number"
              value={kwh}
              onChange={(e) => setKwh(Number(e.target.value))}
              className="input col-span-2"
              placeholder="Valor do kWh"
            />
          </div>
        </div>

        {/* RESULTADOS */}
        <div className="text-sm text-neutral-300 space-y-2 px-1">
          <div className="flex justify-between">
            <span>Filamento</span>
            <span>R$ {custoFilamento.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Energia</span>
            <span>R$ {custoEnergia.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Mão de obra</span>
            <span>R$ {custoMaoObra.toFixed(2)}</span>
          </div>
          <div className="border-t border-neutral-700 pt-2 flex justify-between font-semibold text-white">
            <span>Total</span>
            <span>R$ {custoTotal.toFixed(2)}</span>
          </div>
        </div>

        {/* LUCRO */}
        <div className="space-y-3">
          <h2 className="text-[#FF48A1] font-semibold">Lucro</h2>
          <input
            type="number"
            value={lucro}
            onChange={(e) => setLucro(Number(e.target.value))}
            className="input w-full"
            placeholder="Margem (%)"
          />
        </div>

        {/* FINAL */}
        <div className="rounded-xl bg-[#FF48A1]/10 p-4 text-center">
          <p className="text-sm text-neutral-400">Preço Final</p>
          <p className="text-3xl font-bold text-[#FF48A1]">R$ {precoFinal.toFixed(2)}</p>
        </div>

        {/* <button className="w-full rounded-xl bg-[#FF48A1] hover:bg-[#ff2f93] text-black font-semibold py-3 transition">
          Gerar Orçamento
        </button> */}
      </section>

      <style jsx>{`
        .input {
          background: #0a0a0a;
          border: 1px solid #262626;
          border-radius: 0.75rem;
          padding: 0.75rem 1.2rem;
          color: #fff;
          outline: none;
          height: 4rem;
        }
        .input:focus {
          border-color: #ff48a1;
        }
      `}</style>
    </main>
  );
}
