'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  BookingType,
  CounselingCategory,
  MeetingMode,
  BookingRecord
} from '@/types';
import {
  AVAILABLE_COUNSELING_SLOTS,
  PASTOR_PROFILE
} from '@/data/mockData';
import {
  createCounselingRequest,
  createSpeakingInvitation,
  checkForClashes,
  ClashCheckResult
} from '@/lib/store';
import {
  Calendar as CalendarIcon,
  Clock,
  UserCheck,
  Send,
  AlertTriangle,
  CheckCircle2,
  ShieldCheck,
  Copy,
  MessageCircle,
  Church,
  MapPin,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

export default function BookingPortalClient() {
  const searchParams = useSearchParams();
  const initialTab = (searchParams.get('tab') as BookingType) || 'counseling';
  const [activeTab, setActiveTab] = useState<BookingType>(initialTab);

  // Sync tab if search param changes
  useEffect(() => {
    const tab = searchParams.get('tab') as BookingType;
    if (tab === 'counseling' || tab === 'invitation') {
      setActiveTab(tab);
    }
  }, [searchParams]);

  // Counseling Form State
  const [counselingForm, setCounselingForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    category: 'Spiritual Guidance & Deliverance' as CounselingCategory,
    meetingMode: 'in_person' as MeetingMode,
    date: '2026-11-19', // Default to a realistic counseling day (Thursday)
    timeSlot: AVAILABLE_COUNSELING_SLOTS[0],
    notes: ''
  });

  // Speaking Invitation Form State
  const [invitationForm, setInvitationForm] = useState({
    organizationName: '',
    contactPerson: '',
    roleInOrg: '',
    phone: '',
    email: '',
    eventTheme: '',
    eventType: 'Conference' as const,
    startDate: '2026-12-05',
    endDate: '2026-12-05',
    timeSlot: 'Morning Session (10:00 AM)',
    venueCityState: '',
    expectedAttendance: '300 - 500 attendees',
    honorariumAndLogisticsProvided: true,
    notes: ''
  });

  // Clash check preview
  const [counselingClash, setCounselingClash] = useState<ClashCheckResult>({
    hasClash: false,
    clashingRecords: [],
    clashingItinerary: []
  });

  const [invitationClash, setInvitationClash] = useState<ClashCheckResult>({
    hasClash: false,
    clashingRecords: [],
    clashingItinerary: []
  });

  // Submission success state
  const [submittedBooking, setSubmittedBooking] = useState<BookingRecord | null>(null);
  const [copiedRef, setCopiedRef] = useState(false);

  // Update counseling clash check whenever date or slot changes
  useEffect(() => {
    const res = checkForClashes(counselingForm.date, counselingForm.timeSlot);
    setCounselingClash(res);
  }, [counselingForm.date, counselingForm.timeSlot]);

  // Update invitation clash check whenever start/end dates change
  useEffect(() => {
    const res = checkForClashes(invitationForm.startDate, undefined, invitationForm.endDate);
    setInvitationClash(res);
  }, [invitationForm.startDate, invitationForm.endDate]);

  // Handle Counseling Submission
  const handleCounselingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!counselingForm.fullName || !counselingForm.phone) {
      alert('Please fill in your name and phone number.');
      return;
    }

    const { booking } = createCounselingRequest({
      fullName: counselingForm.fullName,
      phone: counselingForm.phone,
      email: counselingForm.email,
      category: counselingForm.category,
      meetingMode: counselingForm.meetingMode,
      date: counselingForm.date,
      timeSlot: counselingForm.timeSlot,
      notes: counselingForm.notes
    });

    setSubmittedBooking(booking);
  };

  // Handle Invitation Submission
  const handleInvitationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!invitationForm.organizationName || !invitationForm.contactPerson || !invitationForm.phone) {
      alert('Please fill in your organization, contact person, and phone number.');
      return;
    }

    const { booking } = createSpeakingInvitation({
      organizationName: invitationForm.organizationName,
      contactPerson: invitationForm.contactPerson,
      roleInOrg: invitationForm.roleInOrg,
      phone: invitationForm.phone,
      email: invitationForm.email,
      eventTheme: invitationForm.eventTheme,
      eventType: invitationForm.eventType,
      startDate: invitationForm.startDate,
      endDate: invitationForm.endDate,
      timeSlot: invitationForm.timeSlot,
      venueCityState: invitationForm.venueCityState,
      expectedAttendance: invitationForm.expectedAttendance,
      honorariumAndLogisticsProvided: invitationForm.honorariumAndLogisticsProvided,
      notes: invitationForm.notes
    });

    setSubmittedBooking(booking);
  };

  // Calendar iCal download generator
  const downloadCalendarEvent = (booking: BookingRecord) => {
    const title =
      booking.type === 'counseling'
        ? `Episcopal Audience with The Rt. Rev. Ndubuisi Obi (Bishop of Nnewi)`
        : `Episcopal Ministry: ${booking.eventTheme} - The Rt. Rev. Ndubuisi Obi`;
    const description = `Booking Reference: ${booking.referenceId}. Status: ${booking.status.toUpperCase()}`;
    const dateStr = booking.type === 'counseling' ? booking.date : booking.startDate;
    const cleanDate = dateStr.replace(/-/g, '');

    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Anglican Diocese of Nnewi//Calendar//EN
BEGIN:VEVENT
UID:${booking.referenceId}@anglican-nnewi.org
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTSTART:${cleanDate}T100000Z
DTEND:${cleanDate}T110000Z
SUMMARY:${title}
DESCRIPTION:${description}
LOCATION:${PASTOR_PROFILE.officeAddress}
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `${booking.referenceId}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-10">
      {/* Title Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#18181B] border border-[#27272A] text-[#FF5500] text-xs font-semibold uppercase tracking-wider">
          <Church className="w-3.5 h-3.5 text-[#FF5500]" />
          <span>Episcopal Registry & Diary</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
          Book an Audience or Request a Diocesan Visit
        </h1>
        <p className="text-zinc-400 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
          Schedule a private 1-on-1 pastoral audience with Bishop Ndubuisi Obi at Bishopscourt, Nnewi, or submit official parish invitations for synods, confirmations, and church dedications.
        </p>
      </div>

      {/* Success Modal / Display */}
      {submittedBooking ? (
        <div className="max-w-2xl mx-auto rounded-3xl bg-[#141416] border border-[#232326] p-8 sm:p-10 shadow-2xl space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-950/30">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="text-center space-y-2">
            <h2 className="text-2xl font-display font-bold text-white">
              Request Received Successfully!
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              Your request has been registered on the Diocesan Secretariat desk of Bishop Ndubuisi Obi at Bishopscourt, Nnewi.
            </p>
          </div>

          {/* Reference ID Card */}
          <div className="p-6 rounded-2xl bg-[#0D0D0E] border border-[#FF5500]/40 text-center space-y-2 shadow-inner">
            <span className="text-[11px] uppercase tracking-wider text-zinc-500 font-bold block">
              Your Unique Tracking Reference
            </span>
            <div className="flex items-center justify-center gap-3">
              <span className="text-2xl sm:text-3xl font-mono font-bold text-[#FF5500] tracking-wider">
                {submittedBooking.referenceId}
              </span>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(submittedBooking.referenceId);
                  setCopiedRef(true);
                  setTimeout(() => setCopiedRef(false), 3000);
                }}
                className="p-2 rounded-xl bg-[#1E1E22] hover:bg-[#27272A] text-zinc-300 border border-[#27272A] transition"
                title="Copy Reference ID"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
            {copiedRef && <p className="text-[11px] text-emerald-400 font-bold">Reference ID copied!</p>}
          </div>

          {/* Summary Box */}
          <div className="bg-[#1A1A1E] rounded-2xl p-5 text-xs space-y-2.5 border border-[#27272A]">
            <div className="flex justify-between">
              <span className="text-zinc-500 font-medium">Request Type:</span>
              <span className="font-bold text-white capitalize">{submittedBooking.type}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-500 font-medium">Date:</span>
              <span className="font-bold text-white">
                {submittedBooking.type === 'counseling' ? submittedBooking.date : submittedBooking.startDate}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-500 font-medium">Slot / Time:</span>
              <span className="font-bold text-white">{submittedBooking.timeSlot}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-500 font-medium">Status:</span>
              <span className="font-bold text-[#FF7828] uppercase">
                {submittedBooking.status} (Under Episcopal Review)
              </span>
            </div>
          </div>

          {/* Conflict Notice if clash was detected */}
          {submittedBooking.clashDetected && (
            <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-500/40 text-xs text-amber-300 flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 shrink-0 text-[#FF5500] mt-0.5" />
              <div>
                <strong>Notice:</strong> An existing commitment was recorded near this slot. The secretariat will reach out via WhatsApp or phone to confirm availability or provide alternate slots.
              </div>
            </div>
          )}

          {/* Action CTAs */}
          <div className="space-y-3 pt-2">
            {/* WhatsApp Direct Notify */}
            <a
              href={`https://wa.me/${PASTOR_PROFILE.whatsappNumber}?text=Peace%20be%20unto%20you,%20I%20have%20submitted%20request%20reference%20${submittedBooking.referenceId}%20for%20${submittedBooking.type}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition shadow-lg shadow-emerald-950/40 whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span className="whitespace-nowrap">Notify Diocesan Office on WhatsApp Now</span>
            </a>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => downloadCalendarEvent(submittedBooking)}
                className="flex-1 py-3 rounded-full bg-[#1E1E22] hover:bg-[#27272A] text-zinc-200 text-xs font-bold border border-[#2E2E33] transition whitespace-nowrap"
              >
                <span className="whitespace-nowrap">Add to Calendar (.ics)</span>
              </button>

              <Link
                href={`/bookings/track?ref=${submittedBooking.referenceId}`}
                className="flex-1 text-center py-3 rounded-full bg-[#FF5500] hover:bg-[#E64D00] text-white text-xs font-bold transition shadow-md shadow-[#FF5500]/20 whitespace-nowrap"
              >
                <span className="whitespace-nowrap">Live Status Tracker</span>
              </Link>
            </div>

            <button
              onClick={() => setSubmittedBooking(null)}
              className="w-full text-center text-xs text-zinc-500 hover:text-white pt-2 font-medium transition whitespace-nowrap"
            >
              <span className="whitespace-nowrap">← Submit Another Request</span>
            </button>
          </div>
        </div>
      ) : (
        /* Form Card */
        <div className="max-w-4xl mx-auto rounded-[28px] sm:rounded-3xl bg-[#141416] border border-[#232326] shadow-2xl overflow-hidden">
          {/* Tabs Selector */}
          <div className="grid grid-cols-1 min-[480px]:grid-cols-2 border-b border-[#232326] bg-[#0D0D0E]/60 p-2 sm:p-2.5 gap-2">
            <button
              onClick={() => setActiveTab('counseling')}
              className={`flex items-center justify-center gap-2 py-3 px-3 sm:py-3.5 sm:px-4 rounded-full text-xs sm:text-sm font-bold transition active:scale-95 whitespace-nowrap ${activeTab === 'counseling'
                ? 'bg-[#FF5500] text-white shadow-lg shadow-[#FF5500]/20'
                : 'text-zinc-400 hover:text-white hover:bg-[#1A1A1E]'
                }`}
            >
              <UserCheck className="w-4 h-4 shrink-0" />
              <span className="whitespace-nowrap">1. Pastoral Audience (1-on-1)</span>
            </button>

            <button
              onClick={() => setActiveTab('invitation')}
              className={`flex items-center justify-center gap-2 py-3 px-3 sm:py-3.5 sm:px-4 rounded-full text-xs sm:text-sm font-bold transition active:scale-95 whitespace-nowrap ${activeTab === 'invitation'
                ? 'bg-[#FF5500] text-white shadow-lg shadow-[#FF5500]/20'
                : 'text-zinc-400 hover:text-white hover:bg-[#1A1A1E]'
                }`}
            >
              <Send className="w-4 h-4 shrink-0" />
              <span className="whitespace-nowrap">2. Speaking &amp; Event Invitation</span>
            </button>
          </div>

          <div className="p-4 min-[400px]:p-6 sm:p-10">
            {/* TAB 1: PASTORAL AUDIENCE */}
            {activeTab === 'counseling' && (
              <form onSubmit={handleCounselingSubmit} className="space-y-6">
                <div className="bg-[#18181B] border border-[#27272A] rounded-2xl p-4 text-xs text-zinc-300 flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#FF5500] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white font-bold">Pastoral Confidentiality & Audience Days:</strong> All counseling matters are held in strict biblical confidence. Weekly audiences take place on <strong className="text-[#FF7828]">Tuesdays and Thursdays</strong> between 10:00 AM and 3:00 PM at Bishopscourt, Nnewi.
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={counselingForm.fullName}
                      onChange={(e) => setCounselingForm({ ...counselingForm, fullName: e.target.value })}
                      placeholder="e.g. Chief Emeka Okonkwo"
                      className="w-full px-4 py-3 bg-[#0D0D0E] border border-[#27272A] rounded-xl text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#FF5500] transition"
                    />
                  </div>

                  {/* Phone / WhatsApp */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                      WhatsApp / Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={counselingForm.phone}
                      onChange={(e) => setCounselingForm({ ...counselingForm, phone: e.target.value })}
                      placeholder="e.g. +234 803 123 4567"
                      className="w-full px-4 py-3 bg-[#0D0D0E] border border-[#27272A] rounded-xl text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#FF5500] transition"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={counselingForm.email}
                      onChange={(e) => setCounselingForm({ ...counselingForm, email: e.target.value })}
                      placeholder="e.g. name@example.com"
                      className="w-full px-4 py-3 bg-[#0D0D0E] border border-[#27272A] rounded-xl text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#FF5500] transition"
                    />
                  </div>

                  {/* Category */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                      Audience Subject *
                    </label>
                    <select
                      value={counselingForm.category}
                      onChange={(e) =>
                        setCounselingForm({ ...counselingForm, category: e.target.value as CounselingCategory })
                      }
                      className="w-full px-4 py-3 bg-[#0D0D0E] border border-[#27272A] rounded-xl text-white text-sm focus:outline-none focus:border-[#FF5500] transition"
                    >
                      <option value="Spiritual Guidance & Deliverance" className="bg-[#141416] text-white">Spiritual Guidance & Deliverance</option>
                      <option value="Pre-Marital Counseling" className="bg-[#141416] text-white">Pre-Marital Counseling</option>
                      <option value="Marriage & Family Consultation" className="bg-[#141416] text-white">Marriage & Family Consultation</option>
                      <option value="Career & Purpose Direction" className="bg-[#141416] text-white">Career & Purpose Direction</option>
                      <option value="Bereavement & Pastoral Support" className="bg-[#141416] text-white">Bereavement & Pastoral Support</option>
                      <option value="General Pastoral Discussion" className="bg-[#141416] text-white">General Pastoral Discussion</option>
                    </select>
                  </div>
                </div>

                {/* Meeting Mode */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                    Preferred Meeting Mode *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { id: 'in_person', label: 'In-Person (Bishopscourt Chambers)', desc: 'Nnewi, Anambra State' },
                      { id: 'whatsapp_call', label: 'WhatsApp Call (Audio/Video)', desc: 'Low Data friendly' },
                      { id: 'phone_call', label: 'Direct Phone Call', desc: 'Standard mobile line' }
                    ].map((mode) => (
                      <button
                        type="button"
                        key={mode.id}
                        onClick={() =>
                          setCounselingForm({ ...counselingForm, meetingMode: mode.id as MeetingMode })
                        }
                        className={`p-4 rounded-xl border text-left transition ${counselingForm.meetingMode === mode.id
                          ? 'bg-[#FF5500]/15 border-[#FF5500] text-white shadow-sm'
                          : 'bg-[#0D0D0E] border-[#27272A] text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                          }`}
                      >
                        <span className="block text-xs font-bold">{mode.label}</span>
                        <span className="block text-[11px] text-zinc-500 mt-0.5">{mode.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Date & Interactive Slot Picker */}
                <div className="pt-4 border-t border-[#232326] space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={counselingForm.date}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={(e) => setCounselingForm({ ...counselingForm, date: e.target.value })}
                        className="w-full px-4 py-3 bg-[#0D0D0E] border border-[#27272A] rounded-xl text-white text-sm focus:outline-none focus:border-[#FF5500] transition"
                      />
                      <span className="text-[11px] text-[#FF7828] font-bold mt-1 block">
                        Official audience days: Tuesdays & Thursdays
                      </span>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                        Available Time Slot (45 mins) *
                      </label>
                      <select
                        value={counselingForm.timeSlot}
                        onChange={(e) => setCounselingForm({ ...counselingForm, timeSlot: e.target.value })}
                        className="w-full px-4 py-3 bg-[#0D0D0E] border border-[#27272A] rounded-xl text-white text-sm focus:outline-none focus:border-[#FF5500] transition"
                      >
                        {AVAILABLE_COUNSELING_SLOTS.map((slot) => (
                          <option key={slot} value={slot} className="bg-[#141416] text-white">
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Real-time Clash Indicator */}
                  {counselingClash.hasClash ? (
                    <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-500/40 text-amber-300 text-xs flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 shrink-0 text-[#FF5500] mt-0.5" />
                      <div>
                        <strong className="block font-bold">Clash Warning:</strong>
                        <span>{counselingClash.reason}</span>
                        <span className="block mt-1 text-zinc-400">
                          You may still submit your request; the diocesan registry will review and recommend an open slot for you.
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                      <span className="font-semibold">This slot is currently open and free on Bishop Ndubuisi Obi&apos;s diary.</span>
                    </div>
                  )}
                </div>

                {/* Brief Notes */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                    Brief Confidential Note / Pastoral Subject
                  </label>
                  <textarea
                    rows={3}
                    value={counselingForm.notes}
                    onChange={(e) => setCounselingForm({ ...counselingForm, notes: e.target.value })}
                    placeholder="Briefly describe what you would like to discuss (strictly confidential)..."
                    className="w-full px-4 py-3 bg-[#0D0D0E] border border-[#27272A] rounded-xl text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#FF5500] transition"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#FF5500] hover:bg-[#E64D00] text-white font-bold text-sm shadow-lg shadow-[#FF5500]/25 transition active:scale-[0.98] flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <CalendarIcon className="w-4 h-4 shrink-0" />
                  <span className="whitespace-nowrap">Reserve Pastoral Appointment</span>
                </button>
              </form>
            )}

            {/* TAB 2: SPEAKING & EVENT INVITATION */}
            {activeTab === 'invitation' && (
              <form onSubmit={handleInvitationSubmit} className="space-y-6">
                <div className="bg-[#18181B] border border-[#27272A] rounded-2xl p-4 text-xs text-zinc-300 flex items-start gap-3">
                  <CalendarIcon className="w-5 h-5 text-[#FF5500] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white font-bold">Episcopal Policy:</strong> Bishop Ndubuisi Obi honors speaking invitations for church conferences, diocesan synods, parish anniversaries, and leadership conventions. Please provide event details with adequate notice.
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Organization */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                      Host Church or Organization *
                    </label>
                    <input
                      type="text"
                      required
                      value={invitationForm.organizationName}
                      onChange={(e) =>
                        setInvitationForm({ ...invitationForm, organizationName: e.target.value })
                      }
                      placeholder="e.g. St. Andrew's Church, Otolo Nnewi"
                      className="w-full px-4 py-3 bg-[#0D0D0E] border border-[#27272A] rounded-xl text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#FF5500] transition"
                    />
                  </div>

                  {/* Event Type */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                      Event Category *
                    </label>
                    <select
                      value={invitationForm.eventType}
                      onChange={(e) =>
                        setInvitationForm({ ...invitationForm, eventType: e.target.value as any })
                      }
                      className="w-full px-4 py-3 bg-[#0D0D0E] border border-[#27272A] rounded-xl text-white text-sm focus:outline-none focus:border-[#FF5500] transition"
                    >
                      <option value="Conference" className="bg-[#141416] text-white">Annual Conference / Convention</option>
                      <option value="Revival Service" className="bg-[#141416] text-white">Revival / Power Night</option>
                      <option value="Leadership Summit" className="bg-[#141416] text-white">Clergy / Leadership Summit</option>
                      <option value="Campus Fellowship" className="bg-[#141416] text-white">Campus Fellowship Outreach</option>
                      <option value="Camp Meeting" className="bg-[#141416] text-white">Camp Meeting / Retreat</option>
                      <option value="Anniversary" className="bg-[#141416] text-white">Parish Anniversary / Dedication</option>
                    </select>
                  </div>

                  {/* Contact Person */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      required
                      value={invitationForm.contactPerson}
                      onChange={(e) =>
                        setInvitationForm({ ...invitationForm, contactPerson: e.target.value })
                      }
                      placeholder="e.g. Ven. Dr. Patrick Eze"
                      className="w-full px-4 py-3 bg-[#0D0D0E] border border-[#27272A] rounded-xl text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#FF5500] transition"
                    />
                  </div>

                  {/* Role in Org */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                      Your Role in the Organization
                    </label>
                    <input
                      type="text"
                      value={invitationForm.roleInOrg}
                      onChange={(e) =>
                        setInvitationForm({ ...invitationForm, roleInOrg: e.target.value })
                      }
                      placeholder="e.g. Archdeacon, Vicar, Synod Secretary"
                      className="w-full px-4 py-3 bg-[#0D0D0E] border border-[#27272A] rounded-xl text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#FF5500] transition"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                      Contact Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={invitationForm.phone}
                      onChange={(e) =>
                        setInvitationForm({ ...invitationForm, phone: e.target.value })
                      }
                      placeholder="e.g. +234 802 000 1234"
                      className="w-full px-4 py-3 bg-[#0D0D0E] border border-[#27272A] rounded-xl text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#FF5500] transition"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                      Contact Email
                    </label>
                    <input
                      type="email"
                      value={invitationForm.email}
                      onChange={(e) =>
                        setInvitationForm({ ...invitationForm, email: e.target.value })
                      }
                      placeholder="e.g. secretariat@parish.org"
                      className="w-full px-4 py-3 bg-[#0D0D0E] border border-[#27272A] rounded-xl text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#FF5500] transition"
                    />
                  </div>
                </div>

                {/* Event Theme & Venue */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#232326]">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                      Event Theme / Subject *
                    </label>
                    <input
                      type="text"
                      required
                      value={invitationForm.eventTheme}
                      onChange={(e) =>
                        setInvitationForm({ ...invitationForm, eventTheme: e.target.value })
                      }
                      placeholder="e.g. Walking in the Light of His Glory"
                      className="w-full px-4 py-3 bg-[#0D0D0E] border border-[#27272A] rounded-xl text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#FF5500] transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                      Venue & City, State *
                    </label>
                    <input
                      type="text"
                      required
                      value={invitationForm.venueCityState}
                      onChange={(e) =>
                        setInvitationForm({ ...invitationForm, venueCityState: e.target.value })
                      }
                      placeholder="e.g. St. Andrew's Church Sanctuary, Otolo, Nnewi"
                      className="w-full px-4 py-3 bg-[#0D0D0E] border border-[#27272A] rounded-xl text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#FF5500] transition"
                    />
                  </div>

                  {/* Dates */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                      Proposed Start Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={invitationForm.startDate}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) =>
                        setInvitationForm({ ...invitationForm, startDate: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-[#0D0D0E] border border-[#27272A] rounded-xl text-white text-sm focus:outline-none focus:border-[#FF5500] transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                      Proposed End Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={invitationForm.endDate}
                      min={invitationForm.startDate}
                      onChange={(e) =>
                        setInvitationForm({ ...invitationForm, endDate: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-[#0D0D0E] border border-[#27272A] rounded-xl text-white text-sm focus:outline-none focus:border-[#FF5500] transition"
                    />
                  </div>
                </div>

                {/* Clash Engine Warning for Invitations */}
                {invitationClash.hasClash ? (
                  <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-500/40 text-amber-300 text-xs flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 shrink-0 text-[#FF5500] mt-0.5" />
                    <div>
                      <strong className="block font-bold">Itinerary Conflict Detected:</strong>
                      <span>{invitationClash.reason}</span>
                      <span className="block mt-1 text-zinc-400">
                        Our diocesan registry will cross-examine the itinerary upon receipt.
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                    <span className="font-semibold">Bishop Ndubuisi Obi currently has no public scheduling conflicts recorded on these dates.</span>
                  </div>
                )}

                {/* Additional logistics */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#232326]">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                      Expected Attendance
                    </label>
                    <input
                      type="text"
                      value={invitationForm.expectedAttendance}
                      onChange={(e) =>
                        setInvitationForm({ ...invitationForm, expectedAttendance: e.target.value })
                      }
                      placeholder="e.g. 1,000+ delegates"
                      className="w-full px-4 py-3 bg-[#0D0D0E] border border-[#27272A] rounded-xl text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#FF5500] transition"
                    />
                  </div>

                  <div className="flex items-center gap-3 pt-6">
                    <input
                      type="checkbox"
                      id="honorariumCheck"
                      checked={invitationForm.honorariumAndLogisticsProvided}
                      onChange={(e) =>
                        setInvitationForm({
                          ...invitationForm,
                          honorariumAndLogisticsProvided: e.target.checked
                        })
                      }
                      className="w-5 h-5 rounded text-[#FF5500] focus:ring-[#FF5500] border-[#27272A] bg-[#0D0D0E] accent-[#FF5500]"
                    />
                    <label htmlFor="honorariumCheck" className="text-xs text-zinc-300 font-medium cursor-pointer">
                      Travel logistics, hospitality, or ministerial protocol will be handled by host organization.
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                    Special Session Details or Notes
                  </label>
                  <textarea
                    rows={3}
                    value={invitationForm.notes}
                    onChange={(e) =>
                      setInvitationForm({ ...invitationForm, notes: e.target.value })
                    }
                    placeholder="Provide any additional ministerial notes or specific sessions requested..."
                    className="w-full px-4 py-3 bg-[#0D0D0E] border border-[#27272A] rounded-xl text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#FF5500] transition"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#FF5500] hover:bg-[#E64D00] text-white font-bold text-sm shadow-lg shadow-[#FF5500]/25 transition active:scale-[0.98] flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <Send className="w-4 h-4 shrink-0" />
                  <span className="whitespace-nowrap">Submit Diocesan Speaking Request</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
