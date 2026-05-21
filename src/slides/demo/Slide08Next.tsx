import React from 'react';

const items = ['Architecture.', 'Code.', 'First real users.'];

export default function Slide08Next() {
  return (
    <div className="w-full h-full relative slide-content overflow-hidden" style={{ background: '#F8F8F8' }}>
      <div className="flex flex-col justify-center h-full px-32 py-24">
        <p className="text-base font-medium tracking-[0.35em] uppercase mb-16" style={{ color: '#0066FF' }}>
          07 — What's next
        </p>
        <div className="space-y-8">
          {items.map((item, i) => (
            <div key={item} className="flex items-baseline gap-10">
              <span className="text-3xl font-mono" style={{ color: '#0066FF' }}>0{i + 1}</span>
              <h2 className="text-[96px] font-bold leading-none tracking-tight" style={{ color: '#000' }}>
                {item}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
