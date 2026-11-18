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
  Share2
} from 'lucide-react';

export default function YouTubeVideoSection() {
  const [activeVideo, setActiveVideo] = useState(BISHOP_YOUTUBE_VIDEOS[0]);

  return (
    <section className="py-20 bg-[#0D0D0E] border-b border-[#232326]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header: Matching the reference image layout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            {/* Orange Kicker Text (like 'Behind the Designs' in reference) */}
            <span className="text-[#FF5500] text-sm font-bold tracking-wide uppercase block">
              Official YouTube Video Ministry
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold text-white tracking-tight leading-tight">
              Sermons, Synods &amp; Apostolic Teachings
            </h2>
          </div>

          {/* Right Text + CTA Pill (matching reference image) */}
          <div className="max-w-md space-y-4">
            <p className="text-zinc-400 text-sm leading-relaxed">
              Watch full church services, prophetic declarations, and Bible expositions broadcast directly from{' '}
              <strong className="text-white">@bishopndubuisiobi6348</strong>.
            </p>
            <a
              href={BISHOP_YOUTUBE_CHANNEL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full bg-[#FF5500] hover:bg-[#E64D00] text-white font-bold text-xs shadow-lg shadow-[#FF5500]/25 transition active:scale-95 group"
            >
              <span>Subscribe on YouTube</span>
              <span className="w-6 h-6 rounded-full bg-white text-zinc-950 flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </a>
          </div>
        </div>

        {/* Featured Video Player + Playlist Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Active Video Player Card */}
          <div className="lg:col-span-8 rounded-[32px] bg-[#141416] border border-[#232326] overflow-hidden shadow-2xl">
            {/* 16:9 Responsive Embed */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo.videoId}?autoplay=0&rel=0`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>

            {/* Video Meta Info */}
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#FF5500]/15 text-[#FF5500] text-xs font-bold uppercase tracking-wider border border-[#FF5500]/30">
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
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF5500] hover:text-[#ff7836] transition"
                >
                  <span>Open in YouTube App</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                {activeVideo.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {activeVideo.description}
              </p>

              <div className="pt-4 border-t border-[#232326] flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full overflow-hidden border border-[#FF5500]">
                    <img
                      src={PASTOR_PROFILE.photoUrl}
                      alt={PASTOR_PROFILE.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="font-semibold text-white">The Rt. Rev. Ndubuisi Obi</span>
                  <span>•</span>
                  <span>Bishop of Nnewi</span>
                </div>

                <a
                  href={BISHOP_YOUTUBE_CHANNEL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 hover:text-[#FF5500] font-semibold transition"
                >
                  View All Channel Uploads →
                </a>
              </div>
            </div>
          </div>

          {/* Video Playlist Selector */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center justify-between px-2 pb-1">
              <span className="text-xs uppercase font-bold tracking-wider text-zinc-400">
                Select Sermon Broadcast
              </span>
              <span className="text-xs text-[#FF5500] font-bold">
                {BISHOP_YOUTUBE_VIDEOS.length} Available
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
                      ? 'bg-[#1C1C20] text-white border-[#FF5500] shadow-lg shadow-[#FF5500]/10 ring-1 ring-[#FF5500]'
                      : 'bg-[#141416] hover:bg-[#1A1A1E] text-zinc-300 border-[#232326]'
                      }`}
                  >
                    {/* Thumbnail */}
                    <div className="relative w-28 h-18 rounded-xl overflow-hidden shrink-0 bg-black border border-white/10">
                      <img
                        src={item.thumbnailUrl}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center ${isActive ? 'bg-[#FF5500] text-white' : 'bg-white/90 text-zinc-950'
                            }`}
                        >
                          <Play className="w-3.5 h-3.5 ml-0.5 fill-current" />
                        </div>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="space-y-1 min-w-0 flex-1">
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider block ${isActive ? 'text-[#FF5500]' : 'text-zinc-400'
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
