import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ThumbsUp, ThumbsDown, Camera, Check, Filter, TrendingUp } from 'lucide-react';

export default function ReviewSystem({ product, reviews }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [showForm, setShowForm] = useState(false);
  const [helpfulReviews, setHelpfulReviews] = useState({});

  const avgRating = product.rating;
  const ratingCounts = { 5: 75, 4: 15, 3: 5, 2: 3, 1: 2 }; // Sample distribution

  const toggleHelpful = (id) => {
    setHelpfulReviews(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="space-y-12">
      {/* Header & Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 bg-gray-50 rounded-3xl border border-gray-100">
        <div className="text-center md:text-left">
          <h3 className="text-lg font-black text-gray-900 mb-2">Customer Reviews</h3>
          <div className="flex items-end gap-3 mb-4 justify-center md:justify-start">
            <span className="text-5xl font-black text-gray-900">{avgRating}</span>
            <div className="mb-1">
              <div className="flex mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className={i < Math.floor(avgRating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} />
                ))}
              </div>
              <p className="text-sm font-bold text-gray-500">Based on {product.reviewCount} reviews</p>
            </div>
          </div>
          <button 
            onClick={() => setShowForm(!showForm)}
            className="w-full md:w-auto px-6 py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-purple-600 transition-all shadow-xl"
          >
            Write a Review
          </button>
        </div>

        <div className="space-y-3">
          {[5, 4, 3, 2, 1].map((star) => (
            <div key={star} className="flex items-center gap-3">
              <span className="text-sm font-bold text-gray-600 w-4">{star}</span>
              <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${ratingCounts[star]}%` }}
                  className="h-full bg-yellow-400"
                />
              </div>
              <span className="text-xs font-bold text-gray-400 w-8">{ratingCounts[star]}%</span>
            </div>
          ))}
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 flex flex-col justify-center">
          <div className="flex items-center gap-2 text-green-600 mb-2">
            <TrendingUp size={20} />
            <span className="font-black text-sm uppercase">94% Recommended</span>
          </div>
          <p className="text-xs text-gray-500 font-medium">Most customers found this product fits their space perfectly and the assembly was straightforward.</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex justify-between items-center border-b border-gray-100 pb-6">
        <div className="flex gap-4">
          {['All', '5 Star', '4 Star', 'Verified'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeFilter === filter 
                  ? 'bg-purple-600 text-white shadow-lg' 
                  : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 text-xs font-bold text-gray-500">
          <Filter size={14} />
          Sort by: <span className="text-gray-900 cursor-pointer hover:text-purple-600 uppercase tracking-wider">Most Relevant</span>
        </div>
      </div>

      {/* Review List */}
      <div className="space-y-8">
        {(reviews || []).map((review) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            key={review.id} 
            className="group"
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-16 h-16 bg-gradient-to-tr from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center font-black text-purple-600 flex-shrink-0">
                {review.author.charAt(0)}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-black text-gray-900">{review.author}</h4>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} className={i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} />
                        ))}
                      </div>
                      {review.verified && (
                        <div className="flex items-center gap-1 text-[10px] font-black text-green-600 uppercase bg-green-50 px-2 py-0.5 rounded">
                          <Check size={10} strokeWidth={3} /> Verified Purchase
                        </div>
                      )}
                    </div>
                  </div>
                  <span className="text-xs font-bold text-gray-400">{review.date}</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">{review.text}</p>
                <div className="flex gap-4">
                  <button 
                    onClick={() => toggleHelpful(review.id)}
                    className={`flex items-center gap-2 text-xs font-bold transition-colors ${
                      helpfulReviews[review.id] ? 'text-purple-600' : 'text-gray-400 hover:text-gray-900'
                    }`}
                  >
                    <ThumbsUp size={14} /> Helpful
                  </button>
                  <button className="flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-gray-900 transition-colors">
                    <ThumbsDown size={14} /> Report
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
