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
    <section className="relative overflow-hidden bg-[#0D0D0E] pt-6 pb-24 sm:pb-32">
      {/* Ambient background glow flares */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[650px] bg-[#FF5500]/14 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-[550px] h-[550px] bg-[#FFAA40]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 space-y-8">
        {/* Main Radiant Sunset Ember Hero Card (Grand Scale) */}
        <div className="relative rounded-[48px] sm:rounded-[64px] overflow-hidden bg-gradient-to-b from-[#1A1A20] via-[#121215] to-[#0A0A0C] border border-white/[0.12] p-8 sm:p-14 lg:p-20 xl:p-24 shadow-[0_35px_120px_rgba(0,0,0,0.85)] text-white">
          {/* Luminous Ember Mesh Accent at the top of the card */}
          <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-transparent via-[#FF5500] to-transparent opacity-90" />
          <div className="absolute top-0 right-1/4 w-[700px] h-[400px] bg-gradient-to-b from-[#FF5500]/30 via-[#C93800]/15 to-transparent rounded-full blur-[130px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-[#FF5500]/12 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-9 text-left">
              {/* Kicker Caption Tag */}
              <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/[0.08] backdrop-blur-2xl border border-white/[0.16] text-sm sm:text-base font-bold tracking-wide shadow-md">
                <span className="w-3 h-3 rounded-full bg-[#FF5500] shadow-[0_0_12px_#FF5500]" />
                <span className="text-zinc-100">Anglican Diocese of Nnewi • Church of Nigeria</span>
              </div>

              {/* Massive Grand Headline (Dominates the view like the reference design) */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[96px] 2xl:text-[104px] font-display font-extrabold tracking-tighter leading-[1.01] text-white">
                Apostolic Mandate &amp;{' '}
                <span className="bg-gradient-to-r from-[#FF5500] via-[#FF7828] to-[#FFAA40] bg-clip-text text-transparent">
                  Episcopal
                </span>{' '}
                Leadership.
              </h1>

              {/* Subheading / Lead Caption (Broad & Clear) */}
              <div className="max-w-3xl">
                <p className="text-zinc-200 text-xl sm:text-2xl md:text-[25px] font-normal leading-relaxed">
                  Welcome to the official online home of{' '}
                  <strong className="text-white font-extrabold underline decoration-[#FF5500]/70 underline-offset-6">
                    The Rt. Rev. Ndubuisi C. O. Obi
                  </strong>
                  . Access presidential synod addresses, stream audio teachings, schedule pastoral audiences at Bishopscourt, and watch daily YouTube video broadcasts.
                </p>
              </div>

              {/* Action Buttons / CTAs (Substantially Bigger & Bolder) */}
              <div className="flex flex-wrap items-center gap-5 pt-4">
                {/* White Pill with Orange Arrow */}
                <Link
                  href="/book?tab=counseling"
                  className="group flex items-center gap-4 pl-8 pr-3.5 py-4 sm:py-5 rounded-full bg-white hover:bg-zinc-100 text-zinc-950 font-extrabold text-base sm:text-lg shadow-[0_15px_45px_rgba(255,255,255,0.25)] hover:shadow-[0_20px_55px_rgba(255,85,0,0.4)] transition-all duration-300 active:scale-95"
                >
                  <span>Book Pastoral Audience</span>
                  <span className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#FF5500] group-hover:bg-[#E64D00] text-white flex items-center justify-center transition-transform group-hover:translate-x-1.5 shadow-lg shadow-[#FF5500]/40">
                    <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </span>
                </Link>

                {/* Sunset Orange Pill */}
                <Link
                  href="/messages"
                  className="flex items-center gap-3.5 px-8 sm:px-9 py-4 sm:py-5 rounded-full bg-[#FF5500] hover:bg-[#E64D00] text-white font-extrabold text-base sm:text-lg shadow-[0_15px_40px_rgba(255,85,0,0.45)] transition-all duration-300 active:scale-95 border border-white/25"
                >
                  <Headphones className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span>Audio Sermons</span>
                </Link>

                {/* Dark Glass Pill for YouTube */}
                <a
                  href={BISHOP_YOUTUBE_CHANNEL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-7 sm:px-8 py-4 sm:py-5 rounded-full bg-white/[0.08] hover:bg-white/[0.14] text-white font-bold text-base sm:text-lg border border-white/[0.16] backdrop-blur-2xl transition-all duration-300 active:scale-95 shadow-md group"
                >
                  <span className="w-3 h-3 rounded-full bg-[#FF5500] group-hover:animate-ping" />
                  <span>YouTube Channel</span>
                </a>
              </div>
            </div>

            {/* Right Column: Bishop Portrait in Grand Luxury Frame */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl">
                {/* Glowing Halo behind portrait */}
                <div className="absolute -inset-6 bg-gradient-to-tr from-[#FF5500]/35 via-[#FF7828]/20 to-transparent rounded-[52px] blur-3xl pointer-events-none" />

                {/* Modern Dark Curved Glass Frame (Grand Scale) */}
                <div className="relative rounded-[42px] overflow-hidden bg-gradient-to-b from-white/[0.14] via-[#161619] to-[#0E0E10] border border-white/[0.18] p-5 shadow-2xl backdrop-blur-2xl">
                  {/* Portrait Container */}
                  <div className="relative w-full aspect-[4/5] rounded-[32px] overflow-hidden bg-black shadow-inner">
                    <img
                      src={PASTOR_PROFILE.photoUrl}
                      alt={PASTOR_PROFILE.name}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    />

                    {/* Gradient overlay at bottom of image with grand captions */}
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/75 to-transparent p-7 text-center space-y-1.5">
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF5500]/30 border border-[#FF5500]/50 text-[#FFAA40] text-sm font-bold uppercase tracking-wider mb-1">
                        <Award className="w-4 h-4 text-[#FF5500]" />
                        <span>6th Diocesan Bishop</span>
                      </div>
                      <span className="text-xl sm:text-2xl font-display font-bold text-white block">
                        {PASTOR_PROFILE.name}
                      </span>
                    </div>
                  </div>

                  {/* Under-portrait metadata & captions (Grand & Bold) */}
                  <div className="p-5 text-center space-y-2">
                    <p className="text-base font-semibold text-zinc-100">
                      Consecrated Sept 24, 2019 • Cathedral Church of St. Mary
                    </p>
                    <p className="text-sm sm:text-base text-[#FFAA40] flex items-center justify-center gap-2 font-bold">
                      <MapPin className="w-4 h-4 text-[#FF5500]" />
                      <span>{PASTOR_PROFILE.location}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom 4 Numbered Priority Cards with Bigger Scale */}
          <div className="mt-16 pt-10 border-t border-white/[0.1] grid grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <div className="luxury-glass-interactive p-6 sm:p-7 rounded-3xl space-y-2 group">
              <span className="block text-base sm:text-lg font-mono font-bold text-[#FF7828] tracking-widest">#01</span>
              <span className="block text-lg sm:text-xl font-display font-bold text-white group-hover:text-[#FFAA40] transition-colors">
                Biblical Orthodoxy
              </span>
              <span className="block text-sm sm:text-base text-zinc-300">Sound Liturgical Heritage</span>
            </div>

            <div className="luxury-glass-interactive p-6 sm:p-7 rounded-3xl space-y-2 group">
              <span className="block text-base sm:text-lg font-mono font-bold text-[#FF7828] tracking-widest">#02</span>
              <span className="block text-lg sm:text-xl font-display font-bold text-white group-hover:text-[#FFAA40] transition-colors">
                Altar of Intercession
              </span>
              <span className="block text-sm sm:text-base text-zinc-300">Territorial Revival Altars</span>
            </div>

            <div className="luxury-glass-interactive p-6 sm:p-7 rounded-3xl space-y-2 group">
              <span className="block text-base sm:text-lg font-mono font-bold text-[#FF7828] tracking-widest">#03</span>
              <span className="block text-lg sm:text-xl font-display font-bold text-white group-hover:text-[#FFAA40] transition-colors">
                Godly Christian Home
              </span>
              <span className="block text-sm sm:text-base text-zinc-300">Mothers&apos; Union &amp; Family</span>
            </div>

            <div className="luxury-glass-interactive p-6 sm:p-7 rounded-3xl space-y-2 group">
              <span className="block text-base sm:text-lg font-mono font-bold text-[#FF7828] tracking-widest">#04</span>
              <span className="block text-lg sm:text-xl font-display font-bold text-white group-hover:text-[#FFAA40] transition-colors">
                Enterprise &amp; Diligence
              </span>
              <span className="block text-sm sm:text-base text-zinc-300">Economic Self-Reliance</span>
            </div>
          </div>
        </div>

        {/* Brand / Diocesan Trust Bar with Grand Scale */}
        <div className="rounded-[36px] luxury-glass px-8 sm:px-12 py-6 flex flex-wrap items-center justify-between gap-6 text-base text-zinc-200">
          <div className="flex items-center gap-3 text-white font-extrabold text-lg sm:text-xl">
            <Church className="w-6 h-6 text-[#FF5500]" />
            <span>Anglican Diocese of Nnewi:</span>
          </div>
          <div className="flex flex-wrap items-center gap-8 sm:gap-12 font-bold text-base sm:text-lg">
            <span className="flex items-center gap-3 text-zinc-200 hover:text-white transition">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5500]" />
              Cathedral Church of St. Mary
            </span>
            <span className="flex items-center gap-3 text-zinc-200 hover:text-white transition">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5500]" />
              Bishopscourt Registry
            </span>
            <span className="flex items-center gap-3 text-zinc-200 hover:text-white transition">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5500]" />
              Church of Nigeria (Anglican Communion)
            </span>
            <a
              href={BISHOP_YOUTUBE_CHANNEL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-[#FF7828] hover:text-[#FFAA40] font-extrabold transition"
            >
              <Video className="w-5 h-5 text-[#FF5500]" />
              <span>@bishopndubuisiobi6348</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
