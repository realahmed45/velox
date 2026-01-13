// Complete furniture product data - 40+ products with real Unsplash images
export const furnitureProducts = [
  {
    id: 1, name: "Scandinavian Lounge Sofa", brand: "Nordic Living", price: 1299, originalPrice: 1599, discount: 19,
    category: "Living Room", subcategory: "Sofas", materials: ["Fabric", "Wood"], dimensions: "86\"W x 38\"D x 34\"H",
    colors: ["Gray", "Beige", "Navy"], sizes: ["Standard"], weight: "145 lbs",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800",
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800"
    ],
    rating: 4.9, reviewCount: 234, inStock: true, quantity: 12, bestSeller: true,
    description: "Embrace Scandinavian minimalism with this elegantly designed lounge sofa. Features premium fabric upholstery and solid oak legs.",
    features: ["Premium woven fabric", "Solid oak frame", "High-density foam", "Removable covers", "Seats 3-4 people"],
    specifications: { "Weight Capacity": "750 lbs", "Seat Depth": "24\"", "Seat Height": "18\"", "Assembly": "Yes", "Warranty": "5 years" },
    reviews: [
      { id: 1, author: "Jennifer M.", rating: 5, text: "Absolutely love this sofa! Perfect for my living room.", date: "2024-12-15", verified: true },
      { id: 2, author: "Michael K.", rating: 5, text: "Great quality and very comfortable. Worth every penny.", date: "2024-12-10", verified: true }
    ]
  },
  {
    id: 2, name: "Rustic Oak Dining Table", brand: "Artisan Woods", price: 899, originalPrice: 1199, discount: 25,
    category: "Dining", subcategory: "Tables", materials: ["Solid Oak"], dimensions: "72\"L x 42\"W x 30\"H",
    colors: ["Natural Oak", "Walnut", "Espresso"], sizes: ["6-Seater", "8-Seater"], weight: "145 lbs",
    images: [
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800",
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800"
    ],
    rating: 4.8, reviewCount: 189, inStock: true, quantity: 8, bestSeller: false,
    description: "Handcrafted from solid oak, this dining table brings rustic elegance to any dining space.",
    features: ["100% solid oak", "Hand-finished", "Seats 6-8", "Scratch resistant", "Farmhouse design"],
    specifications: { "Weight": "145 lbs", "Thickness": "2\"", "Finish": "Natural Oil", "Assembly": "Minimal", "Warranty": "Lifetime" },
    reviews: []
  },
  {
    id: 3, name: "Luxury King Platform Bed", brand: "DreamRest", price: 1499, originalPrice: 1899, discount: 21,
    category: "Bedroom", subcategory: "Beds", materials: ["Upholstered Fabric", "Wood"], dimensions: "82\"W x 88\"D x 48\"H",
    colors: ["Charcoal Gray", "Cream", "Navy Blue"], sizes: ["Queen", "King"], weight: "180 lbs",
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800"
    ],
    rating: 4.9, reviewCount: 567, inStock: true, quantity: 5, bestSeller: true,
    description: "Experience cloud-like comfort with this luxurious upholstered platform bed.",
    features: ["Button-tufted headboard", "Solid wood slats", "No box spring needed", "Easy assembly", "Under-bed storage"],
    specifications: { "Mattress Size": "King (76\" x 80\")", "Headboard Height": "48\"", "Clearance": "12\"", "Weight Capacity": "1000 lbs", "Warranty": "10 years" },
    reviews: []
  },
  {
    id: 4, name: "Executive L-Shaped Desk", brand: "ProOffice", price: 699, originalPrice: 899, discount: 22,
    category: "Office", subcategory: "Desks", materials: ["Engineered Wood", "Metal"], dimensions: "66\"L x 50\"W x 30\"H",
    colors: ["Espresso", "White", "Gray"], sizes: ["Standard"], weight: "95 lbs",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
      "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=800"
    ],
    rating: 4.7, reviewCount: 412, inStock: true, quantity: 15, bestSeller: false,
    description: "Maximize productivity with this spacious L-shaped executive desk.",
    features: ["L-shaped design", "Cable management", "Scratch-resistant", "Metal frame", "Adjustable feet"],
    specifications: { "Desktop Thickness": "1\"", "Weight Capacity": "200 lbs", "Material": "Engineered Wood/Metal", "Assembly": "Yes", "Warranty": "3 years" },
    reviews: []
  },
  {
    id: 5, name: "Italian Leather Armchair", brand: "Eleganza", price: 799, originalPrice: 999, discount: 20,
    category: "Living Room", subcategory: "Chairs", materials: ["Genuine Leather", "Hardwood"], dimensions: "32\"W x 35\"D x 38\"H",
    colors: ["Cognac", "Black", "Chocolate"], sizes: ["Standard"], weight: "75 lbs",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800",
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800"
    ],
    rating: 4.9, reviewCount: 298, inStock: true, quantity: 10, bestSeller: true,
    description: "Indulge in premium sophistication with this Italian leather armchair.",
    features: ["Top-grain leather", "Hand-stitched", "Hardwood frame", "High-density foam", "Mid-century design"],
    specifications: { "Seat Width": "24\"", "Seat Depth": "22\"", "Seat Height": "18\"", "Weight Capacity": "300 lbs", "Warranty": "Lifetime on frame" },
    reviews: []
  },
  {
    id: 6, name: "Modern Glass Coffee Table", brand: "Contemporary Home", price: 499, originalPrice: 649, discount: 23,
    category: "Living Room", subcategory: "Tables", materials: ["Tempered Glass", "Chrome"], dimensions: "48\"L x 24\"W x 18\"H",
    colors: ["Clear", "Smoked"], sizes: ["Standard"], weight: "65 lbs",
    images: ["https://images.unsplash.com/photo-1554295405-abb8fd54f153?w=800"],
    rating: 4.6, reviewCount: 145, inStock: true, quantity: 20, bestSeller: false,
    description: "Add contemporary chic with this sleek glass coffee table.",
    features: ["10mm tempered glass", "Chrome frame", "Easy to clean", "Minimalist design", "Sturdy construction"],
    specifications: { "Weight": "65 lbs", "Glass Thickness": "10mm", "Weight Capacity": "150 lbs", "Assembly": "Minimal", "Warranty": "2 years" },
    reviews: []
  },
  {
    id: 7, name: "Floating Wall Bookshelf", brand: "Space Savers", price: 349, originalPrice: 449, discount: 22,
    category: "Office", subcategory: "Storage", materials: ["MDF", "Metal"], dimensions: "60\"W x 10\"D x 48\"H",
    colors: ["White", "Black", "Walnut"], sizes: ["60\"", "72\""], weight: "45 lbs",
    images: ["https://images.unsplash.com/photo-1594620302200-9a762244a156?w=800"],
    rating: 4.8, reviewCount: 203, inStock: true, quantity: 25, bestSeller: false,
    description: "Maximize vertical space with this elegant floating bookshelf.",
    features: ["Wall-mounted", "5 shelves", "Hidden brackets", "100 lbs capacity", "Easy install"],
    specifications: { "Shelf Depth": "10\"", "Weight Capacity": "100 lbs", "Material": "MDF laminate", "Assembly": "Yes", "Warranty": "1 year" },
    reviews: []
  },
  {
    id: 8, name: "Designer Nightstand Set", brand: "Bedroom Elegance", price: 299, originalPrice: 399, discount: 25,
    category: "Bedroom", subcategory: "Nightstands", materials: ["Wood", "Brass"], dimensions: "24\"H x 20\"W x 16\"D",
    colors: ["Black", "White"], sizes: ["Set of 2"], weight: "30 lbs",
    images: ["https://images.unsplash.com/photo-1541004995602-b3e898709909?w=800"],
    rating: 4.9, reviewCount: 156, inStock: true, quantity: 18, bestSeller: true,
    description: "Keep your essentials close with this chic nightstand set.",
    features: ["2 drawers", "Brass hardware", "Solid wood legs", "Scratch resistant", "Modern design"],
    specifications: { "Drawer Depth": "12\"", "Weight Capacity": "50 lbs", "Material": "Poplar Wood", "Assembly": "Minimal", "Warranty": "1 year" },
    reviews: []
  },
  {
    id: 9, name: "Minimalist floor lamp", brand: "Lume", price: 199, originalPrice: 249, discount: 20,
    category: "Office", subcategory: "Lighting", materials: ["Metal", "Glass"], dimensions: "64\"H x 12\"W",
    colors: ["Gold", "Black"], sizes: ["Standard"], weight: "12 lbs",
    images: ["https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800"], 
    rating: 4.5, reviewCount: 89, inStock: true, quantity: 40, bestSeller: false,
    description: "Illuminate your workspace with this sleek floor lamp.",
    features: ["LED bulb included", "Foot switch", "Adjustable head", "Heavy base", "Energy saving"],
    specifications: { "Bulb Type": "E26", "Wattage": "60W max", "Cord Length": "6 ft", "Assembly": "Yes", "Warranty": "1 year" },
    reviews: []
  }, 
  {
    id: 10, name: "Velvet Accent Chair", brand: "LuxeSeating", price: 449, originalPrice: 599, discount: 25,
    category: "Living Room", subcategory: "Chairs", materials: ["Velvet", "Metal"], dimensions: "30\"W x 30\"D x 32\"H",
    colors: ["Emerald Green", "Blush Pink", "Navy"], sizes: ["Standard"], weight: "45 lbs",
    images: ["https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800"],
    rating: 4.7, reviewCount: 310, inStock: true, quantity: 15, bestSeller: true,
    description: "Add a pop of color and luxury with this velvet accent chair.",
    features: ["Performance velvet", "Gold legs", "Curved back", "High density foam", "Stain resistant"],
    specifications: { "Seat Height": "18\"", "Weight Capacity": "250 lbs", "Frame": "Metal/Wood", "Assembly": "Legs only", "Warranty": "2 years" },
    reviews: []
  },
  {
    id: 9, name: "Velvet Tufted Ottoman", brand: "Luxe Decor", price: 249, originalPrice: 349, discount: 28,
    category: "Living Room", subcategory: "Ottomans", materials: ["Velvet", "Wood"], dimensions: "24\"W x 24\"D x 18\"H",
    colors: ["Emerald", "Royal Blue", "Gold"], sizes: ["Standard"], weight: "25 lbs",
    images: ["https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800"],
    rating: 4.8, reviewCount: 156, inStock: true, quantity: 30, bestSeller: false,
    description: "Elegant velvet ottoman with deep tufting and gold-finished legs.",
    features: ["Hand-tufted", "Gold-finished legs", "Stain-resistant velvet", "Multifunctional", "No assembly"],
    specifications: { "Weight Capacity": "250 lbs", "Frame": "Pine Wood", "Leg Material": "Stainless Steel", "Warranty": "1 year" },
    reviews: []
  },
  {
    id: 10, name: "Marble Top Kitchen Island", brand: "Artisan Kitchen", price: 1199, originalPrice: 1499, discount: 20,
    category: "Dining", subcategory: "Kitchen", materials: ["Carrara Marble", "Oak"], dimensions: "60\"W x 36\"D x 36\"H",
    colors: ["White/Oak"], sizes: ["Standard"], weight: "210 lbs",
    images: ["https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800"],
    rating: 4.9, reviewCount: 89, inStock: true, quantity: 4, bestSeller: true,
    description: "Professional-grade kitchen island with a stunning Carrara marble top.",
    features: ["Solid marble top", "Oak cabinet base", "Towel racks", "Adjustable shelves", "Heavy-duty casters"],
    specifications: { "Top Material": "Carrara Marble", "Base": "Solid White Oak", "Weight": "210 lbs", "Assembly": "White Glove", "Warranty": "5 years" },
    reviews: []
  },
  {
    id: 11, name: "Mid-Century Modern Credenza", brand: "Nordic Living", price: 1399, originalPrice: 1699, discount: 17,
    category: "Living Room", subcategory: "Storage", materials: ["Walnut", "Metal"], dimensions: "72\"W x 18\"D x 32\"H",
    colors: ["Natural Walnut"], sizes: ["Standard"], weight: "135 lbs",
    images: ["https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800"],
    rating: 4.8, reviewCount: 112, inStock: true, quantity: 6, bestSeller: false,
    description: "Sleek walnut credenza with minimalist sliding doors and metal accents.",
    features: ["Solid walnut front", "Sliding doors", "Adjustable shelving", "Tapered legs", "Cable management"],
    specifications: { "Max TV Size": "75\"", "Shelf Capacity": "50 lbs", "Frame": "Engineered Wood", "Legs": "Black Powder-Coated Metal", "Warranty": "3 years" },
    reviews: []
  },
  {
    id: 12, name: "Industrial Drafting Stool", brand: "Studio Tools", price: 189, originalPrice: 249, discount: 24,
    category: "Office", subcategory: "Chairs", materials: ["Oak", "Steel"], dimensions: "16\"W x 16\"D x 24-32\"H",
    colors: ["Industrial Black", "Silver"], sizes: ["Adjustable"], weight: "22 lbs",
    images: ["https://images.unsplash.com/photo-1503602642458-232111445657?w=800"],
    rating: 4.5, reviewCount: 324, inStock: true, quantity: 45, bestSeller: true,
    description: "Vintage-inspired drafting stool with a comfortable oak seat and steel frame.",
    features: ["Height adjustable", "Swivel seat", "Footrest ring", "Vintage finish", "Commercial grade"],
    specifications: { "Height Range": "24\" - 32\"", "Weight Capacity": "300 lbs", "Base": "4-legged steel", "Warranty": "2 years" },
    reviews: []
  },
  {
    id: 13, name: "Silk Blend Area Rug", brand: "Luxe Textiles", price: 599, originalPrice: 799, discount: 25,
    category: "Living Room", subcategory: "Rugs", materials: ["Wool", "Silk"], dimensions: "8' x 10'",
    colors: ["Silver Cloud", "Midnight", "Champagne"], sizes: ["5x8", "8x10", "9x12"], weight: "55 lbs",
    images: ["https://images.unsplash.com/photo-1545042746-ec9e5a59b359?w=800"],
    rating: 4.7, reviewCount: 215, inStock: true, quantity: 15, bestSeller: false,
    description: "Luxurious hand-knotted rug with a subtle sheen and soft texture.",
    features: ["Hand-knotted", "Silk/Wool blend", "Low pile", "Shed-resistant", "Cotton backing"],
    specifications: { "Pile Height": "0.25\"", "Density": "100 knots/sq in", "Care": "Professional clean", "Warranty": "1 year" },
    reviews: []
  },
  {
    id: 14, name: "Ergonomic Mesh Task Chair", brand: "ProOffice", price: 549, originalPrice: 699, discount: 21,
    category: "Office", subcategory: "Chairs", materials: ["Mesh", "Aluminum"], dimensions: "26\"W x 26\"D x 38-44\"H",
    colors: ["Black", "Graphite", "Light Gray"], sizes: ["Standard"], weight: "38 lbs",
    images: ["https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=800"],
    rating: 4.9, reviewCount: 1543, inStock: true, quantity: 60, bestSeller: true,
    description: "The ultimate ergonomic task chair for long working hours.",
    features: ["Lumbar support", "4D armrests", "Breathable mesh", "Tilt lock", "Synchronized recline"],
    specifications: { "Weight Capacity": "350 lbs", "Recline Angle": "135°", "Base": "Polished Aluminum", "Casters": "Hard floor rated", "Warranty": "12 years" },
    reviews: []
  },
  {
    id: 15, name: "Modular Sectional Sofa", brand: "Nordic Living", price: 3499, originalPrice: 4299, discount: 18,
    category: "Living Room", subcategory: "Sofas", materials: ["Linen Blend", "Hardwood"], dimensions: "120\"W x 120\"D x 32\"H",
    colors: ["Oatmeal", "Slate", "Terra Cotta"], sizes: ["4-Piece", "6-Piece"], weight: "420 lbs",
    images: ["https://images.unsplash.com/photo-1550254478-ead40cc54513?w=800"],
    rating: 4.8, reviewCount: 124, inStock: true, quantity: 3, bestSeller: true,
    description: "Configurable modular sectional that grows with your space.",
    features: ["Modular pieces", "Feather-down cushions", "Stain-shield fabric", "Kiln-dried frame", "Hidden clips"],
    specifications: { "Seat Height": "17\"", "Arm Width": "9\"", "Frame": "Birch", "Suspension": "Sinuous Spring", "Warranty": "Lifetime on frame" },
    reviews: []
  },
  {
    id: 16, name: "Glass-Front Curio Cabinet", brand: "Artisan Woods", price: 1099, originalPrice: 1399, discount: 21,
    category: "Dining", subcategory: "Storage", materials: ["Oak", "Tempered Glass"], dimensions: "32\"W x 16\"D x 72\"H",
    colors: ["Weathered Oak"], sizes: ["Standard"], weight: "125 lbs",
    images: ["https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=800"],
    rating: 4.7, reviewCount: 67, inStock: true, quantity: 5, bestSeller: false,
    description: "Display your treasures in this classic glass-front curio cabinet.",
    features: ["LED lighting", "Adjustable glass shelves", "Mirrored back", "Magnetic latches", "Sealed finish"],
    specifications: { "Shelf Capacity": "30 lbs", "Lighting": "Touch-dimmable", "Glass": "8mm tempered", "Safety": "Anti-tip kit included", "Warranty": "2 years" },
    reviews: []
  },
  {
    id: 17, name: "Velvet Swivel Desk Chair", brand: "Luxe Decor", price: 329, originalPrice: 429, discount: 23,
    category: "Office", subcategory: "Chairs", materials: ["Velvet", "Brass"], dimensions: "24\"W x 26\"D x 32-36\"H",
    colors: ["Blush", "Sage", "Cream"], sizes: ["Standard"], weight: "30 lbs",
    images: ["https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800"],
    rating: 4.6, reviewCount: 245, inStock: true, quantity: 22, bestSeller: false,
    description: "Chic and comfortable swivel chair for the modern home office.",
    features: ["360° swivel", "Padded seat", "Brass-finished base", "Smooth casters", "Adjustable height"],
    specifications: { "Weight Capacity": "250 lbs", "Seat Width": "19\"", "Material": "Performance velvet", "Assembly": "Easy (10 min)", "Warranty": "1 year" },
    reviews: []
  },
  {
    id: 18, name: "Solid Wood Workbench", brand: "Studio Tools", price: 899, originalPrice: 1099, discount: 18,
    category: "Office", subcategory: "Workplace", materials: ["Solid Maple", "Steel"], dimensions: "60\"W x 30\"D x 34\"H",
    colors: ["Natural/Black"], sizes: ["Standard"], weight: "155 lbs",
    images: ["https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800"],
    rating: 4.9, reviewCount: 92, inStock: true, quantity: 8, bestSeller: false,
    description: "Heavy-duty workbench perfect for creative studios and design labs.",
    features: ["1.75\" thick maple top", "Integrated power strip", "Adjustable height", "Pegboard included", "Leveling feet"],
    specifications: { "Weight Capacity": "1500 lbs", "Top Material": "Hard Rock Maple", "Frame": "11-gauge steel", "Assembly": "Professional rec", "Warranty": "Lifetime" },
    reviews: []
  },
  {
    id: 19, name: "Contemporary Floor Lamp", brand: "Contemporary Home", price: 199, originalPrice: 279, discount: 28,
    category: "Living Room", subcategory: "Lighting", materials: ["Marble", "Brass"], dimensions: "12\"D x 64\"H",
    colors: ["Brass/Black Marble"], sizes: ["Standard"], weight: "18 lbs",
    images: ["https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800"],
    rating: 4.7, reviewCount: 178, inStock: true, quantity: 35, bestSeller: true,
    description: "Minimalist floor lamp with a heavy marble base and brushed brass finish.",
    features: ["Marble base", "Brushed brass stem", "Foot switch", "LED bulb included", "Slim profile"],
    specifications: { "Bulb": "9W LED (60W equiv)", "Voltage": "120V", "Cord Length": "8 ft", "Safety": "UL Listed", "Warranty": "2 years" },
    reviews: []
  },
  {
    id: 20, name: "Woven Rattan Armchair", brand: "Nordic Living", price: 449, originalPrice: 599, discount: 25,
    category: "Living Room", subcategory: "Chairs", materials: ["Natural Rattan", "Teak"], dimensions: "28\"W x 30\"D x 32\"H",
    colors: ["Natural"], sizes: ["Standard"], weight: "20 lbs",
    images: ["https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800"],
    rating: 4.8, reviewCount: 134, inStock: true, quantity: 12, bestSeller: false,
    description: "Breezy and organic, this hand-woven rattan chair adds texture to any room.",
    features: ["Sustainable rattan", "Solid teak frame", "Hand-woven", "Lightweight", "Includes cushion"],
    specifications: { "Cushion": "Cotton/Linen", "Max Weight": "250 lbs", "Frame": "Natural Teak", "Assembly": "None", "Warranty": "1 year" },
    reviews: []
  }
];

export const additionalProducts = [
  {
    id: 21, name: "Floating Walnut Media Console", brand: "Nordic Living", price: 849, originalPrice: 1099, discount: 22,
    category: "Living Room", subcategory: "Storage", materials: ["Walnut Veneer", "MDF"], dimensions: "72\"W x 14\"D x 12\"H",
    colors: ["Natural Walnut"], sizes: ["Standard"], weight: "65 lbs",
    images: ["https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=800"],
    rating: 4.7, reviewCount: 95, inStock: true, quantity: 10, bestSeller: false,
    description: "Sleek wall-mounted console with cable routing and soft-close doors.",
    features: ["Wall-mounted", "Soft-close doors", "Cable management", "Low profile", "Ventilated"],
    specifications: { "Max TV Weight": "100 lbs", "Installation": "Professional req", "Hardware": "Included", "Warranty": "3 years" },
    reviews: []
  },
  {
    id: 22, name: "Sheepskin Throw Rug", brand: "Luxe Textiles", price: 129, originalPrice: 179, discount: 28,
    category: "Living Room", subcategory: "Rugs", materials: ["Sheepskin"], dimensions: "2' x 3'",
    colors: ["Ivory", "Steel Gray"], sizes: ["Small", "Large"], weight: "5 lbs",
    images: ["https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=800"],
    rating: 4.9, reviewCount: 456, inStock: true, quantity: 50, bestSeller: true,
    description: "Ultra-soft and plush genuine sheepskin throw for chairs or floors.",
    features: ["100% genuine sheepskin", "Deep pile", "Naturally hypoallergenic", "Nonslip backing", "Ethically sourced"],
    specifications: { "Pile Depth": "2.5\"", "Origin": "New Zealand", "Care": "Shake out/Spot clean", "Warranty": "1 year" },
    reviews: []
  },
  {
    id: 23, name: "Memory Foam Queen Mattress", brand: "DreamRest", price: 899, originalPrice: 1299, discount: 31,
    category: "Bedroom", subcategory: "Mattresses", materials: ["Memory Foam", "Gel"], dimensions: "60\"W x 80\"D x 12\"H",
    colors: ["White/Blue"], sizes: ["Twin", "Full", "Queen", "King"], weight: "85 lbs",
    images: ["https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800"],
    rating: 4.8, reviewCount: 2432, inStock: true, quantity: 100, bestSeller: true,
    description: "Advanced cooling gel memory foam for the perfect night's sleep.",
    features: ["Cooling gel layer", "Motion isolation", "Edge support", "Breathable cover", "CertiPUR-US certified"],
    specifications: { "Firmness": "Medium-Firm", "Layers": "4", "Warranty": "15 years", "Trial": "100 nights", "Trial Period": "100 days" },
    reviews: []
  },
  {
    id: 24, name: "Industrial Floor Mirror", brand: "Contemporary Home", price: 349, originalPrice: 449, discount: 22,
    category: "Bedroom", subcategory: "Mirrors", materials: ["Glass", "Iron"], dimensions: "32\"W x 72\"H",
    colors: ["Black", "Silver"], sizes: ["Full Length"], weight: "55 lbs",
    images: ["https://images.unsplash.com/photo-1618220179428-22790b461013?w=800"],
    rating: 4.7, reviewCount: 187, inStock: true, quantity: 15, bestSeller: false,
    description: "Sleek industrial floor mirror with a heavy iron frame.",
    features: ["Shatter-resistant", "Full length", "Wall-leaning", "Reinforced frame", "Premium clarity"],
    specifications: { "Glass": "5mm high-def", "Frame": "Rust-proof iron", "Safety": "Mounting clip included", "Warranty": "2 years" },
    reviews: []
  },
  {
    id: 25, name: "Modern Bar Cart", brand: "Contemporary Home", price: 299, originalPrice: 399, discount: 25,
    category: "Dining", subcategory: "Kitchen", materials: ["Brass", "Mirror"], dimensions: "30\"L x 18\"W x 34\"H",
    colors: ["Gold", "Silver"], sizes: ["Standard"], weight: "35 lbs",
    images: ["https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800"],
    rating: 4.8, reviewCount: 156, inStock: true, quantity: 20, bestSeller: true,
    description: "Host in style with this elegant two-tier mirrored bar cart.",
    features: ["Two mirrored tiers", "Locking casters", "Wine glass racks", "Bottle holders", "Brass finish"],
    specifications: { "Tiers": "2", "Weight Capacity": "100 lbs", "Frame": "Stainless steel", "Assembly": "Easy (15 min)", "Warranty": "1 year" },
    reviews: []
  },
  {
    id: 26, name: "Adjustable Standing Desk", brand: "ProOffice", price: 749, originalPrice: 999, discount: 25,
    category: "Office", subcategory: "Desks", materials: ["Oak", "Steel"], dimensions: "60\"W x 30\"D x 28-48\"H",
    colors: ["Natural Oak/White", "Black/Black", "Gray/Silver"], sizes: ["Standard", "Large"], weight: "115 lbs",
    images: ["https://images.unsplash.com/photo-1595515106969-1ce29566ff25?w=800"],
    rating: 4.9, reviewCount: 856, inStock: true, quantity: 25, bestSeller: true,
    description: "Dual-motor standing desk with 4 memory presets.",
    features: ["Dual-motors", "4 presets", "Collision sensor", "Integrated cable tray", "5-year warranty"],
    specifications: { "Height Range": "28\" - 48\"", "Speed": "1.5 in/sec", "Weight Capacity": "350 lbs", "Frame": "3-stage steel", "Warranty": "10 years on frame" },
    reviews: []
  },
  {
    id: 27, name: "Nested Side Tables", brand: "Contemporary Home", price: 189, originalPrice: 249, discount: 24,
    category: "Living Room", subcategory: "Tables", materials: ["Walnut", "Metal"], dimensions: "20\"x20\" & 16\"x16\"",
    colors: ["Walnut/Black"], sizes: ["Set of 2"], weight: "24 lbs",
    images: ["https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=800"],
    rating: 4.6, reviewCount: 167, inStock: true, quantity: 30, bestSeller: false,
    description: "Versatile set of two nesting tables with walnut tops.",
    features: ["Set of 2", "Space-saving", "Staggered heights", "Minimalist design", "No assembly"],
    specifications: { "Large Table": "20\"x20\"x22\"", "Small Table": "16\"x16\"x18\"", "Frame": "Powder-coated steel", "Warranty": "1 year" },
    reviews: []
  },
  {
    id: 28, name: "Waffle Weave Bedding Set", brand: "Luxe Textiles", price: 159, originalPrice: 219, discount: 27,
    category: "Bedroom", subcategory: "Bedding", materials: ["Cotton"], dimensions: "Queen",
    colors: ["White", "Sage", "Charcoal"], sizes: ["Full", "Queen", "King"], weight: "12 lbs",
    images: ["https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800"],
    rating: 4.8, reviewCount: 389, inStock: true, quantity: 40, bestSeller: false,
    description: "Textured waffle weave duvet cover set made from breathable cotton.",
    features: ["100% long-staple cotton", "Waffle texture", "Zipper closure", "Corner ties", "Machine washable"],
    specifications: { "Thread Count": "N/A (Woven)", "Set Includes": "Duvet + 2 Shams", "OEKO-TEX Certified": "Yes", "Warranty": "1 year" },
    reviews: []
  },
  {
    id: 29, name: "Swivel Leather Accent Chair", brand: "Eleganza", price: 899, originalPrice: 1199, discount: 25,
    category: "Living Room", subcategory: "Chairs", materials: ["Leather", "Steel"], dimensions: "30\"W x 34\"D x 36\"H",
    colors: ["Camel", "Olive", "Black"], sizes: ["Standard"], weight: "65 lbs",
    images: ["https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800"],
    rating: 4.9, reviewCount: 145, inStock: true, quantity: 8, bestSeller: true,
    description: "Mid-century swivel chair upholstered in top-grain aniline leather.",
    features: ["Full swivel", "Aniline leather", "Return-to-center swivel", "Steel base", "Hand-finished"],
    specifications: { "Seat Height": "18\"", "Max Weight": "300 lbs", "Base": "4-star metal", "Assembly": "Easy", "Warranty": "5 years" },
    reviews: []
  },
  {
    id: 30, name: "Bamboo Shoe Storage", brand: "Space Savers", price: 129, originalPrice: 169, discount: 24,
    category: "Bedroom", subcategory: "Storage", materials: ["Bamboo"], dimensions: "32\"W x 12\"D x 36\"H",
    colors: ["Natural"], sizes: ["9-Pair", "12-Pair"], weight: "15 lbs",
    images: ["https://images.unsplash.com/photo-1595927734978-a15e3f4bb0cf?w=800"],
    rating: 4.7, reviewCount: 423, inStock: true, quantity: 50, bestSeller: true,
    description: "Eco-friendly bamboo shoe rack with slatted shelves for ventilation.",
    features: ["100% natural bamboo", "Ventilated shelves", "Stackable design", "Moisture-resistant", "Compact footprint"],
    specifications: { "Rows": "4", "Capacity": "12 pairs", "Assembly": "15 min", "Weight Capacity": "50 lbs", "Warranty": "1 year" },
    reviews: []
  },
  {
    id: 31, name: "Geometric Bookcase", brand: "Contemporary Home", price: 549, originalPrice: 699, discount: 21,
    category: "Office", subcategory: "Storage", materials: ["MDF", "Oak"], dimensions: "48\"W x 12\"D x 72\"H",
    colors: ["Oak/White", "All Black"], sizes: ["Standard"], weight: "95 lbs",
    images: ["https://images.unsplash.com/photo-1594620302200-9a762244a156?w=800"],
    rating: 4.8, reviewCount: 112, inStock: true, quantity: 15, bestSeller: false,
    description: "Modern geometric bookcase with asymmetrical shelving.",
    features: ["Asymmetrical shelves", "Open back", "Reinforced joints", "Anti-tip hardware", "Scratch-resistant"],
    specifications: { "Shelves": "12 compartments", "Material": "Oak veneer", "Max Weight": "200 lbs", "Warranty": "3 years" },
    reviews: []
  },
  {
    id: 32, name: "Brass Floating Nightstand", brand: "Space Savers", price: 219, originalPrice: 289, discount: 24,
    category: "Bedroom", subcategory: "Nightstands", materials: ["Metal", "Walnut"], dimensions: "16\"W x 12\"D x 10\"H",
    colors: ["Walnut/Brass"], sizes: ["Left Side", "Right Side"], weight: "12 lbs",
    images: ["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800"],
    rating: 4.7, reviewCount: 89, inStock: true, quantity: 20, bestSeller: false,
    description: "Minimalist wall-mounted nightstand with a solid brass drawer pull.",
    features: ["Wall-mounted", "Solid walnut", "Brass hardware", "Hidden compartment", "Minimalist design"],
    specifications: { "Drawer": "1", "Installation": "Heavy-duty brackets inc", "Weight Capacity": "30 lbs", "Warranty": "2 years" },
    reviews: []
  },
  {
    id: 33, name: "Kitchen Pantry Cabinet", brand: "Artisan Kitchen", price: 799, originalPrice: 999, discount: 20,
    category: "Dining", subcategory: "Kitchen", materials: ["Wood", "Metal"], dimensions: "36\"W x 18\"D x 72\"H",
    colors: ["Off-White", "Navy Blue"], sizes: ["Standard"], weight: "145 lbs",
    images: ["https://images.unsplash.com/photo-1556911220-e15021d87c81?w=800"],
    rating: 4.8, reviewCount: 67, inStock: true, quantity: 5, bestSeller: false,
    description: "Large pantry cabinet with adjustable shelves and door storage.",
    features: ["Adjustable shelves", "Door storage", "Smooth-close doors", "Solid base", "Spice racks"],
    specifications: { "Doors": "4", "Materials": "Ponderosa Pine", "Weight": "145 lbs", "Warranty": "5 years" },
    reviews: []
  },
  {
    id: 34, name: "Teak Patio Dining Set", brand: "Eleganza", price: 2499, originalPrice: 3299, discount: 24,
    category: "Dining", subcategory: "Outdoor", materials: ["Teak Wood"], dimensions: "96\"L x 42\"W x 30\"H",
    colors: ["Natural Teak"], sizes: ["7-Piece", "9-Piece"], weight: "320 lbs",
    images: ["https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800"],
    rating: 4.9, reviewCount: 45, inStock: true, quantity: 3, bestSeller: false,
    description: "Premium Grade-A teak dining set with 6 armchairs.",
    features: ["Grade-A Teak", "Weather-resistant", "Includes cushions", "Self-storing leaf", "Sustainable wood"],
    specifications: { "Set Includes": "Table + 6 Chairs", "Table Shape": "Oval", "Warranty": "10 years", "Care": "Teak oil once/year" },
    reviews: []
  },
  {
    id: 35, name: "Velvet Pouf Ottoman", brand: "Luxe Decor", price: 129, originalPrice: 169, discount: 24,
    category: "Living Room", subcategory: "Ottomans", materials: ["Velvet", "Foam"], dimensions: "18\"D x 16\"H",
    colors: ["Teal", "Mustard", "Silver"], sizes: ["Standard"], weight: "8 lbs",
    images: ["https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800"],
    rating: 4.7, reviewCount: 234, inStock: true, quantity: 40, bestSeller: false,
    description: "Soft velvet pouf perfect as an accent seat or footrest.",
    features: ["Performance velvet", "Sturdy core", "Piped edges", "Lightweight", "Rich colors"],
    specifications: { "Filling": "High-density polyfoam", "Max Weight": "200 lbs", "Cover": "Non-removable", "Warranty": "None" },
    reviews: []
  },
  {
    id: 36, name: "Smart Work Desk", brand: "ProOffice", price: 999, originalPrice: 1299, discount: 23,
    category: "Office", subcategory: "Desks", materials: ["Glass", "Steel"], dimensions: "55\"W x 28\"D x 28-46\"H",
    colors: ["Black Glass"], sizes: ["Standard"], weight: "125 lbs",
    images: ["https://images.unsplash.com/photo-1595515106969-1ce29566ff25?w=800"],
    rating: 4.8, reviewCount: 145, inStock: true, quantity: 12, bestSeller: false,
    description: "Standing desk with tempered glass top and wireless charging.",
    features: ["Wireless charger", "USB ports", "Touch controls", "Dry-erase glass", "Dual-motors"],
    specifications: { "Charging": "15W wireless", "Ports": "2 USB, 1 USB-C", "Max Height": "46\"", "Warranty": "5 years" },
    reviews: []
  },
  {
    id: 37, name: "Walnut Dressing Table", brand: "Eleganza", price: 649, originalPrice: 849, discount: 24,
    category: "Bedroom", subcategory: "Tables", materials: ["Walnut", "Glass"], dimensions: "42\"W x 18\"D x 30\"H",
    colors: ["Dark Walnut"], sizes: ["Standard"], weight: "75 lbs",
    images: ["https://images.unsplash.com/photo-1618220179428-22790b461013?w=800"],
    rating: 4.8, reviewCount: 89, inStock: true, quantity: 10, bestSeller: false,
    description: "Elegant dressing table with three drawers and a large mirror.",
    features: ["Three drawers", "Felt-lined", "Integrated mirror", "Jewelry divider", "Soft-close guides"],
    specifications: { "Mirror Size": "24\"x30\"", "Drawers": "3", "Material": "Solid walnut + Veneer", "Warranty": "3 years" },
    reviews: []
  },
  {
    id: 38, name: "Industrial Wine Rack", brand: "Space Savers", price: 249, originalPrice: 329, discount: 24,
    category: "Dining", subcategory: "Storage", materials: ["Pine", "Iron"], dimensions: "24\"W x 14\"D x 48\"H",
    colors: ["Natural/Black"], sizes: ["24-Bottle"], weight: "45 lbs",
    images: ["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800"],
    rating: 4.7, reviewCount: 134, inStock: true, quantity: 25, bestSeller: false,
    description: "Rustic wine rack for 24 bottles with a shelf for glasses.",
    features: ["Holds 24 bottles", "Glassware racks", "Top shelf", "Rustic finish", "Heavy-duty"],
    specifications: { "Bottle Size": "Standard 750ml", "Glass Racks": "Holds 12", "Weight Capacity": "200 lbs", "Warranty": "2 years" },
    reviews: []
  },
  {
    id: 39, name: "Plush Recliner Chair", brand: "Luxe Decor", price: 749, originalPrice: 999, discount: 25,
    category: "Living Room", subcategory: "Chairs", materials: ["Fabric", "Steel"], dimensions: "38\"W x 40\"D x 42\"H",
    colors: ["Heather Gray", "Slate Blue"], sizes: ["Standard"], weight: "115 lbs",
    images: ["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800"],
    rating: 4.9, reviewCount: 567, inStock: true, quantity: 15, bestSeller: true,
    description: "Ultra-comfortable power recliner with USB charging.",
    features: ["Power recline", "USB port", "Headrest adjust", "Silent motor", "Pocket coils"],
    specifications: { "Max Reclin": "170°", "Max Weight": "350 lbs", "Fabric": "Synthetic Blend", "Warranty": "10 years on mechanism" },
    reviews: []
  },
  {
    id: 40, name: "Crystal Chandelier", brand: "Contemporary Home", price: 1299, originalPrice: 1799, discount: 28,
    category: "Living Room", subcategory: "Lighting", materials: ["Crystal", "Brass"], dimensions: "30\"D x 24\"H",
    colors: ["Clear/Brass"], sizes: ["Large"], weight: "35 lbs",
    images: ["https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800"],
    rating: 4.9, reviewCount: 42, inStock: true, quantity: 5, bestSeller: false,
    description: "Breathtaking crystal chandelier that acts as a centerpiece for any ballroom or dining hall.",
    features: ["Real K9 crystals", "Brushed brass frame", "Adjustable chain", "Dimmer compatible", "12 lights"],
    specifications: { "Bulbs": "12 x E12 (not inc)", "Ceiling Height": "Min 9ft rec", "Weight": "35 lbs", "Safety": "UL Listed", "Warranty": "5 years" },
    reviews: []
  }
];

// Final merged products list
export const allProductsArray = [...furnitureProducts, ...additionalProducts];

export const promoCodes = {
  "WELCOME10": { discount: 10, type: "percentage", description: "10% off your first order" },
  "SAVE50": { discount: 50, type: "fixed", description: "$50 off orders over $500" },
  "FREESHIP": { discount: 0, type: "free_shipping", description: "Free shipping on any order" },
  "LUXURY20": { discount: 20, type: "percentage", description: "20% off luxury items" }
};

export const shippingMethods = [
  { id: "standard", name: "Standard Shipping", days: "5-7 business days", price: 49, freeOver: 500 },
  { id: "express", name: "Express Shipping", days: "2-3 business days", price: 89, freeOver: null },
  { id: "overnight", name: "Overnight Shipping", days: "1 business day", price: 149, freeOver: null },
  { id: "pickup", name: "Store Pickup", days: "Available today", price: 0, freeOver: null, locations: ["Downtown LA", "Santa Monica", "Beverly Hills"] }
];

export const paymentMethods = [
  { id: "card", name: "Credit/Debit Card", icon: "💳", description: "Visa, Mastercard, Amex, Discover" },
  { id: "paypal", name: "PayPal", icon: "🅿️", description: "Pay securely with PayPal" },
  { id: "applepay", name: "Apple Pay", icon: "🍎", description: "Fast and secure payment" },
  { id: "afterpay", name: "Afterpay", icon: "💰", description: "Buy now, pay later in 4 installments" }
];
