import React, { useState } from 'react';
import { Search, Map as MapIcon, Grid, Heart, Bed, Bath, Maximize, MessageCircle, X, ChevronRight, Share2, Star } from 'lucide-react';
import { properties } from './data/properties';
import PropertyMap from './components/PropertyMap';
import MortgageCalculator from './components/MortgageCalculator';
import PrototypeBanner from '../../components/common/PrototypeBanner';

export default function UrbanNest() {
  const [viewMode, setViewMode] = useState('grid'); // grid | map
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [favorites, setFavorites] = useState([1]); // Mock favorite
  const [filters, setFilters] = useState({ minPrice: 0, maxPrice: 15000000, beds: 'any' });

  const toggleFavorite = (id, e) => {
    e.stopPropagation();
    setFavorites(prev => prev.includes(id) ? prev.filter(fid => fid !== id) : [...prev, id]);
  };

  const filteredProperties = properties.filter(p => 
    p.price >= filters.minPrice && 
    p.price <= filters.maxPrice &&
    (filters.beds === 'any' || p.beds >= Number(filters.beds))
  );

  return (
    <div className="bg-gray-50 min-h-screen font-sans selection:bg-emerald-200">
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80" 
            className="absolute inset-0 w-full h-full object-cover animate-in fade-in duration-1000 scale-105"
            alt="Hero Luxury Home"
        />
        
        {/* Back to Projects Button */}
        <div className="absolute top-6 left-6 z-30">
            <a href="/projects" className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl text-white font-bold hover:bg-white/20 transition-all border border-white/20">
                <ChevronRight className="rotate-180" size={20} />
                Back to Projects
            </a>
        </div>

        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl md:text-7xl font-black text-white mb-6 drop-shadow-2xl tracking-tighter uppercase px-2">
                Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Sanctuary</span>
            </h1>
            <div className="bg-white/10 backdrop-blur-md p-2 md:p-2 rounded-2xl border border-white/20 w-full max-w-3xl flex flex-col md:flex-row gap-2 shadow-2xl">
                <div className="flex-1 bg-white rounded-xl flex items-center px-4 md:px-6 py-3 md:py-4">
                    <Search className="text-gray-400 mr-2 md:mr-3" size={20} />
                    <input 
                        type="text" 
                        placeholder="Search locations..." 
                        className="bg-transparent outline-none w-full font-medium text-gray-900 placeholder-gray-400 text-sm md:text-base"
                    />
                </div>
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 md:py-4 px-8 md:px-10 rounded-xl transition-all shadow-lg shadow-emerald-500/30 text-sm md:text-base">
                    Search
                </button>
            </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1600px] mx-auto p-6 md:p-10 -mt-20 relative z-30">
        
        {/* Filters & Controls */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-10 flex flex-col xl:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap gap-4 items-center w-full xl:w-auto">
                <div className="flex items-center gap-2 border px-4 py-2 rounded-xl bg-gray-50">
                    <span className="text-sm font-bold text-gray-500 uppercase tracking-wide">Price</span>
                    <input 
                        type="range" 
                        min="500000" max="15000000" step="100000"
                        value={filters.maxPrice}
                        onChange={e => setFilters({...filters, maxPrice: Number(e.target.value)})}
                        className="w-32 accent-emerald-600 cursor-pointer"
                    />
                    <span className="text-sm font-black text-gray-900">${(filters.maxPrice/1000000).toFixed(1)}M</span>
                </div>
                 <div className="flex gap-2">
                    {['Any', '2+', '3+', '4+'].map((opt, i) => (
                        <button 
                            key={opt}
                            onClick={() => setFilters({...filters, beds: i === 0 ? 'any' : i + 1})}
                            className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                                (filters.beds === 'any' && i === 0) || filters.beds === (i + 1)
                                ? 'bg-emerald-600 text-white shadow-md' 
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                        >
                            {opt} Beds
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex gap-2 bg-gray-100 p-1 rounded-xl">
                <button 
                    onClick={() => setViewMode('grid')}
                    className={`p-3 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-white shadow-md text-emerald-600' : 'text-gray-500 hover:text-gray-900'}`}
                >
                    <Grid size={20} />
                </button>
                <button 
                     onClick={() => setViewMode('map')}
                     className={`p-3 rounded-lg transition-all ${viewMode === 'map' ? 'bg-white shadow-md text-emerald-600' : 'text-gray-500 hover:text-gray-900'}`}
                >
                    <MapIcon size={20} />
                </button>
            </div>
        </div>

        {/* Dynamic Content Area */}
        {viewMode === 'grid' ? (
             <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredProperties.map(prop => (
                    <div 
                        key={prop.id} 
                        onClick={() => setSelectedProperty(prop)}
                        className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-gray-100"
                    >
                        <div className="relative h-80 overflow-hidden">
                            <img src={prop.image} alt={prop.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            
                            <button 
                                onClick={(e) => toggleFavorite(prop.id, e)}
                                className="absolute top-4 right-4 p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-red-500 transition-colors"
                            >
                                <Heart size={20} fill={favorites.includes(prop.id) ? "currentColor" : "none"} className={favorites.includes(prop.id) ? "text-red-500" : ""} />
                            </button>

                            <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                                <button className="w-full bg-white text-emerald-900 py-3 rounded-xl font-bold text-sm hover:bg-emerald-50 transition-colors">
                                    View Details
                                </button>
                            </div>
                        </div>
                        
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-black text-gray-900 mb-1">{prop.title}</h3>
                                    <p className="text-gray-500 text-sm font-medium">{prop.address}</p>
                                </div>
                                <div className="bg-emerald-50 px-3 py-1 rounded-lg text-emerald-700 font-black text-lg">
                                    ${(prop.price/1000000).toFixed(2)}M
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-6 text-gray-600 text-sm font-medium border-t border-gray-100 pt-4">
                                <span className="flex items-center gap-2"><Bed size={18} className="text-emerald-500" /> {prop.beds} Beds</span>
                                <span className="flex items-center gap-2"><Bath size={18} className="text-emerald-500" /> {prop.baths} Baths</span>
                                <span className="flex items-center gap-2"><Maximize size={18} className="text-emerald-500" /> {prop.sqft.toLocaleString()} sqft</span>
                            </div>
                        </div>
                    </div>
                ))}
             </div>
        ) : (
            <PropertyMap properties={filteredProperties} onSelect={setSelectedProperty} />
        )}
      </div>

      {/* Detailed Modal */}
      {selectedProperty && (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8"
            onClick={() => setSelectedProperty(null)}
        >
            <div 
                className="relative w-full max-w-6xl h-full max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 flex flex-col md:flex-row"
                onClick={e => e.stopPropagation()}
            >
                <button 
                    onClick={() => setSelectedProperty(null)}
                    className="absolute top-6 right-6 z-50 p-4 bg-black text-white rounded-full hover:scale-110 transition-transform shadow-xl"
                >
                    <X size={32} strokeWidth={3} />
                </button>

                <div className="w-full md:w-1/2 h-64 md:h-full relative">
                    <img src={selectedProperty.image} className="w-full h-full object-cover" alt="Detail" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
                        <h2 className="text-4xl font-black mb-2">{selectedProperty.title}</h2>
                        <p className="text-lg opacity-90">{selectedProperty.address}</p>
                        
                            <div className="flex gap-4 mt-6">
                            <button className="flex-1 bg-white text-gray-900 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-100">
                                <MessageCircle size={20} /> Contact Agent
                            </button>
                            <button className="p-4 bg-white/20 backdrop-blur-md rounded-xl hover:bg-white/30 text-white">
                                <Share2 size={20} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Info Column */}
                <div className="w-full md:w-1/2 p-8 lg:p-12 overflow-y-auto bg-gray-50 h-full">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                        <span className="text-2xl md:text-3xl font-black text-emerald-600">${(selectedProperty.price/1000000).toFixed(2)}M</span>
                        <div className="flex items-center gap-1 text-yellow-500 font-bold bg-white px-3 py-1 rounded-full border border-gray-100 shadow-sm">
                            <Star fill="currentColor" size={16} />
                            4.9 (128)
                        </div>
                    </div>

                    <div className="mb-10">
                        <h3 className="text-xl font-black text-gray-900 mb-4">Property Features</h3>
                        <div className="flex flex-wrap gap-3">
                            {selectedProperty.features.map(feat => (
                                <span key={feat} className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-bold text-gray-600 shadow-sm">
                                    {feat}
                                </span>
                            ))}
                            <span className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-bold text-gray-600 shadow-sm">Central Air</span>
                            <span className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-bold text-gray-600 shadow-sm">2 Garage Spots</span>
                        </div>
                    </div>

                    <div className="mb-10">
                            <h3 className="text-xl font-black text-gray-900 mb-6">Location Score</h3>
                            <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm font-bold text-gray-500">Walk Score</span>
                                    <span className="text-emerald-600 font-black">94/100</span>
                                </div>
                                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden"><div className="w-[94%] h-full bg-emerald-500 rounded-full" /></div>
                            </div>
                            <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm font-bold text-gray-500">Transit Score</span>
                                    <span className="text-emerald-600 font-black">88/100</span>
                                </div>
                                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden"><div className="w-[88%] h-full bg-emerald-500 rounded-full" /></div>
                            </div>
                            </div>
                    </div>

                    <div className="mb-8">
                        <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                            <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center font-bold text-xl text-gray-500">
                                {selectedProperty.agent.name[0]}
                            </div>
                            <div>
                                <p className="font-bold text-gray-900">{selectedProperty.agent.name}</p>
                                <p className="text-sm text-gray-500">Premier Agent - UrbanNest Realty</p>
                            </div>
                            <button className="ml-auto text-emerald-600 font-bold text-sm">View Profile</button>
                        </div>
                    </div>

                    <MortgageCalculator price={selectedProperty.price} />
                </div>
            </div>
        </div>
      )}
      <PrototypeBanner />
    </div>
  );
}
