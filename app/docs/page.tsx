'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookOpen, Code, ImageIcon, Music, Bot, FileText, Video } from 'lucide-react';

export default function DocsPage() {
  const docSections = [
    {
      id: 'getting-started',
      name: 'Getting Started',
      description: 'Learn the basics of Aicere Studio, from installation to your first AI workflow.',
      icon: <BookOpen className="h-6 w-6" />,
      href: '/docs/getting-started'
    },
    {
      id: 'agent-mode',
      name: 'Agent Mode Documentation',
      description: 'Master visual workflow automation with drag-and-drop nodes, AI models, and complex automation.',
      icon: <Bot className="h-6 w-6" />,
      href: '/docs/agent-mode'
    },
    {
      id: 'image-mode',
      name: 'Image Mode Documentation',
      description: 'Generate and edit AI images with professional tools, local models, and cloud providers.',
      icon: <ImageIcon className="h-6 w-6" />,
      href: '/docs/image-mode'
    },
    {
      id: 'audio-mode',
      name: 'Audio Mode Documentation',
      description: 'Create music, speech, and sound effects using AI models like ElevenLabs and Suno AI.',
      icon: <Music className="h-6 w-6" />,
      href: '/docs/audio-mode'
    },
    {
      id: 'model-management',
      name: 'Model Management',
      description: 'Install, configure, and manage AI models from CivitAI, HuggingFace, and other sources.',
      icon: <FileText className="h-6 w-6" />,
      href: '/docs/model-management'
    },
    {
      id: 'api-reference',
      name: 'API Reference',
      description: 'Technical documentation for integrating with Aicere Studio and extending its functionality.',
      icon: <Code className="h-6 w-6" />,
      href: '/docs/api'
    }
  ];

  return (
    <div className="relative min-h-screen pt-24 pb-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-600 via-purple-500 to-pink-500 opacity-30"></div>
      <div className="mx-auto max-w-6xl px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-extrabold sm:text-6xl">Documentation</h1>
          <p className="mt-6 text-xl text-white/80 max-w-2xl mx-auto">
            Comprehensive guides and references to help you master Aicere Studio's powerful AI capabilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {docSections.map((section, index) => (
            <motion.div
              key={section.id}
              className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 ring-1 ring-white/10 hover:ring-white/20 transition-all group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                  {section.icon}
                </div>
                <h3 className="text-xl font-semibold">{section.name}</h3>
              </div>
              <p className="text-white/70 mb-6">{section.description}</p>
              <Link 
                href={section.href}
                className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium"
              >
                Read Documentation →
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Quick Links */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Quick Links</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4">Popular Guides</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/docs/getting-started/installation" className="text-purple-400 hover:text-purple-300">
                    Installation Guide
                  </Link>
                </li>
                <li>
                  <Link href="/docs/agent-mode/first-workflow" className="text-purple-400 hover:text-purple-300">
                    Creating Your First Workflow
                  </Link>
                </li>
                <li>
                  <Link href="/docs/image-mode/ai-generation" className="text-purple-400 hover:text-purple-300">
                    AI Image Generation Basics
                  </Link>
                </li>
                <li>
                  <Link href="/docs/audio-mode/text-to-speech" className="text-purple-400 hover:text-purple-300">
                    Text-to-Speech Setup
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4">Advanced Topics</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/docs/model-management/local-models" className="text-purple-400 hover:text-purple-300">
                    Setting Up Local AI Models
                  </Link>
                </li>
                <li>
                  <Link href="/docs/agent-mode/advanced-nodes" className="text-purple-400 hover:text-purple-300">
                    Advanced Node Types
                  </Link>
                </li>
                <li>
                  <Link href="/docs/image-mode/professional-editing" className="text-purple-400 hover:text-purple-300">
                    Professional Image Editing
                  </Link>
                </li>
                <li>
                  <Link href="/docs/api/workflow-automation" className="text-purple-400 hover:text-purple-300">
                    Workflow Automation API
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Community Support */}
        <motion.div
          className="mt-16 text-center bg-black/20 backdrop-blur-sm rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <h3 className="text-2xl font-bold mb-4">Need Help?</h3>
          <p className="text-white/70 mb-6">
            Can't find what you're looking for? Our community and support team are here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/forum" className="btn-primary">
              Visit Community Forum
            </Link>
            <Link href="/contact" className="btn-ghost">
              Contact Support
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 