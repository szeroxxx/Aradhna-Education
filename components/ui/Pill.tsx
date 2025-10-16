import { cn } from '@/lib/utils'

interface PillProps {
  children: React.ReactNode
  className?: string
}

export function Pill({ children, className }: PillProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full bg-surface-muted px-4 py-1.5 text-sm font-medium text-ink',
        className
      )}
    >
      {children}
    </span>
  )
}
