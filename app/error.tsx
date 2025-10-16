'use client'

import { useEffect } from 'react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { RefreshCw, Home } from 'lucide-react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-sky-blue to-warm-cream">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-8">
            <h1 className="mb-4 font-display text-8xl font-bold text-ink">500</h1>
            <h2 className="mb-4 font-display text-3xl font-bold text-ink">
              Something Went Wrong
            </h2>
            <p className="text-lg text-subtle-ink">
              We're sorry, but something unexpected happened. Our team has been notified and we're
              working to fix it.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button onClick={reset} size="lg">
              <RefreshCw className="mr-2 h-5 w-5" />
              Try Again
            </Button>
            <Link href="/">
              <Button variant="secondary" size="lg">
                <Home className="mr-2 h-5 w-5" />
                Go Home
              </Button>
            </Link>
          </div>

          {process.env.NODE_ENV === 'development' && error.message && (
            <div className="mt-8 rounded-2xl bg-red-50 p-4 text-left">
              <p className="mb-2 font-semibold text-red-900">Error Details (Dev Only):</p>
              <pre className="overflow-auto text-xs text-red-800">{error.message}</pre>
            </div>
          )}

          <div className="mt-12">
            <p className="text-sm text-subtle-ink">
              Need immediate help?{' '}
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
