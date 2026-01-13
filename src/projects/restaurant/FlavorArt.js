import React, { useState } from 'react';
import { ChefHat, Utensils, Clock, MapPin, Star, ShoppingBag, Calendar, X, Plus, Minus, Menu } from 'lucide-react';
import { menu } from './data/menuData';
import PrototypeBanner from '../../components/common/PrototypeBanner';

export default function FlavorArt() {
  const [activeCategory, setActiveCategory] = useState('starters');
  const [cart, setCart] = useState([]);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="bg-[#1a1a1a] min-h-screen text-[#e5e5e5] font-serif selection:bg-amber-700/30">
        
       {/* Nav */}
       <nav className="fixed w-full z-50 bg-[#1a1a1a]/90 backdrop-blur-md border-b border-white/5 py-4 px-6 md:px-12 flex justify-between items-center">
            <div className="flex items-center gap-2">
                <ChefHat className="text-amber-600" size={32} />
                <span className="text-2xl font-bold tracking-widest uppercase">Flavor<span className="text-amber-600">Art</span>.</span>
            </div>
            <div className="hidden md:flex gap-8 font-sans text-xs font-bold tracking-[0.2em] uppercase items-center">
                <a href="/projects" className="hover:text-amber-600 transition-colors">&larr; Projects</a>
                <a href="#menu" className="hover:text-amber-600 transition-colors">Menu</a>
                <a href="#story" className="hover:text-amber-600 transition-colors">Story</a>
                <a href="#location" className="hover:text-amber-600 transition-colors">Location</a>
            </div>
            <div className="flex gap-4">
                <button 
                    onClick={() => setIsReservationOpen(true)}
                    className="hidden md:block bg-amber-700 hover:bg-amber-600 text-white px-6 py-2 rounded-sm font-sans text-xs font-bold uppercase tracking-widest transition-colors"
                >
                    Reserve
                </button>
                <div className="relative p-2">
                    <ShoppingBag />
                    {cart.length > 0 && <span className="absolute top-0 right-0 bg-red-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">{cart.length}</span>}
                </div>
                <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                   {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>
            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-20 left-0 right-0 bg-[#1a1a1a] border-b border-white/10 p-6 flex flex-col gap-6 font-sans text-sm font-bold uppercase tracking-widest text-center animate-in slide-in-from-top duration-300">
                     <a href="/projects" className="py-2 hover:text-amber-600">Back to Projects</a>
                     <a href="#menu" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-amber-600">Menu</a>
                     <a href="#story" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-amber-600">Story</a>
                     <a href="#location" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-amber-600">Location</a>
                     <button onClick={() => { setIsReservationOpen(true); setMobileMenuOpen(false); }} className="bg-amber-700 py-3 text-white">Make Reservation</button>
                </div>
            )}
       </nav>

       {/* Hero */}
       <header className="relative h-screen flex items-center justify-center">
            <div className="absolute inset-0 z-0">
                <img src="https://images.unsplash.com/photo-1514362545857-3bc16549766b?auto=format&fit=crop&q=80" className="w-full h-full object-cover opacity-50" alt="Restaurant interior" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
            </div>
            <div className="relative z-10 text-center px-4">
                <p className="text-amber-500 font-sans text-xs md:text-sm tracking-[0.3em] uppercase mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">Experience Culinary Excellence</p>
                <h1 className="text-6xl md:text-9xl font-bold mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">Taste the <br/> <i className="font-serif font-thin text-amber-600">Artistry</i></h1>
                <div className="w-24 h-1 bg-amber-600 mx-auto mb-8" />
                <p className="max-w-xl mx-auto text-lg text-gray-300 font-sans leading-relaxed">Where traditional techniques meet modern innovation. Join us for an unforgettable dining journey.</p>
            </div>
       </header>

       {/* Story Section */}
       <section id="story" className="py-24 px-6 md:px-12 bg-[#1f1f1f]">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <h2 className="text-4xl font-bold">Our Story</h2>
                    <p className="text-gray-400 leading-loose">
                        Founded in 1985, FlavorArt began as a small family kitchen with a big dream: to bring the authentic taste of Tuscany to the world. Over decades, we have refined our craft, sourcing only the finest ingredients from local farmers and artisans.
                    </p>
                    <p className="text-gray-400 leading-loose">
                        Our head chef, Marco Rossi, believes that every dish should tell a story. "Cooking is not just about sustenance," he says, "it's about memory, emotion, and art." This philosophy is woven into every plate we serve.
                    </p>
                    <img src="https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?auto=format&fit=crop&q=80" className="w-full h-64 object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700" alt="Chef plating food" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80" className="w-full h-80 object-cover rounded-sm translate-y-12" alt="Restaurant ambiance" />
                    <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80" className="w-full h-80 object-cover rounded-sm" alt="Signature dish" />
                </div>
            </div>
       </section>

       {/* Menu Section */}
       <section id="menu" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Our Menu</h2>
                <div className="flex justify-center gap-8 border-b border-white/10 pb-4">
                    {Object.keys(menu).map(cat => (
                        <button 
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`font-sans text-sm font-bold uppercase tracking-widest pb-4 -mb-4 transition-colors ${activeCategory === cat ? 'text-amber-600 border-b-2 border-amber-600' : 'text-gray-500 hover:text-white'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                {menu[activeCategory].map(item => (
                    <div key={item.id} className="group cursor-pointer">
                        <div className="flex justify-between items-baseline mb-2 border-b border-white/10 pb-2 border-dashed group-hover:border-amber-600/50 transition-colors">
                            <h3 className="text-xl font-bold">{item.name}</h3>
                            <span className="text-amber-600 font-bold text-lg">${item.price}</span>
                        </div>
                        <div className="flex justify-between items-start">
                             <p className="text-gray-400 font-sans text-sm">{item.desc}</p>
                             <button 
                                onClick={() => addToCart(item)}
                                className="opacity-0 group-hover:opacity-100 transition-opacity text-amber-600 hover:text-white bg-white/5 p-2 rounded-full"
                             >
                                <Plus size={16} />
                             </button>
                        </div>
                    </div>
                ))}
            </div>
       </section>

       {/* Reservation Modal */}
       {isReservationOpen && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4">
            <div className="bg-[#222] p-8 md:p-12 w-full max-w-lg border border-white/10 relative">
                <button onClick={() => setIsReservationOpen(false)} className="absolute top-4 right-4 text-gray-500 hover:text-white"><X /></button>
                <div className="text-center mb-8">
                    <ChefHat className="mx-auto text-amber-600 mb-4" size={40} />
                    <h2 className="text-3xl font-bold">Table Reservation</h2>
                </div>
                <form className="space-y-6 font-sans" onSubmit={(e) => { e.preventDefault(); alert('Table Reserved! We look forward to seeing you.'); setIsReservationOpen(false); }}>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs uppercase font-bold text-gray-500 mb-2">Date</label>
                            <input type="date" className="w-full bg-[#111] border border-white/10 p-3 text-white focus:border-amber-600 outline-none" required />
                        </div>
                        <div>
                            <label className="block text-xs uppercase font-bold text-gray-500 mb-2">Time</label>
                            <select className="w-full bg-[#111] border border-white/10 p-3 text-white focus:border-amber-600 outline-none">
                                <option>18:00</option>
                                <option>19:00</option>
                                <option>20:00</option>
                            </select>
                        </div>
                    </div>
                    <div>
                         <label className="block text-xs uppercase font-bold text-gray-500 mb-2">Guests</label>
                         <div className="flex gap-2">
                            {[2, 3, 4, 5, 6].map(n => (
                                <button key={n} type="button" className="flex-1 bg-[#111] border border-white/10 py-3 hover:bg-amber-900/20 hover:border-amber-600 transition-colors">
                                    {n}
                                </button>
                            ))}
                         </div>
                    </div>
                    <button type="submit" className="w-full bg-amber-700 hover:bg-amber-600 text-white py-4 font-bold uppercase tracking-widest transition-colors">
                        Confirm Booking
                    </button>
                </form>
            </div>
        </div>
      )}
      <PrototypeBanner />
    </div>
  );
}
