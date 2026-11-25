import { AnimatePresence, motion } from 'framer-motion'
import { useId } from 'react'
import { useTranslation } from 'react-i18next'
import { useMagnetic } from '../hooks/useMagnetic'
import { usePopover } from '../hooks/usePopover'
import ContactPanel from './ContactPanel'

/** Header "Contact" button: opens a panel with email, LinkedIn and GitHub. */
function ContactMenu() {
  const { t } = useTranslation()
  const magnetic = useMagnetic<HTMLButtonElement>()
  const popover = usePopover<HTMLDivElement>(magnetic.ref)
  const panelId = useId()

  return (
    <>
      <motion.button
        ref={magnetic.ref}
        style={magnetic.style}
        type="button"
        onClick={popover.toggle}
        aria-expanded={popover.isOpen}
        aria-controls={popover.isOpen ? panelId : undefined}
        className="ml-1 cursor-pointer rounded-full bg-btn-bg px-4 py-2.5 text-xs font-medium text-btn-fg transition-[background-color,box-shadow] duration-350 ease-soft hover:liquid-glass-dark"
      >
        {t('header.contact')}
      </motion.button>
      <AnimatePresence>
        {popover.isOpen && (
          <ContactPanel id={panelId} ref={popover.panelRef} onNavigate={popover.close} />
        )}
      </AnimatePresence>
    </>
  )
}

export default ContactMenu
