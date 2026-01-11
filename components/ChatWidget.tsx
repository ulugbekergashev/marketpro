import React from 'react';
import { Send } from 'lucide-react';

const ChatWidget = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://t.me/MarketPro_Academy"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-16 h-16 bg-[#229ED9] rounded-full shadow-[0_0_30px_rgba(34,158,217,0.4)] hover:shadow-[0_0_50px_rgba(34,158,217,0.6)] transition-all hover:scale-110 active:scale-95"
      >
        <div className="absolute inset-0 rounded-full border border-white/20 opacity-20"></div>
        <Send className="w-8 h-8 text-white -ml-1 mt-1 transform group-hover:rotate-12 transition-transform" />

        {/* Tooltip */}
        <div className="absolute right-full mr-4 bg-white text-brand-dark px-4 py-2 rounded-xl font-bold text-sm shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Savolingiz bormi?
          <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white transform rotate-45"></div>
        </div>
      </a>
    </div>
  );
};

export default ChatWidget;