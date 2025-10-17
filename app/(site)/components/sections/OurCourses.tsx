'use client'

import { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { GraduationCap, Clock, BookOpen, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface Course {
  title: string
  fullName: string
  duration: string
  eligibility: string
  description: string
  category: 'nursing' | 'pharmacy'
}

const courses: Course[] = [
  {
    title: 'GNM',
    fullName: 'General Nursing & Midwifery',
    duration: '3 years',
    eligibility: '12th (Any Stream)',
    description: 'Comprehensive nursing diploma with clinical training',
    category: 'nursing',
  },
  {
    title: 'B.Sc Nursing',
    fullName: 'Bachelor of Science in Nursing',
    duration: '4 years',
    eligibility: '12th Science (45%)',
    description: 'Professional degree for advanced nursing practice',
    category: 'nursing',
  },
  {
    title: 'Post Basic B.Sc',
    fullName: 'Post Basic B.Sc Nursing',
    duration: '2 years',
    eligibility: 'GNM Complete',
    description: 'Upgrade your GNM to a bachelor degree',
    category: 'nursing',
  },
  {
    title: 'M.Sc Nursing',
    fullName: 'Master of Science in Nursing',
    duration: '2 years',
    eligibility: 'B.Sc Nursing',
    description: 'Specialized master program for nursing leaders',
    category: 'nursing',
  },
  {
    title: 'D.Pharm',
    fullName: 'Diploma in Pharmacy',
    duration: '2 years',
    eligibility: '10th + 12th Science',
    description: 'Entry-level pharmacy diploma for retail & hospital',
    category: 'pharmacy',
  },
  {
    title: 'B.Pharm',
    fullName: 'Bachelor of Pharmacy',
    duration: '4 years',
    eligibility: '12th Science (PCM/PCB)',
    description: 'Professional degree in pharmaceutical sciences',
    category: 'pharmacy',
  },
]

export function OurCourses() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'nursing' | 'pharmacy'>('all')

  const filteredCourses =
    activeFilter === 'all' ? courses : courses.filter((c) => c.category === activeFilter)

  return (
    <section id="courses" className="section-padding bg-white/50">
      <Container>
        <SectionHeader
          eyebrow="Programs"
          title="Our Courses"
          subtitle="Comprehensive healthcare education programs designed to build your career"
          centered
          className="mb-12"
        />

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-wrap justify-center gap-3"
        >
          {[
            { value: 'all', label: 'All Programs' },
            { value: 'nursing', label: 'Nursing' },
            { value: 'pharmacy', label: 'Pharmacy' },
          ].map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value as typeof activeFilter)}
              className={cn(
                'rounded-2xl px-6 py-3 text-sm font-semibold transition-all',
                activeFilter === filter.value
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-ink-subtle hover:bg-primary/5 hover:text-primary'
              )}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Courses Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group"
            >
              <div className="h-full rounded-2xl bg-gradient-to-br from-surface-muted to-white p-6 shadow-soft transition-shadow hover:shadow-lg">
                <div
                  className={cn(
                    'mb-4 inline-flex rounded-2xl p-3',
                    course.category === 'nursing'
                      ? 'bg-gradient-to-br from-primary/5 to-primary/10'
                      : 'bg-gradient-to-br from-success/5 to-success/10'
                  )}
                >
                  <GraduationCap
                    className={cn(
                      'h-6 w-6',
                      course.category === 'nursing' ? 'text-primary' : 'text-success'
                    )}
                    aria-hidden="true"
                  />
                </div>
                
                <h3 className="mb-1 text-xl font-bold text-ink">{course.title}</h3>
                <p className="mb-3 text-sm text-ink-subtle">{course.fullName}</p>
                <p className="mb-4 text-sm text-ink-subtle">{course.description}</p>

                <div className="space-y-2 border-t border-ink/5 pt-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-primary" aria-hidden="true" />
                    <span className="text-ink-subtle">
                      <span className="font-semibold text-ink">Duration:</span> {course.duration}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <BookOpen className="h-4 w-4 text-primary" aria-hidden="true" />
                    <span className="text-ink-subtle">
                      <span className="font-semibold text-ink">Eligibility:</span>{' '}
                      {course.eligibility}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    const applySection = document.getElementById('apply')
                    if (applySection) {
                      const headerHeight = 80
                      const elementPosition =
                        applySection.getBoundingClientRect().top + window.scrollY
                      const offsetPosition = elementPosition - headerHeight
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth',
                      })
                    }
                  }}
                  className="mt-4 flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-600"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
