import React from 'react';
import { Bell, Lock, User, Palette, ToggleRight, ToggleLeft } from 'lucide-react';
import { useTaskContext } from './context/TaskContext';

export default function SettingsView() {
  const { settings, updateSettings } = useTaskContext();

  // Guard against undefined settings (e.g. first render before load)
  if (!settings || !settings.notifications) return null;

  const toggleNotification = (key) => {
    updateSettings('notifications', key, !settings.notifications[key]);
  };

  return (
    <div className="max-w-3xl">
      <h2 className="text-4xl font-black text-gray-900 tracking-tight mb-10">Settings</h2>
      
      <div className="space-y-6">
        {/* Profile Section */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                    <User size={24} />
                </div>
                <div>
                    <h3 className="font-bold text-lg text-gray-900">Profile Settings</h3>
                    <p className="text-gray-500 text-sm">Manage your personal information</p>
                </div>
            </div>
            <div className="space-y-4">
                <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Display Name</label>
                    <input 
                        type="text" 
                        value={settings.profile?.name || ''} 
                        onChange={(e) => updateSettings('profile', 'name', e.target.value)}
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:border-blue-500 outline-none font-medium"
                    />
                </div>
                <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
                    <input 
                        type="email" 
                        value={settings.profile?.email || ''} 
                        onChange={(e) => updateSettings('profile', 'email', e.target.value)}
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:border-blue-500 outline-none font-medium"
                    />
                </div>
            </div>
        </div>

        {/* Notifications Section */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
             <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600">
                    <Bell size={24} />
                </div>
                <div>
                    <h3 className="font-bold text-lg text-gray-900">Notifications</h3>
                    <p className="text-gray-500 text-sm">Configure how you receive alerts</p>
                </div>
            </div>
            <div className="space-y-4">
                <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer" onClick={() => toggleNotification('email')}>
                    <span className="font-medium text-gray-700">Email Notifications</span>
                    {settings.notifications.email ? <ToggleRight size={32} className="text-blue-600" /> : <ToggleLeft size={32} className="text-gray-300" />}
                </div>
                <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer" onClick={() => toggleNotification('push')}>
                    <span className="font-medium text-gray-700">Push Notifications</span>
                    {settings.notifications.push ? <ToggleRight size={32} className="text-blue-600" /> : <ToggleLeft size={32} className="text-gray-300" />}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
