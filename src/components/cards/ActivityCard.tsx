import { motion } from 'framer-motion'
import { Clock, MapPin } from 'lucide-react'
import type { Activity } from '../../data/content'
import { cn } from '../../lib/utils'

const dayStyles: Record<string, string> = {
  Sunday: 'bg-fire-500/15 text-fire-400 border-fire-500/25',
  Wednesday: 'bg-violet-500/15 text-violet-400 border-violet-500/25',
  Friday: 'bg-sky-500/15 text-sky-400 border-sky-500/25',
  Saturday: 'bg-flame-500/15 text-flame-400 border-flame-500/25',
  Monthly: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/25',
}

interface ActivityCardProps {
  activity: Activity
  index?: number
}

export default function ActivityCard({ activity, index = 0 }: ActivityCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08, ease: 'easeOut' }}
      className="group flex flex-col rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-fire-500/40 hover:bg-white/[0.05]"
    >
      <span
        className={cn(
          'mb-4 inline-flex w-fit rounded-full border px-3 py-1 text-xs font-bold tracking-wider uppercase',
          dayStyles[activity.day] ?? 'bg-white/10 text-slate-300 border-white/15',
        )}
      >
        {activity.day}
      </span>

      <h3 className="font-display text-lg font-bold text-white transition-colors group-hover:text-fire-400">
        {activity.name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{activity.description}</p>

      <div className="mt-5 space-y-2 border-t border-white/[0.06] pt-4 text-sm text-slate-400">
        <p className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-fire-500" />
          {activity.time ?? 'Time to be announced'}
        </p>
        <p className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-fire-500" />
          {activity.location}
        </p>
      </div>
    </motion.article>
  )
}