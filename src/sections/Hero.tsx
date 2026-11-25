import { useTranslation } from 'react-i18next'
import HeroTitle from '../components/HeroTitle'
import Reveal from '../components/Reveal'

function Hero() {
  const { t } = useTranslation()

  return (
    // Sticky: the content sheet slides up over it while scrolling.
    // `/srgb`: same gradient interpolation as the design (Tailwind defaults to oklab).
    <section className="sticky top-0 z-0 h-svh bg-linear-165/srgb from-hero-a to-hero-b">
      <div className="mx-auto flex h-full max-w-page origin-[50%_30%] flex-col justify-between px-gutter pt-30 pb-14">
        <Reveal className="self-start font-serif text-xs tracking-label text-muted italic">
          {t('hero.openToWork')}
        </Reveal>
        <div>
          <HeroTitle />
        </div>
      </div>
    </section>
  )
}

export default Hero
