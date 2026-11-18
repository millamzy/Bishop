import { NextResponse } from 'next/server';
import { INITIAL_BOOKINGS, INITIAL_ITINERARY } from '@/data/mockData';
import { BookingRecord } from '@/types';

let serverBookings: BookingRecord[] = [...INITIAL_BOOKINGS];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');
  const status = searchParams.get('status');
  const referenceId = searchParams.get('referenceId');

  let results = serverBookings;

  if (referenceId) {
    results = results.filter((b) => b.referenceId.toLowerCase() === referenceId.toLowerCase());
    return NextResponse.json(results);
  }

  if (type && type !== 'all') {
    results = results.filter((b) => b.type === type);
  }

  if (status && status !== 'all') {
    results = results.filter((b) => b.status === status);
  }

  return NextResponse.json(results);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const isCounseling = body.type === 'counseling';

    // Clash detection on server
    const targetDate = isCounseling ? body.date : body.startDate;
    const targetSlot = isCounseling ? body.timeSlot : undefined;
    const targetEndDate = !isCounseling ? body.endDate : undefined;

    const hasClash = serverBookings.some((b) => {
      if (b.status === 'declined') return false;
      if (b.type === 'counseling' && isCounseling) {
        return b.date === targetDate && b.timeSlot === targetSlot;
      }
      return false;
    });

    const prefix = isCounseling ? 'PST' : 'INV';
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const referenceId = `${prefix}-${new Date().getFullYear()}-${randomSuffix}`;

    const newBooking: BookingRecord = {
      ...body,
      id: `book-${Date.now()}`,
      referenceId,
      status: 'pending',
      clashDetected: hasClash,
      createdAt: new Date().toISOString()
    };

    serverBookings = [newBooking, ...serverBookings];
    return NextResponse.json(
      {
        booking: newBooking,
        clashWarning: hasClash
          ? 'Notice: A potential scheduling overlap was detected. The pastoral desk will review availability.'
          : null
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json({ error: 'Failed to process booking request' }, { status: 400 });
  }
}

