import { Container } from '@/components/ui/Container'
import { Stat } from '@/components/ui/Stat'

const stats = [
  { number: '25K+', label: 'Students Guided' },
  { number: '90%', label: 'Success Rate' },
  { number: '50+', label: 'Partner Colleges' },
  { number: '100%', label: 'Verified Institutions' },
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
