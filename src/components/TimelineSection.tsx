import React from 'react';
import { weddingData } from '../config/weddingData';
import { Heart, Music, Utensils, PartyPopper, Sparkles } from 'lucide-react';

export const TimelineSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'music':
        return <Music className="w-4 h-4 text-[#C5A059]" />;
      case 'party':
        return <PartyPopper className="w-4 h-4 text-[#C5A059]" />;
      case 'utensils':
        return <Utensils className="w-4 h-4 text-[#C5A059]" />;
      case 'sparkles':
        return <Sparkles className="w-4 h-4 text-[#C5A059]" />;
      default:
        return <Heart className="w-4 h-4 text-[#C5A059]" />;
    }
  };

  return (
    <section id="timeline" className="py-24 px-4 bg-gradient-to-b from-[#FFFFF0] via-[#FAF6EE] to-[#FFFFF0] relative overflow-hidden">
      {/* Soft Ambient Radial Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-4xl mx-auto space-y-16 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-3">
            <span className="w-12 h-[1px] bg-[#C5A059]/30" />
            <p className="font-cinzel text-xs tracking-[0.3em] text-[#938D89] uppercase">
              THE DAY'S FLOW
            </p>
            <span className="w-12 h-[1px] bg-[#C5A059]/30" />
          </div>
          <h2 className="font-script text-5xl sm:text-7xl text-[#292524]">
            Wedding <span className="text-[#C5A059]">Timeline</span>
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-3xl mx-auto py-6">
          
          {/* Vertical Connecting Line (Centered on desktop, left on mobile) */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-[1px] bg-[#C5A059]/30 -translate-x-1/2" />

          <div className="space-y-12 md:space-y-16 relative">
            {weddingData.timeline.map((event, index) => {
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={index}
                  className="relative flex flex-col md:flex-row items-start md:items-center pl-14 md:pl-0"
                >
                  
                  {/* Left Column (Desktop) */}
                  <div className="hidden md:flex w-1/2 justify-end pr-10">
                    {isEven ? (
                      /* Even Row: Time on Left */
                      <p className="font-serif italic text-lg lg:text-xl text-[#C5A059] tracking-wider text-right">
                        {event.time}
                      </p>
                    ) : (
                      /* Odd Row: Title & Description on Left */
                      <div className="text-right space-y-1 max-w-xs">
                        <h3 className="font-script text-2xl lg:text-3xl text-[#292524]">
                          {event.title}
                        </h3>
                        <p className="font-serif italic text-xs lg:text-sm text-[#938D89] leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Center Node Icon */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10 flex items-center justify-center w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-white border border-[#C5A059]/40 shadow-sm shrink-0">
                    {getIcon(event.icon)}
                  </div>

                  {/* Right Column (Desktop) */}
                  <div className="hidden md:flex w-1/2 justify-start pl-10">
                    {isEven ? (
                      /* Even Row: Title & Description on Right */
                      <div className="text-left space-y-1 max-w-xs">
                        <h3 className="font-script text-2xl lg:text-3xl text-[#292524]">
                          {event.title}
                        </h3>
                        <p className="font-serif italic text-xs lg:text-sm text-[#938D89] leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    ) : (
                      /* Odd Row: Time on Right */
                      <p className="font-serif italic text-lg lg:text-xl text-[#C5A059] tracking-wider text-left">
                        {event.time}
                      </p>
                    )}
                  </div>

                  {/* Mobile View (Stacked layout with clean typography) */}
                  <div className="md:hidden text-left space-y-1">
                    <p className="font-serif italic text-sm text-[#C5A059] tracking-wider font-medium">
                      {event.time}
                    </p>
                    <h3 className="font-script text-2xl text-[#292524]">
                      {event.title}
                    </h3>
                    <p className="font-serif italic text-xs text-[#938D89] leading-relaxed">
                      {event.description}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
