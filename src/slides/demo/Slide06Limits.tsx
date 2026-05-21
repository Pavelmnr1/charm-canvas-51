import React from 'react';

export default function Slide06Limits() {
  return (
    <div className="w-full h-full relative slide-content overflow-hidden" style={{ background: '#F8F8F8' }}>
      <div className="flex flex-col justify-center h-full px-32 py-24 max-w-6xl">
        <p className="text-base font-medium tracking-[0.35em] uppercase mb-12" style={{ color: '#0066FF' }}>
          05 — What AI can't do
        </p>
        <h1 className="text-7xl font-bold leading-[1.1] tracking-tight mb-12" style={{ color: '#000' }}>
          AI writes code.<br />
          AI designs UI.
        </h1>
        <p className="text-5xl font-light leading-tight mb-12" style={{ color: '#444' }}>
          But AI can't <span style={{ color: '#0066FF', fontWeight: 600 }}>knock on doors.</span><br />
          It can't tell you if your idea<br />actually matters.
        </p>
        <p className="text-3xl font-medium" style={{ color: '#000' }}>
          That part is still on you.
        </p>
      </div>
    </div>
  );
}
