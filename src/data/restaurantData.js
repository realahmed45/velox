// Restaurant menu data with real food photos
export const menuItems = [
  {
    id: 1,
    name: "Truffle Risotto",
    category: "Mains",
    price: 28,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1476124369491-b78e6a1cf97a?w=800",
    description: "Creamy arborio rice with black truffle, parmesan, and fresh herbs",
    dietary: ["Vegetarian", "Gluten-Free"],
    allergens: ["Dairy"],
    spicy: 0,
    chefSpecial: true,
    ingredients: ["Arborio Rice", "Black Truffle", "Parmesan", "White Wine", "Vegetable Stock"]
  },
  {
    id: 2,
    name: "Grilled Atlantic Salmon",
    category: "Mains",
    price: 32,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800",
    description: "Fresh salmon fillet with lemon butter sauce, asparagus, and roasted potatoes",
    dietary: ["Pescatarian", "Gluten-Free"],
    allergens: ["Fish", "Dairy"],
    spicy: 0,
    chefSpecial: false,
    ingredients: ["Atlantic Salmon", "Asparagus", "Potatoes", "Lemon", "Butter"]
  },
  {
    id: 3,
    name: "Caesar Salad",
    category: "Appetizers",
    price: 14,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800",
    description: "Crisp romaine lettuce, house-made croutons, parmesan, classic caesar dressing",
    dietary: [],
    allergens: ["Dairy", "Gluten", "Eggs"],
    spicy: 0,
    chefSpecial: false,
    ingredients: ["Romaine Lettuce", "Croutons", "Parmesan", "Caesar Dressing"]
  },
  {
    id: 4,
    name: "Tiramisu",
    category: "Desserts",
    price: 12,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800",
    description: "Classic Italian dessert with espresso-soaked ladyfingers and mascarpone cream",
    dietary: ["Vegetarian"],
    allergens: ["Dairy", "Eggs", "Gluten"],
    spicy: 0,
    chefSpecial: true,
    ingredients: ["Mascarpone", "Ladyfingers", "Espresso", "Cocoa Powder"]
  },
  {
    id: 5,
    name: "Lobster Bisque",
    category: "Appetizers",
    price: 18,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800",
    description: "Rich and creamy lobster soup with cognac and fresh tarragon",
    dietary: ["Pescatarian"],
    allergens: ["Shellfish", "Dairy"],
    spicy: 0,
    chefSpecial: false,
    ingredients: ["Lobster", "Heavy Cream", "Cognac", "Tarragon", "Tomato"]
  },
  {
    id: 6,
    name: "Chocolate Lava Cake",
    category: "Desserts",
    price: 14,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=800",
    description: "Warm chocolate cake with molten center, vanilla ice cream, and berry compote",
    dietary: ["Vegetarian"],
    allergens: ["Dairy", "Eggs", "Gluten"],
    spicy: 0,
    chefSpecial: true,
    ingredients: ["Dark Chocolate", "Butter", "Eggs", "Flour", "Vanilla Ice Cream"]
  },
  {
    id: 7,
    name: "Filet Mignon",
    category: "Mains",
    price: 42,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800",
    description: "8oz premium beef tenderloin with red wine reduction and truffle mashed potatoes",
    dietary: [],
    allergens: ["Dairy"],
    spicy: 0,
    chefSpecial: true,
    ingredients: ["Beef Tenderloin", "Red Wine", "Potatoes", "Truffle Oil", "Thyme"]
  },
  {
    id: 8,
    name: "Margherita Pizza",
    category: "Mains",
    price: 18,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800",
    description: "Traditional Italian pizza with fresh mozzarella, basil, and San Marzano tomatoes",
    dietary: ["Vegetarian"],
    allergens: ["Dairy", "Gluten"],
    spicy: 0,
    chefSpecial: false,
    ingredients: ["Pizza Dough", "Mozzarella", "Tomatoes", "Basil", "Olive Oil"]
  },
  {
    id: 9,
    name: "Seared Scallops",
    category: "Appetizers",
    price: 22,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=800",
    description: "Pan-seared scallops with cauliflower puree and crispy pancetta",
    dietary: ["Pescatarian"],
    allergens: ["Shellfish"],
    spicy: 0,
    chefSpecial: false,
    ingredients: ["Sea Scallops", "Cauliflower", "Pancetta", "Lemon", "Chives"]
  },
  {
    id: 10,
    name: "Panna Cotta",
    category: "Desserts",
    price: 11,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800",
    description: "Silky vanilla panna cotta with mixed berry coulis",
    dietary: ["Vegetarian", "Gluten-Free"],
    allergens: ["Dairy"],
    spicy: 0,
    chefSpecial: false,
    ingredients: ["Heavy Cream", "Vanilla", "Gelatin", "Mixed Berries", "Sugar"]
  },
  {
    id: 11,
    name: "Chicken Piccata",
    category: "Mains",
    price: 24,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800",
    description: "Tender chicken breast in lemon caper sauce with angel hair pasta",
    dietary: [],
    allergens: ["Dairy", "Gluten"],
    spicy: 0,
    chefSpecial: false,
    ingredients: ["Chicken Breast", "Lemon", "Capers", "White Wine", "Pasta"]
  },
  {
    id: 12,
    name: "Caprese Salad",
    category: "Appetizers",
    price: 15,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=800",
    description: "Fresh mozzarella, heirloom tomatoes, basil, and balsamic glaze",
    dietary: ["Vegetarian", "Gluten-Free"],
    allergens: ["Dairy"],
    spicy: 0,
    chefSpecial: false,
    ingredients: ["Fresh Mozzarella", "Tomatoes", "Basil", "Balsamic", "Olive Oil"]
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Jennifer Martinez",
    rating: 5,
    text: "Absolutely exceptional dining experience! The truffle risotto was perfectly creamy and the service was impeccable.",
    date: "December 2024",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100"
  },
  {
    id: 2,
    name: "Michael Chen",
    rating: 5,
    text: "Best Italian restaurant in the city. The atmosphere is romantic and the food is authentic. Highly recommend the filet mignon!",
    date: "January 2025",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100"
  },
  {
    id: 3,
    name: "Sarah Williams",
    rating: 5,
    text: "Chef Marco's attention to detail is extraordinary. Every dish was a work of art. We'll definitely be returning!",
    date: "December 2024",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
  }
];

export const galleryImages = [
  { id: 1, url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800", caption: "Main Dining Room", category: "interior" },
  { id: 2, url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800", caption: "Bar Area", category: "interior" },
  { id: 3, url: "https://images.unsplash.com/photo-1476124369491-b78e6a1cf97a?w=800", caption: "Truffle Risotto", category: "food" },
  { id: 4, url: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800", caption: "Filet Mignon", category: "food" },
  { id: 5, url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800", caption: "Chef Marco at Work", category: "chef" },
  { id: 6, url: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800", caption: "Tiramisu", category: "dessert" }
];
