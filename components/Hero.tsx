'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center text-center pt-20 px-6">
      {/* background blob */}
      <div className="absolute inset-0 -z-10 bg-gradient-conic from-purple-600 via-pink-500 to-green-500 opacity-70"></div>
      
      <motion.h1 
        className="mx-auto max-w-4xl text-6xl font-extrabold tracking-tight sm:text-6xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        AI-Powered Productivity
      </motion.h1>
      
      <motion.p 
        className="mt-6 max-w-xl text-lg text-white/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Aicere is a Swedish AI company providing powerful Software as a Service solutions that respect your privacy with local-first processing.
      </motion.p>
      
      <motion.div 
        className="mt-10 flex gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Link href="/download" className="btn-primary">Download for Windows</Link>
        <Link href="/features" className="btn-ghost">Explore Products</Link>
      </motion.div>

      {/* hero code window */}
      <motion.div
        className="mt-24 w-full max-w-5xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <Image 
          src="/screens/hero-code.png"
          alt="Aicere AI Suite featuring Aigent, Aimage, and Aibot"
          width={1200}
          height={700}
          className="rounded-2xl shadow-2xl ring-1 ring-white/10"
        />
      </motion.div>
    </section>
  );
} 