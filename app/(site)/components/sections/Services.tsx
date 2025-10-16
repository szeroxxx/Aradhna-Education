'use client'

import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import { CheckSquare, Award, GraduationCap, Briefcase } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    icon: CheckSquare,
    title: 'College Shortlisting & Selection',
    description:
      'Get personalized college recommendations tailored to your NEET score, budget, location preferences, and career aspirations in medical and healthcare fields.',
  },
  {
    icon: Award,
    title: 'Scholarship & Financial Aid',
    description:
      'Access government scholarships, education loans, and financial aid programs. We help you find and apply for funding opportunities to make quality education affordable.',
  },
  {
    icon: GraduationCap,
    title: 'Exam & Interview Preparation',
    description:
      'Ace your entrance exams and admission interviews with expert coaching, mock tests, and personalized mentorship from experienced medical professionals.',
  },
  {
    icon: Briefcase,
    title: 'Post-Admission Career Support',
    description:
      "Your journey doesn't end at admission. Get guidance for internships, hospital placements, PG preparation, and long-term career planning in healthcare.",
  },
]

export function Services() {
  return (
    <section className="section-padding bg-gradient-to-b from-surface-muted to-white">
      <Container>
        <SectionHeader
          eyebrow="Services"
          title="Complete Support for Your Medical Education Journey"
          subtitle="From college selection to career launch—we're with you every step of the way"
          centered
          className="mb-16"
        />

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full rounded-2xl bg-white p-8 shadow-soft transition-all hover:shadow-lg">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                  <service.icon className="h-8 w-8 text-primary" aria-hidden="true" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-ink">{service.title}</h3>
                <p className="mb-6 text-ink-subtle">{service.description}</p>
                <Button variant="ghost" size="sm" className="group-hover:text-primary">
                  Learn More →
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
