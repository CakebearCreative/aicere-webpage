'use client';
import { motion } from 'framer-motion';

export default function PrivacyPage() {
  const lastUpdated = "October 26, 2023"; // Placeholder date

  return (
    <div className="relative min-h-screen pt-32 pb-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-600 opacity-30"></div>
      <div className="mx-auto max-w-4xl px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-extrabold sm:text-6xl">Privacy Policy</h1>
          <p className="mt-4 text-lg text-white/70">Last Updated: {lastUpdated}</p>
        </motion.div>

        <motion.div 
          className="bg-black/20 backdrop-blur-sm p-8 md:p-12 rounded-2xl ring-1 ring-white/10 space-y-6 text-white/80 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <section>
            <h2 className="text-2xl font-bold mb-3 text-white">1. Introduction</h2>
            <p>
              Aicere AB ("Aicere", "we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our products, software, services, or website (collectively, the "Services"). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-white">2. Information We Collect</h2>
            <p>
              We may collect personal information from you in a variety of ways, including, but not limited to, when you register for an account, use our Services, subscribe to our newsletter, or communicate with us. The types of personal information we may collect include your name, email address, payment information (if applicable), and usage data related to our Services.
            </p>
            <p className="mt-2">
              For services that offer local processing (e.g., Aigent, Aimage, offline Aibot), Aicere is designed to minimize data collection. Content processed locally on your device is generally not transmitted to our servers unless explicitly stated for a specific feature (e.g., cloud-based model access, optional cloud sync).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-white">3. How We Use Your Information</h2>
            <p>
              We may use the information we collect from you to:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Provide, operate, and maintain our Services;</li>
              <li>Improve, personalize, and expand our Services;</li>
              <li>Understand and analyze how you use our Services;</li>
              <li>Develop new products, services, features, and functionality;</li>
              <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the Service, and for marketing and promotional purposes;</li>
              <li>Process your transactions;</li>
              <li>Send you emails;</li>
              <li>Find and prevent fraud.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-white">4. How We Share Your Information</h2>
            <p>
              We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential. We may also release information when it's release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property or safety.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-white">5. Data Security</h2>
            <p>
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-white">6. Your Data Protection Rights</h2>
            <p>
              Depending on your location, you may have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-white">7. Children's Privacy</h2>
            <p>
              Our Services are not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that a child under 13 has provided us with personal information, we will take steps to delete such information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-white">8. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-white">9. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@aicere.com" className="underline hover:text-purple-400">privacy@aicere.com</a>.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
} 