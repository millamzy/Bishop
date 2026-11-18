'use client';

import React from 'react';
import Link from 'next/link';
import { PASTOR_PROFILE } from '@/data/mockData';
import { Calendar, UserCheck, ShieldCheck, CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';

export default function DirectBookingCta() {
  return (
    <section className="py-20 bg-[#0D0D0E] border-b border-[#232326]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[40px] bg-gradient-to-b from-[#FF5500] via-[#C93800] to-[#121214] text-white p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          {/* Subtle glow overlay */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-black/25 backdrop-blur-md border border-white/20 text-white">
                <ShieldCheck className="w-4 h-4 text-white" />
                <span>Episcopal Diary &amp; Conflict-Free Booking</span>
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold text-white leading-tight">
                Schedule a Pastoral Audience or Request the Bishop to Minister
              </h2>

              <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                Whether you need confidential pastoral guidance from the Lord Bishop at Bishopscourt, Nnewi, or wish to invite Bishop Ndubuisi Obi for parish confirmations, church dedications, and synod engagements, our automated diary ensures transparent and clash-free scheduling.
              </p>

              {/* Guarantees */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-white/95">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                  <span>Real-time clash detection engine</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                  <span>Confidential pastoral oversight</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                  <span>Bishopscourt, Phone, or WhatsApp options</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                  <span>Instant reference ID for live status tracking</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-4">
                <Link
                  href="/book?tab=counseling"
                  className="group flex items-center gap-2 pl-5 pr-2 py-2 rounded-full bg-white hover:bg-zinc-100 text-zinc-950 font-bold text-xs sm:text-sm shadow-xl transition active:scale-95"
                >
                  <span>Book Pastoral Audience</span>
                  <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FF5500] group-hover:bg-[#E64D00] text-white flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>

                <Link
                  href="/book?tab=invitation"
                  className="px-5 py-3 rounded-full bg-black/35 hover:bg-black/50 text-white font-bold text-xs sm:text-sm border border-white/25 backdrop-blur-md transition active:scale-95"
                >
                  <span>Submit Diocesan Invitation</span>
                </Link>

                <a
                  href={`https://wa.me/${PASTOR_PROFILE.whatsappNumber}?text=Peace%20be%20unto%20you,%20I%20am%20inquiring%20about%20the%20itinerary%20of%20Bishop%20Ndubuisi%20Obi.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 rounded-full bg-white/15 hover:bg-white/25 text-white font-semibold text-xs transition flex items-center gap-2 border border-white/20"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Desk</span>
                </a>
              </div>
            </div>

            {/* Right Information Box */}
            <div className="lg:col-span-5 bg-[#141416]/90 rounded-[28px] p-7 border border-white/10 space-y-4 shadow-2xl backdrop-blur-md">
              <h3 className="text-base font-bold text-[#FF5500]">
                Bishopscourt Audience Hours &amp; Guidelines
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Bishop Ndubuisi Obi receives clergy, parishioners, and visitors on Tuesdays and Thursdays at Bishopscourt, Nnewi. All pastoral sessions are scheduled in 45-minute confidential blocks.
              </p>

              <div className="p-4 bg-[#0D0D0E] rounded-2xl border border-[#232326] space-y-2 text-xs">
                <div className="flex justify-between items-center text-zinc-400">
                  <span>Regular Audience Days:</span>
                  <strong className="text-white">Tuesdays &amp; Thursdays</strong>
                </div>
                <div className="flex justify-between items-center text-zinc-400">
                  <span>Audience Session Hours:</span>
                  <strong className="text-white">10:00 AM – 3:00 PM</strong>
                </div>
                <div className="flex justify-between items-center text-zinc-400">
                  <span>Direct Secretariat Line:</span>
                  <strong className="text-[#FF5500] font-mono">{PASTOR_PROFILE.phone}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
