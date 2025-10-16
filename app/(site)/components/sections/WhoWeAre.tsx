'use client'

import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Badge } from '@/components/ui/Badge'
import {
  CheckCircle2,
  Award,
  Users,
  TrendingUp,
  ShieldCheck,
  Headphones,
  MapPin,
} from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: ShieldCheck,
    title: '100% Verified Colleges',
    description: 'Only government and recognized private colleges',
  },
  {
    icon: Headphones,
    title: 'Complete Support',
    description: 'From form fill-up to certificate delivery',
  },
  {
    icon: Users,
    title: 'Expert Counselors',
    description: 'Gujarat-based experienced guidance team',
  },
  {
    icon: MapPin,
    title: 'Pan-India Network',
    description: 'Admissions across Karnataka and beyond',
  },
]

const stats = [
  { icon: Award, label: 'Top 1 in Gujarat', variant: 'success' as const },
  { icon: Users, label: '25K+ Students', variant: 'default' as const },
  { icon: TrendingUp, label: '90%+ Success Rate', variant: 'success' as const },
]

export function WhoWeAre() {
  return (
    <section className="section-padding bg-white/50">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-h2 font-bold">
            About <span className="text-primary">Aradhana Education</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-ink-subtle">
            Gujarat's trusted career consultancy that helps students from{' '}
            <span className="font-semibold text-primary">form fill-up to certificate</span> for
            Nursing and Pharmacy admissions.
          </p>
        </motion.div>

        {/* Tagline Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 rounded-2xl bg-gradient-to-r from-primary to-primary/80 p-8 text-center shadow-lg"
        >
          <h3 className="text-3xl font-bold text-white md:text-4xl">Learn. Grow. Succeed.</h3>
        </motion.div>

        {/* Features Grid */}
        <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel rounded-2xl p-6 text-center transition-shadow hover:shadow-lg"
            >
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h4 className="mb-2 text-lg font-bold text-ink">{feature.title}</h4>
              <p className="text-sm text-ink-subtle">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Location Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-panel mx-auto max-w-2xl rounded-2xl p-8 text-center"
        >
          <h4 className="mb-3 text-xl font-bold text-ink">Located in Rajkot</h4>
          <p className="mb-1 font-medium text-ink-subtle">Shrimad Bhavan, FF-102, Second Floor</p>
          <p className="text-ink-subtle">Opp. Shri Kanya Shri Vikas Gruh, Dhebar Road, Rajkot</p>
        </motion.div>
      </Container>
    </section>
  )
}
