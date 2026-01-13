import React, { useState } from 'react';
import TaskColumn from './TaskColumn';
import TaskModal from './TaskModal';
import { Plus } from 'lucide-react';

export default function TaskBoard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const openNewTask = () => {
      setEditingTask(null);
      setIsModalOpen(true);
  };

  const openEditTask = (task) => {
      setEditingTask(task);
      setIsModalOpen(true);
  };

  return (
    <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-xl">
      <div className="flex justify-between items-center mb-10">
        <h3 className="text-3xl font-black text-gray-900 tracking-tight">Tasks Board</h3>
        <button 
            onClick={openNewTask}
            className="group relative px-6 py-3 rounded-xl font-bold flex items-center gap-2 text-white shadow-lg overflow-hidden transition-all hover:scale-105"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 transition-all group-hover:scale-110 duration-300" />
          <div className="relative flex items-center gap-2">
            <Plus size={20} /> 
            <span>New Task</span>
          </div>
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <TaskColumn title="To Do" status="todo" onEditTask={openEditTask} />
        <TaskColumn title="In Progress" status="in-progress" onEditTask={openEditTask} />
        <TaskColumn title="Done" status="done" onEditTask={openEditTask} />
      </div>

      <TaskModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        taskToEdit={editingTask} 
      />
    </div>
  );
}
