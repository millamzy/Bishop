'use client';

import React, { useState } from 'react';
import { PASTOR_PROFILE } from '@/data/mockData';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Video,
  Radio,
  Globe,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Church,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="flex-1 bg-[#0D0D0E] text-white py-16 sm:py-24 min-h-screen">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10 space-y-20">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[#18181B] border border-[#27272A] text-[#FF5500] text-xs sm:text-sm font-bold uppercase tracking-wider">
            <Church className="w-4 h-4 text-[#FF5500]" />
            <span>Bishopscourt &amp; Diocesan Secretariat</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight">
            Contact the Episcopal Office
          </h1>
          <p className="text-zinc-300 text-lg sm:text-xl leading-relaxed">
            Reach out to the pastoral secretariat of the Anglican Diocese of Nnewi for episcopal audiences, synod invitations, prayer support, or official correspondence.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* WhatsApp Direct Desk */}
          <div className="rounded-[36px] luxury-glass-interactive p-8 sm:p-10 flex flex-col justify-between space-y-6 shadow-2xl transition group">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-950/60 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
                <MessageCircle className="w-7 h-7" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white">Direct WhatsApp Desk</h3>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                The fastest way to reach the Bishopscourt administrative secretary for prompt confirmation or urgent diocesan correspondence.
              </p>
            </div>
            <a
              href={`https://wa.me/${PASTOR_PROFILE.whatsappNumber}?text=Good%20day,%20I%20am%20reaching%20out%20to%20the%20Diocesan%20Secretariat%20of%20Bishop%20Ndubuisi%20Obi.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base transition shadow-lg shadow-emerald-950/40"
            >
              Open WhatsApp Chat
            </a>
          </div>

          {/* Bishopscourt Helpline */}
          <div className="rounded-[36px] luxury-glass-interactive p-8 sm:p-10 flex flex-col justify-between space-y-6 shadow-2xl transition group">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#18181B] text-[#FF5500] border border-[#27272A] flex items-center justify-center">
                <Phone className="w-7 h-7" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white">Bishopscourt Phone Line</h3>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                Call the diocesan secretariat during official registry hours (Monday to Friday, 9:00 AM – 4:00 PM).
              </p>
            </div>
            <a
              href={`tel:${PASTOR_PROFILE.phone}`}
              className="w-full text-center py-4 rounded-full bg-[#1E1E22] hover:bg-[#27272A] text-zinc-200 font-bold text-sm sm:text-base border border-[#2E2E33] transition"
            >
              {PASTOR_PROFILE.phone}
            </a>
          </div>

          {/* Physical Church Location */}
          <div className="rounded-[36px] luxury-glass-interactive p-8 sm:p-10 flex flex-col justify-between space-y-6 shadow-2xl transition group">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#18181B] text-[#FF7828] border border-[#27272A] flex items-center justify-center">
                <MapPin className="w-7 h-7" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white">Diocesan Headquarters</h3>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                {PASTOR_PROFILE.officeAddress}
              </p>
            </div>
            <Link
              href="/book?tab=counseling"
              className="w-full text-center py-4 rounded-full bg-[#FF5500] hover:bg-[#E64D00] text-white font-bold text-sm sm:text-base transition shadow-lg shadow-[#FF5500]/25"
            >
              Book In-Person Audience
            </Link>
          </div>
        </div>

        {/* Contact Form & Pastoral Care Guidance */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Inquiry Form */}
          <div className="lg:col-span-7 rounded-3xl bg-[#141416] border border-[#232326] p-6 sm:p-8 shadow-xl">
            <div className="mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#FF5500]">Online Correspondence</span>
              <h2 className="text-2xl font-display font-bold text-white mt-1">Send an Official Message</h2>
              <p className="text-xs text-zinc-400 mt-1">
                Fill in your inquiry below. Our diocesan registry staff will review and respond within 24–48 hours.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 text-center bg-emerald-950/30 rounded-2xl border border-emerald-500/40 space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h3 className="text-lg font-bold text-white">Message Dispatched!</h3>
                <p className="text-xs text-zinc-400">
                  Thank you for contacting the Bishopscourt secretariat. We have logged your correspondence and will contact you via phone or email shortly.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-3 text-xs text-[#FF7828] font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Bro. Chijioke Okonkwo"
                      className="w-full px-4 py-3 bg-[#0D0D0E] border border-[#27272A] rounded-xl text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-[#FF5500] transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+234 803 000 0000"
                      className="w-full px-4 py-3 bg-[#0D0D0E] border border-[#27272A] rounded-xl text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-[#FF5500] transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-4 py-3 bg-[#0D0D0E] border border-[#27272A] rounded-xl text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-[#FF5500] transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 mb-1">
                      Inquiry Type
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0D0D0E] border border-[#27272A] rounded-xl text-white text-xs focus:outline-none focus:border-[#FF5500] transition"
                    >
                      <option value="General Inquiry" className="bg-[#141416] text-white">General Diocesan Inquiry</option>
                      <option value="Sermon Resources" className="bg-[#141416] text-white">Synod Charge & Audio Recordings</option>
                      <option value="Prayer Request" className="bg-[#141416] text-white">Pastoral Prayer Request</option>
                      <option value="Testimony" className="bg-[#141416] text-white">Share a Testimony</option>
                      <option value="Cathedral" className="bg-[#141416] text-white">Cathedral Church of St. Mary</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-400 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Type your message, prayer request, or inquiry here..."
                    className="w-full px-4 py-3 bg-[#0D0D0E] border border-[#27272A] rounded-xl text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-[#FF5500] transition"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#FF5500] hover:bg-[#E64D00] text-white font-bold text-xs transition shadow-lg shadow-[#FF5500]/25 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-white" />
                  <span>Send Message to Secretariat</span>
                </button>
              </form>
            )}
          </div>

          {/* Pastoral Emergency & Official Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-[#141416] border border-[#232326] p-6 sm:p-8 space-y-4 shadow-xl">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#FF7828] flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-[#FF5500]" />
                <span>Urgent Pastoral Guidelines</span>
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                For acute bereavement, urgent hospital visitation, or life-critical pastoral emergencies requiring immediate intervention, please call the chaplaincy emergency line directly.
              </p>
              <div className="p-4 bg-[#0D0D0E] rounded-2xl border border-[#27272A] text-xs">
                <span className="block text-zinc-500 font-semibold mb-0.5">Emergency Diocesan Pastoral Line:</span>
                <span className="font-bold text-[#FF5500] text-base">{PASTOR_PROFILE.phone}</span>
              </div>
            </div>

            {/* Official channels */}
            <div className="rounded-3xl bg-[#141416] border border-[#232326] p-6 sm:p-8 space-y-4 shadow-xl">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                Official Diocesan Channels
              </h3>
              <p className="text-xs text-zinc-400">
                Join our audio and video channels for live synod recordings and diocesan news:
              </p>

              <div className="space-y-2.5 text-xs">
                <a
                  href={PASTOR_PROFILE.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-[#0D0D0E] border border-[#27272A] hover:border-[#FF5500] text-zinc-300 hover:text-white transition group"
                >
                  <span className="flex items-center gap-2.5">
                    <Video className="w-4 h-4 text-[#FF5500]" />
                    <span className="font-semibold">YouTube Official Broadcasts</span>
                  </span>
                  <span className="text-[11px] text-[#FF5500] font-bold group-hover:translate-x-0.5 transition-transform">Watch →</span>
                </a>

                <a
                  href={PASTOR_PROFILE.socials.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-[#0D0D0E] border border-[#27272A] hover:border-[#FF5500] text-zinc-300 hover:text-white transition group"
                >
                  <span className="flex items-center gap-2.5">
                    <Send className="w-4 h-4 text-blue-400" />
                    <span className="font-semibold">Telegram Audio Sermons Channel</span>
                  </span>
                  <span className="text-[11px] text-[#FF5500] font-bold group-hover:translate-x-0.5 transition-transform">Join →</span>
                </a>

                <a
                  href={PASTOR_PROFILE.socials.podcast}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-[#0D0D0E] border border-[#27272A] hover:border-[#FF5500] text-zinc-300 hover:text-white transition group"
                >
                  <span className="flex items-center gap-2.5">
                    <Radio className="w-4 h-4 text-emerald-400" />
                    <span className="font-semibold">Spotify / Audio Podcast</span>
                  </span>
                  <span className="text-[11px] text-[#FF5500] font-bold group-hover:translate-x-0.5 transition-transform">Listen →</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
