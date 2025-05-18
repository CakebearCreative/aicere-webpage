'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

export default function FeaturesPage() {
  const [activeTab, setActiveTab] = useState('aigent');

  const products = [
    {
      id: 'aigent',
      name: 'Aigent',
      description: 'An agentic node-based development program for developers, combining visual workflows with AI-powered automation.',
      features: [
        'Node-based agent design system',
        'Visual workflow creation',
        'Code support and execution',
        'Local model and RAG integration',
        'Agent automation and scheduling',
        'Plugin system and extensibility',
        'Developer-centric UX',
        'Privacy-focused local-first approach',
      ],
      imageUrl: '/screens/aigent-vscode.png',
    },
    {
      id: 'aimage',
      name: 'Aimage',
      description: 'An AI Image editor with ComfyUI features similar to Photoshop, but less expensive.',
      features: [
        'Advanced AI image generation',
        'ComfyUI integration with intuitive interface',
        'Professional editing tools',
        'One-click image enhancements',
        'High-resolution outputs',
        'Affordable alternative to Photoshop',
        'Local image processing capabilities',
        'Extensive style and model options',
      ],
      imageUrl: '/screens/aimage-ui.png',
    },
    {
      id: 'aibot',
      name: 'Aibot',
      description: 'A no-code, embeddable AI assistant that works with websites and local folders, offering both online and offline modes.',
      features: [
        'Easy website integration (single line of code)',
        'Content-grounded responses from your data',
        'Privacy-first design for sensitive documents',
        'Online/offline flexibility',
        'Lightweight (<100kB) web widget',
        'Training on your knowledge base and FAQs',
        'Local file and folder indexing',
        '24/7 virtual customer support',
      ],
      imageUrl: '/screens/aibot-chat.png',
    },
  ];

  const activeProduct = products.find(p => p.id === activeTab) || products[0];

  return (
    <div className="relative min-h-screen pt-24 pb-20">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-conic from-purple-600 via-pink-500 to-green-500 opacity-50"></div>
      
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-5xl font-extrabold sm:text-6xl">Features</h1>
          <p className="mt-6 mx-auto max-w-2xl text-xl text-white/80">
            Explore our suite of AI tools designed to boost your productivity
          </p>
        </motion.div>

        {/* Product tabs */}
        <div className="mt-16">
          <div className="border-b border-white/10 mb-12">
            <div className="flex overflow-x-auto space-x-8">
              {products.map((product) => (
                <button
                  key={product.id}
                  onClick={() => setActiveTab(product.id)}
                  className={`pb-4 text-xl font-medium whitespace-nowrap ${
                    activeTab === product.id
                      ? 'border-b-2 border-white text-white'
                      : 'text-white/60 hover:text-white/80'
                  }`}
                >
                  {product.name}
                </button>
              ))}
            </div>
          </div>

          {/* Active product details */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {/* Info */}
            <div>
              <h2 className="text-3xl font-bold mb-4">{activeProduct.name}</h2>
              <p className="text-xl text-white/80 mb-8">{activeProduct.description}</p>
              
              <h3 className="text-xl font-semibold mb-4">Key Features</h3>
              <ul className="space-y-3">
                {activeProduct.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="mr-3 h-5 w-5 shrink-0 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-10">
                <Link 
                  href={`/product/${activeProduct.id}`}
                  className="inline-flex items-center btn-primary"
                >
                  Learn more about {activeProduct.name}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20">
              <Image
                src={activeProduct.imageUrl}
                alt={`${activeProduct.name} interface`}
                width={800}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
        
        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-32"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Product Comparison</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-black/20 backdrop-blur-sm rounded-2xl overflow-hidden">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="p-4 text-left">Feature</th>
                  <th className="p-4 text-center">Aigent</th>
                  <th className="p-4 text-center">Aimage</th>
                  <th className="p-4 text-center">Aibot</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="p-4">Local-first approach</td>
                  <td className="p-4 text-center text-green-500">✓</td>
                  <td className="p-4 text-center text-green-500">✓</td>
                  <td className="p-4 text-center text-green-500">✓</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-4">AI-powered assistance</td>
                  <td className="p-4 text-center text-green-500">✓</td>
                  <td className="p-4 text-center text-green-500">✓</td>
                  <td className="p-4 text-center text-green-500">✓</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-4">Code development focus</td>
                  <td className="p-4 text-center text-green-500">✓</td>
                  <td className="p-4 text-center text-red-500">✗</td>
                  <td className="p-4 text-center text-red-500">✗</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-4">Image generation/editing</td>
                  <td className="p-4 text-center text-red-500">✗</td>
                  <td className="p-4 text-center text-green-500">✓</td>
                  <td className="p-4 text-center text-red-500">✗</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-4">Website integration</td>
                  <td className="p-4 text-center text-red-500">✗</td>
                  <td className="p-4 text-center text-red-500">✗</td>
                  <td className="p-4 text-center text-green-500">✓</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-4">Automation capabilities</td>
                  <td className="p-4 text-center text-green-500">✓</td>
                  <td className="p-4 text-center text-yellow-500">~</td>
                  <td className="p-4 text-center text-green-500">✓</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-4">No-code friendly</td>
                  <td className="p-4 text-center text-yellow-500">~</td>
                  <td className="p-4 text-center text-green-500">✓</td>
                  <td className="p-4 text-center text-green-500">✓</td>
                </tr>
                <tr>
                  <td className="p-4">Offline capabilities</td>
                  <td className="p-4 text-center text-green-500">✓</td>
                  <td className="p-4 text-center text-green-500">✓</td>
                  <td className="p-4 text-center text-green-500">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 