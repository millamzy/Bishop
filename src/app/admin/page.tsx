import React, { Suspense } from 'react';
import AdminPortalClient from '@/components/admin/AdminPortalClient';

export const metadata = {
  title: 'Diocesan Secretariat Portal | Bishop Ndubuisi Obi',
  description:
    'Administrative portal for Bishop Ndubuisi Obi and the Anglican Diocese of Nnewi secretariat to manage sermon uploads, episcopal audiences, schedule conflicts, and diocesan invitations.',
};

export default function AdminPage() {
  return (
    <div className="flex-1 bg-[#0D0D0E] text-white py-16 sm:py-24 min-h-screen">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-10">
        <Suspense
          fallback={
            <div className="text-center py-20 text-zinc-500">
              Loading administration portal...
            </div>
          }
        >
          <AdminPortalClient />
        </Suspense>
      </div>
    </div>
  );
}
