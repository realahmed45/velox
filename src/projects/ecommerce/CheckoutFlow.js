import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { saveOrder, clearCart } from '../../utils/storage';
import { calculateSubtotal, calculateTax, calculateShipping, calculateTotal, createOrderObject } from '../../utils/orderUtils';
import ShippingForm from './ShippingForm';
import ShippingMethodSelector from './ShippingMethodSelector';
import PaymentMethodSelector from './PaymentMethodSelector';
import OrderReview from './OrderReview';
import OrderConfirmation from './OrderConfirmation';

const STEPS = [
  { id: 'shipping', title: 'Shipping' },
  { id: 'method', title: 'Method' },
  { id: 'payment', title: 'Payment' },
  { id: 'review', title: 'Review' },
  { id: 'confirm', title: 'Confirm' }
];

export default function CheckoutFlow({ cart, onBackToCart, onOrderComplete, onTrackOrder }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [shippingInfo, setShippingInfo] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    address: '', city: '', state: '', zip: '', country: 'US',
    instructions: ''
  });
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [promoCode, setPromoCode] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [orderResult, setOrderResult] = useState(null);

  const subtotal = calculateSubtotal(cart);
  const discount = promoCode ? (promoCode.type === 'percentage' ? (subtotal * promoCode.discount / 100) : promoCode.discount) : 0;
  const shipping = selectedMethod ? selectedMethod.price : 0;
  const tax = calculateTax(subtotal - discount);
  const total = subtotal - discount + shipping + tax;

  const handleNext = () => setCurrentStep(prev => Math.min(prev + 1, STEPS.length - 1));
  const handleBack = () => {
    if (currentStep === 0) onBackToCart();
    else setCurrentStep(prev => prev - 1);
  };

  const handlePlaceOrder = async () => {
    setProcessing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const totals = { subtotal, discount, shipping, tax, total };
    const order = createOrderObject(cart, shippingInfo, selectedMethod, selectedPayment, totals);
    
    saveOrder(order);
    setOrderResult(order);
    setProcessing(false);
    setCurrentStep(4); // Move to Confirmation
    clearCart();
    if (onOrderComplete) onOrderComplete(order);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <ShippingForm data={shippingInfo} onUpdate={setShippingInfo} onNext={handleNext} />;
      case 1:
        return <ShippingMethodSelector selected={selectedMethod} onSelect={setSelectedMethod} onNext={handleNext} onBack={handleBack} />;
      case 2:
        return <PaymentMethodSelector selected={selectedPayment} onSelect={setSelectedPayment} onNext={handleNext} onBack={handleBack} />;
      case 3:
        return <OrderReview 
          cart={cart} 
          shippingInfo={shippingInfo} 
          shippingMethod={selectedMethod} 
          paymentMethod={selectedPayment} 
          totals={{ subtotal, discount, shipping, tax, total }}
          onPlaceOrder={handlePlaceOrder}
          onBack={handleBack}
          processing={processing}
        />;
      case 4:
        return <OrderConfirmation order={orderResult} onTrack={() => onTrackOrder(orderResult.orderNumber)} />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      {/* Progress Bar */}
      {currentStep < 4 && (
        <div className="mb-8 overflow-x-auto">
          <div className="flex justify-between items-center min-w-[500px] px-4">
            {STEPS.map((step, index) => (
              <React.Fragment key={step.id}>
                <div className="flex flex-col items-center relative z-10">
                  <div 
                    className={`w-8 h-8 flex items-center justify-center font-bold text-xs transition-all duration-300 border ${
                      index <= currentStep ? 'bg-zinc-950 text-white border-zinc-950' : 'bg-white text-gray-300 border-gray-200'
                    }`}
                  >
                    {index < currentStep ? '✓' : index + 1}
                  </div>
                  <span className={`text-[10px] uppercase tracking-widest mt-3 font-bold ${index <= currentStep ? 'text-zinc-950' : 'text-gray-300'}`}>
                    {step.title}
                  </span>
                </div>
                {index < STEPS.length - 1 && (
                  <div className="flex-1 h-px bg-gray-200 mx-4 -mt-6 relative">
                    <motion.div 
                      className="absolute left-0 top-0 h-full bg-zinc-950"
                      initial={{ width: 0 }}
                      animate={{ width: index < currentStep ? '100%' : '0%' }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}

      {/* Step Content */}
      <div className="bg-white border border-gray-100 shadow-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="p-6 md:p-10"
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
