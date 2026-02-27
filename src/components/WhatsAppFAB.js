import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFAB() {
  const whatsappLink = "https://wa.me/923329945014";

  return (
    <a 
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[200] group flex items-center justify-center"
      aria-label="Contact us on WhatsApp"
    >
      <div className="absolute inset-0 bg-[#25D366] rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity animate-pulse" />
      <div className="relative bg-[#25D366] text-white p-4 rounded-full shadow-2xl shadow-[#25D366]/40 hover:scale-110 active:scale-95 transition-all duration-300">
         <MessageCircle size={32} className="sm:size-[36px]" fill="currentColor" />
         
         {/* Tooltip */}
         <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-black text-white px-4 py-2 rounded-lg text-xs font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap hidden sm:block">
            Chat with us
            <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-black rotate-45" />
         </div>
      </div>
    </a>
  );
}
