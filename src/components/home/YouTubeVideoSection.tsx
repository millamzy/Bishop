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
    <section className="py-24 bg-[#0A0A0C] border-b border-white/[0.06] relative overflow-hidden">
      {/* Ambient cinema glow behind theater section */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[500px] bg-[#FF5500]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3.5 max-w-2xl">
            {/* Orange Kicker Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF5500]/15 border border-[#FF5500]/30 text-[#FFAA40] text-xs font-bold uppercase tracking-wider">
              <Tv className="w-3.5 h-3.5 text-[#FF5500]" />
              <span>Official YouTube Video Ministry</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
              Sermons, Synods &amp;{' '}
              <span className="bg-gradient-to-r from-[#FF5500] to-[#FFAA40] bg-clip-text text-transparent">
                Apostolic
              </span>{' '}
              Teachings
            </h2>
          </div>

          {/* Right Text + CTA Pill */}
          <div className="max-w-md space-y-4">
            <p className="text-zinc-400 text-sm leading-relaxed">
              Watch full diocesan services, presidential charges, prophetic declarations, and Bible expositions broadcast directly from{' '}
              <strong className="text-white font-semibold">@bishopndubuisiobi6348</strong>.
            </p>
            <a
              href={BISHOP_YOUTUBE_CHANNEL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 pl-5 pr-2 py-2 rounded-full bg-[#FF5500] hover:bg-[#E64D00] text-white font-bold text-xs shadow-[0_10px_30px_rgba(255,85,0,0.3)] transition-all active:scale-95 group"
            >
              <span>Subscribe on YouTube</span>
              <span className="w-7 h-7 rounded-full bg-white text-zinc-950 flex items-center justify-center transition-transform group-hover:translate-x-0.5 shadow-sm">
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </a>
          </div>
        </div>

        {/* Featured Video Player + Playlist Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Active Video Player Card with Cinema Bezel */}
          <div className="lg:col-span-8 rounded-[36px] bg-[#121215] border border-white/[0.1] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.8)] relative">
            {/* Top ambient diffusion light */}
            <div className="absolute -top-20 inset-x-0 h-40 bg-[#FF5500]/15 blur-3xl pointer-events-none" />

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

            {/* Video Meta Info */}
            <div className="p-6 sm:p-8 space-y-4 relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="px-3.5 py-1 rounded-full bg-[#FF5500]/20 text-[#FFAA40] text-xs font-bold uppercase tracking-wider border border-[#FF5500]/30 shadow-xs">
                    {activeVideo.series}
                  </span>
                  <span className="text-xs text-zinc-400 font-medium">
                    {activeVideo.publishedText}
                  </span>
                </div>

                <a
                  href={`https://www.youtube.com/watch?v=${activeVideo.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF7828] hover:text-[#FFAA40] transition"
                >
                  <span>Open in YouTube App</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <h3 className="text-xl sm:text-2xl font-display font-bold text-white leading-snug">
                {activeVideo.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {activeVideo.description}
              </p>

              <div className="pt-5 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-400">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full overflow-hidden border border-[#FF5500] p-0.5 bg-black">
                    <img
                      src={PASTOR_PROFILE.photoUrl}
                      alt={PASTOR_PROFILE.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <span className="font-semibold text-white block">The Rt. Rev. Ndubuisi Obi</span>
                    <span className="text-[11px] text-zinc-500">Bishop of Nnewi • Anglican Communion</span>
                  </div>
                </div>

                <a
                  href={BISHOP_YOUTUBE_CHANNEL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 hover:text-[#FF7828] font-semibold transition flex items-center gap-1"
                >
                  <span>View All Broadcasts</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Video Playlist Selector */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center justify-between px-2 pb-1">
              <span className="text-xs uppercase font-bold tracking-wider text-zinc-400 flex items-center gap-1.5">
                <Video className="w-3.5 h-3.5 text-[#FF5500]" />
                <span>Episcopal Video Broadcasts</span>
              </span>
              <span className="text-xs text-[#FFAA40] font-mono font-bold">
                {BISHOP_YOUTUBE_VIDEOS.length} Videos
              </span>
            </div>

            <div className="space-y-3 max-h-[640px] overflow-y-auto pr-1">
              {BISHOP_YOUTUBE_VIDEOS.map((item) => {
                const isActive = activeVideo.id === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveVideo(item)}
                    className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-start gap-3.5 ${isActive
                      ? 'bg-[#1C1C22] text-white border-[#FF5500] shadow-[0_10px_30px_rgba(255,85,0,0.15)] ring-1 ring-[#FF5500]'
                      : 'bg-[#121215] hover:bg-[#18181C] text-zinc-300 border-white/[0.08] hover:border-white/[0.2]'
                      }`}
                  >
                    {/* Thumbnail */}
                    <div className="relative w-28 h-18 rounded-xl overflow-hidden shrink-0 bg-black border border-white/10 shadow-sm">
                      <img
                        src={item.thumbnailUrl}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center transition-transform ${isActive ? 'bg-[#FF5500] text-white scale-110 shadow-md shadow-[#FF5500]/40' : 'bg-white/90 text-zinc-950'
                            }`}
                        >
                          <Play className="w-3.5 h-3.5 ml-0.5 fill-current" />
                        </div>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="space-y-1 min-w-0 flex-1">
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider block ${isActive ? 'text-[#FFAA40]' : 'text-zinc-500'
                          }`}
                      >
                        {item.series}
                      </span>
                      <h4
                        className={`text-xs font-bold line-clamp-2 leading-snug ${isActive ? 'text-white' : 'text-zinc-200'
                          }`}
                      >
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-zinc-500 line-clamp-1">
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
