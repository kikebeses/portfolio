import { useTranslation } from 'react-i18next'
import { useCardGlow } from '../hooks/useCardGlow'
import { useLanguage } from '../hooks/useLanguage'
import type { Project } from '../types/project'
import ProjectLink from './ProjectLink'
import ProjectMedia from './ProjectMedia'
import TechBadge from './TechBadge'

interface ProjectCardProps {
  project: Project
}

function getDomain(url: string): string {
  return new URL(url).hostname.replace(/^www\./, '')
}

function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useTranslation()
  const { language } = useLanguage()
  const glow = useCardGlow()
  const domain = getDomain(project.url)
  const title = project.title[language]

  return (
    // The 1px padding over the outer background draws the (glowing) card border
    <article
      onPointerMove={glow.onPointerMove}
      onPointerLeave={glow.onPointerLeave}
      className="rounded-card p-px shadow-card glow-border"
    >
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,360px),1fr))] gap-3.5 rounded-card-inner bg-card p-3.5">
        <ProjectMedia image={project.image} domain={domain} />
        <div className="flex flex-col gap-4.5 p-[clamp(16px,3vw,36px)]">
          <p className="font-serif text-base text-accent-ink italic">{domain}</p>
          <h3 className="text-project font-medium">{title}</h3>
          <p className="max-w-100 text-lg leading-copy text-pretty text-muted-2">
            {project.description[language]}
          </p>
          <ul aria-label={t('projects.technologies')} className="flex flex-wrap gap-1.5">
            {project.technologies.map((technology) => (
              <TechBadge key={technology}>{technology}</TechBadge>
            ))}
          </ul>
          <ProjectLink href={project.url} title={title} />
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
