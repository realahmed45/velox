import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Menu, 
  X, 
  Zap, 
  Target, 
  Cpu, 
  Workflow, 
  Sparkles,
  ArrowRight
} from "lucide-react";

export default function AboutChatbots() {
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
      title: "Flow: The Chatbot Concept",
      desc: "A chatbot is your digital sales representative that never sleeps. It engages customers instantly, answers queries, and qualifies leads while you focus on scaling.",
      concepts: ["Instant Response", "Lead Capture", "24/7 Availability"],
      icon: <Target className="text-[#FF6B00]" size={32} />
    },
    {
      level: "Level 2",
      title: "Sync: Basic Integrations",
      desc: "We connect your bot to WhatsApp or Telegram. When a customer inquires, they are instantly added to your CRM, and you get a notification on Slack or Email.",
      concepts: ["WhatsApp API", "CRM Sync", "Instant Alerts"],
      icon: <Zap className="text-[#FF6B00]" size={32} />
    },
    {
      level: "Level 3",
      title: "Brain: Neural Intelligence",
      desc: "We integrate specialized AI 'Brains' to understand intent. Your bot can now negotiate, handle complex objections, and categorize data with human-like precision.",
      concepts: ["Intent Detection", "Logic Gates", "RAG Knowledge"],
      icon: <Workflow className="text-[#FF6B00]" size={32} />
    },
    {
      level: "Level 4",
      title: "Empire: Ecosystem Dominance",
      desc: "A multi-platform chatbot ecosystem. Your bots work across WhatsApp, Telegram, and Web, syncing data autonomously and closing deals without human intervention.",
      concepts: ["Cross-Platform", "Self-Correction", "Massive Scale"],
      icon: <Cpu className="text-[#FF6B00]" size={32} />
    }
  ];

  const glossary = [
    { term: "Chatbot Ecosystem", def: "A multi-platform network of bots (WhatsApp, Web, Telegram) working together to manage your business." },
    { term: "WhatsApp API", def: "The enterprise-grade bridge allowing us to build ultra-fast, neural bots with Green Tick and Catalog features." },
    { term: "Cart Recovery", def: "A strategic bot sequence that reminds users about unpurchased items, proven to recover 20% + of revenue." },
    { term: "Agentic Logic", def: "Chatbots that can solve problems and take actions (checking stock, booking dates) instead of just talking." },
    { term: "E-com Sync", def: "The process of connecting your Shopify/WooCommerce store directly to a WhatsApp shopping bot." }
  ];

  return (
    <div className="bg-white min-h-screen font-inter selection:bg-[#FF6B00]/30 selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrollY > 50 ? 'backdrop-blur-xl bg-white/80 py-4 border-b border-black/5' : 'bg-transparent py-6 md:py-8'}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 flex justify-between items-center text-black">
          <Link to="/" className="text-xl sm:text-2xl md:text-3xl font-black tracking-tighter uppercase italic flex items-center gap-1 sm:gap-2">
             <span className="text-black">VELOX</span><span className="text-[#FF6B00]">.</span>
          </Link>
          
          <div className="hidden lg:flex items-center gap-10">
            <Link to="/ai-solutions" className="text-[14px] font-black uppercase tracking-[0.2em] text-gray-600 hover:text-[#FF6B00] transition-colors">Chatbot Solutions</Link>
            <Link to="/what-is-automation" className="text-[14px] font-black uppercase tracking-[0.2em] text-[#FF6B00]">Chatbot Lab</Link>
            <Link to="/projects" className="text-[13px] font-black uppercase tracking-[0.2em] hover:text-[#FF6B00] transition-colors">Web Artifacts</Link>
            <Link to="/pricing" className="text-[13px] font-black uppercase tracking-[0.2em] hover:text-[#FF6B00] transition-colors">Pricing</Link>
            <Link to="/contact" className="px-8 py-4 bg-[#FF6B00] text-white font-black text-[12px] uppercase tracking-widest hover:bg-black transition-all rounded-sm">Reach Out</Link>
          </div>

          <button 
            className="md:hidden text-black p-2 hover:bg-black/5 rounded-full transition-colors" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} className="sm:size-[28px]" /> : <Menu size={24} className="sm:size-[28px]" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[110] bg-black transition-all duration-700 flex flex-col items-center justify-center gap-10 ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
          <Link to="/ai-solutions" className="text-4xl font-black text-white hover:text-[#FF6B00]" onClick={() => setMobileMenuOpen(false)}>Chatbot Solutions</Link>
          <Link to="/what-is-automation" className="text-4xl font-black text-[#FF6B00]" onClick={() => setMobileMenuOpen(false)}>Chatbot Lab</Link>
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
              <h1 className="text-4xl md:text-[110px] font-black text-black leading-[1] md:leading-[0.85] tracking-tighter uppercase italic mb-8 md:mb-10 px-2">
                DECODING<br/>
                <span className="text-[#FF6B00] not-italic">CHATBOTS</span>
              </h1>
              <p className="text-lg md:text-2xl text-gray-500 font-medium max-w-xl leading-relaxed mb-10 md:mb-12 italic mx-auto lg:mx-0 px-4">
                From basic triggers to autonomous neural systems—learn how we engineer the chatbots that dominate your market.
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
                    alt="Chatbot Systems" 
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
          <div className="text-center mb-20 md:mb-32">
            <h2 className="text-4xl md:text-8xl font-black italic tracking-tighter uppercase mb-6 leading-[1] md:leading-none">THE CHATBOT <span className="text-[#FF6B00] not-italic">LADDER.</span></h2>
            <p className="text-gray-400 text-sm md:text-xl font-medium tracking-widest uppercase px-4">The path from single-response to ecosystem dominance.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
             {levels.map((lvl, i) => (
               <div key={i} className="group p-8 md:p-10 bg-white/5 border border-white/5 hover:border-[#FF6B00]/30 transition-all duration-700 relative overflow-hidden">
                  <div className="absolute -right-4 -top-4 text-7xl md:text-8xl font-black text-white/5 italic">{i+1}</div>
                  <div className="mb-8 md:mb-10 group-hover:scale-110 transition-transform duration-500">{lvl.icon}</div>
                  <h3 className="text-xl md:text-2xl font-black italic uppercase mb-4 md:mb-6 tracking-tight">{lvl.title}</h3>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-8 md:mb-10 font-medium">{lvl.desc}</p>
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
              <h2 className="text-4xl md:text-8xl font-black italic tracking-tighter uppercase mb-10 leading-[1] md:leading-[0.9]">HOW WE TURN<br/><span className="text-[#FF6B00] not-italic">ANY BUSINESS</span><br/>AROUND.</h2>
              <div className="space-y-12 mt-20">
                 {[
                   { title: "24/7 Presence", desc: "A chatbot ensures you never miss a lead in Pakistan. While you sleep, the bot is qualifying and selling." },
                   { title: "Scale without Labor", desc: "A single WhatsApp bot can handle 1,000 customers simultaneously. No hiring, no management, just pure efficiency." },
                   { title: "Zero Wait-Time", desc: "Customers in high-velocity markets demand instant answers. Our bots deliver sub-second intelligence across any platform." }
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
            <div className="p-8 md:p-12 bg-black text-white rounded-sm relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6B00]/10 blur-[80px]" />
               <h3 className="text-2xl md:text-3xl font-black italic uppercase mb-10 md:mb-12 text-[#FF6B00]">Chatbot Strategy FAQ</h3>
               <div className="space-y-6 md:space-y-8">
                  {[
                    { q: "Is WhatsApp the best for my store?", a: "Yes. In Pakistan, WhatsApp has a 95% open rate. Selling through chat is significantly faster than traditional web checkouts." },
                    { q: "How long to build an ecosystem?", a: "A standard WhatsApp + Web ecosystem is architected and deployed within 14-21 engineering days." },
                    { q: "Can it handle 10,000 customers?", a: "Absolutely. Our neural infrastructure is built for high-velocity, massive scale. Automation handles the volume effortlessly." },
                    { q: "Do you integrate with Shopify?", a: "Full integration. We sync your real-time inventory to the bot so your pricing and stock are always accurate." }
                  ].map((it, i) => (
                    <div key={i} className="border-b border-white/5 pb-5 md:pb-6 last:border-0 group cursor-help">
                       <div className="flex items-center gap-4 mb-2">
                          <span className="text-xs md:text-sm font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-white group-hover:text-[#FF6B00] transition-colors">{it.q}</span>
                       </div>
                       <p className="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-relaxed italic">{it.a}</p>
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
            <h2 className="text-5xl md:text-[160px] font-black text-white italic tracking-tighter leading-none mb-10 md:mb-12 uppercase">
              BECOME<br/><span className="text-[#FF6B00] not-italic">EXPERT.</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 font-medium mb-16 uppercase tracking-[0.2em]">Ready to out-engineer your market?</p>
            <Link to="/contact" className="px-20 py-8 bg-[#FF6B00] text-white font-black text-xl uppercase tracking-widest hover:bg-white hover:text-black transition-all rounded-sm">Reach Out</Link>
         </div>
      </section>

      {/* Footer */}
      <footer className="py-12 md:py-20 px-4 md:px-6 bg-black border-t border-white/5 text-center">
         <div className="text-2xl md:text-3xl font-black text-white italic uppercase mb-6">VELOX<span className="text-[#FF6B00]">.</span></div>
         <p className="text-[8px] sm:text-[10px] font-medium sm:font-black uppercase tracking-[0.2em] sm:tracking-[0.4em] text-gray-700 max-w-[280px] md:max-w-none mx-auto">
            © 2026 VELOX UNIFIED SOLUTIONS UNIT. <br className="sm:hidden" /> ENGINEERING THE FUTURE. | <a href="mailto:velox.operations09@gmail.com" className="text-[#FF6B00]/80 lowercase tracking-normal sm:uppercase sm:tracking-widest">velox.operations09@gmail.com</a>
         </p>
      </footer>
    </div>
  );
}
