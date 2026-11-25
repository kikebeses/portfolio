import { useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const FILLED = '100% 100%, 100% 100%'

/**
 * "Text fill" effect from the design: the text turns from the fill-base colour
 * to ink while it scrolls through the viewport. It starts when the block's top
 * reaches 80% of the viewport and completes when its bottom reaches the middle.
 *
 * Put `ref` on the block and `style` on an inline element inside it that paints
 * two background layers (ink over fill-base) clipped to the text.
 */
export function useTextFill<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.5'] })
  const backgroundSize = useTransform(
    scrollYProgress,
    (p) => `${(p * 100).toFixed(2)}% 100%, 100% 100%`,
  )

  return { ref, style: { backgroundSize: reduceMotion ? FILLED : backgroundSize } }
}
