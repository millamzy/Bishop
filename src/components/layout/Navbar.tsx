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
  Video,
  Church,
  ArrowRight,
  ExternalLink,
  Search
} from 'lucide-react';
import { PASTOR_PROFILE, BISHOP_YOUTUBE_CHANNEL } from '@/data/mockData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Bishop', href: '/about' },
    { name: 'Messages & Synod', href: '/messages' },
    { name: 'Track Booking', href: '/bookings/track' },
    { name: 'Contact Secretariat', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0D0D0E]/90 backdrop-blur-2xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.6)] text-white">
      {/* Sleek Top Utility Bar with Responsive Fluid Layout */}
      <div className="bg-[#080809] px-3.5 sm:px-6 lg:px-10 py-2 sm:py-2.5 text-xs sm:text-sm text-zinc-400 border-b border-white/[0.04]">
        <div className="max-w-[1536px] mx-auto flex items-center justify-between gap-2">
          {/* Left: Audience Days */}
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5500] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF5500]" />
            </span>
            <span className="text-zinc-300 font-medium text-[11px] sm:text-sm truncate whitespace-nowrap">
              Bishopscourt Audiences: <strong className="text-white font-bold whitespace-nowrap">{PASTOR_PROFILE.counselingDays}</strong>
            </span>
          </div>

          {/* Right: Quick Channel & WhatsApp Links */}
          <div className="flex items-center gap-4 sm:gap-6 shrink-0">
            <a
              href={BISHOP_YOUTUBE_CHANNEL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2.5 text-zinc-200 hover:text-[#FFAA40] transition font-semibold text-xs sm:text-sm whitespace-nowrap shrink-0"
            >
              <Video className="w-4 h-4 text-[#FF5500] shrink-0" />
              <span className="whitespace-nowrap">YouTube: @bishopndubuisiobi6348</span>
            </a>
            <span className="hidden sm:inline text-zinc-700">•</span>
            <a
              href={`https://wa.me/${PASTOR_PROFILE.whatsappNumber}?text=Good%20day,%20I%20am%20contacting%20the%20Diocesan%20Secretariat%20of%20Bishop%20Ndubuisi%20Obi.`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-300 hover:text-white transition font-medium text-[11px] sm:text-sm flex items-center gap-1.5 whitespace-nowrap shrink-0"
            >
              <Phone className="w-3.5 h-3.5 text-[#FF5500] sm:hidden" />
              <span className="hidden min-[380px]:inline whitespace-nowrap">Registry: </span>
              <span className="text-white font-bold whitespace-nowrap">{PASTOR_PROFILE.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="max-w-[1536px] mx-auto px-3.5 sm:px-6 lg:px-10 h-20 sm:h-24 flex items-center justify-between gap-3 sm:gap-6">
        {/* Left: Brand / Episcopal Seal */}
        <Link href="/" className="flex items-center gap-3 sm:gap-4 group min-w-0 shrink">
          <div className="relative shrink-0">
            <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-[#FF5500] shadow-[0_0_20px_rgba(255,85,0,0.35)] bg-black p-0.5">
              <img
                src={PASTOR_PROFILE.photoUrl}
                alt={PASTOR_PROFILE.name}
                className="w-full h-full object-cover object-top rounded-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <span
              className="absolute bottom-0 right-0 w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-emerald-500 border-2 border-[#0D0D0E]"
              title="Diocesan Office Active"
            />
          </div>
          <div className="min-w-0">
            <span className="block font-display text-sm min-[390px]:text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-[#FFAA40] transition-colors leading-snug truncate max-w-[170px] min-[390px]:max-w-[240px] sm:max-w-none whitespace-nowrap">
              Rt. Rev. Ndubuisi C. O. Obi
            </span>
            <span className="block text-[10px] min-[390px]:text-xs sm:text-sm text-[#FF7828] font-bold tracking-wide truncate max-w-[170px] min-[390px]:max-w-[240px] sm:max-w-none whitespace-nowrap">
              Bishop of Nnewi • Anglican Communion
            </span>
          </div>
        </Link>

        {/* Center: Desktop Navigation Links in Frosted Island Container (Bigger Text) */}
        <div className="hidden lg:flex items-center gap-1.5 p-1.5 rounded-full bg-[#141416]/90 border border-white/[0.08] backdrop-blur-xl shadow-inner shrink-0">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3.5 xl:px-4.5 py-2.5 rounded-full text-xs xl:text-sm font-semibold tracking-wide transition-all duration-200 whitespace-nowrap shrink-0 ${active
                  ? 'bg-[#FF5500] text-white shadow-md shadow-[#FF5500]/30 font-bold'
                  : 'text-zinc-300 hover:text-white hover:bg-white/[0.08]'
                  }`}
              >
                <span className="whitespace-nowrap">{link.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Right: Actions & Signature Pill Button (Bigger & Bolder) */}
        <div className="hidden md:flex items-center gap-3.5 shrink-0">
          {/* YouTube Video Broadcasts Pill */}
          <a
            href={BISHOP_YOUTUBE_CHANNEL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-[#161619] hover:bg-[#202026] text-zinc-200 hover:text-white border border-white/[0.08] hover:border-[#FF5500]/40 transition shadow-sm group whitespace-nowrap"
            title="Watch Bishop Ndubuisi Obi on YouTube"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5500] group-hover:animate-ping shrink-0" />
            <span className="whitespace-nowrap">Broadcasts</span>
          </a>

          {/* Signature Pill Button with Sunset Orange Arrow Circle */}
          <Link
            href="/book"
            className="group flex items-center gap-3 pl-5 sm:pl-6 pr-2 sm:pr-2.5 py-2.5 rounded-full bg-white hover:bg-zinc-100 text-zinc-950 font-bold text-xs sm:text-base shadow-[0_12px_30px_rgba(255,255,255,0.18)] hover:shadow-[0_15px_35px_rgba(255,85,0,0.3)] transition-all duration-300 active:scale-95 whitespace-nowrap"
          >
            <span className="whitespace-nowrap">Book / Invite</span>
            <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FF5500] group-hover:bg-[#E64D00] text-white flex items-center justify-center transition-transform group-hover:translate-x-1 shadow-md shadow-[#FF5500]/30 shrink-0">
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </span>
          </Link>

          {/* Diocesan Staff Portal shortcut */}
          <Link
            href="/admin"
            className="p-3 rounded-full text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.08] transition shadow-sm shrink-0"
            title="Diocesan Secretariat Staff Portal"
          >
            <Shield className="w-5 h-5 text-[#FF5500]" />
          </Link>
        </div>

        {/* Mobile menu controls */}
        <div className="flex items-center gap-2 shrink-0 lg:hidden">
          <Link
            href="/book"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#FF5500] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#FF5500]/25 active:scale-95 transition whitespace-nowrap"
          >
            <span className="whitespace-nowrap">Book</span>
            <ArrowRight className="w-3.5 h-3.5 shrink-0" />
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl text-zinc-300 hover:text-white hover:bg-white/[0.08] border border-white/[0.08] transition active:scale-95 shrink-0"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-white" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer with Smooth Scrolling & Full Touch Targets */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/[0.08] bg-[#0D0D0E]/98 backdrop-blur-3xl px-4 sm:px-6 pt-4 pb-8 space-y-2 max-h-[calc(100dvh-5.5rem)] overflow-y-auto overscroll-contain shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-5 py-3.5 rounded-2xl text-base font-semibold transition active:scale-[0.98] whitespace-nowrap ${isActive(link.href)
                ? 'bg-[#FF5500] text-white font-bold shadow-lg shadow-[#FF5500]/25'
                : 'text-zinc-300 hover:bg-white/[0.05] hover:text-white'
                }`}
            >
              <span className="whitespace-nowrap">{link.name}</span>
            </Link>
          ))}

          <div className="pt-4 border-t border-white/[0.08] flex flex-col gap-3">
            <a
              href={BISHOP_YOUTUBE_CHANNEL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-5 py-3.5 rounded-2xl bg-[#141416] border border-white/[0.08] text-white text-sm font-semibold whitespace-nowrap"
            >
              <span className="flex items-center gap-2.5 whitespace-nowrap">
                <Video className="w-4 h-4 text-[#FF5500] shrink-0" />
                <span className="whitespace-nowrap">YouTube: @bishopndubuisiobi6348</span>
              </span>
              <span className="text-[#FFAA40] font-bold shrink-0">Watch →</span>
            </a>

            <Link
              href="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-5 py-3.5 rounded-2xl bg-[#141416] border border-white/[0.08] text-white text-sm font-semibold whitespace-nowrap"
            >
              <span className="flex items-center gap-2.5 whitespace-nowrap">
                <Shield className="w-4 h-4 text-[#FF5500] shrink-0" />
                <span className="whitespace-nowrap">Secretariat Staff Portal</span>
              </span>
              <span className="text-xs bg-[#FF5500]/20 text-[#FFAA40] px-2.5 py-0.5 rounded-full font-bold shrink-0">
                Staff
              </span>
            </Link>

            <a
              href={`https://wa.me/${PASTOR_PROFILE.whatsappNumber}?text=Good%20day,%20I%20am%20contacting%20the%20Diocesan%20Secretariat%20of%20Bishop%20Ndubuisi%20Obi.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 px-5 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold transition shadow-lg shadow-emerald-950/40 whitespace-nowrap"
            >
              <Phone className="w-4 h-4 shrink-0" />
              <span className="whitespace-nowrap">Chat on Bishopscourt WhatsApp Desk</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
