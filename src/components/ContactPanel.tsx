import { motion, useReducedMotion } from 'framer-motion'
import { Mail } from 'lucide-react'
import type { Ref } from 'react'
import { useTranslation } from 'react-i18next'
import { CONTACT_EMAIL, GITHUB_URL, LINKEDIN_URL } from '../data/contact'
import { EASE_SOFT } from '../motion'
import ContactInfo from './ContactInfo'
import ContactLink from './ContactLink'
import CopyEmailButton from './CopyEmailButton'
import GithubIcon from './GithubIcon'
import LinkedinIcon from './LinkedinIcon'

interface ContactPanelProps {
  id: string
  ref?: Ref<HTMLDivElement>
  /** Called when a link is followed, to close the panel. */
  onNavigate: () => void
}

/** "linkedin.com/in/kikebeses" from "https://www.linkedin.com/in/kikebeses" */
function displayUrl(url: string): string {
  return url.replace(/^https?:\/\/(www\.)?/, '')
}

/** Glass panel under the header with the ways to get in touch. */
function ContactPanel({ id, ref, onNavigate }: ContactPanelProps) {
  const { t } = useTranslation()
  const reduceMotion = useReducedMotion()
  const hidden = reduceMotion
    ? { opacity: 0 }
    : { opacity: 0, y: -8, scale: 0.97, filter: 'blur(6px)' }

  return (
    <motion.div
      id={id}
      ref={ref}
      role="group"
      aria-label={t('header.contactPanelLabel')}
      initial={hidden}
      animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      exit={hidden}
      transition={{ duration: 0.3, ease: EASE_SOFT }}
      className="absolute top-full right-0 mt-2 w-[min(20rem,calc(100vw-1.5rem))] origin-top-right rounded-media border border-glass-border bg-surface/80 p-1.5 shadow-glass backdrop-blur-glass backdrop-saturate-180"
    >
      <ul className="flex flex-col gap-0.5">
        {/* The email is not a link: it can only be copied */}
        <li className="flex min-w-0 items-center gap-3 py-2 pr-0.5 pl-2.5 text-ink">
          <ContactInfo icon={Mail} label={t('header.email')} detail={CONTACT_EMAIL} />
          <span className="ml-auto">
            <CopyEmailButton />
          </span>
        </li>
        <li>
          <ContactLink
            href={LINKEDIN_URL}
            icon={LinkedinIcon}
            label={t('hero.linkedin')}
            detail={displayUrl(LINKEDIN_URL)}
            onClick={onNavigate}
          />
        </li>
        <li>
          <ContactLink
            href={GITHUB_URL}
            icon={GithubIcon}
            label={t('hero.github')}
            detail={displayUrl(GITHUB_URL)}
            onClick={onNavigate}
          />
        </li>
      </ul>
    </motion.div>
  )
}

export default ContactPanel
