'use client';

import AuthForm from '@/components/AuthForm';

export default function SignInPage() {
  return (
    <div className="relative min-h-screen pt-32 pb-20">
      <div className="absolute inset-0 -z-10 bg-gradient-conic from-purple-600 via-pink-500 to-green-500 opacity-30"></div>
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h1 className="text-5xl font-extrabold sm:text-6xl mb-8">Sign In</h1>
        <p className="text-xl text-white/80 mb-12">Welcome back! Sign in to access your account.</p>
        
        <AuthForm type="signin" />
      </div>
    </div>
  );
} 