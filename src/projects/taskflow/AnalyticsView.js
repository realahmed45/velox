import React from 'react';

export default function AnalyticsView() {
  return (
    <div className="px-2">
      <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-8 md:mb-10 uppercase">Analytics Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-lg">
          <h3 className="text-base md:text-lg font-bold mb-6 text-gray-700 uppercase tracking-tight">Task Completion Rate</h3>
          <div className="flex items-end gap-1.5 md:gap-2 h-64 px-1">
            {[40, 65, 45, 80, 55, 90, 75].map((h, i) => (
              <div key={i} className="flex-1 bg-gray-100 rounded-t-lg md:rounded-t-xl relative group overflow-hidden">
                <div 
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-600 to-cyan-400 transition-all duration-1000 group-hover:from-blue-500"
                  style={{ height: `${h}%` }} 
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between text-[10px] md:text-xs font-bold text-gray-400 mt-4 uppercase tracking-tighter sm:tracking-normal">
            <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
            <h3 className="text-lg font-bold mb-6">Productivity Score</h3>
            <div className="flex items-center justify-center h-64">
                <div className="w-48 h-48 rounded-full border-[12px] border-gray-100 flex items-center justify-center relative">
                    <div className="text-center">
                        <span className="block text-4xl font-black text-gray-900">87%</span>
                        <span className="text-xs text-gray-400 font-bold uppercase">Excellent</span>
                    </div>
                     <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                        <circle 
                            cx="50" cy="50" r="44" 
                            fill="none" 
                            stroke="url(#gradient)" 
                            strokeWidth="8"
                            strokeDasharray="276"
                            strokeDashoffset="35" // 276 * (1 - 0.87) approx
                            strokeLinecap="round"
                        />
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#3b82f6" />
                                <stop offset="100%" stopColor="#06b6d4" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
