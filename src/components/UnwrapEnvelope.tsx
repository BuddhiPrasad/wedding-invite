import React, { useState } from 'react';
import { weddingData } from '../config/weddingData';
import { Heart, Sparkles } from 'lucide-react';

interface UnwrapEnvelopeProps {
  onUnwrap: () => void;
}

export const UnwrapEnvelope: React.FC<UnwrapEnvelopeProps> = ({ onUnwrap }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleClick = () => {
    setIsOpening(true);
    setTimeout(() => {
      onUnwrap();
    }, 1000);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#ECE6DD] transition-all duration-1000 ease-in-out px-4 ${isOpening ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
        }`}
    >
      {/* Background Soft Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#FAF7F2] via-[#EFE7DA] to-[#DFD5C6] opacity-90" />

      {/* Main Envelope Container */}
      <div className="relative w-full max-w-[480px] sm:max-w-[540px] aspect-[4/5] sm:aspect-[3/4] max-h-[85vh] bg-[#FAF8F5] rounded-lg shadow-envelope border border-[#E6DCCF] flex flex-col items-center justify-between p-6 sm:p-10 z-10 transition-transform duration-700 hover:shadow-card-glow">

        {/* Decorative Outer Border Lines */}
        <div className="absolute inset-3 border border-[#D9CDBF]/50 rounded pointer-events-none" />
        <div className="absolute inset-4 border border-[#C5B8A5]/30 rounded pointer-events-none" />

        {/* Top Header */}
        <div className="text-center pt-2">
          <p className="font-cinzel text-[10px] sm:text-xs tracking-[0.3em] text-[#A67C52] uppercase">
            PROMISE OF LOVE
          </p>
          <div className="flex items-center justify-center gap-2 mt-2">
            <span className="w-8 h-[1px] bg-[#D4AF37]/50" />
            <Sparkles className="w-3 h-3 text-[#D4AF37]" />
            <span className="w-8 h-[1px] bg-[#D4AF37]/50" />
          </div>
        </div>

        {/* Couple Names Header */}
        <div className="text-center my-auto py-2 z-10">
          <h1 className="font-script text-5xl sm:text-6xl text-[#2D2D2D] leading-none mb-1">
            {weddingData.brideName}
          </h1>
          <p className="font-script text-3xl sm:text-4xl text-[#B08968] my-1">
            &
          </p>
          <h1 className="font-script text-5xl sm:text-6xl text-[#2D2D2D] leading-none mt-1">
            {weddingData.groomName}
          </h1>
        </div>

        {/* Ribbon & Silk Bow Wrap */}
        <div className="absolute inset-x-0 top-[48%] -translate-y-1/2 flex items-center justify-center z-20">
          {/* Horizontal Ribbon */}
          <div className="w-full h-10 bg-gradient-to-r from-[#FAF3EA]/90 via-[#F1E4D3]/90 to-[#FAF3EA]/90 shadow-sm border-y border-[#E3D4C1] opacity-90 pointer-events-none" />

          {/* Clickable Silk Bow / Heart */}
          <button
            onClick={handleClick}
            disabled={isOpening}
            aria-label="Unwrap invitation"
            className="absolute bg-[#FAF3EA] border-2 border-[#D4AF37]/40 rounded-full p-2 shadow-md flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-125 active:scale-95 focus:outline-none group"
          >
            {/* Pulse ring hint */}
            <span className="absolute inset-0 rounded-full animate-ping bg-[#D4AF37]/20 group-hover:bg-[#D4AF37]/30" />
            <Heart className="relative w-5 h-5 text-[#B08968] fill-[#B08968]/40 animate-pulse" />
          </button>
        </div>

        {/* Invitation Text Details */}
        <div className="text-center space-y-1.5 pb-2">
          <p className="font-cinzel text-[10px] sm:text-xs tracking-[0.2em] text-[#8C6239] uppercase">
            REQUEST THE HONOUR OF YOUR PRESENCE
          </p>
          <p className="font-cinzel text-xs sm:text-sm font-semibold tracking-wider text-[#3A3A3A] uppercase">
            {weddingData.weddingDateFormatted} AT {weddingData.ceremonyTime}
          </p>
          <p className="font-serif italic text-sm text-[#7F5539]">
            {weddingData.ceremonyVenue.name}
          </p>
          <p className="font-cinzel text-[10px] tracking-widest text-[#A67C52] uppercase">
            {weddingData.ceremonyVenue.location}
          </p>
        </div>

      </div>

      {/* Action Button Below Card */}
      <button
        onClick={handleClick}
        disabled={isOpening}
        className="mt-8 z-20 group relative inline-flex items-center justify-center px-8 py-3.5 overflow-hidden font-cinzel text-xs tracking-[0.25em] uppercase text-[#8C6239] bg-white/80 hover:bg-white border border-[#C5A880]/60 rounded-full shadow-md backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
      >
        <span className="relative flex items-center gap-2">
          <span>Click to unwrap</span>
          <Sparkles className="w-4 h-4 text-[#D4AF37] group-hover:rotate-12 transition-transform duration-300" />
        </span>
      </button>

    </div>
  );
};
