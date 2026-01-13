import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRightLeft, Star, ShoppingCart, Check } from 'lucide-react';

export default function ProductComparison({ products, onRemove, onClear, onAddToCart }) {
  if (products.length === 0) return null;

  const specs = [
    { label: 'Category', key: 'category' },
    { label: 'Brand', key: 'brand' },
    { label: 'Materials', key: 'materials', type: 'list' },
    { label: 'Dimensions', key: 'dimensions' },
    { label: 'Weight', key: 'weight' },
    { label: 'Price', key: 'price', format: (v) => `$${v.toLocaleString()}` },
    { label: 'Rating', key: 'rating', type: 'rating' },
    { label: 'In Stock', key: 'inStock', type: 'boolean' }
  ];

  return (
    <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
      <div className="bg-gray-900 p-6 text-white flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-purple-600 rounded-lg">
            <ArrowRightLeft size={20} />
          </div>
          <div>
            <h3 className="font-bold text-lg">Product Comparison</h3>
            <p className="text-xs text-gray-400">Comparing {products.length} items</p>
          </div>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={onClear}
            className="text-sm font-bold text-gray-400 hover:text-white transition-colors"
          >
            Clear All
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="p-6 text-left text-xs font-black text-gray-400 uppercase tracking-widest w-48 bg-gray-50/50">Details</th>
              {products.map((p) => (
                <th key={p.id} className="p-6 min-w-[250px] relative group">
                  <button 
                    onClick={() => onRemove(p.id)}
                    className="absolute top-2 right-2 p-1.5 bg-gray-100 text-gray-400 rounded-full hover:bg-red-50 hover:text-red-500 transition-all opacity-0 group-hover:opacity-100"
                  >
                    <X size={14} />
                  </button>
                  <div className="flex flex-col items-center gap-4">
                    <img src={p.images[0]} alt={p.name} className="w-24 h-24 object-cover rounded-xl shadow-lg" />
                    <div className="text-center">
                      <h4 className="font-black text-gray-900 text-sm line-clamp-2 mb-1">{p.name}</h4>
                      <p className="text-2xl font-black text-purple-600">${p.price}</p>
                    </div>
                    <button 
                      onClick={() => onAddToCart(p)}
                      className="w-full py-2 bg-gray-900 text-white text-xs font-bold rounded-lg hover:bg-purple-600 transition-all flex items-center justify-center gap-2"
                    >
                      <ShoppingCart size={14} /> Add to Cart
                    </button>
                  </div>
                </th>
              ))}
              {/* Placeholder for empty comparison slots */}
              {[...Array(Math.max(0, 4 - products.length))].map((_, i) => (
                <th key={`empty-${i}`} className="p-6 min-w-[250px] bg-gray-50/20">
                  <div className="h-40 border-2 border-dashed border-gray-200 rounded-2xl flex items-center justify-center">
                    <p className="text-xs font-bold text-gray-300">Add product to compare</p>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {specs.map((spec) => (
              <tr key={spec.label} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                <td className="p-6 text-xs font-bold text-gray-500 bg-gray-50/50">{spec.label}</td>
                {products.map((p) => (
                  <td key={`${p.id}-${spec.key}`} className="p-6 text-sm font-semibold text-gray-900 text-center">
                    {spec.type === 'list' ? (
                      <div className="flex flex-wrap gap-1 justify-center">
                        {p[spec.key].map((item, idx) => (
                          <span key={idx} className="px-2 py-0.5 bg-gray-100 rounded text-[10px]">{item}</span>
                        ))}
                      </div>
                    ) : spec.type === 'rating' ? (
                      <div className="flex items-center justify-center gap-1">
                        <Star size={14} className="fill-yellow-400 text-yellow-400" />
                        <span>{p[spec.key]}</span>
                      </div>
                    ) : spec.type === 'boolean' ? (
                      <div className="flex justify-center">
                        {p[spec.key] ? <Check className="text-green-500" size={18} /> : <X className="text-red-500" size={18} />}
                      </div>
                    ) : (
                      spec.format ? spec.format(p[spec.key]) : p[spec.key]
                    )}
                  </td>
                ))}
                {[...Array(Math.max(0, 4 - products.length))].map((_, i) => (
                  <td key={`empty-td-${i}`} className="p-6 bg-gray-50/10"></td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="p-6 bg-gray-50 flex justify-center gap-4">
        <button className="px-6 py-2 bg-white border border-gray-200 rounded-xl text-xs font-bold text-gray-600 hover:bg-gray-100 transition-all flex items-center gap-2">
          Share Comparison
        </button>
        <button className="px-6 py-2 bg-white border border-gray-200 rounded-xl text-xs font-bold text-gray-600 hover:bg-gray-100 transition-all flex items-center gap-2">
          Save as PDF
        </button>
      </div>
    </div>
  );
}
