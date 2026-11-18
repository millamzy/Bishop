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
  Shield
} from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0D0D0E] pt-4 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Radiant Sunset Ember Hero Card (from the reference image) */}
        <div className="relative rounded-[36px] sm:rounded-[48px] overflow-hidden bg-gradient-to-b from-[#FF5500] via-[#C93800] to-[#121214] p-6 sm:p-12 lg:p-16 shadow-2xl text-white">
          {/* Subtle Ambient Radial Glow overlay */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFA040]/25 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Kicker Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/25 backdrop-blur-md border border-white/20 text-white text-xs font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-white" />
                <span>Anglican Diocese of Nnewi • Church of Nigeria</span>
              </div>

              {/* Massive Bold Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-extrabold text-white tracking-tight leading-[1.08]">
                Apostolic Mandate &amp; Episcopal Leadership.
              </h1>

              {/* Quote / Subheading matching reference image structure */}
              <div className="pt-1 max-w-xl">
                <p className="text-white/95 text-base sm:text-lg font-medium leading-relaxed">
                  Welcome to the official ministry portal of{' '}
                  <strong className="text-white font-bold underline decoration-white/40 underline-offset-4">
                    The Rt. Rev. Ndubuisi C. O. Obi
                  </strong>
                  . Access presidential synod charges, stream audio sermons, schedule pastoral audiences at Bishopscourt, and watch daily YouTube teachings.
                </p>
              </div>

              {/* Action Buttons: Signature pill buttons matching reference */}
              <div className="flex flex-wrap items-center gap-3.5 pt-3">
                {/* White Pill with Orange Arrow */}
                <Link
                  href="/book?tab=counseling"
                  className="group flex items-center gap-2 pl-5 pr-2 py-2 rounded-full bg-white hover:bg-zinc-100 text-zinc-950 font-bold text-xs sm:text-sm shadow-xl transition active:scale-95"
                >
                  <span>Book Pastoral Audience</span>
                  <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FF5500] group-hover:bg-[#E64D00] text-white flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>

                {/* Orange Action Pill */}
                <Link
                  href="/messages"
                  className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#FF5500] hover:bg-[#E64D00] text-white font-bold text-xs sm:text-sm shadow-lg shadow-[#FF5500]/30 transition active:scale-95 border border-white/20"
                >
                  <Headphones className="w-4 h-4" />
                  <span>Audio Sermons</span>
                </Link>

                {/* Dark Glass Pill for YouTube */}
                <a
                  href={BISHOP_YOUTUBE_CHANNEL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-full bg-black/40 hover:bg-black/60 text-white font-bold text-xs sm:text-sm border border-white/20 backdrop-blur-md transition active:scale-95"
                >
                  <span className="w-2 h-2 rounded-full bg-[#FF5500] animate-pulse" />
                  <span>Watch on YouTube</span>
                </a>
              </div>
            </div>

            {/* Right Column: Bishop Portrait in modern frame */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm">
                {/* Modern Dark Curved Frame */}
                <div className="relative rounded-[32px] overflow-hidden bg-[#161618] border-2 border-white/20 p-4 shadow-2xl">
                  <div className="relative w-full aspect-[4/5] rounded-[24px] overflow-hidden bg-black">
                    <img
                      src={PASTOR_PROFILE.photoUrl}
                      alt={PASTOR_PROFILE.name}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/40 to-transparent p-4 text-center">
                      <span className="text-xs uppercase tracking-widest text-[#FF7828] font-bold block">
                        The Lord Bishop
                      </span>
                      <span className="text-sm font-bold text-white block">
                        {PASTOR_PROFILE.name}
                      </span>
                    </div>
                  </div>

                  <div className="p-3 text-center space-y-1">
                    <p className="text-xs text-zinc-300 font-medium">
                      Consecrated Sept 24, 2019 • Enthroned Sept 27, 2019
                    </p>
                    <p className="text-[11px] text-[#FFA066] flex items-center justify-center gap-1 font-semibold">
                      <MapPin className="w-3 h-3" />
                      <span>{PASTOR_PROFILE.location}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom 4 Numbered Priorities (Matching #01, #02, #03, #04 from the reference image) */}
          <div className="mt-12 pt-8 border-t border-white/20 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            <div>
              <span className="block text-xs font-mono font-bold text-[#FFD0B3]">#01</span>
              <span className="block text-sm sm:text-base font-bold text-white mt-0.5">
                Biblical Orthodoxy
              </span>
              <span className="block text-xs text-white/70 mt-0.5">Sound Liturgical Heritage</span>
            </div>

            <div>
              <span className="block text-xs font-mono font-bold text-[#FFD0B3]">#02</span>
              <span className="block text-sm sm:text-base font-bold text-white mt-0.5">
                Altar of Intercession
              </span>
              <span className="block text-xs text-white/70 mt-0.5">Territorial Revival Altars</span>
            </div>

            <div>
              <span className="block text-xs font-mono font-bold text-[#FFD0B3]">#03</span>
              <span className="block text-sm sm:text-base font-bold text-white mt-0.5">
                Godly Christian Home
              </span>
              <span className="block text-xs text-white/70 mt-0.5">Mothers&apos; Union &amp; Family</span>
            </div>

            <div>
              <span className="block text-xs font-mono font-bold text-[#FFD0B3]">#04</span>
              <span className="block text-sm sm:text-base font-bold text-white mt-0.5">
                Enterprise &amp; Diligence
              </span>
              <span className="block text-xs text-white/70 mt-0.5">Economic Self-Reliance</span>
            </div>
          </div>
        </div>

        {/* Brand / Diocesan Trust Bar (matching the bottom bar of the hero in the reference image) */}
        <div className="mt-4 rounded-3xl bg-[#141416] border border-[#232326] px-6 py-4 flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-400">
          <span className="font-semibold text-zinc-300">Anglican Diocese of Nnewi:</span>
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 font-medium">
            <span className="flex items-center gap-2 text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500]" />
              Cathedral Church of St. Mary
            </span>
            <span className="flex items-center gap-2 text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500]" />
              Bishopscourt Registry
            </span>
            <span className="flex items-center gap-2 text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500]" />
              Church of Nigeria
            </span>
            <span className="flex items-center gap-2 text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500]" />
              YouTube Channel @bishopndubuisiobi6348
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
