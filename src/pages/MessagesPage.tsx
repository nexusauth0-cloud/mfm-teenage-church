import { motion } from 'framer-motion'
import { BookOpen, HandHeart, Mic, Podcast, Sparkles } from 'lucide-react'
import PageHeader from '../components/ui/PageHeader'
import MessageCard from '../components/cards/MessageCard'
import ImagePlaceholder from '../components/ui/ImagePlaceholder'
import { messageCategories, messages } from '../data/content'
import { usePageMeta } from '../hooks/usePageMeta'
import { cn } from '../lib/utils'

const categoryIcons = {
  Sermon: Mic,
  'Bible Study': BookOpen,
  Devotional: Podcast,
  Prayer: HandHeart,
  Encouragement: Sparkles,
}

export default function MessagesPage() {
  usePageMeta(
    'Messages | MFM Teenage Church',
    'Sermons, Bible studies, devotionals, prayer and encouragement resources from MFM Teenage Church, North Central Region 7, Gwagwalada Abuja.',
  )

  return (
    <>
      <PageHeader
        eyebrow="Messages"
        title={<>The Word That <span className="text-gradient-fire">Transforms</span></>}
        description="Sermons, Bible studies, devotionals, prayer and encouragement — resources to feed your spirit all week long."
      />

      <section className="section-pad relative pt-4">
        <div className="container-site">
          {messageCategories.map((category, ci) => {
            const Icon = categoryIcons[category]
            const items = messages.filter((m) => m.type === category)

            return (
              <div
                key={category}
                className={cn('mb-14', ci !== 0 && 'border-t border-white/[0.05] pt-14')}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5 }}
                  className="mb-6 flex items-center gap-3"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-sky-500/20 bg-sky-500/10">
                    <Icon className="h-5 w-5 text-sky-400" />
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-bold text-white md:text-2xl">
                      {category}
                    </h2>
                    <p className="text-xs text-slate-500">
                      {items.length > 0
                        ? `${items.length} ${items.length === 1 ? 'resource' : 'resources'}`
                        : 'No content yet'}
                    </p>
                  </div>
                </motion.div>

                {items.length > 0 ? (
                  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {items.map((m, i) => (
                      <MessageCard key={m.id} message={m} index={i} />
                    ))}
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5 }}
                    className="rounded-2xl border border-dashed border-white/15 bg-ink-900/50 p-10 text-center"
                  >
                    <Icon className="mx-auto mb-3 h-7 w-7 text-slate-600" />
                    <p className="font-display font-semibold text-white">
                      {category} messages will appear here soon.
                    </p>
                    <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
                      We're preparing this category for upcoming releases.
                    </p>
                  </motion.div>
                )}
              </div>
            )
          })}

          <div className="mt-4 grid items-center gap-8 rounded-3xl border border-white/[0.08] bg-ink-900/60 p-8 md:grid-cols-2 md:p-10">
            <div>
              <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
                Audio &amp; Video Coming Soon
              </h2>
              <p className="mt-3 leading-relaxed text-slate-400">
                We're preparing a media library with full sermons, testimonies and worship
                sessions. Until then, don't miss a service — the Word is alive every Sunday,
                Wednesday and Friday.
              </p>
            </div>
            <ImagePlaceholder label="Sermon player coming soon" icon="play" aspect="video" />
          </div>
        </div>
      </section>
    </>
  )
}