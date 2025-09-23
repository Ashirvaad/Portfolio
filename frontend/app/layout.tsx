import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'Portfolio website',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* The favicon link has been removed as the file does not exist. */}
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="bg-white text-slate-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
