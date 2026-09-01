import React, { useState } from 'react';
import { weddingData } from '../config/weddingData';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';

export const VenuesSection: React.FC = () => {
  const [activeMap, setActiveMap] = useState<'church' | 'reception'>('church');

  return (
    <section className="py-24 px-4 bg-[#FFFFF0] relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-3">
            <span className="w-12 h-[1px] bg-[#C5A059]/30" />
            <p className="font-cinzel text-xs tracking-[0.3em] text-[#938D89] uppercase">
              THE VENUE
            </p>
            <span className="w-12 h-[1px] bg-[#C5A059]/30" />
          </div>
          <h2 className="font-script text-5xl sm:text-7xl text-[#292524]">
            Where We <span className="text-[#C5A059]">Celebrate</span>
          </h2>
        </div>

        {/* Venues & Map Split View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Cards Column */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-6">
            
            {/* Church Card */}
            <div 
              onClick={() => setActiveMap('church')}
              className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                activeMap === 'church'
                  ? 'bg-white border-[#C5A059] shadow-card scale-[1.02]'
                  : 'bg-white/70 border-[#938D89]/30 hover:bg-white/90'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-[#FFFFF0] border border-[#C5A059]/30 text-[#C5A059] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-2 flex-1">
                  <h3 className="font-cinzel text-lg font-semibold text-[#292524]">
                    {weddingData.ceremonyVenue.name}
                  </h3>
                  <p className="font-cinzel text-xs tracking-wider text-[#938D89] uppercase">
                    {weddingData.ceremonyVenue.location}
                  </p>
                  
                  <a
                    href={weddingData.ceremonyVenue.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 mt-3 px-5 py-2 rounded-full bg-[#292524] hover:bg-[#C5A059] text-white font-cinzel text-[10px] tracking-[0.2em] uppercase transition-colors duration-300 shadow-sm"
                  >
                    <Navigation className="w-3 h-3" />
                    <span>Church Location</span>
                    <ExternalLink className="w-3 h-3 ml-1 opacity-70" />
                  </a>
                </div>
              </div>
            </div>

            {/* Reception Card */}
            <div 
              onClick={() => setActiveMap('reception')}
              className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                activeMap === 'reception'
                  ? 'bg-white border-[#C5A059] shadow-card scale-[1.02]'
                  : 'bg-white/70 border-[#938D89]/30 hover:bg-white/90'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-[#FFFFF0] border border-[#C5A059]/30 text-[#C5A059] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-2 flex-1">
                  <h3 className="font-cinzel text-lg font-semibold text-[#292524]">
                    {weddingData.receptionVenue.name}
                  </h3>
                  <p className="font-cinzel text-xs tracking-wider text-[#938D89] uppercase">
                    {weddingData.receptionVenue.location}
                  </p>

                  <a
                    href={weddingData.receptionVenue.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 mt-3 px-5 py-2 rounded-full bg-[#292524] hover:bg-[#C5A059] text-white font-cinzel text-[10px] tracking-[0.2em] uppercase transition-colors duration-300 shadow-sm"
                  >
                    <Navigation className="w-3 h-3" />
                    <span>Reception Location</span>
                    <ExternalLink className="w-3 h-3 ml-1 opacity-70" />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Map View Column */}
          <div className="lg:col-span-7 h-[360px] lg:h-auto min-h-[380px] rounded-3xl overflow-hidden border border-[#938D89]/30 shadow-card bg-white relative">
            <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#938D89]/30 shadow-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
              <span className="font-cinzel text-[10px] tracking-widest text-[#292524] uppercase font-medium">Live Map</span>
            </div>

            <iframe
              title="Venue Map"
              src={activeMap === 'church' ? weddingData.ceremonyVenue.embedMapUrl : weddingData.receptionVenue.embedMapUrl}
              className="w-full h-full border-0 filter grayscale-[20%] contrast-[95%]"
              loading="lazy"
              allowFullScreen
            />
          </div>

        </div>

      </div>
    </section>
  );
};
