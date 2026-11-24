import { useTranslation } from 'react-i18next'

function App() {
  const { t } = useTranslation()

  return (
    <main className="flex min-h-dvh items-center justify-center p-4">
      <h1 className="text-2xl font-semibold">{t('app.placeholder')}</h1>
    </main>
  )
}

export default App
