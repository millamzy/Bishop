'use client';

import React from 'react';
import Link from 'next/link';
import { INITIAL_ITINERARY } from '@/data/mockData';
import { Calendar, MapPin, Clock, ArrowRight, Church, Sparkles } from 'lucide-react';

export default function UpcomingEventsSection() {
  const publicEvents = INITIAL_ITINERARY.filter((e) => e.isPublic);

  return (
    <section className="py-24 bg-[#0D0D0E] border-b border-white/[0.06] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF5500]/15 border border-[#FF5500]/30 text-[#FFAA40] text-xs font-bold uppercase tracking-wider">
              <Calendar className="w-3.5 h-3.5 text-[#FF5500]" />
              <span>Diocesan Diary &amp; Public Engagements</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white">
              Upcoming Episcopal Itinerary
            </h2>
            <p className="text-zinc-400 text-sm max-w-xl">
              Join Bishop Ndubuisi Obi across the deaneries, parishes, and archdeaconries of Nnewi Diocese.
            </p>
          </div>
          <Link
            href="/book?tab=invitation"
            className="group inline-flex items-center gap-2.5 pl-6 pr-2 py-2 rounded-full bg-[#18181D] hover:bg-[#222228] text-white border border-white/[0.12] text-xs font-bold transition shadow-lg shadow-black/40"
          >
            <span>Request Bishop for Parish Event</span>
            <span className="w-7 h-7 rounded-full bg-[#FF5500] group-hover:bg-[#E64D00] text-white flex items-center justify-center transition-transform group-hover:translate-x-0.5 shadow-md shadow-[#FF5500]/30">
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publicEvents.map((event) => {
            const dateObj = new Date(event.date);
            const monthStr = dateObj.toLocaleDateString('en-US', { month: 'short' });
            const dayStr = dateObj.toLocaleDateString('en-US', { day: '2-digit' });

            return (
              <div
                key={event.id}
                className="luxury-glass-interactive rounded-[32px] p-7 flex flex-col justify-between group shadow-xl"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <span className="px-3 py-1 rounded-full bg-[#FF5500]/20 text-[#FFAA40] text-[11px] font-bold border border-[#FF5500]/30">
                      {event.type}
                    </span>
                    <div className="text-right">
                      <span className="block text-3xl font-display font-extrabold text-white leading-none">
                        {dayStr}
                      </span>
                      <span className="block text-xs uppercase tracking-wider text-[#FF7828] font-bold mt-0.5">
                        {monthStr} 2026
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg font-display font-bold text-white group-hover:text-[#FFAA40] transition-colors leading-snug">
                    {event.title}
                  </h3>

                  {event.description && (
                    <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                      {event.description}
                    </p>
                  )}
                </div>

                <div className="space-y-2 pt-5 border-t border-white/[0.08] text-xs text-zinc-400 mt-5">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#FF5500] shrink-0" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#FF5500] shrink-0" />
                    <span className="truncate">{event.location}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
