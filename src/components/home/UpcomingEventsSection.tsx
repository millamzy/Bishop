'use client';

import React from 'react';
import Link from 'next/link';
import { INITIAL_ITINERARY } from '@/data/mockData';
import { Calendar, MapPin, Clock, ArrowRight, Church } from 'lucide-react';

export default function UpcomingEventsSection() {
  const publicEvents = INITIAL_ITINERARY.filter((e) => e.isPublic);

  return (
    <section className="py-20 bg-[#0D0D0E] border-b border-[#232326]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-[#FF5500] text-sm font-bold tracking-wide uppercase block mb-1">
              Diocesan Diary &amp; Public Engagements
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-white">
              Upcoming Episcopal Itinerary
            </h2>
            <p className="text-zinc-400 text-sm mt-1">
              Join Bishop Ndubuisi Obi across the parishes and archdeaconries of Nnewi Diocese.
            </p>
          </div>
          <Link
            href="/book?tab=invitation"
            className="group inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full bg-[#1C1C20] hover:bg-[#25252B] text-white border border-[#2E2E34] text-xs font-bold transition shadow-md"
          >
            <span>Request Bishop for Your Parish Event</span>
            <span className="w-6 h-6 rounded-full bg-[#FF5500] text-white flex items-center justify-center transition-transform group-hover:translate-x-0.5">
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
                className="rounded-[28px] bg-[#141416] border border-[#232326] hover:border-[#FF5500] p-6 flex flex-col justify-between transition-all group shadow-xl hover:shadow-2xl hover:shadow-[#FF5500]/5"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#FF5500]/15 text-[#FF5500] text-[11px] font-bold border border-[#FF5500]/30">
                      {event.type}
                    </span>
                    <div className="text-right">
                      <span className="block text-2xl font-sans font-bold text-white leading-none">
                        {dayStr}
                      </span>
                      <span className="block text-xs uppercase tracking-wider text-[#FF5500] font-bold">
                        {monthStr} 2026
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-[#FF5500] transition-colors mb-2">
                    {event.title}
                  </h3>

                  {event.description && (
                    <p className="text-xs text-zinc-400 mb-4 line-clamp-2 leading-relaxed">
                      {event.description}
                    </p>
                  )}
                </div>

                <div className="space-y-2 pt-4 border-t border-[#232326] text-xs text-zinc-400">
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
