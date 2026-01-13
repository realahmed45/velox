import React from 'react';
import { Sun, Cloud, CloudRain, Wind } from 'lucide-react';

export default function WeatherWidget({ destination }) {
  // Mock weather data based on basic logic
  const temp = 28;
  
  return (
    <div className="bg-white/20 backdrop-blur-md p-4 rounded-2xl text-white border border-white/30 flex items-center justify-between">
        <div className="flex items-center gap-3">
            <Sun className="text-yellow-400 animate-spin-slow" size={32} />
            <div>
                <p className="font-bold text-lg">{temp}°C</p>
                <p className="text-xs font-medium opacity-90">Sunny</p>
            </div>
        </div>
        <div className="text-right">
             <p className="text-xs font-bold uppercase tracking-wider opacity-80">{destination.split(',')[0]}</p>
             <div className="flex items-center gap-1 justify-end text-xs opacity-70 mt-1">
                <Wind size={12} /> 12km/h
             </div>
        </div>
    </div>
  );
}
