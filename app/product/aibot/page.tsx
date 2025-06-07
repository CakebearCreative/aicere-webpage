'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MessageSquare, Database, Lock, Globe } from 'lucide-react';

export default function AibotPage() {
  const features = [
    {
      icon: <MessageSquare className="h-8 w-8 text-blue-500" />,
      title: 'No-Code Embeddable Widget',
      description: 'Add an AI chatbot to your website with a single line of code. No technical expertise required.',
    },
    {
      icon: <Database className="h-8 w-8 text-pink-500" />,
      title: 'Content-Grounded Responses',
      description: 'Train your AI assistant on your own content, documents, and FAQs for precise and accurate answers.',
    },
    {
      icon: <Lock className="h-8 w-8 text-purple-500" />,
      title: 'Privacy-First Design',
      description: 'Keep your proprietary documents on your own machines while still getting GPT-quality answers.',
    },
    {
      icon: <Globe className="h-8 w-8 text-green-500" />,
      title: 'Online/Offline Flexibility',
      description: 'Use cloud-based AI via APIs or run completely offline for sensitive use-cases.',
    },
  ];

  return (
    <div className="relative min-h-screen pt-24 pb-20">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-pink-500 via-purple-600 to-blue-500 opacity-50"></div>
      
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-extrabold sm:text-6xl">Aibot</h1>
            <p className="mt-6 text-xl text-white/80">
              A no-code, embeddable AI assistant that knows your content. Available online or offline for ultimate flexibility and privacy.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/download" className="btn-primary">
                Get Started
              </Link>
              <Link href="/docs/aibot" className="btn-ghost">
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
              src="/screens/aibot-chat.png"
              alt="Aibot chat interface"
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
        
        {/* Use cases */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24"
        >
          <h2 className="text-3xl font-bold text-center mb-16">Perfect For</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 ring-1 ring-white/10">
              <h3 className="text-xl font-bold mb-4">Customer Support</h3>
              <p className="text-white/80">
                Provide instant, accurate answers to customer questions 24/7 without hiring additional support staff.
              </p>
            </div>
            
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 ring-1 ring-white/10">
              <h3 className="text-xl font-bold mb-4">Knowledge Bases</h3>
              <p className="text-white/80">
                Transform static documentation into interactive conversations that help users find exactly what they need.
              </p>
            </div>
            
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 ring-1 ring-white/10">
              <h3 className="text-xl font-bold mb-4">Local File Assistance</h3>
              <p className="text-white/80">
                Deploy Aibot on your local network to provide AI assistance for sensitive company documents and files.
              </p>
            </div>
          </div>
        </motion.div>
        
        {/* Implementation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-24"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Effortless Implementation</h2>
          
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 ring-1 ring-white/10">
            <h3 className="text-xl font-bold mb-4">Add to your website with a single line of code:</h3>
            <div className="bg-gray-900 p-4 rounded-xl overflow-x-auto">
              <code className="text-green-400">
                &lt;script src="https://cdn.aicere.com/aibot.js" data-apikey="YOUR_API_KEY"&gt;&lt;/script&gt;
              </code>
            </div>
            <p className="mt-4 text-white/80">
              That's it! No complex setup or technical knowledge required.
            </p>
          </div>
        </motion.div>
        
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Ready to add AI to your website?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Join businesses already using Aibot to provide instant, accurate answers to their customers.
          </p>
          <Link href="/download" className="btn-primary text-lg px-8 py-3">
            Get Started with Aibot
          </Link>
        </motion.div>
      </div>
    </div>
  );
} 