'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { SermonMessage, SermonTopic, MediaType } from '@/types';
import { getStoredMessages } from '@/lib/store';
import { useAudioPlayer } from '@/context/AudioPlayerContext';
import { BISHOP_YOUTUBE_CHANNEL } from '@/data/mockData';
import {
  Search,
  Filter,
  Headphones,
  BookOpen,
  Play,
  Pause,
  Download,
  Calendar,
  Sparkles,
  Wifi,
  Share2,
  Clock,
  Church,
  Video,
  ExternalLink,
  ArrowRight
} from 'lucide-react';

export default function MessagesLibraryView() {
  const [messages, setMessages] = useState<SermonMessage[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMediaType, setSelectedMediaType] = useState<string>('all');
  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const [selectedSeries, setSelectedSeries] = useState<string>('all');

  const { currentSermon, isPlaying, playSermon, lowDataMode, toggleLowDataMode } = useAudioPlayer();

  useEffect(() => {
    setMessages(getStoredMessages());

    const handleUpdate = () => {
      setMessages(getStoredMessages());
    };

    window.addEventListener('messages_updated', handleUpdate);
    return () => window.removeEventListener('messages_updated', handleUpdate);
  }, []);

  // Collect series options
  const allSeries = useMemo(() => {
    const set = new Set<string>();
    messages.forEach((m) => {
      if (m.series) set.add(m.series);
    });
    return Array.from(set);
  }, [messages]);

  // Collect topics
  const allTopics: SermonTopic[] = [
    'Faith & Grace',
    'Spiritual Growth',
    'Prayer & Fasting',
    'Leadership & Purpose',
    'Family & Marriage',
    'Financial Stewardship',
    'Kingdom Revival'
  ];

  // Filtered messages
  const filteredMessages = useMemo(() => {
    return messages.filter((m) => {
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = m.title.toLowerCase().includes(q);
        const matchesScripture = m.scriptureReference.toLowerCase().includes(q);
        const matchesSummary = m.summary.toLowerCase().includes(q);
        const matchesSeries = m.series.toLowerCase().includes(q);
        const matchesTopic = m.topics.some((t) => t.toLowerCase().includes(q));
        if (!matchesTitle && !matchesScripture && !matchesSummary && !matchesSeries && !matchesTopic) {
          return false;
        }
      }

      // Media type
      if (selectedMediaType !== 'all') {
        if (selectedMediaType === 'video' && !m.youtubeVideoId) return false;
        if (selectedMediaType === 'audio' && m.mediaType === 'written') return false;
        if (selectedMediaType === 'written' && m.mediaType === 'audio') return false;
      }

      // Series
      if (selectedSeries !== 'all' && m.series !== selectedSeries) {
        return false;
      }

      // Topic
      if (selectedTopic !== 'all' && !m.topics.includes(selectedTopic as SermonTopic)) {
        return false;
      }

      return true;
    });
  }, [messages, searchQuery, selectedMediaType, selectedTopic, selectedSeries]);

  const handleShare = (m: SermonMessage, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const url = `${window.location.origin}/messages/${m.id}`;
    if (navigator.share) {
      navigator.share({
        title: m.title,
        text: `Listen to "${m.title}" by The Rt. Rev. Ndubuisi Obi (Bishop of Nnewi)`,
        url
      }).catch(() => { });
    } else {
      navigator.clipboard.writeText(url);
      alert('Sermon link copied to clipboard!');
    }
  };

  return (
    <div className="space-y-6 sm:space-y-8 text-white">
      {/* Header Bar & Search in Dark Obsidian Card */}
      <div className="bg-[#141416] rounded-[24px] sm:rounded-[32px] border border-[#232326] p-4 min-[400px]:p-6 sm:p-8 shadow-2xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <span className="text-[#FF5500] text-xs font-bold uppercase tracking-wider block mb-1">
              Diocese of Nnewi Teaching Archives
            </span>
            <h1 className="text-xl min-[400px]:text-2xl sm:text-3xl font-display font-extrabold text-white break-words">
              Synod Charges, Sermons &amp; Expositions
            </h1>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Stream presidential synod charges, watch YouTube video broadcasts, or read written outlines by Bishop Ndubuisi Obi.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            {/* YouTube Direct Link */}
            <a
              href={BISHOP_YOUTUBE_CHANNEL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full text-xs font-semibold bg-[#1C1C20] hover:bg-[#25252B] text-white border border-[#2E2E34] transition active:scale-95"
            >
              <span className="w-2 h-2 rounded-full bg-[#FF5500] animate-pulse shrink-0" />
              <span>YouTube Channel</span>
            </a>

            {/* Low Data Mode Toggle (Nigeria Friendly) */}
            <button
              onClick={toggleLowDataMode}
              className={`flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2 rounded-full text-xs font-semibold transition border shrink-0 active:scale-95 ${lowDataMode
                ? 'bg-[#FF5500]/20 border-[#FF5500] text-[#FF5500]'
                : 'bg-[#1C1C20] hover:bg-[#25252B] text-zinc-300 border-[#2E2E34]'
                }`}
              title="Optimizes streaming for slower 2G/3G Nigerian mobile networks"
            >
              <Wifi className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF5500] shrink-0" />
              <span>{lowDataMode ? 'Low-Data Active' : 'Low-Data Mode'}</span>
            </button>
          </div>
        </div>

        {/* Search Input */}
        <div className="mt-5 sm:mt-6 relative">
          <Search className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-500 absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by sermon title, scripture, topic..."
            className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-3.5 bg-[#0D0D0E] border border-[#27272A] rounded-xl sm:rounded-2xl text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-[#FF5500] transition"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 sm:right-4 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-white"
            >
              Clear
            </button>
          )}
        </div>

        {/* Filters Row */}
        <div className="mt-4 sm:mt-5 pt-4 sm:pt-5 border-t border-[#232326] grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
          {/* Format / Media Type */}
          <div>
            <label className="block text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-1">
              Format
            </label>
            <select
              value={selectedMediaType}
              onChange={(e) => setSelectedMediaType(e.target.value)}
              className="w-full bg-[#0D0D0E] border border-[#27272A] rounded-xl px-3 py-2 text-xs text-white font-medium focus:outline-none focus:border-[#FF5500]"
            >
              <option value="all">All Formats (Video, Audio &amp; Written)</option>
              <option value="video">YouTube Video Broadcasts</option>
              <option value="audio">Audio Sermons Only</option>
              <option value="written">Written Study Articles</option>
            </select>
          </div>

          {/* Series */}
          <div>
            <label className="block text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-1">
              Teaching Series
            </label>
            <select
              value={selectedSeries}
              onChange={(e) => setSelectedSeries(e.target.value)}
              className="w-full bg-[#0D0D0E] border border-[#27272A] rounded-xl px-3 py-2 text-xs text-white font-medium focus:outline-none focus:border-[#FF5500]"
            >
              <option value="all">All Series</option>
              {allSeries.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* Topic */}
          <div>
            <label className="block text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-1">
              Topic / Theme
            </label>
            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="w-full bg-[#0D0D0E] border border-[#27272A] rounded-xl px-3 py-2 text-xs text-white font-medium focus:outline-none focus:border-[#FF5500]"
            >
              <option value="all">All Topics</option>
              {allTopics.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results Count & Badges */}
      <div className="flex items-center justify-between text-xs text-zinc-400 px-1">
        <span>
          Showing <strong className="text-white font-bold">{filteredMessages.length}</strong> message
          {filteredMessages.length === 1 ? '' : 's'}
        </span>
        {(searchQuery || selectedMediaType !== 'all' || selectedSeries !== 'all' || selectedTopic !== 'all') && (
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedMediaType('all');
              setSelectedSeries('all');
              setSelectedTopic('all');
            }}
            className="text-[#FF5500] font-bold hover:underline"
          >
            Reset All Filters
          </button>
        )}
      </div>

      {/* Messages Grid in Dark Obsidian Cards */}
      {filteredMessages.length === 0 ? (
        <div className="p-12 text-center rounded-[32px] bg-[#141416] border border-[#232326] space-y-3 shadow-xl">
          <BookOpen className="w-12 h-12 text-zinc-600 mx-auto" />
          <h3 className="text-lg font-bold text-white">No messages found</h3>
          <p className="text-xs text-zinc-500 max-w-sm mx-auto">
            Try adjusting your search terms or clearing the media format and topic filters.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMessages.map((msg) => {
            const isCurrentPlaying = currentSermon?.id === msg.id && isPlaying;
            const hasAudio = msg.mediaType === 'audio' || msg.mediaType === 'both';
            const hasVideo = !!msg.youtubeVideoId;

            return (
              <div
                key={msg.id}
                className="rounded-[28px] bg-[#141416] border border-[#232326] hover:border-[#FF5500] p-6 flex flex-col justify-between transition-all group shadow-xl hover:shadow-2xl hover:shadow-[#FF5500]/5"
              >
                <div>
                  {/* Top Bar: Series & Media Type Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-[#1C1C20] text-zinc-300 text-[11px] font-bold border border-[#2A2A30]">
                      {msg.series}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {hasVideo && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#FF5500]/15 text-[#FF5500] text-[10px] font-bold border border-[#FF5500]/30">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500]" />
                          <span>Video</span>
                        </span>
                      )}
                      <span className="flex items-center gap-1 text-[11px] text-zinc-400 font-medium">
                        {msg.mediaType === 'written' ? (
                          <>
                            <BookOpen className="w-3.5 h-3.5 text-zinc-400" />
                            <span>Written</span>
                          </>
                        ) : (
                          <>
                            <Headphones className="w-3.5 h-3.5 text-[#FF5500]" />
                            <span>{msg.durationMinutes} mins</span>
                          </>
                        )}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-[#FF5500] transition-colors line-clamp-2 mb-2">
                    <Link href={`/messages/${msg.id}`}>{msg.title}</Link>
                  </h3>

                  {/* Scripture Reference */}
                  <p className="text-xs text-[#FF5500] font-mono font-bold mb-3">
                    {msg.scriptureReference}
                  </p>

                  {/* Summary */}
                  <p className="text-xs text-zinc-400 line-clamp-3 leading-relaxed mb-4">
                    {msg.summary}
                  </p>

                  {/* Topics Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {msg.topics.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#0D0D0E] text-zinc-400 border border-[#232326]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Controls */}
                <div className="pt-4 border-t border-[#232326] space-y-3">
                  <div className="flex items-center justify-between text-xs text-zinc-400">
                    <span className="flex items-center gap-1 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                      {msg.datePreached}
                    </span>
                    {hasAudio && (
                      <span className="text-[11px] font-mono text-[#FF5500] font-bold">
                        {msg.audioFileSizeMb ? `${msg.audioFileSizeMb} MB` : 'Low Data'}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Primary Action Button */}
                    {hasVideo ? (
                      <Link
                        href={`/messages/${msg.id}`}
                        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full bg-[#FF5500] hover:bg-[#E64D00] text-white font-bold text-xs shadow-md shadow-[#FF5500]/20 transition active:scale-95"
                      >
                        <Video className="w-3.5 h-3.5" />
                        <span>Watch Video</span>
                      </Link>
                    ) : hasAudio ? (
                      <button
                        onClick={() => playSermon(msg)}
                        className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-full font-bold text-xs transition active:scale-95 shadow-md ${isCurrentPlaying
                          ? 'bg-white text-zinc-950'
                          : 'bg-[#FF5500] hover:bg-[#E64D00] text-white shadow-[#FF5500]/20'
                          }`}
                      >
                        {isCurrentPlaying ? (
                          <>
                            <Pause className="w-4 h-4 fill-current" />
                            <span>Pause Audio</span>
                          </>
                        ) : (
                          <>
                            <Play className="w-4 h-4 fill-current ml-0.5" />
                            <span>Listen Audio</span>
                          </>
                        )}
                      </button>
                    ) : (
                      <Link
                        href={`/messages/${msg.id}`}
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-full bg-[#1C1C20] hover:bg-[#25252B] text-white font-bold text-xs border border-[#2E2E34] transition"
                      >
                        <BookOpen className="w-4 h-4 text-[#FF5500]" />
                        <span>Read Teaching</span>
                      </Link>
                    )}

                    {hasAudio && (
                      <button
                        onClick={() => playSermon(msg)}
                        className="p-2.5 rounded-full bg-[#1C1C20] hover:bg-[#25252B] text-zinc-300 border border-[#2A2A30] transition"
                        title={isCurrentPlaying ? 'Pause Audio' : 'Play Audio'}
                      >
                        {isCurrentPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      </button>
                    )}

                    {hasAudio && msg.audioUrl && (
                      <a
                        href={msg.audioUrl}
                        download={`${msg.slug}.mp3`}
                        className="p-2.5 rounded-full bg-[#1C1C20] hover:bg-[#25252B] text-zinc-300 border border-[#2A2A30] transition"
                        title={`Download MP3 (${msg.audioFileSizeMb} MB)`}
                      >
                        <Download className="w-4 h-4 text-[#FF5500]" />
                      </a>
                    )}

                    <Link
                      href={`/messages/${msg.id}`}
                      className="p-2.5 rounded-full bg-[#1C1C20] hover:bg-[#25252B] text-zinc-300 border border-[#2A2A30] transition"
                      title="Read Full Notes & Outline"
                    >
                      <BookOpen className="w-4 h-4" />
                    </Link>

                    <button
                      onClick={(e) => handleShare(msg, e)}
                      className="p-2.5 rounded-full bg-[#1C1C20] hover:bg-[#25252B] text-zinc-300 border border-[#2A2A30] transition"
                      title="Share link"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
