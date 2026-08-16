import { ImageIcon } from 'lucide-react'
import { cn } from '../../lib/utils'
import { placeholderIcons } from './placeholderIcons'

interface ImagePlaceholderProps {
  label?: string
  icon?: string
  className?: string
  aspect?: 'video' | 'square' | 'wide'
}

/**
 * Elegant placeholder used wherever real photos/flyers will be added later.
 * Swap the content of this component (or pass an <img> via children) when
 * official images become available.
 */
export default function ImagePlaceholder({
  label = 'Visual coming soon',
  icon = 'image',
  className,
  aspect = 'wide',
}: ImagePlaceholderProps) {
  const Icon = placeholderIcons[icon] ?? ImageIcon
  const aspectClass =
    aspect === 'video' ? 'aspect-video' : aspect === 'square' ? 'aspect-square' : 'aspect-[4/3]'

  return (
    <div
      className={cn(
        'group relative flex items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950',
        aspectClass,
        className,
      )}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(245,127,23,0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_80%,rgba(139,92,246,0.10),transparent_55%)]" />
      <div className="relative z-10 flex flex-col items-center gap-3 p-6 text-center transition-transform duration-500 group-hover:scale-105">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-fire-500/20 bg-fire-500/10">
          <Icon className="h-7 w-7 text-fire-400" />
        </div>
        <p className="text-sm font-medium tracking-wide text-slate-400">{label}</p>
      </div>
    </div>
  )
}