'use client';

import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import { SermonMessage } from '@/types';

interface AudioPlayerContextType {
  currentSermon: SermonMessage | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  playbackRate: number;
  lowDataMode: boolean;
  playSermon: (sermon: SermonMessage) => void;
  togglePlayPause: () => void;
  seek: (seconds: number) => void;
  setSpeed: (rate: number) => void;
  toggleLowDataMode: () => void;
  closePlayer: () => void;
}

const AudioPlayerContext = createContext<AudioPlayerContextType | undefined>(undefined);

export function AudioPlayerProvider({ children }: { children: React.ReactNode }) {
  const [currentSermon, setCurrentSermon] = useState<SermonMessage | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [playbackRate, setPlaybackRate] = useState<number>(1);
  const [lowDataMode, setLowDataMode] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize Audio element once in browser
  useEffect(() => {
    const audio = new Audio();
    audioRef.current = audio;

    const onTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const onLoadedMetadata = () => {
      setDuration(audio.duration || 0);
    };

    const onEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    const onError = () => {
      setIsPlaying(false);
    };

    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('loadedmetadata', onLoadedMetadata);
    audio.addEventListener('ended', onEnded);
    audio.addEventListener('error', onError);

    // Read lowDataMode preference from localStorage
    const savedLowData = localStorage.getItem('bishop_low_data_mode');
    if (savedLowData === 'true') {
      setLowDataMode(true);
    }

    return () => {
      audio.pause();
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('loadedmetadata', onLoadedMetadata);
      audio.removeEventListener('ended', onEnded);
      audio.removeEventListener('error', onError);
    };
  }, []);

  const playSermon = (sermon: SermonMessage) => {
    if (!audioRef.current) return;
    if (currentSermon?.id === sermon.id) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
      return;
    }

    setCurrentSermon(sermon);
    const audioSrc = sermon.audioUrl || 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
    audioRef.current.src = audioSrc;
    audioRef.current.playbackRate = playbackRate;
    audioRef.current.play().then(() => {
      setIsPlaying(true);
    }).catch(() => {
      setIsPlaying(false);
    });
  };

  const togglePlayPause = () => {
    if (!audioRef.current || !currentSermon) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {});
    }
  };

  const seek = (seconds: number) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = seconds;
    setCurrentTime(seconds);
  };

  const setSpeed = (rate: number) => {
    setPlaybackRate(rate);
    if (audioRef.current) {
      audioRef.current.playbackRate = rate;
    }
  };

  const toggleLowDataMode = () => {
    const next = !lowDataMode;
    setLowDataMode(next);
    localStorage.setItem('bishop_low_data_mode', String(next));
  };

  const closePlayer = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setIsPlaying(false);
    setCurrentSermon(null);
    setCurrentTime(0);
  };

  return (
    <AudioPlayerContext.Provider
      value={{
        currentSermon,
        isPlaying,
        currentTime,
        duration,
        playbackRate,
        lowDataMode,
        playSermon,
        togglePlayPause,
        seek,
        setSpeed,
        toggleLowDataMode,
        closePlayer
      }}
    >
      {children}
    </AudioPlayerContext.Provider>
  );
}

export function useAudioPlayer() {
  const context = useContext(AudioPlayerContext);
  if (!context) {
    throw new Error('useAudioPlayer must be used within an AudioPlayerProvider');
  }
  return context;
}

