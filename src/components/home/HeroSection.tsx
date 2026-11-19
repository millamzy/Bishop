'use client';

import React from 'react';
import Link from 'next/link';
import { PASTOR_PROFILE, BISHOP_YOUTUBE_CHANNEL } from '@/data/mockData';
import {
  Calendar,
  Send,
  Headphones,
  MapPin,
  CheckCircle2,
  Video,
  ArrowRight,
  Church,
  Flame,
  Shield,
  Sparkles,
  Award
} from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0D0D0E] pt-6 pb-20">
      {/* Ambient background glow flares */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#FF5500]/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-[#FFAA40]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
        {/* Main Radiant Sunset Ember Hero Card */}
        <div className="relative rounded-[36px] sm:rounded-[48px] overflow-hidden bg-gradient-to-b from-[#18181D] via-[#121215] to-[#0A0A0C] border border-white/[0.1] p-6 sm:p-12 lg:p-16 shadow-[0_30px_100px_rgba(0,0,0,0.8)] text-white">
          {/* Luminous Ember Mesh Accent at the top of the card */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#FF5500] to-transparent opacity-80" />
          <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-gradient-to-b from-[#FF5500]/25 via-[#C93800]/10 to-transparent rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-[#FF5500]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-7 text-left">
              {/* Kicker Tag */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.06] backdrop-blur-xl border border-white/[0.12] text-xs font-semibold tracking-wide shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#FF5500] shadow-[0_0_8px_#FF5500]" />
                <span className="text-zinc-200">Anglican Diocese of Nnewi • Church of Nigeria</span>
              </div>

              {/* Massive Bold Headline with Metallic Gradient */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-extrabold tracking-tight leading-[1.08] text-white">
                Apostolic Mandate &amp;{' '}
                <span className="bg-gradient-to-r from-[#FF5500] via-[#FF7828] to-[#FFAA40] bg-clip-text text-transparent">
                  Episcopal
                </span>{' '}
                Leadership.
              </h1>

              {/* Subheading */}
              <div className="max-w-xl">
                <p className="text-zinc-300 text-base sm:text-lg font-normal leading-relaxed">
                  Welcome to the official online home of{' '}
                  <strong className="text-white font-semibold underline decoration-[#FF5500]/60 underline-offset-4">
                    The Rt. Rev. Ndubuisi C. O. Obi
                  </strong>
                  . Access presidential synod addresses, stream high-fidelity audio teachings, schedule confidential audiences at Bishopscourt, and watch daily YouTube video broadcasts.
                </p>
              </div>

              {/* Action Buttons: Premium Signature pill buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                {/* White Pill with Orange Arrow */}
                <Link
                  href="/book?tab=counseling"
                  className="group flex items-center gap-3 pl-6 pr-2.5 py-2.5 rounded-full bg-white hover:bg-zinc-100 text-zinc-950 font-bold text-xs sm:text-sm shadow-[0_10px_35px_rgba(255,255,255,0.2)] hover:shadow-[0_15px_40px_rgba(255,85,0,0.3)] transition-all duration-300 active:scale-95"
                >
                  <span>Book Pastoral Audience</span>
                  <span className="w-8 h-8 rounded-full bg-[#FF5500] group-hover:bg-[#E64D00] text-white flex items-center justify-center transition-transform group-hover:translate-x-1 shadow-md shadow-[#FF5500]/30">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>

                {/* Sunset Orange Pill */}
                <Link
                  href="/messages"
                  className="flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#FF5500] hover:bg-[#E64D00] text-white font-bold text-xs sm:text-sm shadow-[0_10px_30px_rgba(255,85,0,0.35)] transition-all duration-300 active:scale-95 border border-white/20"
                >
                  <Headphones className="w-4 h-4" />
                  <span>Audio Sermons</span>
                </Link>

                {/* Dark Glass Pill for YouTube */}
                <a
                  href={BISHOP_YOUTUBE_CHANNEL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-white font-semibold text-xs sm:text-sm border border-white/[0.12] backdrop-blur-xl transition-all duration-300 active:scale-95 shadow-sm group"
                >
                  <span className="w-2 h-2 rounded-full bg-[#FF5500] group-hover:animate-ping" />
                  <span>YouTube Channel</span>
                </a>
              </div>
            </div>

            {/* Right Column: Bishop Portrait in Luxury Frame */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm">
                {/* Glowing Halo behind portrait */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-[#FF5500]/30 via-[#FF7828]/15 to-transparent rounded-[44px] blur-2xl pointer-events-none" />

                {/* Modern Dark Curved Glass Frame */}
                <div className="relative rounded-[36px] overflow-hidden bg-gradient-to-b from-white/[0.12] via-[#161619] to-[#0E0E10] border border-white/[0.15] p-3.5 shadow-2xl backdrop-blur-2xl">
                  {/* Portrait Container */}
                  <div className="relative w-full aspect-[4/5] rounded-[28px] overflow-hidden bg-black shadow-inner">
                    <img
                      src={PASTOR_PROFILE.photoUrl}
                      alt={PASTOR_PROFILE.name}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    />

                    {/* Gradient overlay at bottom of image */}
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/60 to-transparent p-5 text-center">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF5500]/25 border border-[#FF5500]/40 text-[#FFAA40] text-[11px] font-bold uppercase tracking-wider mb-1">
                        <Award className="w-3.5 h-3.5 text-[#FF5500]" />
                        <span>6th Diocesan Bishop</span>
                      </div>
                      <span className="text-base font-display font-bold text-white block">
                        {PASTOR_PROFILE.name}
                      </span>
                    </div>
                  </div>

                  {/* Under-portrait metadata */}
                  <div className="p-3 text-center space-y-1.5">
                    <p className="text-xs text-zinc-300 font-medium">
                      Consecrated Sept 24, 2019 • Cathedral Church of St. Mary
                    </p>
                    <p className="text-[11px] text-[#FFAA40] flex items-center justify-center gap-1.5 font-semibold">
                      <MapPin className="w-3.5 h-3.5 text-[#FF5500]" />
                      <span>{PASTOR_PROFILE.location}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom 4 Numbered Priority Cards (Bento Glass Tiles) */}
          <div className="mt-14 pt-8 border-t border-white/[0.08] grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-left">
            <div className="luxury-glass-interactive p-4 sm:p-5 rounded-2xl space-y-1 group">
              <span className="block text-xs font-mono font-bold text-[#FF7828] tracking-widest">#01</span>
              <span className="block text-sm sm:text-base font-display font-bold text-white group-hover:text-[#FFAA40] transition-colors">
                Biblical Orthodoxy
              </span>
              <span className="block text-xs text-zinc-400">Sound Liturgical Heritage</span>
            </div>

            <div className="luxury-glass-interactive p-4 sm:p-5 rounded-2xl space-y-1 group">
              <span className="block text-xs font-mono font-bold text-[#FF7828] tracking-widest">#02</span>
              <span className="block text-sm sm:text-base font-display font-bold text-white group-hover:text-[#FFAA40] transition-colors">
                Altar of Intercession
              </span>
              <span className="block text-xs text-zinc-400">Territorial Revival Altars</span>
            </div>

            <div className="luxury-glass-interactive p-4 sm:p-5 rounded-2xl space-y-1 group">
              <span className="block text-xs font-mono font-bold text-[#FF7828] tracking-widest">#03</span>
              <span className="block text-sm sm:text-base font-display font-bold text-white group-hover:text-[#FFAA40] transition-colors">
                Godly Christian Home
              </span>
              <span className="block text-xs text-zinc-400">Mothers&apos; Union &amp; Family</span>
            </div>

            <div className="luxury-glass-interactive p-4 sm:p-5 rounded-2xl space-y-1 group">
              <span className="block text-xs font-mono font-bold text-[#FF7828] tracking-widest">#04</span>
              <span className="block text-sm sm:text-base font-display font-bold text-white group-hover:text-[#FFAA40] transition-colors">
                Enterprise &amp; Diligence
              </span>
              <span className="block text-xs text-zinc-400">Economic Self-Reliance</span>
            </div>
          </div>
        </div>

        {/* Brand / Diocesan Trust Bar */}
        <div className="rounded-3xl luxury-glass px-6 py-4 flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-400">
          <div className="flex items-center gap-2 text-zinc-300 font-semibold">
            <Church className="w-4 h-4 text-[#FF5500]" />
            <span>Anglican Diocese of Nnewi:</span>
          </div>
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 font-medium">
            <span className="flex items-center gap-2 text-zinc-300 hover:text-white transition">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500]" />
              Cathedral Church of St. Mary
            </span>
            <span className="flex items-center gap-2 text-zinc-300 hover:text-white transition">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500]" />
              Bishopscourt Registry
            </span>
            <span className="flex items-center gap-2 text-zinc-300 hover:text-white transition">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500]" />
              Church of Nigeria (Anglican Communion)
            </span>
            <a
              href={BISHOP_YOUTUBE_CHANNEL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#FF7828] hover:text-[#FFAA40] font-semibold transition"
            >
              <Video className="w-3.5 h-3.5 text-[#FF5500]" />
              <span>@bishopndubuisiobi6348</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
