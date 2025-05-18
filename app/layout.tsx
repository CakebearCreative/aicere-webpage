import '../styles/globals.css';
// import '../styles/typography.css'; // No longer needed
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata = {
  metadataBase: new URL('https://aicere.com'), // Replace with your actual domain in production
  title: 'Aicere - The AI Suite',
  description: 'Built to make you extraordinarily productive, Aicere is the fastest way to ship with AI.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
} 