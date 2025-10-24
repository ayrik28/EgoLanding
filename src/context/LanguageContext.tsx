import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: 'fa' | 'en';
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<'fa' | 'en'>('fa');

  useEffect(() => {
    const saved = localStorage.getItem('language') as 'fa' | 'en' | null;
    if (saved) {
      setLanguage(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'fa' ? 'en' : 'fa');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
