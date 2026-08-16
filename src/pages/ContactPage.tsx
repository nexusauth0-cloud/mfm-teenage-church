import { motion } from 'framer-motion'
import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import PageHeader from '../components/ui/PageHeader'
import Button from '../components/ui/Button'
import LocationCard from '../components/cards/LocationCard'
import { FacebookIcon, InstagramIcon, YoutubeIcon } from '../components/ui/SocialIcons'
import { contact, site } from '../data/content'
import { usePageMeta } from '../hooks/usePageMeta'

const hasPhone = contact.phone.startsWith('+')
const hasEmail = contact.email.includes('@')

const contactChannels = [
  {
    icon: Phone,
    title: 'Phone',
    value: contact.phone,
    hint: hasPhone ? 'Call us during office hours' : 'Official number pending confirmation',
    action: hasPhone
      ? { label: 'Call Now', href: `tel:${contact.phone.replace(/\s/g, '')}` }
      : undefined,
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: contact.whatsapp,
    hint: hasPhone ? 'Fastest way to reach us' : 'Official number pending confirmation',
    action: hasPhone
      ? { label: 'Chat on WhatsApp', href: `https://wa.me/${contact.whatsapp.replace(/\D/g, '')}` }
      : undefined,
  },
  {
    icon: Mail,
    title: 'Email',
    value: contact.email,
    hint: hasEmail ? 'For inquiries & registration' : 'Official email pending confirmation',
    action: hasEmail ? { label: 'Send Email', href: `mailto:${contact.email}` } : undefined,
  },
  {
    icon: MapPin,
    title: 'Address',
    value: site.location.addressLines.join(', '),
    hint: 'Along UATH, Gwagwalada Road',
    action: { label: 'Get Directions', href: 'https://maps.google.com' },
  },
]

const socialIcons = [InstagramIcon, FacebookIcon, YoutubeIcon] as const

const socials = contact.socials.map((s, i) => ({
  icon: socialIcons[i] ?? InstagramIcon,
  name: s.label,
  handle: s.handle,
}))

export default function ContactPage() {
  usePageMeta(
    'Contact | MFM Teenage Church, Gwagwalada Abuja',
    'Contact MFM Teenage Church, North Central Region 7, Gwagwalada Abuja — along University of Abuja Teaching Hospital, Gwagwalada Road.',
  )

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={<>We'd Love to <span className="text-gradient-fire">Hear From You</span></>}
        description="Questions, registration or just want to say hello — reach out through any channel below."
      />

      <section className="section-pad relative pt-4">
        <div className="container-site">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
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
                    <p className="break-words text-sm text-slate-400">{c.value}</p>
                  </div>
                </div>
                <p className="mt-4 flex-1 text-xs text-slate-500">{c.hint}</p>
                {c.action && (
                  <div className="mt-5">
                    <Button href={c.action.href} size="sm" variant="outline">
                      {c.action.label}
                    </Button>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {socials.length > 0 ? (
              socials.map((s) => (
                <span
                  key={s.name}
                  className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm text-slate-300"
                >
                  <s.icon className="h-4 w-4" />
                  <span className="font-medium">{s.name}</span>
                  <span className="text-slate-500">· {s.handle}</span>
                </span>
              ))
            ) : (
              <p className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm text-slate-400">
                Official social media links coming soon
              </p>
            )}
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