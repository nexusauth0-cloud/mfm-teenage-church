import { motion } from 'framer-motion'
import { CalendarDays, Clock, MapPin } from 'lucide-react'
import type { EventItem } from '../../data/content'
import Button from '../ui/Button'
import ImagePlaceholder from '../ui/ImagePlaceholder'

interface EventCardProps {
  event: EventItem
  index?: number
}

export default function EventCard({ event, index = 0 }: EventCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.12, ease: 'easeOut' }}
      className="group flex flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm transition-all duration-300 hover:border-fire-500/40 hover:bg-white/[0.05] hover:shadow-2xl hover:shadow-fire-600/10"
    >
      <div className="relative">
        {event.flyer ? (
          <img
            src={event.flyer}
            alt={event.title}
            className="aspect-[16/9] w-full object-cover"
          />
        ) : (
          <ImagePlaceholder label="Programme flyer coming soon" icon="image" aspect="video" className="rounded-none border-0" />
        )}
        {event.featured && (
          <span className="absolute top-4 left-4 rounded-full bg-gradient-to-r from-fire-500 to-flame-500 px-3 py-1 text-xs font-bold tracking-wide text-ink-950 uppercase shadow-lg">
            Featured
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <h3 className="font-display text-xl font-bold text-white transition-colors group-hover:text-fire-400 md:text-2xl">
          {event.title}
        </h3>

        <div className="mt-4 space-y-2.5 text-sm text-slate-400">
          <p className="flex items-center gap-2.5">
            <CalendarDays className="h-4 w-4 shrink-0 text-fire-500" />
            {event.date}
          </p>
          <p className="flex items-center gap-2.5">
            <Clock className="h-4 w-4 shrink-0 text-fire-500" />
            {event.time}
          </p>
          <p className="flex items-start gap-2.5">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-fire-500" />
            {event.location}
          </p>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-slate-400">{event.description}</p>

        <div className="mt-auto pt-6">
          <Button to={event.cta.to} size="sm" variant="outline" className="w-full sm:w-auto">
            {event.cta.label}
          </Button>
        </div>
      </div>
    </motion.article>
  )
}