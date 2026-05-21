import React from 'react';

export default function Slide05Hackathon() {
  return (
    <div className="w-full h-full relative slide-content overflow-hidden" style={{ background: '#F8F8F8' }}>
      <div className="flex flex-col justify-center h-full px-32 py-24">
        <p className="text-base font-medium tracking-[0.35em] uppercase mb-12" style={{ color: '#0066FF' }}>
          04 — The hackathon moment
        </p>
        <h1 className="text-[110px] font-bold leading-[0.95] tracking-tight mb-16" style={{ color: '#000' }}>
          Zero experience.<br />
          <span style={{ color: '#0066FF' }}>One hour.</span><br />
          A working app.
        </h1>

        <div className="flex gap-20 mb-16">
          <div>
            <p className="text-7xl font-bold mb-2" style={{ color: '#000' }}>0</p>
            <p className="text-base uppercase tracking-[0.2em]" style={{ color: '#888' }}>Prior Lovable use</p>
          </div>
          <div>
            <p className="text-7xl font-bold mb-2" style={{ color: '#000' }}>60<span style={{ color: '#0066FF' }}>min</span></p>
            <p className="text-base uppercase tracking-[0.2em]" style={{ color: '#888' }}>To shipped app</p>
          </div>
          <div>
            <p className="text-7xl font-bold mb-2" style={{ color: '#000' }}>1<span style={{ color: '#0066FF' }}>st</span></p>
            <p className="text-base uppercase tracking-[0.2em]" style={{ color: '#888' }}>Hackathon try</p>
          </div>
        </div>

        <p className="text-3xl font-light" style={{ color: '#444' }}>
          AI didn't just help me — <span style={{ color: '#000', fontWeight: 500 }}>it built alongside me.</span>
        </p>
      </div>
    </div>
  );
}
