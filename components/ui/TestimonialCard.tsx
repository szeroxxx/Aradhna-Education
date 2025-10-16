import { cn } from '@/lib/utils'
import { Quote } from 'lucide-react'

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  avatar?: string
  className?: string
}

export function TestimonialCard({ quote, author, role, avatar, className }: TestimonialCardProps) {
  return (
    <div className={cn('glass-panel rounded-3xl p-8 shadow-soft', className)}>
      <Quote className="mb-4 h-8 w-8 text-primary/30" aria-hidden="true" />
      <blockquote className="mb-6 text-lg text-ink">{quote}</blockquote>
      <div className="flex items-center gap-4">
        {avatar && (
          <div className="h-12 w-12 overflow-hidden rounded-full bg-surface-muted">
            <img src={avatar} alt="" className="h-full w-full object-cover" />
          </div>
        )}
        <div>
          <div className="font-semibold text-ink">{author}</div>
          <div className="text-sm text-ink-subtle">{role}</div>
        </div>
      </div>
    </div>
  )
}
