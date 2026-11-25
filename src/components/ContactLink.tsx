import { ArrowUpRight } from 'lucide-react'
import type { ComponentType } from 'react'
import { useTranslation } from 'react-i18next'
import ContactInfo from './ContactInfo'

interface ContactLinkProps {
  href: string
  icon: ComponentType<{ size?: number }>
  label: string
  /** Profile URL shown under the label. */
  detail: string
  onClick?: () => void
}

/** Contact panel row that opens a profile (LinkedIn, GitHub) in a new tab. */
function ContactLink({ href, icon, label, detail, onClick }: ContactLinkProps) {
  const { t } = useTranslation()

  return (
    <a
      href={href}
      onClick={onClick}
      target="_blank"
      rel="noopener noreferrer"
      className="flex min-w-0 items-center gap-3 rounded-button px-2.5 py-2 text-ink transition-[background-color,box-shadow] duration-350 ease-soft hover:liquid-glass"
    >
      <ContactInfo icon={icon} label={label} detail={detail} />
      <ArrowUpRight
        size={16}
        strokeWidth={1.75}
        aria-hidden="true"
        className="ml-auto shrink-0 text-muted-2"
      />
      <span className="sr-only">{t('common.opensInNewTab')}</span>
    </a>
  )
}

export default ContactLink
