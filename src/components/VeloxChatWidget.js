import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';

export default function VeloxChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Peace! I am the Velox Intelligence Unit. How can I help you dominate your market with Chatbots today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const knowledgeBase = {
    "ecommerce": "E-commerce dominance requires a 4-pillar strategy: 1. WhatsApp Catalog Integration, 2. Abandoned Cart Recovery (automated reminders), 3. Instant Checkout via Chat, and 4. 24/7 Support. We architect all four.",
    "e-commerce": "For stores, we implement automated product discovery, direct-to-WhatsApp ordering, and real-time shipping updates. This reduces customer friction by 70%.",
    "catalog": "We sync your Shopify, WooCommerce, or custom database with WhatsApp Business Catalog so users can shop without leaving the app.",
    "pricing": "Our chatbot setup starts at Rs. 45,000 with a Rs. 4,500 monthly maintenance fee. We also offer Web artifacts starting at Rs. 35,000. Custom enterprise neural bots are priced after a strategic audit.",
    "whatsapp": "We specialize in WhatsApp Cloud API bots. Unlike basic 'Green Tick' bots, our systems have neural logic for sales, complex bookings, and multi-turn human-like conversations.",
    "telegram": "Telegram is ideal for high-velocity signal groups, crypto-ecosystems, and massive broadcast channels. We build bots that manage 100k+ members autonomously.",
    "services": "We provide AI Chatbot Ecosystems (WhatsApp, Telegram, Web, Instagram) and High-Performance Web Artifacts designed for the Pakistani market.",
    "contact": "You can reach our lead engineers via the 'Reach Out' section or directly on WhatsApp at +92 332 9945014.",
    "pakistan": "We are the leading unit for chatbot excellence in Pakistan, focusing on PKR pricing and local market conversion logic.",
    "checkout": "We automate the checkout process. The bot collects Name, Address, and Payment proof directly in the chat, syncing it instantly to your backend.",
    "cart": "Forgotten items? Our bots send personalized reminders to customers who abandoned their cart, recovering up to 25% of lost revenue.",
    "support": "Our bots handle 90% of common support tickets (where is my order?, return policy, etc.) instantly, escalating only complex issues to your human team.",
    "real estate": "For real estate, our bots qualify leads, share floor plans, and schedule site visits autonomously.",
    "healthcare": "Our medical bots handle patient triage, appointment scheduling, and prescription reminders with absolute precision.",
    "how to": "To automate your business, we first map your customer journey, then architect the logic using Python/n8n, and finally deploy the bot on your preferred channel (WhatsApp/Telegram).",
    "hello": "Peace! I am the Velox Intelligence Unit. Ask me about E-commerce bots, WhatsApp APIs, or PKR pricing.",
    "hi": "Hi there! Ready to dominate your market? I can explain how our chatbots can 10x your engagement.",
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setInput('');
    setIsTyping(true);

    // Simulate AI logic
    setTimeout(() => {
      let response = "That is an interesting inquiry regarding chatbot ecosystems. Our engineers specialize in bespoke logic for this. Would you like to discuss this on WhatsApp for a refined strategic proposal?";
      
      const lowerInput = userMessage.toLowerCase();
      
      // Better matching: prioritize longer matches
      const keys = Object.keys(knowledgeBase).sort((a, b) => b.length - a.length);
      for (const key of keys) {
        if (lowerInput.includes(key)) {
          response = knowledgeBase[key];
          break;
        }
      }

      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-24 right-6 z-[200] p-4 rounded-full shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95 ${isOpen ? 'bg-black text-[#FF6B00] rotate-90' : 'bg-[#FF6B00] text-white'}`}
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
        {!isOpen && <div className="absolute -top-1 -right-1 w-4 h-4 bg-black rounded-full border-2 border-white animate-bounce" />}
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-40 right-6 z-[200] w-[90vw] sm:w-[400px] h-[500px] bg-white border-2 border-black rounded-xl shadow-2xl flex flex-col overflow-hidden transition-all duration-500 transform ${isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95 pointer-events-none'}`}>
        {/* Header */}
        <div className="bg-black text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#FF6B00] rounded-lg">
              <Bot size={20} />
            </div>
            <div>
              <div className="text-xs font-black uppercase tracking-widest text-[#FF6B00]">Velox Intelligence</div>
              <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Active • v5.0</div>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-grow overflow-y-auto p-5 space-y-4 bg-gray-50">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-4 rounded-2xl text-sm font-medium leading-relaxed ${msg.role === 'user' ? 'bg-black text-white rounded-tr-none' : 'bg-white border border-gray-100 text-black shadow-sm rounded-tl-none'}`}>
                {msg.content}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white border border-gray-100 p-4 rounded-2xl rounded-tl-none flex gap-1 items-center">
                <div className="w-1 h-1 bg-gray-300 rounded-full animate-bounce" />
                <div className="w-1 h-1 bg-gray-300 rounded-full animate-bounce [animation-delay:0.2s]" />
                <div className="w-1 h-1 bg-gray-300 rounded-full animate-bounce [animation-delay:0.4s]" />
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="p-4 bg-white border-t border-gray-100">
          <div className="relative flex items-center">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Inquire about Chatbots..." 
              className="w-full bg-gray-50 border border-gray-200 rounded-full py-4 pl-6 pr-14 text-sm font-bold focus:outline-none focus:border-[#FF6B00] transition-colors"
            />
            <button 
              onClick={handleSend}
              className="absolute right-2 p-3 bg-black text-[#FF6B00] rounded-full hover:bg-[#FF6B00] hover:text-white transition-all shadow-lg"
            >
              <Send size={18} />
            </button>
          </div>
          <div className="mt-3 flex items-center justify-center gap-2">
            <Sparkles size={12} className="text-[#FF6B00]" />
            <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">Powered by Neural Processing</span>
          </div>
        </div>
      </div>
    </>
  );
}
