import { useTranslation } from 'react-i18next'

function App() {
  const { t } = useTranslation()

  return (
    <main className="flex min-h-dvh items-center justify-center bg-surface p-4 text-ink">
      <h1 className="text-2xl font-semibold">{t('app.placeholder')}</h1>
    </main>
  )
}

export default App
