'use client'

import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { GradientClouds } from '@/components/ui/GradientClouds'
import { VideoMock } from '@/components/ui/VideoMock'
import { AvatarGroup } from '@/components/ui/AvatarGroup'
import { Pill } from '@/components/ui/Pill'
import { MessageCircle, Phone, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { WHATSAPP_NUMBER } from '@/lib/constants'

const avatars = [
  'https://i.pravatar.cc/150?img=1',
  'https://i.pravatar.cc/150?img=5',
  'https://i.pravatar.cc/150?img=9',
  'https://i.pravatar.cc/150?img=14',
]

export function Hero() {
  const handleWhatsAppClick = () => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi! I want to know more about admissions for 2025-26.')}`,
      '_blank'
    )
  }

  return (
    <section className="relative min-h-[90vh] section-padding overflow-hidden">
      <GradientClouds />
      <Container className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <Pill className="mb-6 bg-primary/10 text-primary">
              🎓 Admissions Open 2025–26
            </Pill>

            <h1 className="text-display-xl mb-6 leading-tight">
              Your gateway to{' '}
              <span className="font-semibold text-primary">Nursing & Pharmacy</span> in Gujarat
            </h1>

            <p className="mb-8 text-lg text-ink-subtle lg:text-xl">
              Get admitted to verified government & private colleges with end-to-end support from
              documentation to placement.
            </p>

            <div className="flex flex-wrap justify-center gap-4 lg:justify-start mb-8">
              <Button size="lg" onClick={handleWhatsAppClick} className="gap-2">
                <MessageCircle className="h-5 w-5" />
                Apply on WhatsApp
              </Button>
              <Button variant="secondary" size="lg">
                Explore Courses
              </Button>
            </div>

            {/* Hero Stats */}
            <div className="flex flex-wrap justify-center gap-6 lg:justify-start">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary">25K+</div>
                <div className="text-sm text-ink-subtle">Students Guided</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center gap-1 text-3xl font-bold text-primary">
                  <Star className="h-6 w-6 fill-primary" />
                  Top 1
                </div>
                <div className="text-sm text-ink-subtle">Trusted in Gujarat</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Video Mock + Testimonial */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <VideoMock thumbnail="/images/hero-counselor.webp" />
            </motion.div>

            {/* Floating Testimonial Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-panel absolute -bottom-6 -left-6 max-w-xs rounded-2xl p-4 shadow-soft hidden lg:block"
            >
              <div className="mb-3 flex items-center gap-3">
                <AvatarGroup avatars={avatars} max={3} />
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                  ))}
                </div>
              </div>
              <p className="text-sm text-ink">
                "Got admission in my dream college with full support!"
              </p>
              <p className="mt-1 text-xs text-ink-subtle">— Priya S., B.Sc Nursing</p>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
