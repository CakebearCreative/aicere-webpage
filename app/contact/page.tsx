'use client';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="relative min-h-screen pt-32 pb-20">
      <div className="absolute inset-0 -z-10 bg-gradient-conic from-blue-600 via-purple-500 to-pink-500 opacity-30"></div>
      <div className="mx-auto max-w-4xl px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-extrabold sm:text-6xl">Contact Us</h1>
          <p className="mt-6 text-xl text-white/80">
            We'd love to hear from you! Whether you have questions, feedback, or partnership inquiries, feel free to reach out.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 ring-1 ring-white/10"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">Full Name</label>
                <input type="text" name="name" id="name" className="w-full bg-black/20 border border-white/20 rounded-lg p-3 focus:ring-purple-500 focus:border-purple-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">Email Address</label>
                <input type="email" name="email" id="email" className="w-full bg-black/20 border border-white/20 rounded-lg p-3 focus:ring-purple-500 focus:border-purple-500" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-white/80 mb-1">Subject</label>
                <input type="text" name="subject" id="subject" className="w-full bg-black/20 border border-white/20 rounded-lg p-3 focus:ring-purple-500 focus:border-purple-500" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1">Message</label>
                <textarea name="message" id="message" rows={4} className="w-full bg-black/20 border border-white/20 rounded-lg p-3 focus:ring-purple-500 focus:border-purple-500"></textarea>
              </div>
              <button type="submit" className="btn-primary w-full py-3">Send Message</button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 ring-1 ring-white/10">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3"><Mail className="h-6 w-6 text-purple-400"/> Email</h3>
              <p className="text-lg text-white/80">General Inquiries: <a href="mailto:info@aicere.com" className="underline hover:text-purple-400">info@aicere.com</a></p>
              <p className="text-lg text-white/80">Support: <a href="mailto:support@aicere.com" className="underline hover:text-purple-400">support@aicere.com</a></p>
              <p className="text-lg text-white/80">Sales: <a href="mailto:sales@aicere.com" className="underline hover:text-purple-400">sales@aicere.com</a></p>
            </div>

            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 ring-1 ring-white/10">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3"><Phone className="h-6 w-6 text-purple-400"/> Phone</h3>
              <p className="text-lg text-white/80">(Coming Soon)</p>
            </div>

            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 ring-1 ring-white/10">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3"><MapPin className="h-6 w-6 text-purple-400"/> Address</h3>
              <p className="text-lg text-white/80">Aicere AB<br />Stockholm, Sweden<br />(Full address coming soon)</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 