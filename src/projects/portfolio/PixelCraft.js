import React, { useState } from 'react';
import { ArrowRight, Instagram, Twitter, Linkedin, Mail, X, ExternalLink } from 'lucide-react';
import { portfolioItems, services } from './data/portfolioData';
import { AnimatePresence, motion } from 'framer-motion';
import PrototypeBanner from '../../components/common/PrototypeBanner';
import { Menu } from 'lucide-react';

export default function PixelCraft() {
  const [filter, setFilter] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const filteredItems = filter === 'All' ? portfolioItems : portfolioItems.filter(i => i.category === filter);

  return (
    <div className="bg-neutral-900 min-h-screen text-white font-sans selection:bg-pink-500/30">
      
      {/* Navigation */}
      <nav className="p-8 md:p-12 flex justify-between items-center">
        <div className="text-2xl font-black tracking-tighter">PIXEL<span className="text-pink-500">CRAFT</span>.</div>
        <div className="hidden md:flex gap-8 text-neutral-400 font-bold text-sm tracking-widest uppercase items-center">
            <a href="/projects" className="text-white hover:text-pink-500 transition-colors flex items-center gap-2">
                <ExternalLink size={16} className="rotate-180" /> Back to Projects
            </a>
            <a href="#" className="hover:text-white transition-colors">Work</a>
            <a href="#" className="hover:text-white transition-colors">Services</a>
            <a href="#" className="hover:text-white transition-colors">About</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
        <button className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center hover:bg-white hover:text-black transition-all md:hidden" onClick={() => setMobileNavOpen(true)}>
            <Menu size={20} />
        </button>
      </nav>

      {/* Fullscreen Mobile Nav */}
      <AnimatePresence>
        {mobileNavOpen && (
            <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 bg-neutral-900 flex flex-col items-center justify-center p-8"
            >
                <button className="absolute top-8 right-8 p-4 bg-white/10 rounded-full" onClick={() => setMobileNavOpen(false)}><X /></button>
                <div className="flex flex-col gap-8 text-center text-3xl font-black">
                     <a href="/projects" className="text-neutral-500 text-sm tracking-widest uppercase mb-4">Back to Projects</a>
                     {['Work', 'Services', 'About', 'Contact'].map(link => (
                         <a key={link} href="#" onClick={() => setMobileNavOpen(false)}>{link}</a>
                     ))}
                </div>
            </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <header className="py-20 md:py-32">
            <h1 className="text-6xl md:text-9xl font-black leading-none mb-8">
                DIGITAL <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">ALCHEMY</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl leading-relaxed">
                We blend creativity and technology to forge digital experiences that captivate, inspire, and convert.
            </p>
        </header>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-12">
            {['All', 'Branding', 'Design', 'Photography', '3D Art'].map(cat => (
                 <button 
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-6 py-2 rounded-full border border-neutral-700 font-bold text-sm transition-all hover:border-pink-500 ${filter === cat ? 'bg-pink-500 border-pink-500 text-black' : 'text-neutral-300'}`}
                >
                    {cat}
                </button>
            ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
            <AnimatePresence>
                {filteredItems.map(item => (
                    <motion.div 
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        key={item.id} 
                        className="group cursor-pointer"
                        onClick={() => setSelectedItem(item)}
                    >
                        <div className="relative aspect-[4/5] overflow-hidden rounded-xl mb-4 bg-neutral-800">
                             <img src={item.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" alt={item.title} />
                             <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-black">
                                    <ArrowRight size={32} className="-rotate-45" />
                                </div>
                             </div>
                        </div>
                        <h3 className="text-2xl font-bold mb-1 group-hover:text-pink-500 transition-colors">{item.title}</h3>
                        <p className="text-neutral-500 text-sm">{item.category} — {item.client}</p>
                    </motion.div>
                ))}
            </AnimatePresence>
        </motion.div>

        {/* Services & Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-neutral-800 pt-20 pb-20">
             <div>
                <h2 className="text-4xl font-black mb-8">Ready to create <br /> something <span className="text-pink-500">iconic?</span></h2>
                 <form className="space-y-6 max-w-md" onSubmit={(e) => { e.preventDefault(); alert('Message sent! We will be in touch shortly.'); }}>
                     <div>
                         <label className="block text-xs font-bold uppercase text-neutral-500 mb-2">Email</label>
                         <input type="email" className="w-full bg-neutral-800 border-b-2 border-neutral-700 p-4 outline-none focus:border-pink-500 transition-colors" placeholder="hello@brand.com" required />
                     </div>
                     <div>
                         <label className="block text-xs font-bold uppercase text-neutral-500 mb-2">Message</label>
                         <textarea className="w-full bg-neutral-800 border-b-2 border-neutral-700 p-4 outline-none focus:border-pink-500 transition-colors h-32" placeholder="Tell us about your project..." required></textarea>
                     </div>
                     <button type="submit" className="bg-white text-black px-8 py-4 rounded-full font-black uppercase tracking-widest hover:bg-pink-500 hover:text-white transition-colors">
                         Send Request
                     </button>
                 </form>
             </div>
             <div>
                 <div className="space-y-12">
                     {services.map((s, i) => (
                         <div key={i} className="group border-b border-neutral-800 pb-8 hover:pl-8 transition-all duration-300">
                             <h3 className="text-3xl font-black mb-2 group-hover:text-pink-500">{s.title}</h3>
                             <p className="text-neutral-500 max-w-sm">{s.desc}</p>
                         </div>
                     ))}
                 </div>
                 <div className="flex gap-6 mt-12 text-neutral-400">
                     <Instagram className="hover:text-white cursor-pointer" />
                     <Twitter className="hover:text-white cursor-pointer" />
                     <Linkedin className="hover:text-white cursor-pointer" />
                 </div>
             </div>
        </div>

      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
            >
                <div className="relative w-full h-full max-w-7xl flex flex-col md:flex-row gap-8 items-center">
                    <button onClick={() => setSelectedItem(null)} className="absolute top-0 right-0 p-4 text-white hover:text-pink-500 z-50">
                        <X size={32} />
                    </button>
                    
                    <div className="flex-1 h-full w-full flex items-center justify-center">
                        <img src={selectedItem.image} className="max-w-full max-h-full object-contain rounded-lg shadow-2xl" alt={selectedItem.title} />
                    </div>
                    
                    <div className="w-full md:w-96 text-left">
                        <span className="text-pink-500 font-bold uppercase tracking-widest text-xs mb-2 block">{selectedItem.category}</span>
                        <h2 className="text-5xl font-black mb-6">{selectedItem.title}</h2>
                        <div className="space-y-4 text-neutral-400 mb-8 border-t border-neutral-800 pt-6">
                            <p>An immersive visual exploration created for {selectedItem.client}. We focused on bold typography and high-contrast imagery to convey strength and innovation.</p>
                            <div className="flex justify-between border-b border-neutral-800 pb-2">
                                <span className="text-white font-bold">Client</span>
                                <span>{selectedItem.client}</span>
                            </div>
                            <div className="flex justify-between border-b border-neutral-800 pb-2">
                                <span className="text-white font-bold">Year</span>
                                <span>2024</span>
                            </div>
                        </div>
                        <button className="flex items-center gap-2 text-white font-bold hover:text-pink-500 transition-colors">
                            View Live Project <ExternalLink size={18} />
                        </button>
                    </div>
                </div>
            </motion.div>
        )}
      </AnimatePresence>
      <PrototypeBanner />
    </div>
  );
}
