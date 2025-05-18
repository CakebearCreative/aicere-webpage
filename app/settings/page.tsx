'use client';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Info, RefreshCw, Laptop, Smartphone, X } from 'lucide-react';

export default function SettingsPage() {
  const [usageBasedPricing, setUsageBasedPricing] = useState(false);

  // Mock user data
  const user = {
    name: 'CakebearCreative',
    email: 'cakebearcreative@gmail.com',
    avatarUrl: 'https://i.pravatar.cc/150?img=65',
    plan: 'Pro',
    premiumRequests: {
      used: 106,
      total: 500,
    },
    freeRequests: {
      used: 0,
      total: 'No Limit',
    },
    refreshDate: '26 days',
    sessions: [
      {
        type: 'desktop',
        name: 'Desktop App Session',
        createdAgo: '2 months ago',
      },
      {
        type: 'web',
        name: 'Web Session',
        createdAgo: '1 month ago',
      },
      {
        type: 'web',
        name: 'Web Session',
        createdAgo: '3 weeks ago',
      },
    ],
  };

  // Progress bar calculations
  const premiumPercentage = (user.premiumRequests.used / user.premiumRequests.total) * 100;

  return (
    <div className="relative min-h-screen bg-black text-white pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h1 
          className="text-5xl font-extrabold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Settings
        </motion.h1>
        <motion.p 
          className="text-xl text-white/80 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          You can manage your account, billing, and team settings here.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left column - Basic Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Basic Information */}
            <div className="bg-black/30 backdrop-blur-sm rounded-3xl p-8 ring-1 ring-white/10 mb-8">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold">Basic Information</h2>
                <div className="relative h-12 w-12 rounded-full overflow-hidden">
                  <Image
                    src={user.avatarUrl}
                    alt="User avatar"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <p className="text-white/60 mb-1">Name</p>
                  <p className="font-medium">{user.name}</p>
                </div>
                <div>
                  <p className="text-white/60 mb-1">Email</p>
                  <p className="font-medium">{user.email}</p>
                </div>
              </div>
            </div>
            
            {/* Account */}
            <div className="bg-black/30 backdrop-blur-sm rounded-3xl p-8 ring-1 ring-white/10 mb-8">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold">Account</h2>
                <span className="bg-white/10 text-white/90 px-2 py-1 rounded text-xs">Pro</span>
              </div>
              
              <button className="btn-ghost px-4 py-2 text-sm mb-4">Manage Subscription</button>
              
              <div>
                <button className="text-white/60 text-sm flex items-center">
                  Advanced <span className="ml-2">▼</span>
                </button>
              </div>
            </div>
            
            {/* Active Sessions */}
            <div className="bg-black/30 backdrop-blur-sm rounded-3xl p-8 ring-1 ring-white/10">
              <h2 className="text-2xl font-bold mb-8">Active Sessions</h2>
              
              <div className="space-y-6">
                {user.sessions.map((session, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-white/10 pb-4">
                    <div className="flex items-center">
                      {session.type === 'desktop' ? 
                        <Laptop className="h-5 w-5 mr-3 text-white/70" /> :
                        <Smartphone className="h-5 w-5 mr-3 text-white/70" />
                      }
                      <div>
                        <p className="font-medium">{session.name}</p>
                        <p className="text-sm text-white/60">Created about {session.createdAgo}</p>
                      </div>
                    </div>
                    <button className="bg-white/10 hover:bg-white/20 p-1 rounded">
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Right column - Usage */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-black/30 backdrop-blur-sm rounded-3xl p-8 ring-1 ring-white/10">
              <h2 className="text-2xl font-bold mb-6">Usage</h2>
              
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <p className="flex items-center">
                    Requests will refresh in {user.refreshDate}
                  </p>
                </div>
              </div>
              
              {/* Premium models */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <p className="flex items-center">
                    Premium models 
                    <Info className="h-4 w-4 ml-2 text-white/70" />
                  </p>
                  <p>{user.premiumRequests.used} / {user.premiumRequests.total}</p>
                </div>
                
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-green-500 rounded-full" 
                    style={{ width: `${premiumPercentage}%` }}
                  ></div>
                </div>
                
                <p className="mt-2 text-sm text-white/70">
                  You've used {user.premiumRequests.used} requests out of your {user.premiumRequests.total} monthly fast requests quota.
                </p>
              </div>
              
              {/* Free models */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <p>Free models</p>
                  <p>0 / No Limit</p>
                </div>
                
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '0%' }}></div>
                </div>
                
                <p className="mt-2 text-sm text-white/70">
                  You've used 0 requests of this model. You have no monthly quota.
                </p>
              </div>
              
              {/* Usage-based pricing */}
              <div className="bg-amber-900/30 border border-amber-500/20 rounded-xl p-4 mb-8">
                <div className="flex items-start">
                  <Info className="h-5 w-5 mr-2 text-amber-500 shrink-0 mt-0.5" />
                  <p className="text-sm">
                    Usage-based pricing allows you to pay for extra requests beyond your plan limits. 
                    <a href="#" className="ml-1 text-white underline">Learn more</a>
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Settings</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <p>Enable usage-based pricing</p>
                    <Info className="h-4 w-4 ml-2 text-white/70" />
                  </div>
                  
                  <button 
                    className={`w-12 h-6 rounded-full p-1 transition-colors ${
                      usageBasedPricing ? 'bg-green-500' : 'bg-white/20'
                    }`}
                    onClick={() => setUsageBasedPricing(!usageBasedPricing)}
                  >
                    <div 
                      className={`bg-white h-4 w-4 rounded-full transform transition-transform ${
                        usageBasedPricing ? 'translate-x-6' : ''
                      }`} 
                    />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 