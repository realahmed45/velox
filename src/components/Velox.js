import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Bot, 
  Cpu, 
  Globe, 
  Menu, 
  X, 
  Code,
  Activity,
  Workflow,
  Shield
} from "lucide-react";

export default function VeloxResponsive() {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className="bg-white min-h-screen font-inter selection:bg-[#FF6B00]/30 selection:text-white">
      <style>{`
        @keyframes slowZoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
        .animate-slowZoom { animation: slowZoom 20s linear infinite alternate; }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp { animation: fadeInUp 1s cubic-bezier(0.23, 1, 0.32, 1) both; }

        .text-glow {
          text-shadow: 0 0 30px rgba(255, 107, 0, 0.3);
        }
        
        .orange-border-glow {
          box-shadow: 0 0 20px rgba(255, 107, 0, 0.1);
          border-color: rgba(255, 107, 0, 0.2);
        }

        .orange-border-glow:hover {
          box-shadow: 0 0 40px rgba(255, 107, 0, 0.3);
          border-color: rgba(255, 107, 0, 0.6);
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrollY > 50 ? 'backdrop-blur-xl bg-white/80 py-4 border-b border-black/5' : 'bg-transparent py-8'}`}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link to="/" className="text-3xl font-black tracking-tighter uppercase italic flex items-center gap-2">
             <span className={scrollY > 50 ? "text-black" : "text-black"}>VELOX</span><span className="text-[#FF6B00]">.</span>
          </Link>
          
          <div className="hidden lg:flex items-center gap-10">
            <Link to="/ai-solutions" className="text-[14px] font-black uppercase tracking-[0.2em] text-gray-600 hover:text-[#FF6B00] transition-colors">AI Solutions</Link>
            <Link to="/what-is-automation" className="text-[14px] font-black uppercase tracking-[0.2em] text-gray-600 hover:text-[#FF6B00] transition-colors">Automation Lab</Link>
            <Link to="/projects" className="text-[14px] font-black uppercase tracking-[0.2em] text-gray-600 hover:text-[#FF6B00] transition-colors">Web Artifacts</Link>
            <Link to="/pricing" className="text-[14px] font-black uppercase tracking-[0.2em] text-gray-600 hover:text-[#FF6B00] transition-colors">Pricing</Link>
            <Link to="/contact" className="px-10 py-5 bg-[#FF6B00] text-white font-black text-[14px] uppercase tracking-widest hover:bg-black transition-all rounded-sm shadow-lg shadow-[#FF6B00]/20">Reach Out</Link>
          </div>

          <button className="md:hidden text-black" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-[90] bg-black transition-all duration-700 flex flex-col items-center justify-center gap-10 ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
          <Link to="/ai-solutions" className="text-4xl font-black text-white hover:text-[#FF6B00]" onClick={() => setMobileMenuOpen(false)}>AI Solutions</Link>
          <Link to="/what-is-automation" className="text-4xl font-black text-white hover:text-[#FF6B00]" onClick={() => setMobileMenuOpen(false)}>Automation Lab</Link>
          <Link to="/projects" className="text-4xl font-black text-white hover:text-[#FF6B00]" onClick={() => setMobileMenuOpen(false)}>Web Artifacts</Link>
          <Link to="/pricing" className="text-4xl font-black text-white hover:text-[#FF6B00]" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
          <Link to="/contact" className="px-16 py-6 bg-[#FF6B00] text-white font-black text-xl uppercase tracking-widest rounded-sm mt-10" onClick={() => setMobileMenuOpen(false)}>Reach Out</Link>
          <button className="mt-20" onClick={() => setMobileMenuOpen(false)}>
            <X size={40} className="text-gray-500 hover:text-white" />
          </button>
      </div>

      {/* Refined Unified Hero Banner */}
      <section className="relative min-h-[85vh] w-full flex flex-col items-center justify-center overflow-hidden bg-white pt-40 pb-20">
        {/* Background Visuals - Subtle & Clean */}
        <div className="absolute inset-x-0 top-0 h-full z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] grayscale" />
        </div>
        
        <div className="relative z-20 max-w-[1400px] mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 px-8 py-3 border-2 border-black/10 bg-black/5 rounded-full mb-16 animate-fadeInUp">
            <div className="w-3 h-3 bg-[#FF6B00] rounded-full animate-pulse shadow-[0_0_15px_rgba(255,107,0,1)]" />
            <span className="text-[12px] font-black uppercase tracking-[0.6em] text-black">System Protocol 4.0 Active</span>
          </div>
          
          <div className="mb-24 relative">
            <h1 className="text-[45px] md:text-[80px] lg:text-[160px] font-black text-black leading-[0.9] tracking-tighter uppercase italic animate-fadeInUp mb-12">
              UNIFIED<br/>
              <span className="text-[#FF6B00] not-italic shadow-[#FF6B00]/20">SOLUTIONS</span>
            </h1>
            <div className="flex items-center justify-center gap-8 mt-12 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              <div className="h-0.5 w-40 bg-black/10" />
              <span className="text-2xl md:text-4xl font-black italic uppercase tracking-[1.2em] ml-6 text-black">UNIT</span>
              <div className="h-0.5 w-40 bg-black/10" />
            </div>
          </div>
          
          {/* Hero Visual Section - Robust Layout */}
          <div className="relative max-w-6xl mx-auto mb-32 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div className="absolute -inset-10 bg-gradient-to-r from-[#FF6B00]/5 via-transparent to-[#FF6B00]/5 blur-[120px]" />
            <div className="relative rounded-sm overflow-hidden border-4 border-black shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] bg-black">
              <img 
                src="/assets/hero.png" 
                alt="Autonomous AI Infrastructure" 
                className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-700"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
            </div>
            
            {/* Desktop Metrics Overlay */}
            <div className="absolute -bottom-10 -right-10 hidden xl:block z-30">
               <div className="bg-white p-8 border-2 border-black shadow-2xl flex flex-col gap-6">
                  <div className="flex items-center gap-6">
                     <Activity size={24} className="text-[#FF6B00]" />
                     <div className="h-2 w-32 bg-black/10 rounded-full overflow-hidden">
                        <div className="h-full w-4/5 bg-black" />
                     </div>
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-black">Neural Processing: 98.4%</div>
               </div>
            </div>
          </div>

          <p className="text-2xl md:text-3xl text-black font-bold max-w-5xl mx-auto mb-24 leading-[1.2] animate-fadeInUp tracking-tight" style={{ animationDelay: '0.3s' }}>
            A precision engineering studio architecting <span className="text-[#FF6B00] underline decoration-4 underline-offset-8">Autonomous Neural Systems</span> and <span className="text-[#FF6B00] underline decoration-4 underline-offset-8">High-Velocity Web Ecosystems</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-6 md:gap-10 animate-fadeInUp px-4 md:px-0" style={{ animationDelay: '0.4s' }}>
            <Link to="/contact" className="px-10 md:px-20 py-6 md:py-8 bg-black text-white font-black uppercase tracking-[0.3em] hover:bg-[#FF6B00] transition-all duration-500 rounded-sm flex items-center justify-center gap-6 group text-lg shadow-2xl shadow-black/20">
              Reach Out <Cpu size={24} className="group-hover:rotate-180 transition-transform duration-700" />
            </Link>
            <Link to="/projects" className="px-10 md:px-20 py-6 md:py-8 border-4 border-black text-black font-black uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all duration-500 rounded-sm flex items-center justify-center gap-6 group text-lg">
              Our Work <Code size={24} />
            </Link>
          </div>
        </div>

        {/* Technical Decor */}
        <div className="absolute bottom-10 left-12 hidden lg:flex flex-col gap-2 opacity-20">
          <div className="text-[10px] font-black uppercase tracking-widest text-black">Lat: 25.2048° N</div>
          <div className="text-[10px] font-black uppercase tracking-widest text-black">Lon: 55.2708° E</div>
        </div>
      </section>

      {/* Solutions Core - High Impact Teaser */}
      <section className="bg-[#0a0a0a] py-32 px-6 md:px-12 relative border-y border-white/5 text-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="text-[#FF6B00] font-black uppercase tracking-[0.4em] text-[10px] mb-6">Unified Capabilities</div>
              <h2 className="text-5xl md:text-8xl font-black text-white italic tracking-tighter uppercase leading-[0.9] mb-10">ONE UNIT.<br/>TWO <span className="text-[#FF6B00] not-italic">POWERS.</span></h2>
              <p className="text-gray-400 text-xl font-medium leading-relaxed max-w-xl mb-12">
                We don't just build websites, and we don't just code AI. We engineer cohesive systems where high-end design meets autonomous logic to create unbeatable competitive advantages.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-black text-white mb-2 italic tracking-tighter italic">AI OPS</div>
                  <div className="text-xs font-bold text-gray-600 uppercase tracking-widest leading-relaxed">Agentic workflows & neural support infra.</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-white mb-2 italic tracking-tighter italic">WEB OPS</div>
                  <div className="text-xs font-bold text-gray-600 uppercase tracking-widest leading-relaxed">Ultra-premium interfaces & SaaS architectures.</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-[#FF6B00]/10 blur-[100px] rounded-full" />
              <div className="relative grid grid-cols-2 gap-4">
                 {[
                   { icon: <Bot size={24} />, title: "Agentic AI", desc: "Autonomous n8n & Python agents." },
                   { icon: <Globe size={24} />, title: "Global Web", desc: "Scalable enterprise ecosystems." },
                   { icon: <Workflow size={24} />, title: "Deep Sync", desc: "Seamless CRM & API integration." },
                   { icon: <Shield size={24} />, title: "Elite Security", desc: "Bank-grade infrastructure." }
                 ].map((box, i) => (
                   <div key={i} className="glass-card p-10 orange-border-glow group transition-all duration-500">
                      <div className="text-[#FF6B00] mb-6 group-hover:scale-110 transition-transform duration-500">{box.icon}</div>
                      <h4 className="text-white font-black uppercase tracking-tight mb-2 italic italic">{box.title}</h4>
                      <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{box.desc}</p>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-20 bg-black border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 overflow-hidden">
          <div className="flex justify-between items-center opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-1000">
             {["Figma", "Webflow", "React", "OpenAI", "Python", "Node.js"].map((tech, i) => (
               <span key={i} className="text-xl md:text-3xl font-black italic tracking-tighter uppercase px-10 text-white">{tech}</span>
             ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-48 bg-[#050505] relative overflow-hidden text-center">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF6B00]/5 rounded-full blur-[150px]" />
         <div className="relative z-10 max-w-4xl mx-auto px-6">
            <h2 className="text-6xl md:text-[180px] font-black text-white italic tracking-tighter leading-none mb-12 uppercase">
              DOMINATE<br/><span className="text-[#FF6B00] not-italic">NOW.</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 font-medium mb-16 uppercase tracking-[0.2em]">Ready to integrate the future?</p>
            <Link to="/contact" className="btn-orange text-xl px-20">Reach Out</Link>
         </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-20 px-6 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <Link to="/" className="text-3xl font-black text-white tracking-tighter uppercase italic italic">VELOX<span className="text-[#FF6B00]">.</span></Link>
          <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
             <Link to="/ai-solutions" className="hover:text-[#FF6B00]">AI Solutions</Link>
             <Link to="/projects" className="hover:text-[#FF6B00]">Web Portfolio</Link>
             <span className="text-[#FF6B00]/60">velox.operations09@gmail.com</span>
          </div>
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-600">© 2026 VELOX UNIFIED SOLUTIONS UNIT. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  );
}
