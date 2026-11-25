import { useState } from 'react'
import { applyTheme, getAppliedTheme } from '../theme'
import type { Theme } from '../types/theme'

export function useTheme() {
  // index.html has already applied the initial theme, so <html> is the source of truth.
  const [theme, setTheme] = useState<Theme>(getAppliedTheme)

  function toggleTheme() {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    applyTheme(next)
    setTheme(next)
  }

  return { theme, toggleTheme }
}
