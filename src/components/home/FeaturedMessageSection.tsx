'use client';

import React from 'react';
import Link from 'next/link';
import { SermonMessage } from '@/types';
import { useAudioPlayer } from '@/context/AudioPlayerContext';
import { Play, Pause, Download, BookOpen, Clock, Tag, Share2, Sparkles, Volume2, ArrowRight } from 'lucide-react';

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
    <section className="py-20 bg-[#0D0D0E] border-b border-[#232326]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-[#FF5500] text-sm font-bold tracking-wide uppercase block mb-1">
              Synod Charge Spotlight
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-white">
              Featured Presidential Address
            </h2>
          </div>
          <Link
            href="/messages"
            className="text-xs sm:text-sm font-bold text-[#FF5500] hover:text-[#ff7836] flex items-center gap-1.5 transition"
          >
            <span>Browse Full Library ({10}+ Messages &amp; Charges)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Featured Card in Dark Obsidian */}
        <div className="rounded-[32px] bg-[#141416] border border-[#232326] p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Play Button & Media Badge */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl bg-[#0E0E10] border border-[#232326] text-center shadow-inner">
              <div className="relative mb-5">
                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#FF5500] to-[#FF8C42] p-1 flex items-center justify-center shadow-lg shadow-[#FF5500]/30">
                  <button
                    onClick={() => playSermon(sermon)}
                    className="w-full h-full rounded-full bg-[#0D0D0E] text-white flex items-center justify-center hover:scale-105 active:scale-95 transition-all"
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

              <div className="space-y-1">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                  isCurrentPlaying ? 'bg-[#FF5500] text-white' : 'bg-[#1C1C20] text-zinc-300 border border-[#2E2E34]'
                }`}>
                  {isCurrentPlaying ? 'Now Streaming Audio' : 'Click to Play Audio'}
                </span>
                <p className="text-xs text-zinc-400 mt-2 font-medium">
                  Duration: {sermon.durationMinutes} mins • {sermon.audioFileSizeMb} MB (Low Data)
                </p>
              </div>

              {/* Action Buttons: Download & Share */}
              <div className="flex items-center gap-2 mt-6 w-full">
                {sermon.audioUrl && (
                  <a
                    href={sermon.audioUrl}
                    download={`${sermon.slug}.mp3`}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full bg-[#1C1C20] hover:bg-[#25252B] text-xs font-bold text-white border border-[#2E2E34] transition"
                  >
                    <Download className="w-3.5 h-3.5 text-[#FF5500]" />
                    <span>Download MP3</span>
                  </a>
                )}
                <button
                  onClick={handleShare}
                  className="p-2.5 rounded-full bg-[#1C1C20] hover:bg-[#25252B] text-zinc-300 border border-[#2E2E34] transition"
                  title="Share message link"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Teaching Details */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="px-3 py-1 rounded-full bg-[#FF5500]/15 text-[#FF5500] font-bold border border-[#FF5500]/30">
                  {sermon.series}
                </span>
                <span className="text-zinc-400 font-medium">Delivered: {sermon.datePreached}</span>
                <span className="text-zinc-600">•</span>
                <span className="text-white font-mono font-bold bg-[#1E1E22] px-2 py-0.5 rounded">
                  {sermon.scriptureReference}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-sans font-bold text-white hover:text-[#FF5500] transition-colors">
                <Link href={`/messages/${sermon.id}`}>{sermon.title}</Link>
              </h3>

              <p className="text-zinc-300 text-sm leading-relaxed">{sermon.summary}</p>

              {/* Key Takeaways */}
              <div className="bg-[#0E0E10] rounded-2xl p-5 border border-[#232326] space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#FF5500]">
                  Key Scriptural Takeaways from the Charge:
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
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  href={`/messages/${sermon.id}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FF5500] hover:bg-[#E64D00] text-white text-xs font-bold transition shadow-md shadow-[#FF5500]/20"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Read Full Synod Charge &amp; Study Notes</span>
                </Link>

                {sermon.youtubeVideoId && (
                  <Link
                    href={`/messages/${sermon.id}`}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#1C1C20] hover:bg-[#25252B] text-white text-xs font-bold border border-[#2E2E34] transition"
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
