import React, { useState } from 'react';
import { weddingData } from '../config/weddingData';
import { Sparkles, Phone, CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export const RSVPSection: React.FC = () => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState('1');
  const [dietary, setDietary] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setSubmitted(true);

    // Fire celebratory confetti burst
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#C5A059', '#938D89', '#FFFFF0']
    });
  };

  return (
    <section id="rsvp" className="py-24 px-4 bg-[#FFFFF0] relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* Main Card Container */}
        <div className="bg-white rounded-[36px] border border-[#938D89]/30 shadow-card p-6 sm:p-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Side */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[#938D89]">
                  <Sparkles className="w-4 h-4 text-[#C5A059]" />
                  <p className="font-cinzel text-xs tracking-[0.3em] uppercase">
                    KINDLY RESPOND
                  </p>
                  <span className="w-8 h-[1px] bg-[#C5A059]/30" />
                </div>

                <h2 className="font-script text-5xl sm:text-6xl text-[#292524]">
                  Reserve <span className="text-[#C5A059]">Your Seat</span>
                </h2>

                <p className="font-serif italic text-base text-[#938D89] leading-relaxed">
                  Your presence means the world to us. Please kindly let us know if you will be able to join our celebration.
                </p>
              </div>

              {/* RSVP Direct Phone Contacts */}
              <div className="p-6 rounded-2xl bg-[#FFFFF0] border border-[#938D89]/30 space-y-3">
                <p className="font-cinzel text-xs tracking-wider text-[#938D89] uppercase font-semibold">
                  RSVP Contact
                </p>
                <div className="grid grid-cols-2 gap-4 pt-1">
                  <div>
                    <p className="font-serif text-sm font-medium text-[#292524]">{weddingData.groomName}</p>
                    <a
                      href={`tel:${weddingData.contacts.groomPhone}`}
                      className="font-sans text-sm font-semibold text-[#C5A059] hover:underline inline-flex items-center gap-1.5 mt-0.5"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      {weddingData.contacts.groomPhoneFormatted}
                    </a>
                  </div>
                  <div>
                    <p className="font-serif text-sm font-medium text-[#292524]">{weddingData.brideName}</p>
                    <a
                      href={`tel:${weddingData.contacts.bridePhone}`}
                      className="font-sans text-sm font-semibold text-[#C5A059] hover:underline inline-flex items-center gap-1.5 mt-0.5"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      {weddingData.contacts.bridePhoneFormatted}
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Form Side */}
            <div className="lg:col-span-6 bg-[#FFFFF0] p-6 sm:p-8 rounded-3xl border border-[#938D89]/30 shadow-sm">
              
              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <CheckCircle className="w-16 h-16 text-[#C5A059] mx-auto animate-bounce" />
                  <h3 className="font-script text-4xl text-[#292524]">Thank You!</h3>
                  <p className="font-serif italic text-base text-[#938D89]">
                    Your response has been received. We can't wait to celebrate with you!
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2 rounded-full bg-white border border-[#C5A059]/40 text-[#292524] font-cinzel text-xs tracking-wider uppercase hover:bg-[#FFFFF0] transition-colors"
                  >
                    Submit Another Response
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="block font-cinzel text-[10px] tracking-[0.2em] text-[#938D89] uppercase font-semibold">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="E.g., John & Jane Doe"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#938D89]/30 font-serif italic text-sm text-[#292524] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]"
                    />
                  </div>

                  {/* Number of Guests */}
                  <div className="space-y-1.5">
                    <label className="block font-cinzel text-[10px] tracking-[0.2em] text-[#938D89] uppercase font-semibold">
                      Number of Guests
                    </label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#938D89]/30 font-serif italic text-sm text-[#292524] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059]"
                    >
                      <option value="1">Just Me (1 Guest)</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5">Family (5+ Guests)</option>
                    </select>
                  </div>

                  {/* Dietary Notes */}
                  <div className="space-y-1.5">
                    <label className="block font-cinzel text-[10px] tracking-[0.2em] text-[#938D89] uppercase font-semibold">
                      Dietary Notes (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={dietary}
                      onChange={(e) => setDietary(e.target.value)}
                      placeholder="We'd love to know if you have any allergies..."
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#938D89]/30 font-serif italic text-sm text-[#292524] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-[#292524] hover:bg-[#C5A059] text-white font-cinzel text-xs tracking-[0.25em] uppercase font-semibold transition-colors duration-300 shadow-md cursor-pointer"
                  >
                    Confirm Attendance
                  </button>

                </form>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
