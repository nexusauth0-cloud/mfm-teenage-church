import { motion } from 'framer-motion'
import { Clock, MapPin, Navigation } from 'lucide-react'
import { contact, site } from '../../data/content'
import Button from '../ui/Button'

export default function LocationCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm"
    >
      {/* Map placeholder — replace with an embedded map when available */}
      <div className="relative flex aspect-[16/7] items-center justify-center overflow-hidden bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950 sm:aspect-[16/6]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(245,127,23,0.15),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        <div className="relative flex flex-col items-center gap-3 text-center">
          <div className="relative">
            <span className="absolute -inset-3 animate-ping rounded-full bg-fire-500/20" />
            <span className="relative flex h-14 w-14 items-center justify-center rounded-full border border-fire-500/30 bg-fire-500/15">
              <MapPin className="h-6 w-6 text-fire-400" />
            </span>
          </div>
          <p className="text-sm font-medium tracking-wide text-slate-400">Interactive map coming soon</p>
        </div>
      </div>

      <div className="grid gap-8 p-6 md:grid-cols-2 md:p-8">
        <div>
          <h3 className="font-display text-xl font-bold text-white">Find Us</h3>
          <p className="mt-2 font-medium text-fire-400">{site.name}</p>
          <p className="text-sm text-slate-400">{site.region}</p>
          <div className="mt-4 space-y-1.5 text-sm leading-relaxed text-slate-300">
            {site.location.addressLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button to="https://maps.google.com" size="sm" variant="primary">
              <Navigation className="h-4 w-4" />
              Get Directions
            </Button>
            <Button to="/contact" size="sm" variant="outline">
              Contact Us
            </Button>
          </div>
        </div>

        <div className="rounded-2xl border border-white/[0.06] bg-ink-900/60 p-5">
          <h4 className="flex items-center gap-2 font-display text-sm font-bold tracking-wider text-slate-300 uppercase">
            <Clock className="h-4 w-4 text-fire-500" />
            Service Times
          </h4>
          <ul className="mt-4 space-y-3">
            {contact.serviceTimes.map((s) => (
              <li key={s.label} className="flex items-center justify-between gap-4 text-sm">
                <span className="text-slate-400">{s.label}</span>
                <span className="font-semibold text-white">{s.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}