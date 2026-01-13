// Validation utilities for forms and data

export const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const validatePhone = (phone) => {
  return /^[\d\s\-+()]{10,}$/.test(phone);
};

export const validateZipCode = (zip) => {
  return /^\d{5}(-\d{4})?$/.test(zip);
};

export const validateCardNumber = (cardNumber) => {
  const digits = cardNumber.replace(/\s+/g, '');
  return /^\d{16}$/.test(digits);
};

export const validateCVV = (cvv) => {
  return /^\d{3,4}$/.test(cvv);
};

export const validateExpiryDate = (month, year) => {
  if (!month || !year) return false;
  const now = new Date();
  const currentMonth = now.getMonth() + 1;
  const currentYear = now.getFullYear() % 100;
  
  const m = parseInt(month, 10);
  const y = parseInt(year, 10);
  
  if (y < currentYear) return false;
  if (y === currentYear && m < currentMonth) return false;
  return true;
};

export const detectCardType = (cardNumber) => {
  const re = {
    visa: /^4/,
    mastercard: /^5[1-5]/,
    amex: /^3[47]/,
    discover: /^6(?:011|5)/
  };
  
  if (re.visa.test(cardNumber)) return 'Visa';
  if (re.mastercard.test(cardNumber)) return 'Mastercard';
  if (re.amex.test(cardNumber)) return 'Amex';
  if (re.discover.test(cardNumber)) return 'Discover';
  return 'Unknown';
};

export const formatCardNumber = (input) => {
  const v = input.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
  const matches = v.match(/\d{4,16}/g);
  const match = (matches && matches[0]) || '';
  const parts = [];
  
  for (let i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4));
  }
  
  if (parts.length) {
    return parts.join(' ');
  } else {
    return input;
  }
};
