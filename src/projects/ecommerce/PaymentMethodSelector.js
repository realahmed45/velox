import React, { useState } from 'react';
import { paymentMethods } from '../../data/furnitureData';
import { formatCardNumber, detectCardType, validateCardNumber, validateCVV, validateExpiryDate } from '../../utils/validation';

export default function PaymentMethodSelector({ selected, onSelect, onNext, onBack }) {
  const [cardData, setCardData] = useState({ number: '', expiry: '', cvv: '', name: '' });
  const [errors, setErrors] = useState({});

  const handleSelect = (method) => {
    onSelect(method);
  };

  const handleCardChange = (e) => {
    let { name, value } = e.target;
    if (name === 'number') value = formatCardNumber(value);
    setCardData({ ...cardData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  const validateCard = () => {
    if (selected?.id !== 'card') return true;
    
    const newErrors = {};
    if (!validateCardNumber(cardData.number)) newErrors.number = 'Invalid card number';
    if (!validateExpiryDate(cardData.expiry.split('/')[0], cardData.expiry.split('/')[1])) newErrors.expiry = 'Invalid expiry date (MM/YY)';
    if (!validateCVV(cardData.cvv)) newErrors.cvv = 'Invalid CVV';
    if (!cardData.name) newErrors.name = 'Name on card is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    if (validateCard()) onNext();
  };

  const inputClass = (name) => `w-full px-4 py-3 bg-gray-50 border ${
    errors[name] ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-zinc-900 focus:bg-white'
  } outline-none transition-all placeholder:text-gray-400 font-medium`;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Payment Method</h2>
        <span className="text-sm text-gray-500">Secure encrypted payment</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            onClick={() => handleSelect(method)}
            className={`p-6 border-2 cursor-pointer transition-all duration-300 flex items-center gap-4 ${
              selected?.id === method.id 
                ? 'border-zinc-950 bg-zinc-50' 
                : 'border-gray-100 hover:border-zinc-300 hover:bg-white'
            }`}
          >
            <span className="text-3xl">{method.icon}</span>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900">{method.name}</h3>
              <p className="text-xs text-gray-500">{method.description}</p>
            </div>
            <div className={`w-6 h-6 border flex items-center justify-center ${
              selected?.id === method.id ? 'border-zinc-950 bg-zinc-950' : 'border-gray-300'
            }`}>
              {selected?.id === method.id && <div className="w-2 h-2 bg-white" />}
            </div>
          </div>
        ))}
      </div>

      {selected?.id === 'card' && (
        <div className="mt-8 p-8 bg-zinc-50 border border-gray-100 space-y-6">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-bold text-zinc-950 uppercase tracking-widest text-sm">Card Details</h4>
            <div className="flex gap-2">
              <span className="text-xs font-bold text-gray-400">VISA</span>
              <span className="text-xs font-bold text-gray-400">MASTERCARD</span>
              <span className="text-xs font-bold text-gray-400">AMEX</span>
            </div>
          </div>
          
          <div>
            <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">Card Number</label>
            <div className="relative">
              <input
                type="text"
                name="number"
                value={cardData.number}
                onChange={handleCardChange}
                placeholder="0000 0000 0000 0000"
                maxLength="19"
                className={inputClass('number')}
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold text-purple-600">
                {detectCardType(cardData.number)}
              </span>
            </div>
            {errors.number && <p className="text-red-500 text-xs mt-1">{errors.number}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">Expiry (MM/YY)</label>
              <input
                type="text"
                name="expiry"
                value={cardData.expiry}
                onChange={handleCardChange}
                placeholder="MM/YY"
                maxLength="5"
                className={inputClass('expiry')}
              />
              {errors.expiry && <p className="text-red-500 text-xs mt-1">{errors.expiry}</p>}
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">CVV</label>
              <input
                type="password"
                name="cvv"
                value={cardData.cvv}
                onChange={handleCardChange}
                placeholder="***"
                maxLength="4"
                className={inputClass('cvv')}
              />
              {errors.cvv && <p className="text-red-500 text-xs mt-1">{errors.cvv}</p>}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">Name on Card</label>
            <input
              type="text"
              name="name"
              value={cardData.name}
              onChange={handleCardChange}
              placeholder="JOHN DOE"
              className={inputClass('name')}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>
        </div>
      )}

      {selected?.id && selected.id !== 'card' && (
        <div className="mt-8 p-12 text-center bg-zinc-50 border border-dashed border-zinc-300">
          <p className="text-gray-500">You will be redirected to {selected.name} to complete your purchase securely.</p>
        </div>
      )}

      <div className="flex gap-4 pt-6">
        <button
          onClick={onBack}
          className="flex-1 border border-gray-200 text-zinc-900 font-bold py-4 uppercase tracking-[0.2em] text-xs hover:bg-zinc-50 transition-all"
        >
          Go Back
        </button>
        <button
          onClick={handleContinue}
          disabled={!selected}
          className={`flex-1 font-bold py-4 uppercase tracking-[0.2em] text-xs transition-all ${
            selected 
              ? 'bg-zinc-950 hover:bg-zinc-800 text-white' 
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
        >
          Review Order
        </button>
      </div>
    </div>
  );
}
