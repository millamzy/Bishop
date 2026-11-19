'use client';

import React from 'react';
import { useAudioPlayer } from '@/context/AudioPlayerContext';
import { Play, Pause, Download, X, Volume2, FastForward, Wifi, ShieldAlert, Sparkles } from 'lucide-react';

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
    <div className="fixed bottom-5 inset-x-4 max-w-6xl mx-auto z-50">
      <div className="luxury-glass rounded-[28px] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.95)] border border-white/[0.14] text-white transition-all backdrop-blur-2xl">
        {/* Glowing Progress Track */}
        <div className="relative w-full h-2 bg-black/60 cursor-pointer group">
          <div
            className="h-full bg-gradient-to-r from-[#FF5500] via-[#FF7828] to-[#FFAA40] transition-all relative"
            style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
          >
            <span className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-white shadow-[0_0_12px_#FF5500] opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
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

        <div className="px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Sermon Title & Meta */}
          <div className="flex items-center gap-4 w-full sm:w-1/3 min-w-0">
            <div className="w-11 h-11 rounded-2xl bg-[#FF5500]/15 border border-[#FF5500]/30 flex items-center justify-center shrink-0 text-[#FF5500] shadow-sm">
              <Volume2 className="w-6 h-6" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-base font-display font-bold truncate text-white">{currentSermon.title}</p>
              <p className="text-xs sm:text-sm text-[#FFAA40] truncate">
                {currentSermon.series} • {currentSermon.scriptureReference}
              </p>
            </div>
          </div>

          {/* Playback Controls */}
          <div className="flex items-center justify-center gap-3.5 sm:gap-5 w-full sm:w-auto">
            <span className="text-xs sm:text-sm font-mono text-zinc-400 w-12 text-right">
              {formatTime(currentTime)}
            </span>

            <button
              onClick={togglePlayPause}
              className="w-12 h-12 rounded-full bg-[#FF5500] hover:bg-[#E64D00] text-white flex items-center justify-center transition-all duration-300 active:scale-95 shadow-[0_0_25px_rgba(255,85,0,0.5)] hover:shadow-[0_0_35px_rgba(255,85,0,0.65)]"
              title={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-0.5" />}
            </button>

            <span className="text-xs sm:text-sm font-mono text-zinc-400 w-12">
              {formatTime(duration || currentSermon.durationMinutes * 60)}
            </span>

            {/* Speed Toggle */}
            <button
              onClick={handleNextSpeed}
              className="px-3 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-xs sm:text-sm font-bold text-[#FFAA40] border border-white/[0.1] transition"
              title="Change playback speed"
            >
              {playbackRate}x
            </button>
          </div>

          {/* Right Tools: Low Data, Download, Close */}
          <div className="flex items-center justify-end gap-2.5 w-full sm:w-1/3">
            {/* Low Data Toggle */}
            <button
              onClick={toggleLowDataMode}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition border ${
                lowDataMode
                  ? 'bg-[#FF5500]/20 border-[#FF5500] text-[#FFAA40]'
                  : 'bg-white/[0.06] border-white/[0.1] text-zinc-300 hover:text-white'
              }`}
              title="Toggle Low-Data Mode for Nigerian mobile connections"
            >
              <Wifi className="w-4 h-4" />
              <span className="hidden md:inline">{lowDataMode ? 'Low Data (Active)' : 'Low Data Mode'}</span>
            </button>

            {/* Download Button */}
            {currentSermon.audioUrl && (
              <a
                href={currentSermon.audioUrl}
                download={`${currentSermon.slug}.mp3`}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-xs sm:text-sm font-medium text-white border border-white/[0.1] transition"
                title={`Download audio (${currentSermon.audioFileSizeMb || 12} MB)`}
              >
                <Download className="w-4 h-4 text-[#FF5500]" />
                <span className="hidden lg:inline">{currentSermon.audioFileSizeMb ? `${currentSermon.audioFileSizeMb}MB` : 'Download'}</span>
              </a>
            )}

            {/* Dismiss Player */}
            <button
              onClick={closePlayer}
              className="p-2 rounded-full hover:bg-white/[0.1] text-zinc-400 hover:text-white transition ml-1"
              title="Close Player"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
