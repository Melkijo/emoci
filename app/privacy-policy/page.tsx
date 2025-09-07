import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="font-sans min-h-screen">
      <Navbar />
      
      <div className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              Effective Date: September 2025
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-background border border-border rounded-2xl p-8 space-y-8">
              
              {/* Introduction */}
              <section>
                <p className="text-foreground leading-relaxed">
                  <strong>Emoci</strong> ("we," "our," or "us") values your privacy. This Privacy Policy explains how we handle information when you use our application.
                </p>
              </section>

              {/* Information We Collect */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1">•</span>
                    <span>We do not collect, store, or share any personal information from users.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1">•</span>
                    <span>Conversations with the AI are processed only to provide responses.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1">•</span>
                    <span>No data is stored on our servers.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1">•</span>
                    <span>We do not track, log, or sell user data.</span>
                  </li>
                </ul>
              </section>

              {/* Use of Third-Party Services */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Use of Third-Party Services</h2>
                <p className="text-foreground leading-relaxed mb-4">
                  Our app uses Gemini AI to generate responses. Conversations are processed by Gemini AI to provide answers, but we do not control or store how Gemini processes the data.
                </p>
                <p className="text-foreground leading-relaxed">
                  Please review Google's privacy policy for more details:{' '}
                  <a 
                    href="https://policies.google.com/privacy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 underline transition-colors duration-200"
                  >
                    https://policies.google.com/privacy
                  </a>
                </p>
              </section>

              {/* Data Security */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Data Security</h2>
                <p className="text-foreground leading-relaxed">
                  Since we do not collect or store any personal information, there is no risk of your data being exposed from our side.
                </p>
              </section>

              {/* Children's Privacy */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Children's Privacy</h2>
                <p className="text-foreground leading-relaxed">
                  Our app does not collect information from anyone, including children under 13. However, we recommend parental guidance for young users.
                </p>
              </section>

              {/* Changes to This Policy */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Changes to This Policy</h2>
                <p className="text-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. If we make changes, we will update the date at the top of this page.
                </p>
              </section>

              {/* Contact Us */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
                <p className="text-foreground leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="bg-muted/50 rounded-lg p-4">
                  <p className="text-foreground font-medium">
                    Email: melkijonathan2@gmail.com
                  </p>
                </div>
              </section>

            </div>
          </div>

          
        </div>

      </div>
      <Footer />
    </div>
  );
}
