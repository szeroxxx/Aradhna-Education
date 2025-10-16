import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  className?: string
  centered?: boolean
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  className,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div className={cn('space-y-4', centered && 'text-center', className)}>
      {eyebrow && (
        <p className="text-sm font-medium uppercase tracking-wider text-primary">{eyebrow}</p>
      )}
      <h2 className="text-h2 font-bold leading-tight">{title}</h2>
      {subtitle && <p className="text-lg text-ink-subtle max-w-2xl">{subtitle}</p>}
    </div>
  )
}
