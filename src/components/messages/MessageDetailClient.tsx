'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { SermonMessage } from '@/types';
import { getStoredMessages } from '@/lib/store';
import { useAudioPlayer } from '@/context/AudioPlayerContext';
import { BISHOP_YOUTUBE_CHANNEL } from '@/data/mockData';
import {
  Play,
  Pause,
  Download,
  Share2,
  Calendar,
  Clock,
  BookOpen,
  ArrowLeft,
  CheckCircle2,
  Bookmark,
  Volume2,
  FileText,
  Church,
  ExternalLink,
  ArrowRight
} from 'lucide-react';

export default function MessageDetailClient({ messageId }: { messageId: string }) {
  const [messages, setMessages] = useState<SermonMessage[]>([]);
  const [copied, setCopied] = useState(false);
  const [isSavedOffline, setIsSavedOffline] = useState(false);
  const [activeMediaTab, setActiveMediaTab] = useState<'video' | 'audio'>('video');

  const { currentSermon, isPlaying, playSermon } = useAudioPlayer();

  useEffect(() => {
    const list = getStoredMessages();
    setMessages(list);

    // Check if offline bookmarked
    const saved = localStorage.getItem(`offline_msg_${messageId}`);
    if (saved) setIsSavedOffline(true);
  }, [messageId]);

  const sermon = messages.find((m) => m.id === messageId || m.slug === messageId) || messages[0];

  if (!sermon) {
    return (
      <div className="py-20 text-center space-y-4 text-white">
        <h2 className="text-2xl font-bold">Message not found</h2>
        <Link href="/messages" className="text-[#FF5500] font-bold hover:underline">
          Return to Sermons Library
        </Link>
      </div>
    );
  }

  const isCurrentActive = currentSermon?.id === sermon.id;
  const isCurrentPlaying = isCurrentActive && isPlaying;
  const hasAudio = sermon.mediaType === 'audio' || sermon.mediaType === 'both';
  const hasVideo = !!sermon.youtubeVideoId;

  const handleShare = () => {
    const url = window.location.href;
    if (navigator.share) {
      navigator.share({
        title: sermon.title,
        text: `Watch/Listen to "${sermon.title}" by The Rt. Rev. Ndubuisi Obi (Bishop of Nnewi)`,
        url
      }).catch(() => { });
    } else {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handleSaveOffline = () => {
    if (isSavedOffline) {
      localStorage.removeItem(`offline_msg_${sermon.id}`);
      setIsSavedOffline(false);
    } else {
      localStorage.setItem(`offline_msg_${sermon.id}`, JSON.stringify(sermon));
      setIsSavedOffline(true);
      alert('Sermon transcript saved for offline study!');
    }
  };

  const relatedMessages = messages
    .filter((m) => m.id !== sermon.id && (m.series === sermon.series || m.topics.some((t) => sermon.topics.includes(t))))
    .slice(0, 3);

  return (
    <div className="space-y-10 text-white">
      {/* Back button */}
      <div>
        <Link
          href="/messages"
          className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-[#FF5500] transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Teachings &amp; Sermons</span>
        </Link>
      </div>

      {/* Sermon Hero Header Card */}
      <div className="rounded-[28px] sm:rounded-[36px] bg-[#141416] border border-[#232326] p-5 min-[400px]:p-7 sm:p-10 shadow-2xl space-y-5 sm:space-y-6">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="px-3 py-1 rounded-full bg-[#FF5500]/15 text-[#FF5500] font-bold border border-[#FF5500]/30 text-[11px] sm:text-xs">
            Series: {sermon.series}
          </span>
          <span className="text-zinc-400 flex items-center gap-1 font-medium text-[11px] sm:text-xs">
            <Calendar className="w-3.5 h-3.5 text-[#FF5500] shrink-0" />
            {sermon.datePreached}
          </span>
          <span className="text-zinc-600">•</span>
          <span className="text-white font-mono font-bold bg-[#1C1C20] px-2.5 py-0.5 rounded-full border border-[#2A2A30] text-[11px] sm:text-xs">
            {sermon.scriptureReference}
          </span>
          {hasVideo && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#FF5500]/20 text-[#FF5500] font-bold text-[10px]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500] animate-pulse shrink-0" />
              <span>YouTube Video Available</span>
            </span>
          )}
        </div>

        <h1 className="text-2xl min-[400px]:text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-snug sm:leading-tight break-words">
          {sermon.title}
        </h1>

        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-3xl">
          {sermon.summary}
        </p>

        {/* Media Selector Tabs (If both video & audio are present) */}
        {hasVideo && hasAudio && (
          <div className="flex items-center gap-2 border-b border-[#232326] pb-3 pt-2">
            <button
              onClick={() => setActiveMediaTab('video')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition ${activeMediaTab === 'video'
                ? 'bg-[#FF5500] text-white shadow-md shadow-[#FF5500]/25'
                : 'bg-[#1C1C20] text-zinc-400 hover:text-white'
                }`}
            >
              <span>Watch Video</span>
            </button>

            <button
              onClick={() => setActiveMediaTab('audio')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition ${activeMediaTab === 'audio'
                ? 'bg-white text-zinc-950 shadow-md'
                : 'bg-[#1C1C20] text-zinc-400 hover:text-white'
                }`}
            >
              <Volume2 className="w-3.5 h-3.5" />
              <span>Listen to Audio (Low Data)</span>
            </button>
          </div>
        )}

        {/* YouTube Video Player Embed */}
        {hasVideo && (!hasAudio || activeMediaTab === 'video') && (
          <div className="space-y-3">
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-2xl border border-[#232326]">
              <iframe
                src={`https://www.youtube.com/embed/${sermon.youtubeVideoId}?autoplay=0&rel=0`}
                title={sermon.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
              <a
                href={BISHOP_YOUTUBE_CHANNEL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#FF5500] hover:text-[#ff7836] font-bold"
              >
                <span>Channel: @bishopndubuisiobi6348</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleShare}
                  className="px-3.5 py-1.5 rounded-full bg-[#1C1C20] hover:bg-[#25252B] text-zinc-300 font-semibold flex items-center gap-1.5 border border-[#2E2E34] transition"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share Video</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Audio Player Strip (if audio available and selected) */}
        {hasAudio && (!hasVideo || activeMediaTab === 'audio') && (
          <div className="rounded-2xl bg-[#0E0E10] p-6 text-white border border-[#232326] shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => playSermon(sermon)}
                className="w-14 h-14 rounded-full bg-[#FF5500] hover:bg-[#E64D00] text-white flex items-center justify-center shrink-0 shadow-lg shadow-[#FF5500]/30 transition active:scale-95"
                aria-label={isCurrentPlaying ? 'Pause sermon' : 'Play sermon'}
              >
                {isCurrentPlaying ? (
                  <Pause className="w-6 h-6 fill-current" />
                ) : (
                  <Play className="w-6 h-6 fill-current ml-0.5" />
                )}
              </button>

              <div>
                <span className="block text-sm font-bold text-white">
                  {isCurrentPlaying ? 'Now Playing Sermon Audio' : 'Listen to Audio Sermon'}
                </span>
                <span className="block text-xs text-zinc-400">
                  {sermon.durationMinutes} mins • {sermon.audioFileSizeMb} MB (Low Data Mobile Friendly)
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              {sermon.audioUrl && (
                <a
                  href={sermon.audioUrl}
                  download={`${sermon.slug}.mp3`}
                  className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#1C1C20] hover:bg-[#25252B] text-xs font-semibold text-white border border-[#2E2E34] transition"
                >
                  <Download className="w-4 h-4 text-[#FF5500]" />
                  <span>Download MP3 ({sermon.audioFileSizeMb}MB)</span>
                </a>
              )}

              <button
                onClick={handleShare}
                className="p-2.5 rounded-full bg-[#1C1C20] hover:bg-[#25252B] text-zinc-300 border border-[#2E2E34] transition"
                title="Share Sermon Link"
              >
                <Share2 className="w-4 h-4" />
              </button>

              <button
                onClick={handleSaveOffline}
                className={`p-2.5 rounded-full border transition ${isSavedOffline
                  ? 'bg-[#FF5500] text-white border-[#FF5500]'
                  : 'bg-[#1C1C20] hover:bg-[#25252B] text-zinc-300 border-[#2E2E34]'
                  }`}
                title="Save transcript for offline study"
              >
                <Bookmark className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {copied && (
          <p className="text-xs text-[#FF5500] font-bold text-center sm:text-right">
            Link copied to clipboard! Ready to share on WhatsApp.
          </p>
        )}
      </div>

      {/* Main Content Layout: Sermon Article + Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Full Written Article / Transcript */}
        <div className="lg:col-span-8 space-y-8">
          <div className="rounded-[32px] bg-[#141416] border border-[#232326] p-6 sm:p-10 shadow-2xl">
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#232326]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF5500] flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#FF5500]" />
                <span>Expository Study Notes &amp; Transcript</span>
              </span>
              <button
                onClick={() => window.print()}
                className="text-xs text-zinc-400 hover:text-white font-semibold"
              >
                Print / Save PDF
              </button>
            </div>

            {/* Rendered article */}
            <div className="prose prose-invert max-w-none text-zinc-300 space-y-6 leading-relaxed font-sans">
              <div className="whitespace-pre-line text-sm sm:text-base leading-relaxed">
                {sermon.fullContent}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar: Key Takeaways & Related Teachings */}
        <div className="lg:col-span-4 space-y-6">
          {/* Key Scriptural Takeaways */}
          <div className="rounded-[28px] bg-[#141416] border border-[#232326] p-6 space-y-4 shadow-xl">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#FF5500]" />
              <span>Key Takeaways</span>
            </h3>
            <ul className="space-y-3 text-xs text-zinc-300 leading-relaxed">
              {sermon.keyPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500] mt-1.5 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* YouTube Channel Banner */}
          <div className="rounded-[28px] bg-[#141416] border border-[#232326] p-6 space-y-3 shadow-xl">
            <div className="flex items-center gap-2 text-[#FF5500] font-bold text-xs uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#FF5500] animate-pulse" />
              <span>Official YouTube Ministry</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Subscribe to Bishop Ndubuisi Obi on YouTube for daily spiritual declarations, morning showers, and full church services.
            </p>
            <a
              href={BISHOP_YOUTUBE_CHANNEL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full text-center py-2.5 rounded-full bg-[#FF5500] hover:bg-[#E64D00] text-white font-bold text-xs transition shadow-md shadow-[#FF5500]/20"
            >
              Subscribe: @bishopndubuisiobi6348
            </a>
          </div>

          {/* Quick Audience CTA */}
          <div className="rounded-[28px] bg-[#141416] border border-[#232326] p-6 space-y-3 shadow-xl">
            <h3 className="font-sans text-lg font-bold text-white">Need Pastoral Guidance?</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Have questions regarding this message or need episcopal spiritual counsel? Schedule a confidential audience with Bishop Ndubuisi Obi at Bishopscourt, Nnewi.
            </p>
            <Link
              href="/book?tab=counseling"
              className="group flex items-center justify-between pl-4 pr-1.5 py-1.5 rounded-full bg-white hover:bg-zinc-100 text-zinc-950 font-bold text-xs shadow-md transition"
            >
              <span>Book Audience at Bishopscourt</span>
              <span className="w-7 h-7 rounded-full bg-[#FF5500] text-white flex items-center justify-center">
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>

          {/* Related Messages */}
          {relatedMessages.length > 0 && (
            <div className="rounded-[28px] bg-[#141416] border border-[#232326] p-6 space-y-4 shadow-xl">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                Related Teachings
              </h3>
              <div className="space-y-3">
                {relatedMessages.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/messages/${rel.id}`}
                    className="block group p-3.5 rounded-2xl bg-[#0D0D0E] hover:bg-[#1A1A1E] border border-[#232326] transition"
                  >
                    <span className="text-[10px] text-[#FF5500] font-bold block mb-1">
                      {rel.series}
                    </span>
                    <h4 className="text-xs font-bold text-white group-hover:text-[#FF5500] transition-colors line-clamp-2">
                      {rel.title}
                    </h4>
                    <span className="text-[10px] text-zinc-500 mt-1 block">
                      {rel.durationMinutes} mins • {rel.scriptureReference}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
