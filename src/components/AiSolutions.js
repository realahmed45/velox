import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Cpu, 
  Workflow, 
  Zap, 
  MessageSquare, 
  ArrowRight, 
  ChevronDown, 
  CheckCircle2, 
  Sparkles,
  Search,
  Database,
  Phone,
  BarChart4,
  Menu,
  X
} from "lucide-react";

export default function AiSolutions() {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const industries = [
    {
      name: "E-commerce",
      useCase: "Shopping Ecosystem",
      problem: "High cart abandonment and customer support overload.",
      solution: "Bespoke WhatsApp Catalogs with automated cart recovery sequences and instant chat-based checkout syncing to Shopify.",
      outcome: "30% Revenue Recovery"
    },
    {
      name: "Real Estate",
      useCase: "Lead Intelligence",
      problem: "Agents overwhelmed by low-quality inquiries and manual scheduling.",
      solution: "Neural bots that qualify leads via chat, share project documents, and book site visits autonomously into calendars.",
      outcome: "90% Lead Qualification"
    },
    {
      name: "Healthcare",
      useCase: "Patient Triage",
      problem: "Reception bottlenecks and appointment no-shows.",
      solution: "WhatsApp triage bots that handle scheduling, symptom checking, and automated pre-op reminders.",
      outcome: "60% Admin Reduction"
    },
    {
      name: "Automotive",
      useCase: "Sales Acceleration",
      problem: "Slow response times to showroom inquiries and test-drive bookings.",
      solution: "Voice + Chat bots that handle test-drive scheduling and share car specs instantly across all platforms.",
      outcome: "2.5x Sales Velocity"
    },
    {
      name: "Hospitality",
      useCase: "Concierge Bot",
      problem: "Guests waiting for front-desk assistance for basic queries.",
      solution: "Bespoke hotel bots that handle room service orders, spa bookings, and local recommendations via WhatsApp.",
      outcome: "Zero Front-Desk Friction"
    },
    {
      name: "Financial Services",
      useCase: "Portfolio Assistant",
      problem: "Clients needing real-time updates and basic account actions.",
      solution: "Highly secure bots for balance checks, transaction alerts, and document collection for loan processing.",
      outcome: "80% Self-Service rate"
    },
    {
      name: "Education",
      useCase: "Student Support Bot",
      problem: "Institutions struggling with high-volume admissions and FAQ queries.",
      solution: "AI tutors that answer course queries, help with enrollment, and send automated class reminders.",
      outcome: "70% Query Automation"
    },
    {
      name: "Corporate HR",
      useCase: "Employee Pulse",
      problem: "HR teams spending hours on basic policy questions and onboarding.",
      solution: "Internal company bots that handle leaves, document requests, and employee onboarding training modules.",
      outcome: "50% HR Time Saved"
    }
  ];

  const faqs = [
    {
      q: "What platforms do you support?",
      a: "We architect ecosystems across WhatsApp (Cloud API), Telegram, Instagram, and Web. All bots are synced to a single source of truth for your business data."
    },
    {
      q: "How does the bot help with E-commerce Sales?",
      a: "By allowing customers to browse catalogs and checkout directly in-chat. We reduce friction by eliminating the need to visit a website for simple purchases."
    },
    {
      q: "Is the AI 'smart' enough for complex queries?",
      a: "Yes. We don't build keyword-based bots. Our neural agents use advanced NLP to understand intent, sentiment, and deep business context."
    },
    {
      q: "Can I integrate it with my current CRM?",
      a: "Fully. We build the bridges between your bot and tools like HubSpot, Salesforce, or custom databases to ensure zero data leakage."
    },
    {
      q: "What is the ROI for a chatbot?",
      a: "Most businesses see a 20-40% increase in lead conversion and a 70% reduction in support admin time within the first 90 days."
    }
  ];

  return (
    <div className="bg-white min-h-screen font-inter selection:bg-[#FF6B00]/30 text-black">
      {/* Navbar Integration */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrollY > 50 ? 'backdrop-blur-xl bg-white/80 py-4 border-b border-black/5' : 'bg-transparent py-6 md:py-8'}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 flex justify-between items-center text-black">
          <Link to="/" className="text-xl sm:text-2xl md:text-3xl font-black tracking-tighter uppercase italic flex items-center gap-1 sm:gap-2">
            <span className="text-black">VELOX</span><span className="text-[#FF6B00]">.</span>
          </Link>
          <div className="hidden lg:flex items-center gap-10">
            <Link to="/ai-solutions" className="text-[14px] font-black uppercase tracking-[0.2em] text-[#FF6B00]">Chatbot Solutions</Link>
            <Link to="/what-is-automation" className="text-[14px] font-black uppercase tracking-[0.2em] text-gray-700 hover:text-[#FF6B00] transition-colors">Chatbot Lab</Link>
            <Link to="/projects" className="text-[14px] font-black uppercase tracking-[0.2em] text-gray-700 hover:text-[#FF6B00] transition-colors">Web Artifacts</Link>
            <Link to="/pricing" className="text-[14px] font-black uppercase tracking-[0.2em] text-gray-700 hover:text-[#FF6B00] transition-colors">Pricing</Link>
            <Link to="/contact" className="px-10 py-5 bg-[#FF6B00] text-white font-black text-[14px] uppercase tracking-widest hover:bg-black transition-all rounded-sm shadow-xl shadow-[#FF6B00]/20">Reach Out</Link>
          </div>
          <button 
            className="lg:hidden text-black p-2 hover:bg-black/5 rounded-full transition-colors" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} className="sm:size-[28px]" /> : <Menu size={24} className="sm:size-[28px]" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[110] bg-black transition-all duration-700 flex flex-col items-center justify-center gap-10 ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
          <Link to="/ai-solutions" className="text-4xl font-black text-[#FF6B00]" onClick={() => setMobileMenuOpen(false)}>Chatbot Solutions</Link>
          <Link to="/what-is-automation" className="text-4xl font-black text-white hover:text-[#FF6B00]" onClick={() => setMobileMenuOpen(false)}>Chatbot Lab</Link>
          <Link to="/projects" className="text-4xl font-black text-white hover:text-[#FF6B00]" onClick={() => setMobileMenuOpen(false)}>Web Artifacts</Link>
          <Link to="/pricing" className="text-4xl font-black text-white hover:text-[#FF6B00]" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
          <Link to="/contact" className="px-16 py-6 bg-[#FF6B00] text-white font-black text-xl uppercase tracking-widest rounded-sm mt-10" onClick={() => setMobileMenuOpen(false)}>Reach Out</Link>
          <button className="mt-20" onClick={() => setMobileMenuOpen(false)}>
            <X size={40} className="text-gray-500 hover:text-white" />
          </button>
      </div>

      {/* Hero Section */}
      <header className="relative pt-48 pb-32 px-6 overflow-hidden bg-white">
         <div className="absolute top-0 left-0 w-full h-full bg-[#FF6B00]/5 z-0 blur-[120px] rounded-full" />
         <div className="max-w-[1400px] mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 border border-black/10 rounded-full mb-10">
               <Sparkles size={16} className="text-[#FF6B00]" />
               <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black">Deep Intelligence Architecture</span>
            </div>
            <h1 className="text-4xl md:text-[140px] font-black tracking-tighter leading-[1] md:leading-[0.85] italic uppercase mb-8 md:mb-12 text-black px-2 md:px-0">
               DOMINANT<br/><span className="text-[#FF6B00]">CHATBOTS</span>
            </h1>
            <p className="text-xl md:text-3xl text-gray-600 max-w-5xl mx-auto font-medium leading-relaxed italic uppercase tracking-wider px-4">
               We architect bespoke <span className="text-black font-bold border-b-2 border-[#FF6B00]">WhatsApp & Telegram Ecosystems</span> designed to dominate your market through absolute efficiency.
            </p>
         </div>
      </header>

      {/* Exhaustive Catalog Section */}
      <section className="py-32 px-6 bg-[#080808]">
         <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-10 mb-16 md:mb-24 text-white">
               <div className="max-w-3xl">
                  <h2 className="text-3xl sm:text-5xl md:text-8xl font-black tracking-tighter italic uppercase leading-none mb-4 md:mb-8">THE SPECTRUM OF<br/><span className="text-[#FF6B00] not-italic">CHATBOTS</span></h2>
                  <p className="text-gray-400 text-sm sm:text-lg md:text-xl font-medium max-w-xl uppercase tracking-widest leading-relaxed">From WhatsApp Cloud API to full-scale Telegram neural integrations.</p>
               </div>
               <div className="px-6 md:px-10 py-3 md:py-5 border border-white/10 bg-white/5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-[#FF6B00]">Unit 01: Core Infra</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
                {[
                  { icon: <MessageSquare />, title: "E-commerce Ecosystems", d: "Catalog sync, Checkout automation, and Abandoned Cart recovery via WhatsApp & Instagram." },
                  { icon: <Workflow />, title: "Telegram Communities", d: "Massive scale broadcast bots, member management, and high-velocity signal distribution." },
                  { icon: <Phone />, title: "Neural Voice Agents", d: "Human-clone voice bots for automated sales calls and customer inquiry resolution in Pakistan." },
                  { icon: <Database />, title: "Intelligent Web Chat", d: "Custom on-site chat tools with deep RAG knowledge of your business documentation." },
                  { icon: <Zap />, title: "Real Estate Agents", d: "Autonomously qualify property leads, share floor-plans, and schedule site viewings 24/7." },
                  { icon: <BarChart4 />, title: "Lead Generation Hub", d: "Messenger & DM bots that convert social traffic into qualified leads through interactive logic." },
                  { icon: <Target />, title: "Healthcare Triage", d: "Patient symptom checker, appointment scheduling, and automated prescription reminders." },
                  { icon: <Cpu />, title: "Corporate HR Bots", d: "Automated employee onboarding, FAQ handling, and policy query resolution for large firms." },
                  { icon: <Code />, title: "Custom API Integration", d: "Bots that pull data from your ERP/CRM to provide real-time status updates on any platform." }
                ].map((item, i) => (
                  <div key={i} className="bg-black p-8 md:p-12 group hover:bg-[#FF6B00]/5 transition-all duration-500">
                     <div className="text-[#FF6B00] mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                     <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white mb-4 md:mb-6 italic">{item.title}</h3>
                     <p className="text-gray-500 text-sm md:text-base font-medium leading-relaxed mb-8 md:mb-10">{item.d}</p>
                     <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-gray-700 group-hover:text-[#FF6B00]">
                        <div className="w-1.5 h-1.5 bg-[#FF6B00]" />
                        Deep Deployment Available
                     </div>
                  </div>
                ))}
            </div>
         </div>
      </section>

      {/* Anatomy of Automation - Visual Flow Section */}
      <section className="py-32 px-6 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img src="/automation_visual_bg_2_1772122492086.png" className="w-full h-full object-cover" alt="Automation Architecture" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF6B00]/5 blur-[150px] pointer-events-none" />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <div className="text-[#FF6B00] font-black uppercase tracking-[0.6em] text-[10px] md:text-[12px] mb-6 md:mb-8">Conceptual Blueprint</div>
            <h2 className="text-4xl md:text-8xl font-black italic uppercase tracking-tighter mb-8 md:mb-10">ANATOMY OF A <br/><span className="text-[#FF6B00]">BOT</span></h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-sm md:text-lg px-4">Understanding the neural transformation of your engagement.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
            <div className="glass-card p-12 text-center relative group">
               <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#FF6B00] text-white flex items-center justify-center font-black rounded-full shadow-lg shadow-[#FF6B00]/20">01</div>
               <div className="text-[#FF6B00] mb-8 flex justify-center"><Search size={48} /></div>
               <h3 className="text-2xl font-black uppercase italic mb-6">Unstructured Input</h3>
               <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 group-hover:opacity-30 transition-opacity">
                  <img src="/assets/automation.png" alt="" className="w-full h-full object-cover grayscale" />
               </div>
               <p className="text-gray-400 font-medium mb-12 relative z-10 leading-relaxed mx-auto max-w-xs">
                 We replace chaos with code. Our engineers deploy custom neural networks that handle your operations.
               </p>
            </div>

            {/* Step 2: Processing */}
            <div className="relative group">
               <div className="hidden lg:block absolute -left-10 top-1/2 -translate-y-1/2 z-20 text-[#FF6B00] animate-pulse"><ArrowRight size={40} /></div>
               <div className="glass-card p-10 md:p-14 border-[#FF6B00]/40 bg-[#FF6B00]/5 text-center relative scale-100 md:scale-110 shadow-2xl shadow-[#FF6B00]/10">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-10 md:w-12 h-10 md:h-12 bg-white text-black flex items-center justify-center font-black rounded-full shadow-lg">02</div>
                  <div className="text-white mb-6 md:mb-8 flex justify-center"><Cpu size={48} className="animate-spin-slow" /></div>
                  <h3 className="text-2xl md:text-3xl font-black uppercase italic mb-4 md:mb-6 text-[#FF6B00]">Neural Logic</h3>
                  <p className="text-gray-300 text-sm md:text-base font-medium leading-relaxed">The Velox Agent parses intent, retrieves context via RAG, and applies business-specific decision logic.</p>
               </div>
               <div className="hidden lg:block absolute -right-10 top-1/2 -translate-y-1/2 z-20 text-[#FF6B00] animate-pulse"><ArrowRight size={40} /></div>
            </div>

            {/* Step 3: Action */}
            <div className="glass-card p-8 sm:p-12 text-center relative">
               <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#FF6B00] text-white flex items-center justify-center font-black rounded-full shadow-lg shadow-[#FF6B00]/20">03</div>
               <div className="text-[#FF6B00] mb-6 sm:mb-8 flex justify-center"><Zap size={40} className="sm:size-[48px]" /></div>
               <h3 className="text-xl sm:text-2xl font-black uppercase italic mb-4 sm:mb-6">Autonomous Action</h3>
               <p className="text-gray-400 text-sm sm:text-base font-medium leading-relaxed">Appointments booked in CRM, invoices sent, or hyper-personalized responses delivered instantly.</p>
            </div>
          </div>

          <div className="mt-20 md:mt-32 p-8 md:p-16 bg-white border-4 border-black rounded-sm shadow-2xl relative">
             <div className="absolute -top-6 left-8 md:left-12 px-4 md:px-6 py-2 bg-[#FF6B00] text-white font-black uppercase tracking-widest text-[9px] md:text-[10px]">Processing Layer Architecture</div>
             <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16">
                {[
                  { label: "Extraction", val: "Multimodal AI" },
                  { label: "Reasoning", val: "n8n Agents" },
                  { label: "Memory", val: "VectorDB" },
                  { label: "Action", val: "API Webhooks" }
                ].map((stat, i) => (
                  <div key={i} className="text-center md:text-left">
                     <div className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-gray-400 mb-2 md:mb-4">{stat.label}</div>
                     <div className="text-lg md:text-2xl font-black italic uppercase text-black">{stat.val}</div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Industry Specific Use Cases */}
      <section className="py-32 px-6 bg-white text-black overflow-hidden">
         <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-24">
               <div className="text-[#FF6B00] font-black uppercase tracking-[0.5em] text-[10px] mb-6">Execution Realities</div>
               <h2 className="text-5xl md:text-9xl font-black tracking-tighter italic uppercase leading-none">INDUSTRY USE-CASES</h2>
            </div>

            <div className="space-y-12">
               {industries.map((ind, i) => (
                 <div key={i} className="group grid grid-cols-1 lg:grid-cols-12 gap-10 p-12 border border-gray-100 bg-gray-50 hover:border-black transition-all">
                    <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-gray-200 pb-10 lg:pb-0">
                       <div className="text-[10px] font-black uppercase tracking-widest text-[#FF6B00] mb-4">Sector Optimization</div>
                       <h3 className="text-4xl font-black uppercase italic tracking-tighter mb-4">{ind.name}</h3>
                       <div className="inline-block px-4 py-2 bg-black text-white text-[10px] font-black uppercase tracking-widest">{ind.useCase}</div>
                    </div>
                    
                    <div className="lg:col-span-4">
                       <div className="mb-8">
                          <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">The Friction</h4>
                          <p className="font-bold text-gray-600 leading-relaxed">{ind.problem}</p>
                       </div>
                       <div>
                          <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">The Velox Neural Unit</h4>
                          <p className="font-bold text-black leading-relaxed">{ind.solution}</p>
                       </div>
                    </div>

                    <div className="lg:col-span-4 bg-black p-10 text-white flex flex-col justify-center text-center">
                       <div className="text-[10px] font-black uppercase tracking-widest text-[#FF6B00] mb-4">Measurable Outcome</div>
                       <div className="text-3xl font-black italic tracking-tighter uppercase">{ind.outcome}</div>
                       <div className="mt-8 flex justify-center">
                          <CheckCircle2 size={32} className="text-[#FF6B00]" />
                       </div>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6 bg-[#0a0a0a] border-t border-white/5">
         <div className="max-w-4xl mx-auto">
            <div className="text-center mb-24">
                <h3 className="text-3xl md:text-5xl font-black italic uppercase mb-8">BUILD YOUR <br/><span className="text-[#FF6B00]">BOT EMPIRE.</span></h3>
                <p className="text-gray-400 font-medium mb-10 leading-relaxed">Don't settle for basic automation. Build a neural chatbot ecosystem that works for you.</p>
            </div>

            <div className="space-y-6">
               {faqs.map((faq, i) => (
                 <div key={i} className="border border-white/5 bg-[#080808] overflow-hidden">
                    <button 
                      onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                      className="w-full flex justify-between items-center p-8 text-left group"
                    >
                       <span className={`text-xl font-black uppercase tracking-tight italic transition-colors ${activeFaq === i ? 'text-[#FF6B00]' : 'text-white group-hover:text-[#FF6B00]'}`}>{faq.q}</span>
                       <ChevronDown size={24} className={`text-gray-500 transition-transform duration-500 ${activeFaq === i ? 'rotate-180 text-[#FF6B00]' : ''}`} />
                    </button>
                    <div className={`transition-all duration-700 ease-in-out ${activeFaq === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                       <p className="p-8 pt-0 text-gray-400 font-medium leading-relaxed border-t border-white/5 bg-black/50">
                          {faq.a}
                       </p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* CTA Footer */}
      <section className="py-24 md:py-48 px-6 bg-[#FF6B00] text-white text-center relative overflow-hidden">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-white/10 rounded-full blur-[100px] animate-pulse" />
         <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-7xl md:text-[180px] font-black italic tracking-tighter leading-none mb-8 md:mb-12 uppercase">CAPTURE<br/>THE MARKET.</h2>
            <p className="text-lg sm:text-2xl font-bold uppercase tracking-[0.1em] sm:tracking-[0.2em] mb-12 md:mb-16">The future is autonomous. Are you in?</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
               <Link to="/pricing" className="w-full sm:w-auto px-12 sm:px-16 py-5 sm:py-6 border-2 border-white text-white font-black uppercase tracking-widest hover:bg-white hover:text-[#FF6B00] transition-all rounded-sm text-sm sm:text-base">View Pricing</Link>
               <Link to="/contact" className="w-full sm:w-auto px-12 sm:px-16 py-5 sm:py-6 bg-white text-black font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all rounded-sm text-sm sm:text-base">Reach Out</Link>
            </div>
         </div>
      </section>

      {/* Footer Minimal */}
      <footer className="py-12 md:py-20 px-4 md:px-6 bg-black border-t border-white/5 text-center">
         <div className="text-2xl md:text-3xl font-black text-white italic uppercase mb-6">VELOX<span className="text-[#FF6B00]">.</span></div>
         <p className="text-[8px] sm:text-[10px] font-medium sm:font-black uppercase tracking-[0.2em] sm:tracking-[0.4em] text-gray-600 max-w-[280px] md:max-w-none mx-auto">
            © 2026 VELOX UNIFIED SOLUTIONS UNIT. <br className="sm:hidden" /> ENGINEERING THE FUTURE. | <a href="mailto:velox.operations09@gmail.com" className="text-[#FF6B00]/80 lowercase tracking-normal sm:uppercase sm:tracking-widest">velox.operations09@gmail.com</a>
         </p>
      </footer>
    </div>
  );
}
