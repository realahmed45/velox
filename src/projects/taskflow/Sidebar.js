import React from 'react';
import { Home, BarChart3, CheckSquare, Clock, Users, TrendingUp, Zap } from 'lucide-react';
import { useTaskContext } from './context/TaskContext';

export default function Sidebar() {
  const { currentView, setCurrentView } = useTaskContext();

  const navItems = [
    { name: "Dashboard", icon: BarChart3 },
    { name: "Projects", icon: CheckSquare },
    { name: "Tasks", icon: Clock },
    { name: "Team", icon: Users },
    { name: "Analytics", icon: TrendingUp },
    { name: "Settings", icon: Zap }
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-72 bg-white/80 backdrop-blur-xl border-r border-gray-200/50 p-6 shadow-2xl z-20">
      <a href="/projects" className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-3 rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all mb-10 group font-bold text-sm">
        <Home size={18} className="group-hover:-translate-x-1 transition-transform" />
        <span className="tracking-wide">Back to Projects</span>
      </a>
      
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                <CheckSquare size={24} strokeWidth={3} />
            </div>
            <h1 className="text-2xl font-black text-gray-900 tracking-tight">
                TaskFlow
            </h1>
        </div>
        <p className="text-xs text-gray-500 font-bold uppercase tracking-widest pl-13 ml-1">Pro Edition</p>
      </div>

      <nav className="space-y-2">
        {navItems.map(({name, icon: Icon}) => {
          const isActive = currentView === name;
          return (
            <button
              key={name}
              onClick={() => setCurrentView(name)}
              className={`w-full text-left px-4 py-3.5 rounded-xl transition-all font-bold text-sm flex items-center gap-3 group relative overflow-hidden ${
                isActive 
                  ? "text-white shadow-xl shadow-blue-500/20" 
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600" />
              )}
              <Icon size={20} className="relative z-10" />
              <span className="relative z-10">{name}</span>
            </button>
          );
        })}
      </nav>

      <div className="absolute bottom-8 left-6 right-6">
        <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
            <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                <div>
                    <p className="text-sm font-bold text-gray-900">Premium User</p>
                    <p className="text-xs text-gray-400">Pro Plan</p>
                </div>
            </div>
            <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                <div className="bg-blue-500 w-3/4 h-full rounded-full"></div>
            </div>
            <p className="text-[10px] text-gray-400 mt-2 font-medium">75% storage used</p>
        </div>
      </div>
    </div>
  );
}
