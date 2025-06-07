'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BookOpen, ChevronRight } from 'lucide-react';

// Dummy blog posts data
const posts = [
  {
    slug: 'announcing-aicere-v1',
    title: 'Announcing Aicere v1.0: The Future of AI-Powered Productivity',
    date: 'October 26, 2023',
    excerpt: 'We are thrilled to launch Aicere v1.0, a suite of powerful AI tools designed to revolutionize how you code, design, and interact with AI...',
    category: 'Announcements',
    imageUrl: '/screens/hero-code.png' // Placeholder image
  },
  {
    slug: 'mastering-aigent-workflows',
    title: 'Mastering Aigent: A Guide to Building Powerful AI Agent Workflows',
    date: 'November 5, 2023',
    excerpt: "Dive deep into Aigent's node-based system and learn how to create complex, automated AI workflows for your development tasks...",
    category: 'Tutorials',
    imageUrl: '/screens/aigent-vscode.png' // Placeholder image
  },
  {
    slug: 'creative-ai-with-aimage',
    title: 'Unleashing Creative Potential with Aimage: Tips and Tricks',
    date: 'November 12, 2023',
    excerpt: 'Explore the creative possibilities with Aimage. From stunning generations to professional edits, here are some tips to get you started...',
    category: 'Showcase',
    imageUrl: '/screens/aimage-ui.png' // Placeholder image
  }
];

export default function BlogPage() {
  return (
    <div className="relative min-h-screen pt-32 pb-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-600 opacity-30"></div>
      <div className="mx-auto max-w-5xl px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <BookOpen className="h-16 w-16 mx-auto mb-6 text-amber-400" />
          <h1 className="text-5xl font-extrabold sm:text-6xl">Aicere Blog</h1>
          <p className="mt-6 text-xl text-white/80">
            News, insights, tutorials, and updates from the Aicere team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              className="bg-black/30 backdrop-blur-sm rounded-2xl overflow-hidden ring-1 ring-white/10 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            >
              {post.imageUrl && (
                <Link href={`/blog/${post.slug}`} className="block">
                  <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity" />
                </Link>
              )}
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm text-amber-400 mb-1">{post.category}</p>
                <h2 className="text-xl font-bold mb-2 text-white">
                  <Link href={`/blog/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-sm text-white/70 mb-1">{post.date}</p>
                <p className="text-white/70 text-sm mb-4 flex-grow">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-sm font-medium text-amber-400 hover:underline mt-auto">
                  Read More <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* TODO: Add pagination or load more button */}
      </div>
    </div>
  );
} 