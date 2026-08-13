import React from 'react';
import { weddingData } from '../config/weddingData';
import { Sparkles, Heart } from 'lucide-react';

export const ProtagonistsSection: React.FC = () => {
  return (
    <section id="protagonists" className="py-24 px-4 bg-[#FAF7F2] relative overflow-hidden">
      
      {/* Decorative Subtle Background Sparkles */}
      <div className="absolute top-12 left-10 text-[#D4AF37]/20 pointer-events-none">
        <Sparkles className="w-12 h-12" />
      </div>
      <div className="absolute bottom-12 right-10 text-[#D4AF37]/20 pointer-events-none">
        <Sparkles className="w-16 h-16" />
      </div>

      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="flex items-center justify-center gap-3">
            <span className="w-12 h-[1px] bg-[#B08968]/30" />
            <p className="font-cinzel text-xs tracking-[0.3em] text-[#A67C52] uppercase">
              THE PROTAGONISTS
            </p>
            <span className="w-12 h-[1px] bg-[#B08968]/30" />
          </div>
          <h2 className="font-script text-5xl sm:text-7xl text-[#2D2D2D]">
            {weddingData.brideName} <span className="text-[#B08968]">&</span> {weddingData.groomName}
          </h2>
        </div>

        {/* Protagonists Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Groom Info (Left Column) */}
          <div className="lg:col-span-3 text-center lg:text-right space-y-3 order-2 lg:order-1">
            <p className="font-cinzel text-[10px] tracking-[0.25em] text-[#A67C52] uppercase">
              THE GROOM
            </p>
            <h3 className="font-script text-4xl sm:text-5xl text-[#2D2D2D]">
              {weddingData.groomName}
            </h3>
            <p className="font-serif italic text-sm sm:text-base text-[#7F5539]/90 max-w-xs mx-auto lg:ml-auto lg:mr-0">
              {weddingData.groomParents}
            </p>
            <div className="flex justify-center lg:justify-end text-[#D4AF37]">
              <Heart className="w-4 h-4 text-[#B08968]/60 fill-[#B08968]/10" />
            </div>
          </div>

          {/* Arched Center Couple Photo (Center Column) */}
          <div className="lg:col-span-6 relative flex justify-center order-1 lg:order-2 my-4 lg:my-0">
            {/* Arched Photo Frame Container */}
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[4/5] rounded-t-[180px] rounded-b-[24px] overflow-hidden p-2 bg-[#FAF8F5] border border-[#E6DCCF] shadow-card">
              <div className="w-full h-full rounded-t-[172px] rounded-b-[20px] overflow-hidden">
                <img
                  src="/images/protagonists.png"
                  alt={`${weddingData.brideName} and ${weddingData.groomName}`}
                  className="w-full h-full object-cover object-center filter hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Sparkle Floating Accents around Frame */}
            <div className="absolute -top-3 -left-3 text-[#D4AF37]">
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>
            <div className="absolute -bottom-3 -right-3 text-[#D4AF37]">
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>
          </div>

          {/* Bride Info (Right Column) */}
          <div className="lg:col-span-3 text-center lg:text-left space-y-3 order-3">
            <p className="font-cinzel text-[10px] tracking-[0.25em] text-[#A67C52] uppercase">
              THE BRIDE
            </p>
            <h3 className="font-script text-4xl sm:text-5xl text-[#2D2D2D]">
              {weddingData.brideName}
            </h3>
            <p className="font-serif italic text-sm sm:text-base text-[#7F5539]/90 max-w-xs mx-auto lg:mr-auto lg:ml-0">
              {weddingData.brideParents}
            </p>
            <div className="flex justify-center lg:justify-start text-[#D4AF37]">
              <Heart className="w-4 h-4 text-[#B08968]/60 fill-[#B08968]/10" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
