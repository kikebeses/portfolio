import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { useStackedCard } from '../hooks/useStackedCard'

interface StackedCardProps {
  index: number
  /** Only stack when there is more than one card. */
  enabled: boolean
  children: ReactNode
}

/** Distance from the viewport top where the first card sticks, and the step between cards. */
const STICKY_TOP = 104
const STICKY_STEP = 24

function StackedCard({ index, enabled, children }: StackedCardProps) {
  const stack = useStackedCard(enabled)

  if (!enabled) {
    return <div>{children}</div>
  }

  return (
    <motion.div
      ref={stack.ref}
      style={{ ...stack.style, top: STICKY_TOP + STICKY_STEP * index }}
      className="sticky origin-top"
    >
      {children}
    </motion.div>
  )
}

export default StackedCard
