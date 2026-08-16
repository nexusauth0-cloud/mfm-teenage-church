import { motion } from 'framer-motion'
import { Clock, HandHeart, Headphones, PlayCircle } from 'lucide-react'
import type { Message } from '../../data/content'

interface MessageCardProps {
  message: Message
  index?: number
}

const typeIcon: Record<Message['type'], typeof PlayCircle> = {
  Sermon: PlayCircle,
  'Bible Study': Headphones,
  Devotional: PlayCircle,
  Prayer: HandHeart,
  Encouragement: Headphones,
}

export default function MessageCard({ message, index = 0 }: MessageCardProps) {
  const Icon = typeIcon[message.type]

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: 'easeOut' }}
      className="group flex flex-col rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/40 hover:bg-white/[0.05]"
    >
      <div className="mb-5 flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-sky-500/20 bg-sky-500/10 transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-5 w-5 text-sky-400" />
        </div>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold tracking-wide text-slate-300 uppercase">
          {message.type}
        </span>
      </div>

      <h3 className="font-display text-lg font-bold text-white transition-colors group-hover:text-sky-400">
        {message.title}
      </h3>
      <p className="mt-1 text-sm font-medium text-fire-400">{message.speaker}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{message.description}</p>

      <div className="mt-5 flex items-center justify-between border-t border-white/[0.06] pt-4 text-xs text-slate-500">
        <span className="flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5" />
          {message.duration}
        </span>
        <span>{message.date}</span>
      </div>
    </motion.article>
  )
}