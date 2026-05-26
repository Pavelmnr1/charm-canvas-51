import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function Slide09Demo() {
  return (
    <div className="w-full h-full relative slide-content overflow-hidden" style={{ background: '#F8F8F8' }}>
      <div className="flex flex-col justify-center items-center h-full px-32 py-24 text-center">
        <p className="text-base font-medium tracking-[0.35em] uppercase mb-12" style={{ color: '#0066FF' }}>
          06 — See it live
        </p>
        <h1 className="text-[140px] font-bold leading-[0.95] tracking-tight mb-20" style={{ color: '#000' }}>
          Let me <span style={{ color: '#0066FF' }}>show you.</span>
        </h1>

        <a
          href="https://nova289173.lovable.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-5 px-14 py-8 rounded-full transition-transform hover:scale-105"
          style={{ background: '#0066FF' }}
        >
          <ExternalLink className="w-8 h-8" style={{ color: '#FFF' }} />
          <span className="text-3xl font-semibold" style={{ color: '#FFF' }}>
            Open live demo
          </span>
        </a>
      </div>
    </div>
  );
}
