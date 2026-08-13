import React, { useState } from 'react';
import { Sparkles, Send, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Blessing {
  id: string;
  name: string;
  message: string;
  date: string;
}

export const GuestbookSection: React.FC = () => {
  const [blessings, setBlessings] = useState<Blessing[]>([
    {
      id: '1',
      name: 'Uncle John & Family',
      message: 'Wishing you both a lifetime of love, laughter, and endless happiness as you embark on this wonderful journey together!',
      date: 'July 2026'
    },
    {
      id: '2',
      name: 'Nimali & Kasun',
      message: 'May your union be blessed with abundant happiness and divine peace. Congratulations Prasad & Buddhi!',
      date: 'July 2026'
    }
  ]);

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newBlessing: Blessing = {
      id: Date.now().toString(),
      name,
      message,
      date: 'Just now'
    };

    setBlessings([newBlessing, ...blessings]);
    setName('');
    setMessage('');

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#D4AF37', '#B08968']
    });
  };

  return (
    <section className="py-24 px-4 bg-[#F5EFE6] relative overflow-hidden">
      <div className="max-w-3xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-2 text-[#A67C52]">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <p className="font-cinzel text-xs tracking-[0.3em] uppercase">
              GUESTBOOK
            </p>
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          </div>
          
          <h2 className="font-script text-5xl sm:text-7xl text-[#2D2D2D]">
            Blessings <span className="text-[#B08968]">& Wishes</span>
          </h2>

          <p className="font-serif italic text-base text-[#7F5539]/90">
            Leave a little note or a piece of advice for our journey ahead.
          </p>
        </div>

        {/* Input Form Card */}
        <div className="bg-[#FAF8F5] p-6 sm:p-10 rounded-3xl border border-[#E3D4C1] shadow-card">
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Name Input */}
            <div className="space-y-1.5">
              <label className="block font-cinzel text-[10px] tracking-[0.2em] text-[#A67C52] uppercase font-semibold">
                Your Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="E.g., Uncle John"
                className="w-full px-4 py-3 rounded-xl bg-white border border-[#E6DCCF] font-serif italic text-sm text-[#2D2D2D] focus:outline-none focus:border-[#B08968] focus:ring-1 focus:ring-[#B08968]"
              />
            </div>

            {/* Message Input */}
            <div className="space-y-1.5">
              <label className="block font-cinzel text-[10px] tracking-[0.2em] text-[#A67C52] uppercase font-semibold">
                Your Message
              </label>
              <textarea
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Wishing you a lifetime of happiness..."
                className="w-full px-4 py-3 rounded-xl bg-white border border-[#E6DCCF] font-serif italic text-sm text-[#2D2D2D] focus:outline-none focus:border-[#B08968] focus:ring-1 focus:ring-[#B08968] resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-full bg-[#2D2D2D] hover:bg-[#8C6239] text-white font-cinzel text-xs tracking-[0.25em] uppercase font-semibold transition-colors duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Share Blessing</span>
            </button>

          </form>
        </div>

        {/* Displayed Blessings List */}
        <div className="space-y-4 pt-4">
          {blessings.map((b) => (
            <div key={b.id} className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E6DCCF] shadow-sm space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Heart className="w-3.5 h-3.5 text-[#B08968] fill-[#B08968]" />
                  <h4 className="font-cinzel text-sm font-semibold text-[#2D2D2D]">{b.name}</h4>
                </div>
                <span className="font-cinzel text-[10px] text-[#A67C52] tracking-wider">{b.date}</span>
              </div>
              <p className="font-serif italic text-sm text-[#7F5539] leading-relaxed pl-5">
                "{b.message}"
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
