import React from 'react';
import { useTaskContext } from './context/TaskContext';
import TaskCard from './TaskCard';
import { Clock, Zap, CheckSquare, Plus } from 'lucide-react';

export default function TaskColumn({ status, title, onEditTask }) {
  const { tasks, moveTask, deleteTask } = useTaskContext();
  const columnTasks = tasks.filter(t => t.status === status);

  const handleDrop = (e) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData('taskId');
    if (taskId) {
        moveTask(taskId, status);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault(); 
  };

  const getIcon = () => {
      switch(status) {
          case 'todo': return <Clock size={16} className="text-blue-500" />;
          case 'in-progress': return <Zap size={16} className="text-yellow-500" />;
          case 'done': return <CheckSquare size={16} className="text-green-500" />;
          default: return null;
      }
  };

  return (
    <div 
        className="bg-gray-50/50 rounded-2xl p-5 border border-gray-200/60 backdrop-blur-sm flex flex-col h-full min-h-[500px]"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
    >
      <h4 className="font-black uppercase text-xs text-gray-500 mb-6 flex items-center justify-between tracking-widest">
        <span className="flex items-center gap-2">
          {getIcon()}
          {title}
        </span>
        <span className="bg-white px-2 py-0.5 rounded-full text-xs font-black border border-gray-200 shadow-sm text-gray-900">
          {columnTasks.length}
        </span>
      </h4>
      
      <div className="space-y-4 flex-1">
        {columnTasks.map(task => (
            <TaskCard 
                key={task.id} 
                task={task} 
                onEdit={onEditTask} 
                onDelete={deleteTask} 
            />
        ))}
        {columnTasks.length === 0 && (
            <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center text-gray-400 text-xs uppercase tracking-wider font-medium">
                No Tasks
            </div>
        )}
      </div>
    </div>
  );
}
