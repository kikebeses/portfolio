import { useTranslation } from 'react-i18next'
import ContentSheet from './components/ContentSheet'
import Header from './components/Header'
import Hero from './sections/Hero'

function App() {
  const { t } = useTranslation()

  return (
    <div id="top" className="relative min-h-dvh overflow-x-clip text-ink">
      <Header />
      <main>
        <Hero />
        <ContentSheet>
          {/* Placeholder until the sections are built in the next phases */}
          <p className="flex min-h-dvh items-center justify-center text-heading font-medium">
            {t('app.placeholder')}
          </p>
        </ContentSheet>
      </main>
    </div>
  )
}

export default App
