import {
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion'
import { useCallback, useEffect, useRef } from 'react'

/** Distance (px) between a stuck card's top and the next card's top once covered. */
const STACK_OFFSET = 24
/** Fraction of the viewport the next card travels while covering this one. */
const COVER_DISTANCE = 0.7

/**
 * Stacked cards effect from the design: as the next card slides over this one,
 * this one shrinks, darkens and blurs slightly. Spread `ref` and `style` onto
 * the card wrapper; the next card must be its next sibling.
 */
export function useStackedCard(enabled: boolean) {
  const ref = useRef<HTMLDivElement>(null)
  const progress = useMotionValue(0)
  const reduceMotion = useReducedMotion()
  const active = enabled && !reduceMotion
  const { scrollY } = useScroll()

  // Stable across renders (it only reads the ref and the motion value), so the
  // resize listener below is not re-attached on every render.
  const update = useCallback(() => {
    const card = ref.current
    const next = card?.nextElementSibling
    if (!card || !next) {
      return
    }

    const gap = next.getBoundingClientRect().top - card.getBoundingClientRect().top - STACK_OFFSET
    const p = 1 - gap / (window.innerHeight * COVER_DISTANCE)
    progress.set(Math.min(Math.max(p, 0), 1))
  }, [progress])

  useMotionValueEvent(scrollY, 'change', () => {
    if (active) {
      update()
    }
  })

  useEffect(() => {
    if (!active) {
      return
    }

    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [active, update])

  const scale = useTransform(progress, (p) => 1 - 0.07 * p)
  const filter = useTransform(progress, (p) =>
    p > 0.001 ? `brightness(${(1 - 0.08 * p).toFixed(3)}) blur(${(1.5 * p).toFixed(2)}px)` : 'none',
  )

  return { ref, style: active ? { scale, filter } : undefined }
}
