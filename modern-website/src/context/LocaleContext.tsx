import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

export type Locale = 'de' | 'en';

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

/**
 * Stores the active site locale and persists it across refreshes.
 */
export const LocaleProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === 'undefined') {
      return 'de';
    }

    const stored = window.localStorage.getItem('locale');
    return stored === 'en' || stored === 'de' ? stored : 'de';
  });

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem('locale', locale);
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      setLocale: setLocaleState
    }),
    [locale]
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
};

export const useLocale = () => {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error('useLocale must be used within LocaleProvider');
  }

  return context;
};
