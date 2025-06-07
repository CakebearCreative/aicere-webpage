'use client';
import Link from 'next/link';
// import LogoCube from './LogoCube';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { 
      title: 'Products',
      links: [
        { name: 'Aicere Studio', href: '/features' },
        { name: 'Agent Mode', href: '/features#agent' },
        { name: 'Image Mode', href: '/features#image' },
        { name: 'Audio Mode', href: '/features#audio' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '/docs' },
        { name: 'Blog', href: '/blog' },
        { name: 'Forum', href: '/forum' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy', href: '/privacy' },
        { name: 'Terms', href: '/terms' },
      ]
    }
  ];

  return (
    <footer className="border-t border-white/10 bg-black py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Logo and copyright */}
          <div className="mb-10 md:mb-0">
            <Link href="/" className="flex items-center gap-2">
              <Image src='/logo.png' alt='Aicere Logo' width={24} height={24} className="h-6 w-6" />
              <span className="font-bold">Aicere</span>
            </Link>
            <p className="mt-4 text-sm text-white/60">
              © {currentYear} Aicere Inc.<br />
              All rights reserved.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerLinks.map((category) => (
              <div key={category.title}>
                <h3 className="text-sm font-semibold">{category.title}</h3>
                <ul className="mt-4 space-y-3">
                  {category.links.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-sm text-white/60 hover:text-white">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
} 