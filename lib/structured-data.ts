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
    'Trusted by 1K+ students. Leading admission guidance provider for Nursing and Pharmacy courses in Gujarat with 90% success rate and 50+ INC & KNC approved colleges. Admission open till 31st November.',
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
    telephone: '+91-95586-20892',
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
      name: 'What courses do you offer admission support for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We provide complete admission assistance for Nursing programs (GNM, B.Sc Nursing, Post Basic B.Sc, and M.Sc Nursing) and Pharmacy programs (D.Pharm and B.Pharm) in both government and private colleges across Gujarat. For a detailed list, please visit our Courses section.',
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
        text: 'While we cannot guarantee admission—since it depends on eligibility, merit, and seat availability—we maintain a success rate of over 90%. Our expert team guides you through every step and helps you apply to multiple colleges to greatly increase your chances of admission.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you help with scholarships and financial aid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We assist students in applying for various government scholarship schemes—such as the Post Matric Scholarship and those available through the National Scholarship Portal—as well as college-specific financial aid programs. Our team provides guidance with eligibility, documentation, and application procedures.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does the admission process take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The admission timeline varies by college and course. On average, it takes about 2–4 weeks from the time of application to final confirmation. Our team keeps you informed at every stage and ensures all procedures are completed on time.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide support after admission?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Absolutely. Our support doesn't end once you're admitted. We assist with hostel arrangements, course guidance, internship opportunities, and placement support—ensuring you have a smooth and successful academic journey.",
      },
    },
    {
      '@type': 'Question',
      name: 'Why should I choose Aradhana for admission guidance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "We provide end-to-end admission guidance that's personalized to your goals and interests. Our expert counselors offer transparent advice, help you select the right course and college, and handle all documentation with care. Backed by years of experience and strong partnerships with reputed institutions across Gujarat, we ensure a smooth, stress-free admission experience.",
      },
    },
  ],
}
