import React, { useState } from 'react';
import { X, User, Mail, Shield } from 'lucide-react';
import { useTaskContext } from './context/TaskContext';

export default function TeamModal({ isOpen, onClose }) {
  const { addTeamMember } = useTaskContext();
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    email: '',
    avatar: '',
    color: 'from-blue-500 to-cyan-500'
  });

  const getInitials = (name) => {
      return name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTeamMember({
        ...formData,
        avatar: getInitials(formData.name)
    });
    setFormData({ name: '', role: '', email: '', avatar: '', color: 'from-blue-500 to-cyan-500' });
    onClose();
  };

  const colors = [
    'from-blue-500 to-cyan-500', 
    'from-purple-500 to-pink-500', 
    'from-green-500 to-emerald-500', 
    'from-yellow-500 to-orange-500', 
    'from-red-500 to-pink-500'
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="bg-white rounded-2xl w-full max-w-md relative z-10 shadow-2xl animate-in zoom-in-95 duration-200 p-8">
        <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-black text-gray-900">Invite Member</h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X size={20} />
            </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
            <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 flex items-center gap-2">
                    <User size={14} /> Full Name
                </label>
                <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all font-semibold"
                    placeholder="John Doe"
                />
            </div>

            <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 flex items-center gap-2">
                    <Shield size={14} /> Role
                </label>
                <input 
                    type="text" 
                    required
                    value={formData.role}
                    onChange={(e) => setFormData({...formData, role: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all font-semibold"
                    placeholder="e.g. Frontend Developer"
                />
            </div>
            
            <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 flex items-center gap-2">
                    <Mail size={14} /> Email Address
                </label>
                <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all font-semibold"
                    placeholder="john@example.com"
                />
            </div>

             <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">Avatar Color</label>
                <div className="flex gap-2 justify-center">
                    {colors.map(c => (
                        <button
                            key={c}
                            type="button"
                            onClick={() => setFormData({...formData, color: c})}
                            className={`w-10 h-10 rounded-full bg-gradient-to-br ${c} transition-all ${formData.color === c ? 'ring-2 ring-offset-2 ring-gray-900 scale-110' : 'hover:scale-110 opacity-70 hover:opacity-100'}`}
                        />
                    ))}
                </div>
            </div>

            <div className="pt-4">
                <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-[1.02] transition-all uppercase tracking-widest text-xs">
                    Send Invite
                </button>
            </div>
        </form>
      </div>
    </div>
  );
}
