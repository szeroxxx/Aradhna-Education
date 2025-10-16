'use client'

import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import { ShieldCheck, Headphones, IndianRupee, Building, MapPin, Briefcase } from 'lucide-react'
import { motion } from 'framer-motion'

const valueProps = [
  {
    icon: ShieldCheck,
    title: '100% Verified Institutions',
    description:
      'Every college we recommend is government-approved or recognized by MCI/NMC. No fake promises, only legitimate medical institutions.',
  },
  {
    icon: Headphones,
    title: 'End-to-End Guidance',
    description:
      'From application to certificate delivery, we provide complete handholding. One consultant, continuous support throughout your education journey.',
  },
  {
    icon: IndianRupee,
    title: 'Transparent & Affordable',
    description:
      "Clear fee structure with no hidden costs. We believe in honest pricing—you'll know exactly what you're paying for upfront.",
  },
  {
    icon: Building,
    title: 'Government & Private Options',
    description:
      'Access to both government medical colleges and top-recognized private institutions across Gujarat and India, giving you maximum choices.',
  },
  {
    icon: MapPin,
    title: 'Local Gujarat Expertise',
    description:
      "Our counselors are based in Gujarat and understand local students' needs, regional quotas, state counseling processes, and cultural context.",
  },
  {
    icon: Briefcase,
    title: 'Career & Placement Assistance',
    description:
      'Post-completion support for hospital placements, clinic setups, PG entrance prep, and career advancement opportunities in the medical field.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeader
          eyebrow="Why Choose Us"
          title="Why Aradhana Education is Your Trusted Partner"
          subtitle="We're not just consultants—we're your success partners with a proven track record"
          centered
          className="mb-16"
        />

        <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {valueProps.map((prop, index) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl border border-surface-muted bg-surface-muted/30 p-6 transition-all hover:border-primary/20 hover:shadow-soft"
            >
              <div className="mb-4 flex items-start gap-3">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-success/10">
                  <prop.icon className="h-6 w-6 text-success" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-ink">{prop.title}</h3>
                </div>
              </div>
              <p className="text-sm text-ink-subtle">{prop.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Button size="lg" className="shadow-lg">
            Schedule Free Consultation
          </Button>
        </motion.div>
      </Container>
    </section>
  )
}
