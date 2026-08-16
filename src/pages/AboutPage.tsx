import { motion } from 'framer-motion'
import { BookOpen, Flame, HandHeart, Lightbulb, Users, UserCheck } from 'lucide-react'
import PageHeader from '../components/ui/PageHeader'
import SectionTitle from '../components/ui/SectionTitle'
import Button from '../components/ui/Button'
import ImagePlaceholder from '../components/ui/ImagePlaceholder'
import GrowthCard from '../components/ui/GrowthCard'
import { foundationPillars, site } from '../data/content'
import { usePageMeta } from '../hooks/usePageMeta'

const missionPoints = [
  { icon: Flame, title: 'Spiritual Growth', text: 'Deepening every teenager’s walk with the Holy Spirit.' },
  { icon: BookOpen, title: 'Bible Knowledge', text: 'Grounding teens in the Word of God for everyday living.' },
  { icon: UserCheck, title: 'Character Development', text: 'Shaping integrity, discipline and godly conduct.' },
  { icon: Lightbulb, title: 'Leadership Training', text: 'Raising confident, servant-hearted young leaders.' },
  { icon: Users, title: 'Fellowship', text: 'A loving community where every teenager belongs.' },
  { icon: HandHeart, title: 'Service', text: 'Using gifts to serve God, the church and the community.' },
]

export default function AboutPage() {
  usePageMeta(
    'About Us | MFM Teenage Church, North Central Region 7',
    'Learn about MFM Teenage Church, North Central Region 7, Gwagwalada Abuja — our vision, foundation and mission to raise champions for Christ.',
  )

  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title={<>Raising <span className="text-gradient-fire">Champions</span> for Christ</>}
        description="MFM Teenage Church, North Central Region 7 — a family of teenagers pursuing God, purpose and excellence."
      />

      <section className="section-pad relative pt-4">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
              Who We Are
            </h2>
            <p className="mt-5 leading-relaxed text-slate-400 md:text-lg">
              {site.name} is a department under Mountain of Fire and Miracles Ministries,{' '}
              {site.region}. We exist to see teenagers encounter God personally, understand His
              purpose for their lives, and grow into champions of faith and character.
            </p>
            <p className="mt-4 leading-relaxed text-slate-400 md:text-lg">
              In a world full of pressure and distractions, we provide a safe, vibrant community
              where teenagers can worship freely, ask real questions, build lasting friendships and
              discover the greatness God placed inside them.
            </p>
            <div className="mt-8">
              <Button to="/contact">
                Join Our Family
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <ImagePlaceholder label="Our teenage church family — photo coming soon" icon="users" aspect="video" />
          </motion.div>
        </div>
      </section>

      <section className="section-pad relative border-t border-white/[0.05] bg-ink-900/40">
        <div className="container-site">
          <SectionTitle
            eyebrow="Our Vision"
            title={<>A Generation That <span className="text-gradient-fire">Knows Its God</span></>}
            description="Raising teenagers who know Christ, discover purpose, and influence their generation positively."
          />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl rounded-3xl border border-fire-500/20 bg-gradient-to-br from-fire-500/10 via-transparent to-violet-500/10 p-8 text-center md:p-12"
          >
            <p className="font-display text-xl leading-relaxed text-slate-100 md:text-2xl">
              “We are not just the future of the church —{' '}
              <span className="text-gradient-fire">we are the church of today</span>, raised to
              champion the cause of Christ in our generation.”
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-pad relative">
        <div className="container-site">
          <SectionTitle
            eyebrow="Our Foundation"
            title={<>Rooted in Christ. Growing in <span className="text-gradient-fire">Faith</span>. Raising Champions.</>}
            description="The Teenage Church is part of the wider MFM family, focused on helping teenagers grow spiritually and personally."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {foundationPillars.map((pillar, i) => (
              <GrowthCard key={pillar.id} pillar={pillar} index={i} />
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-slate-500">
            These are the values of our teenage community — not official MFM slogans.
          </p>
        </div>
      </section>

      <section className="section-pad relative border-t border-white/[0.05] bg-ink-900/40">
        <div className="container-site">
          <SectionTitle
            eyebrow="Our Mission"
            title={<>What We <span className="text-gradient-fire">Stand For</span></>}
            description="Six commitments that shape everything we do as a teenage family."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {missionPoints.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="group rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-fire-500/40"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-fire-500/20 bg-gradient-to-br from-fire-500/15 to-violet-500/15 transition-transform duration-300 group-hover:scale-110">
                  <p.icon className="h-5 w-5 text-fire-400" />
                </div>
                <h3 className="font-display text-lg font-bold text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}