'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookOpen, Code, ImageIcon, MessageSquare, ChevronRight } from 'lucide-react';

export default function DocsPage() {
  const productDocs = [
    {
      id: 'aigent',
      name: 'Aigent Documentation',
      description: 'Learn how to build, configure, and deploy AI agents with Aigent\'s node-based system.',
      icon: <Code className="h-8 w-8 text-purple-400" />,
      href: '/docs/aigent'
    },
    {
      id: 'aimage',
      name: 'Aimage Documentation',
      description: 'Master AI image generation and editing. Explore ComfyUI workflows and advanced features.',
      icon: <ImageIcon className="h-8 w-8 text-blue-400" />,
      href: '/docs/aimage' // Placeholder, to be created
    },
    {
      id: 'aibot',
      name: 'Aibot Documentation',
      description: 'Integrate Aibot into your website or use it locally. Train your chatbot and customize its behavior.',
      icon: <MessageSquare className="h-8 w-8 text-pink-400" />,
      href: '/docs/aibot' // Placeholder, to be created
    }
  ];

  const generalTopics = [
    { name: 'Installation Guide', href: '/docs/installation' },
    { name: 'Account & Subscription', href: '/docs/account' },
    { name: 'API Reference', href: '/docs/api' },
    { name: 'Troubleshooting', href: '/docs/troubleshooting' },
  ];

  return (
    <div className="relative min-h-screen pt-32 pb-20">
      <div className="absolute inset-0 -z-10 bg-gradient-conic from-blue-700 via-sky-600 to-cyan-500 opacity-30"></div>
      <div className="mx-auto max-w-5xl px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <BookOpen className="h-16 w-16 mx-auto mb-6 text-cyan-400" />
          <h1 className="text-5xl font-extrabold sm:text-6xl">Documentation</h1>
          <p className="mt-6 text-xl text-white/80">
            Find everything you need to know about Aicere products and services.
          </p>
        </motion.div>

        {/* Product Documentation */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center sm:text-left">Product Documentation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productDocs.map((doc) => (
              <Link href={doc.href} key={doc.id} className="block bg-black/30 backdrop-blur-sm rounded-2xl p-6 ring-1 ring-white/10 hover:ring-cyan-500 transition-all group">
                <div className="flex items-center mb-3">
                  {doc.icon}
                  <h3 className="ml-3 text-xl font-semibold">{doc.name}</h3>
                </div>
                <p className="text-white/70 text-sm mb-4">{doc.description}</p>
                <span className="text-sm font-medium text-cyan-400 group-hover:underline flex items-center">
                  View Docs <ChevronRight className="h-4 w-4 ml-1" />
                </span>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* General Topics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center sm:text-left">General Topics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {generalTopics.map((topic) => (
              <Link href={topic.href} key={topic.name} className="block bg-black/30 backdrop-blur-sm rounded-2xl p-6 ring-1 ring-white/10 hover:ring-cyan-500 transition-all group">
                <h3 className="text-xl font-semibold mb-2">{topic.name}</h3>
                <span className="text-sm font-medium text-cyan-400 group-hover:underline flex items-center">
                  Read More <ChevronRight className="h-4 w-4 ml-1" />
                </span>
              </Link>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
} 