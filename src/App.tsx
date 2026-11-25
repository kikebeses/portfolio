import { useTranslation } from 'react-i18next'
import Header from './components/Header'

function App() {
  const { t } = useTranslation()

  return (
    <div id="top" className="relative min-h-dvh overflow-x-clip text-ink">
      <Header />
      <main className="flex min-h-dvh items-center justify-center bg-surface px-gutter">
        <h1 className="text-heading font-medium">{t('app.placeholder')}</h1>
      </main>
    </div>
  )
}

export default App
