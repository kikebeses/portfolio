import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { EASE_SOFT } from '../motion'

interface RevealProps {
  children: ReactNode
  /** Delay before the animation starts, in milliseconds. */
  delay?: number
  className?: string
}

/** Fades, lifts and unblurs its content the first time it scrolls into view. */
function Reveal({ children, delay = 0, className }: RevealProps) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 48, filter: 'blur(8px)' }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        // A leftover filter would stop children's backdrop-filter from seeing the page behind.
        transitionEnd: { filter: 'none' },
      }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 1.1, delay: delay / 1000, ease: EASE_SOFT }}
    >
      {children}
    </motion.div>
  )
}

export default Reveal
