'use client';

import React from 'react';
import { useAudioPlayer } from '@/context/AudioPlayerContext';
import { Play, Pause, Download, X, Volume2, FastForward, Wifi, ShieldAlert } from 'lucide-react';

export default function AudioPlayerBar() {
  const {
    currentSermon,
    isPlaying,
    currentTime,
    duration,
    playbackRate,
    lowDataMode,
    togglePlayPause,
    seek,
    setSpeed,
    toggleLowDataMode,
    closePlayer
  } = useAudioPlayer();

  if (!currentSermon) return null;

  const formatTime = (seconds: number) => {
    if (isNaN(seconds) || seconds < 0) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const speeds = [0.75, 1, 1.25, 1.5, 2];

  const handleNextSpeed = () => {
    const currentIndex = speeds.indexOf(playbackRate);
    const nextIndex = (currentIndex + 1) % speeds.length;
    setSpeed(speeds[nextIndex]);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#101012]/95 text-white backdrop-blur-md border-t border-[#FF5500]/40 shadow-2xl transition-all">
      {/* Progress Track */}
      <div className="relative w-full h-1.5 bg-[#1C1C20] cursor-pointer group">
        <div
          className="h-full bg-gradient-to-r from-[#FF5500] to-[#FFA066] transition-all"
          style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
        />
        <input
          type="range"
          min="0"
          max={duration || 100}
          value={currentTime}
          onChange={(e) => seek(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          aria-label="Seek audio"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-3 sm:py-2.5 flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Sermon Title & Meta */}
        <div className="flex items-center gap-3 w-full sm:w-1/3 min-w-0">
          <div className="w-10 h-10 rounded-xl bg-[#FF5500]/15 border border-[#FF5500]/30 flex items-center justify-center shrink-0 text-[#FF5500]">
            <Volume2 className="w-5 h-5" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold truncate text-white">{currentSermon.title}</p>
            <p className="text-xs text-[#FF5500] truncate">
              {currentSermon.series} • {currentSermon.scriptureReference}
            </p>
          </div>
        </div>

        {/* Playback Controls */}
        <div className="flex items-center justify-center gap-4 w-full sm:w-auto">
          <span className="text-xs font-mono text-zinc-400 w-10 text-right">
            {formatTime(currentTime)}
          </span>

          <button
            onClick={togglePlayPause}
            className="w-11 h-11 rounded-full bg-[#FF5500] hover:bg-[#E64D00] text-white flex items-center justify-center transition-transform active:scale-95 shadow-lg shadow-[#FF5500]/30"
            title={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
          </button>

          <span className="text-xs font-mono text-zinc-400 w-10">
            {formatTime(duration || currentSermon.durationMinutes * 60)}
          </span>

          {/* Speed Toggle */}
          <button
            onClick={handleNextSpeed}
            className="px-2.5 py-1 rounded-full bg-[#18181B] hover:bg-[#27272A] text-xs font-bold text-[#FF5500] border border-[#27272A] transition"
            title="Change playback speed"
          >
            {playbackRate}x
          </button>
        </div>

        {/* Right Tools: Low Data, Download, Close */}
        <div className="flex items-center justify-end gap-2 w-full sm:w-1/3">
          {/* Low Data Toggle */}
          <button
            onClick={toggleLowDataMode}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition border ${
              lowDataMode
                ? 'bg-[#FF5500]/20 border-[#FF5500] text-[#FF5500]'
                : 'bg-[#18181B] border-[#27272A] text-zinc-300 hover:text-white'
            }`}
            title="Toggle Low-Data Mode for Nigerian mobile connections"
          >
            <Wifi className="w-3.5 h-3.5" />
            <span className="hidden md:inline">{lowDataMode ? 'Low Data (Active)' : 'Low Data Mode'}</span>
          </button>

          {/* Download Button */}
          {currentSermon.audioUrl && (
            <a
              href={currentSermon.audioUrl}
              download={`${currentSermon.slug}.mp3`}
              className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#18181B] hover:bg-[#27272A] text-xs font-medium text-white border border-[#27272A] transition"
              title={`Download audio (${currentSermon.audioFileSizeMb || 12} MB)`}
            >
              <Download className="w-3.5 h-3.5 text-[#FF5500]" />
              <span className="hidden lg:inline">{currentSermon.audioFileSizeMb ? `${currentSermon.audioFileSizeMb}MB` : 'Download'}</span>
            </a>
          )}

          {/* Dismiss Player */}
          <button
            onClick={closePlayer}
            className="p-1.5 rounded-full hover:bg-[#27272A] text-zinc-400 hover:text-white transition ml-1"
            title="Close Player"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
