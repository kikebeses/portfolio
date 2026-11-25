import { useTranslation } from 'react-i18next'
import LanguageToggle from './LanguageToggle'
import NavLink from './NavLink'
import ThemeToggle from './ThemeToggle'

function Header() {
  const { t } = useTranslation()

  return (
    <header className="fixed inset-x-0 top-5 z-30 flex justify-center px-3">
      <nav
        aria-label={t('header.navLabel')}
        className="flex items-center gap-1 rounded-full border border-glass-border bg-glass p-1.5 shadow-glass backdrop-blur-glass backdrop-saturate-180"
      >
        <NavLink
          href="#top"
          label={t('header.homeLabel')}
          className="font-serif text-base tracking-label text-ink italic"
        >
          {t('header.logo')}
        </NavLink>
        {/* The full pill does not fit on phones: section links appear from `sm` */}
        <NavLink href="#sobre-mi" className="hidden text-sm text-muted sm:block">
          {t('header.about')}
        </NavLink>
        <NavLink href="#proyectos" className="hidden text-sm text-muted sm:block">
          {t('header.projects')}
        </NavLink>
        <span aria-hidden="true" className="mx-1 h-5 w-px bg-line" />
        <LanguageToggle />
        <ThemeToggle />
      </nav>
    </header>
  )
}

export default Header
