import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Flame, Menu, X } from 'lucide-react'
import { nav, site } from '../../data/content'
import Button from '../ui/Button'
import { cn } from '../../lib/utils'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled || open
          ? 'border-b border-white/[0.06] bg-ink-950/85 backdrop-blur-xl'
          : 'bg-transparent',
      )}
    >
      <nav className="container-site flex h-16 items-center justify-between gap-4 md:h-20" aria-label="Main navigation">
        <Link to="/" className="flex items-center gap-2.5" aria-label={`${site.name} home`}>
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-fire-500 to-flame-500 shadow-lg shadow-fire-600/25">
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

        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    'rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-200',
                    isActive
                      ? 'bg-fire-500/10 text-fire-400'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white',
                  )
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button to="/contact" size="sm">
            Join Us
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white lg:hidden"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-white/[0.06] bg-ink-950/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="container-site flex flex-col gap-1 py-4">
              {nav.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      cn(
                        'block rounded-xl px-4 py-3 text-sm font-medium transition-colors',
                        isActive
                          ? 'bg-fire-500/10 text-fire-400'
                          : 'text-slate-300 hover:bg-white/5 hover:text-white',
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
              <li className="pt-2">
                <Button to="/contact" className="w-full">
                  Join Us
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}