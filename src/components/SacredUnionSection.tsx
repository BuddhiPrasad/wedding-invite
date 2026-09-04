import React from 'react';
import { weddingData } from '../config/weddingData';
import { Calendar, Clock, MapPin } from 'lucide-react';

export const SacredUnionSection: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-[#FFFFF0] via-white to-[#FFFFF0] relative overflow-hidden">
      
      {/* Soft Ambient Radial Light */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#938D89]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Event Details */}
          <div className="lg:col-span-6 space-y-8">
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <p className="font-cinzel text-xs tracking-[0.3em] text-[#938D89] uppercase">
                  THE SACRED UNION
                </p>
                <span className="w-12 h-[1px] bg-[#C5A059]/30" />
              </div>

              <h2 className="font-script text-4xl sm:text-6xl text-[#292524] leading-tight">
                A Celebration of <br />
                <span className="text-[#C5A059]">Tradition & Love</span>
              </h2>

              <p className="font-serif italic text-base sm:text-lg text-[#938D89] leading-relaxed pt-2">
                We are honored to invite you to witness our union as we exchange vows at {weddingData.ceremonyVenue.name}, surrounded by the grace of God and the warmth of our loved ones.
              </p>
            </div>

            {/* Event Time Badges */}
            <div className="space-y-6 pt-4">
              
              {/* Date Item */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-[#FFFFF0] border border-[#C5A059]/30 text-[#C5A059] shadow-sm shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-cinzel text-sm tracking-wider text-[#292524] uppercase font-semibold">
                    The Wedding Day
                  </h4>
                  <p className="font-serif italic text-sm text-[#938D89]">
                    {weddingData.weddingDateFormatted}
                  </p>
                </div>
              </div>

              {/* Ceremony Time Item */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-[#FFFFF0] border border-[#C5A059]/30 text-[#C5A059] shadow-sm shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-cinzel text-sm tracking-wider text-[#292524] uppercase font-semibold">
                    Holy Mass & Nuptials
                  </h4>
                  <p className="font-serif italic text-sm text-[#938D89]">
                    Commencing promptly at {weddingData.ceremonyTime}
                  </p>
                </div>
              </div>

              {/* Location Item */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-[#FFFFF0] border border-[#C5A059]/30 text-[#C5A059] shadow-sm shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-cinzel text-sm tracking-wider text-[#292524] uppercase font-semibold">
                    {weddingData.ceremonyVenue.name}
                  </h4>
                  <p className="font-serif italic text-sm text-[#938D89]">
                    {weddingData.ceremonyVenue.location}
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Architectural / Sacred Image */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[460px] aspect-[4/5] rounded-3xl overflow-hidden p-2 bg-white border border-[#938D89]/30 shadow-card">
              <div className="w-full h-full rounded-2xl overflow-hidden bg-[#FAF8F5]">
                <img
                  src={weddingData.sacredUnionImage}
                  alt="Sacred Ceremony"
                  className="w-full h-full object-cover filter hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
