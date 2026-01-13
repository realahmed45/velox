// Order and pricing utilities

export const generateOrderNumber = () => {
  const prefix = 'LH';
  const date = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `${prefix}-${date}-${random}`;
};

export const calculateSubtotal = (cartItems) => {
  return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
};

export const calculateTax = (subtotal) => {
  return subtotal * 0.08; // 8% sales tax
};

export const calculateShipping = (method, subtotal) => {
  if (!method) return 0;
  if (method.freeOver !== null && subtotal >= method.freeOver) return 0;
  return method.price;
};

export const calculateDiscount = (promoCode, subtotal) => {
  if (!promoCode) return 0;
  if (promoCode.type === 'percentage') {
    return subtotal * (promoCode.discount / 100);
  }
  if (promoCode.type === 'fixed') {
    return Math.min(promoCode.discount, subtotal);
  }
  return 0;
};

export const calculateTotal = (subtotal, tax, shipping, discount) => {
  return Math.max(0, subtotal + tax + shipping - discount);
};

export const generateTrackingNumber = () => {
  return '1Z' + Math.random().toString(36).substring(2, 10).toUpperCase() + Math.random().toString(10).substring(2, 10);
};

export const getEstimatedDelivery = (days) => {
  const now = new Date();
  const match = days.match(/\d+/);
  const d = match ? parseInt(match[0], 10) : 7;
  now.setDate(now.getDate() + d);
  return now.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
};

export const createOrderObject = (cart, shippingInfo, shippingMethod, paymentMethod, totals) => {
  return {
    orderNumber: generateOrderNumber(),
    date: new Date().toISOString(),
    status: 'Processing',
    items: cart,
    shippingInfo,
    shippingMethod,
    paymentMethod,
    totals,
    tracking: {
      number: generateTrackingNumber(),
      carrier: 'LuxeHome Express',
      estimatedDelivery: getEstimatedDelivery(shippingMethod.days),
      steps: [
        { status: 'Order Placed', date: new Date().toISOString(), completed: true },
        { status: 'Processing', date: null, completed: false },
        { status: 'Shipped', date: null, completed: false },
        { status: 'Delivered', date: null, completed: false }
      ]
    }
  };
};
