import React from 'react';
import { weddingData } from '../config/weddingData';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-16 px-4 bg-[#FFFFF0] border-t border-[#938D89]/20 text-center space-y-4">
      <div className="flex justify-center text-[#C5A059]">
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
