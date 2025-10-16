import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  weight: ['400', '500', '600', '700'],
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  preload: true,
  weight: ['600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'Nursing & Pharmacy Admission in Gujarat | Aradhana Education',
    template: `%s | ${process.env.NEXT_PUBLIC_SITE_NAME || 'Aradhana'}`,
  },
  description:
    'Get admission guidance for GNM, B.Sc, P.B.Sc & Pharmacy. Verified colleges, end-to-end support, 25K+ students guided.',
  keywords: [
    'nursing admission Gujarat',
    'pharmacy admission Gujarat',
    'GNM admission',
    'BSc nursing',
    'pharmacy courses',
    'nursing colleges Gujarat',
    'pharmacy colleges Gujarat',
    'admission guidance',
    'Rajkot nursing admission',
    'Gujarat medical education',
  ],
  authors: [{ name: 'Aradhana Education' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    siteName: process.env.NEXT_PUBLIC_SITE_NAME || 'Aradhana',
    title: 'Nursing & Pharmacy Admission in Gujarat | Aradhana Education',
    description:
      'Get admission guidance for GNM, B.Sc, P.B.Sc & Pharmacy. Verified colleges, end-to-end support, 25K+ students guided.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Nursing & Pharmacy Admission in Gujarat | Aradhana Education',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nursing & Pharmacy Admission in Gujarat | Aradhana Education',
    description:
      'Get admission guidance for GNM, B.Sc, P.B.Sc & Pharmacy. Verified colleges, end-to-end support, 25K+ students guided.',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Content Security Policy - Add to next.config.js headers for production */}
        {/* 
        Content-Security-Policy:
          default-src 'self';
          script-src 'self' 'unsafe-inline' 'unsafe-eval' https://plausible.io https://va.vercel-scripts.com;
          style-src 'self' 'unsafe-inline';
          img-src 'self' data: https:;
          font-src 'self' data:;
          connect-src 'self' https://plausible.io https://vitals.vercel-insights.com;
          frame-ancestors 'none';
        */}
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://plausible.io https://va.vercel-scripts.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://plausible.io https://vitals.vercel-insights.com; frame-ancestors 'none';"
        />
        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN && (
          <script
            defer
            data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
            src="https://plausible.io/js/script.js"
          />
        )}
      </head>
      <body className="font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Skip to main content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
