import { cn } from '../utils/cn';
import { Message, Action, Language } from '../types';
import { Bot, User } from 'lucide-react';
import { getTranslation } from '../utils/translations';

interface ChatMessageProps {
  message: Message;
  language: Language;
  onSuggestionClick?: (suggestion: string) => void;
  onActionClick?: (action: string) => void;
}

export function ChatMessage({ message, language, onSuggestionClick, onActionClick }: ChatMessageProps) {
  const isBot = message.type === 'bot';

  const actions: Action[] = [
    { label: getTranslation('startNew', language), value: "restart" },
    { label: getTranslation('addMore', language), value: "more" }
  ];

  return (
    <div
      className={cn(
        'flex w-full gap-3 p-4',
        isBot ? 'bg-gray-50' : 'bg-white'
      )}
    >
      <div className={cn(
        'flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-full',
        isBot ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
      )}>
        {isBot ? <Bot size={18} /> : <User size={18} />}
      </div>

      <div className="flex-1">
        <p className="text-sm text-gray-800 whitespace-pre-line">{message.content}</p>
        
        {message.showSuggestions && message.suggestions && message.suggestions.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {message.suggestions.map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => onSuggestionClick?.(suggestion)}
                className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-600 hover:bg-blue-100 transition-colors"
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}

        {message.showActions && (
          <div className="mt-4 flex flex-wrap gap-2">
            {actions.map((action) => (
              <button
                key={action.value}
                onClick={() => onActionClick?.(action.value)}
                className="rounded-lg bg-white border border-blue-200 px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 transition-colors"
              >
                {action.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}