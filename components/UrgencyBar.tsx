import React, { useState, useEffect } from 'react';
import { Timer } from 'lucide-react';

const UrgencyBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 59, seconds: 0 });

  useEffect(() => {
    // Show after 3 seconds
    const timer = setTimeout(() => setIsVisible(true), 3000);

    // Countdown logic
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'auto' });
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 w-full z-40 bg-gradient-to-r from-red-600 to-red-800 text-white py-3 px-4 shadow-[0_-10px_40px_rgba(220,38,38,0.5)] border-t border-red-400"
    >
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-white/20 p-2 rounded-full">
            <Timer className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="font-bold text-sm sm:text-base leading-tight">
              Maxsus taklif tugashiga oz qoldi!
            </p>
            <p className="text-xs text-red-200">
              Faqat 3 ta joy qoldi. Narxlar <span className="font-bold underline">ertaga</span> oshadi.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 w-full sm:w-auto">
          <div className="flex gap-2 text-xl font-mono font-bold bg-black/20 px-4 py-1 rounded-lg">
            <span>{String(timeLeft.hours).padStart(2, '0')}</span>:
            <span>{String(timeLeft.minutes).padStart(2, '0')}</span>:
            <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
          </div>
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, 'contact')}
            className="flex-1 sm:flex-none text-center bg-white text-red-700 hover:bg-slate-100 font-extrabold py-2 px-6 rounded-lg text-sm uppercase tracking-wider transition-colors cursor-pointer"
          >
            Joyni Band Qilish
          </a>
        </div>
      </div>
    </div>
  );
};

export default UrgencyBar;