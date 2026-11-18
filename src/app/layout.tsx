import type { Metadata, Viewport } from 'next';
import { Outfit, Plus_Jakarta_Sans, Geist_Mono } from 'next/font/google';
import './globals.css';
import React, { Suspense } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AudioPlayerBar from '@/components/layout/AudioPlayerBar';
import { AudioPlayerProvider } from '@/context/AudioPlayerContext';

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const viewport: Viewport = {
  themeColor: '#0d0d0e',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'The Rt. Rev. Ndubuisi C. O. Obi | Bishop of Anglican Diocese of Nnewi',
  description:
    'Official episcopal portal and ministry archive of The Right Reverend Ndubuisi Chukwuka Obinna Obi, Bishop of the Anglican Diocese of Nnewi, Church of Nigeria (Anglican Communion). Stream and download audio sermons, read synod presidential charges, schedule episcopal audiences, and submit ministry invitations.',
  keywords: [
    'Right Reverend Ndubuisi Obi',
    'Bishop Ndubuisi Chukwuka Obinna Obi',
    'Anglican Diocese of Nnewi',
    'Church of Nigeria Anglican Communion',
    'Cathedral Church of St Mary Uruagu Nnewi',
    'Bishopscourt Nnewi',
    'Anglican Audio Sermons Nigeria',
    'Synod Presidential Address Nnewi',
    'DMGS Onitsha'
  ],
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${plusJakarta.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0D0D0E] text-zinc-100 font-sans selection:bg-[#FF5500] selection:text-white">
        <AudioPlayerProvider>
          {/* Header */}
          <Navbar />

          {/* Main content body */}
          <main className="flex-1 flex flex-col">{children}</main>

          {/* Persistent Floating Audio Bar */}
          <AudioPlayerBar />

          {/* Footer */}
          <Footer />
        </AudioPlayerProvider>
      </body>
    </html>
  );
}
