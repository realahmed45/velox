// LocalStorage utility functions for e-commerce data persistence

const STORAGE_KEYS = {
  CART: 'luxehome_cart',
  WISHLIST: 'luxehome_wishlist',
  ORDERS: 'luxehome_orders',
  USER: 'luxehome_user',
  LOYALTY: 'luxehome_loyalty',
  CHAT_HISTORY: 'luxehome_chat_history',
  COMPARISON: 'luxehome_comparison'
};

const save = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.error(`Error saving to localStorage [${key}]:`, e);
  }
};

const load = (key, defaultValue = null) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (e) {
    console.error(`Error loading from localStorage [${key}]:`, e);
    return defaultValue;
  }
};

const remove = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (e) {
    console.error(`Error removing from localStorage [${key}]:`, e);
  }
};

// Cart
export const saveCart = (cartItems) => save(STORAGE_KEYS.CART, cartItems);
export const loadCart = () => load(STORAGE_KEYS.CART, []);
export const clearCart = () => remove(STORAGE_KEYS.CART);

// Wishlist
export const saveWishlist = (items) => save(STORAGE_KEYS.WISHLIST, items);
export const loadWishlist = () => load(STORAGE_KEYS.WISHLIST, []);

// Orders
export const saveOrder = (order) => {
  const orders = load(STORAGE_KEYS.ORDERS, []);
  orders.unshift(order); // Add new order to top
  save(STORAGE_KEYS.ORDERS, orders);
};
export const loadOrders = () => load(STORAGE_KEYS.ORDERS, []);
export const getOrder = (orderId) => {
  const orders = loadOrders();
  return orders.find(o => o.orderNumber === orderId);
};

// User
export const saveUserData = (user) => save(STORAGE_KEYS.USER, user);
export const loadUserData = () => load(STORAGE_KEYS.USER, null);

// Loyalty
export const saveLoyaltyData = (data) => save(STORAGE_KEYS.LOYALTY, data);
export const loadLoyaltyData = () => load(STORAGE_KEYS.LOYALTY, { points: 0, tier: 'Bronze', history: [] });

// Chat
export const saveChatHistory = (messages) => save(STORAGE_KEYS.CHAT_HISTORY, messages);
export const loadChatHistory = () => load(STORAGE_KEYS.CHAT_HISTORY, []);

// Comparison
export const saveComparison = (products) => save(STORAGE_KEYS.COMPARISON, products);
export const loadComparison = () => load(STORAGE_KEYS.COMPARISON, []);
