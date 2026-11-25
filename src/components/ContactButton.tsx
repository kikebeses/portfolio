import { motion } from 'framer-motion'
import type { RefObject } from 'react'
import { useTranslation } from 'react-i18next'
import { useMagnetic } from '../hooks/useMagnetic'

interface ContactButtonProps {
  /** Shared with the popover, which needs the button to manage focus and outside clicks. */
  triggerRef: RefObject<HTMLButtonElement | null>
  isOpen: boolean
  onToggle: () => void
  /** Id of the contact panel it opens. */
  panelId: string
}

/** Header "Contact" button that opens and closes the contact panel. */
function ContactButton({ triggerRef, isOpen, onToggle, panelId }: ContactButtonProps) {
  const { t } = useTranslation()
  const magnetic = useMagnetic(triggerRef)

  return (
    <motion.button
      ref={magnetic.ref}
      style={magnetic.style}
      type="button"
      onClick={onToggle}
      aria-expanded={isOpen}
      aria-controls={isOpen ? panelId : undefined}
      className="ml-1 cursor-pointer rounded-full bg-btn-bg px-4 py-2.5 text-xs font-medium text-btn-fg transition-[background-color,box-shadow] duration-350 ease-soft hover:liquid-glass-dark"
    >
      {t('header.contact')}
    </motion.button>
  )
}

export default ContactButton
