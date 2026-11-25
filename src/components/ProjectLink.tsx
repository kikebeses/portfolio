import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useMagnetic } from '../hooks/useMagnetic'

interface ProjectLinkProps {
  href: string
  /** Project name, so screen readers know which site the link opens. */
  title: string
}

/** "Visit site" button of a project card, with the magnetic effect. */
function ProjectLink({ href, title }: ProjectLinkProps) {
  const { t } = useTranslation()
  const magnetic = useMagnetic<HTMLAnchorElement>()

  return (
    <motion.a
      ref={magnetic.ref}
      style={magnetic.style}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t('projects.visitLabel', { title })}
      className="mt-auto flex items-center gap-2 self-start rounded-button border border-line bg-badge px-4.5 py-3 text-sm font-medium text-ink transition-[background-color,border-color,box-shadow,color] duration-350 ease-soft hover:border-transparent hover:text-accent-ink hover:liquid-glass"
    >
      {t('projects.visit')}
      <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden="true" />
    </motion.a>
  )
}

export default ProjectLink
