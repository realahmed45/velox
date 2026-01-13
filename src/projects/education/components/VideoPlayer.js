import React from 'react';
import { Play, Pause, Volume2, Maximize, SkipForward, Settings } from 'lucide-react';

export default function VideoPlayer({ title }) {
  return (
    <div className="bg-black rounded-3xl overflow-hidden shadow-2xl relative group aspect-video">
        <img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" 
            alt="Video Thumbnail"
        />
        <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all hover:scale-110">
                <Play size={32} fill="currentColor" />
            </button>
        </div>

        {/* Custom Controls Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <div className="w-full bg-white/30 h-1.5 rounded-full mb-4 cursor-pointer overflow-hidden">
                <div className="bg-orange-500 w-1/3 h-full relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg scale-0 group-hover:scale-100 transition-transform" />
                </div>
            </div>
            
            <div className="flex justify-between items-center text-white">
                <div className="flex items-center gap-6">
                    <button><Play size={20} /></button>
                    <button><SkipForward size={20} /></button>
                    <div className="flex items-center gap-2 group/vol">
                        <Volume2 size={20} />
                        <div className="w-0 overflow-hidden group-hover/vol:w-20 transition-all">
                             <div className="w-20 h-1 bg-white/30 rounded-full ml-2"><div className="w-2/3 bg-white h-full" /></div>
                        </div>
                    </div>
                    <span className="text-xs font-mono">12:30 / 45:00</span>
                </div>
                
                <div className="flex items-center gap-4">
                     <button><Settings size={20} /></button>
                     <button><Maximize size={20} /></button>
                </div>
            </div>
        </div>

        <div className="absolute top-6 left-6 text-white font-bold text-lg drop-shadow-md">
            {title || "Introduction to React Hooks"}
        </div>
    </div>
  );
}
