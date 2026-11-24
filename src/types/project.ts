import type { LocalizedText } from './i18n'

// Minimal shape for now; fields will be completed when the design is implemented.
export interface Project {
  id: string
  title: LocalizedText
  description: LocalizedText
}
