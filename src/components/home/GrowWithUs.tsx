import SectionTitle from '../ui/SectionTitle'
import GrowthCard from '../ui/GrowthCard'
import { growCards } from '../../data/content'

export default function GrowWithUs() {
  return (
    <section className="section-pad relative border-t border-white/[0.05] bg-ink-900/40">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(245,127,23,0.07),transparent_55%)]" />
      <div className="container-site relative">
        <SectionTitle
          eyebrow="Grow With Us"
          title={<>Faith Is a Journey — <span className="text-gradient-fire">Let's Grow Together</span></>}
          description="Five simple rhythms that shape our walk with God as a teenage family."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {growCards.map((pillar, i) => (
            <GrowthCard key={pillar.id} pillar={pillar} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}