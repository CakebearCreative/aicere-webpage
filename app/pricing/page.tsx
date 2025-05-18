'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, Code, ImageIcon, MessageSquare } from 'lucide-react';

type ProductId = 'all' | 'aigent' | 'aimage' | 'aibot';

interface Product {
  name: string;
  icon: JSX.Element;
}

interface PlanBenefits {
  all: string[];
  aigent: string[];
  aimage: string[];
  aibot: string[];
}

interface Plan {
  name: string;
  price: number;
  benefits: PlanBenefits;
  tag?: string;
  featured?: boolean;
}

export default function PricingPage() {
  const [yearly, setYearly] = useState(false);
  const [activeProduct, setActiveProduct] = useState<ProductId>('all');

  const products: Record<ProductId, Product> = {
    all: {
      name: 'All Products',
      icon: <div className="flex space-x-1">
        <Code className="h-5 w-5 text-purple-400" />
        <ImageIcon className="h-5 w-5 text-blue-400" />
        <MessageSquare className="h-5 w-5 text-pink-400" />
      </div>
    },
    aigent: {
      name: 'Aigent',
      icon: <Code className="h-5 w-5 text-purple-400" />
    },
    aimage: {
      name: 'Aimage',
      icon: <ImageIcon className="h-5 w-5 text-blue-400" />
    },
    aibot: {
      name: 'Aibot',
      icon: <MessageSquare className="h-5 w-5 text-pink-400" />
    }
  };

  const plans: Plan[] = [
    { 
      name: 'Hobby',
      price: 0,
      benefits: {
        all: [
          'Basic features for all products',
          'Limited AI requests',
          'Community support',
          'Standard models only'
        ],
        aigent: [
          'Basic node workflows',
          'Limited to 3 agents per project',
          'Standard models only',
          'Community support'
        ],
        aimage: [
          'Basic image generation',
          'Limited to 100 images/month',
          'Standard resolution only',
          'Community support'
        ],
        aibot: [
          'Basic chat implementation',
          'Limited to 500 queries/month',
          'Single website integration',
          'Community support'
        ]
      }
    },
    { 
      name: 'Pro',
      price: yearly ? 189 : 19.99,
      tag: yearly ? '/year' : '/month',
      benefits: {
        all: [
          'Access to all Pro features',
          'Unlimited AI requests',
          'Priority support',
          'Advanced AI models'
        ],
        aigent: [
          'Unlimited node workflows',
          'Advanced agent capabilities',
          'Local model integration',
          'Priority support'
        ],
        aimage: [
          'Advanced generation options',
          'Unlimited images',
          'High-resolution outputs',
          'Priority support'
        ],
        aibot: [
          'Unlimited chat queries',
          'Up to 3 website integrations',
          'Custom branding options',
          'Priority support'
        ]
      },
      featured: true
    },
    { 
      name: 'Business',
      price: yearly ? 479 : 49.99,
      tag: yearly ? '/user/year' : '/user/month',
      benefits: {
        all: [
          'All Pro features',
          'Team collaboration tools',
          'Admin dashboard with usage stats',
          'Dedicated support',
          'SAML/OIDC SSO'
        ],
        aigent: [
          'Team collaboration on workflows',
          'Enterprise-grade security',
          'Workflow version control',
          'Dedicated support',
          'SAML/OIDC SSO'
        ],
        aimage: [
          'Team asset library sharing',
          'Brand kit and style presets',
          'Commercial usage rights',
          'Dedicated support',
          'SAML/OIDC SSO'
        ],
        aibot: [
          'Unlimited website integrations',
          'Team knowledge base management',
          'Advanced analytics dashboard',
          'Dedicated support',
          'SAML/OIDC SSO'
        ]
      }
    }
  ];

  return (
    <div className="relative min-h-screen pt-24 pb-20">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-conic from-purple-600 via-pink-500 to-green-500 opacity-50"></div>
      
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

        {/* Product selector */}
        <div className="mt-10 flex justify-center">
          <div className="relative flex items-center rounded-full p-1 bg-black/20 backdrop-blur-sm">
            {Object.entries(products).map(([id, product]) => (
              <button
                key={id}
                onClick={() => setActiveProduct(id as ProductId)}
                className={`relative flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${
                  activeProduct === id ? 'bg-white text-black' : 'text-white'
                } transition-all duration-300`}
              >
                {product.icon}
                <span className="hidden sm:inline">{product.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Billing toggle */}
        <div className="mt-6 flex justify-center">
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
              YEARLY (SAVE 20%)
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
                  {plan.price === 0 ? 'Free' : `$${plan.price}`}
                </span>
                {plan.tag && (
                  <span className="ml-1 text-xl text-white/70">{plan.tag}</span>
                )}
              </div>
              
              <p className="mt-6 text-lg font-semibold">Includes</p>
              
              <ul className="mt-4 space-y-3 text-left">
                {plan.benefits[activeProduct].map((benefit: string) => (
                  <li key={benefit} className="flex items-start">
                    <Check className="mr-2 h-5 w-5 shrink-0 text-green-500" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                {plan.name === 'Hobby' ? (
                  <Link href="/download" className="btn-primary block w-full">
                    Download
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