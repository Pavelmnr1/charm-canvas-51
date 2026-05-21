import React from 'react';

export default function Slide07Learned() {
  return (
    <div className="w-full h-full relative slide-content overflow-hidden" style={{ background: '#F8F8F8' }}>
      <div className="flex flex-col justify-center h-full px-32 py-24">
        <p className="text-base font-medium tracking-[0.35em] uppercase mb-12" style={{ color: '#0066FF' }}>
          06 — What I learned
        </p>
        <h1 className="text-[120px] font-bold leading-[0.95] tracking-tight" style={{ color: '#000' }}>
          Talk to people first.<br />
          <span style={{ color: '#0066FF' }}>Build second.</span>
        </h1>
        <p className="mt-14 text-4xl font-light max-w-4xl leading-snug" style={{ color: '#444' }}>
          AI speeds up step two.<br />
          It can't replace step one.
        </p>
      </div>
    </div>
  );
}
