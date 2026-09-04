import React, { useState } from 'react';
import { weddingData } from '../config/weddingData';
import { X, ZoomIn } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 px-4 bg-gradient-to-b from-[#FFFFF0] via-white to-[#FFFFF0] relative overflow-hidden">
      {/* Soft Ambient Radial Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#C5A059]/4 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-3">
            <span className="w-12 h-[1px] bg-[#C5A059]/30" />
            <p className="font-cinzel text-xs tracking-[0.3em] text-[#938D89] uppercase">
              A LIFETIME OF
            </p>
            <span className="w-12 h-[1px] bg-[#C5A059]/30" />
          </div>
          <h2 className="font-script text-5xl sm:text-7xl text-[#292524]">
            Our <span className="text-[#C5A059]">Gallery</span>
          </h2>
        </div>

        {/* Auto Scrolling Horizontal Carousel Container */}
        <div className="relative w-full overflow-hidden py-4">
          
          {/* Seamless White Fade Gradients for Marquee */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

          {/* Marquee Track */}
          <div className="animate-marquee flex items-center">
            {/* Render duplicated sets for seamless continuous loop */}
            {[...weddingData.galleryImages, ...weddingData.galleryImages].map((img, index) => (
              <div
                key={index}
                onClick={() => setActiveImage(img.url)}
                className="group relative w-[260px] sm:w-[300px] md:w-[340px] aspect-[3/4] shrink-0 mx-3 sm:mx-4 rounded-3xl overflow-hidden bg-white border border-[#938D89]/30 shadow-sm hover:shadow-card cursor-pointer transition-all duration-500 hover:-translate-y-1.5"
              >
                <img
                  src={img.url}
                  alt={img.caption}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter contrast-[98%]"
                />

                {/* Gradient Overlay & Hover Caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#292524]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                  <div className="flex items-center justify-between">
                    <p className="font-script text-2xl sm:text-3xl drop-shadow-md">{img.caption}</p>
                    <ZoomIn className="w-5 h-5 text-[#FFFFF0]" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div 
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 transition-all duration-300"
        >
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          <img
            src={activeImage}
            alt="Enlarged gallery view"
            className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};
