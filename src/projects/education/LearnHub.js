import React, { useState } from 'react';
import { BookOpen, Trophy, Clock, Star, PlayCircle, Download, MessageSquare, Search, Flame, Award, ChevronRight } from 'lucide-react';
import { courses } from './data/courses';
import VideoPlayer from './components/VideoPlayer';
import PrototypeBanner from '../../components/common/PrototypeBanner';
import { Menu, X } from 'lucide-react';

export default function LearnHub() {
  const [activeTab, setActiveTab] = useState('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200 px-6 h-20 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-2 text-orange-600">
            <BookOpen size={32} />
            <span className="text-2xl font-black text-gray-900 tracking-tight">LearnHub</span>
        </div>
        <div className="flex-1 max-w-xl mx-12 hidden lg:block">
            <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input type="text" placeholder="What do you want to learn today?" className="w-full bg-gray-100 rounded-full pl-12 pr-6 py-3 font-medium focus:bg-white focus:ring-2 focus:ring-orange-200 outline-none transition-all" />
            </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="hidden md:flex flex-col items-end mr-2">
                <span className="text-xs font-bold text-gray-500 uppercase">Daily Streak</span>
                <span className="flex items-center gap-1 text-orange-600 font-black"><Flame size={16} fill="currentColor" /> 12 Days</span>
             </div>
             <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-400 to-red-500 p-0.5">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80" className="w-full h-full rounded-full object-cover border-2 border-white" alt="Profile" />
             </div>
             <button className="lg:hidden p-2 text-gray-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X /> : <Menu />}
             </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 p-6 space-y-4 animate-in slide-in-from-top duration-200">
             <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input type="text" placeholder="Search courses..." className="w-full bg-gray-100 rounded-full pl-12 pr-6 py-3 font-medium focus:bg-white focus:ring-2 focus:ring-orange-200 outline-none" />
            </div>
             <div className="flex flex-col gap-2 pt-2">
                <div className="flex items-center justify-between p-3 bg-orange-50 rounded-xl text-orange-700 font-bold">
                    <span>Daily Streak</span>
                    <span className="flex items-center gap-1"><Flame size={16} fill="currentColor" /> 12 Days</span>
                </div>
                 <a href="/projects" className="p-3 text-gray-600 font-bold flex items-center gap-2">
                    <ChevronRight className="rotate-180" size={16} /> Back to Projects
                 </a>
             </div>
        </div>
      )}

      <div className="max-w-[1600px] mx-auto p-4 md:p-6 lg:p-10 grid grid-cols-1 xl:grid-cols-3 gap-10">
        
        {/* Main Content Area */}
        <div className="xl:col-span-2 space-y-6 md:space-y-10">
            {/* Hero / Continue Watching */}
            <div>
                 <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 gap-4">
                    <h1 className="text-2xl md:text-3xl font-black text-gray-900">Continue Learning</h1>
                    <a href="/projects" className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-xl font-bold hover:bg-gray-800 transition-colors text-sm">
                        <ChevronRight className="rotate-180" size={16} /> Back to Projects
                    </a>
                </div>
                
                {/* Interactive Video Player */}
                <div className="relative aspect-video bg-gray-900 rounded-3xl overflow-hidden shadow-2xl group">
                    <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80" className="w-full h-full object-cover opacity-60" alt="Video" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button className="w-16 h-16 md:w-20 md:h-20 bg-orange-600 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-orange-500/40">
                            <PlayCircle size={32} className="md:w-10 md:h-10" fill="currentColor" />
                        </button>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                        <div className="w-full bg-gray-700 h-1 rounded-full mb-4 overflow-hidden">
                            <div className="bg-orange-500 w-1/3 h-full rounded-full relative">
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-md" />
                            </div>
                        </div>
                        <div className="flex justify-between items-center font-bold text-xs md:text-sm">
                            <span className="flex items-center gap-2"><PlayCircle size={16} /> 12:45 / 45:00</span>
                            <span className="uppercase tracking-widest opacity-70">1080p HD</span>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex flex-col md:flex-row justify-between items-start gap-4">
                    <div>
                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-2">Advanced State Management</h2>
                        <div className="flex items-center gap-4 text-sm font-bold text-gray-500">
                            <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs">Module 4</span>
                            <span className="flex items-center gap-1"><Clock size={16} /> 45 mins left</span>
                        </div>
                    </div>
                    <button className="w-full md:w-auto bg-gray-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                        Next Lesson <ChevronRight size={18} />
                    </button>
                </div>
            </div>

            {/* Content Tabs */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
                <div className="flex gap-8 border-b border-gray-100 pb-4 mb-6 overflow-x-auto hide-scrollbar">
                    {['overview', 'curriculum', 'reviews', 'resources'].map(tab => (
                        <button 
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`pb-4 -mb-4 font-bold capitalize transition-colors border-b-2 whitespace-nowrap ${activeTab === tab ? 'border-orange-500 text-orange-600' : 'border-transparent text-gray-400 hover:text-gray-600'}`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                
                <div className="space-y-6">
                    <h3 className="text-xl font-bold">About this course</h3>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                        Master the art of state management in React. We will dive deep into Context, Redux, and modern alternatives like Zustand. By the end of this module, you will be able to architect complex applications with ease.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-4 rounded-xl flex items-center gap-4">
                            <Award className="text-yellow-500 shrink-0" size={24} />
                            <div>
                                <p className="font-bold text-gray-900">Certificate</p>
                                <p className="text-xs text-gray-500">Earn up clicking complete</p>
                            </div>
                        </div>
                         <div className="bg-gray-50 p-4 rounded-xl flex items-center gap-4">
                            <Download className="text-blue-500 shrink-0" size={24} />
                            <div>
                                <p className="font-bold text-gray-900">Resources</p>
                                <p className="text-xs text-gray-500">12 Files available</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
            {/* My Courses */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-black text-gray-900">My Progress</h3>
                    <button className="text-orange-600 font-bold text-sm">View All</button>
                </div>
                <div className="space-y-6">
                    {courses.map(course => (
                        <div key={course.id} className="group cursor-pointer">
                            <div className="flex gap-4 mb-3">
                                <img src={course.image} className="w-16 h-16 rounded-xl object-cover" alt="Thumb" />
                                <div className="flex-1">
                                    <h4 className="font-bold text-gray-900 text-sm mb-1 group-hover:text-orange-600 transition-colors">{course.title}</h4>
                                    <p className="text-xs text-gray-500">{course.instructor}</p>
                                </div>
                            </div>
                            {course.progress > 0 && (
                                <div className="relative pt-1">
                                     <div className="flex mb-2 items-center justify-between">
                                        <div className="text-right">
                                            <span className="text-xs font-semibold inline-block text-orange-600">
                                                {course.progress}%
                                            </span>
                                        </div>
                                    </div>
                                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-orange-100">
                                        <div style={{ width: `${course.progress}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-500 transition-all duration-1000"></div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Achievement Badge */}
            <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-8 text-white text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                <Trophy size={48} className="mx-auto mb-4 text-yellow-300" />
                <h3 className="text-2xl font-black mb-2">Weekly Goal met!</h3>
                <p className="text-indigo-200 text-sm mb-6">You've completed 5 lessons this week. Keep it up to earn the "Fast Learner" badge.</p>
                <div className="bg-white/20 rounded-full h-3 w-full overflow-hidden mb-2">
                     <div className="bg-yellow-400 w-[85%] h-full rounded-full" />
                </div>
                <p className="text-xs font-bold tracking-widest uppercase opacity-70">85% to next level</p>
            </div>
            
             {/* Quiz Card */}
             <div className="bg-orange-50 rounded-3xl p-8 border border-orange-100">
                <h3 className="font-black text-gray-900 mb-2">Quick Quiz</h3>
                <p className="text-sm text-gray-600 mb-4">Test your React knowledge with 5 quick questions.</p>
                <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-xl transition-colors shadow-lg shadow-orange-500/30">
                    Start Quiz
                </button>
             </div>
        </div>

      </div>
      <PrototypeBanner />
    </div>
  );
}
