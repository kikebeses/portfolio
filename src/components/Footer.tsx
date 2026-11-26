import { useTranslation } from 'react-i18next'
import { CONTACT_EMAIL } from '../data/contact'

// Read once when the page loads, not on every render (rendering must stay pure)
const CURRENT_YEAR = new Date().getFullYear()

function Footer() {
  const { t } = useTranslation()

  return (
    // Outside <main> so it is the page's footer landmark; it continues the content sheet visually
    <footer className="relative z-10 bg-surface transition-colors duration-400">
      <div className="mx-auto max-w-page px-gutter">
        <div className="flex flex-wrap justify-between gap-3 border-t border-line-2 pt-8 pb-12 font-serif text-md text-faint italic">
          <p>{t('footer.copyright', { year: CURRENT_YEAR })}</p>
          {/* Plain text on purpose: the email never opens a mail app; one click selects it to copy */}
          <p className="select-all text-muted-2">{CONTACT_EMAIL}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
