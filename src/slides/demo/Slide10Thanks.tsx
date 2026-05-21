import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';

export default function Slide10Thanks() {
  return (
    <div className="w-full h-full relative slide-content overflow-hidden" style={{ background: '#F8F8F8' }}>
      <div className="flex items-center h-full px-32 py-24 gap-20">
        <div className="flex-1">
          <p className="text-base font-medium tracking-[0.35em] uppercase mb-10" style={{ color: '#0066FF' }}>
            09 — Thanks
          </p>
          <h1 className="text-[110px] font-bold leading-[0.95] tracking-tight mb-10" style={{ color: '#000' }}>
            Thanks for<br />listening.
          </h1>
          <p className="text-5xl font-light mb-14" style={{ color: '#444' }}>
            Let's <span style={{ color: '#0066FF', fontWeight: 600 }}>connect.</span>
          </p>

          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: '#000' }}>
                <Linkedin className="w-7 h-7" style={{ color: '#FFF' }} />
              </div>
              <p className="text-2xl font-medium" style={{ color: '#000' }}>LinkedIn</p>
            </div>
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: '#000' }}>
                <Instagram className="w-7 h-7" style={{ color: '#FFF' }} />
              </div>
              <p className="text-2xl font-medium" style={{ color: '#000' }}>Instagram</p>
            </div>
          </div>
        </div>

        <div className="shrink-0">
          <div
            className="w-[420px] h-[420px] rounded-3xl flex flex-col items-center justify-center"
            style={{ background: '#FFF', border: '2px dashed #CCC' }}
          >
            <div className="grid grid-cols-8 gap-1 mb-6 opacity-30">
              {Array.from({ length: 64 }).map((_, i) => (
                <div
                  key={i}
                  className="w-6 h-6"
                  style={{ background: Math.random() > 0.5 ? '#000' : 'transparent' }}
                />
              ))}
            </div>
            <p className="text-lg uppercase tracking-[0.3em] font-medium" style={{ color: '#888' }}>
              QR Placeholder
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
