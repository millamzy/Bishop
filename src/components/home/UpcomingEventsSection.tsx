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
          <div className="space-y-3.5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF5500]/20 border border-[#FF5500]/40 text-[#FFAA40] text-xs sm:text-sm font-bold uppercase tracking-wider">
              <Calendar className="w-4 h-4 text-[#FF5500]" />
              <span>Diocesan Diary &amp; Public Engagements</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white">
              Upcoming Episcopal Itinerary
            </h2>
            <p className="text-zinc-300 text-base sm:text-lg max-w-xl">
              Join Bishop Ndubuisi Obi across the deaneries, parishes, and archdeaconries of Nnewi Diocese.
            </p>
          </div>
          <Link
            href="/book?tab=invitation"
            className="group inline-flex items-center gap-3 pl-7 pr-2.5 py-3 rounded-full bg-[#18181D] hover:bg-[#222228] text-white border border-white/[0.14] text-sm sm:text-base font-bold transition shadow-lg shadow-black/40 active:scale-95"
          >
            <span>Request Bishop for Parish Event</span>
            <span className="w-8 h-8 rounded-full bg-[#FF5500] group-hover:bg-[#E64D00] text-white flex items-center justify-center transition-transform group-hover:translate-x-1 shadow-md shadow-[#FF5500]/30">
              <ArrowRight className="w-4 h-4" />
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
                className="luxury-glass-interactive rounded-[32px] p-8 flex flex-col justify-between group shadow-xl"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <span className="px-3.5 py-1.5 rounded-full bg-[#FF5500]/25 text-[#FFAA40] text-xs font-bold border border-[#FF5500]/40">
                      {event.type}
                    </span>
                    <div className="text-right">
                      <span className="block text-3xl sm:text-4xl font-display font-extrabold text-white leading-none">
                        {dayStr}
                      </span>
                      <span className="block text-xs sm:text-sm uppercase tracking-wider text-[#FF7828] font-bold mt-1">
                        {monthStr} 2026
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-display font-bold text-white group-hover:text-[#FFAA40] transition-colors leading-snug">
                    {event.title}
                  </h3>

                  {event.description && (
                    <p className="text-sm text-zinc-300 line-clamp-2 leading-relaxed">
                      {event.description}
                    </p>
                  )}
                </div>

                <div className="space-y-2.5 pt-6 border-t border-white/[0.08] text-sm text-zinc-300 mt-6">
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-[#FF5500] shrink-0" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-[#FF5500] shrink-0" />
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
