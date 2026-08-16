import { motion } from 'framer-motion'
import { Flame } from 'lucide-react'
import Button from '../ui/Button'

export default function FamilyCta() {
  return (
    <section className="section-pad relative overflow-hidden border-t border-white/[0.05]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.12),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,rgba(245,127,23,0.10),transparent_55%)]" />
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="container-site relative text-center"
      >
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-fire-500/25 bg-gradient-to-br from-fire-500/20 to-violet-500/20">
          <Flame className="h-8 w-8 text-fire-400" fill="currentColor" />
        </div>
        <p className="mb-4 text-sm font-semibold tracking-[0.25em] text-fire-400 uppercase">
          Part of Something Bigger
        </p>
        <h2 className="font-display mx-auto max-w-2xl text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          Part of the <span className="text-gradient-fire">MFM Family</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-slate-400 md:text-lg">
          MFM Teenage Church is part of the wider North Central Region 7 church family, committed
          to raising a generation for Christ.
        </p>
        <div className="mt-9">
          <Button to="/about" size="lg" variant="outline">
            Learn More About Our Family
          </Button>
        </div>
      </motion.div>
    </section>
  )
}