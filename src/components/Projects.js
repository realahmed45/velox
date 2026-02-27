import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Zap, Code, Bot, LineChart, MessageSquare, Menu, X, ArrowRight } from "lucide-react";
import { categories, projectsData } from "../data/projectsData";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const whatsappLink = "https://wa.me/923329945014";

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorX(e.clientX);
      setCursorY(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const filteredProjects = activeCategory === "all" || activeCategory === "All"
    ? projectsData 
    : projectsData.filter(p => p.category === activeCategory || (p.categories && p.categories.includes(activeCategory)));

  return (
    <div className="bg-white min-h-screen text-black font-inter selection:bg-[#FF6B00]/30 selection:text-white">
      <style>{`
        .custom-cursor {
          position: fixed;
          width: 8px;
          height: 8px;
          background: white;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transition: transform 0.15s ease-out;
        }
        .project-card {
          border: 1px solid rgba(255, 255, 255, 0.05);
          background: rgba(255, 255, 255, 0.01);
          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .project-card:hover {
          background: rgba(255, 107, 0, 0.03);
          border-color: rgba(255, 107, 0, 0.4);
          transform: translateY(-10px);
          box-shadow: 0 40px 80px rgba(255, 107, 0, 0.1);
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-up { animation: fadeInUp 0.8s ease-out forwards; }
      `}</style>

      <div className="custom-cursor hidden md:block" style={{ left: `${cursorX}px`, top: `${cursorY}px` }} />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/80 border-b border-black/5">
        <div className="w-full px-6 md:px-12 py-6 flex justify-between items-center text-black">
          <Link to="/" className="text-3xl font-black tracking-tighter uppercase italic">
             VELOX<span className="text-[#FF6B00]">.</span>
          </Link>
          <div className="hidden lg:flex items-center gap-10">
            <Link to="/ai-solutions" className="text-[14px] font-black uppercase tracking-[0.2em] text-gray-600 hover:text-[#FF6B00] transition-colors">AI Solutions</Link>
            <Link to="/what-is-automation" className="text-[14px] font-black uppercase tracking-[0.2em] text-gray-600 hover:text-[#FF6B00] transition-colors">Automation Lab</Link>
            <Link to="/projects" className="text-[14px] font-black uppercase tracking-[0.2em] text-[#FF6B00]">Web Artifacts</Link>
            <Link to="/pricing" className="text-[14px] font-black uppercase tracking-[0.2em] text-gray-600 hover:text-[#FF6B00] transition-colors">Pricing</Link>
            <Link to="/contact" className="px-10 py-5 bg-[#FF6B00] text-white font-black text-[14px] uppercase tracking-widest hover:bg-black transition-all rounded-sm shadow-xl shadow-[#FF6B00]/20">Reach Out</Link>
          </div>
          <button className="lg:hidden text-black" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-[110] bg-black transition-all duration-700 flex flex-col items-center justify-center gap-10 ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
          <Link to="/ai-solutions" className="text-4xl font-black text-white hover:text-[#FF6B00]" onClick={() => setMobileMenuOpen(false)}>AI Solutions</Link>
          <Link to="/what-is-automation" className="text-4xl font-black text-white hover:text-[#FF6B00]" onClick={() => setMobileMenuOpen(false)}>Automation Lab</Link>
          <Link to="/projects" className="text-4xl font-black text-[#FF6B00]" onClick={() => setMobileMenuOpen(false)}>Web Artifacts</Link>
          <Link to="/pricing" className="text-4xl font-black text-white hover:text-[#FF6B00]" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
          <Link to="/contact" className="px-16 py-6 bg-[#FF6B00] text-white font-black text-xl uppercase tracking-widest rounded-sm mt-10" onClick={() => setMobileMenuOpen(false)}>Reach Out</Link>
          <button className="mt-20" onClick={() => setMobileMenuOpen(false)}>
            <X size={40} className="text-gray-500 hover:text-white" />
          </button>
      </div>

      {/* Hero */}
      <header className="relative pt-48 pb-20 px-6 md:px-12 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0 opacity-10 grayscale pointer-events-none">
           <img src="/web_engineering_bg_2_1772122510458.png" className="w-full h-full object-cover" alt="Web Engineering Artifacts" />
        </div>
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="text-[#FF6B00] font-black text-[10px] uppercase tracking-[0.6em] mb-8 animate-up">Web & AI Exploration Zone</div>
          <h1 className="text-5xl md:text-[140px] font-black tracking-tighter leading-[0.9] md:leading-[0.8] mb-12 italic uppercase animate-up text-black px-4 md:px-0">
            ENGINEERED<br/>ARTIFACTS
          </h1>
          
          <div className="flex flex-wrap gap-6 animate-up">
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setActiveCategory(cat)}
                className={`px-12 py-6 text-[12px] font-black uppercase tracking-[0.4em] transition-all rounded-sm border-[3px] ${
                  activeCategory === cat 
                  ? 'bg-black text-white border-black shadow-xl shadow-black/20' 
                  : 'bg-transparent text-black border-black/10 hover:border-black'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Grid */}
      <main className="px-6 md:px-12 pb-32 bg-[#0a0a0a] pt-32 -mt-10 relative z-20">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, i) => (
            <Link 
              to={project.componentPath || "#"} 
              key={i} 
              className="project-card overflow-hidden group animate-up cursor-pointer bg-[#111] border border-white/5 flex flex-col"
              style={{ animationDelay: `${0.1 * (i % 6)}s` }}
            >
              <div className="relative h-64 overflow-hidden bg-black">
                <img 
                  src={project.image || "/assets/web.png"} 
                  alt={project.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
                <div className="absolute top-6 left-6 p-3 bg-black/80 backdrop-blur-md border border-white/10 rounded-sm">
                  <Code size={18} className="text-[#FF6B00]" />
                </div>
              </div>

              <div className="p-10 flex flex-col flex-1">
                <div className="flex justify-between items-center mb-8">
                  <div className="text-[11px] font-black text-[#FF6B00] uppercase tracking-[0.4em]">
                     {project.year || '2026'} Artifact
                  </div>
                </div>

                <h3 className="text-4xl font-black uppercase tracking-tighter text-white mb-6 group-hover:text-[#FF6B00] transition-colors italic">
                   {project.name || project.title}
                </h3>
                <p className="text-gray-300 font-medium leading-relaxed mb-10 flex-1 text-lg">
                   {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-10">
                   {(project.techStack || []).slice(0, 3).map((tech, j) => (
                     <span key={j} className="text-[10px] font-black text-white/40 uppercase tracking-widest bg-white/5 px-4 py-2 border border-white/5">
                        {tech}
                     </span>
                   ))}
                </div>

                <div className="inline-flex items-center gap-4 text-[13px] font-black uppercase tracking-[0.3em] text-[#FF6B00] pt-6 border-t border-white/5 group-hover:gap-6 transition-all">
                  Launch Artifact <ArrowRight size={18} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer CTA */}
      <footer className="bg-white text-black py-64 px-6 text-center border-t border-black/5">
         <div className="max-w-4xl mx-auto">
            <h2 className="text-7xl md:text-[140px] font-black italic mb-12 uppercase tracking-tighter leading-none">CAPTURE<br/>THE MARKET.</h2>
            <Link 
              to="/contact"
              className="px-24 py-10 bg-[#FF6B00] text-white font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-700 rounded-sm inline-block text-2xl shadow-2xl shadow-[#FF6B00]/20"
            >
              Secure Strategic Slot
            </Link>
         </div>
      </footer>
    </div>
  );
}
