import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { CONTACT_EMAIL } from '../data/contact'
import { useMagnetic } from '../hooks/useMagnetic'

// For now it opens the mail client, as in the design; its final behaviour is still to be decided.
function ContactButton() {
  const { t } = useTranslation()
  const magnetic = useMagnetic<HTMLAnchorElement>()

  return (
    <motion.a
      ref={magnetic.ref}
      style={magnetic.style}
      href={`mailto:${CONTACT_EMAIL}`}
      className="ml-1 rounded-full bg-btn-bg px-4 py-2.5 text-xs font-medium text-btn-fg transition-[background-color,box-shadow] duration-350 ease-soft hover:liquid-glass-dark"
    >
      {t('header.contact')}
    </motion.a>
  )
}

export default ContactButton
