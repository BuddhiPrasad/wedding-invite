import React from 'react';

interface SectionDividerProps {
  variant?: 'star' | 'rings' | 'simple' | 'flourish';
  className?: string;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({ variant = 'star', className = '' }) => {
  return (
    <div className={`relative w-full flex items-center justify-center py-4 overflow-hidden ${className}`}>
      {/* Soft Ambient Gold Glow */}
      <div className="absolute w-48 h-10 bg-[#C5A059]/10 rounded-full blur-2xl pointer-events-none" />

      {/* Left Fading Gradient Line */}
      <div className="h-[1px] flex-1 max-w-[140px] sm:max-w-[220px] bg-gradient-to-r from-transparent via-[#C5A059]/40 to-[#C5A059]" />

      {/* Center Icon Accent */}
      <div className="mx-4 sm:mx-6 flex items-center justify-center text-[#C5A059]">
        {variant === 'star' && (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
          </svg>
        )}
        {variant === 'rings' && (
          <div className="flex items-center -space-x-1.5 opacity-85">
            <div className="w-3.5 h-3.5 rounded-full border border-[#C5A059]" />
            <div className="w-3.5 h-3.5 rounded-full border border-[#C5A059]" />
          </div>
        )}
        {variant === 'flourish' && (
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]/60" />
            <span className="w-2.5 h-2.5 rotate-45 border border-[#C5A059]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]/60" />
          </div>
        )}
        {variant === 'simple' && (
          <span className="w-2 h-2 rotate-45 bg-[#C5A059]" />
        )}
      </div>

      {/* Right Fading Gradient Line */}
      <div className="h-[1px] flex-1 max-w-[140px] sm:max-w-[220px] bg-gradient-to-l from-transparent via-[#C5A059]/40 to-[#C5A059]" />
    </div>
  );
};
