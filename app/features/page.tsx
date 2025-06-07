'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Bot, Image as ImageIcon, Music, MessageSquare, Workflow, FileText, Video, Box } from 'lucide-react';

export default function FeaturesPage() {
  const [activeTab, setActiveTab] = useState('agent');

  const modes = [
    {
      id: 'agent',
      name: 'Agent Mode',
      icon: <Bot className="h-5 w-5" />,
      description: 'Create complex AI workflows with our intuitive node-based visual editor. Perfect for automation and AI agent development.',
      features: [
        'Visual workflow editor with drag-and-drop nodes',
        'Input, Output, LLM, Function, Logic, and Timer nodes',
        'Real-time workflow execution and debugging',
        'Import/export workflows as JSON files',
        'Integration with multiple AI models',
        'RAG (Retrieval-Augmented Generation) support',
        'Automated scheduling and triggers',
        'Community workflow sharing (coming soon)',
      ],
      imageUrl: '/screens/aigent-vscode.png',
    },
    {
      id: 'image',
      name: 'Image Mode',
      icon: <ImageIcon className="h-5 w-5" />,
      description: 'AI-powered image generation and professional editing tools in one unified interface.',
      features: [
        'Multiple AI models: Stable Diffusion, FLUX, SDXL, Illustrious',
        'Cloud models: Imagen 4, DALL-E 3 (Pro plan)',
        'Professional editing tools: layers, brushes, selections',
        'AI tools: inpainting, background removal, upscaling',
        'One-click model downloads from CivitAI',
        'Local and cloud model support',
        'Real-time generation progress tracking',
        'Asset management and organization',
      ],
      imageUrl: '/screens/aimage-ui.png',
    },
    {
      id: 'audio',
      name: 'Audio Mode',
      icon: <Music className="h-5 w-5" />,
      description: 'Generate music, speech, and sound effects using state-of-the-art AI models.',
      features: [
        'Text-to-speech with ElevenLabs integration',
        'Music generation with Suno AI',
        'Sound effects creation',
        'Local TTS model support',
        'OpenAI TTS integration',
        'Voice cloning and synthesis',
        'Audio editing and processing tools',
        'Batch audio generation',
      ],
      imageUrl: '/screens/aibot-chat.png',
    },
    {
      id: 'integrated',
      name: 'Integrated Features',
      icon: <Workflow className="h-5 w-5" />,
      description: 'Powerful features that work across all modes to enhance your productivity.',
      features: [
        'Built-in LLM chat with multiple model support',
        'RAG document processing and indexing',
        'Project folder integration and file explorer',
        'Model management with CivitAI/HuggingFace',
        'Local/Cloud mode toggle for privacy',
        'Asset feed with generation history',
        'Cross-mode workflow automation',
        'Real-time collaboration (coming soon)',
      ],
      imageUrl: '/screens/aigent-vscode.png',
    },
  ];

  const activeMode = modes.find(m => m.id === activeTab) || modes[0];

  return (
    <div className="relative min-h-screen pt-24 pb-20">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-600 via-pink-500 to-green-500 opacity-50"></div>
      
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-5xl font-extrabold sm:text-6xl">Aicere Studio Features</h1>
          <p className="mt-6 mx-auto max-w-2xl text-xl text-white/80">
            Explore the comprehensive AI creative suite that combines workflow automation, image generation, and audio creation in one powerful application.
          </p>
        </motion.div>

        {/* Mode tabs */}
        <div className="mt-16">
          <div className="border-b border-white/10 mb-12">
            <div className="flex overflow-x-auto space-x-8">
              {modes.map((mode) => (
                <button
                  key={mode.id}
                  onClick={() => setActiveTab(mode.id)}
                  className={`pb-4 text-lg font-medium whitespace-nowrap flex items-center gap-2 ${
                    activeTab === mode.id
                      ? 'border-b-2 border-white text-white'
                      : 'text-white/60 hover:text-white/80'
                  }`}
                >
                  {mode.icon}
                  {mode.name}
                </button>
              ))}
            </div>
          </div>

          {/* Active mode details */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {/* Info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                {activeMode.icon}
                <h2 className="text-3xl font-bold">{activeMode.name}</h2>
              </div>
              <p className="text-xl text-white/80 mb-8">{activeMode.description}</p>
              
              <h3 className="text-xl font-semibold mb-4">Key Features</h3>
              <ul className="space-y-3">
                {activeMode.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="mr-3 h-5 w-5 shrink-0 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-10">
                <Link 
                  href="/download"
                  className="inline-flex items-center btn-primary"
                >
                  Download Aicere Studio
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20">
              <Image
                src={activeMode.imageUrl}
                alt={`${activeMode.name} interface`}
                width={800}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
        
        {/* Feature Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-32"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Complete Feature Overview</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-black/20 backdrop-blur-sm rounded-2xl overflow-hidden">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="p-4 text-left">Feature Category</th>
                  <th className="p-4 text-center">Agent Mode</th>
                  <th className="p-4 text-center">Image Mode</th>
                  <th className="p-4 text-center">Audio Mode</th>
                  <th className="p-4 text-center">Coming Soon</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="p-4 font-medium">AI Generation</td>
                  <td className="p-4 text-center text-green-500">Workflows</td>
                  <td className="p-4 text-center text-green-500">Images</td>
                  <td className="p-4 text-center text-green-500">Audio/Music</td>
                  <td className="p-4 text-center text-yellow-500">Video/3D</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-4 font-medium">Local Models</td>
                  <td className="p-4 text-center text-green-500">✓</td>
                  <td className="p-4 text-center text-green-500">✓</td>
                  <td className="p-4 text-center text-green-500">✓</td>
                  <td className="p-4 text-center text-yellow-500">Planned</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-4 font-medium">Cloud Models (Pro)</td>
                  <td className="p-4 text-center text-green-500">✓</td>
                  <td className="p-4 text-center text-green-500">✓</td>
                  <td className="p-4 text-center text-green-500">✓</td>
                  <td className="p-4 text-center text-yellow-500">Planned</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-4 font-medium">Visual Interface</td>
                  <td className="p-4 text-center text-green-500">Node Editor</td>
                  <td className="p-4 text-center text-green-500">Canvas</td>
                  <td className="p-4 text-center text-green-500">Waveform</td>
                  <td className="p-4 text-center text-yellow-500">Timeline/3D</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-4 font-medium">Automation</td>
                  <td className="p-4 text-center text-green-500">Advanced</td>
                  <td className="p-4 text-center text-yellow-500">Basic</td>
                  <td className="p-4 text-center text-yellow-500">Basic</td>
                  <td className="p-4 text-center text-yellow-500">Planned</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-4 font-medium">RAG Integration</td>
                  <td className="p-4 text-center text-green-500">✓</td>
                  <td className="p-4 text-center text-green-500">✓</td>
                  <td className="p-4 text-center text-green-500">✓</td>
                  <td className="p-4 text-center text-green-500">✓</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Professional Tools</td>
                  <td className="p-4 text-center text-green-500">Debugging</td>
                  <td className="p-4 text-center text-green-500">Editing</td>
                  <td className="p-4 text-center text-yellow-500">Processing</td>
                  <td className="p-4 text-center text-yellow-500">Planned</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Technical Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Technical Specifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Box className="h-5 w-5 text-purple-400" />
                Architecture
              </h3>
              <ul className="space-y-2 text-white/70">
                <li>• Built with Tauri + React + Rust</li>
                <li>• Desktop-first native application</li>
                <li>• Cross-platform support</li>
                <li>• Local-first data processing</li>
              </ul>
            </div>
            
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Bot className="h-5 w-5 text-blue-400" />
                AI Models
              </h3>
              <ul className="space-y-2 text-white/70">
                <li>• Stable Diffusion variants</li>
                <li>• OpenAI GPT models</li>
                <li>• Google Gemini & Imagen</li>
                <li>• Anthropic Claude</li>
                <li>• ElevenLabs & Suno AI</li>
              </ul>
            </div>
            
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <FileText className="h-5 w-5 text-green-400" />
                Integrations
              </h3>
              <ul className="space-y-2 text-white/70">
                <li>• CivitAI model downloads</li>
                <li>• HuggingFace integration</li>
                <li>• ComfyUI workflows</li>
                <li>• Automatic1111 support</li>
                <li>• Custom Python scripts</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 
 