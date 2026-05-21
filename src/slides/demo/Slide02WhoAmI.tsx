import React from 'react';

export default function Slide02WhoAmI() {
  return (
    <div className="w-full h-full relative bg-slide-gray-900 text-white slide-content overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl"
           style={{ background: 'hsl(var(--slide-accent))' }} />

      <div className="relative z-10 flex flex-col justify-center h-full px-20 py-16 max-w-6xl">
        <p className="text-slide-accent text-base font-medium tracking-[0.3em] uppercase mb-10">
          01 — Who am I
        </p>

        <div className="grid grid-cols-3 gap-8 mb-16">
          <div>
            <p className="text-7xl font-bold text-slide-accent mb-3">17</p>
            <p className="text-lg text-slide-gray-400 uppercase tracking-wider">Years old</p>
          </div>
          <div>
            <p className="text-4xl font-bold mb-3 leading-tight">Pavel</p>
            <p className="text-lg text-slide-gray-400 uppercase tracking-wider">Student & Founder</p>
          </div>
          <div>
            <p className="text-3xl font-bold mb-3 leading-tight">Austrian<br />School Moldova</p>
          </div>
        </div>

        <h2 className="text-6xl font-bold leading-tight max-w-5xl">
          Building an AI startup<br />
          while most people my age<br />
          <span className="text-slide-gray-500 line-through decoration-slide-accent decoration-4">are just scrolling.</span>
        </h2>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-slide-accent" />
    </div>
  );
}
