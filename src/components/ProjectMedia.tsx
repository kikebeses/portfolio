import { useTranslation } from 'react-i18next'
import { useLanguage } from '../hooks/useLanguage'
import type { ProjectImage } from '../types/project'

interface ProjectMediaProps {
  image?: ProjectImage
  /** Shown on the placeholder while there is no image. */
  domain: string
}

const FRAME = 'min-h-[clamp(240px,34vw,460px)] rounded-media border border-line-2'

/** Image area of a project card: screenshot, logo on white, or a placeholder. */
function ProjectMedia({ image, domain }: ProjectMediaProps) {
  const { t } = useTranslation()
  const { language } = useLanguage()

  if (image?.kind === 'screenshot') {
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

  if (image?.kind === 'logo') {
    return (
      <div className={`${FRAME} flex items-center justify-center bg-white p-8`}>
        <img
          src={image.src}
          alt={image.alt[language]}
          loading="lazy"
          decoding="async"
          className="h-auto w-full max-w-90"
        />
      </div>
    )
  }

  // Striped placeholder from the design, for projects without an image yet
  return (
    <div
      aria-hidden="true"
      className={`${FRAME} flex items-center justify-center bg-[repeating-linear-gradient(135deg,var(--stripe-a)_0_10px,var(--stripe-b)_10px_20px)] font-serif text-md text-faint italic`}
    >
      {t('projects.screenshotPlaceholder', { domain })}
    </div>
  )
}

export default ProjectMedia
