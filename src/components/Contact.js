import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Send, Mail, Phone, MapPin, ArrowRight, MessageSquare, Instagram, Linkedin, Twitter, CheckCircle2, Menu, X, Cpu, Globe, Layers, Sparkles } from "lucide-react";

export default function Contact() {
  const [scrollY, setScrollY] = React.useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formState, setFormState] = useState("idle"); // idle, sending, success
  const [selectedScope, setSelectedScope] = useState("Autonomous AI Infrastructure");
  const whatsappLink = "https://wa.me/923329945014";

  React.useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState("sending");
    setTimeout(() => {
      setFormState("success");
      // Redirect to WhatsApp after success
      window.open(whatsappLink, "_blank");
    }, 2000);
  };

  return (
    <div className="bg-white min-h-screen text-black font-inter selection:bg-[#FF6B00]/30 selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrollY > 50 ? 'backdrop-blur-xl bg-white/80 py-4 border-b border-black/5' : 'bg-transparent py-8'}`}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center text-black">
          <Link to="/" className="text-3xl font-black tracking-tighter uppercase italic">
             VELOX<span className="text-[#FF6B00]">.</span>
          </Link>
          
          <div className="hidden lg:flex items-center gap-10">
            <Link to="/ai-solutions" className="text-[14px] font-black uppercase tracking-[0.2em] text-gray-700 hover:text-[#FF6B00] transition-colors">AI Solutions</Link>
            <Link to="/what-is-automation" className="text-[14px] font-black uppercase tracking-[0.2em] text-gray-700 hover:text-[#FF6B00] transition-colors">Automation Lab</Link>
            <Link to="/projects" className="text-[14px] font-black uppercase tracking-[0.2em] text-gray-700 hover:text-[#FF6B00] transition-colors">Web Artifacts</Link>
            <Link to="/pricing" className="text-[14px] font-black uppercase tracking-[0.2em] text-gray-700 hover:text-[#FF6B00] transition-colors">Pricing</Link>
            <Link to="/contact" className="px-10 py-5 bg-[#FF6B00] text-white font-black text-[14px] uppercase tracking-widest hover:bg-black transition-all rounded-sm shadow-xl shadow-[#FF6B00]/20">Reach Out</Link>
          </div>

          <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[110] bg-black transition-all duration-700 flex flex-col items-center justify-center gap-10 ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
          <Link to="/ai-solutions" className="text-4xl font-black text-white hover:text-[#FF6B00]" onClick={() => setMobileMenuOpen(false)}>AI Solutions</Link>
          <Link to="/what-is-automation" className="text-4xl font-black text-white hover:text-[#FF6B00]" onClick={() => setMobileMenuOpen(false)}>Automation Lab</Link>
          <Link to="/projects" className="text-4xl font-black text-white hover:text-[#FF6B00]" onClick={() => setMobileMenuOpen(false)}>Web Artifacts</Link>
          <Link to="/pricing" className="text-4xl font-black text-white hover:text-[#FF6B00]" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
          <button className="mt-10" onClick={() => setMobileMenuOpen(false)}>
            <X size={40} className="text-gray-500 hover:text-white" />
          </button>
      </div>

      <main className="pt-64 pb-32 px-6 md:px-12 relative overflow-hidden bg-white">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left Side: Text & Info */}
            <div>
              <div className="text-[#FF6B00] font-black text-[12px] uppercase tracking-[0.6em] mb-8">Direct Access Terminal</div>
              <h1 className="text-6xl md:text-[120px] font-black tracking-tighter leading-[0.85] italic uppercase mb-12 text-black">
                 INITIATE<br/><span className="text-[#FF6B00]">COLLAB</span>
              </h1>
              <p className="text-2xl text-gray-600 max-w-xl font-medium leading-relaxed mb-16 italic uppercase tracking-wider">
                Our engineers are ready to deploy bespoke <span className="text-black font-bold">Neural Units</span> and <span className="text-black font-bold">Web Ecosystems</span>.
              </p>

              <div className="space-y-12">
                <div className="flex items-start gap-8">
                  <div className="p-5 bg-white/5 rounded-sm text-[#FF6B00]">
                    <Mail size={32} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Electronic Mail</div>
                    <div className="text-2xl font-black italic uppercase">velox.operations09@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-8">
                  <div className="p-5 bg-white/5 rounded-sm text-[#FF6B00]">
                    <Phone size={32} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Neural Link (WhatsApp)</div>
                    <div className="text-2xl font-black italic uppercase">+92 332 9945014</div>
                  </div>
                </div>

                <div className="flex items-start gap-8">
                  <div className="p-5 bg-white/5 rounded-sm text-[#FF6B00]">
                    <MessageSquare size={32} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-gray-600 mb-2">Instant Response</div>
                    <a href={whatsappLink} className="text-xl font-black uppercase text-[#FF6B00] hover:underline decoration-2 underline-offset-8">Open Secure Chat</a>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="mt-24 flex items-center gap-10">
                <Link to="#" className="text-gray-500 hover:text-white transition-colors"><Instagram size={24}/></Link>
                <Link to="#" className="text-gray-500 hover:text-white transition-colors"><Linkedin size={24}/></Link>
                <Link to="#" className="text-gray-500 hover:text-white transition-colors"><Twitter size={24}/></Link>
              </div>
            </div>

            {/* Right Side: Lead Gen Form */}
            <div className="p-10 md:p-16 bg-[#0a0a0a] text-white rounded-sm relative overflow-hidden group border border-white/5 shadow-2xl">
               <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6B00]/5 blur-[80px]" />
               
               {formState === "success" ? (
                 <div className="text-center py-20 animate-fadeInUp">
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-[#FF6B00]/20 rounded-full mb-10">
                       <CheckCircle2 size={48} className="text-[#FF6B00]" />
                    </div>
                    <h2 className="text-4xl font-black italic uppercase mb-6">Transmission Received</h2>
                    <p className="text-gray-400 font-medium">A lead engineer will contact you within 6 business hours.</p>
                    <button 
                      onClick={() => setFormState("idle")}
                      className="mt-12 text-[#FF6B00] font-black uppercase tracking-widest hover:underline"
                    >
                      Send New Packet
                    </button>
                 </div>
               ) : (
                 <form onSubmit={handleSubmit} className="relative z-10 space-y-10">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-1">Entity Name</label>
                        <input required type="text" placeholder="e.g. Stark Industries" className="w-full bg-white/5 border border-white/10 p-5 font-bold focus:border-[#FF6B00] focus:bg-[#FF6B00]/5 transition-all outline-none" />
                      </div>
                      <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-1">Communication Channel</label>
                        <input required type="email" placeholder="email@address.com" className="w-full bg-white/5 border border-white/10 p-5 font-bold focus:border-[#FF6B00] focus:bg-[#FF6B00]/5 transition-all outline-none" />
                      </div>
                   </div>

                   <div className="space-y-6">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-1">Project Scope</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                         {[
                           { id: "Autonomous AI Infrastructure", icon: <Cpu size={16} /> },
                           { id: "High-Performance Web Ecosystem", icon: <Globe size={16} /> },
                           { id: "Unified Digital Overhaul", icon: <Layers size={16} /> },
                           { id: "Specific Consultation", icon: <Sparkles size={16} /> }
                         ].map((scope) => (
                           <button
                             key={scope.id}
                             type="button"
                             onClick={() => setSelectedScope(scope.id)}
                             className={`flex items-center gap-4 p-5 border-2 transition-all duration-300 rounded-sm text-left group ${selectedScope === scope.id ? 'bg-[#FF6B00]/10 border-[#FF6B00] shadow-[0_0_20px_rgba(255,107,0,0.2)]' : 'bg-white/5 border-white/10 hover:border-white/30'}`}
                           >
                             <div className={`p-2 rounded-full transition-colors ${selectedScope === scope.id ? 'bg-[#FF6B00] text-white' : 'bg-white/5 text-gray-500 group-hover:text-white'}`}>
                               {scope.icon}
                             </div>
                             <span className={`text-[11px] font-black uppercase tracking-widest ${selectedScope === scope.id ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                               {scope.id}
                             </span>
                           </button>
                         ))}
                      </div>
                   </div>

                   <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-1">Strategic Brief</label>
                      <textarea required rows="4" placeholder="How can we help you dominate?" className="w-full bg-white/5 border border-white/10 p-5 font-bold focus:border-[#FF6B00] focus:bg-[#FF6B00]/5 transition-all outline-none resize-none" />
                   </div>

                   <button 
                    disabled={formState === "sending"}
                    className="w-full py-8 bg-[#FF6B00] text-white font-black uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all duration-700 disabled:opacity-50 flex items-center justify-center gap-4 text-lg"
                   >
                     {formState === "sending" ? "TRANSMITTING..." : "REACH OUT"}
                     <ArrowRight size={20} />
                   </button>
                 </form>
               )}
            </div>
          </div>
        </div>
      </main>

      {/* Footer Minimal */}
      <footer className="py-20 px-6 bg-black border-t border-white/5 text-center">
         <div className="text-2xl font-black text-white italic uppercase mb-6">VELOX<span className="text-[#FF6B00]">.</span></div>
         <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-700">© 2026 VELOX UNIFIED SOLUTIONS UNIT. ENGINEERING THE FUTURE.</p>
      </footer>
    </div>
  );
}
