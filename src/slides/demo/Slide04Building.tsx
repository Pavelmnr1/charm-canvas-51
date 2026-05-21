import React from 'react';

export default function Slide04Building() {
  return (
    <div className="w-full h-full relative bg-slide-gray-900 text-white slide-content overflow-hidden">
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full opacity-15 blur-3xl"
           style={{ background: 'hsl(var(--slide-accent))' }} />

      <div className="relative z-10 flex flex-col justify-center h-full px-20 py-16">
        <p className="text-slide-accent text-base font-medium tracking-[0.3em] uppercase mb-10">
          03 — Building with AI
        </p>

        <h2 className="text-7xl font-bold leading-[1.05] mb-16 max-w-5xl">
          Zero experience.<br />
          <span className="text-slide-accent">One hour later</span><br />
          a working app.
        </h2>

        <div className="flex gap-16 max-w-5xl">
          <div>
            <p className="text-6xl font-bold mb-2">0</p>
            <p className="text-base text-slide-gray-400 uppercase tracking-wider">Prior Lovable use</p>
          </div>
          <div>
            <p className="text-6xl font-bold mb-2">60<span className="text-slide-accent">min</span></p>
            <p className="text-base text-slide-gray-400 uppercase tracking-wider">To shipped app</p>
          </div>
          <div>
            <p className="text-6xl font-bold mb-2">1<span className="text-slide-accent">st</span></p>
            <p className="text-base text-slide-gray-400 uppercase tracking-wider">Hackathon try</p>
          </div>
        </div>

        <p className="mt-16 text-3xl font-light text-slide-gray-300 max-w-4xl">
          AI didn't just help me — <span className="text-white font-medium">it built alongside me.</span>
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-slide-accent" />
    </div>
  );
}
