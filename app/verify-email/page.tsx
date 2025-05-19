'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function VerifyEmailPage() {
  return (
    <div className="relative min-h-screen pt-32 pb-20">
      <div className="absolute inset-0 -z-10 bg-gradient-conic from-purple-600 via-pink-500 to-green-500 opacity-30"></div>
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-extrabold sm:text-6xl mb-8">Check Your Email</h1>
          <p className="text-xl text-white/80 mb-12">
            We've sent a verification link to your email address.
            Please click the link to verify your account.
          </p>
          
          <div className="max-w-md mx-auto bg-black/20 backdrop-blur-sm p-8 rounded-2xl ring-1 ring-white/10">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mb-6">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={1.5} 
                  stroke="currentColor" 
                  className="w-8 h-8 text-purple-400"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" 
                  />
                </svg>
              </div>
              
              <p className="mb-6 text-white/70">
                Didn't receive an email? Check your spam folder or try again.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <Link 
                  href="/signup" 
                  className="w-full py-2 px-4 border border-white/10 rounded-lg text-center hover:bg-white/5 transition-colors"
                >
                  Try Again
                </Link>
                <Link 
                  href="/signin" 
                  className="w-full py-2 px-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-center hover:from-purple-700 hover:to-pink-700 transition-colors"
                >
                  Back to Sign In
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 