'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface FeatureSectionProps {
  title: string;
  description: string;
  gradient: string;
  imageUrl: string;
  imageAlt: string;
  reversed?: boolean;
}

export default function FeatureSection({
  title,
  description,
  gradient,
  imageUrl,
  imageAlt,
  reversed = false,
}: FeatureSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="relative py-24 overflow-hidden">
      <div className={`absolute inset-0 -z-10 opacity-70 bg-gradient-conic ${gradient}`}></div>
      
      <div className="mx-auto max-w-7xl px-6">
        <div className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}>
          {/* Text content */}
          <motion.div 
            ref={ref}
            className="md:w-1/2"
            initial={{ opacity: 0, x: reversed ? 50 : -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{title}</h2>
            <p className="mt-6 text-lg text-white/80">{description}</p>
          </motion.div>
          
          {/* Image */}
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <Image
              src={imageUrl}
              alt={imageAlt}
              width={600}
              height={400}
              className="rounded-2xl shadow-2xl ring-1 ring-white/10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
} 