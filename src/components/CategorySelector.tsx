import { getSymptomCategories } from '../data/symptoms';
import { Language } from '../types';

interface CategorySelectorProps {
  language: Language;
  onCategorySelect: (categoryId: string) => void;
}

export function CategorySelector({ language, onCategorySelect }: CategorySelectorProps) {
  const categories = getSymptomCategories(language);
  
  return (
    <div className="grid grid-cols-2 gap-2 p-2">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategorySelect(category.id)}
          className="flex items-center gap-2 rounded-lg bg-white p-3 text-left shadow-sm hover:bg-blue-50 transition-colors"
        >
          <span className="text-2xl">{category.emoji}</span>
          <div>
            <h3 className="text-sm font-medium text-gray-900">{category.name}</h3>
            <p className="text-xs text-gray-500">
              {category.symptoms.length} symptoms
            </p>
          </div>
        </button>
      ))}
    </div>
  );
}