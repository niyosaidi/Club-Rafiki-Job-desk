import React, { createContext, useState, useContext, ReactNode } from 'react';
import { locales } from '../i18n';

const defaultLanguage = 'en';

const LanguageContext = createContext({
  language: defaultLanguage,
  setLanguage: (lang: string) => {},
  t: locales[defaultLanguage],
});

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState(defaultLanguage);

  const value = {
    language,
    setLanguage,
    t: locales[language] || locales[defaultLanguage],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
