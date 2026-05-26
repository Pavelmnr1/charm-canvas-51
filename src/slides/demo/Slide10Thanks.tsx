import React from 'react';
import { Linkedin } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

export default function Slide10Thanks() {
  return (
    <div className="w-full h-full relative slide-content overflow-hidden" style={{ background: '#F8F8F8' }}>
      <div className="flex items-center h-full px-32 py-24 gap-20">
        <div className="flex-1">
          <p className="text-base font-medium tracking-[0.35em] uppercase mb-10" style={{ color: '#0066FF' }}>
            09 — Thanks
          </p>
          <h1 className="text-[110px] font-bold leading-[0.95] tracking-tight mb-10" style={{ color: '#000' }}>
            Thanks for<br />listening.
          </h1>
          <p className="text-5xl font-light mb-14" style={{ color: '#444' }}>
            Let's <span style={{ color: '#0066FF', fontWeight: 600 }}>connect.</span>
          </p>

          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: '#000' }}>
              <Linkedin className="w-7 h-7" style={{ color: '#FFF' }} />
            </div>
            <p className="text-2xl font-medium" style={{ color: '#000' }}>LinkedIn</p>
          </div>
        </div>

        <div className="shrink-0">
          <div
            className="w-[420px] h-[420px] rounded-3xl flex items-center justify-center"
            style={{ background: '#FFF', border: '1px solid #E5E5E5' }}
          >
            <QRCodeSVG
              value="https://www.linkedin.com/in/pavel-movilean-7ab6a2405"
              size={340}
              level="H"
              fgColor="#000000"
              bgColor="#FFFFFF"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
