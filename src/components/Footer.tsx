import React from 'react';
import { weddingData } from '../config/weddingData';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-4 bg-gradient-to-b from-[#FFFFF0] via-[#FAF7F0] to-[#F5ECE0] text-center space-y-4 relative overflow-hidden">
      {/* Top Fading Gold Accent Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-xl h-[1px] bg-gradient-to-r from-transparent via-[#C5A059]/40 to-transparent" />

      <div className="flex justify-center text-[#C5A059] pt-2">
        <Heart className="w-4 h-4 fill-[#C5A059]/30 animate-pulse" />
      </div>
      <h3 className="font-script text-4xl sm:text-5xl text-[#292524]">
        {weddingData.brideName} <span className="text-[#C5A059]">&</span> {weddingData.groomName}
      </h3>
      <p className="font-cinzel text-xs tracking-[0.25em] text-[#938D89] uppercase">
        {weddingData.weddingDateFormatted}
      </p>
    </footer>
  );
};

