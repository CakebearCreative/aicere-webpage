'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function DashboardPage() {
  const { user, isLoading, signOut } = useAuth();
  const router = useRouter();
  const [pageReady, setPageReady] = useState(false);

  useEffect(() => {
    console.log('Dashboard page effect - isLoading:', isLoading, 'user:', !!user);
    
    // Set a short timeout to allow the auth state to stabilize
    const timeout = setTimeout(() => {
      if (!isLoading && !user) {
        console.log('No user found after loading complete, redirecting to signin');
        router.push('/signin');
      } else if (!isLoading && user) {
        console.log('User authenticated, dashboard ready to display');
        setPageReady(true);
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [user, isLoading, router]);

  const handleSignOut = async () => {
    try {
      console.log('Dashboard: Sign out initiated');
      await signOut();
      console.log('Dashboard: Sign out completed, redirecting to home');
      // Use window.location for a full page refresh
      window.location.href = '/';
    } catch (error) {
      console.error('Error during sign out:', error);
    }
  };

  // Show loading state
  if (isLoading || !pageReady) {
    return (
      <div className="relative min-h-screen pt-32 pb-20 flex items-center justify-center">
        <div className="absolute inset-0 -z-10 bg-gradient-conic from-purple-600 via-pink-500 to-green-500 opacity-30"></div>
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500 mb-4"></div>
          <p className="text-white/70">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  // Safety check - this shouldn't happen due to the useEffect redirect
  if (!user) {
    console.log('No user found in render phase, redirecting to signin');
    router.push('/signin');
    return null;
  }

  return (
    <div className="relative min-h-screen pt-32 pb-20">
      <div className="absolute inset-0 -z-10 bg-gradient-conic from-purple-600 via-pink-500 to-green-500 opacity-30"></div>
      <div className="mx-auto max-w-7xl px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h1 className="text-4xl font-extrabold sm:text-5xl">Dashboard</h1>
              <p className="mt-2 text-xl text-white/80">Welcome, {user.email}!</p>
            </div>
            <button
              onClick={handleSignOut}
              className="mt-4 md:mt-0 px-4 py-2 bg-black/30 border border-white/10 rounded-lg hover:bg-black/40 transition-colors"
            >
              Sign Out
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              className="bg-black/20 backdrop-blur-sm p-6 rounded-2xl ring-1 ring-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-4">Account Information</h2>
              <div className="space-y-2 text-white/70">
                <p><span className="text-white/50">Email:</span> {user.email}</p>
                <p><span className="text-white/50">User ID:</span> {user.id}</p>
                <p><span className="text-white/50">Email verified:</span> {user.email_confirmed_at ? 'Yes' : 'No'}</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-black/20 backdrop-blur-sm p-6 rounded-2xl ring-1 ring-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-4">Your Products</h2>
              <div className="space-y-4">
                <div className="p-3 bg-black/30 rounded-lg">
                  <h3 className="font-semibold">Aigent</h3>
                  <p className="text-sm text-white/60">Agentic node-based development</p>
                </div>
                <div className="p-3 bg-black/30 rounded-lg">
                  <h3 className="font-semibold">Aimage</h3>
                  <p className="text-sm text-white/60">AI Image editor with ComfyUI features</p>
                </div>
                <div className="p-3 bg-black/30 rounded-lg">
                  <h3 className="font-semibold">Aibot</h3>
                  <p className="text-sm text-white/60">Offline/Online mode bot</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-black/20 backdrop-blur-sm p-6 rounded-2xl ring-1 ring-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
              <div className="text-white/70">
                <p className="mb-2 text-sm">No recent activity to display.</p>
                <button className="text-purple-400 hover:text-purple-300 transition-colors text-sm">
                  View all activity →
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 