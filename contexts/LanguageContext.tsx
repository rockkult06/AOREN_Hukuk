"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'tr' | 'en' | 'de'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
  children: ReactNode
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('de')
  const [translations, setTranslations] = useState<any>({})

  useEffect(() => {
    // Load translations based on current language
    const loadTranslations = async () => {
      try {
        const response = await fetch(`/locales/${language}.json`)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setTranslations(data)
      } catch (error) {
        console.error('Error loading translations:', error)
        // Fallback to Turkish if loading fails
        if (language !== 'tr') {
          try {
            const fallbackResponse = await fetch('/locales/tr.json')
            const fallbackData = await fallbackResponse.json()
            setTranslations(fallbackData)
          } catch (fallbackError) {
            console.error('Error loading fallback translations:', fallbackError)
          }
        }
      }
    }

    loadTranslations()
  }, [language])

  const t = (key: string): string => {
    const keys = key.split('.')
    let value = translations
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        return key // Return key if translation not found
      }
    }
    
    return typeof value === 'string' ? value : key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 