import { motion } from 'framer-motion'
import type { Ministry } from '../../data/content'
import { placeholderIcons } from '../ui/placeholderIcons'

interface MinistryCardProps {
  ministry: Ministry
  index?: number
}

export default function MinistryCard({ ministry, index = 0 }: MinistryCardProps) {
  const Icon = placeholderIcons[ministry.icon]

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: 'easeOut' }}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:bg-white/[0.05]"
    >
      <div className="absolute -top-16 -right-16 h-32 w-32 rounded-full bg-violet-500/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100 md:opacity-0" />
      <div className="relative">
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-fire-500/20 bg-gradient-to-br from-fire-500/15 to-violet-500/15 transition-transform duration-300 group-hover:scale-110">
          {Icon && <Icon className="h-6 w-6 text-fire-400" />}
        </div>
        <h3 className="font-display text-lg font-bold text-white transition-colors group-hover:text-fire-400">
          {ministry.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">{ministry.description}</p>
      </div>
    </motion.article>
  )
}