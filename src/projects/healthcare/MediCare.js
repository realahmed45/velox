import React, { useState } from 'react';
import { 
  Activity, FileText, Phone, Bell, Menu, 
  Heart, ChevronRight, Play, Pause, Video, Mic, X 
} from 'lucide-react';
import PrototypeBanner from '../../components/common/PrototypeBanner';

export default function MediCare() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isVideoActive, setIsVideoActive] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleVideo = () => setIsPlaying(!isPlaying);

  const renderContent = () => {
    switch(activeTab) {
      case 'doctors':
        return (
            <div className="p-4 md:p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Find a Specialist</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {[1, 2, 3, 4].map(i => (
                        <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex gap-4 hover:shadow-md transition-shadow cursor-pointer">
                            <img src={`https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200`} className="w-24 h-24 rounded-2xl object-cover" alt="Dr" />
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">Dr. Sarah Johnson</h3>
                                <p className="text-blue-600 font-medium">Cardiologist • 15 Yrs Exp</p>
                                <div className="flex items-center gap-1 text-yellow-500 mt-2">
                                    <span className="font-bold">4.9</span> ★★★★★
                                </div>
                                <button className="mt-3 text-sm font-bold bg-blue-50 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors">Book Appointment</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
      case 'appointments':
        return (
            <div className="p-4 md:p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Upcoming Appointments</h2>
                <div className="space-y-4">
                     <div className="bg-blue-600 text-white p-6 rounded-2xl shadow-lg flex justify-between items-center">
                        <div>
                            <p className="opacity-90 font-medium mb-1">Today, 2:00 PM</p>
                            <h3 className="text-2xl font-bold">Dr. Michael Chen</h3>
                            <p className="opacity-90">Video Consultation • Cardiology</p>
                        </div>
                        <button onClick={() => setIsVideoActive(true)} className="bg-white text-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">
                            Join Call Now
                        </button>
                     </div>
                </div>
            </div>
        );
      case 'labs':
        return (
             <div className="p-4 md:p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Lab Results</h2>
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                    {[
                        { test: 'Complete Blood Count', date: 'Oct 24, 2025', status: 'Normal' },
                        { test: 'Lipid Panel', date: 'Sep 12, 2025', status: 'Action Needed' },
                        { test: 'Vitamin D', date: 'Aug 05, 2025', status: 'Normal' },
                    ].map((res, i) => (
                        <div key={i} className="flex items-center justify-between p-6 border-b border-gray-100 last:border-0 hover:bg-gray-50">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-blue-50 text-blue-600 rounded-lg"><FileText size={20} /></div>
                                <div>
                                    <h4 className="font-bold text-gray-900">{res.test}</h4>
                                    <p className="text-sm text-gray-500">{res.date}</p>
                                </div>
                            </div>
                            <span className={`px-4 py-2 rounded-lg text-sm font-bold ${res.status === 'Normal' ? 'bg-green-50 text-green-600' : 'bg-orange-50 text-orange-600'}`}>
                                {res.status}
                            </span>
                        </div>
                    ))}
                </div>
             </div>
        );
      default:
        // Dashboard
        return (
            <div className="p-6 lg:p-10 space-y-8">
                <div className="mb-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <h1 className="text-4xl font-black text-gray-900 mb-2">Welcome back, Sarah 👋</h1>
                    <p className="text-gray-500 font-medium">Here's your health overview for today.</p>
                </div>

                {/* Dashboard Widgets */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-red-50 text-red-500 rounded-2xl"><Heart size={24} /></div>
                            <Activity className="text-gray-300" size={20} />
                        </div>
                        <h3 className="text-gray-500 font-medium mb-1">Heart Rate</h3>
                        <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-black text-gray-900">72</span>
                            <span className="text-gray-400 font-bold">bpm</span>
                        </div>
                    </div>
                     <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                        <div className="flex justify-between items-start mb-4">
                             <div className="p-3 bg-blue-50 text-blue-500 rounded-2xl"><Activity size={24} /></div>
                        </div>
                        <h3 className="text-gray-500 font-medium mb-1">Blood Pressure</h3>
                         <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-black text-gray-900">120/80</span>
                        </div>
                    </div>
                    
                    <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-all flex flex-col items-center justify-center text-center">
                         <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-4 animate-pulse">
                            <Phone size={32} />
                         </div>
                         <h3 className="font-black text-gray-900 mb-1">Emergency SOS</h3>
                         <p className="text-xs text-gray-500 font-bold">Direct line to ambulance</p>
                     </div>
                </div>

                {/* Call to Action for Video */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white flex flex-col md:flex-row justify-between items-center shadow-lg shadow-blue-500/20 gap-4">
                     <div>
                        <h2 className="text-2xl font-bold mb-2">Next Appointment in 10 mins</h2>
                        <p className="text-blue-100">Dr. Michael Chen • Cardiology Consultation</p>
                     </div>
                     <button onClick={() => setIsVideoActive(true)} className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-lg w-full md:w-auto">
                        Join Room
                     </button>
                </div>
                
                 {/* Top Specialists */}
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-black text-gray-900">Top Specialists</h2>
                        <button onClick={() => setActiveTab('doctors')} className="text-blue-600 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                            View All <ChevronRight size={16} />
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         {[1, 2, 3, 4].map(i => (
                             <div key={i} className="bg-white p-4 rounded-2xl border border-gray-100 flex items-center gap-4 hover:border-blue-200 transition-colors cursor-pointer group">
                                 <img src={`https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=150&h=150`} className="w-16 h-16 rounded-xl object-cover" alt="Doctor" />
                                 <div className="flex-1">
                                     <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Dr. Sarah Johnson</h3>
                                     <p className="text-xs font-bold text-blue-500 uppercase tracking-wide mb-1">Cardiology</p>
                                     <p className="text-xs text-gray-400">Central Heart Institute</p>
                                 </div>
                                 <div className="text-right">
                                     <span className="block font-black text-gray-900">$150</span>
                                 </div>
                             </div>
                         ))}
                    </div>
                </div>
            </div>
        );
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans selection:bg-blue-100">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-40 px-6 py-4 flex items-center justify-between">
         <div className="flex items-center gap-12">
            <div className="flex items-center gap-2">
                <div className="bg-blue-600 p-2 rounded-xl text-white"><Activity size={24} strokeWidth={3} /></div>
                <span className="text-2xl font-black text-gray-900 tracking-tight">MediCare<span className="text-blue-600">+</span></span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-bold text-gray-500">
                {['Dashboard', 'Find Doctors', 'Appointments', 'Lab Results'].map(tab => (
                    <button 
                        key={tab} 
                        onClick={() => setActiveTab(tab === 'Find Doctors' ? 'doctors' : tab === 'Lab Results' ? 'labs' : tab.toLowerCase())}
                        className={`hover:text-blue-600 transition-colors ${
                            (activeTab === 'dashboard' && tab === 'Dashboard') || 
                            (activeTab === 'doctors' && tab === 'Find Doctors') ||
                            (activeTab === 'appointments' && tab === 'Appointments') ||
                            (activeTab === 'labs' && tab === 'Lab Results')
                            ? 'text-blue-600' : ''}`}
                    >
                        {tab}
                    </button>
                ))}
            </div>
         </div>
         <div className="flex items-center gap-4">
             <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-gray-600">
                {mobileMenuOpen ? <X /> : <Menu />}
             </button>
             <a href="/projects" className="hidden lg:flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-gray-900 bg-gray-100 px-4 py-2 rounded-lg transition-colors">
                <ChevronRight className="rotate-180" size={16} /> Returns to Projects
             </a>
             <button className="p-3 hover:bg-gray-100 rounded-full transition-colors relative">
                <Bell size={20} className="text-gray-600" />
                <span className="absolute top-3 right-3 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
             </button>
             <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" className="w-10 h-10 rounded-full border-2 border-white shadow-md object-cover" alt="Profile" />
         </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 p-4 animate-in slide-in-from-top duration-200">
            <div className="flex flex-col gap-2">
                {['Dashboard', 'Find Doctors', 'Appointments', 'Lab Results'].map(tab => (
                    <button 
                        key={tab} 
                        onClick={() => {
                            setActiveTab(tab === 'Find Doctors' ? 'doctors' : tab === 'Lab Results' ? 'labs' : tab.toLowerCase());
                            setMobileMenuOpen(false);
                        }}
                        className={`text-left p-3 rounded-lg font-bold ${
                            (activeTab === 'dashboard' && tab === 'Dashboard') || 
                            (activeTab === 'doctors' && tab === 'Find Doctors') ||
                            (activeTab === 'appointments' && tab === 'Appointments') ||
                            (activeTab === 'labs' && tab === 'Lab Results')
                            ? 'bg-blue-50 text-blue-600' : 'text-gray-600'}`}
                    >
                        {tab}
                    </button>
                ))}
                <a href="/projects" className="mt-2 p-3 text-sm font-bold text-gray-500 flex items-center gap-2 border-t border-gray-100 pt-4">
                    <ChevronRight className="rotate-180" size={16} /> Back to Projects
                </a>
            </div>
        </div>
      )}

      {/* Main Layout */}
      <main className="max-w-[1600px] mx-auto">
        {renderContent()}
      </main>

      {/* Video Call Overlay */}
      {isVideoActive && (
          <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6 animate-in zoom-in-95 duration-300">
             <div className="w-full max-w-5xl aspect-video bg-gray-900 rounded-3xl overflow-hidden relative shadow-2xl border border-gray-800">
                {/* Remote Video (Mock) */}
                <img 
                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80" 
                    className={`w-full h-full object-cover transition-opacity duration-300 ${isPlaying ? 'opacity-100' : 'opacity-50 blur-sm'}`}
                    alt="Doctor" 
                />
                
                {/* Play/Pause Overlay if paused */}
                {!isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button onClick={toggleVideo} className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-full text-white hover:bg-white/20 transition-all hover:scale-110">
                            <Play size={48} fill="currentColor" />
                        </button>
                    </div>
                )}

                {/* Controls */}
                <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-black/80 to-transparent flex justify-between items-end">
                    <div className="text-white">
                        <h3 className="text-xl font-bold">Dr. Sarah Johnson</h3>
                        <p className="text-green-400 font-medium flex items-center gap-2"><div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" /> Connected</p>
                    </div>
                    
                    <div className="flex gap-4">
                        <button onClick={() => setIsPlaying(!isPlaying)} className="p-4 bg-gray-700/50 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-gray-900 transition-colors">
                            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                        </button>
                        <button className="p-4 bg-gray-700/50 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-gray-900 transition-colors">
                            <Mic size={24} />
                        </button>
                         <button className="p-4 bg-gray-700/50 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-gray-900 transition-colors">
                            <Video size={24} />
                        </button>
                        <button onClick={() => setIsVideoActive(false)} className="p-4 bg-red-500 rounded-full text-white hover:bg-red-600 transition-colors shadow-lg shadow-red-500/30">
                            <Phone size={24} className="rotate-[135deg]" />
                        </button>
                    </div>
                </div>
             </div>
          </div>
      )}
      <PrototypeBanner />
    </div>
  );
}
