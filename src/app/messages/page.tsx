import React from 'react';
import MessagesLibraryView from '@/components/messages/MessagesLibraryView';

export const metadata = {
  title: 'Messages Library | Audio Sermons & Written Teachings',
  description:
    'Search and stream audio sermons, or read written expository transcripts by The Rt. Rev. Ndubuisi Chukwuka Obinna Obi, Bishop of Nnewi. Free MP3 downloads optimized for low-data mobile connections.',
};

export default function MessagesPage() {
  return (
    <div className="flex-1 bg-[#0D0D0E] py-16 sm:py-24">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10">
        <MessagesLibraryView />
      </div>
    </div>
  );
}

