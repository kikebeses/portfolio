import { ArrowUpRight } from 'lucide-react'
import type { ComponentType } from 'react'
import { useTranslation } from 'react-i18next'

interface ContactLinkProps {
  href: string
  icon: ComponentType<{ size?: number }>
  label: string
  /** Address shown under the label, e.g. the email or the profile URL. */
  detail: string
  /** Opens in a new tab (profiles), as opposed to mailto links. */
  external?: boolean
  onClick?: () => void
  className?: string
}

/** Row of the contact panel: icon, label and address. */
function ContactLink({
  href,
  icon: Icon,
  label,
  detail,
  external = false,
  onClick,
  className = '',
}: ContactLinkProps) {
  const { t } = useTranslation()

  return (
    <a
      href={href}
      onClick={onClick}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`flex min-w-0 items-center gap-3 rounded-button px-2.5 py-2 text-ink transition-[background-color,box-shadow] duration-350 ease-soft hover:liquid-glass ${className}`}
    >
      <span className="grid size-9 shrink-0 place-items-center rounded-full bg-btn-bg text-btn-fg">
        <Icon size={16} />
      </span>
      <span className="flex min-w-0 flex-col">
        <span className="text-sm font-medium">{label}</span>
        <span className="truncate font-serif text-sm text-muted-2 italic">{detail}</span>
      </span>
      {external && (
        <>
          <ArrowUpRight
            size={16}
            strokeWidth={1.75}
            aria-hidden="true"
            className="ml-auto shrink-0 text-muted-2"
          />
          <span className="sr-only">{t('common.opensInNewTab')}</span>
        </>
      )}
    </a>
  )
}

export default ContactLink
