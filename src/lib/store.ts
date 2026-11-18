'use client';

import { SermonMessage, BookingRecord, ItineraryItem, CounselingRequest, SpeakingInvitationRequest } from '@/types';
import { INITIAL_MESSAGES, INITIAL_BOOKINGS, INITIAL_ITINERARY } from '@/data/mockData';

const MESSAGES_KEY = 'bishop_sermon_messages';
const BOOKINGS_KEY = 'bishop_booking_records';
const ITINERARY_KEY = 'bishop_itinerary_records';

export function getStoredMessages(): SermonMessage[] {
  if (typeof window === 'undefined') return INITIAL_MESSAGES;
  try {
    const raw = localStorage.getItem(MESSAGES_KEY);
    if (!raw) {
      localStorage.setItem(MESSAGES_KEY, JSON.stringify(INITIAL_MESSAGES));
      return INITIAL_MESSAGES;
    }
    const parsed: SermonMessage[] = JSON.parse(raw);
    const enriched = parsed.map((m) => {
      const initial = INITIAL_MESSAGES.find((im) => im.id === m.id);
      if (initial && !m.youtubeVideoId && initial.youtubeVideoId) {
        return {
          ...m,
          youtubeVideoId: initial.youtubeVideoId,
          youtubeUrl: initial.youtubeUrl,
          videoThumbnailUrl: initial.videoThumbnailUrl
        };
      }
      return m;
    });
    return enriched;
  } catch {
    return INITIAL_MESSAGES;
  }
}

export function saveStoredMessages(messages: SermonMessage[]) {
  if (typeof window !== 'undefined') {
    localStorage.setItem(MESSAGES_KEY, JSON.stringify(messages));
    window.dispatchEvent(new Event('messages_updated'));
  }
}

export function getStoredBookings(): BookingRecord[] {
  if (typeof window === 'undefined') return INITIAL_BOOKINGS;
  try {
    const raw = localStorage.getItem(BOOKINGS_KEY);
    if (!raw) {
      localStorage.setItem(BOOKINGS_KEY, JSON.stringify(INITIAL_BOOKINGS));
      return INITIAL_BOOKINGS;
    }
    return JSON.parse(raw);
  } catch {
    return INITIAL_BOOKINGS;
  }
}

export function saveStoredBookings(bookings: BookingRecord[]) {
  if (typeof window !== 'undefined') {
    localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings));
    window.dispatchEvent(new Event('bookings_updated'));
  }
}

export function getStoredItinerary(): ItineraryItem[] {
  if (typeof window === 'undefined') return INITIAL_ITINERARY;
  try {
    const raw = localStorage.getItem(ITINERARY_KEY);
    if (!raw) {
      localStorage.setItem(ITINERARY_KEY, JSON.stringify(INITIAL_ITINERARY));
      return INITIAL_ITINERARY;
    }
    return JSON.parse(raw);
  } catch {
    return INITIAL_ITINERARY;
  }
}

export function saveStoredItinerary(itinerary: ItineraryItem[]) {
  if (typeof window !== 'undefined') {
    localStorage.setItem(ITINERARY_KEY, JSON.stringify(itinerary));
    window.dispatchEvent(new Event('itinerary_updated'));
  }
}

// Conflict / Clash Engine
export interface ClashCheckResult {
  hasClash: boolean;
  clashingRecords: BookingRecord[];
  clashingItinerary: ItineraryItem[];
  reason?: string;
}

export function checkForClashes(
  date: string,
  timeSlot?: string,
  endDate?: string,
  excludeId?: string
): ClashCheckResult {
  const bookings = getStoredBookings();
  const itinerary = getStoredItinerary();

  const clashingBookings = bookings.filter((b) => {
    if (excludeId && b.id === excludeId) return false;
    if (b.status === 'declined') return false; // Declined slots don't clash

    if (b.type === 'counseling') {
      const sameDate = b.date === date;
      const sameSlot = timeSlot ? b.timeSlot === timeSlot : true;
      return sameDate && sameSlot;
    } else {
      // Invitation
      // Check date overlaps
      const startA = new Date(b.startDate).getTime();
      const endA = new Date(b.endDate || b.startDate).getTime();
      const targetStart = new Date(date).getTime();
      const targetEnd = new Date(endDate || date).getTime();

      const overlaps = targetStart <= endA && targetEnd >= startA;
      return overlaps;
    }
  });

  const clashingItin = itinerary.filter((item) => {
    if (item.type === 'Pastoral Blocked') {
      const startA = new Date(item.date).getTime();
      const endA = new Date(item.endDate || item.date).getTime();
      const targetStart = new Date(date).getTime();
      const targetEnd = new Date(endDate || date).getTime();
      return targetStart <= endA && targetEnd >= startA;
    }
    return false;
  });

  const hasClash = clashingBookings.length > 0 || clashingItin.length > 0;
  let reason: string | undefined;

  if (clashingItin.length > 0) {
    reason = `Bishop Ndubuisi Obi is scheduled for "${clashingItin[0].title}" on this date and is unavailable.`;
  } else if (clashingBookings.length > 0) {
    const c = clashingBookings[0];
    if (c.type === 'counseling') {
      reason = `This audience slot (${c.timeSlot}) on ${c.date} has already been reserved.`;
    } else {
      reason = `Bishop Ndubuisi Obi is already booked for "${c.eventTheme}" by ${c.organizationName} on this date.`;
    }
  }

  return {
    hasClash,
    clashingRecords: clashingBookings,
    clashingItinerary: clashingItin,
    reason
  };
}

export function createCounselingRequest(
  data: Omit<CounselingRequest, 'id' | 'referenceId' | 'status' | 'createdAt' | 'type'>
): { booking: CounselingRequest; clash: ClashCheckResult } {
  const clash = checkForClashes(data.date, data.timeSlot);
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  const referenceId = `PST-${new Date().getFullYear()}-${randomSuffix}`;

  const newBooking: CounselingRequest = {
    ...data,
    id: `book-${Date.now()}`,
    referenceId,
    type: 'counseling',
    status: clash.hasClash ? 'pending' : 'pending',
    clashDetected: clash.hasClash,
    createdAt: new Date().toISOString()
  };

  const current = getStoredBookings();
  saveStoredBookings([newBooking, ...current]);
  return { booking: newBooking, clash };
}

export function createSpeakingInvitation(
  data: Omit<SpeakingInvitationRequest, 'id' | 'referenceId' | 'status' | 'createdAt' | 'type'>
): { booking: SpeakingInvitationRequest; clash: ClashCheckResult } {
  const clash = checkForClashes(data.startDate, undefined, data.endDate);
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  const referenceId = `INV-${new Date().getFullYear()}-${randomSuffix}`;

  const newBooking: SpeakingInvitationRequest = {
    ...data,
    id: `inv-${Date.now()}`,
    referenceId,
    type: 'invitation',
    status: 'pending',
    clashDetected: clash.hasClash,
    createdAt: new Date().toISOString()
  };

  const current = getStoredBookings();
  saveStoredBookings([newBooking, ...current]);
  return { booking: newBooking, clash };
}

