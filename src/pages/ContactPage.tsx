import { motion } from 'framer-motion'
import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import PageHeader from '../components/ui/PageHeader'
import Button from '../components/ui/Button'
import LocationCard from '../components/cards/LocationCard'
import { FacebookIcon, InstagramIcon, YoutubeIcon } from '../components/ui/SocialIcons'
import { contact, site } from '../data/content'

const contactChannels = [
  {
    icon: Phone,
    title: 'Phone',
    value: contact.phone,
    hint: 'Call us during office hours',
    action: { label: 'Call Now', href: `tel:${contact.phone.replace(/\s/g, '')}` },
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: contact.whatsapp,
    hint: 'Fastest way to reach us',
    action: { label: 'Chat on WhatsApp', href: `https://wa.me/${contact.whatsapp.replace(/\D/g, '')}` },
  },
  {
    icon: Mail,
    title: 'Email',
    value: contact.email,
    hint: 'For inquiries & registration',
    action: { label: 'Send Email', href: `mailto:${contact.email}` },
  },
  {
    icon: MapPin,
    title: 'Address',
    value: site.location.addressLines.join(', '),
    hint: 'Along UATH, Gwagwalada Road',
    action: { label: 'Get Directions', href: 'https://maps.google.com' },
  },
]

const socials = [
  { icon: InstagramIcon, name: 'Instagram', handle: contact.socials[0].handle },
  { icon: FacebookIcon, name: 'Facebook', handle: contact.socials[1].handle },
  { icon: YoutubeIcon, name: 'YouTube', handle: contact.socials[2].handle },
]

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={<>We'd Love to <span className="text-gradient-fire">Hear From You</span></>}
        description="Questions, registration or just want to say hello — reach out through any channel below."
      />

      <section className="section-pad relative pt-4">
        <div className="container-site">
          <div className="grid gap-6 sm:grid-cols-2">
            {contactChannels.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                className="flex flex-col rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-fire-500/40"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-fire-500/20 bg-gradient-to-br from-fire-500/15 to-violet-500/15">
                    <c.icon className="h-5 w-5 text-fire-400" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display font-bold text-white">{c.title}</h3>
                    <p className="truncate text-sm text-slate-400">{c.value}</p>
                  </div>
                </div>
                <p className="mt-4 flex-1 text-xs text-slate-500">{c.hint}</p>
                <div className="mt-5">
                  <Button href={c.action.href} size="sm" variant="outline">
                    {c.action.label}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {socials.map((s) => (
              <a
                key={s.name}
                href="#"
                className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm text-slate-300 transition-all hover:border-fire-500/50 hover:text-fire-400"
              >
                <s.icon className="h-4 w-4" />
                <span className="font-medium">{s.name}</span>
                <span className="text-slate-500">· {s.handle}</span>
              </a>
            ))}
          </div>

          <div className="mt-16">
            <LocationCard />
          </div>

          <div className="mt-12 grid gap-8 rounded-3xl border border-white/[0.08] bg-ink-900/60 p-8 md:grid-cols-2 md:p-10">
            <div>
              <h2 className="flex items-center gap-3 font-display text-xl font-bold text-white md:text-2xl">
                <Clock className="h-5 w-5 text-fire-500" />
                When We Meet
              </h2>
              <ul className="mt-5 space-y-3">
                {contact.serviceTimes.map((s) => (
                  <li
                    key={s.label}
                    className="flex items-center justify-between gap-4 rounded-xl border border-white/[0.06] bg-ink-950/50 px-4 py-3 text-sm"
                  >
                    <span className="text-slate-300">{s.label}</span>
                    <span className="font-semibold text-fire-400">{s.time}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-start justify-center rounded-2xl border border-fire-500/20 bg-gradient-to-br from-fire-500/[0.08] to-violet-500/[0.08] p-8">
              <p className="font-display text-lg font-bold text-white">First time visiting?</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Come as you are. Our leaders and teens will welcome you warmly — you belong here.
              </p>
              <div className="mt-5">
                <Button href="https://maps.google.com" size="sm">
                  Plan Your Visit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}