import { motion } from 'framer-motion'
import { ArrowDown, Building2, Church } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import { mfmFamily, site } from '../../data/content'
import { cn } from '../../lib/utils'

export default function MfmFamilySection() {
  return (
    <section className="section-pad relative">
      <div className="container-site">
        <SectionTitle
          eyebrow="Our MFM Family"
          title={<>Part of a <span className="text-gradient-fire">Bigger Family</span></>}
          description="This website represents one department in a wider regional church family."
        />

        <div className="mx-auto max-w-2xl">
          {mfmFamily.levels.map((level, i) => (
            <div key={level.name} className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={cn(
                  'w-full rounded-2xl border p-5 text-center transition-all duration-300 md:p-6',
                  level.current
                    ? 'border-fire-500/40 bg-gradient-to-br from-fire-500/[0.12] to-violet-500/[0.10] shadow-lg shadow-fire-600/10'
                    : 'border-white/[0.08] bg-white/[0.03]',
                )}
              >
                <div
                  className={cn(
                    'mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl border',
                    level.current
                      ? 'border-fire-500/30 bg-fire-500/15'
                      : 'border-violet-500/25 bg-violet-500/10',
                  )}
                >
                  {i === 0 ? (
                    <Building2 className="h-5 w-5 text-violet-400" />
                  ) : (
                    <Church className={cn('h-5 w-5', level.current ? 'text-fire-400' : 'text-violet-400')} />
                  )}
                </div>
                <h3 className="font-display text-lg font-bold text-white md:text-xl">{level.name}</h3>
                <p className="mt-1 text-sm text-slate-400">{level.note}</p>
                {level.current && (
                  <span className="mt-3 inline-block rounded-full bg-fire-500/15 px-3 py-1 text-xs font-bold tracking-wider text-fire-400 uppercase">
                    You are here
                  </span>
                )}
              </motion.div>

              {i < mfmFamily.levels.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.15 + 0.1 }}
                  className="flex flex-col items-center py-3"
                  aria-hidden="true"
                >
                  <ArrowDown className="h-5 w-5 text-fire-500/70" />
                </motion.div>
              )}
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12"
        >
          <p className="mb-6 text-center text-sm font-semibold tracking-[0.2em] text-slate-500 uppercase">
            The {site.region} Church Family
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {mfmFamily.departments.map((dept) => (
              <div
                key={dept.name}
                className={cn(
                  'rounded-2xl border p-5 text-center transition-all duration-300',
                  dept.current
                    ? 'border-fire-500/40 bg-fire-500/[0.08]'
                    : 'border-white/[0.08] bg-white/[0.03] hover:border-violet-500/30',
                )}
              >
                <h4 className="font-display font-bold text-white">{dept.name}</h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{dept.note}</p>
                {dept.current && (
                  <span className="mt-3 inline-block rounded-full border border-fire-500/30 px-3 py-1 text-[11px] font-bold tracking-wider text-fire-400 uppercase">
                    This Website
                  </span>
                )}
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-slate-500">
            This website represents the Teenage Church department of the regional church.
          </p>
        </motion.div>
      </div>
    </section>
  )
}