import { useTranslation } from 'react-i18next'
import FillText from '../components/FillText'
import SectionLayout from '../components/SectionLayout'

function About() {
  const { t } = useTranslation()

  return (
    <SectionLayout
      id="sobre-mi"
      label={t('about.label')}
      className="py-[clamp(96px,14vw,180px)]"
      contentClassName="max-w-225"
    >
      <FillText>{t('about.text')}</FillText>
    </SectionLayout>
  )
}

export default About
