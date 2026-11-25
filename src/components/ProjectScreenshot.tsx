import { useTranslation } from 'react-i18next'
import { useLanguage } from '../hooks/useLanguage'
import type { ProjectImage } from '../types/project'

interface ProjectScreenshotProps {
  image?: ProjectImage
  /** Shown on the placeholder while there is no screenshot. */
  domain: string
}

const FRAME = 'min-h-[clamp(240px,34vw,460px)] rounded-media border border-line-2'

function ProjectScreenshot({ image, domain }: ProjectScreenshotProps) {
  const { t } = useTranslation()
  const { language } = useLanguage()

  if (image) {
    return (
      <img
        src={image.src}
        alt={image.alt[language]}
        loading="lazy"
        decoding="async"
        className={`${FRAME} size-full object-cover`}
      />
    )
  }

  // Striped placeholder from the design, until the screenshot is added
  return (
    <div
      aria-hidden="true"
      className={`${FRAME} flex items-center justify-center bg-[repeating-linear-gradient(135deg,var(--stripe-a)_0_10px,var(--stripe-b)_10px_20px)] font-serif text-md text-faint italic`}
    >
      {t('projects.screenshotPlaceholder', { domain })}
    </div>
  )
}

export default ProjectScreenshot
