import React, { useState } from "react";
import { TaskProvider, useTaskContext } from "./taskflow/context/TaskContext";
import Sidebar from "./taskflow/Sidebar";
import DashboardStats from "./taskflow/DashboardStats";
import TaskBoard from "./taskflow/TaskBoard";
import ProjectsView from "./taskflow/ProjectsView";
import TeamView from "./taskflow/TeamView";
import AnalyticsView from "./taskflow/AnalyticsView";
import SettingsView from "./taskflow/SettingsView";
import { Menu, X, Clock } from "lucide-react";
import PrototypeBanner from "../components/common/PrototypeBanner";

function TaskFlowContent() {
  const { activityLog, currentView } = useTaskContext();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const getDate = () => new Date().toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  const renderContent = () => {
    switch(currentView) {
      case 'Projects': return <ProjectsView />;
      case 'Team': return <TeamView />;
      case 'Analytics': return <AnalyticsView />;
      case 'Settings': return <SettingsView />;
      case 'Tasks': return (
        <div className="h-[calc(100vh-100px)]">
           <TaskBoard />
        </div>
      );
      case 'Dashboard':
      default:
        return (
          <>
            {/* Header */}
            <div className="mb-6 sm:mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 px-2 sm:px-0">
              <div>
                <h2 className="text-2xl sm:text-4xl font-black mb-1 sm:mb-2 text-gray-900 tracking-tight uppercase">Dashboard</h2>
                <p className="text-xs sm:text-gray-500 font-medium">Welcome back! Manage your projects efficiently.</p>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 bg-white p-1.5 sm:p-2 rounded-xl border border-gray-200 shadow-sm">
                 <div className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-50 rounded-lg text-[10px] sm:text-sm font-bold text-gray-600">
                    {getDate()}
                 </div>
              </div>
            </div>

            <DashboardStats />

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              <div className="xl:col-span-2 space-y-8">
                <TaskBoard />
              </div>

              <div className="space-y-8">
                {/* Recent Activity */}
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg top-6 sticky">
                  <h3 className="text-xl font-black mb-6 text-gray-900 tracking-tight">Activity Feed</h3>
                  <div className="space-y-6 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-100">
                    {activityLog.map((activity, index) => (
                      <div key={activity.id} className="flex gap-4 relative animate-in slide-in-from-right-4 duration-500" style={{animationDelay: `${index * 100}ms`}}>
                        <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${activity.color} flex items-center justify-center font-black text-white text-[10px] relative z-10 ring-4 ring-white shadow-sm`}>
                          {activity.avatar}
                        </div>
                        <div className="flex-1 pt-1">
                          <p className="text-sm leading-relaxed text-gray-600">
                            <span className="font-bold text-gray-900">{activity.user}</span> {activity.action}{" "}
                            <span className="font-semibold text-blue-600">"{activity.task}"</span>
                          </p>
                          <p className="text-[10px] text-gray-400 mt-1 font-bold uppercase tracking-wider flex items-center gap-1">
                            <Clock size={10} />
                            {activity.time}
                          </p>
                        </div>
                      </div>
                    ))}
                    {activityLog.length === 0 && (
                         <p className="text-center text-gray-400 text-sm py-4">No recent activity</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="bg-gray-50/50 min-h-screen font-sans selection:bg-blue-200">
      {/* Mobile Header */}
      <div className="md:hidden bg-white p-3 sm:p-4 flex justify-between items-center border-b sticky top-0 z-30">
        <span className="font-black text-lg sm:text-xl text-gray-900 uppercase italic">TaskFlow<span className="text-blue-600">.</span></span>
        <button 
          className="p-2 hover:bg-gray-50 rounded-full transition-colors" 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          aria-label="Toggle Menu"
        >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar - Mobile: Offcanvas, Desktop: Fixed */}
      <div className={`fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-gray-200 transform transition-transform duration-300 md:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <Sidebar onClose={() => setIsSidebarOpen(false)} />
      </div>

      <div className="md:ml-72 p-4 md:p-10 max-w-[1600px] pt-8 md:pt-10">
        {renderContent()}
      </div>
      <PrototypeBanner />
    </div>
  );
}

export default function SaasDashboard() {
  return (
    <TaskProvider>
      <TaskFlowContent />
    </TaskProvider>
  );
}
