'use client'

import { Container } from '@/components/ui/Container'
import {
  ShieldCheck,
  Headphones,
  Users,
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

export function WhoWeAre() {
  return (
    <section id="about" className="section-padding bg-white/50">
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
            We help students across Gujarat get into verified nursing and pharmacy colleges with
            end-to-end guidance—from{' '}
            <span className="font-semibold text-primary">form fill-up to final certificate</span>.
          </p>
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

        {/* Location Card with Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-panel mx-auto max-w-4xl rounded-2xl p-8"
        >
          <h4 className="mb-4 text-center text-xl font-bold text-ink">Visit Our Office</h4>
          <div className="mb-4 text-center">
            <p className="mb-1 font-medium text-ink-subtle">Shrimad Bhavan, FF-102, Second Floor</p>
            <p className="mb-3 text-ink-subtle">Opp. Shri Kanya Shri Vikas Gruh, Dhebar Road, Rajkot</p>
            <a
              href="https://maps.google.com/?q=Shrimad+Bhavan+Dhebar+Road+Rajkot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              <MapPin className="h-4 w-4" />
              Get Directions
            </a>
          </div>
          
          {/* Google Maps Embed */}
          <div className="hidden overflow-hidden rounded-xl md:block">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.5234567890123!2d70.78088!3d22.30389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca248c77c099%3A0xdf5ac10af64e0042!2sDhebar%20Road%2C%20Rajkot%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1729180000000!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Aradhana Education Office Location - Dhebar Road, Rajkot"
            />
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
