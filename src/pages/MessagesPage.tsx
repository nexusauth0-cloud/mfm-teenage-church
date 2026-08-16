import { motion } from 'framer-motion'
import { BookOpen, Mic, Podcast } from 'lucide-react'
import PageHeader from '../components/ui/PageHeader'
import MessageCard from '../components/cards/MessageCard'
import ImagePlaceholder from '../components/ui/ImagePlaceholder'
import { messages } from '../data/content'

const formatCards = [
  {
    icon: Mic,
    title: 'Sermons',
    text: 'Audio recordings of powerful messages from our services and programmes.',
  },
  {
    icon: BookOpen,
    title: 'Bible Studies',
    text: 'Verse-by-verse teachings and study guides for deeper understanding.',
  },
  {
    icon: Podcast,
    title: 'Devotionals & Podcasts',
    text: 'Short daily devotionals and encouraging audio content for teens on the go.',
  },
]

export default function MessagesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Messages"
        title={<>The Word That <span className="text-gradient-fire">Transforms</span></>}
        description="Sermons, Bible studies and devotionals to feed your spirit all week long."
      />

      <section className="section-pad relative pt-4">
        <div className="container-site">
          <div className="grid gap-5 sm:grid-cols-3">
            {formatCards.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/40"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-sky-500/20 bg-sky-500/10">
                  <f.icon className="h-5 w-5 text-sky-400" />
                </div>
                <h3 className="font-display font-bold text-white">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{f.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {messages.map((m, i) => (
              <MessageCard key={m.id} message={m} index={i} />
            ))}
          </div>

          <div className="mt-14 grid items-center gap-8 rounded-3xl border border-white/[0.08] bg-ink-900/60 p-8 md:grid-cols-2 md:p-10">
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