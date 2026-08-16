import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface PageHeaderProps {
  eyebrow: string
  title: ReactNode
  description?: string
}

export default function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(245,127,23,0.14),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(139,92,246,0.10),transparent_45%)]" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="container-site relative"
      >
        <p className="mb-3 text-sm font-semibold tracking-[0.25em] text-fire-400 uppercase">
          {eyebrow}
        </p>
        <h1 className="font-display max-w-3xl text-4xl font-bold text-white sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
            {description}
          </p>
        )}
      </motion.div>
    </section>
  )
}