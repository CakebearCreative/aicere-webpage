import Hero from '@/components/Hero';
import FeatureSection from '@/components/FeatureSection';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aicere - AI Solutions For Peak Productivity',
  description: 'Aicere is a Swedish AI company providing powerful Software as a Service solutions (Aigent, Aimage, Aibot) that respect your privacy with local-first processing. Enhance your coding, design, and communication with AI.',
  keywords: ['AI suite', 'productivity software', 'Aigent', 'Aimage', 'Aibot', 'AI development', 'AI image editor', 'AI chatbot', 'local-first AI', 'Swedish AI'],
  openGraph: {
    title: 'Aicere - AI Solutions For Peak Productivity',
    description: 'Discover Aicere: Aigent for AI development, Aimage for AI image editing, and Aibot for intelligent chatbots. Local-first, privacy-focused.',
    url: 'https://aicere.com', // Replace with actual domain
    siteName: 'Aicere',
    images: [
      {
        url: 'https://aicere.com/og-image.png', // Replace with actual OG image URL
        width: 1200,
        height: 630,
        alt: 'Aicere AI Suite',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aicere - AI Solutions For Peak Productivity',
    description: 'Boost your productivity with Aicere\'s AI suite: Aigent, Aimage, and Aibot. Privacy-first, local processing.',
    // site: '@aicere', // Replace with actual Twitter handle
    // creator: '@aicere',
    images: [
      {
        url: 'https://aicere.com/twitter-image.png', // Replace with actual Twitter image URL
        alt: 'Aicere AI Suite',
      }
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      
      <FeatureSection
        title="Agentic Node-Based Development"
        description="Aigent is an advanced development environment that allows you to create and deploy AI agents through an intuitive node-based interface. Build automated workflows that combine code, AI models, and external tools with unprecedented ease."
        gradient="from-purple-600 via-pink-500 to-green-500"
        imageUrl="/screens/aigent-vscode.png"
        imageAlt="Aigent node-based development environment"
      />
      
      <FeatureSection
        title="Professional AI Image Editing"
        description="Aimage combines the power of AI image generation with professional editing tools. Create stunning visuals with the intuitive interface of Photoshop and the advanced capabilities of ComfyUI, all at a fraction of the cost."
        gradient="from-green-500 via-blue-500 to-purple-600"
        imageUrl="/screens/aimage-ui.png"
        imageAlt="Aimage AI image editor interface"
        reversed
      />
      
      <FeatureSection
        title="Embeddable AI Assistant"
        description="Aibot is a no-code, embeddable AI assistant that works with websites and local folders. Add a powerful chatbot to your site with a single line of code, or use it offline to interact with sensitive documents while maintaining complete privacy."
        gradient="from-pink-500 via-purple-600 to-blue-500"
        imageUrl="/screens/aibot-chat.png"
        imageAlt="Aibot chat assistant interface"
      />
    </>
  );
} 