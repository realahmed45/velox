import React, { useState } from 'react';
import { ArrowRight, MoreHorizontal } from 'lucide-react';
import { useTaskContext } from './context/TaskContext';
import ProjectModal from './ProjectModal';

export default function ProjectsView() {
  const { projects } = useTaskContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-4xl font-black text-gray-900 tracking-tight">Active Projects</h2>
        <button 
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3 bg-gray-900 text-white rounded-xl font-bold text-sm hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5"
        >
            New Project
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(project => (
          <div key={project.id} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-2xl transition-all group cursor-pointer hover:-translate-y-1">
            <div className="flex justify-between items-start mb-6">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-white font-black text-lg shadow-md`}>
                {project.title.charAt(0)}
              </div>
              <button className="p-2 text-gray-400 hover:bg-gray-50 rounded-lg">
                <MoreHorizontal size={20} />
              </button>
            </div>
            
            <h3 className="text-xl font-black text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-1" title={project.title}>{project.title}</h3>
            <p className="text-gray-500 font-medium mb-6">{project.department}</p>
            
            <div className="mb-6">
              <div className="flex justify-between text-xs font-bold mb-2">
                <span className="text-gray-500">Progress</span>
                <span className="text-gray-900">{project.progress}%</span>
              </div>
              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full bg-gradient-to-r ${project.color}`}
                  style={{ width: `${project.progress}%` }}
                />
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex -space-x-2">
                {[...Array(Math.min(project.members, 5))].map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-400">
                     {i === 4 && project.members > 5 ? `+${project.members - 4}` : ''}
                  </div>
                ))}
              </div>
              <button className="text-gray-400 group-hover:text-blue-600 transition-colors">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
