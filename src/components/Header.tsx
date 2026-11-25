import { AnimatePresence } from 'framer-motion'
import { useId, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { usePopover } from '../hooks/usePopover'
import ContactButton from './ContactButton'
import ContactPanel from './ContactPanel'
import LanguageToggle from './LanguageToggle'
import NavLink from './NavLink'
import ThemeToggle from './ThemeToggle'

function Header() {
  const { t } = useTranslation()
  const contactTriggerRef = useRef<HTMLButtonElement>(null)
  const contact = usePopover<HTMLDivElement>(contactTriggerRef)
  const contactPanelId = useId()

  return (
    <header className="fixed inset-x-0 top-5 z-30 flex justify-center px-3">
      {/*
       * The contact panel is a sibling of the nav, not a child: the nav's own
       * backdrop-filter would stop the panel from blurring the page behind it.
       */}
      <div className="relative">
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
          <ContactButton
            triggerRef={contactTriggerRef}
            isOpen={contact.isOpen}
            onToggle={contact.toggle}
            panelId={contactPanelId}
          />
        </nav>
        <AnimatePresence>
          {contact.isOpen && (
            <ContactPanel id={contactPanelId} ref={contact.panelRef} onNavigate={contact.close} />
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Header
