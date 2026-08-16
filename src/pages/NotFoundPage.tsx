import { motion } from 'framer-motion'
import Button from '../components/ui/Button'
import { usePageMeta } from '../hooks/usePageMeta'

export default function NotFoundPage() {
  usePageMeta('Page Not Found | MFM Teenage Church')

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(245,127,23,0.15),transparent_55%)]" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative text-center"
      >
        <p className="font-display text-7xl font-bold text-gradient-fire md:text-8xl">404</p>
        <h1 className="font-display mt-4 text-2xl font-bold text-white md:text-3xl">
          Page Not Found
        </h1>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-400">
          The page you're looking for doesn't exist or has been moved. Let's get you back to
          where the champions are.
        </p>
        <div className="mt-8">
          <Button to="/">Back to Home</Button>
        </div>
      </motion.div>
    </section>
  )
}