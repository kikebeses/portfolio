import type { PointerEvent } from 'react'

const HIDDEN = '-999px'

/**
 * Pointer handlers for the `glow-border` utility: they move the glow to the
 * pointer by setting CSS variables, without re-rendering React.
 */
export function useCardGlow() {
  function onPointerMove(event: PointerEvent<HTMLElement>) {
    if (event.pointerType === 'touch') {
      return
    }

    const element = event.currentTarget
    const rect = element.getBoundingClientRect()
    element.style.setProperty('--x', `${event.clientX - rect.left}px`)
    element.style.setProperty('--y', `${event.clientY - rect.top}px`)
  }

  function onPointerLeave(event: PointerEvent<HTMLElement>) {
    event.currentTarget.style.setProperty('--x', HIDDEN)
    event.currentTarget.style.setProperty('--y', HIDDEN)
  }

  return { onPointerMove, onPointerLeave }
}
