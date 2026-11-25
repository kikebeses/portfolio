import type { ReactNode } from 'react'

interface TechBadgeProps {
  children: ReactNode
}

/** Technology pill. Renders a list item: place it inside a <ul>. */
function TechBadge({ children }: TechBadgeProps) {
  return (
    <li className="rounded-full border border-line-3 bg-badge px-3 py-1.5 font-serif text-md text-muted italic">
      {children}
    </li>
  )
}

export default TechBadge
