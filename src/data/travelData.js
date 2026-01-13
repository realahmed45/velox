// Travel agency data
export const packages = [
  {
    id: 1,
    destination: "Paris, France",
    days: 7,
    nights: 6,
    price: 2499,
    originalPrice: 2999,
    rating: 4.9,
    reviews: 342,
    images: [
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
      "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800",
      "https://images.unsplash.com/photo-1549144511-f099e773c147?w=800"
    ],
    description: "Experience the romance and culture of Paris. Visit iconic landmarks, enjoy world-class cuisine, and immerse yourself in art and history.",
    includes: ["Round-trip flights", "4-star hotel accommodation", "Daily breakfast", "Seine River cruise", "Louvre Museum tickets", "Airport transfers"],
    itinerary: [
      { day: 1, title: "Arrival & Eiffel Tower", activities: ["Airport pickup", "Hotel check-in", "Evening Eiffel Tower visit"] },
      { day: 2, title: "Louvre & Notre-Dame", activities: ["Louvre Museum tour", "Lunch at café", "Notre-Dame Cathedral", "Latin Quarter walk"] },
      { day: 3, title: "Versailles Day Trip", activities: ["Palace of Versailles", "Gardens tour", "Return to Paris"] }
    ],
    availability: "Year-round",
    bestTime: "April-October",
    travelStyle: "Culture & History"
  },
  {
    id: 2,
    destination: "Tokyo, Japan",
    days: 10,
    nights: 9,
    price: 3299,
    originalPrice: 3899,
    rating: 4.8,
    reviews: 256,
    images: [
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800",
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800"
    ],
    description: "Discover the perfect blend of ancient traditions and modern technology in Japan's vibrant capital.",
    includes: ["Round-trip flights", "Luxury hotel", "Daily breakfast", "JR Rail Pass", "Guided city tours", "Traditional tea ceremony"],
    itinerary: [
      { day: 1, title: "Arrival Tokyo", activities: ["Airport pickup", "Hotel check-in", "Shibuya exploration"] },
      { day: 2, title: "Cultural Tokyo", activities: ["Senso-ji Temple", "Imperial Palace", "Ginza shopping"] }
    ],
    availability: "Year-round",
    bestTime: "March-May, September-November",
    travelStyle: "Culture & Adventure"
  },
  {
    id: 3,
    destination: "Bali, Indonesia",
    days: 5,
    nights: 4,
    price: 1899,
    originalPrice: 2299,
    rating: 4.9,
    reviews: 428,
    images: [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
      "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=800"
    ],
    description: "Tropical paradise with pristine beaches, lush rice terraces, and vibrant culture.",
    includes: ["Round-trip flights", "Beach resort stay", "All meals included", "Spa treatment", "Temple tours", "Surfing lessons"],
    itinerary: [
      { day: 1, title: "Beach Arrival", activities: ["Resort check-in", "Beach relaxation", "Welcome dinner"] },
      { day: 2, title: "Temple Tour", activities: ["Tanah Lot Temple", "Rice terrace visit", "Traditional dance show"] }
    ],
    availability: "Year-round",
    bestTime: "April-October",
    travelStyle: "Beach & Relaxation"
  },
  {
    id: 4,
    destination: "New York, USA",
    days: 4,
    nights: 3,
    price: 1599,
    originalPrice: 1899,
    rating: 4.7,
    reviews: 512,
    images: [
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800",
      "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?w=800"
    ],
    description: "The city that never sleeps! Experience Broadway, world-class museums, and iconic skyline.",
    includes: ["Round-trip flights", "Midtown hotel", "Daily breakfast", "Broadway show tickets", "City tour", "Empire State Building"],
    itinerary: [
      { day: 1, title: "Manhattan Icons", activities: ["Times Square", "Central Park", "5th Avenue shopping"] },
      { day: 2, title: "Culture Day", activities: ["Metropolitan Museum", "Broadway show", "Dinner in Little Italy"] }
    ],
    availability: "Year-round",
    bestTime: "September-November, April-June",
    travelStyle: "City & Culture"
  }
];
