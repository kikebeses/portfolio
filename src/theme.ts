import type { Theme } from './types/theme'

// Keep both in sync with the inline script in index.html, which applies the saved
// (or system) theme before the first paint to avoid a flash of the wrong theme.
const STORAGE_KEY = 'theme'
/** Mobile browser bar colour: the top of the hero (--hero-a) in each theme. */
const THEME_COLORS: Record<Theme, string> = { light: '#ff8a3d', dark: '#4a1c07' }

/** The theme currently applied to <html>. */
export function getAppliedTheme(): Theme {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
}

/** Applies a theme and remembers the choice for future visits. */
export function applyTheme(theme: Theme): void {
  document.documentElement.classList.toggle('dark', theme === 'dark')
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLORS[theme])

  try {
    localStorage.setItem(STORAGE_KEY, theme)
  } catch {
    // Not persisting is acceptable: the theme still changes for this visit.
  }
}
