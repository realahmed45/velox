import React from 'react';
import { motion } from 'framer-motion';
import { Package, Truck, CheckCircle, Clock, MapPin, Search } from 'lucide-react';

export default function OrderTracking({ orderNumber, onBack }) {
  // Mock tracking data based on order number
  const timeline = [
    { status: 'Order Placed', date: 'Oct 24, 2024 - 10:30 AM', icon: <Package size={20} />, completed: true },
    { status: 'Processing', date: 'Oct 24, 2024 - 2:15 PM', icon: <Clock size={20} />, completed: true },
    { status: 'Shipped', date: 'Oct 25, 2024 - 9:00 AM', icon: <Truck size={20} />, completed: true },
    { status: 'In Transit', date: 'Oct 26, 2024 - 8:45 AM', icon: <MapPin size={20} />, completed: false },
    { status: 'Delivered', date: 'Expected Oct 28, 2024', icon: <CheckCircle size={20} />, completed: false },
  ];

  return (
    <div className="max-w-2xl mx-auto p-6 md:p-12 bg-white rounded-[40px] shadow-2xl border border-gray-100">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h3 className="text-3xl font-black text-gray-900">Track Order</h3>
          <p className="text-sm font-bold text-purple-600 mt-1">Order #{orderNumber || 'LH-2024-X982'}</p>
        </div>
        <button 
          onClick={onBack}
          className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
        >
          <Search size={20} />
        </button>
      </div>

      <div className="space-y-0 relative">
        {/* Timeline Line */}
        <div className="absolute left-[27px] top-4 bottom-4 w-1 bg-gray-100 rounded-full" />
        
        {timeline.map((step, index) => (
          <div key={index} className="flex gap-6 pb-10 last:pb-0 relative group">
            <div className={`relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${
              step.completed ? 'bg-purple-600 text-white shadow-lg shadow-purple-200' : 'bg-gray-100 text-gray-400 group-hover:bg-gray-200'
            }`}>
              {step.icon}
            </div>
            <div className="flex-1 pt-2">
              <h4 className={`font-black text-lg transition-colors ${step.completed ? 'text-gray-900' : 'text-gray-400'}`}>
                {step.status}
              </h4>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">
                {step.date}
              </p>
              {step.status === 'In Transit' && !step.completed && (
                <div className="mt-4 p-4 bg-purple-50 rounded-2xl border border-purple-100">
                  <p className="text-xs text-purple-700 font-bold">
                    Latest Update: Package arrived at local sorting facility in Los Angeles, CA.
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 pt-10 border-t border-gray-100 grid grid-cols-2 gap-6">
        <div className="bg-gray-50 p-6 rounded-3xl">
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Shipping Via</p>
          <p className="font-bold text-gray-900">LuxeHome Logistics</p>
          <p className="text-xs text-gray-500">Tracking: LH982736455</p>
        </div>
        <div className="bg-gray-50 p-6 rounded-3xl">
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Dest. Address</p>
          <p className="font-bold text-gray-900">123 Luxury Ln.</p>
          <p className="text-xs text-gray-500">Los Angeles, CA</p>
        </div>
      </div>
    </div>
  );
}
