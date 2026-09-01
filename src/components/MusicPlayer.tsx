import React, { useState, useEffect, useRef } from 'react';
import { VolumeX, Volume2 } from 'lucide-react';

interface MusicPlayerProps {
  autoPlayTriggered: boolean;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ autoPlayTriggered }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Romantic piano cover of "A Thousand Years"
  const audioUrl = encodeURI("/audio/A Thousand Years – Piano Cover  Christina Perri (Sheet Music) - John Rod Dondoyano.mp3.mpeg");

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
        className="fixed top-6 right-6 z-40 p-3 rounded-full bg-[#FFFFF0]/90 backdrop-blur-md shadow-card border border-[#C5A059]/40 text-[#938D89] hover:text-[#292524] hover:bg-[#FFFFF0] hover:scale-110 transition-all duration-300 group cursor-pointer"
      >
        <div className="relative flex items-center justify-center">
          {isPlaying ? (
            <Volume2 className="w-5 h-5 text-[#C5A059] animate-pulse" />
          ) : (
            <VolumeX className="w-5 h-5 text-[#938D89]" />
          )}

          {/* Animated soundwave indicators */}
          {isPlaying && (
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5A059] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#C5A059]"></span>
            </span>
          )}
        </div>
      </button>
    </>
  );
};
