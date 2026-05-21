import React from 'react';
import { Check, X } from 'lucide-react';

const canDo = ['Write code', 'Design UI', 'Ship fast'];
const cantDo = ['Knock on doors', 'Talk to real users', 'Tell you if it matters'];

export default function Slide05Limits() {
  return (
    <div className="w-full h-full relative bg-slide-gray-900 text-white slide-content overflow-hidden">
      <div className="relative z-10 flex flex-col justify-center h-full px-20 py-16">
        <p className="text-slide-accent text-base font-medium tracking-[0.3em] uppercase mb-10">
          04 — What AI can't do
        </p>

        <h2 className="text-7xl font-bold leading-[1.05] mb-14 max-w-5xl">
          That part is <span className="text-slide-accent">still on you.</span>
        </h2>

        <div className="grid grid-cols-2 gap-10 max-w-5xl">
          <div>
            <p className="text-sm text-slide-gray-500 uppercase tracking-[0.2em] mb-6">AI can</p>
            <div className="space-y-4">
              {canDo.map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slide-accent/20 flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5 text-slide-accent" strokeWidth={3} />
                  </div>
                  <p className="text-2xl font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm text-slide-gray-500 uppercase tracking-[0.2em] mb-6">AI can't</p>
            <div className="space-y-4">
              {cantDo.map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slide-gray-800 border border-slide-gray-700 flex items-center justify-center shrink-0">
                    <X className="w-5 h-5 text-slide-gray-400" strokeWidth={3} />
                  </div>
                  <p className="text-2xl font-medium text-slide-gray-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-slide-accent" />
    </div>
  );
}
