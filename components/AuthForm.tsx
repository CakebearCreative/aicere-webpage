'use client';

import { useState } from 'react';
import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';

type AuthFormProps = {
  type: 'signin' | 'signup';
};

export default function AuthForm({ type }: AuthFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { signIn, signUp } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      if (type === 'signin') {
        console.log('AuthForm: Attempting to sign in...');
        const { error: signInError } = await signIn(email, password);
        
        if (signInError) {
          console.error('AuthForm: Sign in error from useAuth:', signInError);
          throw signInError;
        }
        
        // The redirect will be handled by middleware after page reload
        
      } else { // signup
        console.log('AuthForm: Attempting to sign up...');
        const { data: signUpData, error: signUpError } = await signUp(email, password);
        if (signUpError) {
          console.error('AuthForm: Sign up error:', signUpError);
          throw signUpError;
        }
        console.log('AuthForm: Sign up successful. Data:', signUpData);
        // Redirect to a page informing the user to check their email for verification
        router.push('/verify-email');
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
      console.error('AuthForm: Overall catch error during authentication:', errorMessage, err);
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div 
      className="w-full max-w-md mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <form onSubmit={handleSubmit} className="bg-black/20 backdrop-blur-sm p-8 rounded-2xl ring-1 ring-white/10">
        <h2 className="text-3xl font-bold mb-6 text-center">
          {type === 'signin' ? 'Sign In' : 'Create Account'}
        </h2>
        
        {error && (
          <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-sm">
            {error}
          </div>
        )}

        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 bg-black/30 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="you@example.com"
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 bg-black/30 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="••••••••"
            />
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 px-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium transition-all duration-200 ${
              loading ? 'opacity-70 cursor-not-allowed' : 'hover:from-purple-700 hover:to-pink-700'
            }`}
          >
            {loading ? 'Processing...' : type === 'signin' ? 'Sign In' : 'Sign Up'}
          </button>
        </div>
        
        <div className="mt-6 text-center text-sm">
          {type === 'signin' ? (
            <p>
              Don't have an account?{' '}
              <Link href="/signup" className="text-purple-400 hover:text-purple-300 transition-colors">
                Sign up
              </Link>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <Link href="/signin" className="text-purple-400 hover:text-purple-300 transition-colors">
                Sign in
              </Link>
            </p>
          )}
        </div>
      </form>
    </motion.div>
  );
} 