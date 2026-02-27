import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Menu, 
  X, 
  Zap, 
  Target, 
  Cpu, 
  Globe, 
  Code, 
  Bot, 
  Workflow, 
  Shield,
  Sparkles,
  Layers,
  ArrowRight,
  ChevronRight,
  Activity,
  Box
} from "lucide-react";

export default function AboutAutomation() {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const whatsappLink = "https://wa.me/923329945014";

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const levels = [
    {
      level: "Level 1",
      title: "Beginner: The Concept",
      desc: "Automation is the delegating of repetitive tasks to software. Think of it as a digital employee that never sleeps, never makes mistakes, and works at light speed.",
      concepts: ["Efficiency", "Time-Reclaim", "Error-Reduction"],
      icon: <Target className="text-[#FF6B00]" size={32} />
    },
    {
      level: "Level 2",
      title: "The Root: Basic Scripts",
      desc: "This is where we connect your tools. When a lead fills a form, they automatically get an email and are added to your spreadsheet. No manual data entry, ever.",
      concepts: ["Triggers", "Actions", "Integrations"],
      icon: <Zap className="text-[#FF6B00]" size={32} />
    },
    {
      level: "Level 3",
      title: "Professional: Intelligence",
      desc: "We integrate AI (LLMs) to read, understand, and categorize data. Your system can now draft personal replies, prioritize tasks, and analyze sentiment.",
      concepts: ["NLP", "Logic Gates", "Multi-Step Flows"],
      icon: <Workflow className="text-[#FF6B00]" size={32} />
    },
    {
      level: "Level 4",
      title: "Expert: Autonomous Agents",
      desc: "The pinnacle. Systems that don't just follow steps, but solve problems. They can research a competitor, draft a full report, and notify your team of the findings autonomously.",
      concepts: ["Neural Agents", "Self-Correction", "Scale"],
      icon: <Cpu className="text-[#FF6B00]" size={32} />
    }
  ];

  const glossary = [
    { term: "LLM", def: "Large Language Model. The 'brain' behind AI like ChatGPT." },
    { term: "RAG", def: "Retrieval-Augmented Generation. Connecting AI to *your* private business data securely." },
    { term: "API", def: "The bridge that allows two different pieces of software to talk to each other." },
    { term: "Agentic AI", def: "AI that can take actions and complete multi-step goals, not just answer questions." },
    { term: "Webhook", def: "A real-time signal sent between apps to trigger an automation instantly." }
  ];

  return (
    <div className="bg-white min-h-screen font-inter selection:bg-[#FF6B00]/30 selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrollY > 50 ? 'backdrop-blur-xl bg-white/80 py-4 border-b border-black/5' : 'bg-transparent py-8'}`}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center text-black">
          <Link to="/" className="text-3xl font-black tracking-tighter uppercase italic">
             VELOX<span className="text-[#FF6B00]">.</span>
          </Link>
          
          <div className="hidden lg:flex items-center gap-10">
            <Link to="/ai-solutions" className="text-[13px] font-black uppercase tracking-[0.2em] hover:text-[#FF6B00] transition-colors">AI Solutions</Link>
            <Link to="/what-is-automation" className="text-[13px] font-black uppercase tracking-[0.2em] text-[#FF6B00]">Automation Lab</Link>
            <Link to="/projects" className="text-[13px] font-black uppercase tracking-[0.2em] hover:text-[#FF6B00] transition-colors">Web Artifacts</Link>
            <Link to="/pricing" className="text-[13px] font-black uppercase tracking-[0.2em] hover:text-[#FF6B00] transition-colors">Pricing</Link>
            <Link to="/contact" className="px-8 py-4 bg-[#FF6B00] text-white font-black text-[12px] uppercase tracking-widest hover:bg-black transition-all rounded-sm">Reach Out</Link>
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[110] bg-black transition-all duration-700 flex flex-col items-center justify-center gap-10 ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
          <Link to="/ai-solutions" className="text-4xl font-black text-white hover:text-[#FF6B00]" onClick={() => setMobileMenuOpen(false)}>AI Solutions</Link>
          <Link to="/what-is-automation" className="text-4xl font-black text-[#FF6B00]" onClick={() => setMobileMenuOpen(false)}>Automation Lab</Link>
          <Link to="/projects" className="text-4xl font-black text-white hover:text-[#FF6B00]" onClick={() => setMobileMenuOpen(false)}>Web Artifacts</Link>
          <Link to="/pricing" className="text-4xl font-black text-white hover:text-[#FF6B00]" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
          <Link to="/contact" className="px-16 py-6 bg-[#FF6B00] text-white font-black text-xl uppercase tracking-widest rounded-sm mt-10" onClick={() => setMobileMenuOpen(false)}>Reach Out</Link>
          <button className="mt-20" onClick={() => setMobileMenuOpen(false)}>
            <X size={40} className="text-gray-500 hover:text-white" />
          </button>
      </div>

      {/* Hero */}
      <header className="pt-48 md:pt-64 pb-20 md:pb-32 px-6 md:px-12 relative overflow-hidden bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative z-10 text-center lg:text-left">
              <div className="inline-flex items-center gap-3 px-6 py-2 border border-black/10 bg-black/5 rounded-full mb-8">
                <Sparkles size={14} className="text-[#FF6B00]" />
                <span className="text-[11px] font-black uppercase tracking-[0.5em] text-black/60">The Strategic Blueprint</span>
              </div>
              <h1 className="text-5xl md:text-[110px] font-black text-black leading-[0.9] lg:leading-[0.85] tracking-tighter uppercase italic mb-8 md:mb-10">
                DECODING<br/>
                <span className="text-[#FF6B00] not-italic">AUTOMATION</span>
              </h1>
              <p className="text-lg md:text-2xl text-gray-500 font-medium max-w-xl leading-relaxed mb-10 md:mb-12 italic mx-auto lg:mx-0">
                From basic triggers to autonomous neural systems—learn how we engineer the systems that liberate your time.
              </p>
              <a href={whatsappLink} className="px-10 md:px-12 py-5 md:py-6 bg-black text-white font-black uppercase tracking-widest text-xs rounded-sm hover:bg-[#FF6B00] transition-all inline-flex items-center gap-4 justify-center">
                Reach Out <ArrowRight size={18} />
              </a>
            </div>
            <div className="relative group lg:pl-10">
               <div className="absolute inset-x-0 -inset-y-10 bg-[#FF6B00]/10 blur-[120px] rounded-full" />
               <div className="relative overflow-hidden rounded-sm border-4 border-black shadow-2xl bg-black max-w-xl mx-auto">
                  <img 
                    src="/assets/automation.png" 
                    alt="Automation Systems" 
                    className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                  />
               </div>
            </div>
          </div>
        </div>
      </header>

      {/* The 4-Level Roadmap */}
      <section className="py-48 px-6 md:px-12 bg-black text-white relative">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-32">
            <h2 className="text-5xl md:text-8xl font-black italic tracking-tighter uppercase mb-6">THE NEURAL <span className="text-[#FF6B00] not-italic">LADDER.</span></h2>
            <p className="text-gray-400 text-xl font-medium tracking-widest uppercase">The path from manual labor to autonomous dominance.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
             {levels.map((lvl, i) => (
               <div key={i} className="group p-10 bg-white/5 border border-white/5 hover:border-[#FF6B00]/30 transition-all duration-700 relative overflow-hidden">
                  <div className="absolute -right-4 -top-4 text-8xl font-black text-white/5 italic">{i+1}</div>
                  <div className="mb-10 group-hover:scale-110 transition-transform duration-500">{lvl.icon}</div>
                  <h3 className="text-2xl font-black italic uppercase mb-6 tracking-tight">{lvl.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-10 font-medium">{lvl.desc}</p>
                  <div className="flex flex-wrap gap-2">
                     {lvl.concepts.map((c, idx) => (
                       <span key={idx} className="text-[9px] font-black uppercase tracking-widest px-3 py-1 bg-white/5 text-[#FF6B00]">{c}</span>
                     ))}
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Business Turnaround */}
      <section className="py-48 px-6 md:px-12 bg-white text-black">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
           <div>
              <h2 className="text-5xl md:text-8xl font-black italic tracking-tighter uppercase mb-10 leading-[0.9]">HOW WE TURN<br/><span className="text-[#FF6B00] not-italic">ANY BUSINESS</span><br/>AROUND.</h2>
              <div className="space-y-12 mt-20">
                 {[
                   { title: "Time Redemption", desc: "Automating lead management and customer support can save an average of 15-20 engineering hours per week." },
                   { title: "Zero Leakage", desc: "Humans forget. AI doesn't. Every lead is followed up, every bill is processed, and every data point is captured." },
                   { title: "Infinite Scale", desc: "Manual businesses scale by hiring. Automated businesses scale by increasing computing power. It's cheaper and faster." }
                 ].map((ben, i) => (
                   <div key={i} className="flex gap-8">
                      <div className="text-2xl font-black italic text-[#FF6B00]">0{i+1}</div>
                      <div>
                         <h4 className="text-2xl font-black uppercase italic tracking-tight mb-2">{ben.title}</h4>
                         <p className="text-gray-500 font-medium leading-relaxed">{ben.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
           <div className="p-12 bg-black text-white rounded-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6B00]/10 blur-[80px]" />
              <h3 className="text-3xl font-black italic uppercase mb-12 text-[#FF6B00]">Strategic Glossary</h3>
              <div className="space-y-8">
                 {glossary.map((it, i) => (
                   <div key={i} className="border-b border-white/5 pb-6 last:border-0 group cursor-help">
                      <div className="flex items-center gap-4 mb-2">
                         <span className="text-sm font-black uppercase tracking-[0.3em] text-white group-hover:text-[#FF6B00] transition-colors">{it.term}</span>
                         <ArrowRight size={12} className="text-[#FF6B00] opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0" />
                      </div>
                      <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-relaxed">{it.def}</p>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-48 bg-black relative overflow-hidden text-center">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF6B00]/5 rounded-full blur-[150px]" />
         <div className="relative z-10 max-w-4xl mx-auto px-6">
            <h2 className="text-6xl md:text-[160px] font-black text-white italic tracking-tighter leading-none mb-12 uppercase">
              BECOME<br/><span className="text-[#FF6B00] not-italic">EXPERT.</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 font-medium mb-16 uppercase tracking-[0.2em]">Ready to out-engineer your market?</p>
            <Link to="/contact" className="px-20 py-8 bg-[#FF6B00] text-white font-black text-xl uppercase tracking-widest hover:bg-white hover:text-black transition-all rounded-sm">Reach Out</Link>
         </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-20 px-6 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-10 text-white">
          <Link to="/" className="text-3xl font-black tracking-tighter uppercase italic">VELOX<span className="text-[#FF6B00]">.</span></Link>
          <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
             <Link to="/ai-solutions" className="hover:text-[#FF6B00]">AI Solutions</Link>
             <Link to="/projects" className="hover:text-[#FF6B00]">Web Portfolio</Link>
             <Link to="/pricing" className="hover:text-[#FF6B00]">Investment</Link>
          </div>
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-600">© 2026 VELOX UNIFIED SOLUTIONS UNIT. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  );
}
