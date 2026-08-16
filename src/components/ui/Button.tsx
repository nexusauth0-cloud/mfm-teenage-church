import { Link } from 'react-router-dom'
import type { ComponentProps, ReactNode } from 'react'
import { cn } from '../../lib/utils'

type Variant = 'primary' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fire-500 disabled:opacity-50'

const variants: Record<Variant, string> = {
  primary:
    'bg-gradient-to-r from-fire-500 to-flame-500 text-ink-950 shadow-lg shadow-fire-600/25 hover:shadow-fire-500/40 hover:-translate-y-0.5',
  outline:
    'border border-white/15 text-slate-100 hover:border-fire-500/60 hover:text-fire-400 hover:bg-white/5',
  ghost: 'text-slate-300 hover:text-fire-400',
}

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

interface CommonProps {
  variant?: Variant
  size?: Size
  className?: string
  children: ReactNode
}

type ButtonProps = CommonProps & Omit<ComponentProps<'button'>, 'className' | 'children'>

type AnchorProps = CommonProps & { href: string } & Omit<ComponentProps<'a'>, 'className' | 'children'>

type LinkProps = CommonProps & { to: string } & Omit<ComponentProps<typeof Link>, 'className' | 'children'>

type Props = ButtonProps | AnchorProps | LinkProps

export default function Button(props: Props) {
  const { variant = 'primary', size = 'md', className, children } = props
  const classes = cn(base, variants[variant], sizes[size], className)

  if ('href' in props && props.href !== undefined) {
    const { variant: _v, size: _s, className: _c, ...rest } = props as AnchorProps
    return (
      <a className={classes} {...rest}>
        {children}
      </a>
    )
  }

  if ('to' in props && props.to !== undefined) {
    const { variant: _v, size: _s, className: _c, ...rest } = props as LinkProps
    return (
      <Link className={classes} {...rest}>
        {children}
      </Link>
    )
  }

  const { variant: _v, size: _s, className: _c, ...rest } = props as ButtonProps
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}