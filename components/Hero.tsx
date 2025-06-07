'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { AppWindow } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center text-center pt-20 px-6">
      {/* background blob */}
      {/* <div className="absolute inset-0 -z-10 bg-gradient-conic from-purple-600 via-pink-500 to-green-500 opacity-70"></div> */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-600 via-pink-500 to-green-500 opacity-70"></div>
      
      {/* left fade */}
      <div className="absolute inset-y-0 left-0 w-1/3 -z-10
                      bg-gradient-to-r
                        from-black
                        to-transparent" />
      
      {/* right fade */}
      <div className="absolute inset-y-0 right-0 w-1/3 -z-10
                      bg-gradient-to-l
                        from-black
                        to-transparent" />


      <motion.h1 
        className="mx-auto max-w-4xl text-5xl font-extrabold tracking-tight sm:text-6xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        AI-Powered Creative Suite
      </motion.h1>
      
      <motion.p 
        className="mt-6 max-w-xl text-lg text-white/90 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Aicere Studio combines workflow automation, image generation, and audio creation in one powerful desktop application with local-first privacy.
        {/* Build Agents • AI Edit Images • Local Chatbots */}
      </motion.p>
      
      <motion.div 
        className="mt-10 flex items-center justify-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {/* Primary Button with Gradient Border and Shine on Border */} 
        <div
        className="relative group inline-block overflow-hidden p-1 rounded-xl
                  bg-gradient-to-r from-purple-500/50 via-pink-500/50 to-orange-400/20
                  shadow-lg transition-all duration-300 ease-in-out
                  hover:from-purple-500/80 hover:via-pink-500/80 hover:to-orange-500/10
                  hover:shadow-xl hover:scale-[1.02] group-active:scale-[1.04]">

        {/* --- 1. SVG stroke dash "glint" -------------------------------- */}
        <svg
          className="pointer-events-none absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg">
          <rect
            x="1" y="1"                                       /* 1 px in so we don't clip */
            width="calc(100% - 2px)"
            height="calc(100% - 2px)"
            rx="0.75rem" ry="0.75rem"                         /* <-- match .rounded-xl */
            fill="none"
            stroke="white" strokeWidth="1.5"
            strokeDasharray="30 260"                         /* dash + gap */
            className="
              opacity-0 group-hover:opacity-50                /* fade in on hover  */
              transition-opacity duration-300 ease-in-out
              animate-dash                                    /* always running    */
            " />
        </svg>

        {/* --- 2. Static white outline (optional) ----------------------- */}
        <span
          className="pointer-events-none absolute inset-0 rounded-xl
                    border border-white/20 group-hover:border-white/40
                    group-active:border-white/70 group-active:border-2
                    transition-all duration-300 ease-in-out" />

        {/* --- 3. Actual clickable button ------------------------------- */}
        <Link
          href="/download"
          className="relative z-10 flex items-center justify-center gap-2
                    px-6 py-3 rounded-lg font-medium text-slate-900
                    bg-white/90 group-hover:bg-white/100
                    transition-colors duration-200 ease-in-out">
          <AppWindow size={20} className="text-slate-700" />
          Download Aicere Studio
        </Link>
      </div>

        {/* Secondary Button with New Gradient Border and Shine */}
        <div
        className="relative group inline-block overflow-hidden p-1 rounded-xl
                  bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-orange-400/10
                  shadow-lg transition-all duration-300 ease-in-out
                  hover:from-purple-500/40 hover:via-pink-500/80 hover:to-orange-500/10
                  hover:shadow-xl hover:scale-[1.02] group-active:scale-[1.04]">

        {/* --- 1. SVG stroke dash "glint" -------------------------------- */}
        <svg
          className="pointer-events-none absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg">
          <rect
            x="1" y="1"                                       /* 1 px in so we don't clip */
            width="calc(100% - 2px)"
            height="calc(100% - 2px)"
            rx="0.75rem" ry="0.75rem"                         /* <-- match .rounded-xl */
            fill="none"
            stroke="white" strokeWidth="1.5"
            strokeDasharray="30 250"                         /* dash + gap */
            className="
              opacity-0 group-hover:opacity-50                /* fade in on hover  */
              transition-opacity duration-300 ease-in-out
              animate-dash                                    /* always running    */
            " />
        </svg>

        {/* --- 2. Static white outline (optional) ----------------------- */}
        <span
          className="pointer-events-none absolute inset-0 rounded-xl
                    border border-white/20 group-hover:border-white/40
                    group-active:border-white/70 group-active:border-2
                    transition-all duration-300 ease-in-out" />
        
        {/* --- 3. Actual clickable button ------------------------------- */}
        <Link 
          href="/features" 
          className="relative z-10 flex items-center justify-center gap-2 px-6 py-3 
                    rounded-lg font-medium text-white bg-slate-950/90 hover:bg-slate-950 
                    transition-colors duration-200 ease-in-out"
        >
          Explore Features
        </Link>
      </div>
      </motion.div>

      {/* hero code window */}
      <motion.div
        className="mt-16 w-full max-w-5xl p-3 bg-black/30 backdrop-filter backdrop-blur-md rounded-3xl shadow-2xl ring-1 ring-white/10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <Image 
          src="/screens/hero-code.png"
          alt="Aicere Studio - AI-powered creative suite with Agent Mode, Image Mode, and Audio Mode"
          width={1200}
          height={700}
          className="rounded-2xl"
        />
      </motion.div>
    </section>
  );
} 