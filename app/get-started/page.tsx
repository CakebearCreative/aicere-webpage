'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Download, DollarSign, BookOpen, HelpCircle } from 'lucide-react';

export default function GetStartedPage() {
  const steps = [
    {
      icon: <Download className="h-10 w-10 text-purple-400" />,
      title: 'Download Aicere',
      description: 'Grab the latest version of our software suite or individual applications for your operating system.',
      href: '/download',
      buttonText: 'Go to Downloads',
    },
    {
      icon: <DollarSign className="h-10 w-10 text-green-400" />,
      title: 'Choose a Plan',
      description: 'Explore our flexible pricing plans, from a generous free tier to powerful Pro and Business options.',
      href: '/pricing',
      buttonText: 'View Pricing',
    },
    {
      icon: <BookOpen className="h-10 w-10 text-blue-400" />,
      title: 'Read the Docs',
      description: 'Dive into our comprehensive documentation to learn about all features and how to get the most out of Aicere.',
      href: '/docs',
      buttonText: 'Browse Docs',
    },
    {
      icon: <HelpCircle className="h-10 w-10 text-pink-400" />,
      title: 'Join the Community',
      description: 'Connect with other Aicere users, ask questions, and share your creations in our community forum.',
      href: '/forum',
      buttonText: 'Visit Forum',
    },
  ];

  return (
    <div className="relative min-h-screen pt-32 pb-20">
      <div className="absolute inset-0 -z-10 bg-gradient-conic from-pink-500 via-orange-500 to-yellow-500 opacity-30"></div>
      <div className="mx-auto max-w-4xl px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-extrabold sm:text-6xl">Get Started with Aicere</h1>
          <p className="mt-6 text-xl text-white/80">
            Ready to supercharge your productivity? Here's how to begin your Aicere journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 ring-1 ring-white/10 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            >
              <div className="mb-6 p-3 bg-white/10 rounded-full">
                {step.icon}
              </div>
              <h2 className="text-2xl font-bold mb-3">{step.title}</h2>
              <p className="text-white/70 mb-6 flex-grow">{step.description}</p>
              <Link href={step.href} className="btn-primary w-full max-w-xs">
                {step.buttonText}
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-xl text-white/80">
            Have more questions? <Link href="/contact" className="font-semibold underline hover:text-purple-400">Contact our support team</Link>.
          </p>
        </motion.div>
      </div>
    </div>
  );
} 