'use client';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="relative min-h-screen pt-32 pb-20">
      <div className="absolute inset-0 -z-10 bg-gradient-conic from-purple-600 via-pink-500 to-green-500 opacity-30"></div>
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.h1 
          className="text-5xl font-extrabold sm:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Aicere
        </motion.h1>
        <motion.p 
          className="mt-6 text-xl text-white/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Aicere is a Swedish AI company startup providing Software as a Service solutions to increase productivity. Our mission is to build powerful, privacy-focused AI tools that empower developers, designers, and businesses.
        </motion.p>
        
        <motion.div 
          className="mt-12 text-left bg-black/20 backdrop-blur-sm p-8 rounded-2xl ring-1 ring-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Our Vision</h2>
          <p className="text-lg text-white/70 mb-4">
            We believe in the transformative power of artificial intelligence to augment human capabilities. Our focus is on creating intuitive, efficient, and reliable software that integrates seamlessly into your workflow, helping you achieve more with less effort.
          </p>
          <p className="text-lg text-white/70 mb-4">
            At Aicere, we prioritize a local-first approach, ensuring that your data remains secure and under your control whenever possible. We are committed to developing AI solutions that are not only cutting-edge but also ethical and transparent.
          </p>
          <h2 className="text-3xl font-bold mb-6 mt-10 text-center">Our Products</h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-white/70">
            <li><span className="font-semibold">Aigent:</span> An agentic node-based development program for developers.</li>
            <li><span className="font-semibold">Aimage:</span> An AI Image editor with ComfyUI features similar to Photoshop, but less expensive.</li>
            <li><span className="font-semibold">Aibot:</span> Offline/Online mode bot that incorporates with webpages or local folders.</li>
          </ul>
        </motion.div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6">Meet the (Future) Team</h2>
          <p className="text-lg text-white/70">
            We are a passionate team of innovators, engineers, and designers dedicated to pushing the boundaries of AI. (More details about the team coming soon!)
          </p>
        </motion.div>

      </div>
    </div>
  );
} 