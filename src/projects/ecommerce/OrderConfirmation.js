import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function OrderConfirmation({ order, onTrack }) {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (!order) return null;

  return (
    <div className="text-center py-10 md:py-20">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", damping: 12, stiffness: 200 }}
        className="w-24 h-24 bg-zinc-950 text-white flex items-center justify-center mx-auto mb-10"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}

        className="text-5xl font-serif font-medium text-zinc-950 mb-6"
      >
        Thank You for Your Order!
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-gray-500 text-lg mb-8 max-w-md mx-auto"
      >
        We've received your order and we're getting it ready. You'll receive a confirmation email shortly at <span className="text-gray-900 font-bold">{order.shippingInfo.email}</span>.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-zinc-50 p-10 max-w-lg mx-auto border border-gray-200 text-left mb-12"
      >
        <div className="flex justify-between items-center mb-6 pb-6 border-b border-gray-200">
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Order Number</p>
            <p className="text-xl font-black text-gray-900">{order.orderNumber}</p>
          </div>
          <div className="text-right">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Estimated Delivery</p>
            <p className="text-lg font-bold text-zinc-900">{order.tracking.estimatedDelivery}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center py-2">
            <span className="text-gray-600">Total Charged</span>
            <span className="text-xl font-bold text-gray-900">${order.totals.total.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="text-gray-600">Payment Method</span>
            <span className="flex items-center gap-2 font-medium">
              <span>{order.paymentMethod.icon}</span> {order.paymentMethod.name}
            </span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex flex-col md:flex-row gap-4 justify-center"
      >
        <button
          onClick={() => window.location.reload()}
          className="bg-zinc-950 text-white font-bold px-10 py-5 uppercase tracking-[0.2em] text-xs hover:bg-zinc-800 transition-all"
        >
          Return to Shop
        </button>
        <button
          onClick={onTrack}
          className="bg-white text-zinc-950 border border-zinc-200 font-bold px-10 py-5 uppercase tracking-[0.2em] text-xs hover:bg-zinc-50 transition-all hover:border-zinc-950"
        >
          Track Your Order
        </button>
      </motion.div>
    </div>
  );
}
