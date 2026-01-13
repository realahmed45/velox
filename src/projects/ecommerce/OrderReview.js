import React from 'react';

export default function OrderReview({ cart, shippingInfo, shippingMethod, paymentMethod, totals, onPlaceOrder, onBack, processing }) {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Review Your Order</h2>
        <span className="text-sm text-gray-500">Last step before confirmation</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Shipping Summary */}
          <div className="p-8 bg-white border border-gray-200">
            <div className="flex justify-between items-start mb-6 border-b border-gray-100 pb-4">
              <h3 className="font-bold text-gray-900 uppercase tracking-wider text-sm">Shipping Information</h3>
              <button onClick={onBack} className="text-purple-600 font-bold text-xs hover:underline">Edit</button>
            </div>
            <div className="text-sm text-gray-600 space-y-1">
              <p className="font-bold text-gray-900">{shippingInfo.firstName} {shippingInfo.lastName}</p>
              <p>{shippingInfo.address}</p>
              <p>{shippingInfo.city}, {shippingInfo.state} {shippingInfo.zip}</p>
              <p>{shippingInfo.phone}</p>
              <p className="mt-2 italic">Method: {shippingMethod?.name} ({shippingMethod?.days})</p>
            </div>
          </div>

          {/* Payment Summary */}
          <div className="p-8 bg-white border border-gray-200">
            <div className="flex justify-between items-start mb-6 border-b border-gray-100 pb-4">
               <h3 className="font-bold text-gray-900 uppercase tracking-widest text-sm">Payment Method</h3>
              <button onClick={onBack} className="text-purple-600 font-bold text-xs hover:underline">Edit</button>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">{paymentMethod?.icon}</span>
              <p className="text-sm font-bold text-gray-900">{paymentMethod?.name}</p>
            </div>
          </div>

          {/* Order Items */}
          <div className="space-y-4">
            <h3 className="font-bold text-gray-900 uppercase tracking-wider text-sm px-2">Order Items ({cart.length})</h3>
            <div className="max-h-[300px] overflow-y-auto pr-2 space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4 p-4 bg-zinc-50 border border-gray-100">
                  <div className="w-16 h-16 overflow-hidden flex-shrink-0 bg-gray-200">
                    <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-gray-900 text-sm truncate">{item.name}</h4>
                    <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900 text-sm">${(item.price * item.quantity).toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Order Totals Summary */}
        <div className="lg:col-span-1">
          <div className="bg-zinc-950 text-white p-8 sticky top-8 shadow-2xl">
            <h3 className="text-xl font-bold mb-8 uppercase tracking-widest border-b border-zinc-800 pb-4">Order Total</h3>
            
            <div className="space-y-4 text-sm mb-8 pb-8 border-b border-zinc-800">
              <div className="flex justify-between text-gray-400">
                <span>Subtotal</span>
                <span className="text-white font-medium">${totals.subtotal.toLocaleString()}</span>
              </div>
              {totals.discount > 0 && (
                <div className="flex justify-between text-green-400">
                  <span>Discount</span>
                  <span>-${totals.discount.toLocaleString()}</span>
                </div>
              )}
              <div className="flex justify-between text-gray-400">
                <span>Shipping</span>
                <span className="text-white font-medium">
                  {totals.shipping === 0 ? 'FREE' : `$${totals.shipping.toLocaleString()}`}
                </span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Estimated Tax</span>
                <span className="text-white font-medium">${totals.tax.toLocaleString()}</span>
              </div>
            </div>

            <div className="flex justify-between items-center mb-8">
              <span className="text-lg font-bold">Total</span>
              <span className="text-2xl font-bold text-purple-400">${totals.total.toLocaleString()}</span>
            </div>

            <button
              onClick={onPlaceOrder}
              disabled={processing}
              className={`w-full py-5 font-bold flex items-center justify-center gap-2 transition-all uppercase tracking-[0.2em] text-xs ${
                processing 
                  ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed' 
                  : 'bg-white text-zinc-950 hover:bg-zinc-200'
              }`}
            >
              {processing ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Processing...
                </>
              ) : (
                'Place Order Now'
              )}
            </button>
            <p className="text-[10px] text-gray-500 text-center mt-4">
              By placing your order, you agree to LuxeHome's 
              <span className="underline ml-1">Terms of Service</span> and 
              <span className="underline ml-1">Privacy Policy</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
