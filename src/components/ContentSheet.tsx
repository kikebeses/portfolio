import type { ReactNode } from 'react'

interface ContentSheetProps {
  children: ReactNode
}

/** Rounded sheet that holds the page sections and slides up over the sticky hero. */
function ContentSheet({ children }: ContentSheetProps) {
  return (
    <div className="relative z-10 rounded-t-sheet bg-surface shadow-sheet transition-colors duration-400">
      <div className="mx-auto max-w-page px-gutter">{children}</div>
    </div>
  )
}

export default ContentSheet
