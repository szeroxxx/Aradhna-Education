'use client'

import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { TestimonialCard } from '@/components/ui/TestimonialCard'
import { motion } from 'framer-motion'

// Placeholder college logos - replace with actual partner colleges
const collegeLogos = [
  { name: 'Gujarat University', src: '/images/college-logos/gu.png' },
  { name: 'GMERS Medical College', src: '/images/college-logos/gmers.png' },
  { name: 'Parul University', src: '/images/college-logos/parul.png' },
  { name: 'Karnavati University', src: '/images/college-logos/karnavati.png' },
  { name: 'Nirma University', src: '/images/college-logos/nirma.png' },
  { name: 'Ahmedabad University', src: '/images/college-logos/au.png' },
]

const testimonials = [
  {
    quote:
      'Aradhana made my B.Sc Nursing admission so smooth. They handled everything from forms to college selection!',
    author: 'Priya Sharma',
    role: 'B.Sc Nursing, Ahmedabad',
    avatar: 'https://i.pravatar.cc/150?img=5',
  },
  {
    quote:
      'Got scholarship guidance and secured admission in my preferred pharmacy college. Highly recommended!',
    author: 'Rahul Patel',
    role: 'B.Pharma, Vadodara',
    avatar: 'https://i.pravatar.cc/150?img=12',
  },
  {
    quote:
      'The counselors are very supportive and knowledgeable. They guided me through the entire admission process.',
    author: 'Ananya Desai',
    role: 'GNM, Surat',
    avatar: 'https://i.pravatar.cc/150?img=9',
  },
]

export function SocialProof() {
  return (
    <section className="section-padding bg-white/50">
      <Container>
        {/* Partner Colleges */}
        <div className="mb-20">
          <SectionHeader
            eyebrow="Trusted Partners"
            title="Approved & Verified Colleges"
            subtitle="We work with top government and private institutions across Gujarat"
            centered
            className="mb-12"
          />

          {/* Logo Marquee - Simple version without animation for now */}
          <div className="relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {collegeLogos.map((logo, index) => (
                <motion.div
                  key={logo.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex h-16 w-32 items-center justify-center grayscale transition-all hover:grayscale-0"
                >
                  {/* Placeholder - replace with actual logos */}
                  <div className="flex h-full w-full items-center justify-center rounded-lg bg-surface-muted text-xs text-ink-subtle">
                    {logo.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <SectionHeader
            eyebrow="Success Stories"
            title="What Our Students Say"
            subtitle="Real experiences from students who achieved their healthcare education dreams"
            centered
            className="mb-12"
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
