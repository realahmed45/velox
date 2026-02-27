import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Gift, Zap, TrendingUp, Star, ChevronRight, ShoppingBag, Users } from 'lucide-react';
import { loadLoyaltyData } from '../../utils/storage';

export default function LoyaltyRewards() {
  const [loyalty, setLoyalty] = useState({
    points: 1250,
    tier: 'Silver',
    history: [
      { id: 1, action: 'Order #LH-2024-X1', points: +850, date: '2024-12-01' },
      { id: 2, action: 'Review Reward', points: +100, date: '2024-12-05' },
      { id: 3, action: 'Referral Bonus', points: +300, date: '2024-12-10' }
    ]
  });

  useEffect(() => {
    const saved = loadLoyaltyData();
    if (saved) setLoyalty(saved);
  }, []);

  const tiers = [
    { name: 'Bronze', points: 0, color: 'text-amber-600', bg: 'bg-amber-50', icon: '🥉' },
    { name: 'Silver', points: 1000, color: 'text-gray-500', bg: 'bg-gray-50', icon: '🥈' },
    { name: 'Gold', points: 5000, color: 'text-yellow-600', bg: 'bg-yellow-50', icon: '🥇' },
    { name: 'Platinum', points: 15000, color: 'text-purple-600', bg: 'bg-purple-50', icon: '💎' }
  ];

  const currentTier = tiers.findLast(t => loyalty.points >= t.points);
  const nextTier = tiers[tiers.indexOf(currentTier) + 1];
  const progress = nextTier ? ((loyalty.points - currentTier.points) / (nextTier.points - currentTier.points)) * 100 : 100;

  return (
    <div className="space-y-8">
      {/* Tier Status Card */}
      <div className="bg-gray-900 rounded-[40px] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
        
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">{currentTier.icon}</span>
              <div>
                <h3 className="text-2xl font-black text-purple-400">{currentTier.name} Member</h3>
                <p className="text-sm font-medium text-gray-400">Exclusive Benefits Active</p>
              </div>
            </div>
            
            <div className="mb-8">
              <p className="text-6xl font-black mb-2">{loyalty.points.toLocaleString()}</p>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Available Reward Points</p>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-xs font-black uppercase tracking-widest text-gray-400">
                <span>{currentTier.name}</span>
                <span>{nextTier ? `Next: ${nextTier.name}` : 'MAX TIER'}</span>
              </div>
              <div className="h-3 bg-white/10 rounded-full overflow-hidden p-1 border border-white/5">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                />
              </div>
              {nextTier && (
                <p className="text-[10px] font-bold text-purple-300">
                  Earn {(nextTier.points - loyalty.points).toLocaleString()} more points for {nextTier.name} tier
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/10">
              <Zap size={24} className="text-yellow-400 mb-4" />
              <h4 className="font-bold text-sm mb-1">2x Points</h4>
              <p className="text-[10px] text-gray-400">On all bedroom items</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/10">
              <Gift size={24} className="text-pink-400 mb-4" />
              <h4 className="font-bold text-sm mb-1">$50 Reward</h4>
              <p className="text-[10px] text-gray-400">Redeem for 5000 pts</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/10">
              <Users size={24} className="text-blue-400 mb-4" />
              <h4 className="font-bold text-sm mb-1">Priority</h4>
              <p className="text-[10px] text-gray-400">Exclusive early access</p>
            </div>
            <div className="bg-purple-600 rounded-3xl p-6 shadow-lg shadow-purple-900/40 cursor-pointer hover:bg-purple-500 transition-colors">
              <Star size={24} className="text-white mb-4" />
              <h4 className="font-bold text-sm mb-1 text-white">Redeem</h4>
              <p className="text-[10px] text-purple-200">View all rewards</p>
            </div>
          </div>
        </div>
      </div>

      {/* Activity and Benefits */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm">
          <h4 className="text-lg font-black text-gray-900 mb-6 flex items-center gap-2">
            <TrendingUp size={20} className="text-purple-600" />
            Points Activity
          </h4>
          <div className="space-y-4">
            {loyalty.history.map((item) => (
              <div key={item.id} className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    item.points > 0 ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                  }`}>
                    {item.points > 0 ? '+' : ''}{item.points}
                  </div>
                  <div>
                    <p className="font-bold text-sm text-gray-900">{item.action}</p>
                    <p className="text-[10px] font-bold text-gray-400">{item.date}</p>
                  </div>
                </div>
                <ChevronRight size={16} className="text-gray-300" />
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-3 text-xs font-black text-purple-600 uppercase tracking-widest hover:bg-purple-50 rounded-xl transition-all">
            See All History
          </button>
        </div>

        <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm">
          <h4 className="text-lg font-black text-gray-900 mb-6 flex items-center gap-2">
            <Gift size={20} className="text-pink-600" />
            Fast Ways to Earn
          </h4>
          <div className="space-y-6">
            <div className="flex gap-4 group cursor-pointer">
              <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-all transition-colors">
                <ShoppingBag size={20} />
              </div>
              <div>
                <h5 className="font-bold text-sm">Shop Furniture</h5>
                <p className="text-[10px] text-gray-400">Earn 1 point for every $1 spent</p>
              </div>
            </div>
            <div className="flex gap-4 group cursor-pointer">
              <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-all">
                <Star size={20} />
              </div>
              <div>
                <h5 className="font-bold text-sm">Leave a Review</h5>
                <p className="text-[10px] text-gray-400">Earn 50 points per verified review</p>
              </div>
            </div>
            <div className="flex gap-4 group cursor-pointer">
              <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-all">
                <Users size={20} />
              </div>
              <div>
                <h5 className="font-bold text-sm">Refer a Friend</h5>
                <p className="text-[10px] text-gray-400">Earn 500 points on their first order</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
