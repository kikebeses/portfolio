import type { LocalizedText } from './i18n'

export interface ProjectImage {
  src: string
  alt: LocalizedText
}

export interface Project {
  id: string
  title: LocalizedText
  description: LocalizedText
  /** Public site; its domain is shown on the card. */
  url: string
  technologies: string[]
  /** Screenshot of the project. Without one, the card shows a placeholder. */
  image?: ProjectImage
}
