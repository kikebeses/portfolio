import { Check, Copy } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { CONTACT_EMAIL } from '../data/contact'

/** How long the "copied" confirmation stays visible, in milliseconds. */
const CONFIRMATION_TIME = 2000

/** Copies the contact email to the clipboard and confirms it for a moment. */
function CopyEmailButton() {
  const { t } = useTranslation()
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) {
      return
    }

    const timer = setTimeout(() => setCopied(false), CONFIRMATION_TIME)
    return () => clearTimeout(timer)
  }, [copied])

  async function copy() {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL)
      setCopied(true)
    } catch {
      // Clipboard unavailable or denied: the address is still visible in the panel.
    }
  }

  const Icon = copied ? Check : Copy

  return (
    <>
      <button
        type="button"
        onClick={copy}
        aria-label={t(copied ? 'header.emailCopied' : 'header.copyEmail')}
        className={`grid size-9 shrink-0 cursor-pointer place-items-center rounded-full transition-[background-color,box-shadow,color] duration-350 ease-soft hover:liquid-glass ${copied ? 'text-accent-ink' : 'text-muted-2 hover:text-ink'}`}
      >
        <Icon size={16} strokeWidth={1.75} aria-hidden="true" />
      </button>
      {/* Announces the confirmation to screen readers */}
      <span role="status" className="sr-only">
        {copied ? t('header.emailCopied') : ''}
      </span>
    </>
  )
}

export default CopyEmailButton
