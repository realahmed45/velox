import React, { useState } from 'react';
import { MapPin, Navigation } from 'lucide-react';

export default function PropertyMap({ properties, onSelect }) {
  // Simulating a map interface using a high-quality abstract map background
  // and placing interactive pins based on normalized coordinates relative to the container
  
  return (
    <div className="bg-gray-100 w-full h-[600px] rounded-2xl overflow-hidden relative shadow-inner group">
      {/* Background Map Image - Abstract Light Theme */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:scale-105 transition-transform duration-1000"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80")' }} 
      />
      <div className="absolute inset-0 bg-emerald-900/10 mix-blend-overlay pointer-events-none" />

      {/* Controls Overlay */}
      <div className="absolute top-4 right-4 flex flex-col gap-2">
        <button className="bg-white p-3 rounded-xl shadow-lg hover:bg-gray-50 text-gray-700">
            <Navigation size={20} />
        </button>
        <button className="bg-white p-3 rounded-xl shadow-lg hover:bg-gray-50 text-gray-700 font-bold">
            +
        </button>
        <button className="bg-white p-3 rounded-xl shadow-lg hover:bg-gray-50 text-gray-700 font-bold">
            -
        </button>
      </div>

      {/* Property Pins */}
      {properties.map((prop, index) => {
        // Pseudo-random positioning for demo purposes if lat/lng logic isn't strictly mapping to the background image pixels
        const top = 20 + (index * 15) % 60; 
        const left = 20 + (index * 25) % 60;
        
        return (
            <div 
                key={prop.id}
                className="absolute cursor-pointer transform hover:-translate-y-2 transition-all duration-300 group/pin"
                style={{ top: `${top}%`, left: `${left}%` }}
                onClick={() => onSelect(prop)}
            >
                <div className="relative">
                    <div className="w-12 h-12 bg-emerald-600 rounded-full border-4 border-white shadow-2xl flex items-center justify-center text-white z-10 relative animate-bounce" style={{ animationDelay: `${index * 0.1}s` }}>
                        <MapPin size={20} fill="currentColor" />
                    </div>
                    
                    {/* Tooltip on Hover */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-48 bg-white rounded-xl shadow-2xl p-2 opacity-0 group-hover/pin:opacity-100 transition-opacity pointer-events-none z-20">
                         <img src={prop.image} alt={prop.title} className="w-full h-24 object-cover rounded-lg mb-2" />
                         <p className="font-bold text-xs text-gray-900 truncate">{prop.title}</p>
                         <p className="text-emerald-600 font-black text-sm">${(prop.price / 1000000).toFixed(1)}M</p>
                         {/* Arrow */}
                         <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-8 border-transparent border-t-white" />
                    </div>
                </div>
            </div>
        );
      })}
    </div>
  );
}
