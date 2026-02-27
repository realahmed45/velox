import React, { useState } from 'react';
import { Wallet, TrendingUp, ArrowUpRight, ArrowDownLeft, CreditCard, Send, MoreHorizontal, PieChart, Target, Zap, Shield, ChevronRight } from 'lucide-react';
import { transactions, contacts, markets } from './data/financeData';
import StockChart from './components/StockChart';
import PrototypeBanner from '../../components/common/PrototypeBanner';

export default function PayFlow() {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 font-sans selection:bg-purple-500/30">
      
      {/* Sidebar / Mobile Nav */}
      <nav className="fixed bottom-0 w-full md:w-20 md:h-screen bg-slate-900 border-t md:border-t-0 md:border-r border-slate-800 z-50 flex md:flex-col justify-around md:justify-start items-center p-4 gap-8">
        <a href="/projects" className="hidden md:flex w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl items-center justify-center font-black text-2xl mb-8 hover:scale-105 transition-transform text-white no-underline">P</a>
        
        <button onClick={() => setActiveTab('dashboard')} className={`p-3 rounded-xl transition-all ${activeTab === 'dashboard' ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/25' : 'text-slate-500 hover:text-slate-300'}`}>
            <Wallet size={24} />
        </button>
        <button onClick={() => setActiveTab('market')} className={`p-3 rounded-xl transition-all ${activeTab === 'market' ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/25' : 'text-slate-500 hover:text-slate-300'}`}>
            <TrendingUp size={24} />
        </button>
        <button onClick={() => setActiveTab('analytics')} className={`p-3 rounded-xl transition-all ${activeTab === 'analytics' ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/25' : 'text-slate-500 hover:text-slate-300'}`}>
             <PieChart size={24} />
        </button>
        
        <a href="/projects" className="md:mt-auto p-3 rounded-xl text-slate-500 hover:text-white transition-colors">
            <ChevronRight className="rotate-180" size={24} />
        </a>
      </nav>

      {/* Main Content */}
      <div className="md:pl-20 max-w-7xl mx-auto p-6 md:p-10 pb-24">
        
        {/* Header */}
        <header className="flex justify-between items-center mb-10">
            <div>
                <h1 className="text-3xl font-black mb-1">Total Balance</h1>
                <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">$24,562.00</span>
                    <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-lg text-sm font-bold flex items-center gap-1">
                        <ArrowUpRight size={14} /> +2.4%
                    </span>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <a href="/projects" className="hidden md:flex items-center gap-2 bg-slate-800 text-slate-300 px-4 py-2 rounded-lg font-bold hover:bg-slate-700 transition-colors">
                    Back to Projects
                </a>
                <button className="bg-slate-800 p-3 rounded-full hover:bg-slate-700 transition-colors relative">
                    <Zap size={20} className="text-yellow-400" fill="currentColor" />
                    <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-slate-900" />
                </button>
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-500 to-orange-500 p-[2px]">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80" className="w-full h-full rounded-full border-2 border-slate-900 object-cover" alt="Profile" />
                </div>
            </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Col */}
            <div className="lg:col-span-2 space-y-8">
                
                {/* Cards Carousel */}
                <div className="relative overflow-hidden h-64 rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-8 text-white shadow-2xl shadow-purple-900/50 group">
                    <div className="absolute top-0 right-0 p-8 opacity-20"><CreditCard size={120} /></div>
                    <div className="flex justify-between items-start mb-12">
                         <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg font-mono text-sm tracking-widest">PAYFLOW BLACK</div>
                         <Shield className="opacity-60" />
                    </div>
                    <div>
                        <p className="font-mono text-2xl tracking-widest mb-2 opacity-90">**** **** **** 4289</p>
                        <div className="flex justify-between items-end">
                            <div>
                                <p className="text-xs opacity-60 uppercase mb-1">Card Holder</p>
                                <p className="font-bold tracking-wide">ALEXANDER MITCHELL</p>
                            </div>
                            <div className="text-right">
                                <p className="text-xs opacity-60 uppercase mb-1">Expires</p>
                                <p className="font-bold">09/28</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Market Overview */}
                <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xl font-bold">Market Overview</h3>
                        <div className="flex gap-2">
                            {['1H', '1D', '1W', '1M', '1Y'].map(t => (
                                <button key={t} className={`px-3 py-1 rounded-lg text-xs font-bold ${t === '1D' ? 'bg-slate-700 text-white' : 'text-slate-500 hover:text-white'}`}>{t}</button>
                            ))}
                        </div>
                    </div>
                    <StockChart />
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                        {markets.map(m => (
                            <div key={m.symbol} className="bg-slate-800/50 p-4 rounded-xl border border-slate-800 hover:bg-slate-800 transition-colors cursor-pointer">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="font-bold text-slate-300">{m.symbol}</span>
                                    <span className={`text-xs font-bold ${m.change > 0 ? 'text-green-400' : 'text-red-400'}`}>{m.change > 0 ? '+' : ''}{m.change}%</span>
                                </div>
                                <p className="font-mono text-lg font-bold">${m.price.toLocaleString()}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* Right Col */}
            <div className="space-y-8">
                
                {/* Quick Transfer */}
                <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800">
                    <h3 className="text-xl font-bold mb-6">Quick Transfer</h3>
                    <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                        <button className="flex-shrink-0 w-16 h-16 rounded-full border-2 border-dashed border-slate-700 flex items-center justify-center text-slate-500 hover:border-purple-500 hover:text-purple-500 transition-colors">
                            <span className="text-2xl">+</span>
                        </button>
                        {contacts.map(c => (
                            <div key={c.id} className="flex-shrink-0 text-center group cursor-pointer">
                                <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center font-bold text-xl mb-2 group-hover:ring-2 ring-purple-500 transition-all relative">
                                    {c.avatar}
                                    <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-slate-900" />
                                </div>
                                <span className="text-xs font-bold text-slate-400">{c.name}</span>
                            </div>
                        ))}
                    </div>
                    
                    <div className="mt-6">
                        <div className="relative mb-4">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                            <input type="number" placeholder="0.00" className="w-full bg-slate-800 rounded-2xl py-4 pl-10 pr-4 font-mono text-2xl font-bold bg-transparent border border-slate-700 focus:border-purple-500 outline-none transition-colors" />
                        </div>
                        <button onClick={() => alert('Transfer Successful!')} className="w-full bg-gradient-to-r from-purple-600 to-pink-600 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-purple-500/20 transition-all active:scale-95 flex items-center justify-center gap-2">
                            Send Money <Send size={20} />
                        </button>
                    </div>
                </div>

                {/* Recent Transactions */}
                <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xl font-bold">Recent Activity</h3>
                        <button className="p-2 hover:bg-slate-800 rounded-lg"><MoreHorizontal size={20} className="text-slate-400" /></button>
                    </div>
                    <div className="space-y-4">
                        {transactions.map(tx => (
                            <div key={tx.id} className="flex items-center justify-between group cursor-pointer hover:bg-slate-800/50 p-3 rounded-xl transition-colors -mx-3">
                                <div className="flex items-center gap-4">
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${tx.type === 'income' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                                        {tx.type === 'income' ? <ArrowDownLeft size={20} /> : <ArrowUpRight size={20} />}
                                    </div>
                                    <div>
                                        <p className="font-bold">{tx.title}</p>
                                        <p className="text-xs text-slate-500 font-bold">{tx.category} • {tx.date}</p>
                                    </div>
                                </div>
                                <span className={`font-mono font-bold ${tx.type === 'income' ? 'text-green-500' : 'text-slate-200'}`}>
                                    {tx.type === 'income' ? '+' : ''}{tx.amount.toLocaleString(undefined, {style: 'currency', currency: 'USD'})}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Savings Goal */}
                <div className="bg-gradient-to-br from-emerald-900 to-slate-900 rounded-3xl p-8 border border-emerald-900/50 relative overflow-hidden">
                     <div className="flex justify-between items-start mb-4 relative z-10">
                        <div>
                            <p className="text-emerald-400 font-bold text-xs uppercase tracking-widest mb-1">Savings Goal</p>
                            <h3 className="text-xl font-bold">New Tesla</h3>
                        </div>
                        <Target className="text-emerald-400" />
                     </div>
                     <div className="flex items-end gap-2 mb-4 relative z-10">
                        <span className="text-3xl font-black">$45,000</span>
                        <span className="text-slate-400 font-bold text-sm mb-1">/ $85,000</span>
                     </div>
                     <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden relative z-10">
                        <div className="bg-emerald-500 w-[52%] h-full rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                     </div>
                     {/* Background Glow */}
                     <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-500/20 blur-3xl rounded-full" />
                </div>

            </div>
        </div>
      </div>
      <PrototypeBanner />
    </div>
  );
}


