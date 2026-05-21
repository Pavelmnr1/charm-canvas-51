import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function Slide06Demo() {
  return (
    <div className="w-full h-full relative bg-slide-gray-900 text-white slide-content overflow-hidden">
      <div className="absolute inset-0 opacity-20 blur-3xl"
           style={{ background: 'radial-gradient(circle at 50% 50%, hsl(var(--slide-accent)) 0%, transparent 60%)' }} />

      <div className="relative z-10 flex flex-col justify-center items-center h-full px-20 py-16 text-center">
        <p className="text-slide-accent text-base font-medium tracking-[0.3em] uppercase mb-10">
          05 — Live Demo
        </p>

        <h2 className="text-9xl font-bold leading-none mb-16">
          See it<br /><span className="text-slide-accent italic">live.</span>
        </h2>

        <div className="inline-flex items-center gap-4 px-10 py-6 rounded-full bg-slide-gray-800 border border-slide-gray-700">
          <ExternalLink className="w-6 h-6 text-slide-accent" />
          <p className="text-2xl font-mono text-white">
            nutri-coach-nova.lovable.app
          </p>
        </div>

        <p className="mt-10 text-lg text-slide-gray-500 uppercase tracking-[0.2em]">
          /dashboard
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-slide-accent" />
    </div>
  );
}
