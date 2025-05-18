'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Download, MonitorPlay, Apple, Terminal } from 'lucide-react';
// Download, Windows, Apple, Linux

export default function DownloadPage() {
  const downloads = [
    {
      platform: 'Windows',
      icon: <MonitorPlay className="h-7 w-7" />,
      versions: [
        { name: 'Windows Installer (x64)', size: '145 MB', url: '/downloads/aicere-1.0.0-win-x64.exe' },
        { name: 'Windows Portable (x64)', size: '142 MB', url: '/downloads/aicere-1.0.0-win-x64.zip' },
      ],
    },
    {
      platform: 'macOS',
      icon: <Apple className="h-7 w-7" />,
      versions: [
        { name: 'macOS Intel', size: '158 MB', url: '/downloads/aicere-1.0.0-macos-x64.dmg' },
        { name: 'macOS Apple Silicon', size: '152 MB', url: '/downloads/aicere-1.0.0-macos-arm64.dmg' },
      ],
    },
    {
      platform: 'Linux',
      icon: <Terminal className="h-7 w-7" />,
      versions: [
        { name: 'Linux AppImage (x64)', size: '135 MB', url: '/downloads/aicere-1.0.0-linux-x64.AppImage' },
        { name: 'Linux .deb (x64)', size: '138 MB', url: '/downloads/aicere-1.0.0-linux-x64.deb' },
        { name: 'Linux .rpm (x64)', size: '137 MB', url: '/downloads/aicere-1.0.0-linux-x64.rpm' },
      ],
    },
  ];

  // Automatically detect platform
  const detectPlatform = () => {
    if (typeof window !== 'undefined') {
      const platform = window.navigator.platform.toLowerCase();
      if (platform.includes('win')) return 'Windows';
      if (platform.includes('mac')) return 'macOS';
      if (platform.includes('linux')) return 'Linux';
    }
    return 'Windows'; // Default fallback
  };

  return (
    <div className="relative min-h-screen pt-24 pb-20">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-conic from-purple-600 via-pink-500 to-green-500 opacity-50"></div>
      
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-5xl font-extrabold sm:text-6xl mb-6">Download Aicere</h1>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Get started with the complete AI Suite for coding, designing, and interacting with AI.
          </p>
        </motion.div>

        {/* Current platform download button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 text-center"
        >
          <Link 
            href={`/downloads/aicere-1.0.0-win-x64.exe`} 
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-white/90 text-black px-8 py-4 rounded-xl font-medium text-lg transition-all hover:scale-[1.02]"
          >
            <Download className="h-5 w-5" />
            Download for {detectPlatform()}
          </Link>
          <p className="mt-3 text-sm text-white/60">Version 1.0.0 • Released May 18, 2023</p>
        </motion.div>

        {/* Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-6">All Downloads</h2>
          
          <div className="space-y-8">
            {downloads.map((platform) => (
              <div key={platform.platform} className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 ring-1 ring-white/10">
                <div className="flex items-center gap-3 mb-4">
                  {platform.icon}
                  <h3 className="text-xl font-semibold">{platform.platform}</h3>
                </div>
                
                <div className="space-y-3">
                  {platform.versions.map((version) => (
                    <div 
                      key={version.name} 
                      className="flex items-center justify-between p-3 bg-black/20 rounded-xl hover:bg-black/30 transition-colors"
                    >
                      <div>
                        <p className="font-medium">{version.name}</p>
                        <p className="text-sm text-white/60">{version.size}</p>
                      </div>
                      <Link href={version.url} className="btn-ghost py-1.5 px-3 text-sm">
                        Download
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* System Requirements */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">System Requirements</h2>
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 ring-1 ring-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Windows</h3>
                  <ul className="space-y-2 text-white/80">
                    <li>Windows 10 or newer</li>
                    <li>64-bit processor</li>
                    <li>8 GB RAM minimum</li>
                    <li>1 GB available disk space</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">macOS</h3>
                  <ul className="space-y-2 text-white/80">
                    <li>macOS 10.15 (Catalina) or newer</li>
                    <li>Intel or Apple Silicon processor</li>
                    <li>8 GB RAM minimum</li>
                    <li>1 GB available disk space</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Linux</h3>
                  <ul className="space-y-2 text-white/80">
                    <li>Ubuntu 18.04+ or equivalent</li>
                    <li>64-bit processor</li>
                    <li>8 GB RAM minimum</li>
                    <li>1 GB available disk space</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Internet</h3>
                  <ul className="space-y-2 text-white/80">
                    <li>Broadband internet connection</li>
                    <li>Some features require an Aicere account</li>
                    <li>API access may require paid subscription</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 