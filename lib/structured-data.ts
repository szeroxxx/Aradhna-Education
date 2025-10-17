import { Organization, WebSite, FAQPage, LocalBusiness, WithContext } from 'schema-dts'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aradhana.example.com'

export const localBusinessSchema: WithContext<LocalBusiness> = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Aradhana Education',
  image: `${siteUrl}/logo.png`,
  '@id': siteUrl,
  url: siteUrl,
  telephone: '+91-95865-38671',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Shrimad Bhavan, FF-102, Second Floor, Dhebar Road',
    addressLocality: 'Rajkot',
    addressRegion: 'Gujarat',
    postalCode: '360001',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 22.3039,
    longitude: 70.7833,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '19:00',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '250',
  },
}

export const organizationSchema: WithContext<Organization> = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Aradhana Education',
  alternateName: 'Aradhana',
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    'Trusted by 25K+ students. Leading admission guidance provider for Nursing and Pharmacy courses in Gujarat with 90% success rate and 50+ partner colleges.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Shrimad Bhavan, FF-102, Second Floor, Dhebar Road',
    addressLocality: 'Rajkot',
    addressRegion: 'Gujarat',
    postalCode: '360001',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-95865-38671',
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
    'Get admission guidance for GNM, B.Sc Nursing, Post Basic B.Sc, M.Sc Nursing, D.Pharm & B.Pharm. Verified colleges, end-to-end support from form fill-up to final certificate.',
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
        text: 'We provide comprehensive admission support for Nursing courses (GNM, B.Sc Nursing, Post Basic B.Sc, M.Sc Nursing) and Pharmacy courses (D.Pharm, B.Pharm) in government and private colleges across Gujarat.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Aradhana Education a registered consultancy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we operate transparently with verified partners and official documentation. We work only with government-approved and recognized institutions, ensuring complete transparency in the admission process.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which documents are needed for application?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You will need 10th & 12th marksheets, transfer certificate, ID proof (Aadhar card), passport-size photographs, and caste certificate (if applicable). Specific requirements vary by program—we provide a detailed checklist based on your chosen course.',
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
