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
    <div className="flex-1 bg-[#0D0D0E] text-white py-12 sm:py-20 lg:py-24">
      <div className="max-w-[1536px] mx-auto px-3.5 sm:px-6 lg:px-10 space-y-12 sm:space-y-20">
        {/* Header Title (Fluid Responsive Scale) */}
        <div className="text-center max-w-4xl mx-auto space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full bg-[#FF5500]/20 border border-[#FF5500]/40 text-[#FFAA40] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF5500] shrink-0" />
            <span>Episcopal Profile &amp; Diocesan Leadership</span>
          </div>
          <h1 className="text-2xl min-[400px]:text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-extrabold text-white tracking-tight leading-[1.08] break-words">
            The Right Reverend Ndubuisi Chukwuka Obinna Obi
          </h1>
          <p className="text-zinc-300 text-sm sm:text-lg lg:text-xl leading-relaxed">
            Bishop of the Anglican Diocese of Nnewi | Church of Nigeria (Anglican Communion)
          </p>
        </div>

        {/* Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">
          {/* Portrait & At a Glance */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div className="rounded-[28px] sm:rounded-[40px] luxury-glass p-5 min-[400px]:p-7 sm:p-10 text-center shadow-2xl relative overflow-hidden">
              {/* Photo */}
              <div className="relative w-52 h-64 min-[400px]:w-60 min-[400px]:h-76 sm:w-64 sm:h-80 lg:w-72 lg:h-96 mx-auto rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[#FF5500] shadow-2xl mb-6 sm:mb-8 bg-black">
                <img
                  src={PASTOR_PROFILE.photoUrl}
                  alt={PASTOR_PROFILE.name}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/60 to-transparent p-3 sm:p-4">
                  <span className="text-xs sm:text-sm font-bold text-white block">
                    Episcopal Vestments &amp; Crosier
                  </span>
                  <span className="text-[10px] sm:text-xs text-[#FF7828] font-mono font-bold">
                    Diocese of Nnewi
                  </span>
                </div>
              </div>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-white">
                {PASTOR_PROFILE.name}
              </h2>
              <p className="text-xs sm:text-sm text-[#FF5500] uppercase font-bold mt-1.5 tracking-wider">
                {PASTOR_PROFILE.title}
              </p>
              <p className="text-xs sm:text-sm text-zinc-300 mt-2 flex items-center justify-center gap-2">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF5500] shrink-0" />
                <span>{PASTOR_PROFILE.location}</span>
              </p>

              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/[0.08] text-left space-y-3 sm:space-y-4 text-xs sm:text-base">
                <div className="flex justify-between items-center py-1.5 border-b border-white/[0.04]">
                  <span className="text-zinc-400">Date of Birth:</span>
                  <span className="font-semibold text-white">17th December 1965</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-white/[0.04]">
                  <span className="text-zinc-400">Place of Birth:</span>
                  <span className="font-semibold text-white truncate max-w-[170px] sm:max-w-none">Okpuno, Nnewichi, Nnewi</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-white/[0.04]">
                  <span className="text-zinc-400">Alma Mater:</span>
                  <span className="font-semibold text-[#FF5500]">DMGS Onitsha</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-white/[0.04]">
                  <span className="text-zinc-400">Consecration:</span>
                  <span className="font-semibold text-white truncate max-w-[170px] sm:max-w-none">24th September 2019 (Asaba)</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-white/[0.04]">
                  <span className="text-zinc-400">Enthronement:</span>
                  <span className="font-semibold text-white truncate max-w-[170px] sm:max-w-none">27th September 2019 (Nnewi)</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-white/[0.04]">
                  <span className="text-zinc-400">Cathedral:</span>
                  <span className="font-semibold text-white truncate max-w-[170px] sm:max-w-none">Cathedral of St. Mary</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-white/[0.04]">
                  <span className="text-zinc-400">Diocesan Mother:</span>
                  <span className="font-semibold text-[#FF5500] truncate max-w-[170px] sm:max-w-none">Mrs. Ukamaka Zipporah Obi</span>
                </div>
                <div className="flex justify-between items-center py-1.5">
                  <span className="text-zinc-400">Audiences:</span>
                  <span className="font-semibold text-emerald-400">Tue &amp; Thu (Bishopscourt)</span>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/[0.08] flex flex-col gap-3">
                <Link
                  href="/book?tab=counseling"
                  className="w-full py-3.5 sm:py-4 rounded-full bg-[#FF5500] hover:bg-[#E64D00] text-white font-bold text-xs sm:text-base shadow-lg shadow-[#FF5500]/25 transition active:scale-95 flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <span className="whitespace-nowrap">Book Pastoral Audience</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </Link>
                <Link
                  href="/book?tab=invitation"
                  className="w-full py-3.5 sm:py-4 rounded-full bg-[#1C1C22] hover:bg-[#25252E] text-white font-bold text-xs sm:text-base border border-white/[0.1] transition active:scale-95 text-center whitespace-nowrap"
                >
                  <span className="whitespace-nowrap">Request Bishop for Church Invitation</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Full Narrative Biography */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="rounded-[28px] sm:rounded-[40px] luxury-glass p-5 min-[400px]:p-7 sm:p-12 space-y-6 sm:space-y-8 shadow-2xl">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white flex items-center gap-3">
                <Compass className="w-6 h-6 sm:w-7 sm:h-7 text-[#FF5500] shrink-0" />
                <span>Ancestral Roots &amp; Life Journey</span>
              </h2>

              <div className="space-y-4 sm:space-y-5 text-zinc-200 text-sm sm:text-lg leading-relaxed">
                {PASTOR_PROFILE.fullBio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Diocesan Vision Banner in Ember Gradient */}
              <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#FF5500]/20 via-[#1C1C20] to-[#141416] border border-[#FF5500]/30 space-y-2 sm:space-y-3">
                <h3 className="text-xs sm:text-sm uppercase font-bold tracking-widest text-[#FF5500] flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF5500] shrink-0" />
                  <span>The Diocesan Vision</span>
                </h3>
                <p className="text-white text-sm sm:text-lg font-medium italic leading-relaxed">
                  &ldquo;{PASTOR_PROFILE.vision}&rdquo;
                </p>
              </div>

              {/* Core Commitments of the Episcopacy */}
              <div className="space-y-4 pt-4 sm:pt-6 border-t border-white/[0.08]">
                <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider text-white">
                  Key Priorities of Bishop Ndubuisi Obi&apos;s Administration:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-base text-zinc-200">
                  <div className="flex items-start gap-2.5 sm:gap-3 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#0D0D0E] border border-white/[0.08]">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF5500] shrink-0 mt-0.5" />
                    <span>Aggressive grassroots evangelism and rural church planting</span>
                  </div>
                  <div className="flex items-start gap-2.5 sm:gap-3 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#0D0D0E] border border-white/[0.08]">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF5500] shrink-0 mt-0.5" />
                    <span>Re-orienting youths away from ritualism toward kingdom enterprise</span>
                  </div>
                  <div className="flex items-start gap-2.5 sm:gap-3 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#0D0D0E] border border-white/[0.08]">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF5500] shrink-0 mt-0.5" />
                    <span>Clergy welfare, ministerial training, and doctrinal integrity</span>
                  </div>
                  <div className="flex items-start gap-2.5 sm:gap-3 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#0D0D0E] border border-white/[0.08]">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF5500] shrink-0 mt-0.5" />
                    <span>Economic self-sufficiency for Diocesan schools, hospitals, and farms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Arms of the Diocese of Nnewi with #01, #02, #03 */}
        <div className="rounded-[28px] sm:rounded-[48px] luxury-glass p-6 sm:p-12 lg:p-16 space-y-8 sm:space-y-12 shadow-2xl">
          <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3">
            <span className="text-[#FF5500] text-xs sm:text-sm font-bold uppercase tracking-widest block">
              Diocesan Expressions
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white">
              Diocesan Institutions &amp; Ministry Arms
            </h2>
            <p className="text-zinc-300 text-xs sm:text-base lg:text-lg">
              Impact expressions under the Episcopal Oversight of Bishop Ndubuisi Obi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
            <div className="p-6 sm:p-8 rounded-2xl sm:rounded-[32px] bg-[#0D0D0E] border border-white/[0.08] space-y-3 sm:space-y-4">
              <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FF5500]/15 text-[#FF5500] border border-[#FF5500]/30 flex items-center justify-center font-bold text-sm sm:text-base font-mono">
                01
              </span>
              <h3 className="text-lg sm:text-2xl font-display font-bold text-white">Cathedral &amp; Archdeaconries</h3>
              <p className="text-xs sm:text-base text-zinc-300 leading-relaxed">
                Cathedral Church of St. Mary, Uruagu, Nnewi, supervising numerous archdeaconries, parishes, and church planting stations across Anambra State.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl sm:rounded-[32px] bg-[#0D0D0E] border border-white/[0.08] space-y-3 sm:space-y-4">
              <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FF5500]/15 text-[#FF5500] border border-[#FF5500]/30 flex items-center justify-center font-bold text-sm sm:text-base font-mono">
                02
              </span>
              <h3 className="text-lg sm:text-2xl font-display font-bold text-white">Mothers’ Union &amp; Women’s Guild</h3>
              <p className="text-xs sm:text-base text-zinc-300 leading-relaxed">
                Led by Mama Nnewi, Mrs. Ukamaka Zipporah Obi, championing women’s empowerment, widow support, and building prayerful Christian homes.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl sm:rounded-[32px] bg-[#0D0D0E] border border-white/[0.08] space-y-3 sm:space-y-4">
              <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FF5500]/15 text-[#FF5500] border border-[#FF5500]/30 flex items-center justify-center font-bold text-sm sm:text-base font-mono">
                03
              </span>
              <h3 className="text-lg sm:text-2xl font-display font-bold text-white">Diocesan Youth Directorate &amp; Schools</h3>
              <p className="text-xs sm:text-base text-zinc-300 leading-relaxed">
                Empowering secondary and tertiary youth with vocational skills, spiritual fire, academic excellence, and godly character.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
