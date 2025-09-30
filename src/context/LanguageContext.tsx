'use client'

import { createContext, useContext, useEffect, useMemo, useState } from 'react'

export type Language = 'en' | 'es'

interface LanguageContextValue {
  language: Language
  setLanguage: (language: Language) => void
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('es')

  useEffect(() => {
    const storedLanguage = typeof window !== 'undefined'
      ? (window.localStorage.getItem('portfolio-language') as Language | null)
      : null

    if (storedLanguage) {
      setLanguageState(storedLanguage)
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('portfolio-language', language)
      document.documentElement.lang = language
    }
  }, [language])

  const setLanguage = (lang: Language) => setLanguageState(lang)

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'es' ? 'en' : 'es'))
  }

  const value = useMemo(
    () => ({ language, setLanguage, toggleLanguage }),
    [language]
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
