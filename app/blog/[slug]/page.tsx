'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronLeft, Calendar, UserCircle } from 'lucide-react';

// Dummy function to fetch post data (replace with actual data fetching)
async function getPostData(slug: string) {
  // In a real app, you'd fetch this from a CMS or database
  const posts = [
    {
      slug: 'announcing-aicere-v1',
      title: 'Announcing Aicere v1.0: The Future of AI-Powered Productivity',
      date: 'October 26, 2023',
      author: 'The Aicere Team',
      category: 'Announcements',
      imageUrl: '/screens/hero-code.png',
      content: `
        <p class="mb-4">We are thrilled to launch Aicere v1.0, a suite of powerful AI tools designed to revolutionize how you code, design, and interact with AI. This release marks a significant milestone in our journey to build the most intuitive and efficient AI-powered productivity software.</p>
        <h2 class="text-2xl font-bold my-4 text-white">What's New in v1.0?</h2>
        <ul class="list-disc list-inside mb-4 pl-4 space-y-2">
          <li><strong>Aigent:</strong> Our flagship node-based AI agent development environment, now with enhanced local model support and a revamped UI.</li>
          <li><strong>Aimage:</strong> Generate stunning visuals with our ComfyUI-integrated image editor, featuring new models and editing tools.</li>
          <li><strong>Aibot:</strong> Embeddable AI assistant with improved content grounding and offline capabilities.</li>
        </ul>
        <p class="mb-4">Our team has worked tirelessly to bring you a polished, powerful, and privacy-focused experience. We believe Aicere will become an indispensable part of your workflow.</p>
        <h2 class="text-2xl font-bold my-4 text-white">Local-First Philosophy</h2>
        <p class="mb-4">Aicere is built with a local-first approach, ensuring your data stays on your machine for maximum privacy and control. While cloud features are available for enhanced capabilities, the core functionality of our products is designed to work offline.</p>
        <p>Explore Aicere v1.0 today and let us know what you think!</p>
      `
    },
    // Add other posts here if needed for testing, matching slugs from blog/page.tsx
    {
      slug: 'mastering-aigent-workflows',
      title: 'Mastering Aigent: A Guide to Building Powerful AI Agent Workflows',
      date: 'November 5, 2023',
      author: 'Jane Developer',
      category: 'Tutorials',
      imageUrl: '/screens/aigent-vscode.png',
      content: `<p>This is a deep dive into Aigent...</p>`
    },
    {
      slug: 'creative-ai-with-aimage',
      title: 'Unleashing Creative Potential with Aimage: Tips and Tricks',
      date: 'November 12, 2023',
      author: 'Alex Designer',
      category: 'Showcase',
      imageUrl: '/screens/aimage-ui.png',
      content: '<p>Explore creative Aimage uses here...</p>'
    },
  ];
  return posts.find(post => post.slug === slug);
}

interface PostPageParams {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params }: PostPageParams) {
  const post = await getPostData(params.slug);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center pt-24 pb-20 px-6">
        <h1 className="text-4xl font-bold mb-4">Post not found</h1>
        <p className="text-xl text-white/80 mb-8">Sorry, we couldn't find the blog post you were looking for.</p>
        <Link href="/blog" className="btn-primary">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen pt-32 pb-20">
      <div className="absolute inset-0 -z-10 bg-gradient-conic from-orange-500 via-amber-500 to-yellow-600 opacity-20"></div>
      <div className="mx-auto max-w-3xl px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/blog" className="inline-flex items-center text-amber-400 hover:text-amber-300 mb-8 text-sm">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Blog
          </Link>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">{post.title}</h1>
          <div className="flex items-center text-sm text-white/70 mb-2">
            <Calendar className="h-4 w-4 mr-2 text-amber-400" /> {post.date}
            <span className="mx-2">|</span>
            <UserCircle className="h-4 w-4 mr-2 text-amber-400" /> {post.author}
            <span className="mx-2">|</span>
            <span>Category: {post.category}</span>
          </div>
          
          {post.imageUrl && (
            <img 
              src={post.imageUrl} 
              alt={post.title} 
              className="w-full h-auto max-h-[400px] object-cover rounded-xl my-8 shadow-lg ring-1 ring-white/10"
            />
          )}
          
          <article 
            className="prose prose-invert prose-lg max-w-none text-white/90 prose-headings:text-white prose-a:text-amber-400 hover:prose-a:text-amber-300 prose-strong:text-white/95"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </motion.div>

        {/* Add share buttons or related posts section here */}
        <motion.div 
          className="mt-12 border-t border-white/10 pt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link href="/blog" className="btn-ghost">
            <ChevronLeft className="h-4 w-4 mr-2" /> More Posts
          </Link>
        </motion.div>

      </div>
    </div>
  );
}

// Optional: Generate static paths if you know all slugs at build time
// export async function generateStaticParams() {
//   const posts = [
//     { slug: 'announcing-aicere-v1' },
//     { slug: 'mastering-aigent-workflows' },
//     { slug: 'creative-ai-with-aimage' },
//   ];
//   return posts.map((post) => ({
//     slug: post.slug,
//   }));
// } 