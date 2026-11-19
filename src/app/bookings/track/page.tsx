import React, { Suspense } from 'react';
import TrackBookingClient from '@/components/booking/TrackBookingClient';

export const metadata = {
  title: 'Track Booking Status | Bishop Ndubuisi Obi (Diocese of Nnewi)',
  description:
    'Check the live status of your episcopal audience appointment or ministry invitation request with your Reference ID.',
};

export default function TrackBookingPage() {
  return (
    <div className="flex-1 bg-[#0D0D0E] text-white py-16 sm:py-24 min-h-screen">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10">
        <Suspense
          fallback={
            <div className="text-center py-20 text-zinc-500">
              Loading booking tracker...
            </div>
          }
        >
          <TrackBookingClient />
        </Suspense>
      </div>
    </div>
  );
}
