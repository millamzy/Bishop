'use client';

import React, { useState, useEffect } from 'react';
import {
  SermonMessage,
  BookingRecord,
  ItineraryItem,
  BookingStatus,
  SermonTopic,
  CounselingRequest,
  SpeakingInvitationRequest
} from '@/types';
import {
  getStoredMessages,
  saveStoredMessages,
  getStoredBookings,
  saveStoredBookings,
  getStoredItinerary,
  saveStoredItinerary,
  checkForClashes
} from '@/lib/store';
import { AVAILABLE_COUNSELING_SLOTS, PASTOR_PROFILE } from '@/data/mockData';
import {
  LayoutDashboard,
  BookOpen,
  Calendar,
  Clock,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Plus,
  Trash2,
  Edit3,
  ExternalLink,
  MessageCircle,
  Phone,
  Users,
  Headphones,
  Upload,
  Lock,
  Shield,
  UserCheck,
  Send,
  Eye,
  Church
} from 'lucide-react';
import Link from 'next/link';

export default function AdminPortalClient() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'messages' | 'bookings' | 'schedule'>('dashboard');
  const [currentRole, setCurrentRole] = useState<'pastor' | 'secretary'>('pastor');

  // State collections
  const [messages, setMessages] = useState<SermonMessage[]>([]);
  const [bookings, setBookings] = useState<BookingRecord[]>([]);
  const [itinerary, setItinerary] = useState<ItineraryItem[]>([]);

  // Modals & form state
  const [showAddMessageModal, setShowAddMessageModal] = useState(false);
  const [showRescheduleModal, setShowRescheduleModal] = useState<BookingRecord | null>(null);
  const [rescheduleData, setRescheduleData] = useState({ date: '', timeSlot: '' });

  // Filter state for Bookings
  const [bookingFilterType, setBookingFilterType] = useState<string>('all');
  const [bookingFilterStatus, setBookingFilterStatus] = useState<string>('all');

  // New Message Form State
  const [newMessage, setNewMessage] = useState<Partial<SermonMessage>>({
    title: '',
    series: 'Diocesan Synod Charge',
    scriptureReference: '',
    durationMinutes: 45,
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    audioFileSizeMb: 11.5,
    summary: '',
    fullContent: '',
    mediaType: 'both',
    topics: ['Leadership & Purpose'],
    keyPoints: ['', ''],
    featured: false
  });

  // Load state
  useEffect(() => {
    setMessages(getStoredMessages());
    setBookings(getStoredBookings());
    setItinerary(getStoredItinerary());

    const refreshData = () => {
      setMessages(getStoredMessages());
      setBookings(getStoredBookings());
      setItinerary(getStoredItinerary());
    };

    window.addEventListener('messages_updated', refreshData);
    window.addEventListener('bookings_updated', refreshData);
    window.addEventListener('itinerary_updated', refreshData);

    return () => {
      window.removeEventListener('messages_updated', refreshData);
      window.removeEventListener('bookings_updated', refreshData);
      window.removeEventListener('itinerary_updated', refreshData);
    };
  }, []);

  // Update Booking Status
  const handleUpdateBookingStatus = (id: string, newStatus: BookingStatus, note?: string) => {
    const updated = bookings.map((b) => {
      if (b.id === id) {
        return {
          ...b,
          status: newStatus,
          adminNotes: note !== undefined ? note : b.adminNotes
        };
      }
      return b;
    });
    setBookings(updated);
    saveStoredBookings(updated);
  };

  // Confirm Reschedule
  const handleConfirmReschedule = () => {
    if (!showRescheduleModal) return;
    const updated = bookings.map((b) => {
      if (b.id === showRescheduleModal.id) {
        if (b.type === 'counseling') {
          return {
            ...b,
            date: rescheduleData.date || b.date,
            timeSlot: rescheduleData.timeSlot || b.timeSlot,
            status: 'rescheduled' as BookingStatus,
            adminNotes: `Rescheduled by ${currentRole === 'pastor' ? 'Bishop Ndubuisi Obi' : 'Diocesan Secretary'} to ${rescheduleData.date} (${rescheduleData.timeSlot})`
          };
        } else {
          return {
            ...b,
            startDate: rescheduleData.date || b.startDate,
            endDate: rescheduleData.date || b.endDate,
            timeSlot: rescheduleData.timeSlot || b.timeSlot,
            status: 'rescheduled' as BookingStatus,
            adminNotes: `Invitation rescheduled to ${rescheduleData.date}`
          };
        }
      }
      return b;
    });
    setBookings(updated);
    saveStoredBookings(updated);
    setShowRescheduleModal(null);
  };

  // Delete message
  const handleDeleteMessage = (id: string) => {
    if (confirm('Are you sure you want to remove this teaching from the archive?')) {
      const updated = messages.filter((m) => m.id !== id);
      setMessages(updated);
      saveStoredMessages(updated);
    }
  };

  // Handle Create Message
  const handleCreateMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.title || !newMessage.summary) {
      alert('Please enter title and summary');
      return;
    }

    const created: SermonMessage = {
      id: `msg-${Date.now()}`,
      title: newMessage.title || '',
      slug: (newMessage.title || 'message').toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      preacher: 'The Rt. Rev. Ndubuisi Obi',
      series: newMessage.series || 'Episcopal Charge',
      scriptureReference: newMessage.scriptureReference || 'Scripture Reference',
      datePreached: new Date().toISOString().split('T')[0],
      durationMinutes: Number(newMessage.durationMinutes) || 45,
      audioUrl: newMessage.audioUrl || '',
      audioFileSizeMb: Number(newMessage.audioFileSizeMb) || 12,
      summary: newMessage.summary || '',
      fullContent: newMessage.fullContent || '',
      mediaType: newMessage.mediaType || 'both',
      topics: (newMessage.topics as SermonTopic[]) || ['Leadership & Purpose'],
      featured: !!newMessage.featured,
      playCount: 1,
      keyPoints: newMessage.keyPoints?.filter(Boolean).length ? newMessage.keyPoints.filter(Boolean) : ['Key point 1']
    };

    const updated = [created, ...messages];
    setMessages(updated);
    saveStoredMessages(updated);
    setShowAddMessageModal(false);

    // Reset form
    setNewMessage({
      title: '',
      series: 'Diocesan Synod Charge',
      scriptureReference: '',
      durationMinutes: 45,
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      audioFileSizeMb: 11.5,
      summary: '',
      fullContent: '',
      mediaType: 'both',
      topics: ['Leadership & Purpose'],
      keyPoints: ['', ''],
      featured: false
    });
  };

  // WhatsApp reply generator
  const getWhatsAppReplyLink = (b: BookingRecord) => {
    const phoneClean = ('phone' in b ? b.phone : '').replace(/[^0-9]/g, '');
    let msgText = '';
    if (b.type === 'counseling') {
      msgText = `Grace and peace ${b.fullName}, this is the Diocesan Secretariat of Bishop Ndubuisi Obi regarding your episcopal audience booking (${b.referenceId}) on ${b.date} at ${b.timeSlot}. `;
      if (b.status === 'confirmed') {
        msgText += `Your audience with the Lord Bishop has been confirmed at Bishopscourt, Nnewi.`;
      } else if (b.status === 'rescheduled') {
        msgText += `We have adjusted your audience slot. Kindly confirm if this new time works for you.`;
      } else {
        msgText += `We are following up on your request.`;
      }
    } else {
      msgText = `Greetings ${b.contactPerson} (${b.organizationName}), regarding your invitation for Bishop Ndubuisi Obi (${b.referenceId}) on ${b.startDate}. `;
      if (b.status === 'confirmed') {
        msgText += `The Bishop has accepted and scheduled the engagement on his diocesan itinerary.`;
      } else {
        msgText += `Our secretariat is reviewing the dates with the episcopal itinerary team.`;
      }
    }
    return `https://wa.me/${phoneClean}?text=${encodeURIComponent(msgText)}`;
  };

  // Calculate metrics
  const totalListens = messages.reduce((acc, m) => acc + (m.playCount || 0), 0);
  const pendingBookings = bookings.filter((b) => b.status === 'pending');
  const confirmedBookings = bookings.filter((b) => b.status === 'confirmed');
  const clashingBookings = bookings.filter((b) => b.clashDetected && b.status !== 'declined');

  // Filter bookings list
  const filteredBookings = bookings.filter((b) => {
    if (bookingFilterType !== 'all' && b.type !== bookingFilterType) return false;
    if (bookingFilterStatus !== 'all' && b.status !== bookingFilterStatus) return false;
    return true;
  });

  return (
    <div className="space-y-8">
      {/* Top Staff Navigation & Role Switcher */}
      <div className="rounded-3xl bg-[#141416] border border-[#232326] p-5 sm:p-6 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-[#18181B] text-[#FF5500] border border-[#27272A] flex items-center justify-center font-bold">
            <Shield className="w-6 h-6 text-[#FF5500]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl sm:text-2xl font-display font-bold text-white">
                Episcopal Administration Portal
              </h1>
              <span className="text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full bg-[#FF5500]/15 text-[#FF7828] border border-[#FF5500]/30">
                Diocesan Staff
              </span>
            </div>
            <p className="text-xs text-zinc-400">
              Manage Synod charges & audio archives, track episcopal audiences, resolve itinerary clashes, and respond to invitations.
            </p>
          </div>
        </div>

        {/* Role Toggle Switch */}
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-1.5 bg-[#0D0D0E] p-1.5 rounded-2xl sm:rounded-full border border-[#27272A] shrink-0">
          <span className="text-[11px] text-zinc-500 px-3 font-semibold w-full sm:w-auto whitespace-nowrap">Active View:</span>
          <button
            onClick={() => setCurrentRole('pastor')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition flex-1 sm:flex-initial text-center whitespace-nowrap ${
              currentRole === 'pastor'
                ? 'bg-[#FF5500] text-white shadow-md shadow-[#FF5500]/25'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <span className="whitespace-nowrap">Bishop Ndubuisi Obi</span>
          </button>
          <button
            onClick={() => setCurrentRole('secretary')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition flex-1 sm:flex-initial text-center whitespace-nowrap ${
              currentRole === 'secretary'
                ? 'bg-[#FF5500] text-white shadow-md shadow-[#FF5500]/25'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <span className="whitespace-nowrap">Diocesan Secretary / Chaplain</span>
          </button>
        </div>
      </div>

      {/* Clash Alert Banner if any clashes detected */}
      {clashingBookings.length > 0 && (
        <div className="rounded-2xl bg-amber-950/40 border border-amber-500/40 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-[#FF5500] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-white">
                {clashingBookings.length} Potential Itinerary Conflict(s) Requiring Attention!
              </h4>
              <p className="text-xs text-amber-200 mt-0.5">
                Two or more appointments overlap on the same date or time slot. Review the requests below to approve, reschedule, or adjust.
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              setActiveTab('bookings');
              setBookingFilterStatus('pending');
            }}
            className="px-5 py-2 rounded-full bg-[#FF5500] text-white font-bold text-xs hover:bg-[#E64D00] shrink-0 shadow-md shadow-[#FF5500]/25 transition w-full sm:w-auto whitespace-nowrap"
          >
            <span className="whitespace-nowrap">Review Conflicted Slots</span>
          </button>
        </div>
      )}

      {/* Tabs Menu with Smooth Mobile Swipe */}
      <div className="flex overflow-x-auto pb-3 gap-2 border-b border-[#232326] scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
        <button
          onClick={() => setActiveTab('dashboard')}
          className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition shrink-0 whitespace-nowrap ${
            activeTab === 'dashboard'
              ? 'bg-[#FF5500] text-white shadow-lg shadow-[#FF5500]/20'
              : 'text-zinc-400 hover:text-white hover:bg-[#1A1A1E]'
          }`}
        >
          <LayoutDashboard className="w-4 h-4 shrink-0" />
          <span className="whitespace-nowrap">Dashboard Overview</span>
        </button>

        <button
          onClick={() => setActiveTab('bookings')}
          className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition shrink-0 whitespace-nowrap ${
            activeTab === 'bookings'
              ? 'bg-[#FF5500] text-white shadow-lg shadow-[#FF5500]/20'
              : 'text-zinc-400 hover:text-white hover:bg-[#1A1A1E]'
          }`}
        >
          <Calendar className="w-4 h-4 shrink-0" />
          <span className="whitespace-nowrap">
            Bookings &amp; Invitations ({pendingBookings.length} Pending)
          </span>
        </button>

        <button
          onClick={() => setActiveTab('messages')}
          className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition shrink-0 whitespace-nowrap ${
            activeTab === 'messages'
              ? 'bg-[#FF5500] text-white shadow-lg shadow-[#FF5500]/20'
              : 'text-zinc-400 hover:text-white hover:bg-[#1A1A1E]'
          }`}
        >
          <BookOpen className="w-4 h-4 shrink-0" />
          <span className="whitespace-nowrap">Synod Charges &amp; Sermons ({messages.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('schedule')}
          className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition shrink-0 whitespace-nowrap ${
            activeTab === 'schedule'
              ? 'bg-[#FF5500] text-white shadow-lg shadow-[#FF5500]/20'
              : 'text-zinc-400 hover:text-white hover:bg-[#1A1A1E]'
          }`}
        >
          <Clock className="w-4 h-4 shrink-0" />
          <span className="whitespace-nowrap">Bishop&apos;s Diary &amp; Availability</span>
        </button>
      </div>

      {/* TAB 1: DASHBOARD OVERVIEW */}
      {activeTab === 'dashboard' && (
        <div className="space-y-8">
          {/* Key Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-6 rounded-3xl bg-[#141416] border border-[#232326] space-y-2 shadow-xl">
              <span className="text-[11px] uppercase font-bold text-zinc-500">Total Teachings</span>
              <div className="flex items-baseline justify-between">
                <span className="text-3xl font-display font-bold text-white">{messages.length}</span>
                <BookOpen className="w-5 h-5 text-[#FF5500]" />
              </div>
              <span className="text-[11px] text-zinc-500">Audio + Written Expositions</span>
            </div>

            <div className="p-6 rounded-3xl bg-[#141416] border border-[#232326] space-y-2 shadow-xl">
              <span className="text-[11px] uppercase font-bold text-zinc-500">Monthly Streams</span>
              <div className="flex items-baseline justify-between">
                <span className="text-3xl font-display font-bold text-emerald-400">
                  {totalListens.toLocaleString()}
                </span>
                <Headphones className="w-5 h-5 text-emerald-400" />
              </div>
              <span className="text-[11px] text-zinc-500">Low-data mobile listeners</span>
            </div>

            <div className="p-6 rounded-3xl bg-[#141416] border border-[#232326] space-y-2 shadow-xl">
              <span className="text-[11px] uppercase font-bold text-zinc-500">Pending Requests</span>
              <div className="flex items-baseline justify-between">
                <span className="text-3xl font-display font-bold text-[#FF7828]">
                  {pendingBookings.length}
                </span>
                <Clock className="w-5 h-5 text-[#FF5500]" />
              </div>
              <span className="text-[11px] text-[#FF7828] font-semibold">Requires review / reply</span>
            </div>

            <div className="p-6 rounded-3xl bg-[#141416] border border-[#232326] space-y-2 shadow-xl">
              <span className="text-[11px] uppercase font-bold text-zinc-500">Confirmed Dates</span>
              <div className="flex items-baseline justify-between">
                <span className="text-3xl font-display font-bold text-white">
                  {confirmedBookings.length}
                </span>
                <CheckCircle2 className="w-5 h-5 text-[#FF5500]" />
              </div>
              <span className="text-[11px] text-zinc-500">Locked on diocesan diary</span>
            </div>
          </div>

          {/* Quick Actions & Recent Incoming Bookings */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Recent Pending Requests */}
            <div className="lg:col-span-8 rounded-3xl bg-[#141416] border border-[#232326] p-6 sm:p-8 space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-bold text-white">
                  Incoming Booking & Invitation Requests
                </h3>
                <button
                  onClick={() => setActiveTab('bookings')}
                  className="text-xs text-[#FF7828] font-bold hover:underline"
                >
                  View All ({bookings.length}) →
                </button>
              </div>

              <div className="space-y-3">
                {bookings.slice(0, 4).map((b) => (
                  <div
                    key={b.id}
                    className="p-4 rounded-2xl bg-[#0D0D0E] border border-[#232326] flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-mono font-bold text-[#FF5500]">
                          {b.referenceId}
                        </span>
                        <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-[#18181B] text-zinc-300 border border-[#27272A]">
                          {b.type}
                        </span>
                        {b.clashDetected && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-950/60 text-red-300 border border-red-500/40">
                            Clash Alert
                          </span>
                        )}
                      </div>
                      <h4 className="text-sm font-semibold text-white">
                        {b.type === 'counseling' ? b.fullName : b.organizationName}
                      </h4>
                      <p className="text-xs text-zinc-400">
                        {b.type === 'counseling'
                          ? `${b.date} • ${b.timeSlot} (${b.category})`
                          : `${b.startDate} to ${b.endDate} • ${b.eventTheme}`}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span
                        className={`text-[10px] font-bold uppercase px-3 py-1 rounded-full ${
                          b.status === 'confirmed'
                            ? 'bg-emerald-950/40 text-emerald-400 border border-emerald-500/30'
                            : b.status === 'rescheduled'
                            ? 'bg-amber-950/40 text-amber-300 border border-amber-500/30'
                            : b.status === 'declined'
                            ? 'bg-red-950/40 text-red-400 border border-red-500/30'
                            : 'bg-[#FF5500]/15 text-[#FF7828] border border-[#FF5500]/30'
                        }`}
                      >
                        {b.status}
                      </span>
                      <button
                        onClick={() => {
                          setActiveTab('bookings');
                        }}
                        className="p-1.5 px-3 rounded-full bg-[#1E1E22] hover:bg-[#27272A] text-zinc-300 text-xs border border-[#2E2E33] font-semibold transition"
                        title="Manage"
                      >
                        Manage
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Staff Controls */}
            <div className="lg:col-span-4 space-y-4">
              <div className="rounded-3xl bg-[#141416] border border-[#232326] p-6 space-y-4 shadow-xl">
                <h3 className="font-display text-base font-bold text-white">Diocesan Quick Actions</h3>
                <div className="space-y-2.5">
                  <button
                    onClick={() => {
                      setActiveTab('messages');
                      setShowAddMessageModal(true);
                    }}
                    className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-[#0D0D0E] hover:bg-[#1A1A1E] text-zinc-200 border border-[#27272A] text-xs font-semibold transition"
                  >
                    <span className="flex items-center gap-2">
                      <Plus className="w-4 h-4 text-[#FF5500]" />
                      <span>Upload New Sermon / Synod Charge</span>
                    </span>
                    <span className="text-[#FF5500]">→</span>
                  </button>

                  <button
                    onClick={() => {
                      setActiveTab('schedule');
                    }}
                    className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-[#0D0D0E] hover:bg-[#1A1A1E] text-zinc-200 border border-[#27272A] text-xs font-semibold transition"
                  >
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#FF7828]" />
                      <span>Block Out Episcopal Dates</span>
                    </span>
                    <span className="text-[#FF5500]">→</span>
                  </button>

                  <Link
                    href="/messages"
                    className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-[#0D0D0E] hover:bg-[#1A1A1E] text-zinc-200 border border-[#27272A] text-xs font-semibold transition"
                  >
                    <span className="flex items-center gap-2">
                      <Eye className="w-4 h-4 text-[#FF5500]" />
                      <span>View Public Messages Library</span>
                    </span>
                    <span className="text-[#FF5500]">→</span>
                  </Link>

                  <a
                    href={`https://wa.me/${PASTOR_PROFILE.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-emerald-950/30 hover:bg-emerald-950/50 text-emerald-300 border border-emerald-500/30 text-xs font-semibold transition"
                  >
                    <span className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-emerald-400" />
                      <span>Open Bishopscourt WhatsApp Desk</span>
                    </span>
                    <span className="text-emerald-400">→</span>
                  </a>
                </div>
              </div>

              {/* Pastor's Note */}
              <div className="rounded-3xl bg-[#141416] border border-[#232326] p-5 space-y-2 text-xs text-zinc-400 shadow-xl">
                <span className="font-bold text-[#FF7828] block uppercase tracking-wider">
                  Episcopal Calendar Guidelines
                </span>
                <p>
                  Pastoral counseling sessions are restricted to Tuesdays & Thursdays at Bishopscourt to allow the Lord Bishop focused time for diocesan administration, parish confirmations, and intercession.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: BOOKINGS & INVITATIONS MANAGER */}
      {activeTab === 'bookings' && (
        <div className="space-y-6">
          {/* Filters Bar */}
          <div className="p-4 rounded-2xl bg-[#141416] border border-[#232326] flex flex-wrap items-center justify-between gap-4 shadow-xl">
            <div className="flex flex-wrap items-center gap-3">
              <div>
                <label className="text-[10px] uppercase font-semibold text-zinc-500 block mb-1">
                  Type
                </label>
                <select
                  value={bookingFilterType}
                  onChange={(e) => setBookingFilterType(e.target.value)}
                  className="bg-[#0D0D0E] border border-[#27272A] rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#FF5500]"
                >
                  <option value="all">All Request Types</option>
                  <option value="counseling">Counseling Appointments</option>
                  <option value="invitation">Speaking Invitations</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] uppercase font-semibold text-zinc-500 block mb-1">
                  Status
                </label>
                <select
                  value={bookingFilterStatus}
                  onChange={(e) => setBookingFilterStatus(e.target.value)}
                  className="bg-[#0D0D0E] border border-[#27272A] rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#FF5500]"
                >
                  <option value="all">All Statuses</option>
                  <option value="pending">Pending Only</option>
                  <option value="confirmed">Confirmed Only</option>
                  <option value="rescheduled">Rescheduled</option>
                  <option value="declined">Declined</option>
                </select>
              </div>
            </div>

            <div className="text-xs text-zinc-400">
              Showing <strong className="text-white">{filteredBookings.length}</strong> record(s)
            </div>
          </div>

          {/* Bookings List */}
          <div className="space-y-4">
            {filteredBookings.length === 0 ? (
              <div className="p-12 text-center rounded-3xl bg-[#141416] border border-[#232326] shadow-xl">
                <p className="text-zinc-500 text-sm">No bookings match the selected filters.</p>
              </div>
            ) : (
              filteredBookings.map((b) => (
                <div
                  key={b.id}
                  className={`rounded-3xl bg-[#141416] border p-6 space-y-4 transition-all shadow-xl ${
                    b.clashDetected && b.status !== 'declined'
                      ? 'border-[#FF5500]/60 bg-[#161412]'
                      : 'border-[#232326]'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-mono font-bold text-[#FF5500]">
                        {b.referenceId}
                      </span>
                      <span className="text-[11px] uppercase font-bold px-3 py-0.5 rounded-full bg-[#18181B] text-zinc-300 border border-[#27272A]">
                        {b.type === 'counseling' ? 'Audience (1-on-1)' : `Invitation (${b.eventType})`}
                      </span>
                      {b.clashDetected && (
                        <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-red-950/60 text-red-300 border border-red-500/40 flex items-center gap-1">
                          <AlertTriangle className="w-3.5 h-3.5" />
                          <span>Schedule Conflict</span>
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs font-bold uppercase px-3 py-1 rounded-full ${
                          b.status === 'confirmed'
                            ? 'bg-emerald-950/40 text-emerald-400 border border-emerald-500/30'
                            : b.status === 'rescheduled'
                            ? 'bg-amber-950/40 text-amber-300 border border-amber-500/30'
                            : b.status === 'declined'
                            ? 'bg-red-950/40 text-red-400 border border-red-500/30'
                            : 'bg-[#FF5500]/15 text-[#FF7828] border border-[#FF5500]/30'
                        }`}
                      >
                        {b.status}
                      </span>
                    </div>
                  </div>

                  {/* Body Details */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs bg-[#0D0D0E] p-4 rounded-2xl border border-[#232326]">
                    <div>
                      <span className="text-zinc-500 block mb-0.5">Requester / Organization:</span>
                      <p className="font-bold text-white text-sm">
                        {b.type === 'counseling' ? b.fullName : b.organizationName}
                      </p>
                      <p className="text-zinc-400 mt-1">
                        Contact: {b.type === 'counseling' ? b.phone : `${b.contactPerson} (${b.phone})`}
                      </p>
                    </div>

                    <div>
                      <span className="text-zinc-500 block mb-0.5">Requested Date & Slot:</span>
                      <p className="font-bold text-white text-sm">
                        {b.type === 'counseling'
                          ? `${b.date} • ${b.timeSlot}`
                          : `${b.startDate} to ${b.endDate}`}
                      </p>
                      <p className="text-zinc-400 mt-1">
                        Mode / Venue: {b.type === 'counseling' ? b.meetingMode : b.venueCityState}
                      </p>
                    </div>

                    <div>
                      <span className="text-zinc-500 block mb-0.5">Subject / Theme:</span>
                      <p className="font-bold text-[#FF7828]">
                        {b.type === 'counseling' ? b.category : b.eventTheme}
                      </p>
                      {b.notes && <p className="text-zinc-400 mt-1 italic">&ldquo;{b.notes}&rdquo;</p>}
                    </div>
                  </div>

                  {/* Admin notes */}
                  {b.adminNotes && (
                    <p className="text-xs text-[#FF7828] bg-[#18181B] p-3 rounded-xl border border-[#FF5500]/25">
                      <strong>Secretariat note:</strong> {b.adminNotes}
                    </p>
                  )}

                  {/* Action Controls for Pastor/Admin */}
                  <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-[#232326]">
                    <div className="flex flex-wrap items-center gap-2">
                      {b.status !== 'confirmed' && (
                        <button
                          onClick={() => handleUpdateBookingStatus(b.id, 'confirmed')}
                          className="px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition flex items-center gap-1.5 shadow-md shadow-emerald-950/40"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Approve & Confirm</span>
                        </button>
                      )}

                      <button
                        onClick={() => {
                          setShowRescheduleModal(b);
                          setRescheduleData({
                            date: b.type === 'counseling' ? b.date : b.startDate,
                            timeSlot: b.timeSlot
                          });
                        }}
                        className="px-4 py-2 rounded-full bg-[#1E1E22] hover:bg-[#27272A] text-zinc-200 border border-[#2E2E33] text-xs font-semibold transition flex items-center gap-1.5"
                      >
                        <Clock className="w-3.5 h-3.5 text-[#FF5500]" />
                        <span>Reschedule Slot</span>
                      </button>

                      {b.status !== 'declined' && (
                        <button
                          onClick={() => {
                            const reason = prompt('Optional reason for declining:');
                            handleUpdateBookingStatus(
                              b.id,
                              'declined',
                              reason ? `Declined: ${reason}` : 'Declined by episcopal office due to itinerary fullness.'
                            );
                          }}
                          className="px-4 py-2 rounded-full bg-[#1E1E22] hover:bg-red-950/40 hover:text-red-400 text-zinc-400 border border-[#2E2E33] text-xs transition flex items-center gap-1.5"
                        >
                          <XCircle className="w-3.5 h-3.5" />
                          <span>Decline</span>
                        </button>
                      )}
                    </div>

                    {/* WhatsApp Action Button */}
                    <a
                      href={getWhatsAppReplyLink(b)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-950/60 text-xs font-semibold flex items-center gap-1.5 transition"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Send WhatsApp Notification</span>
                    </a>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* TAB 3: MESSAGES & SERMONS MANAGER */}
      {activeTab === 'messages' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-lg font-bold text-white">
              Synod Charges & Sermon Archive Management
            </h3>
            <button
              onClick={() => setShowAddMessageModal(true)}
              className="px-5 py-2.5 rounded-full bg-[#FF5500] hover:bg-[#E64D00] text-white font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-[#FF5500]/25 transition"
            >
              <Plus className="w-4 h-4" />
              <span>Add New Synod Charge / Sermon</span>
            </button>
          </div>

          <div className="space-y-4">
            {messages.map((m) => (
              <div
                key={m.id}
                className="p-5 rounded-3xl bg-[#141416] border border-[#232326] flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xl"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#18181B] text-[#FF5500] border border-[#27272A]">
                      {m.series}
                    </span>
                    <span className="text-xs text-zinc-400">Delivered: {m.datePreached}</span>
                    <span className="text-xs text-zinc-600">•</span>
                    <span className="text-xs text-[#FF7828] font-mono font-semibold">{m.scriptureReference}</span>
                    {m.featured && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-950/60 text-emerald-400 border border-emerald-500/30">
                        Featured
                      </span>
                    )}
                  </div>
                  <h4 className="text-base font-bold text-white">{m.title}</h4>
                  <p className="text-xs text-zinc-400 line-clamp-1">{m.summary}</p>
                  <p className="text-[11px] text-zinc-500">
                    Format: {m.mediaType.toUpperCase()} • {m.durationMinutes} mins • {m.audioFileSizeMb || 12} MB • {m.playCount || 0} listens
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <Link
                    href={`/messages/${m.id}`}
                    className="p-2 rounded-full bg-[#1E1E22] hover:bg-[#27272A] text-zinc-300 text-xs border border-[#2E2E33] transition"
                    title="View public page"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                  <button
                    onClick={() => handleDeleteMessage(m.id)}
                    className="p-2 rounded-full bg-[#1E1E22] hover:bg-red-950/50 hover:text-red-400 text-zinc-500 text-xs border border-[#2E2E33] transition"
                    title="Delete message"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: SCHEDULE & ITINERARY */}
      {activeTab === 'schedule' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-display text-lg font-bold text-white">
                Bishop Ndubuisi Obi&apos;s Diocesan Diary & Calendar Blocks
              </h3>
              <p className="text-xs text-zinc-400">
                Blocked dates prevent parishes and event organizers from scheduling on days the Lord Bishop is away attending Synod or Episcopal Standing Committee meetings.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {itinerary.map((item) => (
              <div
                key={item.id}
                className={`p-5 rounded-3xl border space-y-2 shadow-xl ${
                  item.type === 'Pastoral Blocked'
                    ? 'bg-red-950/20 border-red-500/30'
                    : 'bg-[#141416] border-[#232326]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full ${
                      item.type === 'Pastoral Blocked'
                        ? 'bg-red-950/60 text-red-400 border border-red-500/30'
                        : 'bg-[#18181B] text-[#FF5500] border border-[#27272A] font-bold'
                    }`}
                  >
                    {item.type}
                  </span>
                  <span className="text-xs font-mono text-zinc-400 font-semibold">
                    {item.date} {item.endDate ? `to ${item.endDate}` : ''}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white">{item.title}</h4>
                <p className="text-xs text-zinc-400">{item.description}</p>
                <div className="text-[11px] text-zinc-500 flex items-center justify-between pt-2 border-t border-[#232326]">
                  <span>Time: {item.time}</span>
                  <span>Location: {item.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ADD NEW MESSAGE MODAL */}
      {showAddMessageModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#141416] border border-[#232326] rounded-3xl p-6 sm:p-8 max-w-2xl w-full my-8 space-y-6 shadow-2xl text-white">
            <div className="flex items-center justify-between pb-4 border-b border-[#232326]">
              <h3 className="text-xl font-display font-bold text-white">
                Upload New Synod Charge / Written Article
              </h3>
              <button
                onClick={() => setShowAddMessageModal(false)}
                className="text-zinc-500 hover:text-white text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateMessageSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-400 mb-1">
                  Teaching / Synod Title *
                </label>
                <input
                  type="text"
                  required
                  value={newMessage.title}
                  onChange={(e) => setNewMessage({ ...newMessage, title: e.target.value })}
                  placeholder="e.g. Divine Wisdom for Times of National Crisis"
                  className="w-full px-4 py-2.5 bg-[#0D0D0E] border border-[#27272A] rounded-xl text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-[#FF5500]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-zinc-400 mb-1">Series</label>
                  <input
                    type="text"
                    value={newMessage.series}
                    onChange={(e) => setNewMessage({ ...newMessage, series: e.target.value })}
                    placeholder="e.g. Diocesan Synod Charge"
                    className="w-full px-4 py-2.5 bg-[#0D0D0E] border border-[#27272A] rounded-xl text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-[#FF5500]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-400 mb-1">
                    Scripture Reference
                  </label>
                  <input
                    type="text"
                    value={newMessage.scriptureReference}
                    onChange={(e) =>
                      setNewMessage({ ...newMessage, scriptureReference: e.target.value })
                    }
                    placeholder="e.g. Proverbs 3:5-10"
                    className="w-full px-4 py-2.5 bg-[#0D0D0E] border border-[#27272A] rounded-xl text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-[#FF5500]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-zinc-400 mb-1">Format</label>
                  <select
                    value={newMessage.mediaType}
                    onChange={(e) =>
                      setNewMessage({ ...newMessage, mediaType: e.target.value as any })
                    }
                    className="w-full px-3 py-2 bg-[#0D0D0E] border border-[#27272A] rounded-xl text-white text-xs focus:outline-none focus:border-[#FF5500]"
                  >
                    <option value="both" className="bg-[#141416]">Both (Audio & Written)</option>
                    <option value="audio" className="bg-[#141416]">Audio Sermon Only</option>
                    <option value="written" className="bg-[#141416]">Written Article Only</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-400 mb-1">
                    Duration (Mins)
                  </label>
                  <input
                    type="number"
                    value={newMessage.durationMinutes}
                    onChange={(e) =>
                      setNewMessage({ ...newMessage, durationMinutes: Number(e.target.value) })
                    }
                    className="w-full px-3 py-2 bg-[#0D0D0E] border border-[#27272A] rounded-xl text-white text-xs focus:outline-none focus:border-[#FF5500]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-400 mb-1">
                    File Size (MB)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={newMessage.audioFileSizeMb}
                    onChange={(e) =>
                      setNewMessage({ ...newMessage, audioFileSizeMb: Number(e.target.value) })
                    }
                    className="w-full px-3 py-2 bg-[#0D0D0E] border border-[#27272A] rounded-xl text-white text-xs focus:outline-none focus:border-[#FF5500]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-400 mb-1">
                  Audio Stream / MP3 URL
                </label>
                <input
                  type="url"
                  value={newMessage.audioUrl}
                  onChange={(e) => setNewMessage({ ...newMessage, audioUrl: e.target.value })}
                  placeholder="https://.../sermon.mp3"
                  className="w-full px-4 py-2.5 bg-[#0D0D0E] border border-[#27272A] rounded-xl text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-[#FF5500]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-400 mb-1">
                  Short Summary *
                </label>
                <textarea
                  rows={2}
                  required
                  value={newMessage.summary}
                  onChange={(e) => setNewMessage({ ...newMessage, summary: e.target.value })}
                  placeholder="A brief 2-sentence synopsis for congregants..."
                  className="w-full px-4 py-2 bg-[#0D0D0E] border border-[#27272A] rounded-xl text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-[#FF5500]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-400 mb-1">
                  Full Teaching Transcript / Exegesis
                </label>
                <textarea
                  rows={4}
                  value={newMessage.fullContent}
                  onChange={(e) => setNewMessage({ ...newMessage, fullContent: e.target.value })}
                  placeholder="Full teaching transcript, outline, scripture references..."
                  className="w-full px-4 py-2 bg-[#0D0D0E] border border-[#27272A] rounded-xl text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-[#FF5500]"
                />
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="featuredToggle"
                  checked={newMessage.featured}
                  onChange={(e) => setNewMessage({ ...newMessage, featured: e.target.checked })}
                  className="w-4 h-4 rounded text-[#FF5500] focus:ring-[#FF5500] accent-[#FF5500]"
                />
                <label htmlFor="featuredToggle" className="text-xs text-zinc-300">
                  Feature this sermon on the diocesan homepage spotlight
                </label>
              </div>

              <div className="pt-4 flex justify-end gap-3 border-t border-[#232326]">
                <button
                  type="button"
                  onClick={() => setShowAddMessageModal(false)}
                  className="px-5 py-2.5 rounded-full bg-[#1E1E22] text-zinc-300 text-xs hover:bg-[#27272A] border border-[#2E2E33] transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-[#FF5500] text-white font-bold text-xs hover:bg-[#E64D00] shadow-lg shadow-[#FF5500]/25 transition"
                >
                  Publish Message
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* RESCHEDULE MODAL */}
      {showRescheduleModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#141416] border border-[#232326] rounded-3xl p-6 sm:p-8 max-w-md w-full space-y-4 shadow-2xl text-white">
            <h3 className="text-lg font-display font-bold text-white">
              Reschedule: {showRescheduleModal.referenceId}
            </h3>
            <p className="text-xs text-zinc-400">
              Select a new date and time slot for{' '}
              {showRescheduleModal.type === 'counseling'
                ? showRescheduleModal.fullName
                : showRescheduleModal.organizationName}
              .
            </p>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-zinc-400 mb-1">New Date</label>
                <input
                  type="date"
                  value={rescheduleData.date}
                  onChange={(e) => setRescheduleData({ ...rescheduleData, date: e.target.value })}
                  className="w-full px-3 py-2 bg-[#0D0D0E] border border-[#27272A] rounded-xl text-white text-xs focus:outline-none focus:border-[#FF5500]"
                />
              </div>

              {showRescheduleModal.type === 'counseling' && (
                <div>
                  <label className="block text-xs font-semibold text-zinc-400 mb-1">New Time Slot</label>
                  <select
                    value={rescheduleData.timeSlot}
                    onChange={(e) =>
                      setRescheduleData({ ...rescheduleData, timeSlot: e.target.value })
                    }
                    className="w-full px-3 py-2 bg-[#0D0D0E] border border-[#27272A] rounded-xl text-white text-xs focus:outline-none focus:border-[#FF5500]"
                  >
                    {AVAILABLE_COUNSELING_SLOTS.map((s) => (
                      <option key={s} value={s} className="bg-[#141416]">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>

            <div className="pt-4 flex justify-end gap-3 border-t border-[#232326]">
              <button
                onClick={() => setShowRescheduleModal(null)}
                className="px-5 py-2.5 rounded-full bg-[#1E1E22] text-zinc-300 text-xs hover:bg-[#27272A] border border-[#2E2E33] transition"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmReschedule}
                className="px-6 py-2.5 rounded-full bg-[#FF5500] text-white font-bold text-xs hover:bg-[#E64D00] shadow-lg shadow-[#FF5500]/25 transition"
              >
                Save & Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
