// Real estate property data with images
export const properties = [
  {
    id: 1,
    title: "Luxury Waterfront Villa",
    address: "1428 Ocean Drive",
    city: "Miami Beach",
    state: "FL",
    zip: "33139",
    price: 2500000,
    beds: 5,
    baths: 4,
    sqft: 4500,
    lotSize: "0.5 acres",
    yearBuilt: 2018,
    propertyType: "House",
    status: "For Sale",
    daysOnMarket: 14,
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
      "https://images.unsplash.com/photo-1628744876497-eb30460be9f6?w=800"
    ],
    description: "Stunning waterfront property with breathtaking ocean views. Features include gourmet kitchen, infinity pool, private dock, and smart home technology throughout.",
    features: ["Ocean View", "Pool", "Smart Home", "Gourmet Kitchen", "Private Dock", "3-Car Garage"],
    agent: { name: "Jessica Martinez", phone: "(305) 555-0123", email: "jessica@urbannest.com", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200" },
    virtualTour: "https://example.com/tour",
    neighborhood: {
      walkScore: 85,
      schools: [
        { name: "Miami Beach Elementary", rating: 9, distance: "0.5 mi" },
        { name: "Nautilus Middle School", rating: 8, distance: "1.2 mi" }
      ]
    }
  },
  {
    id: 2,
    title: "Modern Downtown Penthouse",
    address: "200 Park Avenue, Unit 4501",
    city: "New York",
    state: "NY",
    zip: "10166",
    price: 3200000,
    beds: 3,
    baths: 3,
    sqft: 2800,
    lotSize: "N/A",
    yearBuilt: 2020,
    propertyType: "Condo",
    status: "For Sale",
    daysOnMarket: 7,
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=800"
    ],
    description: "Breathtaking penthouse in the heart of Manhattan. Floor-to-ceiling windows, panoramic city views, chef's kitchen with  premium appliances, and concierge service.",
    features: ["City View", "Concierge", "Gym", "Rooftop Terrace", "Marble Countertops", "Wine Storage"],
    agent: { name: "Michael Chen", phone: "(212) 555-0198", email: "mchen@urbannest.com", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200" },
    virtualTour: "https://example.com/tour",
    neighborhood: {
      walkScore: 98,
      schools: [
        { name: "PS 59", rating: 7, distance: "0.3 mi" }
      ]
    }
  },
  {
    id: 3,
    title: "Charming Suburban Family Home",
    address: "842 Maple Street",
    city: "Portland",
    state: "OR",
    zip: "97202",
    price: 750000,
    beds: 4,
    baths: 3,
    sqft: 3200,
    lotSize: "0.25 acres",
    yearBuilt: 2015,
    propertyType: "House",
    status: "For Sale",
    daysOnMarket: 21,
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800"
    ],
    description: "Beautiful family home in desirable neighborhood. Updated kitchen, spacious backyard, hardwood floors, and walking distance to top-rated schools.",
    features: ["Hardwood Floors", "Updated Kitchen", "Backyard", "Home Office", "2-Car Garage"],
    agent: { name: "Sarah Williams", phone: "(503) 555-0142", email: "swilliams@urbannest.com", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200" },
    virtualTour: null,
    neighborhood: {
      walkScore: 72,
      schools: [
        { name: "Abernethy Elementary", rating: 10, distance: "0.4 mi" },
        { name: "Sellwood Middle School", rating: 9, distance: "0.8 mi" }
      ]
    }
  },
  {
    id: 4,
    title: "Stylish Urban Loft",
    address: "350 Mission Street, #22B",
    city: "San Francisco",
    state: "CA",
    zip: "94105",
    price: 1200000,
    beds: 2,
    baths: 2,
    sqft: 1600,
    lotSize: "N/A",
    yearBuilt: 2019,
    propertyType: "Condo",
    status: "For Sale",
    daysOnMarket: 3,
    images: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800"
    ],
    description: "Contemporary loft with exposed brick, high ceilings, and stunning bay views. Prime SOMA location with walkability to everything.",
    features: ["Bay View", "Exposed Brick", "High Ceilings", "Rooftop Deck", "In-Unit Laundry"],
    agent: { name: "David Lee", phone: "(415) 555-0176", email: "dlee@urbannest.com", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200" },
    virtualTour: "https://example.com/tour",
    neighborhood: {
      walkScore: 95,
      schools: [
        { name: "Bessie Carmichael Elementary", rating: 6, distance: "0.6 mi" }
      ]
    }
  }
];
