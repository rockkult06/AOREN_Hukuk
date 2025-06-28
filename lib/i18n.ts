import { tr } from '../locales/tr';
import { en } from '../locales/en';
import { de } from '../locales/de';

export type Language = 'tr' | 'en' | 'de';

export const languages: Record<Language, string> = {
  tr: 'Türkçe',
  en: 'English',
  de: 'Deutsch',
};

export const defaultLanguage: Language = 'tr';

export const translations = {
  tr,
  en,
  de,
};

export type TranslationKey = keyof typeof tr;

export function getTranslation(lang: Language) {
  return translations[lang];
}

export function isValidLanguage(lang: string): lang is Language {
  return lang in languages;
} 