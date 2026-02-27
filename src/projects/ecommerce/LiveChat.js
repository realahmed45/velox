import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send } from 'lucide-react';
import { saveChatHistory, loadChatHistory } from '../../utils/storage';

const QUICK_RESPONSES = [
  "Where is my order?",
  "Shipping policy",
  "Returns",
  "Help with AR",
  "Product stock"
];

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const history = loadChatHistory();
    if (history.length > 0) {
      setMessages(history);
    } else {
      setMessages([{
        id: 1,
        sender: 'agent',
        text: 'Hello. Welcome to LuxeFurn Concierge. How may we assist you today?',
        timestamp: new Date().toISOString()
      }]);
    }
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      saveChatHistory(messages);
      scrollToBottom();
    }
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSend = (text) => {
    if (!text.trim()) return;

    const userMessage = {
      id: Date.now(),
      sender: 'user',
      text: text,
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    
    setIsTyping(true);
    setTimeout(() => {
      const responses = {
        "Where is my order?": "You can track your order via the 'Track Order' link in your confirmation email or the order tracking page.",
        "Shipping policy": "Complimentary shipping is available for all orders exceeding $500.",
        "Returns": "We offer a 30-day return window for all items in original condition.",
        "Help with AR": "The AR feature allows you to visualize pieces in your space. Use a mobile device for optimal performance.",
        "Product stock": "Our inventory is updated in real-time. If an item is listed, it is available for immediate dispatch."
      };

      const agentMessage = {
        id: Date.now() + 1,
        sender: 'agent',
        text: responses[text] || "Thank you for your inquiry. A concierge associate will be with you momentarily.",
        timestamp: new Date().toISOString()
      };

      setMessages(prev => [...prev, agentMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-0 right-8 z-[100] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="mb-6 w-[360px] h-[600px] bg-white shadow-2xl border border-gray-100 flex flex-col"
          >
            {/* Header */}
            <div className="bg-zinc-950 text-white p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <div>
                  <h3 className="font-bold text-sm tracking-widest uppercase">Concierge</h3>
                  <p className="text-[10px] text-zinc-400">Available 24/7</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:text-gray-300"><X size={18} /></button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-white">
              <div className="mt-[30px] pt-8 border-t border-gray-50"> 
                 {/* Top spacer to meet '30px from top' request inside scroll view if meant for content start */}
              </div>
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 text-sm leading-relaxed ${
                    msg.sender === 'user' 
                      ? 'bg-zinc-900 text-white' 
                      : 'bg-white text-zinc-800 border border-gray-200'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-transparent p-2">
                    <span className="text-xs text-zinc-400 tracking-widest uppercase animate-pulse">Agent typing...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            <div className="px-6 py-3 bg-white border-t border-gray-100 overflow-x-auto whitespace-nowrap hide-scrollbar">
              {QUICK_RESPONSES.map(q => (
                <button
                  key={q}
                  onClick={() => handleSend(q)}
                  className="inline-block mr-2 px-4 py-2 bg-gray-100 hover:bg-zinc-900 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest text-zinc-600"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-200">
              <div className="flex gap-0 border border-gray-200 focus-within:border-zinc-900 transition-colors">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend(inputText)}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-3 text-sm outline-none placeholder:text-gray-400"
                />
                <button 
                  onClick={() => handleSend(inputText)}
                  className="px-6 bg-transparent text-zinc-900 hover:bg-zinc-50 transition-colors"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-auto px-6 h-14 bg-zinc-950 text-white shadow-2xl flex items-center gap-3 transition-all hover:bg-zinc-800 ${isOpen ? 'rounded-t-none' : ''}`}
      >
        {isOpen ? <X size={20} /> : <MessageSquare size={20} />}
        <span className="font-bold text-xs uppercase tracking-[0.2em] hidden md:inline ml-1">
          {isOpen ? 'Close' : 'Concierge'}
        </span>
      </button>
    </div>
  );
}
