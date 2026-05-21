import React from 'react';

export default function Slide01Title() {
  return (
    <div className="w-full h-full relative bg-slide-gray-900 text-white slide-content overflow-hidden">
      {/* Accent glow */}
      <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full opacity-20 blur-3xl"
           style={{ background: 'hsl(var(--slide-accent))' }} />
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl"
           style={{ background: 'hsl(var(--slide-accent-light))' }} />

      <div className="relative z-10 flex flex-col justify-center h-full px-20 py-16">
        <p className="text-slide-accent text-xl font-medium tracking-[0.3em] uppercase mb-8">
          AI Meetup · Chișinău
        </p>
        <h1 className="text-8xl font-bold tracking-tight leading-[1.05] mb-10">
          Building with AI<br />
          <span className="text-slide-accent">at 17.</span>
        </h1>
        <p className="text-2xl text-slide-gray-300 font-light max-w-2xl">
          Pavel — student, founder, builder.
        </p>

        <div className="absolute bottom-12 left-20 right-20 flex items-end justify-between">
          <p className="text-sm text-slide-gray-400 tracking-wider uppercase">
            Austrian School Moldova
          </p>
          <p className="text-sm text-slide-gray-400 tracking-wider uppercase">
            2026
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-slide-accent" />
    </div>
  );
}
