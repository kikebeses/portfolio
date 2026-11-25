import { Moon, Sun } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../hooks/useTheme'

function ThemeToggle() {
  const { t } = useTranslation()
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'
  // The icon shows the mode the button switches to.
  const Icon = isDark ? Sun : Moon

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={t(isDark ? 'header.themeToLight' : 'header.themeToDark')}
      className="flex size-9 cursor-pointer items-center justify-center rounded-full text-ink transition-[background-color,box-shadow,scale] duration-350 ease-soft hover:scale-105 hover:liquid-glass"
    >
      <Icon size={17} strokeWidth={1.75} aria-hidden="true" />
    </button>
  )
}

export default ThemeToggle
