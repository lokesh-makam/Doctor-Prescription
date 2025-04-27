import { Language } from '../types';

interface LanguageSelectorProps {
  onLanguageSelect: (language: Language) => void;
}

export function LanguageSelector({ onLanguageSelect }: LanguageSelectorProps) {
  return (
    <div className="grid grid-cols-3 gap-2 p-4">
      {[
        { id: 'english', name: 'English', flag: '🇬🇧' },
        { id: 'hindi', name: 'हिंदी', flag: '🇮🇳' },
        { id: 'telugu', name: 'తెలుగు', flag: '🇮🇳' }
      ].map((lang) => (
        <button
          key={lang.id}
          onClick={() => onLanguageSelect(lang.id as Language)}
          className="flex flex-col items-center gap-2 rounded-lg bg-white p-4 text-center shadow-sm hover:bg-blue-50 transition-colors"
        >
          <span className="text-3xl">{lang.flag}</span>
          <span className="text-sm font-medium text-gray-900">{lang.name}</span>
        </button>
      ))}
    </div>
  );
}