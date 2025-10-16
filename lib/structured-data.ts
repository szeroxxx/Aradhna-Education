import { Organization, WebSite, FAQPage, WithContext } from 'schema-dts'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aradhana.example.com'

export const organizationSchema: WithContext<Organization> = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Aradhana Education',
  alternateName: 'Aradhana',
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    'Leading admission guidance provider for Nursing and Pharmacy courses in Gujarat. 25K+ students guided.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Your Street Address',
    addressLocality: 'Rajkot',
    addressRegion: 'Gujarat',
    postalCode: '360001',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-98765-43210',
    contactType: 'Customer Service',
    areaServed: 'IN',
    availableLanguage: ['English', 'Hindi', 'Gujarati'],
  },
  sameAs: [
    'https://facebook.com/aradhana',
    'https://instagram.com/aradhana',
    'https://twitter.com/aradhana',
    'https://linkedin.com/company/aradhana',
  ],
}

export const websiteSchema: WithContext<WebSite> = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Aradhana Education',
  url: siteUrl,
  description:
    'Get admission guidance for GNM, B.Sc, P.B.Sc & Pharmacy. Verified colleges, end-to-end support.',
  potentialAction: {
    '@type': 'SearchAction',
    target: `${siteUrl}/search?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  } as unknown as WebSite['potentialAction'], // SearchAction type doesn't fully match schema-dts
}

export const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What courses do you provide admission support for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We provide comprehensive admission support for Nursing courses (GNM, B.Sc Nursing, M.Sc Nursing, ANM) and Pharmacy courses (D.Pharma, B.Pharma, M.Pharma) in government and private colleges across Gujarat.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much do your services cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our basic counseling and guidance services are completely free. We charge a nominal fee only for documentation and application processing support. The exact fee depends on the services you choose.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you guarantee admission?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'While we cannot guarantee admission as it depends on eligibility criteria and seat availability, we have a 90%+ success rate. We guide you through the entire process and help you apply to multiple colleges to maximize your chances.',
      },
    },
    {
      '@type': 'Question',
      name: 'What documents are required for admission?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Typically, you need 10th & 12th mark sheets, transfer certificate, migration certificate, caste certificate (if applicable), Aadhar card, passport-size photos, and entrance exam scorecard (if applicable). We provide a complete checklist based on your chosen course.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you help with scholarships and financial aid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! We guide students through various government scholarship schemes like Post Matric Scholarship, National Scholarship Portal, and college-specific financial aid programs. We help with application forms and documentation.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does the admission process take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The timeline varies by college and course. Typically, the process takes 2-4 weeks from application to admission confirmation. We keep you updated at every step and ensure timely completion of all formalities.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide support after admission?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely! We continue to support you with hostel arrangements, course guidance, internship opportunities, and placement assistance. Our relationship with students extends beyond just admission.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which cities in Gujarat do you cover?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We cover all major cities including Ahmedabad, Surat, Vadodara, Rajkot, Bhavnagar, Jamnagar, Gandhinagar, and Anand. We work with colleges across Gujarat to provide you with the best options.',
      },
    },
  ],
}
