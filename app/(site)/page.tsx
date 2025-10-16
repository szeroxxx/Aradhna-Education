import { Hero } from './components/sections/Hero'
import { Stats } from './components/sections/Stats'
import { WhoWeAre } from './components/sections/WhoWeAre'
import { MoreWays } from './components/sections/MoreWays'
import { OurCourses } from './components/sections/OurCourses'
import { SocialProof } from './components/sections/SocialProof'
import { FAQ } from './components/sections/FAQ'
import { CTA } from './components/sections/CTA'
import { ContactForm } from './components/sections/ContactForm'
import { organizationSchema, websiteSchema, faqSchema } from '@/lib/structured-data'

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main id="main-content">
        <Hero />
        <Stats />
        <WhoWeAre />
        <MoreWays />
        <OurCourses />
        <SocialProof />
        <FAQ />
        <CTA />
        <ContactForm />
      </main>
    </>
  )
}
