import React, { useState } from 'react';
import { Dumbbell, Flame, Music, Trophy, Zap, Play, ChevronRight } from 'lucide-react';
import { classes, leaderboard } from './data/fitnessData';
import WorkoutTimer from './components/WorkoutTimer';
import ActivityHeatmap from './components/ActivityHeatmap';
import PrototypeBanner from '../../components/common/PrototypeBanner';
import { Menu, X } from 'lucide-react';

export default function FitZone() {
  const [activeTab, setActiveTab] = useState('classes');
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-black min-h-screen font-sans text-gray-100 selection:bg-green-500/30">
      
      {/* Navigation */}
      <nav className="border-b border-gray-900 bg-black/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div className="flex items-center gap-8">
                <div className="flex items-center gap-2 text-green-500">
                    <Dumbbell size={32} fill="currentColor" />
                    <span className="text-2xl font-black text-white italic tracking-tighter">FIT<span className="text-green-500">ZONE</span></span>
                </div>
                
                <a href="/projects" className="hidden lg:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">
                    <ChevronRight className="rotate-180" size={16} /> Back to Projects
                </a>
            </div>
            
            <div className="hidden md:flex gap-8 font-bold text-sm tracking-widest text-gray-400 uppercase">
                <button onClick={() => setActiveTab('classes')} className={`hover:text-white transition-colors ${activeTab === 'classes' ? 'text-green-500' : ''}`}>Classes</button>
                <button onClick={() => setActiveTab('trainers')} className="hover:text-white transition-colors">Trainers</button>
                <button onClick={() => setActiveTab('progress')} className="hover:text-white transition-colors">Progress</button>
            </div>

            <button onClick={() => alert('Booking System Initializing...')} className="hidden md:block bg-green-600 hover:bg-green-500 text-black px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest transition-all">
                Book Now
            </button>
            <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X /> : <Menu />}
            </button>
        </div>
        {/* Mobile Menu Overlay */}
        {menuOpen && (
            <div className="md:hidden bg-black/95 backdrop-blur-xl absolute top-20 left-0 right-0 border-b border-gray-800 p-6 z-40 animate-in slide-in-from-top duration-300">
                <div className="flex flex-col gap-6 text-center font-black italic text-2xl">
                    <button onClick={() => { setActiveTab('classes'); setMenuOpen(false); }} className="hover:text-green-500 text-white">CLASSES</button>
                    <button onClick={() => { setActiveTab('trainers'); setMenuOpen(false); }} className="hover:text-green-500 text-white">TRAINERS</button>
                    <button onClick={() => { setActiveTab('progress'); setMenuOpen(false); }} className="hover:text-green-500 text-white">PROGRESS</button>
                    <a href="/projects" className="text-gray-500 text-sm font-bold not-italic">Back to Projects</a>
                </div>
            </div>
        )}
      </nav>

      <div className="max-w-7xl mx-auto p-6 lg:p-10">
        
        {/* Welcome Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            
            {/* Left Col: Hero Stats */}
            <div className="lg:col-span-2 space-y-8">
                <div className="bg-gradient-to-r from-gray-900 to-black p-6 md:p-8 rounded-3xl border border-gray-800 flex flex-col md:flex-row items-center gap-6 md:gap-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10"><Zap size={200} className="md:size-[200px] size-[120px]" /></div>
                    
                    <div className="relative z-10 flex-1 text-center md:text-left">
                        <h1 className="text-3xl md:text-4xl font-black italic mb-2 tracking-tighter uppercase">READY TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">CRUSH IT?</span></h1>
                        <p className="text-sm md:text-base text-gray-400 mb-6 font-medium px-4 md:px-0">You're on a 12-day streak! Keep the momentum going with today's HIIT session.</p>
                        <div className="flex justify-center md:justify-start gap-4">
                            <div className="bg-gray-800/50 p-3 md:p-4 rounded-xl backdrop-blur-sm border border-white/5">
                                <p className="text-[10px] text-gray-500 font-bold uppercase">Calories</p>
                                <p className="text-xl md:text-2xl font-black text-white">12,450</p>
                            </div>
                             <div className="bg-gray-800/50 p-3 md:p-4 rounded-xl backdrop-blur-sm border border-white/5">
                                <p className="text-[10px] text-gray-500 font-bold uppercase">Workouts</p>
                                <p className="text-xl md:text-2xl font-black text-white">24</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="relative w-32 h-32 md:w-40 md:h-40">
                         <svg className="w-full h-full -rotate-90">
                            <circle cx="50%" cy="50%" r="45%" className="stroke-gray-800 fill-none" strokeWidth="10" />
                            <circle cx="50%" cy="50%" r="45%" className="stroke-green-500 fill-none" strokeWidth="10" strokeDasharray="283" strokeDashoffset="40" strokeLinecap="round" />
                         </svg>
                         <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-3xl font-black">85%</span>
                            <span className="text-[10px] font-bold uppercase text-gray-500">Weekly Goal</span>
                         </div>
                    </div>
                </div>

                {/* Tabbed Content */}
                <div>
                    <h2 className="text-2xl font-black italic mb-6 flex items-center gap-2"><Flame className="text-orange-500" /> TODAYS CLASSES</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {classes.map(cls => (
                            <div key={cls.id} className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 group hover:border-green-500/50 transition-colors">
                                <div className="h-40 overflow-hidden relative">
                                    <img src={cls.image} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500" alt={cls.name}/>
                                    <div className="absolute top-4 right-4 bg-black/80 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase text-green-400 border border-green-500/30">
                                        {cls.category}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="font-black text-xl italic">{cls.name}</h3>
                                            <p className="text-sm text-gray-400 font-bold">with {cls.instructor}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-black text-white">{cls.time}</p>
                                            <p className="text-xs text-gray-500 font-mono">{cls.duration}</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                                        <div className="flex items-center gap-2 text-xs font-bold text-gray-400">
                                            <Zap size={14} className="text-yellow-500" /> {cls.calories} kcal
                                        </div>
                                        <button onClick={() => alert(`Spot Reserved for ${cls.name}!`)} className="text-xs font-black uppercase tracking-widest bg-white text-black px-4 py-2 rounded hover:bg-green-500 transition-colors">
                                            Reserve Spot
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Col: Tools */}
            <div className="space-y-8">
                <WorkoutTimer />
                
                <ActivityHeatmap />

                {/* Leaderboard */}
                <div className="bg-gray-900 rounded-3xl p-6 border border-gray-800">
                    <h3 className="font-black italic text-lg mb-4 flex items-center gap-2"><Trophy className="text-yellow-500" /> LEADERBOARD</h3>
                    <div className="space-y-3">
                        {leaderboard.map((user, i) => (
                            <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-black/40 border border-gray-800">
                                <div className="flex items-center gap-3">
                                    <span className={`font-mono font-bold w-6 text-center ${i === 0 ? 'text-yellow-500' : 'text-gray-500'}`}>{user.rank}</span>
                                    <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-xs font-bold">{user.avatar}</div>
                                    <span className="font-bold text-sm">{user.name}</span>
                                </div>
                                <span className="font-mono font-bold text-green-500 text-sm">{user.points} pts</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Music Player Mini */}
                <div className="bg-gradient-to-r from-green-900 to-black rounded-2xl p-4 flex items-center gap-4 border border-green-900/50">
                    <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                        <Music size={20} className="text-green-500 animate-pulse" />
                    </div>
                    <div className="flex-1 overflow-hidden">
                        <p className="font-bold text-sm truncate">Beast Mode Playlist</p>
                        <p className="text-xs text-gray-400">High Tempo Mix</p>
                    </div>
                    <button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform">
                        <Play size={16} fill="currentColor" className="ml-0.5" />
                    </button>
                </div>
            </div>

        </div>

      </div>
      <PrototypeBanner />
    </div>
  );
}
