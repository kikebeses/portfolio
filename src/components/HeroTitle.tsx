import { motion, useReducedMotion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { EASE_SOFT } from '../motion'

const START_DELAY = 0.1
const LETTER_STAGGER = 0.04

/** Hero heading whose letters fade, rise and unblur one after another. */
function HeroTitle() {
  const { t } = useTranslation()
  const reduceMotion = useReducedMotion()
  const title = t('hero.title')

  // Letters are grouped by word so a line can never break in the middle of a word.
  // `offset` is the index of the word's first letter in the title (spaces included),
  // so the stagger runs across the whole title.
  const words = title.split(' ').reduce<{ text: string; offset: number }[]>((acc, text) => {
    const previous = acc.at(-1)
    const offset = previous ? previous.offset + previous.text.length + 1 : 0
    return [...acc, { text, offset }]
  }, [])

  return (
    <h1 className="-ml-[0.04em] text-display font-medium">
      <span className="sr-only">{title}</span>
      {/* Keyed by the text: a language change replays the animation */}
      <span key={title} aria-hidden="true">
        {words.map(({ text, offset: wordOffset }, wordIndex) => (
          <span key={wordIndex}>
            {wordIndex > 0 && ' '}
            <span className="inline-block whitespace-nowrap">
              {Array.from(text).map((letter, letterIndex) => (
                <motion.span
                  key={letterIndex}
                  className="inline-block"
                  initial={reduceMotion ? false : { opacity: 0, filter: 'blur(14px)', y: '0.22em' }}
                  animate={{ opacity: 1, filter: 'blur(0px)', y: 0, transitionEnd: { filter: 'none' } }}
                  transition={{
                    duration: 1,
                    ease: EASE_SOFT,
                    delay: START_DELAY + (wordOffset + letterIndex) * LETTER_STAGGER,
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          </span>
        ))}
      </span>
    </h1>
  )
}

export default HeroTitle
