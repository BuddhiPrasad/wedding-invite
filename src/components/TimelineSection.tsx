import React from 'react';
import { weddingData } from '../config/weddingData';
import { Heart, Music, Utensils, PartyPopper, Sparkles } from 'lucide-react';

export const TimelineSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'music':
        return <Music className="w-4 h-4 text-[#B08968]" />;
      case 'party':
        return <PartyPopper className="w-4 h-4 text-[#B08968]" />;
      case 'utensils':
        return <Utensils className="w-4 h-4 text-[#B08968]" />;
      case 'sparkles':
        return <Sparkles className="w-4 h-4 text-[#B08968]" />;
      default:
        return <Heart className="w-4 h-4 text-[#B08968]" />;
    }
  };

  return (
    <section className="py-24 px-4 bg-[#F5EFE6] relative overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-3">
            <span className="w-12 h-[1px] bg-[#B08968]/30" />
            <p className="font-cinzel text-xs tracking-[0.3em] text-[#A67C52] uppercase">
              THE DAY'S FLOW
            </p>
            <span className="w-12 h-[1px] bg-[#B08968]/30" />
          </div>
          <h2 className="font-script text-5xl sm:text-7xl text-[#2D2D2D]">
            Wedding <span className="text-[#B08968]">Timeline</span>
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative py-8">
          
          {/* Vertical Connecting Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#D4C3B3] -translate-x-1/2 hidden md:block" />

          <div className="space-y-12 md:space-y-16 relative">
            {weddingData.timeline.map((event, index) => {
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={index}
                  className={`flex flex-col md:flex-row items-center gap-6 md:gap-0 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Event Text Side */}
                  <div className={`w-full md:w-1/2 text-center ${
                    isEven ? 'md:text-left md:pl-12' : 'md:text-right md:pr-12'
                  }`}>
                    <div className="inline-block p-6 rounded-2xl bg-[#FAF8F5] border border-[#E6DCCF] shadow-sm hover:shadow-card transition-shadow duration-300 max-w-md w-full">
                      <p className="font-cinzel text-xs tracking-[0.2em] text-[#A67C52] uppercase font-semibold mb-1">
                        {event.time}
                      </p>
                      <h3 className="font-script text-3xl text-[#2D2D2D] mb-1">
                        {event.title}
                      </h3>
                      <p className="font-serif italic text-sm text-[#7F5539]/90">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Node Icon */}
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-[#FAF8F5] border-2 border-[#B08968] shadow-md shrink-0 my-2 md:my-0">
                    {getIcon(event.icon)}
                  </div>

                  {/* Empty Spacer Side for Desktop layout symmetry */}
                  <div className="hidden md:block w-1/2" />

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
