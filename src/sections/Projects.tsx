import { useTranslation } from 'react-i18next'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'
import SectionLabel from '../components/SectionLabel'
import StackedCard from '../components/StackedCard'
import { projects } from '../data/projects'

// The cards stack while scrolling once there is more than one project.
const isStacked = projects.length > 1

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
      <div className={`flex flex-col ${isStacked ? 'gap-[12vh]' : ''}`}>
        {projects.map((project, index) => (
          <StackedCard key={project.id} index={index} enabled={isStacked}>
            <ProjectCard project={project} />
          </StackedCard>
        ))}
      </div>
    </section>
  )
}

export default Projects
