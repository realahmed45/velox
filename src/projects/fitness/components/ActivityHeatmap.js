import React from 'react';

export default function ActivityHeatmap() {
    // Generate data for 4 months (approx 16 weeks)
    const weeks = Array(18).fill(0).map(() => 
        Array(7).fill(0).map(() => Math.floor(Math.random() * 4))
    );

    const checkInColor = (level) => {
        switch(level) {
            case 0: return 'bg-gray-800';
            case 1: return 'bg-green-900';
            case 2: return 'bg-green-700';
            case 3: return 'bg-green-500';
            default: return 'bg-gray-800';
        }
    };

    return (
        <div className="bg-black/50 p-6 rounded-2xl border border-gray-800">
            <h3 className="font-bold text-gray-300 mb-4 flex justify-between items-center">
                <span>Consistency Streak</span>
                <span className="text-xs font-mono bg-green-900/30 text-green-400 px-2 py-1 rounded">Last 4 Months</span>
            </h3>
            <div className="flex gap-1 overflow-hidden">
                {weeks.map((week, i) => (
                    <div key={i} className="flex flex-col gap-1">
                        {week.map((day, j) => (
                            <div 
                                key={j} 
                                className={`w-3 h-3 rounded-sm ${checkInColor(day)} transition-colors hover:ring-1 hover:ring-white cursor-pointer`} 
                                title={`${day} workouts`}
                            />
                        ))}
                    </div>
                ))}
            </div>
            <div className="flex items-center gap-2 mt-4 text-xs text-gray-500 font-mono">
                <span>Less</span>
                <div className="w-3 h-3 bg-gray-800 rounded-sm" />
                <div className="w-3 h-3 bg-green-900 rounded-sm" />
                <div className="w-3 h-3 bg-green-700 rounded-sm" />
                <div className="w-3 h-3 bg-green-500 rounded-sm" />
                <span>More</span>
            </div>
        </div>
    );
}
