import React, { useState } from 'react';
import { X, Briefcase, Layers, Palette } from 'lucide-react';
import { useTaskContext } from './context/TaskContext';

export default function ProjectModal({ isOpen, onClose }) {
  const { addProject } = useTaskContext();
  const [formData, setFormData] = useState({
    title: '',
    department: '',
    color: 'from-blue-500 to-cyan-500'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addProject(formData);
    setFormData({ title: '', department: '', color: 'from-blue-500 to-cyan-500' });
    onClose();
  };

  if (!isOpen) return null;

  const gradients = [
    { name: 'Blue/Cyan', value: 'from-blue-500 to-cyan-500' },
    { name: 'Purple/Pink', value: 'from-purple-500 to-pink-500' },
    { name: 'Green/Emerald', value: 'from-green-500 to-emerald-500' },
    { name: 'Yellow/Orange', value: 'from-yellow-500 to-orange-500' },
    { name: 'Red/Pink', value: 'from-red-500 to-pink-500' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="bg-white rounded-2xl w-full max-w-md relative z-10 shadow-2xl animate-in zoom-in-95 duration-200 p-8">
        <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-black text-gray-900">New Project</h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X size={20} />
            </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 flex items-center gap-2">
                    <Briefcase size={14} /> Project Title
                </label>
                <input 
                    type="text" 
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all font-semibold"
                    placeholder="e.g. Website Redesign"
                />
            </div>

            <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 flex items-center gap-2">
                    <Layers size={14} /> Department
                </label>
                <input 
                    type="text" 
                    required
                    value={formData.department}
                    onChange={(e) => setFormData({...formData, department: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all font-semibold"
                    placeholder="e.g. Marketing"
                />
            </div>

            <div>
                 <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-3 flex items-center gap-2">
                    <Palette size={14} /> Theme Color
                </label>
                <div className="grid grid-cols-5 gap-2">
                    {gradients.map(g => (
                        <button
                            key={g.value}
                            type="button"
                            onClick={() => setFormData({...formData, color: g.value})}
                            className={`h-10 rounded-lg bg-gradient-to-br ${g.value} transition-all ${formData.color === g.value ? 'ring-2 ring-offset-2 ring-gray-900 scale-110' : 'hover:scale-105 opacity-70 hover:opacity-100'}`}
                            title={g.name}
                        />
                    ))}
                </div>
            </div>

            <div className="pt-4">
                <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-[1.02] transition-all uppercase tracking-widest text-xs">
                    Create Project
                </button>
            </div>
        </form>
      </div>
    </div>
  );
}
