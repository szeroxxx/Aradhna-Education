import { DefaultSeoProps } from 'next-seo'
import { env } from './env'

const siteUrl = env.NEXT_PUBLIC_SITE_URL
const siteName = env.NEXT_PUBLIC_SITE_NAME

export const defaultSEO: DefaultSeoProps = {
  titleTemplate: `%s | ${siteName}`,
  defaultTitle: 'Nursing & Pharmacy Admission in Gujarat | Aradhana Education',
  description:
    'Get admission guidance for GNM, B.Sc, P.B.Sc & Pharmacy. Verified colleges, end-to-end support, 25K+ students guided.',
  canonical: siteUrl,
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName,
    images: [
      {
        url: `${siteUrl}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: 'Nursing & Pharmacy Admission in Gujarat | Aradhana Education',
      },
    ],
  },
  twitter: {
    handle: '@aradhana',
    site: '@aradhana',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'theme-color',
      content: '#00B3A4',
    },
    {
      name: 'keywords',
      content:
        'nursing admission Gujarat, pharmacy admission Gujarat, GNM admission, BSc nursing, pharmacy courses, nursing colleges Gujarat, pharmacy colleges Gujarat, admission guidance',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
  ],
}
