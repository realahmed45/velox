import React from 'react';
import { shippingMethods } from '../../data/furnitureData';

export default function ShippingMethodSelector({ selected, onSelect, onNext, onBack }) {
  const handleSelect = (method) => {
    onSelect(method);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Shipping Method</h2>
        <span className="text-sm text-gray-500">Select your preferred delivery option</span>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {shippingMethods.map((method) => (
          <div
            key={method.id}
            onClick={() => handleSelect(method)}
            className={`p-6 border-2 cursor-pointer transition-all duration-300 flex items-center justify-between ${
              selected?.id === method.id 
                ? 'border-zinc-950 bg-zinc-50' 
                : 'border-gray-100 hover:border-zinc-300 hover:bg-white'
            }`}
          >
            <div className="flex items-center gap-4">
              <div className={`w-6 h-6 border flex items-center justify-center ${
                selected?.id === method.id ? 'border-zinc-950 bg-zinc-950' : 'border-gray-300'
              }`}>
                {selected?.id === method.id && <div className="w-2 h-2 bg-white" />}
              </div>
              <div>
                <h3 className="font-bold text-gray-900">{method.name}</h3>
                <p className="text-sm text-gray-500">{method.days}</p>
                {method.locations && (
                  <p className="text-xs text-purple-600 mt-1">
                    Pickup available: {method.locations.join(', ')}
                  </p>
                )}
              </div>
            </div>
            <div className="text-right">
              <span className="text-lg font-bold text-zinc-900 uppercase tracking-wide">
                {method.price === 0 ? 'COMPLIMENTARY' : `$${method.price}`}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-4 pt-6">
        <button
          onClick={onBack}
          className="flex-1 border border-gray-200 text-zinc-900 font-bold py-4 uppercase tracking-[0.2em] text-xs hover:bg-zinc-50 transition-all"
        >
          Go Back
        </button>
        <button
          onClick={onNext}
          disabled={!selected}
          className={`flex-1 font-bold py-4 uppercase tracking-[0.2em] text-xs transition-all ${
            selected 
              ? 'bg-zinc-950 hover:bg-zinc-800 text-white' 
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}
