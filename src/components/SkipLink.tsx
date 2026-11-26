import { useTranslation } from 'react-i18next'

interface SkipLinkProps {
  /** Id of the element to jump to. */
  targetId: string
}

/** Keyboard shortcut past the header: kept above the viewport until it receives focus with Tab. */
function SkipLink({ targetId }: SkipLinkProps) {
  const { t } = useTranslation()

  return (
    <a
      href={`#${targetId}`}
      // Below the header until there is room beside the centred pill (lg)
      className="fixed top-24 left-3 z-50 -translate-y-50 rounded-full lg:top-5 lg:-translate-y-30 px-4 py-2.5 text-sm font-medium text-ink liquid-glass focus:translate-y-0"
    >
      {t('common.skipToContent')}
    </a>
  )
}

export default SkipLink
