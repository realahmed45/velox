import React, { useState } from 'react';
import { Plane, Calendar, MapPin, Plus } from 'lucide-react';

export default function TripBuilder() {
  const [days, setDays] = useState([
    { day: 1, activities: ["Arrival", "Hotel Check-in"] },
    { day: 2, activities: ["City Tour"] },
    { day: 3, activities: [] },
  ]);

  const addActivity = (dayIndex) => {
    const newDays = [...days];
    newDays[dayIndex].activities.push("New Activity");
    setDays(newDays);
  };

  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl">
        <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-2">
            <Calendar className="text-sky-500" /> Trip Itinerary
        </h3>
        
        <div className="space-y-6">
            {days.map((d, i) => (
                <div key={d.day} className="relative pl-8 border-l-2 border-slate-100 last:border-0 pb-6">
                    <div className="absolute left-0 top-0 -translate-x-[9px] w-4 h-4 rounded-full bg-sky-500 border-4 border-white shadow-md" />
                    <h4 className="font-bold text-gray-900 mb-3">Day {d.day}</h4>
                    
                    <div className="flex flex-col gap-2">
                        {d.activities.map((act, j) => (
                            <div key={j} className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center gap-3 group hover:border-sky-200 transition-colors cursor-grab active:cursor-grabbing">
                                <div className="p-2 bg-white rounded-lg text-sky-500 shadow-sm"><MapPin size={16} /></div>
                                <span className="font-medium text-gray-700">{act}</span>
                            </div>
                        ))}
                        <button 
                            onClick={() => addActivity(i)}
                            className="flex items-center justify-center py-2 border-2 border-dashed border-slate-200 rounded-xl text-slate-400 font-bold hover:text-sky-500 hover:border-sky-200 transition-colors"
                        >
                            <Plus size={16} /> Add 
                        </button>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
}
