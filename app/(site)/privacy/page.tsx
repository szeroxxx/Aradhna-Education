import { Container } from '@/components/ui/Container'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Aradhana Education admission guidance services.',
}

export default function PrivacyPage() {
  return (
    <div className="py-20">
      <Container>
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 font-display text-4xl font-bold text-ink md:text-5xl">
            Privacy Policy
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-subtle-ink">
              <strong>Last updated:</strong> {new Date().toLocaleDateString('en-IN')}
            </p>

            <section className="mt-8">
              <h2 className="font-display text-2xl font-bold text-ink">1. Information We Collect</h2>
              <p className="text-subtle-ink">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="text-subtle-ink">
                <li>Name and contact information (phone number, email)</li>
                <li>Educational background and course preferences</li>
                <li>City and location information</li>
                <li>Communication preferences</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="font-display text-2xl font-bold text-ink">2. How We Use Your Information</h2>
              <p className="text-subtle-ink">We use the information we collect to:</p>
              <ul className="text-subtle-ink">
                <li>Provide admission guidance and counseling services</li>
                <li>Communicate with you about courses and colleges</li>
                <li>Send updates about admission processes and deadlines</li>
                <li>Improve our services and user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="font-display text-2xl font-bold text-ink">3. Information Sharing</h2>
              <p className="text-subtle-ink">
                We do not sell, trade, or rent your personal information to third parties. We may
                share your information with:
              </p>
              <ul className="text-subtle-ink">
                <li>Educational institutions for admission purposes (with your consent)</li>
                <li>Service providers who assist in our operations</li>
                <li>Legal authorities when required by law</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="font-display text-2xl font-bold text-ink">4. Data Security</h2>
              <p className="text-subtle-ink">
                We implement appropriate security measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="font-display text-2xl font-bold text-ink">5. Your Rights</h2>
              <p className="text-subtle-ink">You have the right to:</p>
              <ul className="text-subtle-ink">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="font-display text-2xl font-bold text-ink">6. Contact Us</h2>
              <p className="text-subtle-ink">
                If you have questions about this Privacy Policy, please contact us at:
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
