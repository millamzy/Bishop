import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import YouTubeVideoSection from '@/components/home/YouTubeVideoSection';
import FeaturedMessageSection from '@/components/home/FeaturedMessageSection';
import UpcomingEventsSection from '@/components/home/UpcomingEventsSection';
import DirectBookingCta from '@/components/home/DirectBookingCta';
import { INITIAL_MESSAGES } from '@/data/mockData';
import { BookOpen, Flame, HeartHandshake, Award, Church, Compass } from 'lucide-react';
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

      {/* Four Diocesan Pillars Section */}
      <section className="py-20 bg-[#0B0B0C] border-b border-[#232326]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-[#FF5500] text-sm font-bold tracking-wide uppercase block">
              Diocesan Strategic Priorities
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-white">
              The Four Pillars of the Episcopacy
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Under the leadership of The Rt. Rev. Ndubuisi Obi, the Diocese of Nnewi advances the Great Commission through four foundational commitments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#141416] p-7 rounded-[28px] border border-[#232326] hover:border-[#FF5500] transition-all space-y-4 shadow-xl group">
              <span className="text-sm font-mono font-bold text-[#FF5500] block">01</span>
              <div className="w-12 h-12 rounded-2xl bg-[#FF5500]/15 text-[#FF5500] border border-[#FF5500]/30 flex items-center justify-center font-bold">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-sans text-lg font-bold text-white group-hover:text-[#FF5500] transition-colors">
                Biblical Orthodoxy
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Upholding the timeless doctrines of Holy Scripture and sound Anglican liturgical heritage without compromise or modern syncretism.
              </p>
            </div>

            <div className="bg-[#141416] p-7 rounded-[28px] border border-[#232326] hover:border-[#FF5500] transition-all space-y-4 shadow-xl group">
              <span className="text-sm font-mono font-bold text-[#FF5500] block">02</span>
              <div className="w-12 h-12 rounded-2xl bg-[#FF5500]/15 text-[#FF5500] border border-[#FF5500]/30 flex items-center justify-center font-bold">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="font-sans text-lg font-bold text-white group-hover:text-[#FF5500] transition-colors">
                Altar of Intercession
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Igniting persistent prayer altars across all parishes and archdeaconries to break generational bondage and birth territorial revival.
              </p>
            </div>

            <div className="bg-[#141416] p-7 rounded-[28px] border border-[#232326] hover:border-[#FF5500] transition-all space-y-4 shadow-xl group">
              <span className="text-sm font-mono font-bold text-[#FF5500] block">03</span>
              <div className="w-12 h-12 rounded-2xl bg-[#FF5500]/15 text-[#FF5500] border border-[#FF5500]/30 flex items-center justify-center font-bold">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-sans text-lg font-bold text-white group-hover:text-[#FF5500] transition-colors">
                Godly Christian Home
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Championed alongside Mama Nnewi (Mrs. Ukamaka Obi) through the Mothers’ Union to heal marriages and nurture disciplined youth.
              </p>
            </div>

            <div className="bg-[#141416] p-7 rounded-[28px] border border-[#232326] hover:border-[#FF5500] transition-all space-y-4 shadow-xl group">
              <span className="text-sm font-mono font-bold text-[#FF5500] block">04</span>
              <div className="w-12 h-12 rounded-2xl bg-[#FF5500]/15 text-[#FF5500] border border-[#FF5500]/30 flex items-center justify-center font-bold">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-sans text-lg font-bold text-white group-hover:text-[#FF5500] transition-colors">
                Enterprise &amp; Diligence
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Leveraging the Bishop’s 17 years in enterprise to foster vocational empowerment, commercial integrity, and diocesan self-reliance.
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
