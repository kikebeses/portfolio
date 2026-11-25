import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Reveal from '../components/Reveal'
import SectionLayout from '../components/SectionLayout'
import { skills } from '../data/skills'
import { useTextFill } from '../hooks/useTextFill'

function About() {
  const { t } = useTranslation()
  const fill = useTextFill<HTMLParagraphElement>()

  return (
    <SectionLayout
      id="sobre-mi"
      label={t('about.label')}
      className="py-[clamp(96px,14vw,180px)]"
      contentClassName="max-w-225"
    >
      <p ref={fill.ref} className="text-lead text-pretty">
        {/* Inline on purpose: the fill flows line by line across the wrapped text */}
        <motion.span
          style={fill.style}
          className="bg-[linear-gradient(var(--ink),var(--ink)),linear-gradient(var(--fill-base),var(--fill-base))] bg-clip-text bg-no-repeat text-transparent"
        >
          {t('about.text')}
        </motion.span>
      </p>
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
