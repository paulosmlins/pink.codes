// src/types/settings.ts

export interface PrinterConfig {
  id: string;
  name: string; // ex: Bambu Lab P1S
  purchasePrice: number; // ex: 5000.00
  lifespanHours: number; // Vida útil estimada em horas (ex: 2000h para manutenção)
  electricityCost: number; // Opcional: Custo kWh
  markupPercentage: number; // Margem de lucro desejada sobre a máquina (%)
}

// Helper para calcular custo por hora da máquina
export const calculateMachineHourlyRate = (config: PrinterConfig): number => {
  if (config.lifespanHours === 0) return 0;

  const depreciationPerHour = config.purchasePrice / config.lifespanHours;
  const markup = depreciationPerHour * (config.markupPercentage / 100);

  return depreciationPerHour + markup;
};
