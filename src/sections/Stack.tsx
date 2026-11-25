import { useTranslation } from 'react-i18next'
import FillText from '../components/FillText'
import Reveal from '../components/Reveal'
import SectionLayout from '../components/SectionLayout'
import { skills } from '../data/skills'

/** Same visual weight as About: large paragraph with the fill effect, then the skills. */
function Stack() {
  const { t } = useTranslation()

  return (
    <SectionLayout
      id="stack"
      label={t('stack.label')}
      className="pb-[clamp(72px,9vw,120px)]"
      contentClassName="max-w-225"
    >
      <FillText>{t('stack.text')}</FillText>
      <Reveal className="mt-12">
        <ul
          aria-label={t('stack.skillsLabel')}
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

export default Stack
