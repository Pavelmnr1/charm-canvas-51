import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function Slide09Demo() {
  return (
    <div className="w-full h-full relative slide-content overflow-hidden" style={{ background: '#F8F8F8' }}>
      <div className="flex flex-col justify-center items-center h-full px-32 py-24 text-center">
        <p className="text-base font-medium tracking-[0.35em] uppercase mb-12" style={{ color: '#0066FF' }}>
          08 — See it live
        </p>
        <h1 className="text-[140px] font-bold leading-[0.95] tracking-tight mb-20" style={{ color: '#000' }}>
          Let me <span style={{ color: '#0066FF' }}>show you.</span>
        </h1>

        <div className="inline-flex items-center gap-5 px-12 py-7 rounded-full" style={{ background: '#000' }}>
          <ExternalLink className="w-7 h-7" style={{ color: '#0066FF' }} />
          <p className="text-2xl font-mono" style={{ color: '#FFF' }}>
            nutri-coach-nova.lovable.app/dashboard
          </p>
        </div>
      </div>
    </div>
  );
}
