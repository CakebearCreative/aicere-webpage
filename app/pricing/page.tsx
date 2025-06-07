'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, Code, ImageIcon, MessageSquare } from 'lucide-react';

interface Plan {
  name: string;
  price: number;
  benefits: string[];
  tag?: string;
  featured?: boolean;
  isEnterprise?: boolean;
}

export default function PricingPage() {
  const [yearly, setYearly] = useState(false);

  const plans: Plan[] = [
    { 
      name: 'Hobby',
      price: 0,
      benefits: [
        'All Aicere Studio modes (Agent, Image, Audio)',
        'Local model support for privacy',
        'Basic AI image generation',
        'Local TTS and audio tools',
        'Basic workflow automation',
        'Built-in LLM and agent',
        'RAG document processing',
        'Community support',
        'Generous free tier limits'
      ]
    },
    { 
      name: 'Pro',
      price: yearly ? 149 : 14.9,
      tag: yearly ? '/year' : '/month',
      benefits: [
        'All Hobby features',
        'Access to premium cloud models',
        'Gemini 2.5 Pro, Claude 4, o4-mini-high',
        'Imagen 4, DALL-E 3 image generation',
        'ElevenLabs, Suno AI audio models',
        '500 credits/month',
        'Priority support',
        'Advanced workflow features'
      ],
      featured: true
    },
    { 
      name: 'Enterprise',
      price: 0,
      tag: '',
      benefits: [
        'All Pro features',
        'Custom model deployment',
        'Team collaboration tools',
        'Admin dashboard with usage analytics',
        'SAML/OIDC SSO',
        'Dedicated support',
        'Custom integrations',
        'Volume discounts',
        'Service level agreements'
      ],
      isEnterprise: true
    }
  ];

  return (
    <div className="relative min-h-screen pt-24 pb-20">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-600 via-pink-500 to-green-500 opacity-50"></div>
      
      <div className="mx-auto max-w-7xl px-6 text-center">
        <motion.h1 
          className="text-5xl font-extrabold sm:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Pricing
        </motion.h1>
        <motion.p 
          className="mt-6 text-xl text-white/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Choose the plan that works for you
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Code className="h-5 w-5 text-purple-400" />
              <ImageIcon className="h-5 w-5 text-blue-400" />
              <MessageSquare className="h-5 w-5 text-pink-400" />
            </div>
            <span className="text-lg font-medium">Aicere Studio</span>
          </div>
          <p className="text-white/70 max-w-2xl">
            One powerful application with Agent Mode, Image Mode, Audio Mode, and more coming soon.
          </p>
        </motion.div>

        {/* Billing toggle */}
        <div className="mt-8 flex justify-center">
          <div className="relative flex items-center rounded-full p-1 bg-black/20 backdrop-blur-sm">
            <button
              onClick={() => setYearly(false)}
              className={`relative rounded-full px-4 py-2 text-sm font-medium ${
                !yearly ? 'bg-white text-black' : 'text-white'
              } transition-all duration-300`}
            >
              MONTHLY
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`relative rounded-full px-4 py-2 text-sm font-medium ${
                yearly ? 'bg-white text-black' : 'text-white'
              } transition-all duration-300`}
            >
              YEARLY (SAVE 17%)
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              className={`relative rounded-3xl bg-black/30 p-8 backdrop-blur-sm ring-1 ${
                plan.featured 
                  ? 'ring-white/30 shadow-xl' 
                  : 'ring-white/10'
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {plan.featured && (
                <div className="absolute -top-5 inset-x-0 mx-auto w-32 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-3 py-1 text-sm font-medium text-white">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              
              <div className="mt-4 flex items-baseline justify-center">
                <span className="text-5xl font-extrabold">
                  {plan.isEnterprise ? 'Custom' : plan.price === 0 ? 'Free' : `$${plan.price}`}
                </span>
                {plan.tag && (
                  <span className="ml-1 text-xl text-white/70">{plan.tag}</span>
                )}
              </div>
              
              <p className="mt-6 text-lg font-semibold">Includes</p>
              
              <ul className="mt-4 space-y-3 text-left">
                {plan.benefits.map((benefit: string) => (
                  <li key={benefit} className="flex items-start">
                    <Check className="mr-2 h-5 w-5 shrink-0 text-green-500" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                {plan.name === 'Hobby' ? (
                  <Link href="/download" className="btn-primary block w-full">
                    Download Free
                  </Link>
                ) : plan.isEnterprise ? (
                  <Link href="/contact" className="btn-primary block w-full">
                    Contact Sales
                  </Link>
                ) : (
                  <Link href="/get-started" className="btn-primary block w-full">
                    Get Started
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-32"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-3">What's included in the free Hobby plan?</h3>
              <p className="text-white/70">
                The Hobby plan includes access to all Aicere Studio modes with local models, basic AI generation features, and community support. Perfect for getting started and personal projects.
              </p>
            </div>
            
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-3">What are cloud models in the Pro plan?</h3>
              <p className="text-white/70">
                Pro subscribers get access to premium cloud-based AI models like Gemini 2.5 Pro, Claude 4, GPT-4, Imagen 4, and DALL-E 3 through our optimized infrastructure, without needing to manage API keys.
              </p>
            </div>
            
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-3">Can I use my own API keys?</h3>
              <p className="text-white/70">
                Yes! All plans support using your own API keys for various AI services. Pro subscribers can choose between our managed cloud models or their own API keys.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Enterprise CTA */}
        <div className="mt-20 text-center">
          <p className="text-xl">
            Need a custom solution for your organization?{' '}
            <Link href="/contact" className="font-medium underline">
              Contact Sales →
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
} 