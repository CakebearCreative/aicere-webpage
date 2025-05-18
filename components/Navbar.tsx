'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import LogoCube from './LogoCube';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed inset-x-0 top-0 z-30 transition-all duration-300 backdrop-blur-md ${
        scrolled ? 'bg-black/70 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <LogoCube /> <span className="font-bold">Aicere</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {['Pricing','Features','Enterprise','Blog','Forum','Careers'].map(p=>(
            <Link key={p} href={`/${p.toLowerCase()}`} className="text-sm hover:text-white/80">{p}</Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/signin" className="btn-ghost">Sign in</Link>
          <Link href="/download" className="btn-primary hidden sm:block">Download</Link>
        </div>
      </div>
    </header>
  );
} 