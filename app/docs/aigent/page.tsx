'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronLeft, Zap, Settings, FileText } from 'lucide-react';

export default function AigentDocsPage() {
  return (
    <div className="relative min-h-screen pt-32 pb-20">
      <div className="absolute inset-0 -z-10 bg-gradient-conic from-purple-600 via-indigo-700 to-blue-800 opacity-30"></div>
      <div className="mx-auto max-w-4xl px-6">
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/docs" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-6">
            <ChevronLeft className="h-5 w-5 mr-1" />
            Back to All Documentation
          </Link>
          <h1 className="text-5xl font-extrabold sm:text-6xl">Aigent Documentation</h1>
          <p className="mt-4 text-xl text-white/80">
            Unlock the full potential of Aigent with our detailed guides and references.
          </p>
        </motion.div>

        <motion.div 
          className="bg-black/20 backdrop-blur-sm p-8 md:p-12 rounded-2xl ring-1 ring-white/10 space-y-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <section>
            <h2 className="text-3xl font-bold mb-4 text-white flex items-center"><Zap className="h-7 w-7 mr-3 text-purple-400"/>Getting Started</h2>
            <p className="text-white/80 mb-3">
              Learn the basics of Aigent, from installation to creating your first AI agent. We'll guide you through the user interface and core concepts of node-based agent development.
            </p>
            <Link href="/docs/aigent/getting-started" className="font-medium text-purple-400 hover:underline">Read: Getting Started Guide →</Link>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-white flex items-center"><Settings className="h-7 w-7 mr-3 text-purple-400"/>Core Concepts</h2>
            <ul className="list-disc list-inside space-y-2 text-white/80">
              <li>Understanding Nodes and Connections</li>
              <li>Working with Local AI Models and RAG</li>
              <li>Agent Automation and Scheduling</li>
              <li>Input/Output and Data Handling</li>
              <li>Using the Plugin System</li>
            </ul>
            <Link href="/docs/aigent/core-concepts" className="font-medium text-purple-400 hover:underline mt-3 inline-block">Explore Core Concepts →</Link>
          </section>
          
          <section>
            <h2 className="text-3xl font-bold mb-4 text-white flex items-center"><FileText className="h-7 w-7 mr-3 text-purple-400"/>Tutorials & Examples</h2>
            <p className="text-white/80 mb-3">
              Follow step-by-step tutorials for common use cases and explore example projects to inspire your own creations.
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/80">
              <li>Building a Code Generation Agent</li>
              <li>Automating Repetitive Tasks</li>
              <li>Integrating with External APIs</li>
            </ul>
            <Link href="/docs/aigent/tutorials" className="font-medium text-purple-400 hover:underline mt-3 inline-block">View Tutorials →</Link>
          </section>

          {/* Add more sections like API Reference, Advanced Topics, Troubleshooting etc. */}
          
        </motion.div>
      </div>
    </div>
  );
} 