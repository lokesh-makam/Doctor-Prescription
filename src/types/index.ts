export type MessageType = 'user' | 'bot';
export type Language = 'english' | 'hindi' | 'telugu';

export interface Message {
  id: string;
  type: MessageType;
  content: string;
  suggestions?: string[];
  categories?: string[];
  showSuggestions?: boolean;
  showCategories?: boolean;
  diagnosis?: Diagnosis;
  showActions?: boolean;
  showLanguageSelect?: boolean;
}

export interface Symptom {
  name: string;
  selected: boolean;
  category?: string;
}

export interface Diagnosis {
  conditions: {
    name: string;
    probability: number;
    description: string;
    matchingSymptoms: string[];
    recommendedActions: string[];
  }[];
}

export interface Action {
  label: string;
  value: string;
}

export interface PredictionResponse {
  top_3_predictions: {
    disease: string;
    probability: number;
  }[];
}