'use client';
import { motion } from 'framer-motion';
import { MessagesSquare, Search, Edit3 } from 'lucide-react';
import Link from 'next/link';

export default function ForumPage() {
  return (
    <div className="relative min-h-screen pt-32 pb-20">
      <div className="absolute inset-0 -z-10 bg-gradient-conic from-sky-500 via-cyan-500 to-teal-600 opacity-30"></div>
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <MessagesSquare className="h-16 w-16 mx-auto mb-6 text-cyan-400" />
          <h1 className="text-5xl font-extrabold sm:text-6xl">Aicere Community Forum</h1>
          <p className="mt-6 text-xl text-white/80">
            Connect with other Aicere users, share your projects, ask questions, and get help.
          </p>
        </motion.div>

        <motion.div 
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Placeholder for forum content. This would typically be an embedded forum or a custom-built one. */}
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 ring-1 ring-white/10">
            <h2 className="text-3xl font-bold mb-6 text-white">Forum Coming Soon!</h2>
            <p className="text-lg text-white/70 mb-8">
              We are working hard to bring you a vibrant community space. Stay tuned for updates!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary flex items-center justify-center gap-2 w-full sm:w-auto" disabled>
                    <Search className="h-5 w-5"/> Search Topics (Soon)
                </button>
                <button className="btn-ghost flex items-center justify-center gap-2 w-full sm:w-auto" disabled>
                    <Edit3 className="h-5 w-5"/> New Post (Soon)
                </button>
            </div>
            <p className="mt-8 text-sm text-white/60">
              In the meantime, you can reach out to us on our <Link href="/contact" className="underline hover:text-cyan-400">Contact Page</Link> or check our <Link href="/docs" className="underline hover:text-cyan-400">Documentation</Link>.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 