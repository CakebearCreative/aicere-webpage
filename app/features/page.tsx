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
      description: 'AI-powered code completion and assistance',
      features: [
        'Smart code completion',
        'Refactoring suggestions',
        'Bug detection',
        'Documentation generation',
        'Test case generation',
        'Supports 20+ programming languages',
      ],
      imageUrl: '/screens/aigent-vscode.png',
    },
    {
      id: 'aimage',
      name: 'Aimage',
      description: 'Generate images with AI',
      features: [
        'Text to image generation',
        'Image editing capabilities',
        'Style transfer',
        'Custom art styles',
        'High resolution output',
        'Commercial usage rights',
      ],
      imageUrl: '/screens/aimage-ui.png',
    },
    {
      id: 'aibot',
      name: 'Aibot',
      description: 'Your AI chatbot assistant',
      features: [
        'Natural language understanding',
        'Code explanation',
        'Problem solving',
        'Knowledge base integration',
        'Custom workflows',
        'API access',
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
            Compare our suite of AI tools designed to boost your productivity
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
      </div>
    </div>
  );
} 