'use client'

import { useState, useEffect } from 'react'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { TestimonialCard } from '@/components/ui/TestimonialCard'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

// Partner colleges - using placeholder initials for now
const partnerColleges = [
  { name: 'Gujarat University', initials: 'GU' },
  { name: 'GMERS Medical College', initials: 'GMERS' },
  { name: 'Parul University', initials: 'PU' },
  { name: 'Karnavati University', initials: 'KU' },
  { name: 'Nirma University', initials: 'NU' },
  { name: 'Ahmedabad University', initials: 'AU' },
  { name: 'Sumandeep Vidyapeeth', initials: 'SV' },
  { name: 'Sardar Patel University', initials: 'SPU' },
]

const testimonials = [
  {
    quote:
      'Aradhana made my B.Sc Nursing admission so smooth. They handled everything from forms to college selection! Got into my dream college in Ahmedabad.',
    author: 'Priya Sharma',
    role: 'B.Sc Nursing, Ahmedabad',
    avatar: 'https://i.pravatar.cc/150?img=5',
  },
  {
    quote:
      'Got scholarship guidance and secured admission in my preferred pharmacy college. The team was very supportive throughout the process.',
    author: 'Rahul Patel',
    role: 'D.Pharm, Vadodara',
    avatar: 'https://i.pravatar.cc/150?img=12',
  },
  {
    quote:
      'The counselors are very knowledgeable and patient. They guided me through the entire admission process and helped with all documentation.',
    author: 'Ananya Desai',
    role: 'GNM, Surat',
    avatar: 'https://i.pravatar.cc/150?img=9',
  },
  {
    quote:
      'I was confused about which course to choose. Aradhana helped me understand my options and I successfully got into Post Basic B.Sc Nursing.',
    author: 'Kavita Joshi',
    role: 'Post Basic B.Sc, Rajkot',
    avatar: 'https://i.pravatar.cc/150?img=16',
  },
  {
    quote:
      'Excellent service! They helped me get a scholarship and admission in a top pharmacy college. Very professional and responsive team.',
    author: 'Amit Shah',
    role: 'B.Pharm, Ahmedabad',
    avatar: 'https://i.pravatar.cc/150?img=33',
  },
  {
    quote:
      'From form filling to final admission, they were with me at every step. Got placed in a great hospital after completing my nursing degree!',
    author: 'Neha Trivedi',
    role: 'B.Sc Nursing, Vadodara',
    avatar: 'https://i.pravatar.cc/150?img=44',
  },
]

export function SocialProof() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-scroll testimonials
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 3))
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const handlePrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3))
  }

  const handleNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 3))
  }

  const visibleTestimonials = testimonials.slice(currentIndex * 3, currentIndex * 3 + 3)

  return (
    <section id="testimonials" className="section-padding bg-white/50">
      <Container>
        {/* Partner Colleges */}
        <div className="mb-20">
          <SectionHeader
            eyebrow="Trusted Partners"
            title="Approved & Verified Colleges"
            subtitle="Sample of our trusted partners across Gujarat"
            centered
            className="mb-12"
          />

          {/* Logo Grid */}
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-4">
            {partnerColleges.map((college, index) => (
              <motion.a
                key={college.name}
                href="#apply"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="glass-panel group flex h-32 flex-col items-center justify-center rounded-2xl p-6 text-center transition-all hover:shadow-lg"
              >
                {/* Placeholder logo with initials */}
                <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/10 to-primary/20 text-xl font-bold text-primary transition-colors group-hover:from-primary group-hover:to-primary-600 group-hover:text-white">
                  {college.initials}
                </div>
                <p className="text-xs font-medium text-ink-subtle group-hover:text-primary">
                  {college.name}
                </p>
              </motion.a>
            ))}
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

          {/* Desktop: Carousel with 3 cards */}
          <div className="relative hidden lg:block">
            <div className="grid gap-6 md:grid-cols-3">
              <AnimatePresence mode="wait">
                {visibleTestimonials.map((testimonial, index) => (
                  <motion.div
                    key={`${currentIndex}-${index}`}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <TestimonialCard {...testimonial} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                onClick={handlePrevious}
                className="rounded-full bg-white p-3 shadow-soft transition-all hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false)
                      setCurrentIndex(index)
                    }}
                    className={cn(
                      'h-2 rounded-full transition-all',
                      currentIndex === index ? 'w-8 bg-primary' : 'w-2 bg-ink/20'
                    )}
                    aria-label={`Go to testimonial set ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="rounded-full bg-white p-3 shadow-soft transition-all hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label="Next testimonials"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Mobile/Tablet: Show all testimonials in grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:hidden">
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
