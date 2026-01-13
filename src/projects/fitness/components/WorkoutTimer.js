import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Timer } from 'lucide-react';

export default function WorkoutTimer() {
  const [timeLeft, setTimeLeft] = useState(45);
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState('work'); // work | rest

  useEffect(() => {
    let interval = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      if (mode === 'work') {
          setMode('rest');
          setTimeLeft(15);
      } else {
          setMode('work');
          setTimeLeft(45);
      }
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft, mode]);

  const toggleTimer = () => setIsActive(!isActive);
  const resetTimer = () => {
    setIsActive(false);
    setMode('work');
    setTimeLeft(45);
  };

  return (
    <div className="bg-black rounded-3xl p-8 border border-gray-800 relative overflow-hidden text-center group">
        <div className={`absolute inset-0 opacity-20 transition-colors duration-500 ${mode === 'work' ? 'bg-gradient-to-br from-green-900 to-black' : 'bg-gradient-to-br from-red-900 to-black'}`} />
        
        <div className="relative z-10">
            <div className="flex items-center justify-center gap-2 mb-6">
                <Timer className="text-gray-400" />
                <h3 className="text-xl font-bold font-mono text-gray-300 uppercase tracking-widest">Interval Timer</h3>
            </div>

            <div className="mb-8">
                <span className={`text-8xl font-black font-mono tracking-tighter ${mode === 'work' ? 'text-green-500' : 'text-red-500'}`}>
                    00:{timeLeft.toString().padStart(2, '0')}
                </span>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500 mt-2">
                    {mode === 'work' ? 'High Intensity' : 'Rest Period'}
                </p>
            </div>

            <div className="flex justify-center gap-4">
                <button 
                    onClick={toggleTimer}
                    className={`w-16 h-16 rounded-full flex items-center justify-center text-black font-bold transition-all hover:scale-110 ${isActive ? 'bg-yellow-500' : 'bg-green-500'}`}
                >
                    {isActive ? <Pause fill="currentColor" /> : <Play fill="currentColor" className="ml-1" />}
                </button>
                <button 
                    onClick={resetTimer}
                    className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center text-white font-bold transition-all hover:bg-gray-700"
                >
                    <RotateCcw size={20} />
                </button>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-800 h-2 rounded-full mt-8 overflow-hidden">
                <div 
                    className={`h-full transition-all duration-1000 ${mode === 'work' ? 'bg-green-500' : 'bg-red-500'}`}
                    style={{ width: `${(timeLeft / (mode === 'work' ? 45 : 15)) * 100}%` }}
                />
            </div>
        </div>
    </div>
  );
}
