import { useReducedMotion, useScroll, useTransform } from 'framer-motion'

/**
 * Hero exit effect from the design: over the first screen of scroll the hero
 * rises, shrinks, blurs and fades while the content sheet covers it.
 * Returns motion styles, or `undefined` when the user prefers reduced motion.
 */
export function useHeroScroll() {
  const reduceMotion = useReducedMotion()
  const { scrollY } = useScroll()
  const progress = useTransform(scrollY, (value) =>
    Math.min(Math.max(value / window.innerHeight, 0), 1),
  )

  const y = useTransform(progress, (p) => -80 * p)
  const scale = useTransform(progress, (p) => 1 - 0.1 * p)
  const opacity = useTransform(progress, (p) => 1 - 0.7 * p)
  // At rest there must be no filter, or the buttons' backdrop blur would stop working.
  const filter = useTransform(progress, (p) => (p > 0.001 ? `blur(${(p * 10).toFixed(2)}px)` : 'none'))

  return reduceMotion ? undefined : { y, scale, opacity, filter }
}
