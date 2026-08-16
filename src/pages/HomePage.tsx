import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, Compass, Cross, HeartHandshake, Images, Shield, Users } from 'lucide-react'
import HeroSection from '../components/home/HeroSection'
import FeaturedEventBanner from '../components/home/FeaturedEventBanner'
import GrowWithUs from '../components/home/GrowWithUs'
import MfmFamilySection from '../components/home/MfmFamilySection'
import FamilyCta from '../components/home/FamilyCta'
import { usePageMeta } from '../hooks/usePageMeta'
import SectionTitle from '../components/ui/SectionTitle'
import Button from '../components/ui/Button'
import EventCard from '../components/cards/EventCard'
import ActivityCard from '../components/cards/ActivityCard'
import MinistryCard from '../components/cards/MinistryCard'
import MessageCard from '../components/cards/MessageCard'
import LocationCard from '../components/cards/LocationCard'
import ImagePlaceholder from '../components/ui/ImagePlaceholder'
import { galleryImages, ministries, messages, upcomingEvents, weeklyActivities, site } from '../data/content'

const aboutPoints = [
  { icon: Cross, title: 'Know Christ', text: 'A personal, living relationship with Jesus.' },
  { icon: Compass, title: 'Discover Purpose', text: 'Understanding God’s unique plan for your life.' },
  { icon: Shield, title: 'Strong Character', text: 'Integrity, discipline and godly values.' },
  { icon: Users, title: 'Influence the Generation', text: 'Becoming light and salt in school and society.' },
]

export default function HomePage() {
  usePageMeta(
    'MFM Teenage Church | Raising Champions for Christ',
    'MFM Teenage Church, North Central Region 7, Gwagwalada Abuja — raising champions for Christ through faith, discipleship, friendship and purpose.',
  )

  return (
    <>
      <HeroSection />

      {/* About preview */}
      <section className="section-pad relative">
        <div className="container-site">
          <SectionTitle
            eyebrow="Who We Are"
            title={<>A Family of <span className="text-gradient-fire">Young Champions</span></>}
            description={`${site.name} is a department under Mountain of Fire and Miracles Ministries, ${site.region}.`}
          />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-12 max-w-3xl text-center text-base leading-relaxed text-slate-400 md:text-lg"
          >
            Our goal is to raise teenagers who know Christ, discover their purpose, develop strong
            character, and positively influence their generation.
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {aboutPoints.map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-fire-500/40"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-fire-500/20 to-violet-500/20 border border-fire-500/20">
                  <point.icon className="h-5 w-5 text-fire-400" />
                </div>
                <h3 className="font-display font-bold text-white">{point.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{point.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button to="/about" variant="outline" size="md">
              Learn More About Us
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Featured event */}
      <FeaturedEventBanner />

      {/* Grow with us */}
      <GrowWithUs />

      {/* Weekly activities */}
      <section className="section-pad relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.06),transparent_60%)]" />
        <div className="container-site relative">
          <SectionTitle
            eyebrow="Weekly Activities"
            title={<>Every Week, <span className="text-gradient-fire">Every Moment</span></>}
            description="A rhythm of worship, the Word and prayer designed to build champions."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {weeklyActivities.slice(0, 8).map((a, i) => (
              <ActivityCard key={a.id} activity={a} index={i} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button to="/activities" variant="outline">
              See Full Schedule
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Ministries preview */}
      <section className="section-pad border-y border-white/[0.05] bg-ink-900/40">
        <div className="container-site">
          <SectionTitle
            eyebrow="Ministries"
            title={<>Find Your <span className="text-gradient-fire">Place to Serve</span></>}
            description="Every teenager has a gift — discover where you fit in the family."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ministries.slice(0, 6).map((m, i) => (
              <MinistryCard key={m.id} ministry={m} index={i} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button to="/ministries" variant="outline">
              Explore All Ministries
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Our MFM family */}
      <MfmFamilySection />

      {/* Upcoming programmes */}
      <section className="section-pad relative">
        <div className="container-site">
          <SectionTitle
            eyebrow="Programmes"
            title={<>Don't Miss <span className="text-gradient-fire">What's Next</span></>}
            description="Mark your calendar — powerful gatherings are coming."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((e, i) => (
              <EventCard key={e.id} event={e} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Messages preview */}
      <section className="section-pad border-y border-white/[0.05] bg-ink-900/40">
        <div className="container-site">
          <SectionTitle
            eyebrow="Messages"
            title={<>Fed by <span className="text-gradient-fire">the Word</span></>}
            description="Sermons, Bible studies, devotionals and encouragement for your journey."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {messages.map((m, i) => (
              <MessageCard key={m.id} message={m} index={i} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button to="/messages" variant="outline">
              Browse All Messages
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="section-pad relative">
        <div className="container-site">
          <SectionTitle
            eyebrow="Gallery"
            title={<>Our <span className="text-gradient-fire">Memories</span></>}
            description="Moments of worship, joy and fellowship — captured for the future."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.slice(0, 3).map((img) => (
              <ImagePlaceholder key={img.id} label={img.title} icon="camera" />
            ))}
          </div>
          <div className="mt-10 rounded-2xl border border-dashed border-white/15 bg-ink-900/50 p-10 text-center">
            <Images className="mx-auto mb-3 h-8 w-8 text-fire-500" />
            <p className="font-display text-lg font-semibold text-white">Memories coming soon…</p>
            <p className="mt-2 text-sm text-slate-500">
              Photos from our services and programmes will be uploaded here.
            </p>
          </div>
          <div className="mt-12 text-center">
            <Button to="/gallery" variant="outline">
              Visit Gallery
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section-pad border-t border-white/[0.05] bg-ink-900/40">
        <div className="container-site">
          <SectionTitle
            eyebrow="Location"
            title={<>Come Worship <span className="text-gradient-fire">With Us</span></>}
            description="We would love to have you. Find us at Gwagwalada, Abuja."
          />
          <LocationCard />
        </div>
      </section>

      {/* Part of the MFM family */}
      <FamilyCta />

      {/* CTA */}
      <section className="section-pad relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(245,127,23,0.22),transparent_60%)]" />
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="container-site relative text-center"
        >
          <p className="mb-4 text-sm font-semibold tracking-[0.25em] text-fire-400 uppercase">
            Your Generation Needs You
          </p>
          <h2 className="font-display mx-auto max-w-3xl text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Become part of a generation <span className="text-gradient-fire">raised for Christ</span>.
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button to="/contact" size="lg">
              <HeartHandshake className="h-5 w-5" />
              Join Teenage Church
            </Button>
            <Button to="/activities" size="lg" variant="outline">
              <BookOpen className="h-5 w-5" />
              View Activities
            </Button>
          </div>
        </motion.div>
</section>
  </>
  )
}