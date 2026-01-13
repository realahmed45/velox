import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Maximize, RotateCcw, Camera, X, Smartphone, Layers, Move } from 'lucide-react';

export default function ARPreview({ product, isOpen, onClose }) {
  const [isCalibrated, setIsCalibrated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setLoading(true);
      const timer = setTimeout(() => setLoading(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col">
      {/* AR Viewport Simulation */}
      <div className="relative flex-1 bg-gray-900 overflow-hidden">
        {/* Mock Camera Feed */}
        <div className="absolute inset-0 opacity-40">
           <img 
             src="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1600" 
             alt="Living Room AR" 
             className="w-full h-full object-cover"
           />
        </div>

        {/* 3D Model Simulation Overlay */}
        {!loading && (
          <AnimatePresence>
            <motion.div 
              initial={{ opacity: 0, scale: 0.5, y: 100 }}
              animate={{ opacity: 1, scale: 0.9, y: 0 }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <div className="relative">
                {/* 3D Furniture Silhouette/Shadow */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-64 h-20 bg-black/40 blur-3xl rounded-full" />
                <img 
                  src={product.images[0]} 
                  alt={product.name} 
                  className="w-80 md:w-[500px] h-auto object-contain drop-shadow-2xl relative z-10"
                />
                
                {/* Calibration Highlights */}
                {isCalibrated && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 border-4 border-purple-500/50 rounded-3xl"
                  />
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        )}

        {/* Loading/Calibration Overlay */}
        {loading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm z-20">
            <div className="w-20 h-20 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mb-6" />
            <h3 className="text-white text-xl font-black uppercase tracking-widest">Initializing AR...</h3>
            <p className="text-gray-400 mt-2">Point your device at a flat surface</p>
          </div>
        )}

        {/* UI Controls */}
        <div className="absolute top-0 inset-x-0 p-6 flex justify-between items-start z-30">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
            <h4 className="text-white font-black text-sm">{product.name}</h4>
            <p className="text-gray-400 text-[10px] uppercase font-bold tracking-widest">{product.dimensions}</p>
          </div>
          <button 
            onClick={onClose}
            className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white border border-white/20 hover:bg-white/20"
          >
            <X size={24} />
          </button>
        </div>

        <div className="absolute bottom-10 inset-x-0 flex justify-center gap-6 z-30">
          <button className="flex flex-col items-center gap-2 group">
            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-purple-600 group-hover:border-purple-600 transition-all">
              <RotateCcw size={24} />
            </div>
            <span className="text-[10px] font-black text-white uppercase tracking-widest">Rotate</span>
          </button>
          <button 
            onClick={() => setIsCalibrated(!isCalibrated)}
            className="flex flex-col items-center gap-2 group"
          >
            <div className={`w-20 h-20 rounded-full ${isCalibrated ? 'bg-purple-600 border-purple-400' : 'bg-white/10 border-white/20'} backdrop-blur-md border-4 flex items-center justify-center text-white transition-all`}>
              <Smartphone size={32} />
            </div>
            <span className="text-[10px] font-black text-white uppercase tracking-widest">Capture</span>
          </button>
          <button className="flex flex-col items-center gap-2 group">
            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-purple-600 group-hover:border-purple-600 transition-all">
              <Move size={24} />
            </div>
            <span className="text-[10px] font-black text-white uppercase tracking-widest">Position</span>
          </button>
        </div>

        {/* Info Box */}
        <div className="absolute bottom-32 left-8 z-30">
          <div className="bg-black/50 backdrop-blur-md rounded-2xl p-4 border border-white/10 max-w-[200px]">
             <div className="flex items-center gap-2 text-purple-400 mb-2">
               <Maximize size={16} />
               <span className="text-xs font-black uppercase">Real-Scale</span>
             </div>
             <p className="text-[10px] text-gray-400 font-medium">This item is displayed at 1:1 scale relative to your room dimensions.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
