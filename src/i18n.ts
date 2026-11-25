import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import es from './locales/es.json'
import type { Language } from './types/i18n'

export const SUPPORTED_LANGUAGES: readonly Language[] = ['es', 'en']
export const DEFAULT_LANGUAGE: Language = 'es'

const STORAGE_KEY = 'language'

// `satisfies` in both directions makes the build fail if es.json and en.json
// ever get out of sync (a key present in one file but missing in the other).
const resources = {
  es: { translation: es satisfies typeof en },
  en: { translation: en satisfies typeof es },
}

export function isLanguage(value: unknown): value is Language {
  return typeof value === 'string' && SUPPORTED_LANGUAGES.some((language) => language === value)
}

function readStoredLanguage(): Language | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return isLanguage(stored) ? stored : null
  } catch {
    // Storage can be unavailable (private mode, blocked site data).
    return null
  }
}

function detectBrowserLanguage(): Language | null {
  const tags = navigator.languages.length > 0 ? navigator.languages : [navigator.language]

  for (const tag of tags) {
    const base = tag.toLowerCase().split('-')[0]
    if (isLanguage(base)) {
      return base
    }
  }

  return null
}

/** Changes the active language and remembers the choice for future visits. */
export function changeLanguage(language: Language): Promise<unknown> {
  try {
    localStorage.setItem(STORAGE_KEY, language)
  } catch {
    // Not persisting is acceptable: the language still changes for this visit.
  }

  return i18n.changeLanguage(language)
}

i18n.on('languageChanged', (language) => {
  document.documentElement.lang = language
  document.title = i18n.t('meta.title')
})

void i18n.use(initReactI18next).init({
  resources,
  // Saved choice first, then the browser language on a first visit, then Spanish.
  lng: readStoredLanguage() ?? detectBrowserLanguage() ?? DEFAULT_LANGUAGE,
  fallbackLng: DEFAULT_LANGUAGE,
  supportedLngs: [...SUPPORTED_LANGUAGES],
  // Resources are bundled, so initialise synchronously before the first render.
  initAsync: false,
  interpolation: {
    // React already escapes rendered values.
    escapeValue: false,
  },
})

export default i18n
