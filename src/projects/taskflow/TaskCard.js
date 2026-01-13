import React from 'react';
import { motion } from 'framer-motion';
import { MoreVertical, Clock, Edit2, Trash2 } from 'lucide-react';

export default function TaskCard({ task, onEdit, onDelete }) {
  const getPriorityColor = (p) => {
    switch(p) {
      case 'high': return 'bg-red-100 text-red-700';
      case 'medium': return 'bg-yellow-100 text-yellow-700';
      case 'low': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const handleDragStart = (e) => {
    e.dataTransfer.setData('taskId', task.id);
    e.dataTransfer.effectAllowed = 'move';
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -2, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
      className="bg-white p-4 rounded-xl border border-gray-200 hover:border-blue-400 cursor-move relative group shadow-sm"
      draggable="true"
      onDragStart={handleDragStart}
    >
      <div className="flex justify-between items-start mb-3">
        <h5 className="font-bold text-gray-900 leading-snug pr-6">{task.title}</h5>
        <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity absolute top-4 right-4 bg-white pl-2">
            <button onClick={() => onEdit(task)} className="p-1 hover:bg-gray-100 rounded text-gray-500 hover:text-blue-600">
                <Edit2 size={14} />
            </button>
            <button onClick={() => onDelete(task.id)} className="p-1 hover:bg-red-50 rounded text-gray-500 hover:text-red-500">
                <Trash2 size={14} />
            </button>
        </div>
      </div>
      
      <div className="flex items-center justify-between mt-4">
        <span className={`text-[10px] uppercase tracking-wider px-2 py-1 rounded-md font-bold ${getPriorityColor(task.priority)}`}>
          {task.priority}
        </span>
        <div className="flex items-center gap-2">
           {task.dueDate && (
               <div className="flex items-center text-xs text-gray-400 gap-1" title="Due Date">
                   <Clock size={12} />
                   <span>{new Date(task.dueDate).toLocaleDateString()}</span>
               </div>
           )}
          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white text-[10px] font-black border-2 border-white shadow-sm">
            {task.avatar || task.assignee?.charAt(0) || '?'}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
