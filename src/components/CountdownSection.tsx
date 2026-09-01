import React, { useState, useEffect } from 'react';
import { weddingData } from '../config/weddingData';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTime = () => {
      const targetDate = new Date(weddingData.weddingDate).getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => {
    return num < 10 ? `0${num}` : `${num}`;
  };

  return (
    <section className="py-24 px-4 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-12 text-center">
        
        {/* Header Label */}
        <div className="space-y-3">
          <div className="flex items-center justify-center gap-3">
            <span className="w-12 h-[1px] bg-[#C5A059]/30" />
            <p className="font-cinzel text-xs tracking-[0.3em] text-[#938D89] uppercase">
              THE WAIT IS ALMOST OVER
            </p>
            <span className="w-12 h-[1px] bg-[#C5A059]/30" />
          </div>
        </div>

        {/* 4 Arched Countdown Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto">
          
          {/* Days Card */}
          <div className="flex flex-col items-center justify-center py-6 px-4 rounded-t-[60px] rounded-b-[24px] bg-[#FFFFF0] border border-[#C5A059]/30 shadow-card hover:scale-105 transition-transform duration-300">
            <span className="font-script text-5xl sm:text-6xl text-[#C5A059]">
              {formatNumber(timeLeft.days)}
            </span>
            <span className="font-cinzel text-[10px] sm:text-xs tracking-[0.25em] text-[#292524] uppercase mt-2 font-medium">
              DAYS
            </span>
          </div>

          {/* Hours Card */}
          <div className="flex flex-col items-center justify-center py-6 px-4 rounded-t-[60px] rounded-b-[24px] bg-[#FFFFF0] border border-[#C5A059]/30 shadow-card hover:scale-105 transition-transform duration-300">
            <span className="font-script text-5xl sm:text-6xl text-[#C5A059]">
              {formatNumber(timeLeft.hours)}
            </span>
            <span className="font-cinzel text-[10px] sm:text-xs tracking-[0.25em] text-[#292524] uppercase mt-2 font-medium">
              HOURS
            </span>
          </div>

          {/* Minutes Card */}
          <div className="flex flex-col items-center justify-center py-6 px-4 rounded-t-[60px] rounded-b-[24px] bg-[#FFFFF0] border border-[#C5A059]/30 shadow-card hover:scale-105 transition-transform duration-300">
            <span className="font-script text-5xl sm:text-6xl text-[#C5A059]">
              {formatNumber(timeLeft.minutes)}
            </span>
            <span className="font-cinzel text-[10px] sm:text-xs tracking-[0.25em] text-[#292524] uppercase mt-2 font-medium">
              MINUTES
            </span>
          </div>

          {/* Seconds Card */}
          <div className="flex flex-col items-center justify-center py-6 px-4 rounded-t-[60px] rounded-b-[24px] bg-[#FFFFF0] border border-[#C5A059]/30 shadow-card hover:scale-105 transition-transform duration-300">
            <span className="font-script text-5xl sm:text-6xl text-[#C5A059]">
              {formatNumber(timeLeft.seconds)}
            </span>
            <span className="font-cinzel text-[10px] sm:text-xs tracking-[0.25em] text-[#292524] uppercase mt-2 font-medium">
              SECONDS
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
