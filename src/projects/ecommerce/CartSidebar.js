import React from 'react';
import { X, ShoppingCart, Minus, Plus } from 'lucide-react';

export default function CartSidebar({ 
  isOpen, 
  onClose, 
  cart, 
  cartCount, 
  cartTotal, 
  onUpdateQuantity, 
  onRemoveItem,
  onCheckout
}) {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50" onClick={onClose} />
      <div className="fixed right-0 top-0 h-screen w-full max-w-md bg-white flex flex-col border-l border-zinc-100 z-50 shadow-2xl">
        <div className="p-8 border-b border-gray-100 flex justify-between items-center bg-zinc-950 text-white">
          <div>
            <h3 className="text-xl font-bold uppercase tracking-widest">Your Bag</h3>
            <p className="text-xs text-zinc-400 mt-1 font-medium tracking-wide">{cartCount} ITEMS · ${cartTotal.toFixed(2)}</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-zinc-800 rounded-none transition-colors">
            <X size={20} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-8">
          {cart.length === 0 ? (
            <div className="text-center mt-20">
              <ShoppingCart size={48} className="mx-auto text-zinc-200 mb-6" />
              <p className="text-zinc-500 font-medium uppercase tracking-widest text-xs">Your bag is empty</p>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-6">
                  <img src={item.images[0]} alt={item.name} className="w-24 h-24 object-cover rounded-md border border-gray-200" />
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-bold text-zinc-900 text-sm uppercase tracking-wide line-clamp-2 pr-4">{item.name}</h4>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-zinc-300 hover:text-zinc-900 transition-colors"
                        >
                          <X size={16} />
                        </button>
                      </div>
                      <p className="text-sm text-zinc-500 mt-1">${item.price}</p>
                    </div>
                    
                    <div className="flex items-center gap-4 mt-4">
                      <div className="flex items-center border border-gray-200">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="p-2 hover:bg-zinc-50 transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-8 text-center text-xs font-bold">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="p-2 hover:bg-zinc-50 transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {cart.length > 0 && (
          <div className="border-t border-gray-100 p-8 space-y-6 bg-zinc-50">
            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-zinc-500">
                <span className="uppercase tracking-wider text-xs">Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-zinc-500">
                <span className="uppercase tracking-wider text-xs">Shipping</span>
                <span className="text-green-600 font-medium">{cartTotal >= 500 ? "COMPLIMENTARY" : "$49.00"}</span>
              </div>
              <div className="border-t border-gray-200 pt-4 flex justify-between text-lg font-bold text-zinc-900">
                <span className="uppercase tracking-widest">Total</span>
                <span>${(cartTotal + (cartTotal >= 500 ? 0 : 49)).toFixed(2)}</span>
              </div>
            </div>
            <button 
              onClick={onCheckout}
              className="w-full bg-zinc-950 text-white py-4 font-bold uppercase tracking-[0.2em] text-xs hover:bg-zinc-800 transition-all"
            >
              Checkout Now
            </button>
          </div>
        )}
      </div>
    </>
  );
}
