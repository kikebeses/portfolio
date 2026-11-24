export type Language = 'es' | 'en'

/** Text available in every supported language, e.g. `title: { es, en }`. */
export type LocalizedText = Record<Language, string>
