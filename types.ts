
export interface MedicineAnalysis {
  name: string;
  activeIngredients: string[];
  commonUses: string[];
  dosageInstructions: string;
  warnings: string[];
}

export interface DiseaseInfo {
  name: string;
  symptoms: string[];
  description: string;
  precautions: string[];
  riskFactors: string[];
}

export interface Booking {
  id: string;
  doctorName: string;
  specialty: string;
  date: string;
  time: string;
}

export enum AppTab {
  DASHBOARD = 'DASHBOARD',
  SCANNER = 'SCANNER',
  VOICE = 'VOICE',
  BOOKING = 'BOOKING',
  ENCYCLOPEDIA = 'ENCYCLOPEDIA'
}
