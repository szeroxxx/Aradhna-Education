'use client'

import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { MessageCircle, Phone, Shield } from 'lucide-react'
import { motion } from 'framer-motion'
import { WHATSAPP_NUMBER, PHONE_NUMBER } from '@/lib/constants'

export function CTA() {
  const handleWhatsAppClick = () => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi! I want to apply for admission 2025-26.')}`,
      '_blank'
    )
  }

  const handleCallClick = () => {
    window.location.href = `tel:${PHONE_NUMBER}`
  }

  return (
    <section className="section-padding">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel rounded-3xl p-8 text-center shadow-soft md:p-12 lg:p-16"
        >
          <h2 className="text-display-xl mb-4 leading-tight">
            Ready to start your{' '}
            <span className="font-semibold text-primary">healthcare career?</span>
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-ink-subtle md:text-xl">
            Take the first step towards your dream college. Our expert counselors are ready to
            guide you through the admission process.
          </p>

          <div className="mb-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" onClick={handleWhatsAppClick} className="gap-2">
              <MessageCircle className="h-5 w-5" />
              Apply on WhatsApp
            </Button>
            <Button variant="secondary" size="lg" onClick={handleCallClick} className="gap-2">
              <Phone className="h-5 w-5" />
              Call Now
            </Button>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-ink-subtle">
            <Shield className="h-4 w-4 text-success" />
            <span>Your information is safe and secure. We respect your privacy.</span>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
