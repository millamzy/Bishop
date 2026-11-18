import { NextResponse } from 'next/server';
import { INITIAL_BOOKINGS } from '@/data/mockData';
import { BookingRecord } from '@/types';

let serverBookings: BookingRecord[] = [...INITIAL_BOOKINGS];

export async function PATCH(
  request: Request,
  props: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await props.params;
    const body = await request.json();

    const index = serverBookings.findIndex((b) => b.id === id || b.referenceId === id);
    if (index === -1) {
      return NextResponse.json({ error: 'Booking record not found' }, { status: 404 });
    }

    serverBookings[index] = {
      ...serverBookings[index],
      ...body
    };

    return NextResponse.json(serverBookings[index]);
  } catch {
    return NextResponse.json({ error: 'Failed to update booking' }, { status: 400 });
  }
}

