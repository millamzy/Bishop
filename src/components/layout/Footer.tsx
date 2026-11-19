'use client';

import React from 'react';
import Link from 'next/link';
import { PASTOR_PROFILE, BISHOP_YOUTUBE_CHANNEL } from '@/data/mockData';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Video,
  Radio,
  Globe,
  Shield,
  Wifi,
  Church,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#070709] text-zinc-400 border-t border-white/[0.08] pt-16 sm:pt-24 pb-28 md:pb-24 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1100px] h-[350px] bg-[#FF5500]/06 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 space-y-12 sm:space-y-18">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-14">
          {/* Column 1: Ministry Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#FF5500] shadow-[0_0_25px_rgba(255,85,0,0.35)] shrink-0 bg-black p-0.5">
                <img
                  src={PASTOR_PROFILE.photoUrl}
                  alt={PASTOR_PROFILE.name}
                  className="w-full h-full object-cover object-top rounded-full"
                />
              </div>
              <div>
                <span className="block font-display text-lg font-bold text-white leading-tight">
                  Rt. Rev. Ndubuisi Obi
                </span>
                <span className="block text-sm text-[#FFAA40] font-bold">
                  Bishop, Anglican Diocese of Nnewi
                </span>
              </div>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Equipping God&apos;s people with sound biblical teaching, apostolic revival, and visionary episcopal leadership across Nnewi, Anambra State, and the Church of Nigeria.
            </p>

            {/* Official YouTube Channel Pill */}
            <a
              href={BISHOP_YOUTUBE_CHANNEL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-2xl bg-[#121215] hover:bg-[#18181D] border border-white/[0.08] hover:border-[#FF5500]/40 text-white text-sm font-semibold transition group shadow-sm"
            >
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5500] group-hover:animate-ping" />
                <span>YouTube: @bishopndubuisiobi6348</span>
              </div>
              <ArrowRight className="w-4 h-4 text-[#FF5500] group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="flex items-center gap-3 text-xs sm:text-sm text-zinc-400 bg-white/[0.03] border border-white/[0.06] rounded-2xl p-4">
              <Wifi className="w-4 h-4 shrink-0 text-[#FF5500]" />
              <span>Optimized for low-bandwidth mobile browsing across Nigerian networks.</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-5">
            <h3 className="text-xs sm:text-sm font-bold text-white tracking-widest uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF5500]" />
              <span>Explore Ministry</span>
            </h3>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Bishop Ndubuisi Obi
                </Link>
              </li>
              <li>
                <Link href="/messages" className="hover:text-white transition">
                  Synod Charges &amp; Audio Sermons
                </Link>
              </li>
              <li>
                <a
                  href={BISHOP_YOUTUBE_CHANNEL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FF7828] hover:text-[#FFAA40] font-bold transition"
                >
                  YouTube Video Sermons Channel
                </a>
              </li>
              <li>
                <Link href="/book" className="hover:text-white transition">
                  Episcopal Pastoral Audience
                </Link>
              </li>
              <li>
                <Link href="/book?tab=invitation" className="hover:text-white transition">
                  Invite Bishop for Diocesan Event
                </Link>
              </li>
              <li>
                <Link href="/bookings/track" className="hover:text-white transition">
                  Track Your Booking Status
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Bishopscourt Secretariat
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Weekly Gathering Times */}
          <div className="space-y-5">
            <h3 className="text-xs sm:text-sm font-bold text-white tracking-widest uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF5500]" />
              <span>Gathering Times</span>
            </h3>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#FF5500] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-bold">Cathedral Holy Eucharist</strong>
                  <span className="text-xs sm:text-sm">Cathedral Church of St. Mary, Uruagu, Nnewi (07:00 AM &amp; 09:30 AM)</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#FF5500] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-bold">Diocesan Clergy School &amp; Intercession</strong>
                  <span className="text-xs sm:text-sm">Wednesdays: 09:00 AM – 01:00 PM</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#FF5500] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-bold">Episcopal Audiences at Bishopscourt</strong>
                  <span className="text-xs sm:text-sm">Tuesdays &amp; Thursdays (Pre-booked audiences only)</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Church Office & Desk */}
          <div className="space-y-5">
            <h3 className="text-xs sm:text-sm font-bold text-white tracking-widest uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF5500]" />
              <span>Chambers &amp; Office</span>
            </h3>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FF5500] shrink-0 mt-0.5" />
                <span>{PASTOR_PROFILE.officeAddress}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#FF5500] shrink-0" />
                <a href={`tel:${PASTOR_PROFILE.phone}`} className="hover:text-white transition font-medium">
                  {PASTOR_PROFILE.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#FF5500] shrink-0" />
                <span>secretariat@anglican-nnewi.org</span>
              </li>
            </ul>

            <div className="mt-6 pt-5 border-t border-white/[0.08]">
              <span className="block text-xs sm:text-sm text-zinc-400 mb-3 font-medium">Connect with Diocese of Nnewi</span>
              <div className="flex items-center gap-3.5">
                <a
                  href={BISHOP_YOUTUBE_CHANNEL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#FF5500] hover:bg-[#E64D00] text-white flex items-center justify-center transition shadow-md shadow-[#FF5500]/25"
                  title="YouTube Channel"
                >
                  <Video className="w-5 h-5" />
                </a>
                <a
                  href={PASTOR_PROFILE.socials.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-zinc-300 hover:text-white flex items-center justify-center transition border border-white/[0.1]"
                  title="Telegram Sermons Channel"
                >
                  <Send className="w-5 h-5" />
                </a>
                <a
                  href={PASTOR_PROFILE.socials.podcast}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-zinc-300 hover:text-white flex items-center justify-center transition border border-white/[0.1]"
                  title="Podcast"
                >
                  <Radio className="w-5 h-5" />
                </a>
                <a
                  href={PASTOR_PROFILE.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-zinc-300 hover:text-white flex items-center justify-center transition border border-white/[0.1]"
                  title="Facebook"
                >
                  <Globe className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-zinc-500 gap-4">
          <p>© 2026 Anglican Diocese of Nnewi (Church of Nigeria). All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/admin" className="hover:text-white flex items-center gap-1.5 text-[#FF7828] font-bold transition">
              <Shield className="w-4 h-4" />
              <span>Secretariat Staff Portal</span>
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-zinc-300 transition">
              Pastoral Registry &amp; Care
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
