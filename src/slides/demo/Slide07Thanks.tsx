import React from 'react';
import { Linkedin, Instagram, QrCode } from 'lucide-react';

export default function Slide07Thanks() {
  return (
    <div className="w-full h-full relative bg-slide-gray-900 text-white slide-content overflow-hidden">
      <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full opacity-20 blur-3xl"
           style={{ background: 'hsl(var(--slide-accent))' }} />

      <div className="relative z-10 grid grid-cols-2 gap-16 h-full px-20 py-16 items-center">
        <div>
          <p className="text-slide-accent text-base font-medium tracking-[0.3em] uppercase mb-10">
            Thank you
          </p>
          <h2 className="text-8xl font-bold leading-[1.0] mb-10">
            Thanks for<br />listening.
          </h2>
          <p className="text-4xl font-light text-slide-gray-300 mb-16">
            Let's <span className="text-slide-accent font-medium">connect.</span>
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Linkedin className="w-6 h-6 text-slide-accent" />
              <p className="text-xl text-slide-gray-200">LinkedIn — Pavel</p>
            </div>
            <div className="flex items-center gap-4">
              <Instagram className="w-6 h-6 text-slide-accent" />
              <p className="text-xl text-slide-gray-200">Instagram — @pavel</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="w-[380px] h-[380px] rounded-3xl bg-white p-6 flex items-center justify-center">
            <div className="w-full h-full rounded-2xl border-2 border-dashed border-slide-gray-300 flex flex-col items-center justify-center text-slide-gray-500">
              <QrCode className="w-32 h-32 mb-4" strokeWidth={1} />
              <p className="text-base uppercase tracking-[0.2em] font-medium">QR Code</p>
              <p className="text-sm mt-1">LinkedIn · Instagram</p>
            </div>
          </div>
          <p className="mt-6 text-sm text-slide-gray-500 uppercase tracking-[0.2em]">
            Scan to connect
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-slide-accent" />
    </div>
  );
}
