'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { getStoredBookings } from '@/lib/store';
import { BookingRecord } from '@/types';
import { PASTOR_PROFILE } from '@/data/mockData';
import {
  Search,
  CheckCircle2,
  Clock,
  Calendar,
  AlertTriangle,
  XCircle,
  MessageCircle,
  MapPin,
  User,
  ShieldCheck,
  Phone,
  Church
} from 'lucide-react';
import Link from 'next/link';

export default function TrackBookingClient() {
  const searchParams = useSearchParams();
  const initialRef = searchParams.get('ref') || '';
  const [refInput, setRefInput] = useState(initialRef);
  const [searchedRef, setSearchedRef] = useState(initialRef);
  const [bookings, setBookings] = useState<BookingRecord[]>([]);

  useEffect(() => {
    setBookings(getStoredBookings());

    const onUpdate = () => {
      setBookings(getStoredBookings());
    };
    window.addEventListener('bookings_updated', onUpdate);
    return () => window.removeEventListener('bookings_updated', onUpdate);
  }, []);

  const foundBooking = bookings.find(
    (b) =>
      b.referenceId.toLowerCase() === searchedRef.trim().toLowerCase() ||
      ('phone' in b && b.phone.includes(searchedRef.trim()))
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchedRef(refInput);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'confirmed':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-950/40 text-emerald-400 border border-emerald-500/30 shadow-xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>CONFIRMED & SCHEDULED</span>
          </span>
        );
      case 'rescheduled':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-950/40 text-amber-300 border border-amber-500/30 shadow-xs">
            <Clock className="w-3.5 h-3.5 text-[#FF7828]" />
            <span>RESCHEDULED TO NEW SLOT</span>
          </span>
        );
      case 'declined':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-red-950/40 text-red-400 border border-red-500/30 shadow-xs">
            <XCircle className="w-3.5 h-3.5 text-red-400" />
            <span>DECLINED / UNAVAILABLE</span>
          </span>
        );
      case 'completed':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#1E1E22] text-zinc-400 border border-[#2E2E33]">
            <CheckCircle2 className="w-3.5 h-3.5 text-zinc-500" />
            <span>SESSION COMPLETED</span>
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#FF5500]/15 text-[#FF7828] border border-[#FF5500]/30 shadow-xs">
            <Clock className="w-3.5 h-3.5 text-[#FF5500]" />
            <span>PENDING EPISCOPAL REVIEW</span>
          </span>
        );
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#18181B] border border-[#27272A] text-[#FF5500] text-xs font-semibold uppercase tracking-wider">
          <Church className="w-3.5 h-3.5 text-[#FF5500]" />
          <span>Live Tracking Portal</span>
        </div>
        <h1 className="text-2xl min-[400px]:text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight break-words">
          Track Your Booking or Invitation Status
        </h1>
        <p className="text-zinc-400 text-xs sm:text-sm">
          Enter your Reference ID (e.g.{' '}
          <code className="text-[#FF7828] font-mono font-bold bg-[#18181B] px-2 py-0.5 rounded border border-[#27272A]">
            PST-2026-1042
          </code>{' '}
          or{' '}
          <code className="text-[#FF7828] font-mono font-bold bg-[#18181B] px-2 py-0.5 rounded border border-[#27272A]">
            INV-2026-3041
          </code>
          ) or your phone number.
        </p>
      </div>

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="rounded-2xl bg-[#141416] border border-[#232326] p-4 shadow-xl">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-5 h-5 text-zinc-500 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={refInput}
              onChange={(e) => setRefInput(e.target.value)}
              placeholder="Enter Reference ID or Phone number..."
              className="w-full pl-12 pr-4 py-3 bg-[#0D0D0E] border border-[#27272A] rounded-xl text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#FF5500] transition"
            />
          </div>
          <button
            type="submit"
            className="px-7 py-3 rounded-full bg-[#FF5500] hover:bg-[#E64D00] text-white font-bold text-xs transition active:scale-95 shadow-lg shadow-[#FF5500]/25 shrink-0"
          >
            Check Status
          </button>
        </div>
      </form>

      {/* Found Booking Result */}
      {searchedRef && (
        <div>
          {foundBooking ? (
            <div className="rounded-3xl bg-[#141416] border border-[#232326] p-6 sm:p-8 space-y-6 shadow-2xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#232326]">
                <div>
                  <span className="text-[11px] text-zinc-500 block font-mono">
                    REFERENCE ID
                  </span>
                  <span className="text-2xl font-mono font-bold text-[#FF5500]">
                    {foundBooking.referenceId}
                  </span>
                </div>
                <div>{getStatusBadge(foundBooking.status)}</div>
              </div>

              {/* Booking Specifics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-[#0D0D0E] border border-[#232326] space-y-1">
                  <span className="text-zinc-500">Request Category:</span>
                  <p className="font-bold text-white capitalize">
                    {foundBooking.type === 'counseling'
                      ? `Pastoral Audience (${foundBooking.category})`
                      : `Speaking Invitation (${foundBooking.eventType})`}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#0D0D0E] border border-[#232326] space-y-1">
                  <span className="text-zinc-500">Scheduled Date & Slot:</span>
                  <p className="font-bold text-white">
                    {foundBooking.type === 'counseling'
                      ? `${foundBooking.date} • ${foundBooking.timeSlot}`
                      : `${foundBooking.startDate} to ${foundBooking.endDate} • ${foundBooking.timeSlot}`}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#0D0D0E] border border-[#232326] space-y-1">
                  <span className="text-zinc-500">Applicant / Contact:</span>
                  <p className="font-bold text-white">
                    {foundBooking.type === 'counseling'
                      ? foundBooking.fullName
                      : `${foundBooking.contactPerson} (${foundBooking.organizationName})`}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#0D0D0E] border border-[#232326] space-y-1">
                  <span className="text-zinc-500">Meeting Location / Mode:</span>
                  <p className="font-bold text-white">
                    {foundBooking.type === 'counseling'
                      ? foundBooking.meetingMode === 'in_person'
                        ? 'In-Person at Bishopscourt, Nnewi'
                        : foundBooking.meetingMode === 'whatsapp_call'
                          ? 'WhatsApp Audio/Video Call'
                          : 'Direct Phone Call'
                      : foundBooking.venueCityState}
                  </p>
                </div>
              </div>

              {/* Pastor / Admin Notes */}
              {foundBooking.adminNotes && (
                <div className="p-4 rounded-xl bg-[#1A1A1E] border border-[#FF5500]/30 space-y-1 text-xs">
                  <span className="font-bold text-[#FF7828] flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#FF5500]" />
                    <span>Secretariat Notes:</span>
                  </span>
                  <p className="text-zinc-300">{foundBooking.adminNotes}</p>
                </div>
              )}

              {/* Direct WhatsApp Follow-up */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/${PASTOR_PROFILE.whatsappNumber}?text=Hello%20Office,%20I%20am%20following%20up%20on%20my%20booking%20reference%20${foundBooking.referenceId}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition shadow-lg shadow-emerald-950/40"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Inquire on WhatsApp Desk</span>
                </a>

                <Link
                  href="/book"
                  className="py-3 px-5 rounded-full bg-[#1E1E22] hover:bg-[#27272A] text-zinc-200 text-xs font-semibold text-center border border-[#2E2E33] transition"
                >
                  Submit Another Request
                </Link>
              </div>
            </div>
          ) : (
            <div className="p-8 text-center rounded-2xl bg-[#141416] border border-[#232326] space-y-3 shadow-lg">
              <AlertTriangle className="w-10 h-10 text-[#FF5500] mx-auto" />
              <h3 className="text-lg font-bold text-white">No record found for &ldquo;{searchedRef}&rdquo;</h3>
              <p className="text-xs text-zinc-400 max-w-sm mx-auto">
                Please double-check the reference ID provided in your confirmation message, or try searching by the phone number used during submission.
              </p>
            </div>
          )}
        </div>
      )}

      {/* Demo helper quick links */}
      <div className="p-5 rounded-2xl bg-[#141416] border border-[#232326] text-xs text-zinc-400 space-y-2">
        <span className="font-semibold text-zinc-300 block">Sample Reference IDs to test:</span>
        <div className="flex flex-wrap gap-2">
          {['PST-2026-1042', 'PST-2026-1049', 'PST-2026-1055', 'INV-2026-3041'].map((code) => (
            <button
              key={code}
              onClick={() => {
                setRefInput(code);
                setSearchedRef(code);
              }}
              className="px-3 py-1 rounded-full bg-[#1E1E22] hover:bg-[#FF5500] hover:text-white text-zinc-300 border border-[#2E2E33] font-mono text-xs transition"
            >
              {code}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
