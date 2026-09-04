import React, { useState } from 'react';
import { weddingData } from '../config/weddingData';
import { MapPin, Send, ExternalLink, Map as MapIcon } from 'lucide-react';

export const VenuesSection: React.FC = () => {
  const [activeVenue, setActiveVenue] = useState<'church' | 'reception'>('church');

  const currentVenueData =
    activeVenue === 'church'
      ? weddingData.ceremonyVenue
      : weddingData.receptionVenue;

  return (
    <section id="venues" className="py-20 lg:py-28 px-4 sm:px-6 bg-gradient-to-b from-[#FFFFF0] via-[#FAF6EE] to-[#FFFFF0] relative overflow-hidden">
      {/* Soft Ambient Radial Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[600px] bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Outer Frame Container */}
        <div className="relative p-3 sm:p-6 lg:p-8 rounded-[36px] sm:rounded-[48px] border border-[#ECE6DC] bg-[#FAF8F5]/80 shadow-sm">
          
          <div className="relative min-h-[540px] lg:min-h-[580px] flex flex-col lg:flex-row items-center">
            
            {/* Left Overlapping Info Card */}
            <div className="w-full lg:max-w-[430px] lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 z-20 bg-white rounded-[32px] sm:rounded-[36px] p-7 sm:p-10 shadow-[0_25px_60px_rgba(41,37,36,0.12)] border border-[#EFEAE2] relative overflow-hidden mb-6 lg:mb-0">
              
              {/* Top Gold Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#D9BA78] via-[#C5A059] to-[#A6843E]" />

              {/* Decorative Background Watermark Emblem */}
              <div className="absolute -bottom-8 -right-8 pointer-events-none opacity-[0.04] text-[#C5A059] select-none">
                <svg className="w-52 h-52" viewBox="0 0 100 100" fill="currentColor">
                  <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" fill="none" />
                  <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="1" fill="none" />
                  <path d="M50 15 L50 85 M15 50 L85 50" stroke="currentColor" strokeWidth="1" />
                  <polygon points="50,25 75,50 50,75 25,50" stroke="currentColor" strokeWidth="1" fill="none" />
                </svg>
              </div>

              {/* Card Header */}
              <div className="relative z-10 space-y-2 mb-8">
                <div className="flex items-center gap-3">
                  <span className="font-sans text-[11px] font-bold tracking-[0.25em] text-[#8C827A] uppercase">
                    THE VENUE
                  </span>
                  <span className="w-12 h-[1px] bg-[#C5A059]/40" />
                </div>

                <div className="pt-1">
                  <h2 className="font-script text-4xl sm:text-5xl lg:text-[54px] text-[#292524] leading-tight font-normal">
                    Where We
                  </h2>
                  <h2 className="font-script text-4xl sm:text-5xl lg:text-[54px] text-[#C5A059] leading-tight font-normal -mt-1">
                    Celebrate
                  </h2>
                </div>
              </div>

              {/* Venues List */}
              <div className="relative z-10 space-y-6">
                
                {/* Church / Ceremony Item */}
                <div 
                  onClick={() => setActiveVenue('church')}
                  className={`group transition-all duration-300 rounded-2xl p-2 cursor-pointer ${
                    activeVenue === 'church' ? 'bg-[#FAF8F5]/90' : 'hover:bg-[#FAF8F5]/60'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Location Icon Circle */}
                    <div className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
                      activeVenue === 'church'
                        ? 'bg-white border-[#C5A059] text-[#C5A059] shadow-sm'
                        : 'bg-[#FAF8F5] border-[#E8E3DB] text-[#C5A059]'
                    }`}>
                      <MapPin className="w-4 h-4" />
                    </div>

                    {/* Venue Details */}
                    <div className="space-y-1 flex-1">
                      <h3 className="font-serif text-[17px] sm:text-lg font-semibold text-[#292524] leading-snug">
                        {weddingData.ceremonyVenue.name}
                      </h3>
                      <p className="font-sans text-[10px] tracking-[0.2em] font-semibold text-[#8C827A] uppercase">
                        {weddingData.ceremonyVenue.location}
                      </p>

                      <div className="pt-2">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveVenue('church');
                          }}
                          className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-sans text-[10.5px] font-bold tracking-[0.18em] uppercase transition-all duration-300 shadow-sm active:scale-95 cursor-pointer ${
                            activeVenue === 'church'
                              ? 'bg-[#23201E] text-white hover:bg-[#38332E]'
                              : 'bg-[#23201E]/90 text-white hover:bg-[#23201E]'
                          }`}
                        >
                          <Send className="w-3 h-3 text-[#C5A059]" />
                          <span>CHURCH LOCATION</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Subtle Divider */}
                <div className="border-t border-[#F0EBE3]" />

                {/* Reception Venue Item */}
                <div 
                  onClick={() => setActiveVenue('reception')}
                  className={`group transition-all duration-300 rounded-2xl p-2 cursor-pointer ${
                    activeVenue === 'reception' ? 'bg-[#FAF8F5]/90' : 'hover:bg-[#FAF8F5]/60'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Location Icon Circle */}
                    <div className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
                      activeVenue === 'reception'
                        ? 'bg-white border-[#C5A059] text-[#C5A059] shadow-sm'
                        : 'bg-[#FAF8F5] border-[#E8E3DB] text-[#C5A059]'
                    }`}>
                      <MapPin className="w-4 h-4" />
                    </div>

                    {/* Venue Details */}
                    <div className="space-y-1 flex-1">
                      <h3 className="font-serif text-[17px] sm:text-lg font-semibold text-[#292524] leading-snug">
                        {weddingData.receptionVenue.name}
                      </h3>
                      <p className="font-sans text-[10px] tracking-[0.2em] font-semibold text-[#8C827A] uppercase">
                        {weddingData.receptionVenue.location}
                      </p>

                      <div className="pt-2">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveVenue('reception');
                          }}
                          className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-sans text-[10.5px] font-bold tracking-[0.18em] uppercase transition-all duration-300 shadow-sm active:scale-95 cursor-pointer ${
                            activeVenue === 'reception'
                              ? 'bg-[#23201E] text-white hover:bg-[#38332E]'
                              : 'bg-[#23201E]/90 text-white hover:bg-[#23201E]'
                          }`}
                        >
                          <Send className="w-3 h-3 text-[#C5A059]" />
                          <span>RECEPTION LOCATION</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Map View Container */}
            <div className="w-full lg:w-[68%] lg:ml-auto h-[440px] sm:h-[500px] lg:h-[560px] rounded-[28px] sm:rounded-[36px] overflow-hidden border border-[#E8E3DB] shadow-md bg-white relative">
              
              {/* Top Right Live Map Pill Badge */}
              <div className="absolute top-4 right-4 sm:top-5 sm:right-5 z-10 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#E8E3DB] shadow-sm flex items-center gap-2">
                <MapIcon className="w-3.5 h-3.5 text-[#C5A059]" />
                <span className="font-sans text-[10px] tracking-[0.2em] text-[#292524] uppercase font-bold">
                  LIVE MAP
                </span>
              </div>

              {/* Top Left Open in Maps Link */}
              <a
                href={currentVenueData.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 left-4 sm:top-5 sm:left-5 z-10 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#E8E3DB] shadow-sm flex items-center gap-1.5 text-[10px] font-sans font-semibold tracking-wider text-[#292524] hover:text-[#C5A059] transition-colors"
              >
                <span>Open in Maps</span>
                <ExternalLink className="w-3 h-3 text-[#C5A059]" />
              </a>

              {/* Interactive Google Map iframe */}
              <iframe
                key={activeVenue}
                title={`${currentVenueData.name} Map`}
                src={currentVenueData.embedMapUrl}
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};


