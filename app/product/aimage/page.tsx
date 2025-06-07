'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ImageIcon, Wand2, Layers, Palette } from 'lucide-react';

export default function AimagePage() {
  const features = [
    {
      icon: <ImageIcon className="h-8 w-8 text-blue-500" />,
      title: 'AI Image Generation',
      description: 'Create stunning visuals from text prompts with powerful AI models. Generate art, designs, and concepts in seconds.',
    },
    {
      icon: <Layers className="h-8 w-8 text-purple-500" />,
      title: 'ComfyUI Integration',
      description: 'Access advanced ComfyUI features with a user-friendly interface, enabling complex image workflows without the technical complexity.',
    },
    {
      icon: <Palette className="h-8 w-8 text-pink-500" />,
      title: 'Professional Editing Tools',
      description: 'Edit and enhance AI-generated images with a comprehensive suite of professional tools similar to Photoshop.',
    },
    {
      icon: <Wand2 className="h-8 w-8 text-green-500" />,
      title: 'One-Click Enhancements',
      description: 'Apply intelligent AI-powered enhancements to transform ordinary images into extraordinary creations.',
    },
  ];

  return (
    <div className="relative min-h-screen pt-24 pb-20">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-green-500 via-blue-500 to-purple-600 opacity-50"></div>
      
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-extrabold sm:text-6xl">Aimage</h1>
            <p className="mt-6 text-xl text-white/80">
              A powerful AI Image editor combining the capabilities of ComfyUI with a Photoshop-like interface at a fraction of the cost.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/download" className="btn-primary">
                Download Now
              </Link>
              <Link href="/docs/aimage" className="btn-ghost">
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
              src="/screens/aimage-ui.png"
              alt="Aimage interface"
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
        
        {/* Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Aimage</h2>
          
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 ring-1 ring-white/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4">
                <h3 className="text-xl font-bold mb-3">Aimage</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> Advanced AI generation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> Professional editing tools
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> One-time purchase option
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> Affordable subscription
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> Local AI processing
                  </li>
                </ul>
              </div>
              
              <div className="p-4">
                <h3 className="text-xl font-bold mb-3">ComfyUI</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> Advanced AI generation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500">✗</span> Professional editing tools
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> Free to use
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500">✗</span> Complex technical interface
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> Local AI processing
                  </li>
                </ul>
              </div>
              
              <div className="p-4">
                <h3 className="text-xl font-bold mb-3">Photoshop</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-yellow-500">~</span> Limited AI generation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> Professional editing tools
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500">✗</span> Subscription only
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500">✗</span> Expensive
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500">✗</span> Cloud-dependent
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Ready to transform your creative workflow?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Join the next generation of digital artists and designers using AI-powered tools.
          </p>
          <Link href="/download" className="btn-primary text-lg px-8 py-3">
            Download Aimage
          </Link>
        </motion.div>
      </div>
    </div>
  );
} 