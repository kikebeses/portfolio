import { useTranslation } from 'react-i18next'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'
import SectionLabel from '../components/SectionLabel'
import { projects } from '../data/projects'

function Projects() {
  const { t } = useTranslation()

  return (
    <section id="proyectos" aria-labelledby="projects-heading" className="pb-30">
      <Reveal className="mb-14 flex flex-wrap items-end justify-between gap-4 border-t border-line-2 pt-14">
        <div>
          <SectionLabel className="mb-4.5">{t('projects.label')}</SectionLabel>
          <h2 id="projects-heading" className="text-heading font-medium">
            {t('projects.heading')}
          </h2>
        </div>
      </Reveal>
      <div className="flex flex-col">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
