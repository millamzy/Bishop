'use client';

import React from 'react';
import Link from 'next/link';
import { PASTOR_PROFILE } from '@/data/mockData';
import { Calendar, UserCheck, ShieldCheck, CheckCircle2, MessageCircle, ArrowRight, Clock, MapPin, Phone } from 'lucide-react';

export default function DirectBookingCta() {
  return (
    <section className="py-24 bg-[#0A0A0C] border-b border-white/[0.06] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#FF5500]/12 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-[40px] bg-gradient-to-b from-[#18181D] via-[#121215] to-[#0D0D0E] border border-white/[0.12] text-white p-8 sm:p-14 shadow-[0_30px_90px_rgba(0,0,0,0.8)] relative overflow-hidden">
          {/* Luminous Ember Mesh Accent at top of card */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#FF5500] to-transparent opacity-80" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF5500]/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#FF5500]/15 border border-[#FF5500]/30 text-[#FFAA40]">
                <ShieldCheck className="w-4 h-4 text-[#FF5500]" />
                <span>Episcopal Diary &amp; Conflict-Free Booking Engine</span>
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white leading-tight">
                Schedule a Pastoral Audience or Request the Bishop to Minister
              </h2>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                Whether you need confidential pastoral guidance from the Lord Bishop at Bishopscourt, Nnewi, or wish to invite Bishop Ndubuisi Obi for parish confirmations, synod charges, and church dedications, our automated diary ensures transparent and clash-free scheduling.
              </p>

              {/* Guarantees */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-zinc-300">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5500] shrink-0" />
                  <span>Real-time diary clash detection</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5500] shrink-0" />
                  <span>Confidential pastoral oversight</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5500] shrink-0" />
                  <span>Bishopscourt, Phone, or WhatsApp options</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5500] shrink-0" />
                  <span>Instant reference ID for live tracking</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="/book?tab=counseling"
                  className="group flex items-center gap-3 pl-6 pr-2.5 py-2.5 rounded-full bg-white hover:bg-zinc-100 text-zinc-950 font-bold text-xs sm:text-sm shadow-[0_10px_35px_rgba(255,255,255,0.2)] hover:shadow-[0_15px_40px_rgba(255,85,0,0.3)] transition-all duration-300 active:scale-95"
                >
                  <span>Book Pastoral Audience</span>
                  <span className="w-8 h-8 rounded-full bg-[#FF5500] group-hover:bg-[#E64D00] text-white flex items-center justify-center transition-transform group-hover:translate-x-1 shadow-md shadow-[#FF5500]/30">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>

                <Link
                  href="/book?tab=invitation"
                  className="px-6 py-3.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-white font-bold text-xs sm:text-sm border border-white/[0.12] backdrop-blur-xl transition active:scale-95 shadow-sm"
                >
                  <span>Submit Diocesan Invitation</span>
                </Link>

                <a
                  href={`https://wa.me/${PASTOR_PROFILE.whatsappNumber}?text=Peace%20be%20unto%20you,%20I%20am%20inquiring%20about%20the%20itinerary%20of%20Bishop%20Ndubuisi%20Obi.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-full bg-emerald-950/40 hover:bg-emerald-950/60 text-emerald-300 font-semibold text-xs transition flex items-center gap-2 border border-emerald-500/30"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Desk</span>
                </a>
              </div>
            </div>

            {/* Right Information Box */}
            <div className="lg:col-span-5 luxury-glass rounded-[32px] p-8 space-y-4 shadow-2xl">
              <h3 className="text-base font-display font-bold text-[#FFAA40] flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#FF5500]" />
                <span>Bishopscourt Audience Hours &amp; Guidelines</span>
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Bishop Ndubuisi Obi receives clergy, parishioners, and official visitors on Tuesdays and Thursdays at Bishopscourt, Nnewi. All pastoral sessions are scheduled in 45-minute confidential blocks.
              </p>

              <div className="p-4 bg-[#09090B] rounded-2xl border border-white/[0.08] space-y-2.5 text-xs">
                <div className="flex justify-between items-center text-zinc-400">
                  <span>Regular Audience Days:</span>
                  <strong className="text-white font-semibold">Tuesdays &amp; Thursdays</strong>
                </div>
                <div className="flex justify-between items-center text-zinc-400">
                  <span>Audience Session Hours:</span>
                  <strong className="text-white font-semibold">10:00 AM – 3:00 PM</strong>
                </div>
                <div className="flex justify-between items-center text-zinc-400">
                  <span>Direct Registry Line:</span>
                  <strong className="text-[#FF7828] font-mono font-bold">{PASTOR_PROFILE.phone}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
