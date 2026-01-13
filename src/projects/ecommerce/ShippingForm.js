import React, { useState } from 'react';
import { validateEmail, validatePhone } from '../../utils/validation';

export default function ShippingForm({ data, onUpdate, onNext }) {
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    onUpdate({ ...data, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  const validate = () => {
    const newErrors = {};
    if (!data.firstName) newErrors.firstName = 'First name is required';
    if (!data.lastName) newErrors.lastName = 'Last name is required';
    if (!data.email) newErrors.email = 'Email is required';
    else if (!validateEmail(data.email)) newErrors.email = 'Invalid email address';
    if (!data.phone) newErrors.phone = 'Phone number is required';
    else if (!validatePhone(data.phone)) newErrors.phone = 'Invalid phone number';
    if (!data.address) newErrors.address = 'Address is required';
    if (!data.city) newErrors.city = 'City is required';
    if (!data.state) newErrors.state = 'State is required';
    if (!data.zip) newErrors.zip = 'ZIP code is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) onNext();
  };

  const inputClass = (name) => `w-full px-4 py-3 bg-gray-50 border ${
    errors[name] ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-zinc-900 focus:bg-white'
  } outline-none transition-all placeholder:text-gray-400 font-medium`;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
        <h2 className="text-2xl font-bold text-zinc-950 uppercase tracking-widest">Shipping Details</h2>
        <span className="text-xs text-gray-500 font-medium tracking-wide">* Required</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
          <input
            type="text"
            name="firstName"
            value={data.firstName}
            onChange={handleChange}
            placeholder="John"
            className={inputClass('firstName')}
          />
          {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
          <input
            type="text"
            name="lastName"
            value={data.lastName}
            onChange={handleChange}
            placeholder="Doe"
            className={inputClass('lastName')}
          />
          {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className={inputClass('email')}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
          <input
            type="tel"
            name="phone"
            value={data.phone}
            onChange={handleChange}
            placeholder="(555) 000-0000"
            className={inputClass('phone')}
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Street Address *</label>
        <input
          type="text"
          name="address"
          value={data.address}
          onChange={handleChange}
          placeholder="123 Luxury Lane"
          className={inputClass('address')}
        />
        {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">City *</label>
          <input
            type="text"
            name="city"
            value={data.city}
            onChange={handleChange}
            placeholder="Los Angeles"
            className={inputClass('city')}
          />
          {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">State *</label>
          <input
            type="text"
            name="state"
            value={data.state}
            onChange={handleChange}
            placeholder="CA"
            className={inputClass('state')}
          />
          {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">ZIP Code *</label>
          <input
            type="text"
            name="zip"
            value={data.zip}
            onChange={handleChange}
            placeholder="90001"
            className={inputClass('zip')}
          />
          {errors.zip && <p className="text-red-500 text-xs mt-1">{errors.zip}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Delivery Instructions (Optional)</label>
        <textarea
          name="instructions"
          value={data.instructions}
          onChange={handleChange}
          placeholder="e.g. Leave at front door"
          rows="3"
          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-zinc-900 outline-none transition-all placeholder:text-gray-400 font-medium"
        ></textarea>
      </div>

      <div className="pt-6">
        <button
          type="submit"
          className="w-full bg-zinc-950 hover:bg-zinc-800 text-white font-bold py-4 uppercase tracking-[0.2em] text-xs transition-all"
        >
          Continue to Method
        </button>
      </div>
    </form>
  );
}
