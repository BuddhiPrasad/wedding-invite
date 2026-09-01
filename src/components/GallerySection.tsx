import React, { useState } from 'react';
import { weddingData } from '../config/weddingData';
import { X, ZoomIn } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section className="py-24 px-4 bg-[#FFFFF0] relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-16">
        
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {weddingData.galleryImages.map((img, index) => (
            <div
              key={index}
              onClick={() => setActiveImage(img.url)}
              className="group relative aspect-[3/4] rounded-3xl overflow-hidden bg-white border border-[#938D89]/30 shadow-sm hover:shadow-card cursor-pointer transition-all duration-500 hover:-translate-y-1.5"
            >
              <img
                src={img.url}
                alt={img.caption}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 filter contrast-[98%]"
              />

              {/* Gradient Overlay & Hover Caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#292524]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <div className="flex items-center justify-between">
                  <p className="font-script text-2xl drop-shadow-md">{img.caption}</p>
                  <ZoomIn className="w-5 h-5 text-[#FFFFF0]" />
                </div>
              </div>
            </div>
          ))}
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
