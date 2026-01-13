import React, { useState } from 'react';
import { AlertCircle, X, MessageCircle } from 'lucide-react';

export default function PrototypeBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[200] bg-black/90 backdrop-blur-md text-white border-t border-white/10 p-4 animate-in slide-in-from-bottom duration-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-amber-500/20 text-amber-500 p-2 rounded-full">
            <AlertCircle size={24} />
          </div>
          <div className="text-center md:text-left">
            <p className="font-bold text-amber-500 text-xs uppercase tracking-widest mb-1">Prototype Demo</p>
            <p className="text-sm text-gray-300">This is a concept demonstration. To build a real application like this or custom to your needs:</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <a 
            href="https://wa.me/923329945014?text=I%20saw%20your%20prototypes%20and%20I'm%20interested%20in%20building%20a%20website."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-bold transition-all shadow-lg hover:shadow-green-500/30 whitespace-nowrap"
          >
            <MessageCircle size={18} />
            Talk on WhatsApp
          </a>
          <button 
            onClick={() => setIsVisible(false)}
            className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
