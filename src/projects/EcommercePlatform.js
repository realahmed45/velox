import React, { useState, useEffect } from "react";
import { X, Sparkles, SlidersHorizontal, ChevronDown } from "lucide-react";
import { furnitureProducts } from "../data/furnitureData";
import CheckoutFlow from "./ecommerce/CheckoutFlow";
import LiveChat from "./ecommerce/LiveChat";
import ProductComparison from "./ecommerce/ProductComparison";
import ARPreview from "./ecommerce/ARPreview";
import LoyaltyRewards from "./ecommerce/LoyaltyRewards";
import Header from "./ecommerce/Header";
import ProductCard from "./ecommerce/ProductCard";
import CartSidebar from "./ecommerce/CartSidebar";
import ProductDetailModal from "./ecommerce/ProductDetailModal";
import OrderTracking from "./ecommerce/OrderTracking";
import { 
  saveCart, loadCart, saveWishlist, loadWishlist, 
  saveComparison, loadComparison 
} from "../utils/storage";
import PrototypeBanner from "../components/common/PrototypeBanner";

export default function EcommercePlatform() {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [sortBy, setSortBy] = useState("featured");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [compareList, setCompareList] = useState([]);
  const [isCompareOpen, setIsCompareOpen] = useState(false);
  const [isAROpen, setIsAROpen] = useState(false);
  const [isLoyaltyOpen, setIsLoyaltyOpen] = useState(false);
  const [trackingOrder, setTrackingOrder] = useState(null);
  const [selectedMaterial, setSelectedMaterial] = useState("All");

  const categories = ["All", "Living Room", "Bedroom", "Dining", "Office"];
  const materials = ["All", "Wood", "Fabric", "Leather", "Metal", "Glass"];

  // Initialize from storage
  useEffect(() => {
    const savedCart = loadCart();
    if (savedCart && savedCart.length > 0) setCart(savedCart);
    const savedWishlist = loadWishlist();
    if (savedWishlist && savedWishlist.length > 0) setWishlist(savedWishlist);
    const savedCompare = loadComparison();
    if (savedCompare && savedCompare.length > 0) setCompareList(savedCompare);
  }, []);

  // Prevent double scrollbar when checkout is open
  useEffect(() => {
    if (isCheckingOut) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isCheckingOut]);

  // Save to storage
  useEffect(() => { saveCart(cart); }, [cart]);
  useEffect(() => { saveWishlist(wishlist); }, [wishlist]);
  useEffect(() => { saveComparison(compareList); }, [compareList]);

  // Filter and sort products
  let filteredProducts = furnitureProducts.filter(p => {
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         p.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
    const matchesMaterial = selectedMaterial === "All" || p.materials.some(m => m.includes(selectedMaterial));
    return matchesCategory && matchesSearch && matchesPrice && matchesMaterial;
  });

  filteredProducts.sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "name") return a.name.localeCompare(b.name);
    return 0;
  });

  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    setCartOpen(true);
  };

  const removeFromCart = (productId) => setCart(cart.filter(item => item.id !== productId));

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      setCart(cart.map(item => item.id === productId ? { ...item, quantity: newQuantity } : item));
    }
  };

  const toggleWishlist = (productId) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter(id => id !== productId));
    } else {
      setWishlist([...wishlist, productId]);
    }
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900 selection:bg-zinc-900 selection:text-white">
      <Header 
        wishlistCount={wishlist.length}
        cartCount={cartCount}
        onToggleCart={() => setCartOpen(!cartOpen)}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onOpenLoyalty={() => setIsLoyaltyOpen(true)}
        onOpenCompare={() => setIsCompareOpen(true)}
        compareCount={compareList.length}
      />

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Editoral Hero */}
        <div className="relative h-[600px] mb-20 overflow-hidden bg-zinc-100 flex items-center">
           <img 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop" 
            alt="Hero Interior" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative z-10 max-w-4xl px-12 md:px-24 text-white">
            <span className="inline-block border border-white/30 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] mb-6 backdrop-blur-sm">
              Collection 2026
            </span>
            <h2 className="text-7xl md:text-9xl font-serif mb-8 leading-[0.9]">
              Art of<br/><span className="italic font-light">Living.</span>
            </h2>
            <p className="text-lg max-w-lg mb-10 font-light opacity-90 leading-relaxed border-l-2 border-white pl-6">
              Discover a curated selection of {furnitureProducts.length}+ bespoke pieces designed to elevate your sanctuary. 
            </p>
            <button className="bg-white text-zinc-950 px-10 py-5 font-black uppercase tracking-widest hover:bg-zinc-200 transition-colors">
              Explore Catalog
            </button>
          </div>
        </div>

        {/* Filters and Sort */}
        {/* Filters Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 border-y border-gray-100 py-6 gap-6">
          <div className="flex items-center gap-6">
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-zinc-600 transition-colors ${filtersOpen ? 'text-zinc-900' : 'text-zinc-400'}`}
            >
              <SlidersHorizontal size={16} /> Filter
            </button>
            <div className="h-4 w-px bg-gray-200"></div>
            <div className="flex gap-4 overflow-x-auto hide-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-all border-b-2 pb-1 ${
                    selectedCategory === cat
                      ? "text-zinc-900 border-zinc-900"
                      : "text-gray-400 border-transparent hover:text-gray-600"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
         
          <div className="relative group">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent text-xs font-bold uppercase tracking-widest appearance-none pr-8 outline-none cursor-pointer"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
            <ChevronDown className="absolute right-0 top-1/2 transform -translate-y-1/2 text-zinc-900 pointer-events-none" size={14} />
          </div>
        </div>

        {/* Advanced Filters */}
        {/* Expanded Filters Panel */}
        {filtersOpen && (
          <div className="bg-zinc-50 border border-gray-200 p-8 mb-12 grid grid-cols-1 md:grid-cols-3 gap-12 animate-in fade-in slide-in-from-top-4 duration-300">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest mb-6 text-zinc-900">Price Range</label>
              <input
                type="range" min="0" max="5000" step="100"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                className="w-full accent-zinc-900 h-1 bg-gray-200 appearance-none cursor-pointer"
              />
              <div className="flex justify-between mt-4 text-xs font-medium text-gray-500">
                <span>$0</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest mb-6 text-zinc-900">Materials</label>
              <div className="flex flex-wrap gap-3">
                {materials.map((mat) => (
                  <button
                    key={mat}
                    onClick={() => setSelectedMaterial(mat)}
                    className={`px-4 py-2 text-[10px] font-bold uppercase tracking-widest border transition-all ${
                      selectedMaterial === mat 
                        ? "bg-zinc-900 text-white border-zinc-900" 
                        : "bg-white text-gray-500 border-gray-200 hover:border-zinc-400"
                    }`}
                  >
                    {mat}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-end">
              <button
                onClick={() => {
                  setSelectedCategory("All"); setSelectedMaterial("All");
                  setPriceRange([0, 5000]); setSearchTerm("");
                }}
                className="w-full px-8 py-4 bg-white border border-gray-200 text-zinc-900 font-bold text-xs uppercase tracking-widest hover:bg-zinc-900 hover:text-white transition-all"
              >
                Clear All Filters
              </button>
            </div>
          </div>
        )}

        <div className="mb-8 flex justify-between items-center px-2">
          <p className="text-gray-900 font-black uppercase tracking-widest text-xs">{filteredProducts.length} masterpieces found</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id}
              product={product}
              onSelect={setSelectedProduct}
              onAddToCart={addToCart}
              onToggleWishlist={toggleWishlist}
              onAddToCompare={(p) => {
                if (compareList.length < 4 && !compareList.find(i => i.id === p.id)) {
                  setCompareList([...compareList, p]);
                }
              }}
              onOpenAR={(p) => { setSelectedProduct(p); setIsAROpen(true); }}
              isWishlisted={wishlist.includes(product.id)}
              isInCompare={!!compareList.find(i => i.id === product.id)}
            />
          ))}
        </div>
      </div>

      <ProductDetailModal 
        product={selectedProduct}
        isOpen={!!selectedProduct && !isAROpen}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={addToCart}
        onToggleWishlist={toggleWishlist}
        onOpenAR={(p) => setIsAROpen(true)}
        isWishlisted={selectedProduct ? wishlist.includes(selectedProduct.id) : false}
      />

      <CartSidebar 
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        cartCount={cartCount}
        cartTotal={cartTotal}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        onCheckout={() => { setCartOpen(false); setIsCheckingOut(true); }}
      />

      {isCheckingOut && (
        <div className="fixed inset-0 z-[60] bg-white overflow-y-auto">
          <div className="bg-gray-900 text-white py-5 px-8 flex justify-between items-center sticky top-0 z-10 shadow-2xl">
            <h2 className="text-2xl font-black uppercase tracking-widest">Secure Checkout</h2>
            <button onClick={() => setIsCheckingOut(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors"><X size={28} /></button>
          </div>
          <div className="py-12">
            <CheckoutFlow 
              cart={cart} 
              onBackToCart={() => setIsCheckingOut(false)} 
              onOrderComplete={() => setCart([])}
              onTrackOrder={(num) => {
                setIsCheckingOut(false);
                setTrackingOrder(num);
              }}
            />
          </div>
        </div>
      )}

      {/* Order Tracking Modal */}
      {trackingOrder && (
        <div className="fixed inset-0 z-[80] p-4 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setTrackingOrder(null)} />
          <div className="relative w-full max-w-2xl">
            <OrderTracking orderNumber={trackingOrder} onBack={() => setTrackingOrder(null)} />
          </div>
        </div>
      )}

      {isCompareOpen && (
        <div className="fixed inset-0 z-[70] p-4 md:p-8 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setIsCompareOpen(false)} />
          <div className="relative max-w-7xl w-full max-h-[90vh] overflow-y-auto">
            <ProductComparison 
              products={compareList} 
              onRemove={(id) => setCompareList(compareList.filter(p => p.id !== id))}
              onClear={() => setCompareList([])}
              onAddToCart={addToCart}
            />
          </div>
        </div>
      )}

      <ARPreview product={selectedProduct} isOpen={isAROpen} onClose={() => setIsAROpen(false)} />

      {isLoyaltyOpen && (
        <div className="fixed inset-0 z-[70] p-4 md:p-8 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setIsLoyaltyOpen(false)} />
          <div className="relative max-w-5xl w-full max-h-[90vh] overflow-y-auto bg-white rounded-[40px] shadow-2xl">
            <button onClick={() => setIsLoyaltyOpen(false)} className="absolute top-8 right-8 z-20 text-gray-400 hover:text-gray-900 transition-colors"><X size={28} /></button>
            <div className="p-2"><LoyaltyRewards /></div>
          </div>
        </div>
      )}

      <LiveChat />
      <PrototypeBanner />
    </div>
  );
}
