import React, { useState, useEffect } from 'react';
import { X, Calendar } from 'lucide-react';
import { useTaskContext } from './context/TaskContext';

export default function TaskModal({ isOpen, onClose, taskToEdit }) {
  const { addTask, updateTask, users } = useTaskContext();
  const [formData, setFormData] = useState({
    title: '',
    priority: 'medium',
    assignee: users?.[0]?.name || '',
    avatar: users?.[0]?.avatar || '',
    dueDate: ''
  });

  useEffect(() => {
    if (taskToEdit) {
      setFormData(taskToEdit);
    } else {
        setFormData(prev => ({
            title: '',
            priority: 'medium',
            assignee: users?.[0]?.name || '',
            avatar: users?.[0]?.avatar || '',
            dueDate: ''
        }));
    }
  }, [taskToEdit, users]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskToEdit) {
      updateTask(taskToEdit.id, formData);
    } else {
      addTask(formData);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="bg-white rounded-2xl w-full max-w-lg relative z-10 shadow-2xl animate-in zoom-in-95 duration-200 p-8">
        <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-black text-gray-900">{taskToEdit ? 'Edit Task' : 'New Task'}</h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X size={20} />
            </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Task Title</label>
                <input 
                    type="text" 
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all font-semibold"
                    placeholder="Enter task title..."
                />
            </div>

            <div className="grid grid-cols-2 gap-6">
                <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Priority</label>
                    <select
                        value={formData.priority}
                        onChange={(e) => setFormData({...formData, priority: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-500 outline-none font-medium"
                    >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>
                <div>
                   <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Assignee</label>
                   <select
                        value={formData.assignee}
                        onChange={(e) => {
                            const user = users.find(u => u.name === e.target.value);
                            setFormData({...formData, assignee: user.name, avatar: user.avatar});
                        }}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-blue-500 outline-none font-medium"
                    >
                        {users.map(user => (
                            <option key={user.name} value={user.name}>{user.name}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="pt-4">
                <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-[1.02] transition-all uppercase tracking-widest text-xs">
                    {taskToEdit ? 'Save Changes' : 'Create Task'}
                </button>
            </div>
        </form>
      </div>
    </div>
  );
}
