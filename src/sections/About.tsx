import { useTranslation } from 'react-i18next'
import Reveal from '../components/Reveal'
import SectionLayout from '../components/SectionLayout'
import { skills } from '../data/skills'

function About() {
  const { t } = useTranslation()

  return (
    <SectionLayout
      id="sobre-mi"
      label={t('about.label')}
      className="py-[clamp(96px,14vw,180px)]"
      contentClassName="max-w-225"
    >
      <p className="text-lead text-pretty">{t('about.text')}</p>
      <Reveal className="mt-12">
        <ul
          aria-label={t('about.skillsLabel')}
          className="flex flex-wrap gap-x-5.5 gap-y-2.5 font-serif text-base text-muted-2 italic"
        >
          {skills.map((skill, index) => (
            <li key={skill} className="flex gap-x-5.5">
              {index > 0 && (
                <span aria-hidden="true" className="text-sep">
                  /
                </span>
              )}
              {skill}
            </li>
          ))}
        </ul>
      </Reveal>
    </SectionLayout>
  )
}

export default About
