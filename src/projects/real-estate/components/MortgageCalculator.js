import React, { useState, useEffect } from 'react';
import { DollarSign, PieChart } from 'lucide-react';

export default function MortgageCalculator({ price }) {
  const [downPayment, setDownPayment] = useState(20);
  const [interestRate, setInterestRate] = useState(6.5);
  const [term, setTerm] = useState(30);
  const [taxRate, setTaxRate] = useState(1.2);
  
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  useEffect(() => {
    const principal = price * (1 - downPayment / 100);
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = term * 12;
    
    // Mortgage Payment Formula
    const mortgage = principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
    // Monthly Tax
    const tax = (price * (taxRate / 100)) / 12;
    
    setMonthlyPayment(mortgage + tax);
  }, [price, downPayment, interestRate, term, taxRate]);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
          <DollarSign size={20} />
        </div>
        <h3 className="text-xl font-bold text-gray-900">Mortgage Estimator</h3>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 space-y-6">
          <div>
            <label className="flex justify-between text-sm font-bold text-gray-500 mb-2">
                <span>Down Payment</span>
                <span className="text-emerald-600">{downPayment}%</span>
            </label>
            <input 
                type="range" min="0" max="80" value={downPayment} 
                onChange={e => setDownPayment(Number(e.target.value))}
                className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-emerald-600"
            />
          </div>

          <div>
             <label className="flex justify-between text-sm font-bold text-gray-500 mb-2">
                <span>Interest Rate</span>
                <span className="text-emerald-600">{interestRate}%</span>
            </label>
            <input 
                type="range" min="1" max="15" step="0.1" value={interestRate} 
                onChange={e => setInterestRate(Number(e.target.value))}
                className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-emerald-600"
            />
          </div>

          <div>
             <label className="flex justify-between text-sm font-bold text-gray-500 mb-2">
                <span>Loan Term</span>
                <span className="text-emerald-600">{term} Years</span>
            </label>
            <div className="flex gap-2">
                {[15, 20, 30].map(yr => (
                    <button 
                        key={yr}
                        onClick={() => setTerm(yr)}
                        className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${term === yr ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/30' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                    >
                        {yr} Years
                    </button>
                ))}
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center bg-emerald-900 rounded-2xl p-6 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
                <PieChart size={120} />
            </div>
            <p className="text-emerald-200 text-sm font-medium mb-1 uppercase tracking-widest">Est. Monthly Payment</p>
            <p className="text-4xl font-black mb-4">${monthlyPayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
            <div className="w-full space-y-2 text-xs text-emerald-100">
                <div className="flex justify-between border-b border-emerald-800 pb-1">
                    <span>Principal & Interest</span>
                    <span>${(monthlyPayment * 0.7).toFixed(0)}</span>
                </div>
                <div className="flex justify-between border-b border-emerald-800 pb-1">
                    <span>Property Tax</span>
                    <span>${(monthlyPayment * 0.2).toFixed(0)}</span>
                </div>
                <div className="flex justify-between">
                    <span>Home Insurance</span>
                    <span>${(monthlyPayment * 0.1).toFixed(0)}</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
