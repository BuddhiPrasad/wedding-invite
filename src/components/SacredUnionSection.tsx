import React from 'react';
import { weddingData } from '../config/weddingData';
import { Calendar, Clock, MapPin } from 'lucide-react';

export const SacredUnionSection: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
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
                <div>
                  <h4 className="font-cinzel text-lg sm:text-xl font-medium text-[#292524]">
                    {weddingData.weddingDateFormatted}
                  </h4>
                  <p className="font-cinzel text-[10px] tracking-[0.2em] text-[#938D89] uppercase mt-0.5">
                    THE YEAR TWO THOUSAND TWENTY NINE
                  </p>
                </div>
              </div>

              {/* Ceremony Time Item */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-[#FFFFF0] border border-[#C5A059]/30 text-[#C5A059] shadow-sm shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-cinzel text-lg sm:text-xl font-medium text-[#292524]">
                    {weddingData.ceremonyTime}
                  </h4>
                  <p className="font-cinzel text-[10px] tracking-[0.2em] text-[#938D89] uppercase mt-0.5">
                    WEDDING CEREMONY — {weddingData.ceremonyVenue.name.toUpperCase()}, {weddingData.ceremonyVenue.location.toUpperCase()}
                  </p>
                </div>
              </div>

              {/* Poruwa / Reception Item */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-[#FFFFF0] border border-[#C5A059]/30 text-[#C5A059] shadow-sm shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-cinzel text-lg sm:text-xl font-medium text-[#292524]">
                    {weddingData.poruwaTime} Onwards
                  </h4>
                  <p className="font-cinzel text-[10px] tracking-[0.2em] text-[#938D89] uppercase mt-0.5">
                    PORUWA CEREMONY & RECEPTION — {weddingData.receptionVenue.name.toUpperCase()}
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Large Framed Image */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[440px] aspect-[4/5] rounded-[36px] overflow-hidden bg-[#FFFFF0] p-3 border border-[#938D89]/30 shadow-card">
              <div className="w-full h-full rounded-[28px] overflow-hidden">
                <img
                  src="/images/sacred_union.png"
                  alt="Sacred Union"
                  className="w-full h-full object-cover object-center filter hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
