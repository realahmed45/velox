import React from 'react';
import { ShoppingCart, Heart, ArrowRightLeft, Camera } from 'lucide-react';

export default function ProductCard({ 
  product, 
  onSelect, 
  onAddToCart, 
  onToggleWishlist, 
  onAddToCompare,
  onOpenAR,
  isWishlisted,
  isInCompare
}) {
  return (
    <div
      className="group bg-white border border-gray-100 hover:border-zinc-900 transition-all duration-300 cursor-pointer relative h-full flex flex-col"
      onClick={() => onSelect(product)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.discount > 0 && (
            <span className="bg-zinc-950 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5">
              -{product.discount}%
            </span>
          )}
          {product.bestSeller && (
            <span className="bg-white text-zinc-950 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5">
              Best Seller
            </span>
          )}
        </div>

        {/* Hover Actions */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-center gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenAR(product);
            }}
            className="flex-1 bg-white text-zinc-900 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
          >
            <Camera size={14} /> AR View
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddToCompare(product);
            }}
            className={`flex-1 py-3 text-[10px] font-black uppercase tracking-widest transition-colors flex items-center justify-center gap-2 ${
              isInCompare ? 'bg-zinc-900 text-white' : 'bg-white text-zinc-900 hover:bg-zinc-200'
            }`}
          >
            <ArrowRightLeft size={14} /> Compare
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="mb-4">
          <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2">{product.category}</p>
          <h3 className="font-serif text-lg leading-tight text-zinc-900 group-hover:underline decoration-1 underline-offset-4 mb-1">
            {product.name}
          </h3>
          <p className="text-xs text-zinc-500">{product.brand}</p>
        </div>

        <div className="mt-auto flex items-end justify-between border-t border-gray-50 pt-4">
          <div>
             {product.originalPrice && (
              <p className="text-xs text-zinc-400 line-through mb-1">${product.originalPrice}</p>
            )}
            <p className="text-lg font-medium text-zinc-900">${product.price}</p>
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleWishlist(product.id);
              }}
              className={`p-3 border transition-colors ${
                isWishlisted ? 'border-red-500 text-red-500' : 'border-gray-200 text-zinc-400 hover:border-zinc-900 hover:text-zinc-900'
              }`}
            >
              <Heart size={18} className={isWishlisted ? "fill-current" : ""} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onAddToCart(product);
              }}
              className="p-3 bg-zinc-950 text-white hover:bg-zinc-800 transition-colors"
            >
              <ShoppingCart size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
