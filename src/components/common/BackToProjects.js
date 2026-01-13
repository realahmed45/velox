import React from 'react';
import { ArrowLeft, Grid } from 'lucide-react';

export default function BackToProjects({ onBack }) {
  return (
    <button 
      onClick={onBack}
      className="fixed bottom-6 left-6 z-[100] bg-black/90 backdrop-blur-xl text-white pl-4 pr-6 py-3 rounded-full font-bold shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3 group border border-white/10 hover:border-orange-500/50"
    >
      <div className="bg-white/10 p-1.5 rounded-full group-hover:-translate-x-1 transition-transform">
        <ArrowLeft size={16} />
      </div>
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="Logo" className="h-5 w-auto object-contain" />
        <span className="uppercase tracking-wider text-xs font-black">Back to Projects</span>
      </div>
    </button>
  );
}
