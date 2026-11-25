import { motion } from 'framer-motion'
import type { ComponentType } from 'react'
import { useTranslation } from 'react-i18next'
import { useMagnetic } from '../hooks/useMagnetic'

interface SocialButtonProps {
  href: string
  label: string
  icon: ComponentType<{ size?: number }>
  variant: 'solid' | 'glass'
}

const VARIANT_CLASSES: Record<SocialButtonProps['variant'], string> = {
  solid: 'bg-btn-bg text-btn-fg hover:liquid-glass-dark',
  glass:
    'border border-line bg-glass-2 text-ink backdrop-blur-liquid hover:border-transparent hover:liquid-glass',
}

/** External profile link (GitHub, LinkedIn) with the magnetic effect. */
function SocialButton({ href, label, icon: Icon, variant }: SocialButtonProps) {
  const { t } = useTranslation()
  const magnetic = useMagnetic<HTMLAnchorElement>()

  return (
    <motion.a
      ref={magnetic.ref}
      style={magnetic.style}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-2.5 rounded-cta px-5.5 py-3.5 text-md font-medium transition-[background-color,border-color,box-shadow,color] duration-350 ease-soft ${VARIANT_CLASSES[variant]}`}
    >
      <Icon size={18} />
      <span>{label}</span>
      <span className="sr-only">{t('common.opensInNewTab')}</span>
    </motion.a>
  )
}

export default SocialButton
