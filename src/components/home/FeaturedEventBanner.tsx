import { useState } from 'react'
import { motion } from 'framer-motion'
import { featuredEvent } from '../../data/content'
import { useCountdown } from '../../hooks/useCountdown'
import Button from '../ui/Button'
import ImagePlaceholder from '../ui/ImagePlaceholder'

function getNextAug29(): Date {
  const now = new Date()
  const year = now.getMonth() === 7 && now.getDate() <= 29 ? now.getFullYear() : now.getFullYear() + 1
  const target = new Date(year, 7, 29, 7, 0, 0)
  return target.getTime() > now.getTime() ? target : new Date(year + 1, 7, 29, 7, 0, 0)
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-white/10 bg-ink-950/60 px-3 py-4 backdrop-blur-sm sm:px-5 sm:py-5">
      <span className="font-display text-3xl font-bold tabular-nums text-fire-400 sm:text-4xl">
        {String(value).padStart(2, '0')}
      </span>
      <span className="mt-1 text-[10px] font-semibold tracking-[0.2em] text-slate-500 uppercase sm:text-xs">
        {label}
      </span>
    </div>
  )
}

export default function FeaturedEventBanner() {
  const target = useState(getNextAug29)[0]
  const { days, hours, minutes, seconds, passed } = useCountdown(target)

  return (
    <section id="featured-event" className="section-pad relative">
      <div className="absolute inset-x-0 top-1/2 h-64 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(245,127,23,0.08),transparent_65%)]" />
      <div className="container-site relative">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-[2rem] border border-fire-500/25 bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950 shadow-2xl shadow-fire-600/10"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(245,127,23,0.18),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_90%,rgba(139,92,246,0.12),transparent_45%)]" />
          <span className="absolute top-0 left-1/2 h-1 w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-fire-500 to-transparent" />

          <div className="relative grid gap-10 p-8 md:p-12 lg:grid-cols-[1.15fr_1fr] lg:gap-14 lg:p-16">
            <div>
              <p className="mb-4 inline-flex rounded-full bg-fire-500/15 px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-fire-400 uppercase">
                Upcoming Programme
              </p>
              <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                {featuredEvent.title}
              </h2>
              <p className="mt-4 max-w-xl leading-relaxed text-slate-400 md:text-lg">
                {featuredEvent.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm text-slate-300">
                <p><span className="font-semibold text-fire-400">Date:</span> {featuredEvent.date}</p>
                <p><span className="font-semibold text-fire-400">Time:</span> {featuredEvent.time}</p>
                <p className="w-full max-w-md"><span className="font-semibold text-fire-400">Venue:</span> {featuredEvent.location}</p>
              </div>

              <div className="mt-8 grid max-w-lg grid-cols-4 gap-3">
                <TimeUnit value={days} label="Days" />
                <TimeUnit value={hours} label="Hours" />
                <TimeUnit value={minutes} label="Mins" />
                <TimeUnit value={seconds} label="Secs" />
              </div>

              <div className="mt-9 flex flex-wrap gap-4">
                <Button to={featuredEvent.cta.to} size="lg">
                  {featuredEvent.cta.label}
                </Button>
                <Button to="/programmes" size="lg" variant="outline">
                  All Programmes
                </Button>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              {featuredEvent.flyer ? (
                <img
                  src={featuredEvent.flyer}
                  alt={`${featuredEvent.title} programme flyer`}
                  className="mx-auto w-auto max-h-[70vh] rounded-2xl border border-white/10 shadow-xl shadow-black/40"
                />
              ) : (
                <>
                  <ImagePlaceholder
                    label={`${featuredEvent.title} — flyer coming soon`}
                    icon="image"
                    aspect="video"
                    className="shadow-xl shadow-black/40"
                  />
                  <p className="rounded-xl border border-white/[0.08] bg-ink-950/50 px-4 py-3 text-center text-xs text-slate-500">
                    Official programme flyer will appear here soon
                  </p>
                </>
              )}
              {passed && (
                <p className="text-center text-sm font-semibold text-fire-400">
                  This programme is underway — join us!
                </p>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}