import Hero from '@/components/Hero';
import FeatureSection from '@/components/FeatureSection';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      <Hero />
      
      <FeatureSection
        title="Tab, tab, tab"
        description="Aicere lets you breeze through changes by predicting your next edit."
        gradient="from-purple-600 via-pink-500 to-green-500"
        imageUrl="/screens/aigent-vscode.png"
        imageAlt="AI code completion"
      />
      
      <FeatureSection
        title="Generate images with AI"
        description="Create stunning visuals with just a text prompt."
        gradient="from-green-500 via-blue-500 to-purple-600"
        imageUrl="/screens/aimage-ui.png"
        imageAlt="AI image generation"
        reversed
      />
      
      <FeatureSection
        title="Chat with your AI assistant"
        description="Get instant answers and help with your coding questions."
        gradient="from-pink-500 via-purple-600 to-blue-500"
        imageUrl="/screens/aibot-chat.png"
        imageAlt="AI chat assistant"
      />
    </>
  );
} 