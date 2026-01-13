import React from 'react';
import { X, Star, Heart, Camera, ShoppingCart } from 'lucide-react';
import ReviewSystem from './ReviewSystem';

export default function ProductDetailModal({ 
  product, 
  isOpen,
  onClose, 
  onAddToCart, 
  onToggleWishlist, 
  onOpenAR,
  isWishlisted 
}) {
  if (!product || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 bg-white rounded-full shadow-lg z-10 hover:bg-gray-100 transition-colors"
        >
          <X size={24} />
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-8">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full rounded-2xl shadow-inner bg-gray-50"
            />
            <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
              {product.images.slice(1).map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${product.name} ${i + 2}`}
                  className="w-20 h-20 rounded-lg object-cover cursor-pointer hover:opacity-75 transition-opacity flex-shrink-0"
                />
              ))}
            </div>
          </div>
          <div className="p-8">
            <p className="text-sm text-purple-600 font-bold mb-2 uppercase">{product.category}</p>
            <h2 className="text-4xl font-black mb-2 text-gray-900">{product.name}</h2>
            <p className="text-gray-600 mb-4 font-medium">{product.brand}</p>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={`${
                      i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-bold text-gray-900">{product.rating}</span>
              <span className="text-sm text-gray-500">({product.reviewCount} reviews)</span>
            </div>
            <div className="mb-6">
              <p className="text-5xl font-black text-gray-900">${product.price.toLocaleString()}</p>
              {product.originalPrice && (
                <p className="text-xl text-gray-400 line-through">${product.originalPrice.toLocaleString()}</p>
              )}
            </div>
            <p className="text-gray-700 leading-relaxed mb-6 font-medium">{product.description}</p>
            <div className="mb-6">
              <h3 className="font-black mb-3 text-gray-900 uppercase tracking-widest text-xs">Key Features:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-purple-600"></div>
                    </div>
                    <span className="text-sm text-gray-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-4">
              <button
                onClick={() => onAddToCart(product)}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-black text-lg uppercase tracking-wider hover:from-purple-700 hover:to-pink-700 transition-all shadow-xl flex items-center justify-center gap-3"
              >
                <ShoppingCart size={22} />
                Add to Cart - ${product.price.toLocaleString()}
              </button>
              
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => onToggleWishlist(product.id)}
                  className="w-full border-2 border-purple-600 text-purple-600 py-3 rounded-xl font-bold hover:bg-purple-50 transition-all flex items-center justify-center gap-2"
                >
                  <Heart size={20} className={isWishlisted ? "fill-purple-600" : ""} />
                  {isWishlisted ? "Saved" : "Save to Wishlist"}
                </button>
                <button
                  onClick={() => onOpenAR(product)}
                  className="w-full border-2 border-gray-900 text-gray-900 py-3 rounded-xl font-bold hover:bg-gray-900 hover:text-white transition-all flex items-center justify-center gap-2"
                >
                  <Camera size={20} /> AR View
                </button>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-8 mt-12">
              <ReviewSystem product={product} reviews={product.reviews} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
