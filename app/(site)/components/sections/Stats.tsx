import { Container } from '@/components/ui/Container'
import { Stat } from '@/components/ui/Stat'

const stats = [
  { number: '10K+', label: 'Students Guided' },
  { number: '500+', label: 'Expert Mentors' },
  { number: '95%', label: 'Success Rate' },
  { number: '50+', label: 'Partner Colleges' },
]

export function Stats() {
  return (
    <section className="section-padding bg-white/50">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Stat key={stat.label} {...stat} />
          ))}
        </div>
      </Container>
    </section>
  )
}
