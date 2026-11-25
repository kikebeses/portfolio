import { useTranslation } from 'react-i18next'

function App() {
  const { t } = useTranslation()

  return (
    <main className="flex min-h-dvh items-center justify-center bg-surface px-gutter text-ink">
      <h1 className="text-heading font-medium">{t('app.placeholder')}</h1>
    </main>
  )
}

export default App
