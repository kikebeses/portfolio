import 'i18next'
import type es from '../locales/es.json'

// Type-safe translation keys: t('...') only accepts keys that exist in es.json.
declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation'
    resources: {
      translation: typeof es
    }
  }
}
