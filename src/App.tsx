import React, { useState } from 'react';
import { UnwrapEnvelope } from './components/UnwrapEnvelope';
import { MusicPlayer } from './components/MusicPlayer';
import { HeroSaveTheDate } from './components/HeroSaveTheDate';
import { ProtagonistsSection } from './components/ProtagonistsSection';
import { SacredUnionSection } from './components/SacredUnionSection';
import { VenuesSection } from './components/VenuesSection';
import { TimelineSection } from './components/TimelineSection';
import { GallerySection } from './components/GallerySection';
import { CountdownSection } from './components/CountdownSection';
// import { RSVPSection } from './components/RSVPSection';
import { GuestbookSection } from './components/GuestbookSection';
import { AmbientPetals } from './components/AmbientPetals';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [isUnwrapped, setIsUnwrapped] = useState(false);

  return (
    <div className="min-h-screen bg-[#FFFFF0] relative text-[#292524] selection:bg-[#C5A059]/20 selection:text-[#292524]">

      {/* Unwrap Envelope Overlay */}
      {!isUnwrapped && (
        <UnwrapEnvelope onUnwrap={() => setIsUnwrapped(true)} />
      )}

      {/* Main Wedding Website Content (Revealed after unwrap) */}
      <div className={`transition-opacity duration-1000 ${isUnwrapped ? 'opacity-100' : 'opacity-0'}`}>

        {/* Floating Audio Controller */}
        <MusicPlayer autoPlayTriggered={isUnwrapped} />

        {/* Ambient Gold Particle Effect */}
        <AmbientPetals />

        {/* Sections */}
        <main>
          <HeroSaveTheDate />
          <ProtagonistsSection />
          <SacredUnionSection />
          <VenuesSection />
          <TimelineSection />
          <GallerySection />
          <CountdownSection />
          {/* <RSVPSection /> */}
          <GuestbookSection />
        </main>

        {/* Footer */}
        <Footer />

      </div>

    </div>
  );
};

export default App;
