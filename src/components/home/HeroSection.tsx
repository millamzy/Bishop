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
    <section className="relative overflow-hidden bg-[#0D0D0E] pt-4 sm:pt-6 pb-20 sm:pb-32">
      {/* Ambient background glow flares */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[650px] bg-[#FF5500]/14 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-[550px] h-[550px] bg-[#FFAA40]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1536px] mx-auto px-3.5 sm:px-6 lg:px-10 relative z-10 space-y-6 sm:space-y-8">
        {/* Main Radiant Sunset Ember Hero Card (Grand & Fluid Responsive) */}
        <div className="relative rounded-[32px] sm:rounded-[48px] lg:rounded-[64px] overflow-hidden bg-gradient-to-b from-[#1A1A20] via-[#121215] to-[#0A0A0C] border border-white/[0.12] p-5 min-[400px]:p-7 sm:p-12 lg:p-16 xl:p-22 shadow-[0_35px_120px_rgba(0,0,0,0.85)] text-white">
          {/* Luminous Ember Mesh Accent at the top of the card */}
          <div className="absolute top-0 inset-x-0 h-1.5 sm:h-2 bg-gradient-to-r from-transparent via-[#FF5500] to-transparent opacity-90" />
          <div className="absolute top-0 right-1/4 w-[700px] h-[400px] bg-gradient-to-b from-[#FF5500]/30 via-[#C93800]/15 to-transparent rounded-full blur-[130px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-[#FF5500]/12 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-9 text-left">
              {/* Kicker Caption Tag */}
              <div className="inline-flex items-center gap-2.5 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-white/[0.08] backdrop-blur-2xl border border-white/[0.16] text-xs sm:text-base font-bold tracking-wide shadow-md">
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FF5500] shadow-[0_0_12px_#FF5500] shrink-0" />
                <span className="text-zinc-100 truncate">Anglican Diocese of Nnewi • Church of Nigeria</span>
              </div>

              {/* Massive Grand Headline with Fluid Responsive Sizing */}
              <h1 className="text-3xl min-[360px]:text-4xl min-[480px]:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[96px] 2xl:text-[104px] font-display font-extrabold tracking-tight leading-[1.05] sm:leading-[1.01] text-white break-words">
                Apostolic Mandate &amp;{' '}
                <span className="bg-gradient-to-r from-[#FF5500] via-[#FF7828] to-[#FFAA40] bg-clip-text text-transparent">
                  Episcopal
                </span>{' '}
                Leadership.
              </h1>

              {/* Subheading / Lead Caption (Broad & Clear) */}
              <div className="max-w-3xl">
                <p className="text-zinc-200 text-sm min-[400px]:text-base sm:text-xl md:text-2xl lg:text-[25px] font-normal leading-relaxed">
                  Welcome to the official online home of{' '}
                  <strong className="text-white font-extrabold underline decoration-[#FF5500]/70 underline-offset-4 sm:underline-offset-6">
                    The Rt. Rev. Ndubuisi C. O. Obi
                  </strong>
                  . Access presidential synod addresses, stream audio teachings, schedule pastoral audiences at Bishopscourt, and watch daily YouTube video broadcasts.
                </p>
              </div>

              {/* Action Buttons / CTAs */}
              <div className="space-y-3.5 sm:space-y-4 pt-2 sm:pt-4 w-full sm:w-auto">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                  {/* White Pill with Orange Arrow */}
                  <Link
                    href="/book?tab=counseling"
                    className="group flex items-center justify-between sm:justify-start gap-3 sm:gap-4 pl-5 sm:pl-8 pr-2.5 sm:pr-3.5 py-3.5 sm:py-5 rounded-full bg-white hover:bg-zinc-100 text-zinc-950 font-extrabold text-xs min-[400px]:text-sm sm:text-lg shadow-[0_15px_45px_rgba(255,255,255,0.25)] hover:shadow-[0_20px_55px_rgba(255,85,0,0.4)] transition-all duration-300 active:scale-95 whitespace-nowrap"
                  >
                    <span className="whitespace-nowrap">Book Pastoral Audience</span>
                    <span className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-[#FF5500] group-hover:bg-[#E64D00] text-white flex items-center justify-center transition-transform group-hover:translate-x-1.5 shadow-lg shadow-[#FF5500]/40 shrink-0">
                      <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6" />
                    </span>
                  </Link>

                  {/* Sunset Orange Pill */}
                  <Link
                    href="/messages"
                    className="flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-9 py-3.5 sm:py-5 rounded-full bg-[#FF5500] hover:bg-[#E64D00] text-white font-extrabold text-xs min-[400px]:text-sm sm:text-lg shadow-[0_15px_40px_rgba(255,85,0,0.45)] transition-all duration-300 active:scale-95 border border-white/25 whitespace-nowrap"
                  >
                    <Headphones className="w-4 h-4 sm:w-6 sm:h-6 shrink-0" />
                    <span className="whitespace-nowrap">Audio Sermons</span>
                  </Link>
                </div>

                {/* Dark Glass Pill for YouTube - Pushed Down to Prevent Touching the Frame */}
                <div className="pt-1 sm:pt-2">
                  <a
                    href={BISHOP_YOUTUBE_CHANNEL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-5 sm:px-8 py-3.5 sm:py-4.5 rounded-full bg-white/[0.08] hover:bg-white/[0.14] text-white font-bold text-xs min-[400px]:text-sm sm:text-base border border-white/[0.16] backdrop-blur-2xl transition-all duration-300 active:scale-95 shadow-md group whitespace-nowrap"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5500] group-hover:animate-ping shrink-0" />
                    <span className="whitespace-nowrap">YouTube Channel</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Bishop Portrait in Grand Luxury Frame */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[280px] min-[400px]:max-w-xs sm:max-w-md lg:max-w-xl mx-auto">
                {/* Glowing Halo behind portrait */}
                <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-tr from-[#FF5500]/35 via-[#FF7828]/20 to-transparent rounded-[40px] sm:rounded-[52px] blur-3xl pointer-events-none" />

                {/* Modern Dark Curved Glass Frame (Grand Scale) */}
                <div className="relative rounded-[32px] sm:rounded-[42px] overflow-hidden bg-gradient-to-b from-white/[0.14] via-[#161619] to-[#0E0E10] border border-white/[0.18] p-3.5 sm:p-5 shadow-2xl backdrop-blur-2xl">
                  {/* Portrait Container */}
                  <div className="relative w-full aspect-[4/5] rounded-[24px] sm:rounded-[32px] overflow-hidden bg-black shadow-inner">
                    <img
                      src={PASTOR_PROFILE.photoUrl}
                      alt={PASTOR_PROFILE.name}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    />

                    {/* Gradient overlay at bottom of image with grand captions */}
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/75 to-transparent p-4 sm:p-7 text-center space-y-1 sm:space-y-1.5">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-[#FF5500]/30 border border-[#FF5500]/50 text-[#FFAA40] text-xs sm:text-sm font-bold uppercase tracking-wider mb-0.5">
                        <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF5500]" />
                        <span>6th Diocesan Bishop</span>
                      </div>
                      <span className="text-base sm:text-xl md:text-2xl font-display font-bold text-white block">
                        {PASTOR_PROFILE.name}
                      </span>
                    </div>
                  </div>

                  {/* Under-portrait metadata & captions (Grand & Bold) */}
                  <div className="p-3 sm:p-5 text-center space-y-1.5 sm:space-y-2">
                    <p className="text-xs sm:text-base font-semibold text-zinc-100">
                      Consecrated Sept 24, 2019 • Cathedral Church of St. Mary
                    </p>
                    <p className="text-xs sm:text-base text-[#FFAA40] flex items-center justify-center gap-2 font-bold">
                      <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF5500] shrink-0" />
                      <span>{PASTOR_PROFILE.location}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom 4 Numbered Priority Cards with Mobile Responsiveness */}
          <div className="mt-10 sm:mt-16 pt-6 sm:pt-10 border-t border-white/[0.1] grid grid-cols-1 min-[420px]:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6 text-left">
            <div className="luxury-glass-interactive p-5 sm:p-7 rounded-2xl sm:rounded-3xl space-y-1.5 sm:space-y-2 group">
              <span className="block text-sm sm:text-lg font-mono font-bold text-[#FF7828] tracking-widest">#01</span>
              <span className="block text-base sm:text-xl font-display font-bold text-white group-hover:text-[#FFAA40] transition-colors">
                Biblical Orthodoxy
              </span>
              <span className="block text-xs sm:text-base text-zinc-300">Sound Liturgical Heritage</span>
            </div>

            <div className="luxury-glass-interactive p-5 sm:p-7 rounded-2xl sm:rounded-3xl space-y-1.5 sm:space-y-2 group">
              <span className="block text-sm sm:text-lg font-mono font-bold text-[#FF7828] tracking-widest">#02</span>
              <span className="block text-base sm:text-xl font-display font-bold text-white group-hover:text-[#FFAA40] transition-colors">
                Altar of Intercession
              </span>
              <span className="block text-xs sm:text-base text-zinc-300">Territorial Revival Altars</span>
            </div>

            <div className="luxury-glass-interactive p-5 sm:p-7 rounded-2xl sm:rounded-3xl space-y-1.5 sm:space-y-2 group">
              <span className="block text-sm sm:text-lg font-mono font-bold text-[#FF7828] tracking-widest">#03</span>
              <span className="block text-base sm:text-xl font-display font-bold text-white group-hover:text-[#FFAA40] transition-colors">
                Godly Christian Home
              </span>
              <span className="block text-xs sm:text-base text-zinc-300">Mothers&apos; Union &amp; Family</span>
            </div>

            <div className="luxury-glass-interactive p-5 sm:p-7 rounded-2xl sm:rounded-3xl space-y-1.5 sm:space-y-2 group">
              <span className="block text-sm sm:text-lg font-mono font-bold text-[#FF7828] tracking-widest">#04</span>
              <span className="block text-base sm:text-xl font-display font-bold text-white group-hover:text-[#FFAA40] transition-colors">
                Enterprise &amp; Diligence
              </span>
              <span className="block text-xs sm:text-base text-zinc-300">Economic Self-Reliance</span>
            </div>
          </div>
        </div>

        {/* Brand / Diocesan Trust Bar with Mobile Responsiveness */}
        <div className="rounded-2xl sm:rounded-[36px] luxury-glass p-5 sm:px-10 sm:py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 text-sm sm:text-base text-zinc-200">
          <div className="flex items-center gap-2.5 sm:gap-3 text-white font-extrabold text-base sm:text-xl shrink-0">
            <Church className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF5500] shrink-0" />
            <span>Anglican Diocese of Nnewi:</span>
          </div>
          <div className="flex flex-col min-[480px]:flex-row flex-wrap items-start min-[480px]:items-center gap-3 sm:gap-8 font-bold text-xs sm:text-base">
            <span className="flex items-center gap-2 sm:gap-3 text-zinc-200 hover:text-white transition">
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#FF5500] shrink-0" />
              Cathedral Church of St. Mary
            </span>
            <span className="flex items-center gap-2 sm:gap-3 text-zinc-200 hover:text-white transition">
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#FF5500] shrink-0" />
              Bishopscourt Registry
            </span>
            <span className="flex items-center gap-2 sm:gap-3 text-zinc-200 hover:text-white transition">
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#FF5500] shrink-0" />
              Church of Nigeria
            </span>
            <a
              href={BISHOP_YOUTUBE_CHANNEL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#FF7828] hover:text-[#FFAA40] font-extrabold transition"
            >
              <Video className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF5500] shrink-0" />
              <span>@bishopndubuisiobi6348</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
