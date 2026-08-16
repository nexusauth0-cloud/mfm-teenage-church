import { Link } from 'react-router-dom'
import { Flame, Mail, MapPin, Phone } from 'lucide-react'
import { contact, nav, site } from '../../data/content'
import { FacebookIcon, InstagramIcon, YoutubeIcon } from '../ui/SocialIcons'

const socialIcons = [
  { key: 'Instagram', Icon: InstagramIcon },
  { key: 'Facebook', Icon: FacebookIcon },
  { key: 'YouTube', Icon: YoutubeIcon },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-ink-900/60">
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-fire-500 to-flame-500">
              <Flame className="h-5 w-5 text-ink-950" fill="currentColor" />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-sm font-bold tracking-wide text-white">
                MFM <span className="text-fire-400">TEENAGE</span>
              </span>
              <span className="block text-[10px] font-medium tracking-[0.18em] text-slate-400 uppercase">
                {site.region}
              </span>
            </span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            {site.motto}. Building young lives through faith, discipleship, friendship and purpose.
          </p>
          <div className="mt-5 flex gap-3">
            {socialIcons.map(({ key, Icon }) => (
              <a
                key={key}
                href="#"
                aria-label={key}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-all hover:border-fire-500/50 hover:text-fire-400"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold tracking-wider text-white uppercase">
            Quick Links
          </h3>
          <ul className="mt-4 grid grid-cols-2 gap-2">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-slate-400 transition-colors hover:text-fire-400"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold tracking-wider text-white uppercase">
            Service Times
          </h3>
          <ul className="mt-4 space-y-3">
            {contact.serviceTimes.map((s) => (
              <li key={s.label} className="text-sm">
                <p className="font-medium text-slate-300">{s.label}</p>
                <p className="text-slate-500">{s.time}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold tracking-wider text-white uppercase">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-fire-500" />
              {contact.address}
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-fire-500" />
              {contact.phone}
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-fire-500" />
              {contact.email}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/[0.06]">
        <div className="container-site flex flex-col items-center justify-between gap-2 py-6 text-center text-xs text-slate-500 sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} {site.name}, {site.region}. All rights reserved.
          </p>
          <p className="font-medium tracking-wide text-slate-600 uppercase">
            Faith · Fire · Future Generation
          </p>
        </div>
      </div>
    </footer>
  )
}