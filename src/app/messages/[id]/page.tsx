import React, { Suspense } from 'react';
import MessageDetailClient from '@/components/messages/MessageDetailClient';
import { INITIAL_MESSAGES } from '@/data/mockData';

export function generateStaticParams() {
  return INITIAL_MESSAGES.map((m) => ({ id: m.id }));
}

export async function generateMetadata(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;
  const sermon = INITIAL_MESSAGES.find((m) => m.id === id || m.slug === id);

  return {
    title: sermon ? `${sermon.title} | Bishop Ndubuisi Obi` : 'Sermon Teaching',
    description: sermon ? sermon.summary : 'Audio sermon and written study teaching by The Rt. Rev. Ndubuisi Chukwuka Obinna Obi, Bishop of Nnewi.',
  };
}

export default async function MessageDetailPage(props: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await props.params;

  return (
    <div className="flex-1 bg-[#0D0D0E] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Suspense fallback={<div className="text-slate-400 py-12">Loading sermon teaching...</div>}>
          <MessageDetailClient messageId={id} />
        </Suspense>
      </div>
    </div>
  );
}

