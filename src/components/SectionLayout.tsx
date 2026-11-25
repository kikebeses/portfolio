import type { ReactNode } from 'react'
import Reveal from './Reveal'
import SectionLabel from './SectionLabel'

interface SectionLayoutProps {
  id: string
  /** Numbered label, e.g. "01 — About". It is the section heading. */
  label: string
  /** Vertical padding of the section. */
  className?: string
  contentClassName?: string
  children: ReactNode
}

/**
 * Label + content layout shared by About, Experience and Education.
 * Stacked by default; from `wide` the label takes one column and the content three.
 */
function SectionLayout({ id, label, className = '', contentClassName = '', children }: SectionLayoutProps) {
  const headingId = `${id}-heading`

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`grid gap-x-16 gap-y-8 wide:grid-cols-4 ${className}`}
    >
      <Reveal>
        <SectionLabel as="h2" id={headingId}>
          {label}
        </SectionLabel>
      </Reveal>
      <div className={`min-w-0 wide:col-span-3 ${contentClassName}`}>{children}</div>
    </section>
  )
}

export default SectionLayout
