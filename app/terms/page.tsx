'use client';
import { motion } from 'framer-motion';

export default function TermsPage() {
  const lastUpdated = "October 26, 2023"; // Placeholder date

  return (
    <div className="relative min-h-screen pt-32 pb-20">
      <div className="absolute inset-0 -z-10 bg-gradient-conic from-green-500 via-teal-500 to-blue-600 opacity-30"></div>
      <div className="mx-auto max-w-4xl px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-extrabold sm:text-6xl">Terms of Service</h1>
          <p className="mt-4 text-lg text-white/70">Last Updated: {lastUpdated}</p>
        </motion.div>

        <motion.div 
          className="bg-black/20 backdrop-blur-sm p-8 md:p-12 rounded-2xl ring-1 ring-white/10 space-y-6 text-white/80 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <section>
            <h2 className="text-2xl font-bold mb-3 text-white">1. Acceptance of Terms</h2>
            <p>
              By accessing or using any Aicere AB ("Aicere", "we", "us", or "our") products, software, services, or website (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to all of these Terms, do not use our Services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-white">2. Changes to Terms</h2>
            <p>
              Aicere reserves the right to modify or replace these Terms at any time. We will provide notice of material changes, such as by posting a notice on our website or sending an email. Your continued use of the Services after any such changes constitutes your acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-white">3. Use of Services</h2>
            <p>
              You agree to use the Services only for lawful purposes and in accordance with these Terms. You are responsible for all activity that occurs under your account. You may not use the Services in any manner that could damage, disable, overburden, or impair our servers or networks.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-3 text-white">4. Intellectual Property</h2>
            <p>
              All content and materials available on the Services, including but not limited to text, graphics, website name, code, images, and logos, are the intellectual property of Aicere and are protected by applicable copyright and trademark law. Any inappropriate use, including but not limited to the reproduction, distribution, display, or transmission of any content on this site is strictly prohibited unless specifically authorized by Aicere.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-white">5. User Content</h2>
            <p>
              If you post, upload, or make available any content through the Services ("User Content"), you grant Aicere a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute your User Content in connection with operating and providing the Services. You are solely responsible for your User Content and the consequences of posting or publishing it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-white">6. Privacy</h2>
            <p>
              Your use of the Services is also governed by our Privacy Policy, which is incorporated by reference into these Terms. Please review our Privacy Policy to understand our practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-white">7. Disclaimer of Warranties</h2>
            <p>
              The Services are provided "as is" and "as available" without any warranties of any kind, express or implied. Aicere does not warrant that the Services will be uninterrupted, error-free, or secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-white">8. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, Aicere shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-white">9. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of Sweden, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-white">10. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at <a href="mailto:legal@aicere.com" className="underline hover:text-purple-400">legal@aicere.com</a>.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
} 