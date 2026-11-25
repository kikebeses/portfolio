import type { ReactNode } from 'react'

interface SectionLabelProps {
  children: ReactNode
  /** Use `h2` when the label is the section's only title. */
  as?: 'p' | 'h2'
  id?: string
  className?: string
}

/** Numbered section label from the design, e.g. "04 — Projects". */
function SectionLabel({ children, as: Tag = 'p', id, className = '' }: SectionLabelProps) {
  return (
    <Tag id={id} className={`font-serif text-md tracking-label text-muted-2 italic ${className}`}>
      {children}
    </Tag>
  )
}

export default SectionLabel
