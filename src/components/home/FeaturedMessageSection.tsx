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
      }).catch(() => { });
    } else {
      navigator.clipboard.writeText(window.location.origin + `/messages/${sermon.id}`);
      alert('Sermon link copied to clipboard!');
    }
  };

  return (
    <section className="py-16 sm:py-28 lg:py-36 bg-[#0D0D0E] border-b border-white/[0.06] relative">
      <div className="max-w-[1536px] mx-auto px-3.5 sm:px-6 lg:px-10 space-y-10 sm:space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8">
          <div className="space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full bg-[#FF5500]/20 border border-[#FF5500]/40 text-[#FFAA40] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF5500] shrink-0" />
              <span>Synod Charge Spotlight</span>
            </div>
            <h2 className="text-2xl min-[400px]:text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight break-words">
              Featured Presidential Address
            </h2>
          </div>
          <Link
            href="/messages"
            className="text-sm sm:text-lg font-bold text-[#FF7828] hover:text-[#FFAA40] flex items-center gap-2 sm:gap-2.5 transition group"
          >
            <span>Browse Full Library ({10}+ Messages &amp; Charges)</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>

        {/* Featured Card in Luxury Obsidian Glass with Responsive Scale */}
        <div className="rounded-[28px] sm:rounded-[40px] lg:rounded-[48px] bg-[#121215] border border-white/[0.12] p-5 min-[400px]:p-7 sm:p-12 lg:p-16 shadow-[0_35px_100px_rgba(0,0,0,0.85)] relative overflow-hidden">
          {/* Subtle ambient light */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF5500]/12 rounded-full blur-[140px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-14 items-center relative z-10">
            {/* Play Button & Audiophile Waveform Showcase */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-[32px] bg-[#09090B] border border-white/[0.08] text-center shadow-inner relative overflow-hidden">
              <div className="relative mb-6 sm:mb-8">
                <div className="w-22 h-22 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full bg-gradient-to-tr from-[#FF5500] via-[#FF7828] to-[#FFAA40] p-1.5 flex items-center justify-center shadow-[0_0_45px_rgba(255,85,0,0.45)]">
                  <button
                    onClick={() => playSermon(sermon)}
                    className="w-full h-full rounded-full bg-[#0D0D0E] text-white flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300"
                    aria-label={isCurrentPlaying ? 'Pause message' : 'Play message'}
                  >
                    {isCurrentPlaying ? (
                      <Pause className="w-8 h-8 sm:w-11 sm:h-11 fill-current text-[#FF5500]" />
                    ) : (
                      <Play className="w-8 h-8 sm:w-11 sm:h-11 fill-current ml-1 sm:ml-1.5 text-[#FF5500]" />
                    )}
                  </button>
                </div>
              </div>

              {/* Audio Waveform Bar Visualizer */}
              <div className="flex items-center gap-1 sm:gap-1.5 h-10 sm:h-12 mb-4 sm:mb-5 px-2 max-w-full overflow-hidden">
                {[14, 28, 42, 20, 52, 70, 36, 56, 78, 44, 24, 66, 88, 50, 34, 72, 56, 32, 46, 18, 54, 30].map((height, i) => (
                  <span
                    key={i}
                    style={{ height: `${height}%` }}
                    className={`w-1 sm:w-1.5 rounded-full transition-all duration-300 ${isCurrentPlaying ? 'bg-[#FF5500] animate-pulse' : 'bg-zinc-700'
                      }`}
                  />
                ))}
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <span className={`inline-block px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold tracking-wide transition ${isCurrentPlaying ? 'bg-[#FF5500] text-white shadow-md shadow-[#FF5500]/30' : 'bg-[#1C1C22] text-zinc-200 border border-white/[0.08]'
                  }`}>
                  {isCurrentPlaying ? 'Now Streaming Audio' : 'Click to Play Audio Teaching'}
                </span>
                <p className="text-[11px] sm:text-sm text-zinc-400 mt-1.5 font-medium">
                  Duration: {sermon.durationMinutes} mins • {sermon.audioFileSizeMb} MB (Low Data)
                </p>
              </div>

              {/* Action Buttons: Download & Share */}
              <div className="flex items-center gap-3 sm:gap-3.5 mt-5 sm:mt-7 w-full">
                {sermon.audioUrl && (
                  <a
                    href={sermon.audioUrl}
                    download={`${sermon.slug}.mp3`}
                    className="flex-1 flex items-center justify-center gap-2 py-3 sm:py-3.5 px-4 sm:px-5 rounded-full bg-[#1A1A1E] hover:bg-[#222228] text-xs sm:text-sm font-bold text-white border border-white/[0.1] transition shadow-xs whitespace-nowrap"
                  >
                    <Download className="w-4 h-4 text-[#FF5500]" />
                    <span className="whitespace-nowrap">Download MP3</span>
                  </a>
                )}
                <button
                  onClick={handleShare}
                  className="p-3 sm:p-3.5 rounded-full bg-[#1A1A1E] hover:bg-[#222228] text-zinc-200 border border-white/[0.1] transition shadow-xs whitespace-nowrap"
                  title="Share message link"
                >
                  <Share2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF7828]" />
                </button>
              </div>
            </div>

            {/* Teaching Details with Responsive Captions and Actions */}
            <div className="lg:col-span-8 space-y-5 sm:space-y-7">
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 text-xs sm:text-sm">
                <span className="px-3.5 sm:px-4.5 py-1 sm:py-1.5 rounded-full bg-[#FF5500]/25 text-[#FFAA40] font-bold border border-[#FF5500]/40">
                  {sermon.series}
                </span>
                <span className="text-zinc-300 font-medium text-xs sm:text-base">Delivered: {sermon.datePreached}</span>
                <span className="text-zinc-600">•</span>
                <span className="text-white font-mono font-bold bg-[#1C1C22] px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-md border border-white/[0.1] text-xs sm:text-sm">
                  {sermon.scriptureReference}
                </span>
              </div>

              <h3 className="text-xl min-[400px]:text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-display font-bold text-white hover:text-[#FFAA40] transition-colors leading-snug">
                <Link href={`/messages/${sermon.id}`}>{sermon.title}</Link>
              </h3>

              <p className="text-zinc-200 text-sm sm:text-lg lg:text-xl leading-relaxed">{sermon.summary}</p>

              {/* Key Takeaways Card with Responsive Captions */}
              <div className="bg-[#09090B] rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-white/[0.08] space-y-3 sm:space-y-4">
                <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#FFAA40] flex items-center gap-2 sm:gap-2.5">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF5500] shrink-0" />
                  <span>Key Scriptural Takeaways from the Charge:</span>
                </h4>
                <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-base text-zinc-300">
                  {sermon.keyPoints.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 sm:gap-3">
                      <span className="text-[#FF5500] font-bold text-base sm:text-lg leading-none mt-0.5">•</span>
                      <span className="leading-relaxed">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Read Full Notes & Watch YouTube Action Buttons (Responsive Layout) */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5 w-full">
                <Link
                  href={`/messages/${sermon.id}`}
                  className="inline-flex items-center justify-center gap-2.5 sm:gap-3 px-5 sm:px-8 py-3.5 sm:py-4.5 rounded-full bg-[#FF5500] hover:bg-[#E64D00] text-white text-xs min-[400px]:text-sm sm:text-lg font-bold transition shadow-xl shadow-[#FF5500]/30 active:scale-95 text-center whitespace-nowrap"
                >
                  <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                  <span className="whitespace-nowrap">Read Full Synod Charge &amp; Study Notes</span>
                </Link>

                {sermon.youtubeVideoId && (
                  <Link
                    href={`/messages/${sermon.id}`}
                    className="inline-flex items-center justify-center gap-2.5 sm:gap-3 px-5 sm:px-7 py-3.5 sm:py-4.5 rounded-full bg-[#18181D] hover:bg-[#202026] text-white text-xs min-[400px]:text-sm sm:text-lg font-bold border border-white/[0.12] transition shadow-xs active:scale-95 text-center whitespace-nowrap"
                  >
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FF5500] shrink-0" />
                    <span className="whitespace-nowrap">Watch Video Broadcast</span>
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
