import { Fragment } from 'react'
import { useTranslation } from 'react-i18next'
import { useLanguage } from '../hooks/useLanguage'
import { SUPPORTED_LANGUAGES } from '../i18n'

function LanguageToggle() {
  const { t } = useTranslation()
  const { language, toggleLanguage } = useLanguage()

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={t('header.languageToggle')}
      className="flex h-9 cursor-pointer items-center gap-1.5 rounded-full px-3 font-serif text-md italic transition-[background-color,box-shadow,scale] duration-350 ease-soft hover:scale-105 hover:liquid-glass"
    >
      {SUPPORTED_LANGUAGES.map((code, index) => (
        <Fragment key={code}>
          {index > 0 && (
            <span aria-hidden="true" className="text-sep">
              /
            </span>
          )}
          <span
            className={`transition-colors duration-250 ${code === language ? 'text-ink' : 'text-off'}`}
          >
            {code.toUpperCase()}
          </span>
        </Fragment>
      ))}
    </button>
  )
}

export default LanguageToggle
