import { useTranslation } from 'react-i18next'
import SectionLayout from '../components/SectionLayout'
import TimelineItem from '../components/TimelineItem'
import { experience } from '../data/experience'

function Experience() {
  const { t } = useTranslation()

  return (
    <SectionLayout
      id="experiencia"
      label={t('experience.label')}
      className="pb-[clamp(72px,9vw,120px)]"
    >
      <ul>
        {experience.map((entry) => (
          <TimelineItem key={entry.id} entry={entry} />
        ))}
      </ul>
    </SectionLayout>
  )
}

export default Experience
