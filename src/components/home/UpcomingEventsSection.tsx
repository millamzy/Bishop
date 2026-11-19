'use client';

import React from 'react';
import Link from 'next/link';
import { INITIAL_ITINERARY } from '@/data/mockData';
import { Calendar, MapPin, Clock, ArrowRight, Church, Sparkles } from 'lucide-react';

export default function UpcomingEventsSection() {
  const publicEvents = INITIAL_ITINERARY.filter((e) => e.isPublic);

  return (
    <section className="py-28 sm:py-36 bg-[#0D0D0E] border-b border-white/[0.06] relative overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10 space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[#FF5500]/20 border border-[#FF5500]/40 text-[#FFAA40] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm">
              <Calendar className="w-4 h-4 text-[#FF5500]" />
              <span>Diocesan Diary &amp; Public Engagements</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight">
              Upcoming Episcopal Itinerary
            </h2>
            <p className="text-zinc-300 text-lg sm:text-xl max-w-2xl leading-relaxed">
              Join Bishop Ndubuisi Obi across the deaneries, parishes, and archdeaconries of Nnewi Diocese.
            </p>
          </div>
          <Link
            href="/book?tab=invitation"
            className="group inline-flex items-center gap-3.5 pl-8 pr-3 py-4 rounded-full bg-[#18181D] hover:bg-[#222228] text-white border border-white/[0.14] text-base sm:text-lg font-bold transition shadow-xl shadow-black/50 active:scale-95 shrink-0"
          >
            <span>Request Bishop for Parish Event</span>
            <span className="w-9 h-9 rounded-full bg-[#FF5500] group-hover:bg-[#E64D00] text-white flex items-center justify-center transition-transform group-hover:translate-x-1 shadow-md shadow-[#FF5500]/30">
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publicEvents.map((event) => {
            const dateObj = new Date(event.date);
            const monthStr = dateObj.toLocaleDateString('en-US', { month: 'short' });
            const dayStr = dateObj.toLocaleDateString('en-US', { day: '2-digit' });

            return (
              <div
                key={event.id}
                className="luxury-glass-interactive rounded-[36px] p-9 sm:p-10 flex flex-col justify-between group shadow-xl"
              >
                <div className="space-y-5">
                  <div className="flex items-start justify-between gap-4">
                    <span className="px-4 py-1.5 rounded-full bg-[#FF5500]/25 text-[#FFAA40] text-xs sm:text-sm font-bold border border-[#FF5500]/40">
                      {event.type}
                    </span>
                    <div className="text-right">
                      <span className="block text-4xl sm:text-5xl font-display font-extrabold text-white leading-none">
                        {dayStr}
                      </span>
                      <span className="block text-xs sm:text-sm uppercase tracking-wider text-[#FF7828] font-bold mt-1.5">
                        {monthStr} 2026
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white group-hover:text-[#FFAA40] transition-colors leading-snug">
                    {event.title}
                  </h3>

                  {event.description && (
                    <p className="text-base text-zinc-300 line-clamp-3 leading-relaxed">
                      {event.description}
                    </p>
                  )}
                </div>

                <div className="space-y-3 pt-7 border-t border-white/[0.08] text-sm sm:text-base text-zinc-300 mt-8">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-[#FF5500] shrink-0" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-[#FF5500] shrink-0" />
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
