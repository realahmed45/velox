import React, { useEffect, useState } from 'react';

export default function VitalsChart({ type, color }) {
  const [data, setData] = useState(Array(20).fill(50));
  
  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => {
        const newData = [...prev.slice(1)];
        // Simulate heartrate/vitals fluctuation
        const last = prev[prev.length - 1];
        const change = (Math.random() - 0.5) * 10;
        let next = last + change;
        
        // Keep within bounds
        if (next > 90) next = 90;
        if (next < 40) next = 40;
        
        newData.push(next);
        return newData;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Generate SVG path
  const points = data.map((val, i) => {
    const x = (i / (data.length - 1)) * 100;
    const y = 100 - val; // Invert y for SVG coords
    return `${x},${y}`;
  }).join(' ');

  return (
    <div className="w-full h-24 bg-gray-50 rounded-lg overflow-hidden relative">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
        <defs>
            <linearGradient id={`grad-${type}`} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor={color} stopOpacity="0.4" />
                <stop offset="100%" stopColor={color} stopOpacity="0" />
            </linearGradient>
        </defs>
        <path d={`M 0,100 ${points} 100,100`} fill={`url(#grad-${type})`} />
        <polyline points={points} fill="none" stroke={color} strokeWidth="2" vectorEffect="non-scaling-stroke" />
      </svg>
      {/* Live Value Indicator */}
      <div className="absolute top-2 right-2 font-black text-xl" style={{ color }}>
        {Math.round(data[data.length - 1])}
      </div>
    </div>
  );
}
