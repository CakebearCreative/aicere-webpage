import Hero from '@/components/Hero';
import FeatureSection from '@/components/FeatureSection';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aicere Studio - AI-Powered Creative Suite',
  description: 'Aicere Studio is a comprehensive AI creative suite with Agent Mode for workflow automation, Image Mode for AI image generation and editing, and Audio Mode for AI audio creation. Local-first processing with privacy focus.',
  keywords: ['AI suite', 'productivity software', 'AI development', 'AI image editor', 'AI audio generation', 'workflow automation', 'local-first AI', 'Swedish AI'],
  openGraph: {
    title: 'Aicere Studio - AI-Powered Creative Suite',
    description: 'Discover Aicere Studio: A unified AI creative suite with Agent Mode, Image Mode, and Audio Mode. Local-first, privacy-focused.',
    url: 'https://aicere.com', // Replace with actual domain
    siteName: 'Aicere',
    images: [
      {
        url: 'https://aicere.com/og-image.png', // Replace with actual OG image URL
        width: 1200,
        height: 630,
        alt: 'Aicere Studio Creative Suite',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aicere Studio - AI-Powered Creative Suite',
    description: 'Boost your productivity with Aicere Studio\'s unified AI creative suite: Agent Mode, Image Mode, and Audio Mode. Privacy-first, local processing.',
    // site: '@aicere', // Replace with actual Twitter handle
    // creator: '@aicere',
    images: [
      {
        url: 'https://aicere.com/twitter-image.png', // Replace with actual Twitter image URL
        alt: 'Aicere Studio Creative Suite',
      }
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      
      <FeatureSection
        title="Agent Mode - Visual Workflow Automation"
        description="Create powerful AI workflows with our intuitive node-based interface. Drag and drop nodes to build automated processes that combine AI models, external tools, and custom logic. Perfect for developers and power users who want to automate complex tasks."
        gradient="from-purple-600 via-pink-500 to-green-500"
        imageUrl="/screens/aigent-vscode.png"
        imageAlt="Aicere Studio Agent Mode workflow editor"
      />
      
      <FeatureSection
        title="Image Mode - AI-Powered Image Creation & Editing"
        description="Generate stunning images with AI and edit them with professional tools. Combines the power of Stable Diffusion, FLUX, and other AI models with intuitive editing tools. Features include AI inpainting, background removal, smart selection, and layer management."
        gradient="from-green-500 via-blue-500 to-purple-600"
        imageUrl="/screens/aimage-ui.png"
        imageAlt="Aicere Studio Image Mode interface"
        reversed
      />
      
      <FeatureSection
        title="Audio Mode - AI Audio Generation & Processing"
        description="Create music, sound effects, and speech with AI. Supports multiple providers including ElevenLabs, Suno AI, and local TTS models. Generate background music, voice-overs, sound effects, and more with simple text prompts."
        gradient="from-pink-500 via-purple-600 to-blue-500"
        imageUrl="/screens/aibot-chat.png"
        imageAlt="Aicere Studio Audio Mode interface"
      />
    </>
  );
} 