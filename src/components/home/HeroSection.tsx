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
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-transparent via-[#FF5500] to-transparent opacity-80" />
          <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-gradient-to-b from-[#FF5500]/25 via-[#C93800]/10 to-transparent rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-[#FF5500]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-8 text-left">
              {/* Kicker Caption Tag */}
              <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/[0.08] backdrop-blur-xl border border-white/[0.14] text-sm sm:text-base font-semibold tracking-wide shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5500] shadow-[0_0_10px_#FF5500]" />
                <span className="text-zinc-100">Anglican Diocese of Nnewi • Church of Nigeria</span>
              </div>

              {/* Massive Bold Headline with Metallic Gradient */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-extrabold tracking-tight leading-[1.08] text-white">
                Apostolic Mandate &amp;{' '}
                <span className="bg-gradient-to-r from-[#FF5500] via-[#FF7828] to-[#FFAA40] bg-clip-text text-transparent">
                  Episcopal
                </span>{' '}
                Leadership.
              </h1>

              {/* Subheading / Lead Caption (Bigger & Clearer) */}
              <div className="max-w-2xl">
                <p className="text-zinc-200 text-lg sm:text-xl md:text-2xl font-normal leading-relaxed">
                  Welcome to the official online home of{' '}
                  <strong className="text-white font-bold underline decoration-[#FF5500]/70 underline-offset-4">
                    The Rt. Rev. Ndubuisi C. O. Obi
                  </strong>
                  . Access presidential synod addresses, stream audio teachings, schedule pastoral audiences at Bishopscourt, and watch daily YouTube video broadcasts.
                </p>
              </div>

              {/* Action Buttons / CTAs (Noticeably Bigger & Bolder) */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                {/* White Pill with Orange Arrow */}
                <Link
                  href="/book?tab=counseling"
                  className="group flex items-center gap-3.5 pl-7 pr-3 py-3.5 sm:py-4 rounded-full bg-white hover:bg-zinc-100 text-zinc-950 font-bold text-sm sm:text-base shadow-[0_12px_40px_rgba(255,255,255,0.22)] hover:shadow-[0_16px_45px_rgba(255,85,0,0.35)] transition-all duration-300 active:scale-95"
                >
                  <span>Book Pastoral Audience</span>
                  <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FF5500] group-hover:bg-[#E64D00] text-white flex items-center justify-center transition-transform group-hover:translate-x-1 shadow-md shadow-[#FF5500]/40">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </span>
                </Link>

                {/* Sunset Orange Pill */}
                <Link
                  href="/messages"
                  className="flex items-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#FF5500] hover:bg-[#E64D00] text-white font-bold text-sm sm:text-base shadow-[0_12px_35px_rgba(255,85,0,0.4)] transition-all duration-300 active:scale-95 border border-white/20"
                >
                  <Headphones className="w-5 h-5" />
                  <span>Audio Sermons</span>
                </Link>

                {/* Dark Glass Pill for YouTube */}
                <a
                  href={BISHOP_YOUTUBE_CHANNEL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3.5 sm:py-4 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-white font-semibold text-sm sm:text-base border border-white/[0.14] backdrop-blur-xl transition-all duration-300 active:scale-95 shadow-sm group"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5500] group-hover:animate-ping" />
                  <span>YouTube Channel</span>
                </a>
              </div>
            </div>

            {/* Right Column: Bishop Portrait in Luxury Frame with Bigger Captions */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm sm:max-w-md">
                {/* Glowing Halo behind portrait */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-[#FF5500]/30 via-[#FF7828]/15 to-transparent rounded-[44px] blur-2xl pointer-events-none" />

                {/* Modern Dark Curved Glass Frame */}
                <div className="relative rounded-[36px] overflow-hidden bg-gradient-to-b from-white/[0.12] via-[#161619] to-[#0E0E10] border border-white/[0.15] p-4 shadow-2xl backdrop-blur-2xl">
                  {/* Portrait Container */}
                  <div className="relative w-full aspect-[4/5] rounded-[28px] overflow-hidden bg-black shadow-inner">
                    <img
                      src={PASTOR_PROFILE.photoUrl}
                      alt={PASTOR_PROFILE.name}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    />

                    {/* Gradient overlay at bottom of image with bigger captions */}
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/70 to-transparent p-6 text-center space-y-1">
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF5500]/30 border border-[#FF5500]/50 text-[#FFAA40] text-xs sm:text-sm font-bold uppercase tracking-wider mb-1">
                        <Award className="w-4 h-4 text-[#FF5500]" />
                        <span>6th Diocesan Bishop</span>
                      </div>
                      <span className="text-lg sm:text-xl font-display font-bold text-white block">
                        {PASTOR_PROFILE.name}
                      </span>
                    </div>
                  </div>

                  {/* Under-portrait metadata & captions (Bigger & Clearer) */}
                  <div className="p-4 text-center space-y-2">
                    <p className="text-sm font-medium text-zinc-200">
                      Consecrated Sept 24, 2019 • Cathedral Church of St. Mary
                    </p>
                    <p className="text-xs sm:text-sm text-[#FFAA40] flex items-center justify-center gap-1.5 font-bold">
                      <MapPin className="w-4 h-4 text-[#FF5500]" />
                      <span>{PASTOR_PROFILE.location}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom 4 Numbered Priority Cards with Bigger Captions */}
          <div className="mt-14 pt-8 border-t border-white/[0.08] grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-left">
            <div className="luxury-glass-interactive p-5 sm:p-6 rounded-2xl space-y-1.5 group">
              <span className="block text-sm sm:text-base font-mono font-bold text-[#FF7828] tracking-widest">#01</span>
              <span className="block text-base sm:text-lg font-display font-bold text-white group-hover:text-[#FFAA40] transition-colors">
                Biblical Orthodoxy
              </span>
              <span className="block text-sm text-zinc-300">Sound Liturgical Heritage</span>
            </div>

            <div className="luxury-glass-interactive p-5 sm:p-6 rounded-2xl space-y-1.5 group">
              <span className="block text-sm sm:text-base font-mono font-bold text-[#FF7828] tracking-widest">#02</span>
              <span className="block text-base sm:text-lg font-display font-bold text-white group-hover:text-[#FFAA40] transition-colors">
                Altar of Intercession
              </span>
              <span className="block text-sm text-zinc-300">Territorial Revival Altars</span>
            </div>

            <div className="luxury-glass-interactive p-5 sm:p-6 rounded-2xl space-y-1.5 group">
              <span className="block text-sm sm:text-base font-mono font-bold text-[#FF7828] tracking-widest">#03</span>
              <span className="block text-base sm:text-lg font-display font-bold text-white group-hover:text-[#FFAA40] transition-colors">
                Godly Christian Home
              </span>
              <span className="block text-sm text-zinc-300">Mothers&apos; Union &amp; Family</span>
            </div>

            <div className="luxury-glass-interactive p-5 sm:p-6 rounded-2xl space-y-1.5 group">
              <span className="block text-sm sm:text-base font-mono font-bold text-[#FF7828] tracking-widest">#04</span>
              <span className="block text-base sm:text-lg font-display font-bold text-white group-hover:text-[#FFAA40] transition-colors">
                Enterprise &amp; Diligence
              </span>
              <span className="block text-sm text-zinc-300">Economic Self-Reliance</span>
            </div>
          </div>
        </div>

        {/* Brand / Diocesan Trust Bar with Bigger Captions */}
        <div className="rounded-3xl luxury-glass px-7 py-5 flex flex-wrap items-center justify-between gap-5 text-sm text-zinc-300">
          <div className="flex items-center gap-2 text-white font-bold text-base">
            <Church className="w-5 h-5 text-[#FF5500]" />
            <span>Anglican Diocese of Nnewi:</span>
          </div>
          <div className="flex flex-wrap items-center gap-6 sm:gap-10 font-semibold text-sm">
            <span className="flex items-center gap-2.5 text-zinc-200 hover:text-white transition">
              <span className="w-2 h-2 rounded-full bg-[#FF5500]" />
              Cathedral Church of St. Mary
            </span>
            <span className="flex items-center gap-2.5 text-zinc-200 hover:text-white transition">
              <span className="w-2 h-2 rounded-full bg-[#FF5500]" />
              Bishopscourt Registry
            </span>
            <span className="flex items-center gap-2.5 text-zinc-200 hover:text-white transition">
              <span className="w-2 h-2 rounded-full bg-[#FF5500]" />
              Church of Nigeria (Anglican Communion)
            </span>
            <a
              href={BISHOP_YOUTUBE_CHANNEL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#FF7828] hover:text-[#FFAA40] font-bold transition"
            >
              <Video className="w-4 h-4 text-[#FF5500]" />
              <span>@bishopndubuisiobi6348</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
