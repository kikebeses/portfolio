import { useTranslation } from 'react-i18next'
import ContentSheet from './components/ContentSheet'
import Header from './components/Header'
import Hero from './sections/Hero'
import Projects from './sections/Projects'

function App() {
  const { t } = useTranslation()

  return (
    <div id="top" className="relative min-h-dvh overflow-x-clip text-ink">
      <Header />
      <main>
        <Hero />
        <ContentSheet>
          {/* Placeholder until the about, experience and education sections are built */}
          <p className="py-[clamp(96px,14vw,180px)] text-center text-heading font-medium">
            {t('app.placeholder')}
          </p>
          <Projects />
        </ContentSheet>
      </main>
    </div>
  )
}

export default App
