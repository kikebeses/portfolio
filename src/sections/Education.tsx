import { useTranslation } from 'react-i18next'
import SectionLayout from '../components/SectionLayout'
import TimelineItem from '../components/TimelineItem'
import { education } from '../data/education'

function Education() {
  const { t } = useTranslation()

  return (
    <SectionLayout
      id="estudios"
      label={t('education.label')}
      className="pb-[clamp(96px,12vw,160px)]"
    >
      <ul>
        {education.map((entry) => (
          <TimelineItem key={entry.id} entry={entry} />
        ))}
      </ul>
    </SectionLayout>
  )
}

export default Education
