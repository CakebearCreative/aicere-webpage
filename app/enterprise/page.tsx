'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Building, ShieldCheck, Users, MessageCircle } from 'lucide-react';

export default function EnterprisePage() {
  const enterpriseFeatures = [
    {
      icon: <ShieldCheck className="h-8 w-8 text-blue-400" />,
      title: 'Enhanced Security & Compliance',
      description: 'Org-wide privacy controls, SAML/OIDC SSO, and features to meet your enterprise security and compliance requirements.',
    },
    {
      icon: <Users className="h-8 w-8 text-purple-400" />,
      title: 'Team Management & Collaboration',
      description: 'Centralized billing, admin dashboards with usage statistics, and tools for seamless team collaboration across Aicere products.',
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-green-400" />,
      title: 'Dedicated Support & SLAs',
      description: 'Priority support channels, dedicated account management, and service level agreements tailored to your business needs.',
    },
    {
      icon: <Building className="h-8 w-8 text-pink-400" />,
      title: 'Custom Solutions & Integrations',
      description: 'Work with our team to develop custom features, integrations, and on-premise deployment options for Aicere products.',
    },
  ];

  return (
    <div className="relative min-h-screen pt-32 pb-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-700 via-purple-600 to-pink-600 opacity-30"></div>
      <div className="mx-auto max-w-5xl px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Building className="h-16 w-16 mx-auto mb-6 text-purple-400" />
          <h1 className="text-5xl font-extrabold sm:text-6xl">Aicere for Enterprise</h1>
          <p className="mt-6 text-xl text-white/80 max-w-3xl mx-auto">
            Powerful AI solutions tailored for your organization's needs, with a focus on security, scalability, and dedicated support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {enterpriseFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 ring-1 ring-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center bg-black/20 backdrop-blur-sm rounded-2xl p-10 ring-1 ring-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to empower your team?</h2>
          <p className="text-xl text-white/80 mb-8">
            Contact our sales team to discuss your specific requirements and learn how Aicere can help your enterprise succeed.
          </p>
          <Link href="/contact?subject=EnterpriseInquiry" className="btn-primary text-lg px-8 py-3">
            Contact Sales
          </Link>
        </motion.div>

      </div>
    </div>
  );
} 