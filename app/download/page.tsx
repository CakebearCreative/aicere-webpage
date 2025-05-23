'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Download, MonitorPlay, Apple, Terminal, Code, ImageIcon, MessageSquare } from 'lucide-react';
// Download, Windows, Apple, Linux

type ProductId = 'all' | 'aigent' | 'aimage' | 'aibot';

interface ProductType {
  id: ProductId;
  name: string;
  icon: JSX.Element;
}

interface VersionType {
  name: string;
  size: string;
  url: string;
}

interface PlatformType {
  platform: string;
  icon: JSX.Element;
  versions: VersionType[];
}

type DownloadsType = {
  [key in ProductId]: PlatformType[];
};

export default function DownloadPage() {
  const [activeProduct, setActiveProduct] = useState<ProductId>('all');
  
  const products: ProductType[] = [
    { id: 'all', name: 'Aicere Suite', icon: <Download className="h-6 w-6" /> },
    { id: 'aigent', name: 'Aigent', icon: <Code className="h-6 w-6" /> },
    { id: 'aimage', name: 'Aimage', icon: <ImageIcon className="h-6 w-6" /> },
    { id: 'aibot', name: 'Aibot', icon: <MessageSquare className="h-6 w-6" /> },
  ];

  const downloads: DownloadsType = {
    all: [
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
    ],
    aigent: [
      {
        platform: 'Windows',
        icon: <MonitorPlay className="h-7 w-7" />,
        versions: [
          { name: 'Windows Installer (x64)', size: '95 MB', url: '/downloads/aigent-1.0.0-win-x64.exe' },
          { name: 'Windows Portable (x64)', size: '92 MB', url: '/downloads/aigent-1.0.0-win-x64.zip' },
        ],
      },
      {
        platform: 'macOS',
        icon: <Apple className="h-7 w-7" />,
        versions: [
          { name: 'macOS Intel', size: '103 MB', url: '/downloads/aigent-1.0.0-macos-x64.dmg' },
          { name: 'macOS Apple Silicon', size: '98 MB', url: '/downloads/aigent-1.0.0-macos-arm64.dmg' },
        ],
      },
      {
        platform: 'Linux',
        icon: <Terminal className="h-7 w-7" />,
        versions: [
          { name: 'Linux AppImage (x64)', size: '88 MB', url: '/downloads/aigent-1.0.0-linux-x64.AppImage' },
          { name: 'Linux .deb (x64)', size: '90 MB', url: '/downloads/aigent-1.0.0-linux-x64.deb' },
        ],
      },
    ],
    aimage: [
      {
        platform: 'Windows',
        icon: <MonitorPlay className="h-7 w-7" />,
        versions: [
          { name: 'Windows Installer (x64)', size: '110 MB', url: '/downloads/aimage-1.0.0-win-x64.exe' },
          { name: 'Windows Portable (x64)', size: '108 MB', url: '/downloads/aimage-1.0.0-win-x64.zip' },
        ],
      },
      {
        platform: 'macOS',
        icon: <Apple className="h-7 w-7" />,
        versions: [
          { name: 'macOS Intel', size: '115 MB', url: '/downloads/aimage-1.0.0-macos-x64.dmg' },
          { name: 'macOS Apple Silicon', size: '112 MB', url: '/downloads/aimage-1.0.0-macos-arm64.dmg' },
        ],
      },
      {
        platform: 'Linux',
        icon: <Terminal className="h-7 w-7" />,
        versions: [
          { name: 'Linux AppImage (x64)', size: '105 MB', url: '/downloads/aimage-1.0.0-linux-x64.AppImage' },
          { name: 'Linux .deb (x64)', size: '107 MB', url: '/downloads/aimage-1.0.0-linux-x64.deb' },
        ],
      },
    ],
    aibot: [
      {
        platform: 'Windows',
        icon: <MonitorPlay className="h-7 w-7" />,
        versions: [
          { name: 'Windows Installer (x64)', size: '65 MB', url: '/downloads/aibot-1.0.0-win-x64.exe' },
          { name: 'Windows Portable (x64)', size: '62 MB', url: '/downloads/aibot-1.0.0-win-x64.zip' },
        ],
      },
      {
        platform: 'macOS',
        icon: <Apple className="h-7 w-7" />,
        versions: [
          { name: 'macOS Intel', size: '68 MB', url: '/downloads/aibot-1.0.0-macos-x64.dmg' },
          { name: 'macOS Apple Silicon', size: '64 MB', url: '/downloads/aibot-1.0.0-macos-arm64.dmg' },
        ],
      },
      {
        platform: 'Linux',
        icon: <Terminal className="h-7 w-7" />,
        versions: [
          { name: 'Linux AppImage (x64)', size: '60 MB', url: '/downloads/aibot-1.0.0-linux-x64.AppImage' },
          { name: 'Linux .deb (x64)', size: '62 MB', url: '/downloads/aibot-1.0.0-linux-x64.deb' },
        ],
      },
      {
        platform: 'Web Integration',
        icon: <MessageSquare className="h-7 w-7" />,
        versions: [
          { name: 'Script Tag', size: '<100 KB', url: '/docs/aibot/integration' },
          { name: 'Widget Bundle', size: '2.5 MB', url: '/downloads/aibot-widget-1.0.0.zip' },
        ],
      },
    ],
  };

  // Automatically detect platform
  const detectPlatform = (): string => {
    if (typeof window !== 'undefined') {
      const platform = window.navigator.platform.toLowerCase();
      if (platform.includes('win')) return 'Windows';
      if (platform.includes('mac')) return 'macOS';
      if (platform.includes('linux')) return 'Linux';
    }
    return 'Windows'; // Default fallback
  };

  // Get download URL for detected platform
  const getMainDownloadUrl = (): string => {
    const platform = detectPlatform();
    const productDownloads = downloads[activeProduct];
    const platformDownload = productDownloads.find(p => p.platform === platform);
    
    if (platformDownload && platformDownload.versions.length > 0) {
      return platformDownload.versions[0].url;
    }
    
    return '/downloads/aicere-1.0.0-win-x64.exe'; // Fallback
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
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Get started with our professional AI tools for development, design, and customer support.
          </p>
          
          {/* Product selector */}
          <div className="mt-4 mb-8 flex justify-center">
            <div className="relative flex flex-wrap items-center justify-center gap-2 md:gap-4">
              {products.map((product) => (
                <button
                  key={product.id}
                  onClick={() => setActiveProduct(product.id)}
                  className={`flex items-center gap-2 rounded-xl px-4 py-2 ${
                    activeProduct === product.id
                      ? 'bg-white text-black'
                      : 'bg-black/20 text-white hover:bg-black/30'
                  } transition-all`}
                >
                  {product.icon}
                  <span>{product.name}</span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Current platform download button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 text-center"
        >
          <Link 
            href={getMainDownloadUrl()} 
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
            {downloads[activeProduct].map((platform: PlatformType) => (
              <div key={platform.platform} className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 ring-1 ring-white/10">
                <div className="flex items-center gap-3 mb-4">
                  {platform.icon}
                  <h3 className="text-xl font-semibold">{platform.platform}</h3>
                </div>
                
                <div className="space-y-3">
                  {platform.versions.map((version: VersionType) => (
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
                    <li>Advanced AI models require subscription</li>
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