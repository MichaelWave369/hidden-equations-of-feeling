export type FormulaFamily =
  | 'comedy'
  | 'drama'
  | 'sadness_grief'
  | 'joy_wonder'
  | 'fire_boundary'
  | 'fear_threat'
  | 'love_bridge'
  | 'social_mirror'
  | 'calm_learning'
  | 'general_feeling';

export type VariableRole = 'output' | 'amplifier' | 'buffer' | 'stabilizer' | string;

export interface FormulaVariable {
  symbol: string;
  meaning: string;
  role: VariableRole;
}

export interface FormulaCard {
  id: string;
  title: string;
  canonicalTitle?: string;
  alternateTitles?: string[];
  family: FormulaFamily;
  familyLabel: string;
  formula: string;
  formulaLatex?: string;
  formulaPlaintext: string;
  formulaSymbols: string[];
  variables: FormulaVariable[];
  tagline: string;
  derivation: string;
  theoreticalEcho: string;
  culturalScope: string;
  temporalNote: string;
  reflectionPrompt: string;
  useCases: string[];
  exampleApplication: string;
  crossReferences: string[];
  posterVisual: string;
  visualMotif: string;
  familyColor: string;
  boundaryNote: string;
  misuseWarning: string;
  intensity: 'low' | 'medium' | 'high';
  version: string;
  createdDate: string;
  status: string;
  license: string;
}
