import React, { useState } from 'react';
import { Mail, Phone, Plus } from 'lucide-react';
import { useTaskContext } from './context/TaskContext';
import TeamModal from './TeamModal';

export default function TeamView() {
  const { users } = useTaskContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-4xl font-black text-gray-900 tracking-tight">Team Members</h2>
        <button 
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-bold text-sm shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all flex items-center gap-2"
        >
            <Plus size={18} /> Add Member
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user, i) => (
          <div key={i} className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-all text-center group">
            <div className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-br ${user.color} flex items-center justify-center text-3xl font-black text-white mb-4 ring-4 ring-gray-50 group-hover:scale-105 transition-transform duration-300 shadow-lg`}>
              {user.avatar}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">{user.name}</h3>
            <p className="text-gray-500 text-sm font-medium mb-6 uppercase tracking-wider">{user.role}</p>
            
            <div className="flex justify-center gap-3">
              <button 
                className="p-3 rounded-xl bg-gray-50 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                title={user.email}
              >
                <Mail size={18} />
              </button>
              <button className="p-3 rounded-xl bg-gray-50 text-gray-600 hover:bg-green-50 hover:text-green-600 transition-colors">
                <Phone size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <TeamModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
