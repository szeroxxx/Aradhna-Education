'use client'

import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Accordion } from '@/components/ui/Accordion'
import { motion } from 'framer-motion'

const faqs = [
  {
    question: 'What courses do you provide admission support for?',
    answer:
      'We provide comprehensive admission support for Nursing courses (GNM, B.Sc Nursing, M.Sc Nursing, ANM) and Pharmacy courses (D.Pharma, B.Pharma, M.Pharma) in government and private colleges across Gujarat.',
  },
  {
    question: 'How much do your services cost?',
    answer:
      'Our basic counseling and guidance services are completely free. We charge a nominal fee only for documentation and application processing support. The exact fee depends on the services you choose. Contact us for detailed pricing.',
  },
  {
    question: 'Do you guarantee admission?',
    answer:
      'While we cannot guarantee admission as it depends on eligibility criteria and seat availability, we have a 90%+ success rate. We guide you through the entire process and help you apply to multiple colleges to maximize your chances.',
  },
  {
    question: 'What documents are required for admission?',
    answer:
      'Typically, you need 10th & 12th mark sheets, transfer certificate, migration certificate, caste certificate (if applicable), Aadhar card, passport-size photos, and entrance exam scorecard (if applicable). We provide a complete checklist based on your chosen course.',
  },
  {
    question: 'Can you help with scholarships and financial aid?',
    answer:
      'Yes! We guide students through various government scholarship schemes like Post Matric Scholarship, National Scholarship Portal, and college-specific financial aid programs. We help with application forms and documentation.',
  },
  {
    question: 'How long does the admission process take?',
    answer:
      'The timeline varies by college and course. Typically, the process takes 2-4 weeks from application to admission confirmation. We keep you updated at every step and ensure timely completion of all formalities.',
  },
  {
    question: 'Do you provide support after admission?',
    answer:
      'Absolutely! We continue to support you with hostel arrangements, course guidance, internship opportunities, and placement assistance. Our relationship with students extends beyond just admission.',
  },
  {
    question: 'Which cities in Gujarat do you cover?',
    answer:
      'We cover all major cities including Ahmedabad, Surat, Vadodara, Rajkot, Bhavnagar, Jamnagar, Gandhinagar, and Anand. We work with colleges across Gujarat to provide you with the best options.',
  },
]

export function FAQ() {
  return (
    <section className="section-padding">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about our admission support services"
            centered
            className="mb-12"
          />

          <div className="mx-auto max-w-3xl">
            <Accordion items={faqs} />
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
