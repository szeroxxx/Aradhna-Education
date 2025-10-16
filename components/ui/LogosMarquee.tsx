'use client'

import { cn } from '@/lib/utils'

interface Logo {
  name: string
  src: string
}

interface LogosMarqueeProps {
  logos: Logo[]
  className?: string
}

export function LogosMarquee({ logos, className }: LogosMarqueeProps) {
  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos]

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <div className="flex animate-marquee gap-12 hover:[animation-play-state:paused]">
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className="flex h-16 w-32 flex-shrink-0 items-center justify-center grayscale transition-all hover:grayscale-0"
          >
            <img src={logo.src} alt={logo.name} className="max-h-full max-w-full object-contain" />
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  )
}
