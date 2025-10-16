'use client'

import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ListChecks, Award, GraduationCap, Briefcase } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const features = [
  {
    icon: ListChecks,
    title: 'College Shortlisting',
    description:
      'Get personalized recommendations based on your budget, location, and career goals.',
    gradient: 'from-primary/5 to-primary/10',
  },
  {
    icon: Award,
    title: 'Scholarship Guidance',
    description:
      'Discover and apply for government scholarships and financial aid programs available to you.',
    gradient: 'from-success/5 to-success/10',
  },
  {
    icon: GraduationCap,
    title: 'Exam & Interview Prep',
    description:
      'Prepare for entrance exams and admission interviews with our expert guidance and resources.',
    gradient: 'from-warning/5 to-warning/10',
  },
  {
    icon: Briefcase,
    title: 'Post-Admission Support',
    description:
      'Continue receiving support for internships, placements, and career development after admission.',
    gradient: 'from-primary/5 to-primary/10',
  },
]

export function MoreWays() {
  return (
    <section className="section-padding">
      <Container>
        <SectionHeader
          eyebrow="Services"
          title="More ways we help"
          subtitle="Comprehensive support at every step of your healthcare education journey"
          centered
          className="mb-16"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
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
                    feature.gradient
                  )}
                >
                  <feature.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="mb-2 text-h3 font-bold">{feature.title}</h3>
                <p className="text-ink-subtle">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
