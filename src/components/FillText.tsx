import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { useTextFill } from '../hooks/useTextFill'

interface FillTextProps {
  children: ReactNode
}

/** Large paragraph that fills with colour line by line as it scrolls into view. */
function FillText({ children }: FillTextProps) {
  const fill = useTextFill<HTMLParagraphElement>()

  return (
    <p ref={fill.ref} className="text-lead text-pretty">
      {/* Inline on purpose: the fill flows line by line across the wrapped text */}
      <motion.span
        style={fill.style}
        className="bg-[linear-gradient(var(--ink),var(--ink)),linear-gradient(var(--fill-base),var(--fill-base))] bg-clip-text bg-no-repeat text-transparent"
      >
        {children}
      </motion.span>
    </p>
  )
}

export default FillText
