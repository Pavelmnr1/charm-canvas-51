import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Slide03Journey() {
  return (
    <div className="w-full h-full relative bg-slide-gray-900 text-white slide-content overflow-hidden">
      <div className="relative z-10 flex flex-col justify-center h-full px-20 py-16">
        <p className="text-slide-accent text-base font-medium tracking-[0.3em] uppercase mb-10">
          02 — My AI Journey
        </p>

        <h2 className="text-7xl font-bold leading-[1.05] mb-16 max-w-5xl">
          It always<br />agreed with me.
        </h2>

        <div className="flex items-center gap-10 max-w-5xl">
          <div className="flex-1 border border-slide-gray-700 rounded-2xl p-8 bg-slide-gray-800/40">
            <p className="text-sm text-slide-gray-500 uppercase tracking-wider mb-3">Before</p>
            <p className="text-4xl font-bold mb-2">ChatGPT</p>
            <p className="text-lg text-slide-gray-400">A yes-man in your pocket.</p>
          </div>

          <ArrowRight className="w-12 h-12 text-slide-accent shrink-0" strokeWidth={1.5} />

          <div className="flex-1 border-2 border-slide-accent rounded-2xl p-8 bg-slide-accent/10">
            <p className="text-sm text-slide-accent uppercase tracking-wider mb-3">After</p>
            <p className="text-4xl font-bold mb-2">Claude</p>
            <p className="text-lg text-slide-gray-300">Pushes back. That's the point.</p>
          </div>
        </div>

        <p className="mt-14 text-2xl text-slide-gray-400 font-light max-w-3xl">
          Agreement is dangerous when you're building something real.
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-slide-accent" />
    </div>
  );
}
