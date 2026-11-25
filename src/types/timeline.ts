import type { LocalizedText } from './i18n'

/** An experience or education entry. */
export interface TimelineEntry {
  id: string
  /** Dates, or a label such as "Own project". */
  period: LocalizedText
  title: LocalizedText
  organization: string
  /** Shown after the organization: a city... */
  location?: string
  /** ...or a link, such as the project's site. */
  link?: { label: string; url: string }
  description?: LocalizedText
}
