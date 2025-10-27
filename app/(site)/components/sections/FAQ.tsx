'use client'

import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Accordion } from '@/components/ui/Accordion'
import { motion } from 'framer-motion'

const faqs = [
  {
    question: 'What courses do you offer admission support for?',
    answer:
      'We provide complete admission assistance for Nursing programs (GNM, B.Sc Nursing, Post Basic B.Sc, and M.Sc Nursing) and Pharmacy programs (D.Pharm and B.Pharm) in both government and private colleges across Gujarat. For a detailed list, please visit our Courses section.',
  },
  {
    question: 'Which documents are needed for application?',
    answer:
      'You will need 10th & 12th marksheets, transfer certificate, ID proof (Aadhar card), passport-size photographs, and caste certificate (if applicable). Specific requirements vary by program—we provide a detailed checklist based on your chosen course.',
  },
  {
    question: 'How much do your services cost?',
    answer:
      'Our basic counseling and guidance services are completely free. We charge a nominal fee only for documentation and application processing support. The exact fee depends on the services you choose. Contact us for detailed pricing.',
  },
  {
    question: 'Do you guarantee admission?',
    answer:
      'While we cannot guarantee admission—since it depends on eligibility, merit, and seat availability—we maintain a success rate of over 90%. Our expert team guides you through every step and helps you apply to multiple colleges to greatly increase your chances of admission.',
  },
  {
    question: 'Can you help with scholarships and financial aid?',
    answer:
      'Yes. We assist students in applying for various government scholarship schemes—such as the Post Matric Scholarship and those available through the National Scholarship Portal—as well as college-specific financial aid programs. Our team provides guidance with eligibility, documentation, and application procedures.',
  },
  {
    question: 'How long does the admission process take?',
    answer:
      'The admission timeline varies by college and course. On average, it takes about 2–4 weeks from the time of application to final confirmation. Our team keeps you informed at every stage and ensures all procedures are completed on time.',
  },
  {
    question: 'Do you provide support after admission?',
    answer:
      "Absolutely. Our support doesn't end once you're admitted. We assist with hostel arrangements, course guidance, internship opportunities, and placement support—ensuring you have a smooth and successful academic journey.",
  },
  {
    question: 'Why should I choose Aradhana for admission guidance?',
    answer:
      "We provide end-to-end admission guidance that's personalized to your goals and interests. Our expert counselors offer transparent advice, help you select the right course and college, and handle all documentation with care. Backed by years of experience and strong partnerships with reputed institutions across Gujarat, we ensure a smooth, stress-free admission experience.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="section-padding">
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
