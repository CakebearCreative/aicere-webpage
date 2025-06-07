'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
// import LogoCube from './LogoCube';
import { Menu, X, UserCircle } from 'lucide-react';
import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const router = useRouter();

  const navLinks = [
    { name: 'Pricing', href: '/pricing' },
    { name: 'Features', href: '/features' },
    { name: 'Enterprise', href: '/enterprise' },
    { name: 'Docs', href: '/docs' },
    { name: 'Blog', href: '/blog' },
    { name: 'Forum', href: '/forum' },
    { name: 'Careers', href: '/careers' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleSignOut = async () => {
    await signOut();
    setMobileMenuOpen(false);
    window.location.href = '/';
  };

  const handleDashboardClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    console.log('Navbar: Dashboard clicked, navigating...');
    window.location.href = '/dashboard';
  };

  return (
    <header 
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 backdrop-blur-xl ${
        scrolled || mobileMenuOpen ? 'bg-black/75 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 z-50" onClick={() => setMobileMenuOpen(false)}>
          {/* <LogoCube /> */}
          <Image src='/logo.png' alt='Aicere Logo' width={24} height={24} className="h-10 w-10" /> 
          <span className="font-bold">Aicere</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map(link =>(
            <Link key={link.name} href={link.href} className="text-sm hover:text-white/80 transition-colors">
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {user ? (
            <div className="flex items-center gap-3">
              <a href="/dashboard" className="flex items-center gap-2 hover:text-white/80 transition-colors cursor-pointer" onClick={handleDashboardClick}>
                <UserCircle size={18} />
                <span className="text-sm">Dashboard</span>
              </a>
              <button onClick={handleSignOut} className="btn-ghost">Sign out</button>
            </div>
          ) : (
            <>
              <Link href="/signin" className="btn-ghost">Sign in</Link>
              <Link href="/download" className="btn-primary">Download</Link>
            </>
          )}
        </div>

        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white z-50">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-0 inset-x-0 min-h-screen bg-black/95 backdrop-blur-xl pt-20 pb-10 px-6 z-40">
          <nav className="flex flex-col items-center gap-6 mt-8">
            {navLinks.map(link => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-xl font-medium hover:text-purple-400 transition-colors py-2"
                onClick={toggleMobileMenu}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="mt-10 flex flex-col items-center gap-4 border-t border-white/10 pt-8">
            {user ? (
              <>
                <a 
                  href="/dashboard" 
                  className="btn-ghost w-full max-w-xs text-center flex justify-center items-center gap-2 cursor-pointer" 
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    window.location.href = '/dashboard';
                  }}
                >
                  <UserCircle size={18} />
                  <span>Dashboard</span>
                </a>
                <button 
                  onClick={handleSignOut} 
                  className="btn-primary w-full max-w-xs text-center"
                >
                  Sign out
                </button>
              </>
            ) : (
              <>
                <Link href="/signin" className="btn-ghost w-full max-w-xs text-center" onClick={toggleMobileMenu}>
                  Sign in
                </Link>
                <Link href="/download" className="btn-primary w-full max-w-xs text-center" onClick={toggleMobileMenu}>
                  Download
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
} 