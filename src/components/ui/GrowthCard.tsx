import type { ComponentType } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Compass, Crown, Flame, Users, Wrench } from 'lucide-react'
import type { GrowthPillar } from '../../data/content'

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  book: BookOpen,
  flame: Flame,
  users: Users,
  compass: Compass,
  wrench: Wrench,
  crown: Crown,
}

interface GrowthCardProps {
  pillar: GrowthPillar
  index?: number
}

export default function GrowthCard({ pillar, index = 0 }: GrowthCardProps) {
  const Icon = iconMap[pillar.icon] ?? BookOpen

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: (index % 5) * 0.08, ease: 'easeOut' }}
      className="group flex flex-col items-center rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-fire-500/40 hover:bg-white/[0.05]"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-fire-500/20 bg-gradient-to-br from-fire-500/15 to-violet-500/15 transition-transform duration-300 group-hover:scale-110">
        <Icon className="h-5 w-5 text-fire-400" />
      </div>
      <h3 className="font-display text-lg font-bold text-white transition-colors group-hover:text-fire-400">
        {pillar.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-400">{pillar.text}</p>
    </motion.article>
  )
}