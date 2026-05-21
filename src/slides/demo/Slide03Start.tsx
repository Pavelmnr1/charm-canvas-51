import React from 'react';

export default function Slide03Start() {
  return (
    <div className="w-full h-full relative slide-content overflow-hidden" style={{ background: '#F8F8F8' }}>
      <div className="flex flex-col justify-center h-full px-32 py-24 max-w-6xl">
        <p className="text-base font-medium tracking-[0.35em] uppercase mb-12" style={{ color: '#0066FF' }}>
          02 — Where it started
        </p>
        <h1 className="text-7xl font-bold leading-[1.1] tracking-tight mb-12" style={{ color: '#000' }}>
          I started like<br />everyone else. <span style={{ color: '#0066FF' }}>ChatGPT.</span>
        </h1>
        <p className="text-4xl font-light leading-snug" style={{ color: '#444' }}>
          It always agreed with me.<br />
          <span style={{ color: '#000', fontWeight: 500 }}>That was the problem.</span>
        </p>
      </div>
    </div>
  );
}
