import { motion } from 'framer-motion'
import { ArrowRight, CalendarHeart, Sparkles } from 'lucide-react'
import Button from '../ui/Button'
import ImagePlaceholder from '../ui/ImagePlaceholder'
import { site } from '../../data/content'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' as const } },
}

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(245,127,23,0.18),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_85%,rgba(139,92,246,0.14),transparent_50%)]" />
      <div className="absolute top-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-fire-500/60 to-transparent" />

      <div className="container-site relative grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-fire-500/25 bg-fire-500/10 px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-fire-400 uppercase"
          >
            <Sparkles className="h-3.5 w-3.5" />
            {site.tagline}
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl"
          >
            MFM <span className="text-gradient-fire">Teenage</span> Church
          </motion.h1>

          <motion.p
            variants={item}
            className="font-display mt-5 text-xl font-semibold tracking-wide text-slate-200 sm:text-2xl"
          >
            {site.motto}
          </motion.p>

          <motion.p variants={item} className="mt-2 text-sm font-medium tracking-wider text-slate-500 uppercase">
            {site.region} · {site.location.area}
          </motion.p>

          <motion.p variants={item} className="mt-6 max-w-lg text-base leading-relaxed text-slate-400 md:text-lg">
            Building young lives through faith, discipleship, friendship and purpose.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-4">
            <Button to="/contact" size="lg">
              Join Us
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button to="/programmes" size="lg" variant="outline">
              <CalendarHeart className="h-4 w-4" />
              Upcoming Programmes
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-fire-500/20 via-transparent to-violet-500/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink-900/70 shadow-2xl shadow-black/50">
            <ImagePlaceholder label="Hero visual coming soon" icon="flame" aspect="wide" className="rounded-none border-0" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950/90 to-transparent p-6 pt-16">
              <p className="font-display text-sm font-bold tracking-[0.2em] text-fire-400 uppercase">
                Raising Champions
              </p>
              <p className="text-sm text-slate-300">for Christ — one teenager at a time.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}