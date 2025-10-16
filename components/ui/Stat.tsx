import { cn } from '@/lib/utils'

interface StatProps {
  number: string
  label: string
  className?: string
}

export function Stat({ number, label, className }: StatProps) {
  return (
    <div className={cn('text-center', className)}>
      <div className="text-display-xl font-bold text-primary">{number}</div>
      <div className="mt-2 text-base text-ink-subtle">{label}</div>
    </div>
  )
}
