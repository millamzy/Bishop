import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import YouTubeVideoSection from '@/components/home/YouTubeVideoSection';
import FeaturedMessageSection from '@/components/home/FeaturedMessageSection';
import UpcomingEventsSection from '@/components/home/UpcomingEventsSection';
import DirectBookingCta from '@/components/home/DirectBookingCta';
import { INITIAL_MESSAGES } from '@/data/mockData';
import { BookOpen, Flame, HeartHandshake, Award, Church, Compass, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const featuredSermon = INITIAL_MESSAGES.find((m) => m.featured) || INITIAL_MESSAGES[0];

  return (
    <main className="flex-1 flex flex-col bg-[#0D0D0E]">
      {/* Hero Section */}
      <HeroSection />

      {/* Official YouTube Video Broadcasts mapped from @bishopndubuisiobi6348 */}
      <YouTubeVideoSection />

      {/* Featured Synod Charge / Sermon */}
      <FeaturedMessageSection sermon={featuredSermon} />

      {/* Four Diocesan Pillars Section with Bigger Scale */}
      <section className="py-28 sm:py-36 bg-[#09090B] border-b border-white/[0.06] relative overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#FF5500]/06 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20 space-y-5">
            <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[#FF5500]/20 border border-[#FF5500]/40 text-[#FFAA40] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm">
              <Compass className="w-4 h-4 text-[#FF5500]" />
              <span>Diocesan Strategic Priorities</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight">
              The Four Pillars of the Episcopacy
            </h2>
            <p className="text-zinc-300 text-lg sm:text-xl leading-relaxed">
              Under the visionary leadership of The Rt. Rev. Ndubuisi Obi, the Diocese of Nnewi advances the Great Commission through four foundational ministerial commitments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Pillar 01 */}
            <div className="luxury-glass-interactive p-9 sm:p-10 rounded-[36px] space-y-6 group relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-lg font-mono font-bold text-[#FF7828] tracking-widest">01</span>
                <div className="w-14 h-14 rounded-2xl bg-[#FF5500]/15 text-[#FFAA40] border border-[#FF5500]/30 flex items-center justify-center font-bold shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-7 h-7 text-[#FF5500]" />
                </div>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white group-hover:text-[#FFAA40] transition-colors leading-snug">
                Biblical Orthodoxy
              </h3>
              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
                Upholding the timeless doctrines of Holy Scripture and sound Anglican liturgical heritage without compromise, syncretism, or cultural dilution.
              </p>
            </div>

            {/* Pillar 02 */}
            <div className="luxury-glass-interactive p-9 sm:p-10 rounded-[36px] space-y-6 group relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-lg font-mono font-bold text-[#FF7828] tracking-widest">02</span>
                <div className="w-14 h-14 rounded-2xl bg-[#FF5500]/15 text-[#FFAA40] border border-[#FF5500]/30 flex items-center justify-center font-bold shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Flame className="w-7 h-7 text-[#FF5500]" />
                </div>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white group-hover:text-[#FFAA40] transition-colors leading-snug">
                Altar of Intercession
              </h3>
              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
                Igniting persistent territorial prayer altars across all parishes and archdeaconries to destroy generational strongholds and spark continuous revival.
              </p>
            </div>

            {/* Pillar 03 */}
            <div className="luxury-glass-interactive p-9 sm:p-10 rounded-[36px] space-y-6 group relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-lg font-mono font-bold text-[#FF7828] tracking-widest">03</span>
                <div className="w-14 h-14 rounded-2xl bg-[#FF5500]/15 text-[#FFAA40] border border-[#FF5500]/30 flex items-center justify-center font-bold shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <HeartHandshake className="w-7 h-7 text-[#FF5500]" />
                </div>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white group-hover:text-[#FFAA40] transition-colors leading-snug">
                Godly Christian Home
              </h3>
              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
                Championed alongside Mama Nnewi (Mrs. Ukamaka Obi) through the Mothers’ Union to restore godly marital sanctity and mentor disciplined youth.
              </p>
            </div>

            {/* Pillar 04 */}
            <div className="luxury-glass-interactive p-9 sm:p-10 rounded-[36px] space-y-6 group relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-lg font-mono font-bold text-[#FF7828] tracking-widest">04</span>
                <div className="w-14 h-14 rounded-2xl bg-[#FF5500]/15 text-[#FFAA40] border border-[#FF5500]/30 flex items-center justify-center font-bold shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-7 h-7 text-[#FF5500]" />
                </div>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white group-hover:text-[#FFAA40] transition-colors leading-snug">
                Enterprise &amp; Diligence
              </h3>
              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
                Leveraging the Bishop’s 17 years in commercial leadership to foster entrepreneurial empowerment, ethical enterprise, and diocesan self-reliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <UpcomingEventsSection />

      {/* Direct Booking CTA Section */}
      <DirectBookingCta />
    </main>
  );
}
