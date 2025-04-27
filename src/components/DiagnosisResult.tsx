import { AlertCircle, ArrowRight, Activity, Heart, Stethoscope } from 'lucide-react';
import { Diagnosis, Language } from '../types';
import { getTranslation } from '../utils/translations';

interface DiagnosisResultProps {
  diagnosis: Diagnosis;
  language: Language;
}

export function DiagnosisResult({ diagnosis, language }: DiagnosisResultProps) {
  const icons = [Stethoscope, Heart, Activity];

  return (
    <div className="space-y-6 p-4">
      <div className="grid gap-6 md:grid-cols-3">
        {diagnosis.conditions.map((condition, index) => {
          const Icon = icons[index];
          const isTopCondition = index === 0;
          
          return (
            <div
              key={condition.name}
              className={`relative overflow-hidden rounded-xl border ${
                isTopCondition 
                  ? 'border-blue-200 bg-blue-50/50' 
                  : 'border-gray-200 bg-white'
              }`}
            >
              {isTopCondition && (
                <div className="absolute right-0 top-0 rounded-bl-lg bg-blue-500 px-2 py-1 text-xs font-medium text-white">
                  {getTranslation('mostLikely', language)}
                </div>
              )}
              
              <div className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className={`rounded-full p-2 ${
                    isTopCondition ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                  }`}>
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {condition.name}
                  </h3>
                </div>

                <div className="mb-4">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600">
                      {getTranslation('confidence', language)}
                    </span>
                    <span className={`text-sm font-semibold ${
                      isTopCondition ? 'text-blue-600' : 'text-gray-900'
                    }`}>
                      {condition.probability.toFixed(1)}%
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-gray-200">
                    <div 
                      className={`h-full rounded-full ${
                        isTopCondition ? 'bg-blue-500' : 'bg-gray-400'
                      }`}
                      style={{ width: `${condition.probability}%` }}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="mb-2 text-sm font-medium text-gray-700">
                    {getTranslation('matchingSymptoms', language)}:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {condition.matchingSymptoms.map((symptom) => (
                      <span
                        key={symptom}
                        className={`rounded-full px-2 py-1 text-xs ${
                          isTopCondition 
                            ? 'bg-blue-100 text-blue-700' 
                            : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {symptom}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-gray-700">
                    {getTranslation('recommendedActions', language)}:
                  </h4>
                  {condition.recommendedActions.map((action, actionIndex) => (
                    <div
                      key={actionIndex}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <ArrowRight size={16} className={
                        isTopCondition ? 'text-blue-500' : 'text-gray-400'
                      } />
                      {action}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="rounded-lg bg-yellow-50 p-4">
        <div className="flex items-start gap-3">
          <AlertCircle className="mt-0.5 h-5 w-5 text-yellow-600" />
          <p className="text-sm text-yellow-800">
            {getTranslation('consultDoctor', language)}
          </p>
        </div>
      </div>
    </div>
  );
}