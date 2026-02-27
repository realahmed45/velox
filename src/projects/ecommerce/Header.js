import React from 'react';
import { ShoppingCart, Heart, Home, Search, Truck, Shield, Award, ArrowRightLeft } from 'lucide-react';

export default function Header({ 
  wishlistCount, 
  cartCount, 
  onToggleCart, 
  searchTerm, 
  onSearchChange,
  onOpenLoyalty,
  onOpenCompare,
  compareCount
}) {
  return (
    <div className="relative z-40 font-sans tracking-wide">
      {/* Top Bar - Dark Premium */}
      <div className="bg-zinc-950 text-white py-3 px-6 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs uppercase tracking-widest font-medium">
          <div className="flex gap-6">
            <span className="opacity-70 hover:opacity-100 cursor-pointer transition-opacity">Currency: USD</span>
            <span className="opacity-70 hover:opacity-100 cursor-pointer transition-opacity">Language: EN</span>
          </div>
          <div className="flex gap-6 hidden md:flex">
             <a href="/projects" className="flex items-center gap-2 hover:text-white text-gray-400 transition-colors font-bold uppercase tracking-widest border border-zinc-700 px-4 py-1 rounded hover:bg-zinc-800 hover:border-zinc-500">
              <Home size={14} />
              <span>Back to Projects</span>
            </a>
            <span className="opacity-70">Support: +1 (800) LUXE-HOME</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-6 md:py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Logo */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-black text-zinc-950 tracking-tighter uppercase">
                Luxe<span className="font-light">Furn</span>.
              </h1>
            </div>

            {/* Search */}
            <div className="w-full max-w-xl">
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Seach for furniture..."
                  value={searchTerm}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="w-full bg-gray-50 text-zinc-900 px-6 py-4 outline-none border border-gray-100 focus:border-zinc-900 focus:bg-white transition-all duration-300 font-medium placeholder:text-gray-400"
                />
                <button className="absolute right-0 top-0 h-full px-6 text-zinc-500 hover:text-zinc-900 transition-colors">
                  <Search size={20} />
                </button>
              </div>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-1">
              <button
                onClick={onOpenCompare}
                className="group relative p-4 hover:bg-zinc-50 transition-colors border border-transparent hover:border-gray-100"
              >
                <ArrowRightLeft size={20} className="text-zinc-800" />
                {compareCount > 0 && (
                  <span className="absolute top-2 right-2 bg-zinc-900 text-white text-[10px] w-4 h-4 flex items-center justify-center">
                    {compareCount}
                  </span>
                )}
                <span className="sr-only">Compare</span>
              </button>
              
              <button 
                onClick={onOpenLoyalty}
                className="p-4 hover:bg-zinc-50 transition-colors border border-transparent hover:border-gray-100"
              >
                <Award size={20} className="text-zinc-800" />
              </button>

              <button className="group relative p-4 hover:bg-zinc-50 transition-colors border border-transparent hover:border-gray-100">
                <Heart size={20} className="text-zinc-800" />
                {wishlistCount > 0 && (
                  <span className="absolute top-2 right-2 bg-zinc-900 text-white text-[10px] w-4 h-4 flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </button>

              <button
                onClick={onToggleCart}
                className="group relative p-4 bg-zinc-950 text-white hover:bg-zinc-800 transition-colors ml-2"
              >
                <div className="flex items-center gap-3">
                  <ShoppingCart size={20} />
                  <span className="font-bold text-sm hidden md:block">CART</span>
                  {cartCount > 0 && (
                    <span className="bg-white text-zinc-950 text-[10px] w-5 h-5 flex items-center justify-center font-bold">
                      {cartCount}
                    </span>
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation & Trust Badges */}
      <div className="bg-zinc-900 text-gray-300 py-4 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-widest">
          <nav className="flex gap-8">
            {['New Arrivals', 'Living', 'Bedroom', 'Dining', 'Office', 'Sale'].map((item) => (
              <a key={item} href="/projects" className="hover:text-white transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-6 text-zinc-500">
            <span className="flex items-center gap-2"><Truck size={14} /> Free Shipping</span>
            <span className="flex items-center gap-2"><Shield size={14} /> 5-Year Warranty</span>
          </div>
        </div>
      </div>
    </div>
  );
}
