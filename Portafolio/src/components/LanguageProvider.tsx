'use client'

import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { languages, translations, type Dictionary, type Language } from '@/lib/i18n'

type LanguageContextValue = { language: Language; t: Dictionary; toggleLanguage: () => void }

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('es')

  // El script del <head> ya fijó el idioma en <html lang>; lo adoptamos tras hidratar.
  useEffect(() => {
    const initial = document.documentElement.lang as Language
    if (languages.includes(initial)) setLanguage(initial)
  }, [])

  useEffect(() => {
    const t = translations[language]
    document.documentElement.lang = language
    document.title = t.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description)
  }, [language])

  const toggleLanguage = useCallback(() => {
    setLanguage((current) => {
      const next = current === 'es' ? 'en' : 'es'
      try { localStorage.setItem('portfolio-lang', next) } catch {}
      return next
    })
  }, [])

  return (
    <LanguageContext.Provider value={{ language, t: translations[language], toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage debe usarse dentro de LanguageProvider')
  return context
}
