import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'

interface SectionTitleProps {
  eyebrow?: string
  title: ReactNode
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'mb-12 max-w-2xl md:mb-16',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className,
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-fire-400 uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-slate-400 md:text-lg">{description}</p>
      )}
    </motion.div>
  )
}