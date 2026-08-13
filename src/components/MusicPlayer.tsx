import React, { useState, useEffect, useRef } from 'react';
import { VolumeX, Volume2 } from 'lucide-react';

interface MusicPlayerProps {
  autoPlayTriggered: boolean;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ autoPlayTriggered }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Default copyright-free romantic ambient acoustic track URL
  const audioUrl = "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=wedding-background-music-114258.mp3";

  useEffect(() => {
    if (autoPlayTriggered && audioRef.current && !isPlaying) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(err => console.log("Autoplay blocked by browser policy:", err));
    }
  }, [autoPlayTriggered]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(err => console.log("Audio play error:", err));
    }
  };

  return (
    <>
      <audio ref={audioRef} src={audioUrl} loop preload="auto" />

      {/* Floating Music Button */}
      <button
        onClick={togglePlay}
        aria-label="Toggle background music"
        className="fixed top-6 right-6 z-40 p-3 rounded-full bg-white/80 backdrop-blur-md shadow-card border border-[#E3D4C1] text-[#8C6239] hover:text-[#2D2D2D] hover:bg-white hover:scale-110 transition-all duration-300 group cursor-pointer"
      >
        <div className="relative flex items-center justify-center">
          {isPlaying ? (
            <Volume2 className="w-5 h-5 text-[#B08968] animate-pulse" />
          ) : (
            <VolumeX className="w-5 h-5 text-[#A67C52]/70" />
          )}

          {/* Animated soundwave indicators */}
          {isPlaying && (
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#B08968]"></span>
            </span>
          )}
        </div>
      </button>
    </>
  );
};
