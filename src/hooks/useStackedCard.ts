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
/** Space (px) left below a card taller than the screen once it sticks. */
const BOTTOM_GAP = 24

/**
 * Stacked cards effect from the design: each card sticks at `preferredTop` and,
 * as the next card slides over it, shrinks, darkens and blurs slightly. Spread
 * `ref` and `style` onto the sticky card wrapper; the next card must be its next
 * sibling.
 */
export function useStackedCard(enabled: boolean, preferredTop: number) {
  const ref = useRef<HTMLDivElement>(null)
  const top = useMotionValue(preferredTop)
  const progress = useMotionValue(0)
  const reduceMotion = useReducedMotion()
  const active = enabled && !reduceMotion
  const { scrollY } = useScroll()

  // A card taller than the space below `preferredTop` (phones) would be covered
  // by the next one before its bottom, and its link, ever scrolled into view.
  // Such a card sticks higher instead: only once it has been seen in full, with
  // its bottom resting just above the bottom of the screen.
  const fitTop = useCallback(() => {
    const card = ref.current
    if (card) {
      top.set(Math.min(preferredTop, window.innerHeight - card.offsetHeight - BOTTOM_GAP))
    }
  }, [preferredTop, top])

  useEffect(() => {
    const card = ref.current
    if (!enabled || !card) {
      return
    }

    fitTop()
    // The card height changes with the width, the language and the fonts, and
    // the screen height with the mobile browser toolbars
    const observer = new ResizeObserver(fitTop)
    observer.observe(card)
    window.addEventListener('resize', fitTop)
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', fitTop)
    }
  }, [enabled, fitTop])

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

  return { ref, style: active ? { top, scale, filter } : { top } }
}
