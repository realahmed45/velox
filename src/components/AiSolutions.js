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
      name: "Real Estate",
      useCase: "Lead Velocity Agent",
      problem: "80% of leads go cold because support doesn't respond within 5 minutes.",
      solution: "A custom Velox AI Agent that parses Zillow/website leads, asks qualifying questions (budget, move-in date), and autonomously books viewings onto the agent's calendar 24/7.",
      outcome: "300% increase in lead conversion; 0% response delay."
    },
    {
      name: "Healthcare",
      useCase: "Autonomous Scheduler",
      problem: "Manual appointment booking is prone to errors and consumes 40% of admin time.",
      solution: "Voice + Chat AI integrated with EHR systems. Patients can book, cancel, or reschedule through natural conversation. The AI also sends logic-based follow-ups for pre-op instructions.",
      outcome: "Admin costs reduced by 60%; appointment no-shows dropped by 45%."
    },
    {
      name: "E-commerce & Retail",
      useCase: "Cognitive Sales Engine",
      problem: "Customers drop off when they can't find specific products or have shipping questions.",
      solution: "An LLM-driven shopping assistant with 120+ language support. It doesn't just answer questions; it cross-sells based on real-time inventory and customer sentiment analysis.",
      outcome: "Average Order Value (AOV) increased by 22%; support tickets reduced by 70%."
    },
    {
      name: "SaaS & Tech",
      useCase: "Zero-Touch Onboarding",
      problem: "Users churn if they don't reach the 'Aha!' moment quickly during trials.",
      solution: "Agentic workflows triggered by user behavior. If a user gets stuck in a specific module, the AI sends a hyper-personalized video tutorial or reaches out with a specific fix via Slack/Email.",
      outcome: "Trial-to-Paid conversion increased by 35%."
    },
    {
      name: "Legal & Professional",
      useCase: "Doc-Intelligence Pipeline",
      problem: "Paralegals spend hundreds of hours manually reviewing contracts for specific clauses.",
      solution: "A recursive RAG (Retrieval-Augmented Generation) system that parses thousands of documents in seconds, flagging anomalies and auto-generating summaries with 99.8% accuracy.",
      outcome: "Case research speed increased by 10x; zero human-error risk."
    },
    {
      name: "Logistics",
      useCase: "Fleet Intelligence Bot",
      problem: "Coordinating with 100+ drivers manually leads to communication breakdowns.",
      solution: "Voice AI agents that autonomously check in with drivers, update delivery statuses in the ERP, and notify customers of real-time ETA shifts without human dispatcher intervention.",
      outcome: "Dispatcher efficiency increased by 4x; customer satisfaction up 50%."
    },
    {
      name: "Education & EdTech",
      useCase: "Adaptive Neural Tutor",
      problem: "Standard online courses have high drop-out rates due to lack of personalization.",
      solution: "An AI tutor that analyzes a student's gaze (via web-cam if permitted) or typing speed to detect frustration. It then shifts the difficulty of the material in real-time.",
      outcome: "Course completion rates increased by 65%; student retention up 80%."
    },
    {
      name: "Finance & Fintech",
      useCase: "Risk-Pulse Agent",
      problem: "Manual KYC/AML checks take 3-5 days, slowing down user acquisition.",
      solution: "Agentic workflows that autonomously verify documents against global databases, screen for PEPs, and assign a risk score in under 60 seconds.",
      outcome: "Onboarding speed increased by 95%; zero compliance leakage."
    },
    {
      name: "Manufacturing",
      useCase: "Predictive Maintenance AI",
      problem: "Unscheduled downtime costs factories millions per hour.",
      solution: "IOT data stream parsed by a local AI instance. The AI detects rhythmic anomalies in machinery and autonomously orders spare parts and logs a maintenance ticket before a failure occurs.",
      outcome: "Maintenance costs reduced by 30%; critical downtime eliminated."
    }
  ];

  const faqs = [
    {
      q: "What is n8n and why do you use it?",
      a: "n8n is a powerful workflow automation tool that allows us to build 'Agentic Workflows'—complex, multi-step automations that can handle logic, branching, and error recovery better than simple tools like Zapier. We use it to create the 'connective tissue' between your AI, your CRM, and your business apps."
    },
    {
      q: "Is my data safe when using AI models?",
      a: "Yes. For premium clients, we implement 'Enterprise Private AI' modules where data remains within your private VPC or secure instances. We follow HIPAA and GDPR standards, ensuring that models are never trained on your proprietary data."
    },
    {
      q: "How long until I see a return on investment (ROI)?",
      a: "Most Velox AI modules pay for themselves within 3 to 6 months by drastically reducing manual operational costs (OpEx) or reclaiming lost revenue from unconverted leads."
    },
    {
      q: "Do I need technical knowledge to manage the AI?",
      a: "No. We provide 'Invisible Infrastructure.' We handle the engineering, fine-tuning, and monitoring. You receive a clean dashboard to track performance and results."
    },
    {
      q: "Can the AI handle my specific business logic?",
      a: "Absolutely. We don't provide 'out of the box' bots. We architect 'Neural Clones' of your business logic through fine-tuning and advanced prompt engineering, ensuring the AI behaves exactly like your top-performing employee."
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
            <Link to="/ai-solutions" className="text-[14px] font-black uppercase tracking-[0.2em] text-[#FF6B00]">AI Solutions</Link>
            <Link to="/what-is-automation" className="text-[14px] font-black uppercase tracking-[0.2em] text-gray-700 hover:text-[#FF6B00] transition-colors">Automation Lab</Link>
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
          <Link to="/ai-solutions" className="text-4xl font-black text-[#FF6B00]" onClick={() => setMobileMenuOpen(false)}>AI Solutions</Link>
          <Link to="/what-is-automation" className="text-4xl font-black text-white hover:text-[#FF6B00]" onClick={() => setMobileMenuOpen(false)}>Automation Lab</Link>
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
               AUTONOMOUS<br/><span className="text-[#FF6B00]">INTELLIGENCE</span>
            </h1>
            <p className="text-xl md:text-3xl text-gray-600 max-w-5xl mx-auto font-medium leading-relaxed italic uppercase tracking-wider px-4">
               We architect bespoke <span className="text-black font-bold border-b-2 border-[#FF6B00]">Neural Units</span> designed to dominate your market through absolute efficiency.
            </p>
         </div>
      </header>

      {/* Exhaustive Catalog Section */}
      <section className="py-32 px-6 bg-[#080808]">
         <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-10 mb-16 md:mb-24 text-white">
               <div className="max-w-3xl">
                  <h2 className="text-3xl sm:text-5xl md:text-8xl font-black tracking-tighter italic uppercase leading-none mb-4 md:mb-8">THE SPECTRUM OF<br/><span className="text-[#FF6B00] not-italic">AUTOMATION</span></h2>
                  <p className="text-gray-400 text-sm sm:text-lg md:text-xl font-medium max-w-xl uppercase tracking-widest leading-relaxed">From n8n agentic workflows to full-scale LLM integrations.</p>
               </div>
               <div className="px-6 md:px-10 py-3 md:py-5 border border-white/10 bg-white/5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-[#FF6B00]">Unit 01: Core Infra</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
                {[
                  { icon: <MessageSquare />, title: "Recursive Chatbots", d: "LLM agents that remember past interactions and use tools (APIs) to solve problems." },
                  { icon: <Workflow />, title: "n8n Agentic Workflows", d: "Complex multi-module automations that autonomously route data and tasks." },
                  { icon: <Phone />, title: "AI Voice Agents", d: "Ultra-low latency human-clone voice for sales, booking, and high-frequency support." },
                  { icon: <Database />, title: "RAG Knowledge Bases", d: "Private retrieval-augmented generation systems that know your entire documentation." },
                  { icon: <Zap />, title: "Sales Auto-Outreach", d: "Personalized cold outreach engines that research prospects at scale via LinkedIn/Email." },
                  { icon: <BarChart4 />, title: "Intelligent ETL", d: "Automated Data Extraction, Transformation, and Visualization for real-time BI." }
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
            <h2 className="text-4xl md:text-8xl font-black italic uppercase tracking-tighter mb-8 md:mb-10">ANATOMY OF <br/><span className="text-[#FF6B00]">AUTOMATION</span></h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-sm md:text-lg px-4">Understanding the neural transformation of your data.</p>
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
               <h2 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter text-white mb-6">INTELLIGENCE <span className="text-[#FF6B00]">FAQ</span></h2>
               <p className="text-gray-500 font-bold uppercase tracking-[0.2em]">Everything you need to know about the transition.</p>
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
