import React from 'react';
import { BarChart3, Users, CheckSquare, TrendingUp, Clock } from 'lucide-react';
import { useTaskContext } from './context/TaskContext';

export default function DashboardStats() {
  const { tasks, users, activityLog } = useTaskContext();

  const totalTasks = tasks.length;
  const activeTasks = tasks.filter(t => t.status !== 'done').length;
  const completedTasks = tasks.filter(t => t.status === 'done').length;
  const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
  
  const stats = [
    { label: "Total Projects", value: "24", change: "+12%", color: "from-blue-500 to-cyan-500", icon: BarChart3 },
    { label: "Active Tasks", value: activeTasks.toString(), change: `${totalTasks} total`, color: "from-green-500 to-emerald-500", icon: CheckSquare },
    { label: "Team Members", value: users.length.toString(), change: "+2 new", color: "from-purple-500 to-pink-500", icon: Users },
    { label: "Completion", value: `${completionRate}%`, change: "+5%", color: "from-yellow-500 to-orange-500", icon: TrendingUp },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, i) => {
        const Icon = stat.icon;
        return (
          <div key={i} className="bg-white p-4 md:p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center justify-between mb-3 md:mb-4">
              <div className={`p-2.5 md:p-3 rounded-xl bg-gradient-to-br ${stat.color} shadow-lg`}>
                <Icon size={20} className="text-white md:size-[24px]" />
              </div>
              <span className={`text-[9px] md:text-[10px] font-black px-2 py-1 rounded-md uppercase tracking-wider bg-gray-50 text-gray-500`}>
                {stat.change}
              </span>
            </div>
            <p className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1">{stat.label}</p>
            <p className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">{stat.value}</p>
          </div>
        );
      })}
    </div>
  );
}
