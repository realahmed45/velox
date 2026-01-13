import React, { useState, useEffect } from 'react';

export default function StockChart({ color = "#10b981" }) {
  // Generate random candle data
  const [candles, setCandles] = useState(() => {
    let price = 100;
    return Array(40).fill(0).map(() => {
        const change = (Math.random() - 0.5) * 5;
        price += change;
        return {
            open: price - Math.random(),
            close: price + Math.random(),
            high: price + 2,
            low: price - 2
        };
    });
  });

  useEffect(() => {
      const interval = setInterval(() => {
          setCandles(prev => {
              const last = prev[prev.length - 1];
              const change = (Math.random() - 0.5) * 3;
              const newPrice = last.close + change;
              const newCandle = {
                  open: last.close,
                  close: newPrice,
                  high: Math.max(last.close, newPrice) + Math.random(),
                  low: Math.min(last.close, newPrice) - Math.random()
              };
              return [...prev.slice(1), newCandle];
          });
      }, 1000);
      return () => clearInterval(interval);
  }, []);

  const max = Math.max(...candles.map(c => c.high));
  const min = Math.min(...candles.map(c => c.low));
  const range = max - min;

  return (
    <div className="w-full h-48 flex items-end gap-1 overflow-hidden opacity-80 mask-graduation">
        {candles.map((c, i) => {
            const height = ((c.high - c.low) / range) * 100;
            const bottom = ((c.low - min) / range) * 100;
            const isGreen = c.close > c.open;
            
            return (
                <div key={i} className="flex-1 relative h-full group">
                    {/* Wick */}
                    <div 
                        className={`absolute w-[1px] ${isGreen ? 'bg-green-500' : 'bg-red-500'} left-1/2 -translate-x-1/2 transition-all duration-300`}
                        style={{ bottom: `${bottom}%`, height: `${height}%` }} 
                    />
                    {/* Body */}
                    <div 
                        className={`absolute w-full mx-[1px] rounded-[1px] ${isGreen ? 'bg-green-500' : 'bg-red-500'} transition-all duration-300 group-hover:opacity-100 opacity-70`}
                        style={{ 
                            bottom: `${Math.min(((c.open - min)/range)*100, ((c.close - min)/range)*100)}%`, 
                            height: `${Math.abs(((c.close - c.open)/range)*100)}%` 
                        }} 
                    />
                </div>
            );
        })}
    </div>
  );
}
