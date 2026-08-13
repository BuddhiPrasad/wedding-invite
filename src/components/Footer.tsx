import React from 'react';
import { weddingData } from '../config/weddingData';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-16 px-4 bg-[#FAF7F2] border-t border-[#E6DCCF] text-center space-y-4">
      <div className="flex justify-center text-[#B08968]">
        <Heart className="w-4 h-4 fill-[#B08968]/30 animate-pulse" />
      </div>
      <h3 className="font-script text-4xl sm:text-5xl text-[#2D2D2D]">
        {weddingData.brideName} <span className="text-[#B08968]">&</span> {weddingData.groomName}
      </h3>
      <p className="font-cinzel text-xs tracking-[0.25em] text-[#A67C52] uppercase">
        {weddingData.weddingDateFormatted}
      </p>
    </footer>
  );
};
