import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Check, 
  ArrowRight, 
  Menu, 
  X, 
  Globe, 
  Bot, 
  Layers
} from "lucide-react";

export default function Pricing() {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("automation"); // 'automation' or 'web'
  const whatsappLink = "https://wa.me/923329945014";

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const automationPricing = [
    {
      tier: "Starter Bot",
      setup: "Rs. 45,000",
      monthly: "Rs. 4,500",
      desc: "Perfect for local businesses starting with 1-2 daily tasks.",
      features: [
        "1 Custom AI Agent",
        "WhatsApp/Telegram Sync",
        "Lead Capture Logic",
        "Priority Support"
      ],
      notIncluded: [
        "Neural Decision Logic",
        "Multi-Platform Hub"
      ]
    },
    {
      tier: "Pro Ecosystem",
      setup: "Rs. 145,000",
      monthly: "Rs. 12,500",
      popular: true,
      desc: "Comprehensive logic for multi-department operations.",
      features: [
        "5 Specialized Bots",
        "Cross-Platform Sync",
        "WhatsApp Cloud API",
        "CRM & Slack Link",
        "Dedicated Architect"
      ],
      notIncluded: [
        "Bespoke Neural Training"
      ]
    },
    {
      tier: "Elite Neural",
      setup: "Rs. 350,000+",
      monthly: "Rs. 25,000",
      desc: "Autonomous infrastructure for high-volume enterprises.",
      features: [
        "Unlimited Neural Agents",
        "Full Platform Integration",
        "Autonomous Logic Units",
        "24/7 Priority Support",
        "Custom Fine-tuning"
      ],
      notIncluded: []
    }
  ];

  const webPricing = [
    {
      tier: "Standard Landing",
      setup: "Rs. 35,000",
      monthly: "Rs. 4,500",
      desc: "Ultra-fast, conversion-optimized engineering.",
      features: [
        "Bespoke Visual Design",
        "SEO Hardening",
        "Mobile Precision",
        "30 Days Post-Launch Support"
      ],
      notIncluded: [
        "Backend Workflows",
        "User Systems"
      ]
    },
    {
      tier: "Business Artifact",
      setup: "Rs. 95,000",
      monthly: "Rs. 8,500",
      popular: true,
      desc: "Complete business environments with functional depth.",
      features: [
        "Advanced SaaS Logic",
        "User Auth & Database",
        "Full CRM Integration",
        "Premium Visual Effects",
        "3 Months Support"
      ],
      notIncluded: [
        "Enterprise Load Balancing"
      ]
    },
    {
      tier: "Custom SaaS",
      setup: "Rs. 250,000+",
      monthly: "Rs. 15,000",
      desc: "Complex, scalable platforms for new market entries.",
      features: [
        "Microservices Architecture",
        "High-Volume Database",
        "Custom Feature Engineering",
        "Dedicated Project Lead",
        "Full Security Audits"
      ],
      notIncluded: []
    }
  ];

  const currentPricing = activeCategory === "automation" ? automationPricing : webPricing;

  return (
    <div className="bg-white min-h-screen font-inter selection:bg-[#FF6B00]/30 selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrollY > 50 ? 'backdrop-blur-xl bg-white/80 py-4 border-b border-black/5' : 'bg-transparent py-6 md:py-8'}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 flex justify-between items-center text-black">
          <Link to="/" className="text-xl sm:text-2xl md:text-3xl font-black tracking-tighter uppercase italic flex items-center gap-1 sm:gap-2">
             <span className="text-black">VELOX</span><span className="text-[#FF6B00]">.</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-12">
            <Link to="/ai-solutions" className="text-[14px] font-black uppercase tracking-[0.2em] hover:text-[#FF6B00] transition-colors">Chatbot Solutions</Link>
            <Link to="/what-is-automation" className="text-[14px] font-black uppercase tracking-[0.2em] hover:text-[#FF6B00] transition-colors">Chatbot Lab</Link>
            <Link to="/projects" className="text-[14px] font-black uppercase tracking-[0.3em] hover:text-[#FF6B00] transition-colors">Web Artifacts</Link>
            <Link to="/pricing" className="text-[14px] font-black uppercase tracking-[0.3em] text-[#FF6B00]">Pricing</Link>
            <Link to="/contact" className="px-10 py-5 bg-[#FF6B00] text-white font-black text-[14px] uppercase tracking-widest hover:bg-black transition-all rounded-sm">Reach Out</Link>
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

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-[110] bg-black transition-all duration-700 flex flex-col items-center justify-center gap-10 ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
          <Link to="/ai-solutions" className="text-4xl font-black text-white hover:text-[#FF6B00]" onClick={() => setMobileMenuOpen(false)}>Chatbot Solutions</Link>
          <Link to="/what-is-automation" className="text-4xl font-black text-white hover:text-[#FF6B00]" onClick={() => setMobileMenuOpen(false)}>Chatbot Lab</Link>
          <Link to="/projects" className="text-4xl font-black text-white hover:text-[#FF6B00]" onClick={() => setMobileMenuOpen(false)}>Web Artifacts</Link>
          <Link to="/pricing" className="text-4xl font-black text-[#FF6B00]" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
          <Link to="/contact" className="px-16 py-6 bg-[#FF6B00] text-white font-black text-xl uppercase tracking-widest rounded-sm mt-10" onClick={() => setMobileMenuOpen(false)}>Reach Out</Link>
          <button className="mt-20" onClick={() => setMobileMenuOpen(false)}>
            <X size={40} className="text-gray-500 hover:text-white" />
          </button>
      </div>

      {/* Pricing Header */}
      <header className="pt-64 pb-20 px-6 md:px-12 relative overflow-hidden bg-white text-center">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#FF6B00]/5 rounded-full blur-[150px] z-0" />
        
        <div className="relative z-10 max-w-[1400px] mx-auto">
          <div className="inline-flex items-center gap-3 px-6 py-2 border border-black/10 bg-black/5 rounded-full mb-12">
            <Layers size={14} className="text-[#FF6B00]" />
            <span className="text-[11px] font-black uppercase tracking-[0.5em] text-black/60">Investment Infrastructure</span>
          </div>
          
          <h1 className="text-4xl md:text-[140px] font-black text-black leading-[1] md:leading-[0.85] tracking-tighter italic uppercase mb-12 md:mb-16 px-4 md:px-0">
            PRICING<br/><span className="text-[#FF6B00] not-italic">PROTOCOLS</span>
          </h1>

          <div className="flex justify-center mb-16 md:mb-24 px-4">
            <div className="flex flex-col sm:flex-row p-1.5 bg-black rounded-sm w-full max-w-lg sm:w-auto">
              <button 
                onClick={() => setActiveCategory("automation")}
                className={`flex items-center justify-center gap-3 px-6 md:px-10 py-4 font-black uppercase tracking-widest text-[10px] md:text-xs transition-all ${activeCategory === "automation" ? 'bg-[#FF6B00] text-white shadow-lg' : 'text-gray-500 hover:text-white'}`}
              >
                <Bot size={16} /> Chatbot Ecosystems
              </button>
              <button 
                onClick={() => setActiveCategory("web")}
                className={`flex items-center justify-center gap-3 px-6 md:px-10 py-4 font-black uppercase tracking-widest text-[10px] md:text-xs transition-all ${activeCategory === "web" ? 'bg-[#FF6B00] text-white shadow-lg' : 'text-gray-500 hover:text-white'}`}
              >
                <Globe size={16} /> Web Artifacts
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Pricing Grid */}
      <section className="pb-48 px-6 md:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {currentPricing.map((item, i) => (
              <div 
                key={i} 
                className={`relative p-8 md:p-12 rounded-sm border-2 transition-all duration-500 group flex flex-col ${item.popular ? 'bg-black border-black text-white shadow-2xl lg:scale-105 z-10 mx-2 lg:mx-0' : 'bg-white border-black/5 text-black hover:border-[#FF6B00]/30'}`}
              >
                {item.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 bg-[#FF6B00] text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-full">
                    Most Deployed
                  </div>
                )}
                
                <div className="mb-12">
                  <h3 className={`text-4xl font-black italic uppercase mb-2 ${item.popular ? 'text-[#FF6B00]' : 'text-black'}`}>{item.tier}</h3>
                  <p className={`text-sm font-medium ${item.popular ? 'text-gray-400' : 'text-gray-500'}`}>{item.desc}</p>
                </div>
                
                <div className="mb-12">
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-wrap items-baseline gap-3">
                      <span className="text-5xl md:text-6xl font-black italic">{item.setup}</span>
                      <span className={`text-[10px] font-black uppercase tracking-[0.2em] border px-2 py-1 ${item.popular ? 'border-[#FF6B00] text-[#FF6B00]' : 'border-black text-black'}`}>Setup</span>
                    </div>
                    <div className="flex items-baseline gap-2 mt-4 md:mt-6">
                      <span className={`text-xl md:text-2xl font-black italic ${item.popular ? 'text-[#FF6B00]' : 'text-black'}`}>{item.monthly}</span>
                      <span className={`text-[10px] font-black uppercase tracking-[0.2em] opacity-60 ${item.popular ? 'text-white' : 'text-black'}`}>/ Maintenance</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6 mb-16 flex-grow">
                  {item.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className={`p-1 rounded-full ${item.popular ? 'bg-[#FF6B00]/20 text-[#FF6B00]' : 'bg-black/5 text-black'}`}>
                        <Check size={12} strokeWidth={4} />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider">{feature}</span>
                    </div>
                  ))}
                  {item.notIncluded.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-4 opacity-30">
                      <div className="p-1 rounded-full bg-gray-500/10 text-gray-500">
                        <X size={12} strokeWidth={4} />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider line-through">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <a 
                  href={whatsappLink} 
                  className={`w-full py-6 flex items-center justify-center gap-4 font-black uppercase tracking-widest text-xs transition-all ${item.popular ? 'bg-[#FF6B00] text-white hover:bg-white hover:text-black' : 'bg-black text-white hover:bg-[#FF6B00]'}`}
                >
                  Reach Out <ArrowRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Minimal */}
      <footer className="py-12 md:py-20 px-4 md:px-6 bg-black border-t border-white/5 text-center">
         <div className="text-2xl md:text-3xl font-black text-white italic uppercase mb-6">VELOX<span className="text-[#FF6B00]">.</span></div>
         <p className="text-[8px] sm:text-[10px] font-medium sm:font-black uppercase tracking-[0.2em] sm:tracking-[0.4em] text-gray-700 max-w-[280px] md:max-w-none mx-auto">
            © 2026 VELOX UNIFIED SOLUTIONS UNIT. <br className="sm:hidden" /> ENGINEERING THE FUTURE. | <a href="mailto:velox.operations09@gmail.com" className="text-[#FF6B00]/80 lowercase tracking-normal sm:uppercase sm:tracking-widest">velox.operations09@gmail.com</a>
         </p>
      </footer>
    </div>
  );
}
