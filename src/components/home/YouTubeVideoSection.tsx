'use client';

import React, { useState } from 'react';
import { BISHOP_YOUTUBE_VIDEOS, BISHOP_YOUTUBE_CHANNEL, PASTOR_PROFILE } from '@/data/mockData';
import {
  Video,
  Play,
  ExternalLink,
  ArrowRight,
  Eye,
  CheckCircle2,
  Calendar,
  Sparkles,
  Share2,
  Tv
} from 'lucide-react';

export default function YouTubeVideoSection() {
  const [activeVideo, setActiveVideo] = useState(BISHOP_YOUTUBE_VIDEOS[0]);

  return (
    <section className="py-16 sm:py-28 lg:py-36 bg-[#0A0A0C] border-b border-white/[0.06] relative overflow-hidden">
      {/* Ambient cinema glow behind theater section */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[800px] h-[600px] bg-[#FF5500]/12 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1536px] mx-auto px-3.5 sm:px-6 lg:px-10 space-y-10 sm:space-y-16 relative z-10">
        {/* Section Header with Responsive Sizing */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8">
          <div className="space-y-4 sm:space-y-5 max-w-3xl">
            {/* Orange Kicker Caption Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full bg-[#FF5500]/20 border border-[#FF5500]/40 text-[#FFAA40] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm">
              <Tv className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF5500] shrink-0" />
              <span>Official YouTube Video Ministry</span>
            </div>
            <h2 className="text-2xl min-[400px]:text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.08] break-words">
              Sermons, Synods &amp;{' '}
              <span className="bg-gradient-to-r from-[#FF5500] to-[#FFAA40] bg-clip-text text-transparent">
                Apostolic
              </span>{' '}
              Teachings
            </h2>
          </div>

          {/* Right Lead Caption + CTA Pill */}
          <div className="max-w-lg space-y-4 sm:space-y-5">
            <p className="text-zinc-300 text-sm sm:text-lg lg:text-xl leading-relaxed">
              Watch full diocesan services, presidential charges, prophetic declarations, and Bible expositions broadcast directly from{' '}
              <strong className="text-white font-bold">@bishopndubuisiobi6348</strong>.
            </p>
            <a
              href={BISHOP_YOUTUBE_CHANNEL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 pl-6 sm:pl-7 pr-2.5 sm:pr-3 py-3 sm:py-3.5 rounded-full bg-[#FF5500] hover:bg-[#E64D00] text-white font-bold text-sm sm:text-lg shadow-[0_15px_40px_rgba(255,85,0,0.35)] transition-all active:scale-95 group w-full sm:w-auto"
            >
              <span>Subscribe on YouTube</span>
              <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white text-zinc-950 flex items-center justify-center transition-transform group-hover:translate-x-1 shadow-md shrink-0">
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </span>
            </a>
          </div>
        </div>

        {/* Featured Video Player + Playlist Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">
          {/* Main Active Video Player Card with Cinema Bezel */}
          <div className="lg:col-span-8 rounded-[28px] sm:rounded-[40px] lg:rounded-[48px] bg-[#121215] border border-white/[0.12] overflow-hidden shadow-[0_35px_90px_rgba(0,0,0,0.85)] relative">
            {/* Top ambient diffusion light */}
            <div className="absolute -top-24 inset-x-0 h-48 bg-[#FF5500]/20 blur-3xl pointer-events-none" />

            {/* 16:9 Responsive Embed */}
            <div className="relative aspect-video w-full bg-black shadow-inner">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo.videoId}?autoplay=0&rel=0`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>

            {/* Video Meta Info with Bigger Captions */}
            <div className="p-5 sm:p-8 lg:p-10 space-y-4 sm:space-y-6 relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4">
                <div className="flex items-center gap-2.5 sm:gap-3.5">
                  <span className="px-3.5 sm:px-4.5 py-1 sm:py-1.5 rounded-full bg-[#FF5500]/25 text-[#FFAA40] text-[11px] sm:text-sm font-bold uppercase tracking-wider border border-[#FF5500]/40 shadow-xs">
                    {activeVideo.series}
                  </span>
                  <span className="text-xs sm:text-base text-zinc-300 font-medium">
                    {activeVideo.publishedText}
                  </span>
                </div>

                <a
                  href={`https://www.youtube.com/watch?v=${activeVideo.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-base font-bold text-[#FF7828] hover:text-[#FFAA40] transition"
                >
                  <span>Open in YouTube App</span>
                  <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </a>
              </div>

              <h3 className="text-xl min-[400px]:text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white leading-snug">
                {activeVideo.title}
              </h3>
              <p className="text-sm sm:text-lg text-zinc-300 leading-relaxed">
                {activeVideo.description}
              </p>

              <div className="pt-4 sm:pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4 text-xs sm:text-base text-zinc-300">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-[#FF5500] p-0.5 bg-black shrink-0">
                    <img
                      src={PASTOR_PROFILE.photoUrl}
                      alt={PASTOR_PROFILE.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <span className="font-bold text-white block text-sm sm:text-lg leading-tight">The Rt. Rev. Ndubuisi Obi</span>
                    <span className="text-[11px] sm:text-sm text-zinc-400 font-medium">Bishop of Nnewi • Anglican Communion</span>
                  </div>
                </div>

                <a
                  href={BISHOP_YOUTUBE_CHANNEL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-200 hover:text-[#FFAA40] font-bold transition flex items-center gap-1.5 sm:gap-2 text-xs sm:text-base"
                >
                  <span>View All Broadcasts</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Video Playlist Selector */}
          <div className="lg:col-span-4 space-y-3 sm:space-y-4">
            <div className="flex items-center justify-between px-2 pb-1">
              <span className="text-xs sm:text-base uppercase font-bold tracking-wider text-zinc-300 flex items-center gap-2 sm:gap-2.5">
                <Video className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF5500]" />
                <span>Episcopal Video Broadcasts</span>
              </span>
              <span className="text-xs sm:text-sm text-[#FFAA40] font-mono font-bold">
                {BISHOP_YOUTUBE_VIDEOS.length} Videos
              </span>
            </div>

            <div className="space-y-3 max-h-[460px] sm:max-h-[640px] lg:max-h-[720px] overflow-y-auto pr-1">
              {BISHOP_YOUTUBE_VIDEOS.map((item) => {
                const isActive = activeVideo.id === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveVideo(item)}
                    className={`w-full text-left p-3.5 sm:p-5 rounded-2xl sm:rounded-3xl border transition-all flex items-start gap-3 sm:gap-4.5 active:scale-[0.99] ${isActive
                      ? 'bg-[#1C1C22] text-white border-[#FF5500] shadow-[0_12px_35px_rgba(255,85,0,0.2)] ring-1 ring-[#FF5500]'
                      : 'bg-[#121215] hover:bg-[#18181C] text-zinc-300 border-white/[0.08] hover:border-white/[0.2]'
                      }`}
                  >
                    {/* Thumbnail */}
                    <div className="relative w-28 h-18 sm:w-36 sm:h-22 rounded-xl sm:rounded-2xl overflow-hidden shrink-0 bg-black border border-white/10 shadow-sm">
                      <img
                        src={item.thumbnailUrl}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
                        <div
                          className={`w-7 h-7 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-transform ${isActive ? 'bg-[#FF5500] text-white scale-110 shadow-md shadow-[#FF5500]/40' : 'bg-white/90 text-zinc-950'
                            }`}
                        >
                          <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-0.5 fill-current" />
                        </div>
                      </div>
                    </div>

                    {/* Details with Responsive Captions */}
                    <div className="space-y-1 sm:space-y-2 min-w-0 flex-1">
                      <span
                        className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider block ${isActive ? 'text-[#FFAA40]' : 'text-zinc-400'
                          }`}
                      >
                        {item.series}
                      </span>
                      <h4
                        className={`text-xs sm:text-base font-bold line-clamp-2 leading-snug ${isActive ? 'text-white' : 'text-zinc-200'
                          }`}
                      >
                        {item.title}
                      </h4>
                      <p className="text-[11px] sm:text-sm text-zinc-400 line-clamp-1 font-medium">
                        {item.publishedText}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
