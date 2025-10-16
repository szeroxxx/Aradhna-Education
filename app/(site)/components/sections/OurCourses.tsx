'use client'

import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { GraduationCap, Clock, BookOpen } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const nursingPrograms = [
  {
    title: 'GNM Nursing',
    fullName: 'General Nursing & Midwifery',
    duration: '3 years',
    eligibility: '12th Arts/Commerce',
    gradient: 'from-primary/5 to-primary/10',
  },
  {
    title: 'B.Sc Nursing',
    fullName: 'Bachelor of Science in Nursing',
    duration: '4 years',
    eligibility: '12th Science (45%)',
    gradient: 'from-success/5 to-success/10',
  },
  {
    title: 'P.B.Sc Nursing',
    fullName: 'Post Basic B.Sc Nursing',
    duration: '2 years',
    eligibility: 'GNM Complete',
    gradient: 'from-warning/5 to-warning/10',
  },
  {
    title: 'M.Sc Nursing',
    fullName: 'Master of Science in Nursing',
    duration: '2 years',
    eligibility: 'B.Sc (N) Complete',
    gradient: 'from-primary/5 to-primary/10',
  },
]

const pharmacyProgram = {
  title: 'Diploma in Pharmacy',
  shortName: 'D.Pharm',
  duration: '2 years',
  eligibility: '10th + 12th Science',
  gradient: 'from-primary/5 to-primary/10',
}

export function OurCourses() {
  return (
    <section className="section-padding bg-white/50">
      <Container>
        <SectionHeader
          eyebrow="Programs"
          title="Our Courses"
          subtitle="Comprehensive healthcare education programs designed to build your career"
          centered
          className="mb-16"
        />

        {/* Nursing Programs */}
        <div className="mb-12">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 text-center text-2xl font-bold text-ink"
          >
            Nursing Programs
          </motion.h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {nursingPrograms.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group"
              >
                <div className="h-full rounded-2xl bg-gradient-to-br from-surface-muted to-white p-6 shadow-soft transition-shadow hover:shadow-lg">
                  <div
                    className={cn(
                      'mb-4 inline-flex rounded-2xl bg-gradient-to-br p-3',
                      program.gradient
                    )}
                  >
                    <GraduationCap className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <h4 className="mb-1 text-xl font-bold text-ink">{program.title}</h4>
                  <p className="mb-4 text-sm text-ink-subtle">{program.fullName}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-primary" aria-hidden="true" />
                      <span className="text-ink-subtle">
                        <span className="font-semibold text-ink">Duration:</span> {program.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <BookOpen className="h-4 w-4 text-primary" aria-hidden="true" />
                      <span className="text-ink-subtle">
                        <span className="font-semibold text-ink">Requires:</span> {program.eligibility}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pharmacy Program */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 text-center text-2xl font-bold text-ink"
          >
            Pharmacy Program
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="mx-auto max-w-md"
          >
            <div className="h-full rounded-2xl bg-gradient-to-br from-surface-muted to-white p-6 shadow-soft transition-shadow hover:shadow-lg">
              <div
                className={cn(
                  'mb-4 inline-flex rounded-2xl bg-gradient-to-br p-3',
                  pharmacyProgram.gradient
                )}
              >
                <GraduationCap className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <h4 className="mb-1 text-xl font-bold text-ink">
                {pharmacyProgram.title} ({pharmacyProgram.shortName})
              </h4>
              
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-primary" aria-hidden="true" />
                  <span className="text-ink-subtle">
                    <span className="font-semibold text-ink">Duration:</span> {pharmacyProgram.duration}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <BookOpen className="h-4 w-4 text-primary" aria-hidden="true" />
                  <span className="text-ink-subtle">
                    <span className="font-semibold text-ink">Requires:</span> {pharmacyProgram.eligibility}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
