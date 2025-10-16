import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { IconCard } from '@/components/ui/IconCard'
import { Users, Target, BookOpen, Award } from 'lucide-react'

const features = [
  {
    icon: Users,
    title: 'Expert Mentors',
    description: 'Connect with experienced professionals who guide you every step of the way.',
  },
  {
    icon: Target,
    title: 'Personalized Guidance',
    description: 'Tailored career advice based on your unique strengths and aspirations.',
  },
  {
    icon: BookOpen,
    title: 'Learning Resources',
    description: 'Access curated content and tools to accelerate your growth.',
  },
  {
    icon: Award,
    title: 'Proven Results',
    description: 'Join thousands of students who have achieved their career goals.',
  },
]

export function Features() {
  return (
    <section className="section-padding">
      <Container>
        <SectionHeader
          eyebrow="Features"
          title="Everything You Need to Succeed"
          subtitle="Comprehensive support for your career journey"
          centered
          className="mb-16"
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <IconCard key={feature.title} {...feature} />
          ))}
        </div>
      </Container>
    </section>
  )
}
