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
    <footer className="bg-[#070709] text-zinc-400 border-t border-white/[0.08] pt-20 pb-28 md:pb-20 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] bg-[#FF5500]/05 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Ministry Info */}
          <div className="space-y-5">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#FF5500] shadow-[0_0_20px_rgba(255,85,0,0.3)] shrink-0 bg-black p-0.5">
                <img
                  src={PASTOR_PROFILE.photoUrl}
                  alt={PASTOR_PROFILE.name}
                  className="w-full h-full object-cover object-top rounded-full"
                />
              </div>
              <div>
                <span className="block font-display text-base font-bold text-white leading-tight">
                  Rt. Rev. Ndubuisi Obi
                </span>
                <span className="block text-xs text-[#FFAA40] font-semibold">
                  Bishop, Anglican Diocese of Nnewi
                </span>
              </div>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Equipping God&apos;s people with sound biblical teaching, apostolic revival, and visionary episcopal leadership across Nnewi, Anambra State, and the Church of Nigeria.
            </p>

            {/* Official YouTube Channel Pill */}
            <a
              href={BISHOP_YOUTUBE_CHANNEL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 rounded-2xl bg-[#121215] hover:bg-[#18181D] border border-white/[0.08] hover:border-[#FF5500]/40 text-white text-xs font-semibold transition group shadow-sm"
            >
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#FF5500] group-hover:animate-ping" />
                <span>YouTube: @bishopndubuisiobi6348</span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-[#FF5500] group-hover:translate-x-0.5 transition-transform" />
            </a>

            <div className="flex items-center gap-2.5 text-xs text-zinc-400 bg-white/[0.03] border border-white/[0.06] rounded-2xl p-3">
              <Wifi className="w-4 h-4 shrink-0 text-[#FF5500]" />
              <span>Optimized for low-bandwidth mobile browsing across Nigerian networks.</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-white tracking-widest uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500]" />
              <span>Explore Ministry</span>
            </h3>
            <ul className="space-y-2.5 text-xs text-zinc-400">
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
                  className="text-[#FF7828] hover:text-[#FFAA40] font-semibold transition"
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
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-white tracking-widest uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500]" />
              <span>Gathering Times</span>
            </h3>
            <ul className="space-y-3.5 text-xs text-zinc-400">
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#FF5500] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Cathedral Holy Eucharist</strong>
                  <span>Cathedral Church of St. Mary, Uruagu, Nnewi (07:00 AM &amp; 09:30 AM)</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#FF5500] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Diocesan Clergy School &amp; Intercession</strong>
                  <span>Wednesdays: 09:00 AM – 01:00 PM</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#FF5500] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Episcopal Audiences at Bishopscourt</strong>
                  <span>Tuesdays &amp; Thursdays (Pre-booked audiences only)</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Church Office & Desk */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-white tracking-widest uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500]" />
              <span>Chambers &amp; Office</span>
            </h3>
            <ul className="space-y-3.5 text-xs text-zinc-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF5500] shrink-0 mt-0.5" />
                <span>{PASTOR_PROFILE.officeAddress}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FF5500] shrink-0" />
                <a href={`tel:${PASTOR_PROFILE.phone}`} className="hover:text-white transition">
                  {PASTOR_PROFILE.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FF5500] shrink-0" />
                <span>secretariat@anglican-nnewi.org</span>
              </li>
            </ul>

            <div className="mt-5 pt-4 border-t border-white/[0.08]">
              <span className="block text-xs text-zinc-400 mb-2.5 font-medium">Connect with Diocese of Nnewi</span>
              <div className="flex items-center gap-3">
                <a
                  href={BISHOP_YOUTUBE_CHANNEL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#FF5500] hover:bg-[#E64D00] text-white flex items-center justify-center transition shadow-md shadow-[#FF5500]/25"
                  title="YouTube Channel"
                >
                  <Video className="w-4 h-4" />
                </a>
                <a
                  href={PASTOR_PROFILE.socials.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-zinc-300 hover:text-white flex items-center justify-center transition border border-white/[0.1]"
                  title="Telegram Sermons Channel"
                >
                  <Send className="w-4 h-4" />
                </a>
                <a
                  href={PASTOR_PROFILE.socials.podcast}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-zinc-300 hover:text-white flex items-center justify-center transition border border-white/[0.1]"
                  title="Podcast"
                >
                  <Radio className="w-4 h-4" />
                </a>
                <a
                  href={PASTOR_PROFILE.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-zinc-300 hover:text-white flex items-center justify-center transition border border-white/[0.1]"
                  title="Facebook"
                >
                  <Globe className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>© 2026 Anglican Diocese of Nnewi (Church of Nigeria). All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/admin" className="hover:text-white flex items-center gap-1.5 text-[#FF7828] font-semibold transition">
              <Shield className="w-3.5 h-3.5" />
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
