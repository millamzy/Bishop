import React from 'react';
import Link from 'next/link';
import { PASTOR_PROFILE, BISHOP_YOUTUBE_CHANNEL } from '@/data/mockData';
import {
  BookOpen,
  Award,
  Users,
  Compass,
  Calendar,
  Send,
  Heart,
  ShieldCheck,
  CheckCircle,
  MapPin,
  Sparkles,
  Church,
  ArrowRight
} from 'lucide-react';

export const metadata = {
  title: 'About The Rt. Rev. Ndubuisi Obi | Bishop of Anglican Diocese of Nnewi',
  description:
    'Comprehensive biography, ancestry, pastoral ministry, and episcopal vision of The Right Reverend Ndubuisi Chukwuka Obinna Obi, Bishop of the Anglican Diocese of Nnewi, Church of Nigeria.',
};

export default function AboutPage() {
  return (
    <div className="flex-1 bg-[#0D0D0E] text-white py-16 sm:py-24">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10 space-y-20">
        {/* Header Title (Grand Scale) */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[#FF5500]/20 border border-[#FF5500]/40 text-[#FFAA40] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-4 h-4 text-[#FF5500]" />
            <span>Episcopal Profile &amp; Diocesan Leadership</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-extrabold text-white tracking-tight leading-[1.08]">
            The Right Reverend Ndubuisi Chukwuka Obinna Obi
          </h1>
          <p className="text-zinc-300 text-lg sm:text-xl leading-relaxed">
            Bishop of the Anglican Diocese of Nnewi | Church of Nigeria (Anglican Communion)
          </p>
        </div>

        {/* Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Portrait & At a Glance */}
          <div className="lg:col-span-5 space-y-8">
            <div className="rounded-[40px] luxury-glass p-8 sm:p-10 text-center shadow-2xl relative overflow-hidden">
              {/* Photo */}
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 mx-auto rounded-3xl overflow-hidden border-2 border-[#FF5500] shadow-2xl mb-8 bg-black">
                <img
                  src={PASTOR_PROFILE.photoUrl}
                  alt={PASTOR_PROFILE.name}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/60 to-transparent p-4">
                  <span className="text-sm font-bold text-white block">
                    Episcopal Vestments &amp; Crosier
                  </span>
                  <span className="text-xs text-[#FF7828] font-mono font-bold">
                    Diocese of Nnewi
                  </span>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                {PASTOR_PROFILE.name}
              </h2>
              <p className="text-xs sm:text-sm text-[#FF5500] uppercase font-bold mt-1.5 tracking-wider">
                {PASTOR_PROFILE.title}
              </p>
              <p className="text-sm text-zinc-300 mt-2 flex items-center justify-center gap-2">
                <MapPin className="w-4 h-4 text-[#FF5500]" />
                {PASTOR_PROFILE.location}
              </p>

              <div className="mt-8 pt-8 border-t border-white/[0.08] text-left space-y-4 text-sm sm:text-base">
                <div className="flex justify-between items-center py-1.5 border-b border-white/[0.04]">
                  <span className="text-zinc-400">Date of Birth:</span>
                  <span className="font-semibold text-white">17th December 1965</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-white/[0.04]">
                  <span className="text-zinc-400">Place of Birth:</span>
                  <span className="font-semibold text-white">Okpuno, Nnewichi, Nnewi</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-white/[0.04]">
                  <span className="text-zinc-400">Alma Mater:</span>
                  <span className="font-semibold text-[#FF5500]">DMGS Onitsha</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-white/[0.04]">
                  <span className="text-zinc-400">Consecration:</span>
                  <span className="font-semibold text-white">24th September 2019 (Asaba)</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-white/[0.04]">
                  <span className="text-zinc-400">Enthronement:</span>
                  <span className="font-semibold text-white">27th September 2019 (Nnewi)</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-white/[0.04]">
                  <span className="text-zinc-400">Cathedral:</span>
                  <span className="font-semibold text-white">Cathedral of St. Mary, Uruagu</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-white/[0.04]">
                  <span className="text-zinc-400">Diocesan Mother:</span>
                  <span className="font-semibold text-[#FF5500]">Mrs. Ukamaka Zipporah Obi</span>
                </div>
                <div className="flex justify-between items-center py-1.5">
                  <span className="text-zinc-400">Episcopal Audiences:</span>
                  <span className="font-semibold text-emerald-400">Tuesdays &amp; Thursdays (Bishopscourt)</span>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/[0.08] flex flex-col gap-3.5">
                <Link
                  href="/book?tab=counseling"
                  className="w-full py-4 rounded-full bg-[#FF5500] hover:bg-[#E64D00] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#FF5500]/25 transition active:scale-95 flex items-center justify-center gap-2.5"
                >
                  <span>Book Pastoral Audience at Bishopscourt</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/book?tab=invitation"
                  className="w-full py-4 rounded-full bg-[#1C1C22] hover:bg-[#25252E] text-white font-bold text-sm sm:text-base border border-white/[0.1] transition active:scale-95"
                >
                  Request Bishop for Church / Synod Invitation
                </Link>
              </div>
            </div>
          </div>

          {/* Full Narrative Biography */}
          <div className="lg:col-span-7 space-y-8">
            <div className="rounded-[40px] luxury-glass p-8 sm:p-12 space-y-8 shadow-2xl">
              <h2 className="text-3xl font-display font-bold text-white flex items-center gap-3">
                <Compass className="w-7 h-7 text-[#FF5500]" />
                <span>Ancestral Roots &amp; Life Journey</span>
              </h2>

              <div className="space-y-5 text-zinc-200 text-base sm:text-lg leading-relaxed">
                {PASTOR_PROFILE.fullBio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Diocesan Vision Banner in Ember Gradient */}
              <div className="p-8 rounded-3xl bg-gradient-to-r from-[#FF5500]/20 via-[#1C1C20] to-[#141416] border border-[#FF5500]/30 space-y-3">
                <h3 className="text-xs sm:text-sm uppercase font-bold tracking-widest text-[#FF5500] flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#FF5500]" />
                  <span>The Diocesan Vision</span>
                </h3>
                <p className="text-white text-base sm:text-lg font-medium italic leading-relaxed">
                  &ldquo;{PASTOR_PROFILE.vision}&rdquo;
                </p>
              </div>

              {/* Core Commitments of the Episcopacy */}
              <div className="space-y-4 pt-6 border-t border-white/[0.08]">
                <h3 className="text-base font-bold uppercase tracking-wider text-white">
                  Key Priorities of Bishop Ndubuisi Obi&apos;s Administration:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base text-zinc-200">
                  <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#0D0D0E] border border-white/[0.08]">
                    <CheckCircle className="w-5 h-5 text-[#FF5500] shrink-0 mt-0.5" />
                    <span>Aggressive grassroots evangelism and rural church planting</span>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#0D0D0E] border border-white/[0.08]">
                    <CheckCircle className="w-5 h-5 text-[#FF5500] shrink-0 mt-0.5" />
                    <span>Re-orienting youths away from ritualism toward kingdom enterprise</span>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#0D0D0E] border border-white/[0.08]">
                    <CheckCircle className="w-5 h-5 text-[#FF5500] shrink-0 mt-0.5" />
                    <span>Clergy welfare, ministerial training, and doctrinal integrity</span>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#0D0D0E] border border-white/[0.08]">
                    <CheckCircle className="w-5 h-5 text-[#FF5500] shrink-0 mt-0.5" />
                    <span>Economic self-sufficiency for Diocesan schools, hospitals, and farms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Arms of the Diocese of Nnewi with #01, #02, #03 from reference */}
        <div className="rounded-[48px] luxury-glass p-10 sm:p-14 lg:p-16 space-y-12 shadow-2xl">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-[#FF5500] text-xs sm:text-sm font-bold uppercase tracking-widest block">
              Diocesan Expressions
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white">
              Diocesan Institutions &amp; Ministry Arms
            </h2>
            <p className="text-zinc-300 text-base sm:text-lg">
              Impact expressions under the Episcopal Oversight of Bishop Ndubuisi Obi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-[32px] bg-[#0D0D0E] border border-white/[0.08] space-y-4">
              <span className="w-12 h-12 rounded-full bg-[#FF5500]/15 text-[#FF5500] border border-[#FF5500]/30 flex items-center justify-center font-bold text-base font-mono">
                01
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white">Cathedral &amp; Archdeaconries</h3>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                Cathedral Church of St. Mary, Uruagu, Nnewi, supervising numerous archdeaconries, parishes, and church planting stations across Anambra State.
              </p>
            </div>

            <div className="p-8 rounded-[32px] bg-[#0D0D0E] border border-white/[0.08] space-y-4">
              <span className="w-12 h-12 rounded-full bg-[#FF5500]/15 text-[#FF5500] border border-[#FF5500]/30 flex items-center justify-center font-bold text-base font-mono">
                02
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white">Mothers’ Union &amp; Women’s Guild</h3>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                Led by Mama Nnewi, Mrs. Ukamaka Zipporah Obi, championing women’s empowerment, widow support, and building prayerful Christian homes.
              </p>
            </div>

            <div className="p-8 rounded-[32px] bg-[#0D0D0E] border border-white/[0.08] space-y-4">
              <span className="w-12 h-12 rounded-full bg-[#FF5500]/15 text-[#FF5500] border border-[#FF5500]/30 flex items-center justify-center font-bold text-base font-mono">
                03
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white">Diocesan Youth Directorate &amp; Schools</h3>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                Empowering secondary and tertiary youth with vocational skills, spiritual fire, academic excellence, and godly character.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
