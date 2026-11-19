'use client';

import React from 'react';
import Link from 'next/link';
import { SermonMessage } from '@/types';
import { useAudioPlayer } from '@/context/AudioPlayerContext';
import { Play, Pause, Download, BookOpen, Clock, Tag, Share2, Sparkles, Volume2, ArrowRight, ShieldCheck } from 'lucide-react';

export default function FeaturedMessageSection({ sermon }: { sermon: SermonMessage }) {
  const { currentSermon, isPlaying, playSermon } = useAudioPlayer();
  const isCurrentActive = currentSermon?.id === sermon.id;
  const isCurrentPlaying = isCurrentActive && isPlaying;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: sermon.title,
        text: `Listen to "${sermon.title}" by The Rt. Rev. Ndubuisi Obi (Bishop of Nnewi)`,
        url: window.location.origin + `/messages/${sermon.id}`
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.origin + `/messages/${sermon.id}`);
      alert('Sermon link copied to clipboard!');
    }
  };

  return (
    <section className="py-24 bg-[#0D0D0E] border-b border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF5500]/15 border border-[#FF5500]/30 text-[#FFAA40] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#FF5500]" />
              <span>Synod Charge Spotlight</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white">
              Featured Presidential Address
            </h2>
          </div>
          <Link
            href="/messages"
            className="text-xs sm:text-sm font-bold text-[#FF7828] hover:text-[#FFAA40] flex items-center gap-1.5 transition group"
          >
            <span>Browse Full Library ({10}+ Messages &amp; Charges)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Featured Card in Luxury Obsidian Glass */}
        <div className="rounded-[36px] bg-[#121215] border border-white/[0.1] p-6 sm:p-10 shadow-[0_30px_90px_rgba(0,0,0,0.8)] relative overflow-hidden">
          {/* Subtle ambient light */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF5500]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Play Button & Audiophile Waveform Showcase */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 sm:p-8 rounded-3xl bg-[#09090B] border border-white/[0.08] text-center shadow-inner relative overflow-hidden">
              <div className="relative mb-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#FF5500] via-[#FF7828] to-[#FFAA40] p-1 flex items-center justify-center shadow-[0_0_35px_rgba(255,85,0,0.45)]">
                  <button
                    onClick={() => playSermon(sermon)}
                    className="w-full h-full rounded-full bg-[#0D0D0E] text-white flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300"
                    aria-label={isCurrentPlaying ? 'Pause message' : 'Play message'}
                  >
                    {isCurrentPlaying ? (
                      <Pause className="w-8 h-8 fill-current text-[#FF5500]" />
                    ) : (
                      <Play className="w-8 h-8 fill-current ml-1 text-[#FF5500]" />
                    )}
                  </button>
                </div>
              </div>

              {/* Simulated Audio Waveform Bar Visualizer */}
              <div className="flex items-center gap-1 h-8 mb-4 px-2">
                {[12, 24, 38, 18, 48, 64, 32, 50, 72, 40, 20, 60, 80, 45, 30, 65, 50, 28, 42, 15].map((height, i) => (
                  <span
                    key={i}
                    style={{ height: `${height}%` }}
                    className={`w-1 rounded-full transition-all duration-300 ${
                      isCurrentPlaying ? 'bg-[#FF5500] animate-pulse' : 'bg-zinc-700'
                    }`}
                  />
                ))}
              </div>

              <div className="space-y-1">
                <span className={`inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-wide transition ${
                  isCurrentPlaying ? 'bg-[#FF5500] text-white shadow-md shadow-[#FF5500]/30' : 'bg-[#1C1C22] text-zinc-300 border border-white/[0.08]'
                }`}>
                  {isCurrentPlaying ? 'Now Streaming Audio' : 'Click to Play High-Fidelity Audio'}
                </span>
                <p className="text-xs text-zinc-400 mt-2 font-medium">
                  Duration: {sermon.durationMinutes} mins • {sermon.audioFileSizeMb} MB (Low Data Friendly)
                </p>
              </div>

              {/* Action Buttons: Download & Share */}
              <div className="flex items-center gap-2 mt-6 w-full">
                {sermon.audioUrl && (
                  <a
                    href={sermon.audioUrl}
                    download={`${sermon.slug}.mp3`}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full bg-[#1A1A1E] hover:bg-[#222228] text-xs font-bold text-white border border-white/[0.1] transition shadow-xs"
                  >
                    <Download className="w-3.5 h-3.5 text-[#FF5500]" />
                    <span>Download MP3</span>
                  </a>
                )}
                <button
                  onClick={handleShare}
                  className="p-2.5 rounded-full bg-[#1A1A1E] hover:bg-[#222228] text-zinc-300 border border-white/[0.1] transition shadow-xs"
                  title="Share message link"
                >
                  <Share2 className="w-4 h-4 text-[#FF7828]" />
                </button>
              </div>
            </div>

            {/* Teaching Details */}
            <div className="lg:col-span-8 space-y-5">
              <div className="flex flex-wrap items-center gap-2.5 text-xs">
                <span className="px-3.5 py-1 rounded-full bg-[#FF5500]/20 text-[#FFAA40] font-bold border border-[#FF5500]/30">
                  {sermon.series}
                </span>
                <span className="text-zinc-400 font-medium">Delivered: {sermon.datePreached}</span>
                <span className="text-zinc-600">•</span>
                <span className="text-white font-mono font-bold bg-[#1C1C22] px-2.5 py-0.5 rounded-md border border-white/[0.08]">
                  {sermon.scriptureReference}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white hover:text-[#FF7828] transition-colors leading-snug">
                <Link href={`/messages/${sermon.id}`}>{sermon.title}</Link>
              </h3>

              <p className="text-zinc-300 text-sm leading-relaxed">{sermon.summary}</p>

              {/* Key Takeaways Card */}
              <div className="bg-[#09090B] rounded-2xl p-5 border border-white/[0.08] space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFAA40] flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#FF5500]" />
                  <span>Key Scriptural Takeaways from the Charge:</span>
                </h4>
                <ul className="space-y-1.5 text-xs text-zinc-300">
                  {sermon.keyPoints.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#FF5500] font-bold">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Read Full Notes & Watch YouTube Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <Link
                  href={`/messages/${sermon.id}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FF5500] hover:bg-[#E64D00] text-white text-xs font-bold transition shadow-lg shadow-[#FF5500]/25"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Read Full Synod Charge &amp; Study Notes</span>
                </Link>

                {sermon.youtubeVideoId && (
                  <Link
                    href={`/messages/${sermon.id}`}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#18181D] hover:bg-[#202026] text-white text-xs font-bold border border-white/[0.1] transition shadow-xs"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#FF5500]" />
                    <span>Watch Video Broadcast</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
