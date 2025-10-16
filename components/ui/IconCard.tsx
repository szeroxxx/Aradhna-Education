import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'

interface IconCardProps {
  icon: LucideIcon
  title: string
  description: string
  className?: string
}

export function IconCard({ icon: Icon, title, description, className }: IconCardProps) {
  return (
    <div
      className={cn(
        'glass-panel rounded-3xl p-6 shadow-soft transition-transform hover:scale-105',
        className
      )}
    >
      <div className="mb-4 inline-flex rounded-2xl bg-primary/10 p-3">
        <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
      </div>
      <h3 className="mb-2 text-h3 font-bold">{title}</h3>
      <p className="text-ink-subtle">{description}</p>
    </div>
  )
}
