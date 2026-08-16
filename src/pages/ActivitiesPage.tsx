import { CalendarDays, Clock, MapPin } from 'lucide-react'
import PageHeader from '../components/ui/PageHeader'
import { weeklyActivities, type Day } from '../data/content'
import { usePageMeta } from '../hooks/usePageMeta'
import { cn } from '../lib/utils'

const dayOrder: Day[] = ['Sunday', 'Wednesday', 'Friday', 'Saturday']

const categoryStyles: Record<string, string> = {
  Service: 'bg-fire-500/15 text-fire-400 border-fire-500/25',
  'Bible Study': 'bg-violet-500/15 text-violet-400 border-violet-500/25',
  Prayer: 'bg-sky-500/15 text-sky-400 border-sky-500/25',
  Practice: 'bg-flame-500/15 text-flame-400 border-flame-500/25',
  Meeting: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/25',
  Fellowship: 'bg-amber-500/15 text-amber-400 border-amber-500/25',
}

const timeLabel = (time: string | undefined) => time ?? 'Time to be announced'

export default function ActivitiesPage() {
  usePageMeta(
    'Weekly Activities | MFM Teenage Church',
    'Weekly activities of MFM Teenage Church, North Central Region 7 — Sunday service, Bible study, prayer meetings, choir, drama, media and leadership.',
  )

  return (
    <>
      <PageHeader
        eyebrow="Weekly Activities"
        title={<>A Week of <span className="text-gradient-fire">Fire &amp; Fellowship</span></>}
        description="Our weekly rhythm — structured around the Word, prayer, praise and genuine community."
      />

      <section className="section-pad relative pt-4">
        <div className="container-site">
          <div className="mb-12 overflow-hidden rounded-3xl border border-white/[0.08] bg-ink-900/60">
            {dayOrder.map((day, i) => {
              const items = weeklyActivities.filter((a) => a.day === day)
              if (items.length === 0) return null
              return (
                <div
                  key={day}
                  className={cn(
                    'grid gap-6 p-6 md:grid-cols-[180px_1fr] md:p-8',
                    i !== 0 && 'border-t border-white/[0.06]',
                  )}
                >
                  <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-1">
                    <CalendarDays className="h-5 w-5 text-fire-500 md:hidden" />
                    <h3 className="font-display text-lg font-bold text-white md:text-xl">{day}</h3>
                    <p className="hidden text-xs text-slate-500 md:block">
                      {items.length} {items.length === 1 ? 'activity' : 'activities'}
                    </p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((a) => (
                      <div
                        key={a.id}
                        className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 transition-all duration-300 hover:border-fire-500/40"
                      >
                        <span
                          className={cn(
                            'mb-3 inline-flex w-fit rounded-full border px-2.5 py-0.5 text-[11px] font-bold tracking-wider uppercase',
                            categoryStyles[a.category] ?? 'bg-white/10 text-slate-300 border-white/15',
                          )}
                        >
                          {a.category}
                        </span>
                        <h4 className="font-display font-bold text-white">{a.name}</h4>
                        <p className="mt-2 text-sm leading-relaxed text-slate-400">{a.description}</p>
                        <div className="mt-4 space-y-1.5 text-sm text-slate-400">
                          <p className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-fire-500" />
                            {timeLabel(a.time)}
                          </p>
                          <p className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-fire-500" />
                            {a.location}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-8 rounded-2xl border border-dashed border-white/15 bg-ink-900/50 p-8 text-center">
            <p className="font-display text-lg font-semibold text-white">
              Monthly Fellowship Activities
            </p>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-slate-500">
              Games, outings, outreach and special fellowship events are announced in church and
              on our social media pages. Times for future activities will be announced before each
              gathering.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}