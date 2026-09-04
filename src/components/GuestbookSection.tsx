import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export const GuestbookSection: React.FC = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setName('');
    setMessage('');
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
    }, 4000);

    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#C5A059', '#D9BA78', '#292524', '#FFFFF0']
    });
  };

  return (
    <section id="guestbook" className="py-20 lg:py-28 px-4 bg-gradient-to-b from-[#FFFFF0] via-white to-[#FFFFF0] relative overflow-hidden">
      {/* Soft Ambient Radial Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] bg-[#C5A059]/4 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-[680px] mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center space-y-1 mb-10">
          {/* Delicate Top Gold Star */}
          <div className="flex justify-center items-center mb-1">
            <svg
              className="w-5 h-5 text-[#C5A059]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C12 7.523 7.523 12 2 12C7.523 12 12 16.477 12 22C12 16.477 16.477 12 22 12C16.477 12 12 7.523 12 2Z" />
              <circle cx="19.5" cy="4.5" r="1" />
              <circle cx="4.5" cy="19.5" r="1" />
            </svg>
          </div>

          {/* Guestbook Label */}
          <p className="font-cinzel text-[11px] sm:text-xs tracking-[0.35em] text-[#C5A059] uppercase font-medium">
            GUESTBOOK
          </p>

          {/* Title */}
          <h2 className="font-script text-5xl sm:text-6xl md:text-7xl text-[#292524] pt-1">
            Blessings <span className="text-gold-gradient font-script">&amp; Wishes</span>
          </h2>
        </div>

        {/* Input Form Card */}
        <div className="bg-white rounded-[38px] sm:rounded-[48px] px-8 sm:px-14 py-11 sm:py-14 shadow-[0_20px_50px_rgba(41,37,36,0.03)] border border-[#F2ECE4] relative overflow-hidden">
          
          {/* Subtle Top Gold Highlight */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D9BA78]/70 to-transparent" />

          {/* Subtitle inside card */}
          <p className="font-serif italic text-base sm:text-[17px] text-[#8C827A] text-center mb-9 sm:mb-11 leading-relaxed">
            Leave a little note or a piece of advice for our journey ahead.
          </p>

          <form onSubmit={handleSubmit} className="space-y-7">
            
            {/* Name Input */}
            <div className="space-y-2.5">
              <label className="block font-sans text-[11px] font-bold tracking-[0.2em] text-[#55504C] uppercase">
                YOUR NAME
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="E.g., Uncle John"
                className="w-full px-6 py-4 rounded-[22px] sm:rounded-[26px] bg-white border border-[#EBE6DE] font-serif italic text-base text-[#292524] placeholder:text-[#CBC5BD] placeholder:font-serif placeholder:italic focus:outline-none focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/20 transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]"
              />
            </div>

            {/* Message Input */}
            <div className="space-y-2.5">
              <label className="block font-sans text-[11px] font-bold tracking-[0.2em] text-[#55504C] uppercase">
                YOUR MESSAGE
              </label>
              <textarea
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Wishing you a lifetime of happiness..."
                className="w-full px-6 py-5 rounded-[28px] sm:rounded-[34px] min-h-[140px] sm:min-h-[160px] bg-white border border-[#EBE6DE] font-serif italic text-base text-[#292524] placeholder:text-[#CBC5BD] placeholder:font-serif placeholder:italic focus:outline-none focus:border-[#C5A059] focus:ring-2 focus:ring-[#C5A059]/20 transition-all resize-none shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]"
              />
            </div>

            {/* Success message banner if submitted */}
            {isSubmitted && (
              <div className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-[#FBF8F2] border border-[#C5A059]/30 text-[#292524] text-xs font-serif italic animate-fadeInUp">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                <span>Thank you! Your heartfelt blessing has been shared.</span>
              </div>
            )}

            {/* Centered Submit Button */}
            <div className="flex justify-center pt-3 sm:pt-4">
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-[#23201E] hover:bg-[#38332E] text-white font-sans text-xs font-bold tracking-[0.25em] uppercase transition-all duration-300 shadow-[0_8px_20px_rgba(35,32,30,0.22)] hover:shadow-[0_12px_24px_rgba(35,32,30,0.3)] active:scale-95 cursor-pointer"
              >
                <Send className="w-4 h-4 text-[#C5A059] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                <span>SHARE BLESSING</span>
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
};



