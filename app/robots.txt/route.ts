import { env } from '@/lib/env'

export function GET() {
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${env.NEXT_PUBLIC_SITE_URL}/sitemap.xml
`

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}
