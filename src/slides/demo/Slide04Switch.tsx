import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Slide04Switch() {
  return (
    <div className="w-full h-full relative slide-content overflow-hidden" style={{ background: '#F8F8F8' }}>
      <div className="flex flex-col justify-center h-full px-32 py-24">
        <p className="text-base font-medium tracking-[0.35em] uppercase mb-14" style={{ color: '#0066FF' }}>
          03 — The switch
        </p>

        <div className="flex items-center gap-12 mb-16">
          <div className="flex-1 p-12 rounded-2xl" style={{ background: '#FFF', border: '1px solid #E5E5E5' }}>
            <p className="text-sm font-medium tracking-[0.25em] uppercase mb-4" style={{ color: '#999' }}>Before</p>
            <p className="text-6xl font-bold mb-4" style={{ color: '#000' }}>ChatGPT</p>
            <p className="text-2xl font-light" style={{ color: '#555' }}>A yes-man in your pocket.</p>
          </div>

          <ArrowRight className="w-16 h-16 shrink-0" style={{ color: '#0066FF' }} strokeWidth={2} />

          <div className="flex-1 p-12 rounded-2xl" style={{ background: '#0066FF' }}>
            <p className="text-sm font-medium tracking-[0.25em] uppercase mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>After</p>
            <p className="text-6xl font-bold mb-4" style={{ color: '#FFF' }}>Claude</p>
            <p className="text-2xl font-light" style={{ color: 'rgba(255,255,255,0.95)' }}>Pushes back. That's the point.</p>
          </div>
        </div>

        <p className="text-3xl font-light max-w-4xl" style={{ color: '#444' }}>
          Agreement is dangerous when you're<br />building something real.
        </p>
      </div>
    </div>
  );
}
