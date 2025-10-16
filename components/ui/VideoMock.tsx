'use client'

import { cn } from '@/lib/utils'
import { Play, Video, Mic } from 'lucide-react'
import { useState } from 'react'

interface VideoMockProps {
  thumbnail?: string
  className?: string
}

export function VideoMock({ thumbnail, className }: VideoMockProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className={cn('relative overflow-hidden rounded-3xl shadow-soft', className)}>
      {/* Video area */}
      <div className="aspect-video bg-gradient-to-br from-ink/5 to-primary/5">
        {thumbnail ? (
          <img src={thumbnail} alt="" className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full items-center justify-center">
            <Video className="h-16 w-16 text-ink/20" aria-hidden="true" />
          </div>
        )}
      </div>

      {/* Play overlay */}
      {!isPlaying && (
        <button
          onClick={() => setIsPlaying(true)}
          className="absolute inset-0 flex items-center justify-center bg-ink/10 transition-colors hover:bg-ink/20"
          aria-label="Play video"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-soft">
            <Play className="h-8 w-8 text-primary" fill="currentColor" />
          </div>
        </button>
      )}

      {/* Mock controls */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/80 to-transparent p-4">
        <div className="flex items-center justify-center gap-4">
          <button
            className="rounded-full bg-white/20 p-2 backdrop-blur-sm transition-colors hover:bg-white/30"
            aria-label="Toggle microphone"
          >
            <Mic className="h-5 w-5 text-white" />
          </button>
          <button
            className="rounded-full bg-white/20 p-2 backdrop-blur-sm transition-colors hover:bg-white/30"
            aria-label="Toggle video"
          >
            <Video className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  )
}
