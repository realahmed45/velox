import React, { useState } from 'react';
import { Globe, Star, ArrowRight, Plane } from 'lucide-react';
import { packages, reviews } from './data/travelData';
import WeatherWidget from './components/WeatherWidget';
import TripBuilder from './components/TripBuilder';
import PrototypeBanner from '../../components/common/PrototypeBanner';

export default function WanderLux() {
  const [search, setSearch] = useState("");

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      
      {/* Hero */}
      <div className="relative h-[600px] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80" className="absolute inset-0 w-full h-full object-cover animate-in fade-in duration-1000 scale-105" alt="Travel"/>
        
        {/* Top Nav */}
        <div className="absolute top-0 left-0 right-0 z-50 p-4 sm:p-6 flex justify-between items-center">
             <div /> {/* Spacer */}
             <a href="/projects" className="bg-white/10 backdrop-blur-md px-4 sm:px-6 py-2 rounded-full font-bold text-xs sm:text-sm hover:bg-white/20 transition-all flex items-center gap-2 border border-white/10">
                <span className="hidden xs:inline">Back</span> to Projects <ArrowRight size={14} className="sm:size-[16px]" />
             </a>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-6 h-full flex flex-col justify-center text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-black mb-4 md:mb-6 tracking-tighter drop-shadow-2xl uppercase italic">
                WANDER<span className="text-sky-400 font-light italic">LUX</span>
            </h1>
            <p className="text-base sm:text-lg md:text-2xl font-medium max-w-2xl text-slate-100 drop-shadow-md mb-8 md:mb-10 px-2 md:px-0">
                Curated journeys for the modern explorer. Experience the world in unparalled luxury.
            </p>
            
            <div className="bg-white/10 backdrop-blur-md p-2 rounded-2xl border border-white/20 w-full max-w-4xl flex flex-col md:flex-row items-center gap-2 shadow-2xl">
                <div className="w-full md:flex-1 bg-white rounded-xl flex items-center px-4 md:px-6 py-3 md:py-4">
                    <Globe className="text-gray-400 mr-2 md:mr-3" size={20} />
                    <input 
                        type="text" 
                        placeholder="Destination..." 
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        className="bg-transparent outline-none w-full font-bold text-slate-900 placeholder-slate-400 text-xs sm:text-base"
                    />
                </div>
                <div className="bg-white rounded-xl flex items-center px-6 py-4 w-48 border-l border-slate-100 hidden md:flex">
                     <input type="date" className="bg-transparent outline-none w-full font-bold text-slate-900" />
                </div>
                <button onClick={() => alert('Searching best properties...')} className="w-full md:w-auto bg-sky-500 hover:bg-sky-600 text-white font-black uppercase tracking-widest py-3 md:py-4 px-10 rounded-xl transition-all shadow-lg shadow-sky-500/30 text-[10px] xs:text-xs md:text-base">
                    Explore Now
                </button>
            </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6 md:p-10 -mt-20 relative z-30">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-12">
                {/* Popular Destinations */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {packages.filter(p => !search || p.destination.toLowerCase().includes(search.toLowerCase())).map(pkg => (
                        <div key={pkg.id} className="bg-white rounded-3xl overflow-hidden shadow-xl group cursor-pointer hover:-translate-y-2 transition-transform duration-300">
                            <div className="relative h-64 overflow-hidden">
                                <img src={pkg.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={pkg.destination} />
                                <div className="absolute top-4 right-4">
                                     <WeatherWidget destination={pkg.destination} />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                                    <h3 className="text-2xl font-black mb-1">{pkg.destination}</h3>
                                    <div className="flex gap-2">
                                        {pkg.tags.map(tag => (
                                            <span key={tag} className="text-[10px] font-bold uppercase tracking-wider bg-white/20 backdrop-blur px-2 py-1 rounded">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-end mb-4">
                                    <div className="flex items-center gap-1 text-yellow-500 font-bold text-sm">
                                        <Star size={16} fill="currentColor" /> {pkg.rating} ({pkg.reviews})
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs text-slate-500 font-bold uppercase">Starting from</p>
                                        <p className="text-2xl font-black text-slate-900">${pkg.price}</p>
                                    </div>
                                </div>
                                <button onClick={() => alert(`Opening itinerary for ${pkg.destination}...`)} className="w-full py-3 rounded-xl border-2 border-slate-100 font-bold text-slate-600 hover:border-sky-500 hover:text-sky-500 transition-colors flex items-center justify-center gap-2">
                                    View Itinerary <ArrowRight size={18} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Reviews */}
                <div>
                     <h2 className="text-3xl font-black text-slate-900 mb-8">Traveler Stories</h2>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {reviews.map(rev => (
                            <div key={rev.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                <div className="flex items-center gap-3 mb-4">
                                    <img src={rev.image} className="w-10 h-10 rounded-full object-cover" alt="User" />
                                    <div>
                                        <p className="font-bold text-sm">{rev.user}</p>
                                        <div className="flex text-yellow-400"><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /><Star size={12} fill="currentColor" /></div>
                                    </div>
                                </div>
                                <p className="text-slate-600 text-sm italic">"{rev.text}"</p>
                            </div>
                        ))}
                     </div>
                </div>
            </div>

            <div className="space-y-8">
                 {/* Trip Builder Widget */}
                 <TripBuilder />

                 {/* Promo Card */}
                 <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-8 text-white text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/2" />
                    <Plane size={48} className="mx-auto mb-4 text-sky-300" />
                    <h3 className="text-2xl font-black mb-2">Summer Sale</h3>
                    <p className="text-indigo-200 text-sm mb-6">Get 20% off on all packages to Europe this summer.</p>
                    <button className="bg-white text-indigo-700 w-full py-3 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-indigo-50 transition-colors">
                        Claim Offer
                    </button>
                 </div>
            </div>
        </div>

      </div>
      <PrototypeBanner />
    </div>
  );
}
