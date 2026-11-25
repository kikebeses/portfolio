import { useTranslation } from 'react-i18next'
import { changeLanguage, DEFAULT_LANGUAGE, isLanguage } from '../i18n'
import type { Language } from '../types/i18n'

export function useLanguage() {
  // useTranslation re-renders the component whenever the language changes.
  const { i18n } = useTranslation()
  const language: Language = isLanguage(i18n.resolvedLanguage)
    ? i18n.resolvedLanguage
    : DEFAULT_LANGUAGE

  function toggleLanguage() {
    void changeLanguage(language === 'es' ? 'en' : 'es')
  }

  return { language, toggleLanguage }
}
