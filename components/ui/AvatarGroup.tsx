import { cn } from '@/lib/utils'

interface AvatarGroupProps {
  avatars: string[]
  max?: number
  className?: string
}

export function AvatarGroup({ avatars, max = 5, className }: AvatarGroupProps) {
  const displayAvatars = avatars.slice(0, max)
  const remaining = avatars.length - max

  return (
    <div className={cn('flex -space-x-2', className)}>
      {displayAvatars.map((avatar, index) => (
        <div
          key={index}
          className="h-10 w-10 overflow-hidden rounded-full border-2 border-white bg-surface-muted"
        >
          <img src={avatar} alt="" className="h-full w-full object-cover" />
        </div>
      ))}
      {remaining > 0 && (
        <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-surface-muted text-sm font-medium text-ink">
          +{remaining}
        </div>
      )}
    </div>
  )
}
