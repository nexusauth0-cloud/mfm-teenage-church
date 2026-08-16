import { CalendarClock, Info } from 'lucide-react'
import PageHeader from '../components/ui/PageHeader'
import EventCard from '../components/cards/EventCard'
import ImagePlaceholder from '../components/ui/ImagePlaceholder'
import { upcomingEvents, featuredEvent } from '../data/content'

export default function ProgrammesPage() {
  const events = [featuredEvent, ...upcomingEvents.filter((e) => e.id !== featuredEvent.id)]

  return (
    <>
      <PageHeader
        eyebrow="Programmes"
        title={<>Gatherings That <span className="text-gradient-fire">Ignite Faith</span></>}
        description="From monthly programmes to special rallies — every gathering is designed to draw teenagers closer to God."
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

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {events.map((e, i) => (
              <EventCard key={e.id} event={e} index={i} />
            ))}
          </div>

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
                Monthly teenage programmes, regional rallies, seminars and outreach events are
                being planned. Check back regularly — or contact us to stay in the loop.
              </p>
            </div>
            <ImagePlaceholder label="Next programme flyer coming soon" icon="image" aspect="video" />
          </div>
        </div>
      </section>
    </>
  )
}