import { Container } from '@/components/ui/Container'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of service for Aradhana Education admission guidance services.',
}

export default function TermsPage() {
  return (
    <div className="py-20">
      <Container>
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 font-display text-4xl font-bold text-ink md:text-5xl">
            Terms of Service
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-subtle-ink">
              <strong>Last updated:</strong> {new Date().toLocaleDateString('en-IN')}
            </p>

            <section className="mt-8">
              <h2 className="font-display text-2xl font-bold text-ink">1. Acceptance of Terms</h2>
              <p className="text-subtle-ink">
                By accessing and using Aradhana Education&apos;s services, you accept and agree to be
                bound by these Terms of Service. If you do not agree to these terms, please do not
                use our services.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="font-display text-2xl font-bold text-ink">2. Services Provided</h2>
              <p className="text-subtle-ink">
                Aradhana Education provides admission guidance and counseling services for nursing
                and pharmacy courses in Gujarat. Our services include:
              </p>
              <ul className="text-subtle-ink">
                <li>Career counseling and course guidance</li>
                <li>College selection assistance</li>
                <li>Application and documentation support</li>
                <li>Admission process guidance</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="font-display text-2xl font-bold text-ink">3. User Responsibilities</h2>
              <p className="text-subtle-ink">You agree to:</p>
              <ul className="text-subtle-ink">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of your account</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not misuse our services or interfere with their operation</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="font-display text-2xl font-bold text-ink">4. Fees and Payment</h2>
              <p className="text-subtle-ink">
                Basic counseling services are free. Additional services may incur fees, which will
                be clearly communicated before you commit to them. All fees are non-refundable
                unless otherwise stated.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="font-display text-2xl font-bold text-ink">5. Disclaimer</h2>
              <p className="text-subtle-ink">
                While we strive to provide accurate information and guidance, we do not guarantee
                admission to any institution. Final admission decisions are made by the respective
                educational institutions based on their criteria.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="font-display text-2xl font-bold text-ink">6. Limitation of Liability</h2>
              <p className="text-subtle-ink">
                Aradhana Education shall not be liable for any indirect, incidental, special, or
                consequential damages arising from the use of our services.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="font-display text-2xl font-bold text-ink">7. Changes to Terms</h2>
              <p className="text-subtle-ink">
                We reserve the right to modify these terms at any time. Continued use of our
                services after changes constitutes acceptance of the modified terms.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="font-display text-2xl font-bold text-ink">8. Contact Information</h2>
              <p className="text-subtle-ink">
                For questions about these Terms of Service, contact us at:
              </p>
              <p className="text-subtle-ink">
                Email: info@aradhana.com
                <br />
                Phone: +91 98765 43210
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  )
}
