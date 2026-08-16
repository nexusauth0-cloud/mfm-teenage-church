import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CalendarClock, Info, SearchX } from 'lucide-react'
import PageHeader from '../components/ui/PageHeader'
import EventCard from '../components/cards/EventCard'
import ImagePlaceholder from '../components/ui/ImagePlaceholder'
import { upcomingEvents, featuredEvent, programmeCategories, type ProgrammeCategory } from '../data/content'
import { usePageMeta } from '../hooks/usePageMeta'
import { cn } from '../lib/utils'

type Filter = 'All' | ProgrammeCategory

export default function ProgrammesPage() {
  usePageMeta(
    'Programmes | MFM Teenage Church, Gwagwalada Abuja',
    'Upcoming programmes of MFM Teenage Church, North Central Region 7, Gwagwalada Abuja — weekly gatherings, prayer meetings, fellowship and special programmes.',
  )

  const events = useMemo(
    () => [featuredEvent, ...upcomingEvents.filter((e) => e.id !== featuredEvent.id)],
    [],
  )

  const [filter, setFilter] = useState<Filter>('All')

  const visible = filter === 'All' ? events : events.filter((e) => e.category === filter)

  return (
    <>
      <PageHeader
        eyebrow="Programmes"
        title={<>Gatherings That <span className="text-gradient-fire">Ignite Faith</span></>}
        description="From weekly gatherings to special programmes — every meeting is designed to draw teenagers closer to God."
      />

      <section className="section-pad relative pt-4">
        <div className="container-site">
          <div className="mb-10 flex items-start gap-3 rounded-2xl border border-sky-500/20 bg-sky-500/[0.06] p-5">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-sky-400" />
            <p className="text-sm leading-relaxed text-slate-300">
              Registration is currently via our{' '}
              <a href="/contact" className="font-semibold text-fire-400 underline-offset-2 hover:underline">
                contact page
              </a>
              . Programme flyers will be displayed here as they become available.
            </p>
          </div>

          <div
            className="mb-10 flex flex-wrap items-center gap-2"
            role="group"
            aria-label="Filter programmes by category"
          >
            {(['All', ...programmeCategories] as Filter[]).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                aria-pressed={filter === cat}
                className={cn(
                  'rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fire-500',
                  filter === cat
                    ? 'border-fire-500/60 bg-fire-500/15 text-fire-400'
                    : 'border-white/10 bg-white/[0.03] text-slate-400 hover:border-fire-500/40 hover:text-slate-200',
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {visible.length > 0 ? (
              <motion.div
                key={filter}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
              >
                {visible.map((e, i) => (
                  <EventCard key={e.id} event={e} index={i} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key={filter}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="rounded-3xl border border-dashed border-white/15 bg-ink-900/50 p-14 text-center"
              >
                <SearchX className="mx-auto mb-3 h-8 w-8 text-fire-500" />
                <h2 className="font-display text-xl font-bold text-white">
                  No {filter === 'All' ? '' : `${filter} `}programmes announced yet
                </h2>
                <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
                  New programmes are announced in church and on our social media pages. Check back
                  soon.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-16 grid items-center gap-8 rounded-3xl border border-white/[0.08] bg-ink-900/60 p-8 md:grid-cols-2 md:p-10">
            <div>
              <p className="mb-3 flex items-center gap-2 text-sm font-semibold tracking-[0.2em] text-fire-400 uppercase">
                <CalendarClock className="h-4 w-4" />
                Plan Ahead
              </p>
              <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
                More Programmes Coming Soon
              </h2>
              <p className="mt-3 leading-relaxed text-slate-400">
                Special programmes, retreats, outreach and fellowship gatherings are being planned.
                Check back regularly — or contact us to stay in the loop.
              </p>
            </div>
            <ImagePlaceholder label="Next programme flyer coming soon" icon="image" aspect="video" />
          </div>
        </div>
      </section>
    </>
  )
}