import { useState, useRef, useEffect } from 'react';
import { ChatMessage } from './components/ChatMessage';
import { ChatInput } from './components/ChatInput';
import { SelectedSymptoms } from './components/SelectedSymptoms';
import { CategorySelector } from './components/CategorySelector';
import { DiagnosisResult } from './components/DiagnosisResult';
import { LanguageSelector } from './components/LanguageSelector';
import { Message, Symptom, Language } from './types';
import { getSymptomCategories } from './data/symptoms';
import { predictDisease } from './services/api';
import { getTranslation } from './utils/translations';

const INITIAL_MESSAGE: Message = {
  id: '1',
  type: 'bot',
  content: getTranslation('welcome', 'english'),
  showLanguageSelect: true,
};

function App() {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [language, setLanguage] = useState<Language | null>(null);
  const [symptoms, setSymptoms] = useState<Symptom[]>([]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const resetChat = () => {
    setMessages([INITIAL_MESSAGE]);
    setLanguage(null);
    setSymptoms([]);
  };

  const handleLanguageSelect = (selectedLanguage: Language) => {
    setLanguage(selectedLanguage);
    const categories = getSymptomCategories(selectedLanguage);
    const allSymptoms = categories.flatMap(category => category.symptoms);
    setSymptoms(allSymptoms.map(s => ({ name: s, selected: false })));
    
    const welcomeMessage: Message = {
      id: Date.now().toString(),
      type: 'bot',
      content: getTranslation('help', selectedLanguage),
      showCategories: true,
    };
    
    setMessages([...messages, welcomeMessage]);
  };

  const handleSendMessage = (content: string) => {
    if (!language) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content,
    };
    
    setMessages(prev => [...prev, userMessage]);

    if (content.toLowerCase() === 'help') {
      setTimeout(() => {
        const helpMessage: Message = {
          id: (Date.now() + 1).toString(),
          type: 'bot',
          content: getTranslation('helpMessage', language),
          showCategories: true,
        };
        setMessages(prev => [...prev, helpMessage]);
      }, 1000);
      return;
    }

    const matchingSymptoms = symptoms
      .filter(s => s.name.toLowerCase().includes(content.toLowerCase()))
      .map(s => s.name)
      .slice(0, 5);

    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: matchingSymptoms.length > 0
          ? getTranslation('matchingSymptoms', language)
          : getTranslation('noMatchingSymptoms', language),
        suggestions: matchingSymptoms,
        showSuggestions: matchingSymptoms.length > 0,
        showCategories: matchingSymptoms.length === 0,
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleActionClick = (action: string) => {
    if (action === 'restart') {
      resetChat();
    } else if (action === 'more') {
      const message: Message = {
        id: Date.now().toString(),
        type: 'bot',
        content: getTranslation('exploreMore', language!),
        showCategories: true,
      };
      setMessages(prev => [...prev, message]);
    }
  };

  const handleCategorySelect = (categoryId: string) => {
    if (!language) return;

    const category = getSymptomCategories(language).find(c => c.id === categoryId);
    if (!category) return;

    const message: Message = {
      id: Date.now().toString(),
      type: 'bot',
      content: getTranslation('categorySymptoms', language).replace('{category}', category.name),
      suggestions: category.symptoms,
      showSuggestions: true,
    };

    setMessages(prev => [...prev, message]);
  };

  const handleSuggestionClick = (symptom: string) => {
    setSymptoms(prev =>
      prev.map(s =>
        s.name === symptom
          ? { ...s, selected: !s.selected }
          : s
      )
    );
  };

  const handleRemoveSymptom = (symptom: string) => {
    setSymptoms(prev =>
      prev.map(s =>
        s.name === symptom
          ? { ...s, selected: false }
          : s
      )
    );
  };

  const handleContinue = async () => {
    if (!language) return;
    
    const selectedSymptoms = symptoms
      .filter(s => s.selected)
      .map(s => s.name);

    try {
      const diagnosis = await predictDisease(selectedSymptoms, language);

      const message: Message = {
        id: Date.now().toString(),
        type: 'bot',
        content: getTranslation('diagnosisResult', language),
        diagnosis,
        showActions: true,
      };

      setMessages(prev => [...prev, message]);
    } catch (error) {
      const errorMessage: Message = {
        id: Date.now().toString(),
        type: 'bot',
        content: getTranslation('error', language),
        showActions: true,
      };

      setMessages(prev => [...prev, errorMessage]);
    }
  };

  return (
    <div className="mx-auto flex h-screen max-w-3xl flex-col bg-white shadow-xl">
      <header className="border-b bg-white p-4">
        <h1 className="text-xl font-semibold text-gray-800">AI Health Assistant</h1>
        <p className="text-sm text-gray-500">
          {language ? getTranslation('help', language) : getTranslation('welcome', 'english')}
        </p>
      </header>

      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col">
          {messages.map((message) => (
            <div key={message.id}>
              <ChatMessage
                message={message}
                language={language || 'english'}
                onSuggestionClick={handleSuggestionClick}
                onActionClick={handleActionClick}
              />
              {message.showLanguageSelect && (
                <LanguageSelector onLanguageSelect={handleLanguageSelect} />
              )}
              {message.showCategories && language && (
                <CategorySelector 
                  language={language} 
                  onCategorySelect={handleCategorySelect} 
                />
              )}
              {message.diagnosis && language && (
                <DiagnosisResult 
                  diagnosis={message.diagnosis} 
                  language={language}
                />
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {language && (
        <>
          <SelectedSymptoms
            symptoms={symptoms}
            language={language}
            onRemove={handleRemoveSymptom}
            onContinue={handleContinue}
          />
          <ChatInput onSend={handleSendMessage} />
        </>
      )}
    </div>
  );
}

export default App;