import React, { createContext, useContext, useState } from 'react';
import { translations } from './translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [langCode, setLangCode] = useState('DE'); // Default DE (Deutschland)

  const t = translations[langCode] || translations.DE;

  return (
    <LanguageContext.Provider value={{ langCode, setLangCode, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
