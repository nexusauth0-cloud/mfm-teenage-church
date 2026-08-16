import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import PageHeader from '../components/ui/PageHeader'
import MinistryCard from '../components/cards/MinistryCard'
import { ministries } from '../data/content'

export default function MinistriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Ministries"
        title={<>Serve, Grow &amp; <span className="text-gradient-fire">Shine</span></>}
        description="Every teenager carries a gift. Explore the departments where you can serve God and bless your generation."
      />

      <section className="section-pad relative pt-4">
        <div className="container-site">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ministries.map((m, i) => (
              <MinistryCard key={m.id} ministry={m} index={i} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="mt-14 rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-500/[0.08] via-transparent to-fire-500/[0.08] p-8 text-center md:p-12"
          >
            <Sparkles className="mx-auto mb-4 h-8 w-8 text-violet-400" />
            <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
              Not Sure Where You Fit?
            </h2>
            <p className="mx-auto mt-3 max-w-xl leading-relaxed text-slate-400">
              That's okay! Talk to any leader after service — we'll help you discover your gifts
              and find the ministry that matches your passion.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}