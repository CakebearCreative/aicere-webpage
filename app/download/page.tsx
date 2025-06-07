'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Code, ImageIcon, MessageSquare, Monitor, Smartphone, Globe } from 'lucide-react';

type Platform = 'windows' | 'macos' | 'linux';

interface DownloadItem {
  name: string;
  size: string;
  url: string;
  recommended?: boolean;
}

interface Downloads {
  windows: DownloadItem[];
  macos: DownloadItem[];
  linux: DownloadItem[];
}

export default function DownloadPage() {
  const [activePlatform, setActivePlatform] = useState<Platform>('windows');

  const platforms = [
    { id: 'windows' as Platform, name: 'Windows', icon: <Monitor className="h-5 w-5" /> },
    { id: 'macos' as Platform, name: 'macOS', icon: <Monitor className="h-5 w-5" /> },
    { id: 'linux' as Platform, name: 'Linux', icon: <Monitor className="h-5 w-5" /> },
  ];

  const downloads: Downloads = {
    windows: [
      { name: 'Windows Installer (x64)', size: '125 MB', url: '/downloads/aicere-studio-1.0.0-win-x64.exe', recommended: true },
      { name: 'Windows Portable (x64)', size: '122 MB', url: '/downloads/aicere-studio-1.0.0-win-x64.zip' },
    ],
    macos: [
      { name: 'macOS Intel', size: '135 MB', url: '/downloads/aicere-studio-1.0.0-macos-x64.dmg' },
      { name: 'macOS Apple Silicon', size: '128 MB', url: '/downloads/aicere-studio-1.0.0-macos-arm64.dmg', recommended: true },
    ],
    linux: [
      { name: 'Linux AppImage (x64)', size: '118 MB', url: '/downloads/aicere-studio-1.0.0-linux-x64.AppImage', recommended: true },
      { name: 'Linux .deb (x64)', size: '120 MB', url: '/downloads/aicere-studio-1.0.0-linux-x64.deb' },
    ],
  };

  return (
    <div className="relative min-h-screen pt-24 pb-20">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-600 via-purple-500 to-green-500 opacity-50"></div>
      
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-5xl font-extrabold sm:text-6xl">Download Aicere Studio</h1>
          <p className="mt-6 mx-auto max-w-2xl text-xl text-white/80">
            Get the complete AI creative suite with Agent Mode, Image Mode, and Audio Mode in one powerful desktop application.
          </p>
        </motion.div>

        {/* Features highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 text-center">
            <Code className="h-12 w-12 mx-auto mb-4 text-purple-400" />
            <h3 className="text-lg font-semibold mb-2">Agent Mode</h3>
            <p className="text-white/70">Visual workflow automation with drag-and-drop nodes</p>
          </div>
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 text-center">
            <ImageIcon className="h-12 w-12 mx-auto mb-4 text-blue-400" />
            <h3 className="text-lg font-semibold mb-2">Image Mode</h3>
            <p className="text-white/70">AI image generation and professional editing tools</p>
          </div>
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 text-center">
            <MessageSquare className="h-12 w-12 mx-auto mb-4 text-pink-400" />
            <h3 className="text-lg font-semibold mb-2">Audio Mode</h3>
            <p className="text-white/70">AI-powered music, speech, and sound effects generation</p>
          </div>
        </motion.div>

        {/* Platform selector */}
        <div className="mt-16 flex justify-center">
          <div className="relative flex items-center rounded-full p-1 bg-black/20 backdrop-blur-sm">
            {platforms.map((platform) => (
              <button
                key={platform.id}
                onClick={() => setActivePlatform(platform.id)}
                className={`relative flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium ${
                  activePlatform === platform.id ? 'bg-white text-black' : 'text-white'
                } transition-all duration-300`}
              >
                {platform.icon}
                {platform.name}
              </button>
            ))}
          </div>
        </div>

        {/* Download options */}
        <motion.div
          key={activePlatform}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-12"
        >
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-center mb-8">
              Aicere Studio for {platforms.find(p => p.id === activePlatform)?.name}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {downloads[activePlatform].map((download) => (
                <div
                  key={download.name}
                  className={`relative p-6 rounded-xl border-2 ${
                    download.recommended 
                      ? 'border-green-500/50 bg-green-500/10' 
                      : 'border-white/20 bg-white/5'
                  }`}
                >
                  {download.recommended && (
                    <div className="absolute -top-3 left-6 bg-green-500 text-black px-3 py-1 rounded-full text-sm font-medium">
                      Recommended
                    </div>
                  )}
                  
                  <h3 className="text-lg font-semibold mb-2">{download.name}</h3>
                  <p className="text-white/70 mb-4">{download.size}</p>
                  
                  <a
                    href={download.url}
                    className="inline-flex items-center gap-2 btn-primary w-full justify-center"
                  >
                    <Download className="h-4 w-4" />
                    Download
                  </a>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* System requirements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">System Requirements</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4">Windows</h3>
              <ul className="space-y-2 text-white/70">
                <li>• Windows 10/11 (64-bit)</li>
                <li>• 8 GB RAM minimum, 16 GB recommended</li>
                <li>• 5 GB available storage</li>
                <li>• DirectX 12 compatible graphics</li>
                <li>• Internet connection for cloud models</li>
              </ul>
            </div>
            
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4">macOS</h3>
              <ul className="space-y-2 text-white/70">
                <li>• macOS 11.0 or later</li>
                <li>• 8 GB RAM minimum, 16 GB recommended</li>
                <li>• 5 GB available storage</li>
                <li>• Metal-compatible graphics</li>
                <li>• Internet connection for cloud models</li>
              </ul>
            </div>
            
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4">Linux</h3>
              <ul className="space-y-2 text-white/70">
                <li>• Ubuntu 20.04+ or equivalent</li>
                <li>• 8 GB RAM minimum, 16 GB recommended</li>
                <li>• 5 GB available storage</li>
                <li>• OpenGL 3.3+ support</li>
                <li>• Internet connection for cloud models</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">What's Included</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-4xl mx-auto">
              <div>
                <h4 className="font-semibold mb-2">Free Features</h4>
                <ul className="space-y-1 text-white/70">
                  <li>• All three modes (Agent, Image, Audio)</li>
                  <li>• Local model support</li>
                  <li>• Basic AI generation tools</li>
                  <li>• Community support</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Pro Features</h4>
                <ul className="space-y-1 text-white/70">
                  <li>• Premium cloud AI models</li>
                  <li>• Advanced workflow automation</li>
                  <li>• Priority support</li>
                  <li>• Regular updates</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 