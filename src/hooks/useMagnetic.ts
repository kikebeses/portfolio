import { animate, useMotionValue, useReducedMotion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { EASE_SOFT } from '../motion'

/** How far from the element's edges (px) the pointer starts pulling it. */
const RANGE = 36
/** Fraction of the pointer's distance to the centre that the element moves. */
const STRENGTH = 0.05

/**
 * Magnetic effect from the design: the element drifts towards a nearby mouse pointer.
 * Spread the returned `ref` and `style` onto a motion element.
 */
export function useMagnetic<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (reduceMotion) {
      return
    }

    const transition = { duration: 0.35, ease: EASE_SOFT }
    let target = { x: 0, y: 0 }

    function onPointerMove(event: PointerEvent) {
      // Touch drags would drag the buttons around: only follow a real pointer.
      if (event.pointerType === 'touch' || !ref.current) {
        return
      }

      const rect = ref.current.getBoundingClientRect()
      const dx = event.clientX - (rect.left + rect.width / 2)
      const dy = event.clientY - (rect.top + rect.height / 2)
      const isNear = Math.abs(dx) < rect.width / 2 + RANGE && Math.abs(dy) < rect.height / 2 + RANGE
      const next = isNear ? { x: dx * STRENGTH, y: dy * STRENGTH } : { x: 0, y: 0 }

      if (next.x === target.x && next.y === target.y) {
        return
      }

      target = next
      animate(x, next.x, transition)
      animate(y, next.y, transition)
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true })
    return () => window.removeEventListener('pointermove', onPointerMove)
  }, [reduceMotion, x, y])

  return { ref, style: { x, y } }
}
