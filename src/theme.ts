import type { Theme } from './types/theme'

// Keep in sync with the inline script in index.html, which applies the saved
// (or system) theme before the first paint to avoid a flash of the wrong theme.
const STORAGE_KEY = 'theme'

/** The theme currently applied to <html>. */
export function getAppliedTheme(): Theme {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
}

/** Applies a theme and remembers the choice for future visits. */
export function applyTheme(theme: Theme): void {
  document.documentElement.classList.toggle('dark', theme === 'dark')

  try {
    localStorage.setItem(STORAGE_KEY, theme)
  } catch {
    // Not persisting is acceptable: the theme still changes for this visit.
  }
}
