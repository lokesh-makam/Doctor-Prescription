import { X } from 'lucide-react';
import { Symptom, Language } from '../types';
import { getTranslation } from '../utils/translations';

interface SelectedSymptomsProps {
  symptoms: Symptom[];
  language: Language;
  onRemove: (symptom: string) => void;
  onContinue: () => void;
}

export function SelectedSymptoms({ symptoms, language, onRemove, onContinue }: SelectedSymptomsProps) {
  const selectedSymptoms = symptoms.filter(s => s.selected);

  if (selectedSymptoms.length === 0) return null;

  return (
    <div className="border-t bg-gray-50 p-4">
      <div className="mb-3">
        <h3 className="text-sm font-medium text-gray-700">
          {getTranslation('selectedSymptoms', language)}:
        </h3>
      </div>
      <div className="mb-4 flex flex-wrap gap-2">
        {selectedSymptoms.map((symptom) => (
          <span
            key={symptom.name}
            className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800"
          >
            {symptom.name}
            <button
              onClick={() => onRemove(symptom.name)}
              className="ml-1 rounded-full p-1 hover:bg-blue-200"
            >
              <X size={14} />
            </button>
          </span>
        ))}
      </div>
      <button
        onClick={onContinue}
        className="w-full rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        {getTranslation('continueButton', language)}
      </button>
    </div>
  );
}