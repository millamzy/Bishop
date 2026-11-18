'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  BookOpen,
  Calendar,
  MessageSquare,
  Shield,
  Phone,
  Search,
  Headphones,
  CheckCircle2,
  Video,
  Church,
  ArrowRight
} from 'lucide-react';
import { PASTOR_PROFILE, BISHOP_YOUTUBE_CHANNEL } from '@/data/mockData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Messages Library', href: '/messages' },
    { name: 'Book / Invite', href: '/book' },
    { name: 'Track Request', href: '/bookings/track' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0D0D0E]/95 backdrop-blur-md border-b border-[#232326] text-white">
      {/* Top Banner Notice: Dark obsidian with vibrant orange pulse */}
      <div className="bg-[#080809] px-4 py-1.5 text-xs text-zinc-400 text-center flex items-center justify-center gap-3 border-b border-[#1E1E22]">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500]" />
          <span>Diocesan Audiences: {PASTOR_PROFILE.counselingDays}</span>
        </div>
        <span className="hidden sm:inline text-zinc-600">•</span>
        <a
          href={BISHOP_YOUTUBE_CHANNEL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-1.5 font-bold text-[#FF5500] hover:text-[#ff6b26] transition"
        >
          <span className="w-2 h-2 rounded-full bg-[#FF5500] animate-pulse" />
          <span>YouTube: @bishopndubuisiobi6348</span>
        </a>
        <span className="hidden md:inline text-zinc-600">•</span>
        <a
          href={`https://wa.me/${PASTOR_PROFILE.whatsappNumber}?text=Peace%20be%20unto%20you,%20I%20am%20contacting%20the%20Diocesan%20Secretariat%20of%20Bishop%20Ndubuisi%20Obi.`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline font-medium text-zinc-300 hover:text-white transition"
        >
          Secretariat WhatsApp
        </a>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-[#FF5500] shadow-md shadow-[#FF5500]/20 shrink-0 bg-zinc-900">
            <img
              src={PASTOR_PROFILE.photoUrl}
              alt={PASTOR_PROFILE.name}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform"
            />
          </div>
          <div>
            <span className="block font-sans text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-[#FF5500] transition-colors">
              Rt. Rev. Ndubuisi C. O. Obi
            </span>
            <span className="block text-xs text-[#FF5500] font-semibold truncate max-w-[220px] sm:max-w-none">
              Bishop, Anglican Diocese of Nnewi
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  active
                    ? 'bg-[#1D1D21] text-white font-semibold border border-[#323238]'
                    : 'text-zinc-400 hover:text-white hover:bg-[#161618]'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Right CTA Actions: Matching the reference image pill button */}
        <div className="hidden sm:flex items-center gap-3">
          {/* YouTube Channel Button */}
          <a
            href={BISHOP_YOUTUBE_CHANNEL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold bg-[#161619] hover:bg-[#202024] text-zinc-300 border border-[#27272A] transition"
            title="Bishop Ndubuisi Obi on YouTube"
          >
            <span className="w-2 h-2 rounded-full bg-[#FF5500]" />
            <span>YouTube</span>
          </a>

          {/* Signature Pill Button with Orange Arrow (from the reference design) */}
          <Link
            href="/book"
            className="group flex items-center gap-2 pl-4 pr-1.5 py-1.5 rounded-full bg-white hover:bg-zinc-100 text-zinc-950 font-bold text-xs shadow-md transition active:scale-95"
          >
            <span>Book / Invite</span>
            <span className="w-7 h-7 rounded-full bg-[#FF5500] group-hover:bg-[#E64D00] text-white flex items-center justify-center transition-transform group-hover:translate-x-0.5">
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>

          {/* Admin shortcut button */}
          <Link
            href="/admin"
            className="p-2.5 rounded-full text-zinc-400 hover:text-white hover:bg-[#1D1D21] border border-[#27272A] transition"
            title="Episcopal Secretariat Portal"
          >
            <Shield className="w-4 h-4 text-[#FF5500]" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          <Link
            href="/book"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FF5500] text-white text-xs font-bold"
          >
            <span>Book</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-[#1D1D21]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#232326] bg-[#0D0D0E] px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2.5 rounded-xl text-sm font-semibold ${
                isActive(link.href)
                  ? 'bg-[#FF5500] text-white font-bold'
                  : 'text-zinc-400 hover:bg-[#17171A] hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}

          <div className="pt-4 border-t border-[#232326] flex flex-col gap-2.5">
            <a
              href={BISHOP_YOUTUBE_CHANNEL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#17171A] border border-[#27272A] text-white text-xs font-semibold"
            >
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF5500]" />
                <span>YouTube: @bishopndubuisiobi6348</span>
              </span>
              <span className="text-[#FF5500]">→</span>
            </a>

            <Link
              href="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#17171A] border border-[#27272A] text-white text-xs font-semibold"
            >
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#FF5500]" />
                <span>Diocesan Secretariat Portal</span>
              </span>
              <span className="text-[10px] bg-[#FF5500]/20 text-[#FF5500] px-2 py-0.5 rounded font-bold">
                Staff
              </span>
            </Link>

            <a
              href={`https://wa.me/${PASTOR_PROFILE.whatsappNumber}?text=Peace%20be%20unto%20you,%20I%20am%20contacting%20the%20Diocesan%20Secretariat%20of%20Bishop%20Ndubuisi%20Obi.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#FF5500] hover:bg-[#E64D00] text-white text-xs font-bold transition shadow-md shadow-[#FF5500]/20"
            >
              <Phone className="w-4 h-4" />
              <span>Chat on Bishopscourt WhatsApp Desk</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
