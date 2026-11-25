import { useTranslation } from 'react-i18next'
import { useLanguage } from '../hooks/useLanguage'
import type { TimelineEntry } from '../types/timeline'
import Reveal from './Reveal'

interface TimelineItemProps {
  entry: TimelineEntry
}

/** Experience or education row. Renders a list item: place it inside a <ul>. */
function TimelineItem({ entry }: TimelineItemProps) {
  const { t } = useTranslation()
  const { language } = useLanguage()

  return (
    <li>
      <Reveal className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] gap-x-12 gap-y-3 border-t border-line-2 py-8">
        <p className="font-serif text-base text-muted-2 italic">{entry.period[language]}</p>
        <div className="col-span-2 flex min-w-0 flex-col gap-2.5">
          <h3 className="text-title font-medium">{entry.title[language]}</h3>
          <p className="text-base text-accent-ink">
            {entry.organization}
            {entry.location && ` · ${entry.location}`}
            {entry.link && (
              <>
                {' · '}
                <a
                  href={entry.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-3"
                >
                  {entry.link.label}
                  <span className="sr-only"> {t('common.opensInNewTab')}</span>
                </a>
              </>
            )}
          </p>
          {entry.description && (
            <p className="mt-1.5 max-w-155 text-base leading-copy text-pretty text-muted">
              {entry.description[language]}
            </p>
          )}
        </div>
      </Reveal>
    </li>
  )
}

export default TimelineItem
