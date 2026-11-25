import { useEffect, useRef, useState } from 'react'
import type { RefObject } from 'react'

/**
 * Open state of a non-modal popover attached to a trigger button. While open,
 * it closes on Escape (returning focus to the trigger), on a click outside, or
 * when keyboard focus moves outside the trigger and the panel.
 */
export function usePopover<TPanel extends HTMLElement>(triggerRef: RefObject<HTMLElement | null>) {
  const [isOpen, setIsOpen] = useState(false)
  const panelRef = useRef<TPanel>(null)

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const isInside = (target: EventTarget | null) =>
      target instanceof Node &&
      Boolean(triggerRef.current?.contains(target) || panelRef.current?.contains(target))

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false)
        triggerRef.current?.focus()
      }
    }

    function onPointerDown(event: PointerEvent) {
      if (!isInside(event.target)) {
        setIsOpen(false)
      }
    }

    function onFocusIn(event: FocusEvent) {
      if (!isInside(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('focusin', onFocusIn)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('focusin', onFocusIn)
    }
  }, [isOpen, triggerRef])

  return {
    isOpen,
    panelRef,
    toggle: () => setIsOpen((open) => !open),
    close: () => setIsOpen(false),
  }
}
