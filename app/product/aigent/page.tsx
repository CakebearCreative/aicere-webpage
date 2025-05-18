'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Check, Code, FileCode, Sparkles } from 'lucide-react';

export default function AigentPage() {
  const features = [
    {
      icon: <Code className="h-8 w-8 text-purple-500" />,
      title: 'Smart Code Completion',
      description: 'Aigent predicts your next line of code with remarkable accuracy, speeding up development across all languages.',
    },
    {
      icon: <FileCode className="h-8 w-8 text-pink-500" />,
      title: 'Refactoring Assistance',
      description: 'Get suggestions for code improvements, optimizations, and cleaner implementations.',
    },
    {
      icon: <Sparkles className="h-8 w-8 text-green-500" />,
      title: 'AI Code Generation',
      description: 'Describe what you need in plain English, and Aigent will generate the corresponding code for you.',
    },
  ];

  return (
    <div className="relative min-h-screen pt-24 pb-20">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-conic from-purple-600 via-pink-500 to-green-500 opacity-50"></div>
      
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-extrabold sm:text-6xl">Aigent</h1>
            <p className="mt-6 text-xl text-white/80">
              The AI coding assistant that helps you write better code, faster.
              Integrates with your favorite IDE and supports all major programming languages.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/download" className="btn-primary">
                Download Now
              </Link>
              <Link href="/docs/aigent" className="btn-ghost">
                View Documentation
              </Link>
            </div>
          </motion.div>
          
          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20"
          >
            <Image
              src="/screens/aigent-vscode.png"
              alt="Aigent in VS Code"
              width={800}
              height={600}
              className="w-full h-auto"
            />
          </motion.div>
        </div>
        
        {/* Features section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24"
        >
          <h2 className="text-3xl font-bold text-center mb-16">Key Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 ring-1 ring-white/10"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-white/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Language support */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Supported Languages</h2>
          <p className="text-center text-xl text-white/80 mb-12">
            Aigent works with all major programming languages and frameworks
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {['JavaScript', 'TypeScript', 'Python', 'Java', 'C#', 'Go', 'Rust', 'PHP', 'Ruby', 'Swift', 'Kotlin', 'Dart'].map((lang) => (
              <div 
                key={lang}
                className="bg-black/20 backdrop-blur-sm rounded-xl p-4 text-center ring-1 ring-white/10"
              >
                {lang}
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Ready to code faster?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Join thousands of developers who have boosted their productivity with Aigent.
          </p>
          <Link href="/download" className="btn-primary text-lg px-8 py-3">
            Download Aigent
          </Link>
        </motion.div>
      </div>
    </div>
  );
} 