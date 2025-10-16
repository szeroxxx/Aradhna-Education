import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { TestimonialCard } from '@/components/ui/TestimonialCard'

const testimonials = [
  {
    quote:
      'Aradhana helped me discover my passion for engineering. The mentorship was invaluable.',
    author: 'Priya Sharma',
    role: 'Engineering Student',
  },
  {
    quote: 'The personalized guidance made all the difference in my college selection process.',
    author: 'Rahul Patel',
    role: 'Medical Student',
  },
  {
    quote: 'I found clarity in my career path thanks to the expert mentors at Aradhana.',
    author: 'Ananya Desai',
    role: 'Business Student',
  },
]

export function Testimonials() {
  return (
    <section className="section-padding">
      <Container>
        <SectionHeader
          eyebrow="Testimonials"
          title="What Students Say"
          subtitle="Real stories from students who transformed their futures"
          centered
          className="mb-16"
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.author} {...testimonial} />
          ))}
        </div>
      </Container>
    </section>
  )
}
