'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Download, DollarSign, BookOpen, HelpCircle } from 'lucide-react';

export default function GetStartedPage() {
  const steps = [
    {
      icon: <Download className="h-10 w-10 text-purple-400" />,
      title: 'Download Aicere Studio',
      description: 'Get the latest version of Aicere Studio for your operating system. One download gives you access to all modes: Agent, Image, and Audio.',
      href: '/download',
      buttonText: 'Download Now',
    },
    {
      icon: <DollarSign className="h-10 w-10 text-green-400" />,
      title: 'Choose Your Plan',
      description: 'Start with our generous Hobby plan for free, or upgrade to Pro for access to premium cloud models and advanced features.',
      href: '/pricing',
      buttonText: 'View Pricing',
    },
    {
      icon: <BookOpen className="h-10 w-10 text-blue-400" />,
      title: 'Explore the Modes',
      description: 'Learn about Agent Mode for workflow automation, Image Mode for AI image generation, and Audio Mode for creating music and speech.',
      href: '/features',
      buttonText: 'See Features',
    },
    {
      icon: <HelpCircle className="h-10 w-10 text-pink-400" />,
      title: 'Join the Community',
      description: 'Connect with other Aicere Studio users, share workflows, get help, and discover new ways to use AI in your creative projects.',
      href: '/forum',
      buttonText: 'Visit Forum',
    },
  ];

  return (
    <div className="relative min-h-screen pt-32 pb-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-pink-500 via-orange-500 to-yellow-500 opacity-30"></div>
      <div className="mx-auto max-w-4xl px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-extrabold sm:text-6xl">Get Started with Aicere Studio</h1>
          <p className="mt-6 text-xl text-white/80">
            Ready to supercharge your creativity with AI? Here's how to begin your Aicere Studio journey.
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

        {/* Quick Start Guide */}
        <motion.div
          className="mt-20 bg-black/20 backdrop-blur-sm rounded-2xl p-8 ring-1 ring-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Quick Start Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3">1. Installation</h3>
              <p className="text-white/70">
                Download and install Aicere Studio. No complex setup required - the app includes everything you need to get started.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3">2. First Launch</h3>
              <p className="text-white/70">
                Open the app and explore the different modes. Start with Image Mode to generate your first AI image with local models.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3">3. Go Pro</h3>
              <p className="text-white/70">
                Upgrade to Pro for access to premium models like Imagen 4, GPT-4, and ElevenLabs for professional-quality results.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <p className="text-xl text-white/80">
            Have questions? <Link href="/contact" className="font-semibold underline hover:text-purple-400">Contact our support team</Link>.
          </p>
        </motion.div>
      </div>
    </div>
  );
} 