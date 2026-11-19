'use client';

import React from 'react';
import Link from 'next/link';
import { PASTOR_PROFILE } from '@/data/mockData';
import { Calendar, UserCheck, ShieldCheck, CheckCircle2, MessageCircle, ArrowRight, Clock, MapPin, Phone } from 'lucide-react';

export default function DirectBookingCta() {
  return (
    <section className="py-16 sm:py-28 lg:py-36 bg-[#0A0A0C] border-b border-white/[0.06] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[#FF5500]/12 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1536px] mx-auto px-3.5 sm:px-6 lg:px-10 relative z-10">
        <div className="rounded-[28px] sm:rounded-[48px] lg:rounded-[64px] bg-gradient-to-b from-[#1A1A20] via-[#121215] to-[#0D0D0E] border border-white/[0.12] text-white p-5 min-[400px]:p-7 sm:p-12 lg:p-20 shadow-[0_35px_100px_rgba(0,0,0,0.85)] relative overflow-hidden">
          {/* Luminous Ember Mesh Accent at top of card */}
          <div className="absolute top-0 inset-x-0 h-1.5 sm:h-2 bg-gradient-to-r from-transparent via-[#FF5500] to-transparent opacity-90" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF5500]/15 rounded-full blur-[130px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-7">
              <span className="inline-flex items-center gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold bg-[#FF5500]/20 border border-[#FF5500]/40 text-[#FFAA40] shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF5500] shrink-0" />
                <span>Episcopal Diary &amp; Conflict-Free Booking Engine</span>
              </span>

              <h2 className="text-2xl min-[400px]:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-extrabold text-white leading-[1.08] tracking-tight break-words">
                Schedule a Pastoral Audience or Request the Bishop to Minister
              </h2>

              <p className="text-zinc-200 text-sm sm:text-lg lg:text-xl leading-relaxed">
                Whether you need confidential pastoral guidance from the Lord Bishop at Bishopscourt, Nnewi, or wish to invite Bishop Ndubuisi Obi for parish confirmations, synod charges, and church dedications, our automated diary ensures transparent and clash-free scheduling.
              </p>

              {/* Guarantees with Responsive Captions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2 text-xs sm:text-base text-zinc-200">
                <div className="flex items-center gap-2.5 sm:gap-3.5">
                  <CheckCircle2 className="w-4 h-4 sm:w-6 sm:h-6 text-[#FF5500] shrink-0" />
                  <span>Real-time diary clash detection</span>
                </div>
                <div className="flex items-center gap-2.5 sm:gap-3.5">
                  <CheckCircle2 className="w-4 h-4 sm:w-6 sm:h-6 text-[#FF5500] shrink-0" />
                  <span>Confidential pastoral oversight</span>
                </div>
                <div className="flex items-center gap-2.5 sm:gap-3.5">
                  <CheckCircle2 className="w-4 h-4 sm:w-6 sm:h-6 text-[#FF5500] shrink-0" />
                  <span>Bishopscourt, Phone, or WhatsApp options</span>
                </div>
                <div className="flex items-center gap-2.5 sm:gap-3.5">
                  <CheckCircle2 className="w-4 h-4 sm:w-6 sm:h-6 text-[#FF5500] shrink-0" />
                  <span>Instant reference ID for live tracking</span>
                </div>
              </div>

              {/* Action Buttons (Responsive Layout) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5 pt-3 sm:pt-4 w-full sm:w-auto">
                <Link
                  href="/book?tab=counseling"
                  className="group flex items-center justify-between sm:justify-start gap-3.5 pl-6 sm:pl-8 pr-2.5 sm:pr-3.5 py-3.5 sm:py-5 rounded-full bg-white hover:bg-zinc-100 text-zinc-950 font-bold text-sm sm:text-lg shadow-[0_15px_45px_rgba(255,255,255,0.25)] hover:shadow-[0_20px_50px_rgba(255,85,0,0.4)] transition-all duration-300 active:scale-95"
                >
                  <span>Book Pastoral Audience</span>
                  <span className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#FF5500] group-hover:bg-[#E64D00] text-white flex items-center justify-center transition-transform group-hover:translate-x-1.5 shadow-md shadow-[#FF5500]/40 shrink-0">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </span>
                </Link>

                <Link
                  href="/book?tab=invitation"
                  className="px-6 sm:px-8 py-3.5 sm:py-5 rounded-full bg-white/[0.08] hover:bg-white/[0.14] text-white font-bold text-sm sm:text-lg border border-white/[0.14] backdrop-blur-xl transition active:scale-95 shadow-sm text-center"
                >
                  <span>Submit Diocesan Invitation</span>
                </Link>

                <a
                  href={`https://wa.me/${PASTOR_PROFILE.whatsappNumber}?text=Peace%20be%20unto%20you,%20I%20am%20inquiring%20about%20the%20itinerary%20of%20Bishop%20Ndubuisi%20Obi.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 sm:px-7 py-3.5 sm:py-5 rounded-full bg-emerald-950/40 hover:bg-emerald-950/60 text-emerald-300 font-bold text-sm sm:text-lg transition flex items-center justify-center gap-2.5 sm:gap-3 border border-emerald-500/30"
                >
                  <MessageCircle className="w-4 h-4 sm:w-6 sm:h-6 text-emerald-400 shrink-0" />
                  <span>WhatsApp Desk</span>
                </a>
              </div>
            </div>

            {/* Right Information Box with Responsive Captions */}
            <div className="lg:col-span-5 luxury-glass rounded-[28px] sm:rounded-[40px] p-5 sm:p-8 lg:p-12 space-y-4 sm:space-y-6 shadow-2xl">
              <h3 className="text-lg sm:text-xl font-display font-bold text-[#FFAA40] flex items-center gap-2.5 sm:gap-3">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF5500] shrink-0" />
                <span>Bishopscourt Audience Hours &amp; Guidelines</span>
              </h3>
              <p className="text-xs sm:text-base text-zinc-200 leading-relaxed">
                Bishop Ndubuisi Obi receives clergy, parishioners, and official visitors on Tuesdays and Thursdays at Bishopscourt, Nnewi. All pastoral sessions are scheduled in 45-minute confidential blocks.
              </p>

              <div className="p-4 sm:p-6 bg-[#09090B] rounded-2xl sm:rounded-3xl border border-white/[0.08] space-y-2.5 sm:space-y-3.5 text-xs sm:text-base">
                <div className="flex justify-between items-center text-zinc-300">
                  <span>Regular Audience Days:</span>
                  <strong className="text-white font-bold">Tuesdays &amp; Thursdays</strong>
                </div>
                <div className="flex justify-between items-center text-zinc-300">
                  <span>Audience Session Hours:</span>
                  <strong className="text-white font-bold">10:00 AM – 3:00 PM</strong>
                </div>
                <div className="flex justify-between items-center text-zinc-300">
                  <span>Direct Registry Line:</span>
                  <strong className="text-[#FFAA40] font-mono font-bold text-sm sm:text-lg">{PASTOR_PROFILE.phone}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
