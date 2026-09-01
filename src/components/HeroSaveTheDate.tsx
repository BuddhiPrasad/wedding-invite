import React from 'react';
import { weddingData } from '../config/weddingData';
import { ChevronDown, Heart } from 'lucide-react';

export const HeroSaveTheDate: React.FC = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('protagonists');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#FFFFF0]">
      
      {/* Background Image Container with Soft Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={weddingData.heroImage || "/images/IMG_1858.JPG.jpeg"}
          alt="Save The Date"
          className="w-full h-full object-cover object-center filter brightness-[0.97] opacity-90 scale-100 transition-transform duration-1000"
        />
        {/* Soft Ivory Vignette Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FFFFF0] via-[#FFFFF0]/40 to-[#FFFFF0]/60" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#FFFFF0]/30 to-[#FFFFF0]/80" />
      </div>

      {/* Left Edge Vertical Decorative Text */}
      <div className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 z-10 items-center gap-4 vertical-text-left text-[#938D89] font-cinzel text-[11px] tracking-[0.3em] uppercase opacity-80">
        <span>{weddingData.receptionVenue.name} • {weddingData.receptionVenue.location}</span>
        <span className="w-12 h-[1px] bg-[#C5A059]/40" />
      </div>

      {/* Right Edge Vertical Decorative Text */}
      <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 z-10 items-center gap-4 vertical-text-right text-[#938D89] font-cinzel text-[11px] tracking-[0.3em] uppercase opacity-80">
        <span>SAVE THE DATE • JULY 2029</span>
        <span className="w-12 h-[1px] bg-[#C5A059]/40" />
      </div>

      {/* Hero Central Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6 pt-16">
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#C5A059]/30 text-[#938D89] shadow-sm">
          <Heart className="w-3.5 h-3.5 fill-[#C5A059] text-[#C5A059]" />
          <span className="font-cinzel text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#292524]">Save The Date</span>
        </div>

        <h1 className="font-script text-6xl sm:text-8xl lg:text-9xl text-[#292524] leading-tight font-normal drop-shadow-sm">
          {weddingData.brideName} <span className="text-[#C5A059] font-script">&</span> {weddingData.groomName}
        </h1>

        <p className="font-cinzel text-sm sm:text-base lg:text-lg tracking-[0.2em] text-[#292524] uppercase font-medium">
          {weddingData.weddingDateFormatted}
        </p>

        <p className="font-serif italic text-base sm:text-lg text-[#938D89] max-w-lg mx-auto">
          "Two souls with but a single thought, two hearts that beat as one."
        </p>
      </div>

      {/* Scroll Down Indicator */}
      <button
        onClick={scrollToNext}
        aria-label="Discover more"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[#938D89] hover:text-[#292524] transition-colors duration-300 group cursor-pointer"
      >
        <span className="font-cinzel text-[10px] tracking-[0.3em] uppercase">Discover</span>
        <ChevronDown className="w-5 h-5 animate-bounce text-[#C5A059]" />
      </button>

    </section>
  );
};
