import React from 'react';

export default function Slide01Opening() {
  return (
    <div className="w-full h-full relative slide-content overflow-hidden" style={{ background: '#F8F8F8' }}>
      <div className="flex flex-col justify-center h-full px-32 py-24">
        <p className="text-base font-medium tracking-[0.35em] uppercase mb-12" style={{ color: '#0066FF' }}>
          AI Meetup · Chișinău
        </p>
        <h1 className="text-[140px] font-bold leading-[0.95] tracking-tight" style={{ color: '#000' }}>
          Building<br />
          with <span style={{ color: '#0066FF' }}>AI.</span>
        </h1>
        <p className="mt-16 text-4xl font-light max-w-3xl leading-snug" style={{ color: '#444' }}>
          While most people my age<br />are just scrolling.
        </p>
      </div>
    </div>
  );
}
