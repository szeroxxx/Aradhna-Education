import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-sky-blue to-warm-cream">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-8">
            <h1 className="mb-4 font-display text-8xl font-bold text-ink">404</h1>
            <h2 className="mb-4 font-display text-3xl font-bold text-ink">Page Not Found</h2>
            <p className="text-lg text-subtle-ink">
              Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or
              deleted.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/">
              <Button size="lg">
                <Home className="mr-2 h-5 w-5" />
                Go Home
              </Button>
            </Link>
            <Link href="/#contact">
              <Button variant="secondary" size="lg">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
            </Link>
          </div>

          <div className="mt-12">
            <p className="text-sm text-subtle-ink">
              Need help?{' '}
              <Link href="/#contact" className="text-primary hover:underline">
                Contact us
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}
