import React, { Suspense } from 'react';
import BookingPortalClient from '@/components/booking/BookingPortalClient';

export const metadata = {
  title: 'Book Episcopal Audience & Diocesan Invitations | Bishop Ndubuisi Obi',
  description:
    'Schedule a confidential pastoral audience with the Lord Bishop at Bishopscourt, Nnewi or submit invitations for diocesan synods, parish confirmations, and anniversaries with automated conflict-checking.',
};

export default function BookPage() {
  return (
    <div className="flex-1 bg-[#0D0D0E] text-white py-16 sm:py-24 min-h-screen">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10">
        <Suspense
          fallback={
            <div className="text-center py-20 text-zinc-500">
              Loading calendar & booking portal...
            </div>
          }
        >
          <BookingPortalClient />
        </Suspense>
      </div>
    </div>
  );
}
