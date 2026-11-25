import { useTranslation } from 'react-i18next'
import Reveal from '../components/Reveal'
import SectionLayout from '../components/SectionLayout'
import { skills } from '../data/skills'

function Stack() {
  const { t } = useTranslation()

  return (
    <SectionLayout
      id="stack"
      label={t('stack.label')}
      className="pb-[clamp(72px,9vw,120px)]"
      contentClassName="max-w-225"
    >
      <Reveal className="border-t border-line-2 pt-8">
        <p className="max-w-155 text-lg leading-copy text-pretty text-muted">{t('stack.text')}</p>
        <ul
          aria-label={t('stack.skillsLabel')}
          className="mt-8 flex flex-wrap gap-x-5.5 gap-y-2.5 font-serif text-base text-muted-2 italic"
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
