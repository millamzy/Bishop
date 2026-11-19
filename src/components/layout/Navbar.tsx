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
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { PASTOR_PROFILE, BISHOP_YOUTUBE_CHANNEL } from '@/data/mockData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Bishop', href: '/about' },
    { name: 'Synod & Messages', href: '/messages' },
    { name: 'Book Audience', href: '/book' },
    { name: 'Live Tracker', href: '/bookings/track' },
    { name: 'Secretariat', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0D0D0E]/85 backdrop-blur-2xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.7)] text-white">
      {/* Top Banner Notice: Luxury obsidian with radiant ember pulse */}
      <div className="bg-[#080809]/95 px-4 py-1.5 text-xs text-zinc-400 text-center flex items-center justify-center gap-3 border-b border-white/[0.05]">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5500] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF5500]" />
          </span>
          <span className="text-zinc-300 font-medium">Episcopal Audiences: {PASTOR_PROFILE.counselingDays}</span>
        </div>
        <span className="hidden sm:inline text-zinc-700">•</span>
        <a
          href={BISHOP_YOUTUBE_CHANNEL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-1.5 font-bold text-[#FF7828] hover:text-[#FFAA40] transition"
        >
          <Video className="w-3.5 h-3.5 text-[#FF5500]" />
          <span>YouTube: @bishopndubuisiobi6348</span>
        </a>
        <span className="hidden md:inline text-zinc-700">•</span>
        <a
          href={`https://wa.me/${PASTOR_PROFILE.whatsappNumber}?text=Peace%20be%20unto%20you,%20I%20am%20contacting%20the%20Diocesan%20Secretariat%20of%20Bishop%20Ndubuisi%20Obi.`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline font-medium text-zinc-400 hover:text-white transition"
        >
          Bishopscourt Registry Desk
        </a>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand: Luxury Crest & Title */}
        <Link href="/" className="flex items-center gap-3.5 group">
          <div className="relative">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#FF5500] shadow-[0_0_20px_rgba(255,85,0,0.3)] shrink-0 bg-zinc-950 p-0.5">
              <img
                src={PASTOR_PROFILE.photoUrl}
                alt={PASTOR_PROFILE.name}
                className="w-full h-full object-cover object-top rounded-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            {/* Live episcopal ordination badge dot */}
            <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#0D0D0E]" title="Episcopal Office Active" />
          </div>
          <div>
            <span className="block font-display text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-[#FF7828] transition-colors">
              Rt. Rev. Ndubuisi C. O. Obi
            </span>
            <span className="block text-xs text-[#FF5500] font-semibold tracking-wide truncate max-w-[210px] sm:max-w-none">
              Bishop, Anglican Diocese of Nnewi
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1.5 p-1 rounded-full bg-[#141416]/80 border border-white/[0.08] backdrop-blur-xl">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                  active
                    ? 'bg-[#FF5500] text-white shadow-lg shadow-[#FF5500]/25'
                    : 'text-zinc-400 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Right CTA Actions: Luxury White Pill Button + YouTube Channel */}
        <div className="hidden sm:flex items-center gap-3">
          {/* YouTube Video Badge */}
          <a
            href={BISHOP_YOUTUBE_CHANNEL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-[#161619] hover:bg-[#202025] text-zinc-300 hover:text-white border border-white/[0.08] hover:border-[#FF5500]/40 transition shadow-sm group"
            title="Bishop Ndubuisi Obi on YouTube"
          >
            <span className="w-2 h-2 rounded-full bg-[#FF5500] group-hover:animate-pulse" />
            <span>Broadcasts</span>
          </a>

          {/* Signature Pill Button with Sunset Orange Arrow Circle */}
          <Link
            href="/book"
            className="group flex items-center gap-2.5 pl-5 pr-2 py-2 rounded-full bg-white hover:bg-zinc-100 text-zinc-950 font-bold text-xs shadow-[0_10px_25px_rgba(255,255,255,0.15)] hover:shadow-[0_12px_30px_rgba(255,85,0,0.25)] transition-all duration-300 active:scale-95"
          >
            <span>Book / Invite</span>
            <span className="w-7 h-7 rounded-full bg-[#FF5500] group-hover:bg-[#E64D00] text-white flex items-center justify-center transition-transform group-hover:translate-x-0.5 shadow-md shadow-[#FF5500]/30">
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>

          {/* Admin shortcut button */}
          <Link
            href="/admin"
            className="p-2.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/[0.06] border border-white/[0.08] transition shadow-sm"
            title="Episcopal Secretariat Portal"
          >
            <Shield className="w-4 h-4 text-[#FF5500]" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          <Link
            href="/book"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FF5500] text-white text-xs font-bold shadow-md shadow-[#FF5500]/25"
          >
            <span>Book</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-[#1D1D21] border border-white/[0.08]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/[0.08] bg-[#0D0D0E]/95 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2.5 rounded-2xl text-sm font-semibold transition ${
                isActive(link.href)
                  ? 'bg-[#FF5500] text-white font-bold shadow-lg shadow-[#FF5500]/25'
                  : 'text-zinc-400 hover:bg-white/[0.05] hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}

          <div className="pt-4 border-t border-white/[0.08] flex flex-col gap-2.5">
            <a
              href={BISHOP_YOUTUBE_CHANNEL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-4 py-2.5 rounded-2xl bg-[#141416] border border-white/[0.08] text-white text-xs font-semibold"
            >
              <span className="flex items-center gap-2">
                <Video className="w-4 h-4 text-[#FF5500]" />
                <span>YouTube: @bishopndubuisiobi6348</span>
              </span>
              <span className="text-[#FF5500]">→</span>
            </a>

            <Link
              href="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-4 py-2.5 rounded-2xl bg-[#141416] border border-white/[0.08] text-white text-xs font-semibold"
            >
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#FF5500]" />
                <span>Diocesan Secretariat Portal</span>
              </span>
              <span className="text-[10px] bg-[#FF5500]/20 text-[#FF5500] px-2 py-0.5 rounded-full font-bold">
                Staff
              </span>
            </Link>

            <a
              href={`https://wa.me/${PASTOR_PROFILE.whatsappNumber}?text=Peace%20be%20unto%20you,%20I%20am%20contacting%20the%20Diocesan%20Secretariat%20of%20Bishop%20Ndubuisi%20Obi.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition shadow-lg shadow-emerald-950/40"
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
