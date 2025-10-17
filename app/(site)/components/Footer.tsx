import { Container } from '@/components/ui/Container'
import { PHONE_NUMBER, WHATSAPP_NUMBER } from '@/lib/constants'
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react'

const footerLinks = {
  company: [
    { label: 'About Us', href: '#who-we-are' },
    { label: 'Why Choose Us', href: '#why-choose-us' },
    { label: 'Contact', href: '#contact' },
  ],
  courses: [
    { label: 'GNM Nursing', href: '#courses' },
    { label: 'B.Sc Nursing', href: '#courses' },
    { label: 'Pharmacy Courses', href: '#courses' },
    { label: 'All Courses', href: '#courses' },
  ],
  support: [
    { label: 'Admission Process', href: '#admission-process' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <Container>
        <div className="py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand & Contact */}
            <div className="lg:col-span-1">
              <h3 className="mb-4 font-display text-2xl font-bold text-primary">Aradhana</h3>
              <p className="mb-6 text-sm text-white/70">
                Your trusted partner for nursing and pharmacy admissions in Gujarat.
              </p>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
                  <a
                    href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
                    className="hover:text-primary transition-colors"
                    aria-label="Call us"
                  >
                    {PHONE_NUMBER}
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <MessageCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                    aria-label="WhatsApp us"
                  >
                    WhatsApp: {PHONE_NUMBER}
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
                  <a
                    href="mailto:info@aradhana.com"
                    className="hover:text-primary transition-colors"
                    aria-label="Email us"
                  >
                    info@aradhana.com
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
                  <span className="text-white/70">
                    Shrimad Bhavan, Dhebar Road, Rajkot
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
                  <span className="text-white/70">Mon-Sat: 9:00 AM - 7:00 PM</span>
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="mb-4 font-semibold">Company</h4>
              <ul className="space-y-2 text-sm">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-white/70 hover:text-primary">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Courses Links */}
            <div>
              <h4 className="mb-4 font-semibold">Courses</h4>
              <ul className="space-y-2 text-sm">
                {footerLinks.courses.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-white/70 hover:text-primary">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="mb-4 font-semibold">Support</h4>
              <ul className="space-y-2 text-sm">
                {footerLinks.support.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-white/70 hover:text-primary">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-white/60 md:flex-row">
            <p>© {new Date().getFullYear()} Aradhana Education. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="/privacy" className="hover:text-primary">
                Privacy
              </a>
              <a href="/terms" className="hover:text-primary">
                Terms
              </a>
              <a href="/sitemap.xml" className="hover:text-primary">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
