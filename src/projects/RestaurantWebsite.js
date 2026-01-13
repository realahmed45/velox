import React, { useState } from "react";
import { Clock, Users, Phone, MapPin, Calendar, Star } from "lucide-react";

export default function RestaurantWebsite() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [reservationDate, setReservationDate] = useState("");
  const [guests, setGuests] = useState(2);

  const menuItems = [
    { id: 1, name: "Truffle Risotto", category: "Mains", price: 28, rating: 4.9, image: "from-yellow-600 to-amber-600" },
    { id: 2, name: "Grilled Salmon", category: "Mains", price: 32, rating: 4.8, image: "from-orange-600 to-red-600" },
    { id: 3, name: "Caesar Salad", category: "Appetizers", price: 14, rating: 4.7, image: "from-green-600 to-emerald-600" },
    { id: 4, name: "Tiramisu", category: "Desserts", price: 12, rating: 4.9, image: "from-purple-600 to-pink-600" },
    { id: 5, name: "Lobster Bisque", category: "Appetizers", price: 18, rating: 4.8, image: "from-red-600 to-rose-600" },
    { id: 6, name: "Chocolate Lava Cake", category: "Desserts", price: 14, rating: 5.0, image: "from-amber-600 to-orange-600" },
  ];

  const categories = ["All", "Appetizers", "Mains", "Desserts"];
  const filteredMenu = selectedCategory === "All" ? menuItems : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full flex items-center justify-center text-center px-6">
          <div>
            <h1 className="text-7xl md:text-9xl font-black mb-6 tracking-tight">Savoria</h1>
            <p className="text-2xl md:text-3xl font-light mb-8 opacity-90">Fine Dining Experience</p>
            <button className="bg-white text-gray-900 px-12 py-4 font-black uppercase tracking-wider hover:bg-gray-100 transition-all">
              Reserve a Table
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 w-full bg-gradient-to-t from-gray-50 h-32" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* About Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div>
            <h2 className="text-5xl font-black mb-6">Our Story</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Since 1985, Savoria has been crafting unforgettable dining experiences with ingredients sourced from local farms and international markets.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our chefs blend traditional techniques with modern innovation to create dishes that delight all senses.
            </p>
          </div>
          <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl h-96" />
        </div>

        {/* Menu Section */}
        <div className="mb-24">
          <h2 className="text-5xl font-black mb-8 text-center">Our Menu</h2>
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-3 font-bold uppercase text-sm transition-all ${
                  selectedCategory === cat
                    ? "bg-orange-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMenu.map((item) => (
              <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group">
                <div className={`h-48 bg-gradient-to-br ${item.image}`} />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-black text-xl">{item.name}</h3>
                    <span className="text-2xl font-black text-orange-600">${item.price}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{item.category}</p>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={`${
                          i < Math.floor(item.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-2">({item.rating})</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reservation Form */}
        <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl p-12 text-white">
          <h2 className="text-4xl font-black mb-8 text-center">Make a Reservation</h2>
          <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="date"
              value={reservationDate}
              onChange={(e) => setReservationDate(e.target.value)}
              className="px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 font-semibold"
              placeholder="Select Date"
            />
            <select
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <option key={num} value={num} className="text-gray-900">
                  {num} {num === 1 ? "Guest" : "Guests"}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Your Name"
              className="px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 font-semibold"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 font-semibold"
            />
            <button className="md:col-span-2 bg-white text-orange-600 px-12 py-4 font-black uppercase tracking-wider hover:bg-gray-100 transition-all">
              Confirm Reservation
            </button>
          </div>
        </div>

        {/* Location */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-black mb-6">Visit Us</h2>
            <div className="space-y-4 text-lg">
              <div className="flex items-center gap-3">
                <MapPin className="text-orange-600" />
                <span>123 Gourmet Street, Culinary District</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-orange-600" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="text-orange-600" />
                <span>Mon-Sun: 5:00 PM - 11:00 PM</span>
              </div>
            </div>
          </div>
          <div className="bg-gray-300 rounded-2xl h-80" />
        </div>
      </div>
    </div>
  );
}
