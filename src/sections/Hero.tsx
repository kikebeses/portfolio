import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import GithubIcon from '../components/GithubIcon'
import HeroTitle from '../components/HeroTitle'
import LinkedinIcon from '../components/LinkedinIcon'
import Reveal from '../components/Reveal'
import SocialButton from '../components/SocialButton'
import { GITHUB_URL, LINKEDIN_URL } from '../data/contact'
import { useHeroScroll } from '../hooks/useHeroScroll'

function Hero() {
  const { t } = useTranslation()
  const scrollStyle = useHeroScroll()

  return (
    // Sticky: the content sheet slides up over it while scrolling.
    // `/srgb`: same gradient interpolation as the design (Tailwind defaults to oklab).
    <section className="sticky top-0 z-0 h-svh bg-linear-165/srgb from-hero-a to-hero-b">
      <motion.div
        style={scrollStyle}
        className="mx-auto flex h-full max-w-page origin-[50%_30%] flex-col justify-between px-gutter pt-30 pb-14"
      >
        <Reveal className="self-start font-serif text-xs tracking-label text-muted italic">
          {t('hero.openToWork')}
        </Reveal>
        <div>
          <HeroTitle />
          <div className="mt-12 grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] items-end gap-x-12 gap-y-7 border-t border-line pt-7">
            <Reveal delay={700} className="text-role">
              <span className="bg-linear-90/srgb from-role-a to-role-b bg-clip-text text-transparent">
                {t('hero.role')}
              </span>
            </Reveal>
            <Reveal delay={850} className="flex flex-col gap-6">
              <p className="max-w-110 text-lg leading-copy text-pretty text-muted">
                {t('hero.tagline')}
              </p>
              <div className="flex flex-wrap gap-3">
                <SocialButton
                  href={GITHUB_URL}
                  label={t('hero.github')}
                  icon={GithubIcon}
                  variant="solid"
                />
                <SocialButton
                  href={LINKEDIN_URL}
                  label={t('hero.linkedin')}
                  icon={LinkedinIcon}
                  variant="glass"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
