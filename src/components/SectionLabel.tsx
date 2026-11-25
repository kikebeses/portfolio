import type { ReactNode } from 'react'

interface SectionLabelProps {
  children: ReactNode
  className?: string
}

/** Numbered section label from the design, e.g. "04 — Projects". */
function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <p className={`font-serif text-md tracking-label text-muted-2 italic ${className}`}>{children}</p>
  )
}

export default SectionLabel
