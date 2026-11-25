import type { ReactNode } from 'react'

interface NavLinkProps {
  href: string
  children: ReactNode
  /** Accessible name, for when the visible text is not descriptive (e.g. the logo). */
  label?: string
  className?: string
}

function NavLink({ href, children, label, className = '' }: NavLinkProps) {
  return (
    <a
      href={href}
      aria-label={label}
      className={`rounded-full px-3.5 py-2.25 transition-[background-color,box-shadow,color,scale] duration-350 ease-soft hover:scale-105 hover:text-ink hover:liquid-glass ${className}`}
    >
      {children}
    </a>
  )
}

export default NavLink
