'use client'

import { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactFormSchema, type ContactFormData } from '@/types/form'
import { COURSES, CITIES, WHATSAPP_NUMBER } from '@/lib/constants'
import { motion } from 'framer-motion'
import { CheckCircle2, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)

    try {
      // Send to API endpoint
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }).catch(() => {
        // Silently fail - we'll still redirect to WhatsApp
      })

      // Track analytics event
      if (typeof window !== 'undefined') {
        // Plausible analytics
        if (window.plausible) {
          window.plausible('lead_submitted', {
            props: { course: data.course, city: data.city },
          })
        }
        // Vercel Analytics
        if (window.va) {
          window.va('event', 'lead_submitted')
        }
      }

      // Prepare WhatsApp message with UTM params
      const message = `Hi! I'm interested in admission.
Name: ${data.name}
Phone: ${data.phone}
Course: ${data.course}
City: ${data.city}`

      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
      const urlWithUTM = `${whatsappUrl}&utm_source=website&utm_medium=form&utm_campaign=admission_2025`

      // Redirect to WhatsApp
      window.open(urlWithUTM, '_blank')

      setIsSuccess(true)
      reset()

      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000)
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="apply" className="section-padding bg-white/50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            eyebrow="Get Started"
            title="Apply for Admission 2025-26"
            subtitle="Fill in your details and we'll connect with you on WhatsApp"
            centered
            className="mb-8"
          />

          <div className="mx-auto mb-6 max-w-2xl text-center">
            <p className="text-sm text-ink-subtle">
              <span className="font-semibold text-primary">We respond within 24 hours</span> — your
              information is safe and secure.
            </p>
          </div>

          <div className="mx-auto max-w-2xl">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="glass-panel rounded-3xl p-8 shadow-soft"
            >
              <div className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink">
                    Full Name <span className="text-primary">*</span>
                  </label>
                  <input
                    {...register('name')}
                    type="text"
                    id="name"
                    className={cn(
                      'w-full rounded-2xl border-2 bg-white px-4 py-3 text-ink transition-colors',
                      'focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20',
                      errors.name ? 'border-red-500' : 'border-surface-muted'
                    )}
                    placeholder="Enter your full name"
                    aria-invalid={errors.name ? 'true' : 'false'}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-ink">
                    Mobile Number <span className="text-primary">*</span>
                  </label>
                  <input
                    {...register('phone')}
                    type="tel"
                    id="phone"
                    className={cn(
                      'w-full rounded-2xl border-2 bg-white px-4 py-3 text-ink transition-colors',
                      'focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20',
                      errors.phone ? 'border-red-500' : 'border-surface-muted'
                    )}
                    placeholder="10-digit mobile number"
                    aria-invalid={errors.phone ? 'true' : 'false'}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="mt-1 text-sm text-red-600" role="alert">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Course Field */}
                <div>
                  <label htmlFor="course" className="mb-2 block text-sm font-medium text-ink">
                    Interested Course <span className="text-primary">*</span>
                  </label>
                  <select
                    {...register('course')}
                    id="course"
                    className={cn(
                      'w-full rounded-2xl border-2 bg-white px-4 py-3 text-ink transition-colors',
                      'focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20',
                      errors.course ? 'border-red-500' : 'border-surface-muted'
                    )}
                    aria-invalid={errors.course ? 'true' : 'false'}
                    aria-describedby={errors.course ? 'course-error' : undefined}
                  >
                    <option value="">Select a course</option>
                    {COURSES.map((course) => (
                      <option key={course.value} value={course.label}>
                        {course.label}
                      </option>
                    ))}
                  </select>
                  {errors.course && (
                    <p id="course-error" className="mt-1 text-sm text-red-600" role="alert">
                      {errors.course.message}
                    </p>
                  )}
                </div>

                {/* City Field */}
                <div>
                  <label htmlFor="city" className="mb-2 block text-sm font-medium text-ink">
                    City <span className="text-primary">*</span>
                  </label>
                  <input
                    {...register('city')}
                    type="text"
                    id="city"
                    list="cities"
                    className={cn(
                      'w-full rounded-2xl border-2 bg-white px-4 py-3 text-ink transition-colors',
                      'focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20',
                      errors.city ? 'border-red-500' : 'border-surface-muted'
                    )}
                    placeholder="Enter your city"
                    aria-invalid={errors.city ? 'true' : 'false'}
                    aria-describedby={errors.city ? 'city-error' : undefined}
                  />
                  <datalist id="cities">
                    {CITIES.map((city) => (
                      <option key={city} value={city} />
                    ))}
                  </datalist>
                  {errors.city && (
                    <p id="city-error" className="mt-1 text-sm text-red-600" role="alert">
                      {errors.city.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting || isSuccess}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Submitting...
                    </>
                  ) : isSuccess ? (
                    <>
                      <CheckCircle2 className="mr-2 h-5 w-5" />
                      Submitted! Check WhatsApp
                    </>
                  ) : (
                    'Submit & Connect on WhatsApp'
                  )}
                </Button>

                {/* Success Message */}
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-2xl bg-success/10 p-4 text-center text-sm text-success"
                  >
                    ✓ Form submitted successfully! We&apos;ve opened WhatsApp for you.
                  </motion.div>
                )}
              </div>
            </form>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
