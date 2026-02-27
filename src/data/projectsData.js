export const categories = ["All", "AI Automation", "SaaS", "E-commerce", "Health", "Finance", "Lifestyle"];

export const projectsData = [
  {
    id: 1,
    name: "TaskFlow Pro",
    category: "SaaS",
    description: "Enterprise-grade project management with Kanban boards, drag-and-drop tasks, and team collaboration.",
    techStack: ["React", "DnD Kit", "Tailwind", "Local Storage"],
    features: ["Kanban Board", "Drag & Drop", "Team Management", "Dark Mode"],
    metrics: ["10k+ Active Users", "99.9% Uptime"],
    componentPath: "/projects/saas-dashboard",
    gradient: "from-blue-600 to-indigo-600",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "LuxeMarket",
    category: "E-commerce",
    description: "Premium furniture marketplace featuring 3D product previews, real-time cart, and seamless checkout.",
    techStack: ["React", "Redux", "Stripe API", "Framer Motion"],
    features: ["3D Preview", "Live Cart", "One-click Checkout", "Wishlist"],
    metrics: ["$2M+ GMV", "3.2s Load Time"],
    componentPath: "/projects/ecommerce",
    gradient: "from-emerald-600 to-teal-600",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    name: "UrbanNest",
    category: "Lifestyle",
    description: "High-end real estate portal with interactive maps, virtual tours, and mortgage calculators.",
    techStack: ["React", "Mapbox", "ChartJS", "Tailwind"],
    features: ["Map Search", "Virtual Tours", "Mortgage Calc", "Agent Chat"],
    metrics: ["500+ Listings", "Virtual Tours"],
    componentPath: "/projects/real-estate",
    gradient: "from-amber-500 to-orange-600",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    name: "MediCare",
    category: "Health",
    description: "Next-gen telehealth platform offering live vitals monitoring, symptom checking, and instant provider booking.",
    techStack: ["React", "WebRTC", "D3.js", "Medical API"],
    features: ["Live Vitals", "Video Calls", "Symptom AI", "Records"],
    metrics: ["HIPAA Compliant", "24/7 Support"],
    componentPath: "/projects/healthcare",
    gradient: "from-cyan-500 to-blue-600",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80"
  },
  {
    id: 5,
    name: "LearnHub",
    category: "Education",
    description: "Immersive learning platform with video courses, interactive quizzes, and gamified progress tracking.",
    techStack: ["React", "Video.js", "Gamification", "Node.js"],
    features: ["Course Player", "Quizzes", "Certificates", "Streaks"],
    metrics: ["95% Completion", "Award Winning"],
    componentPath: "/projects/education",
    gradient: "from-violet-600 to-purple-600",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80"
  },
  {
    id: 6,
    name: "PayFlow",
    category: "Finance",
    description: "Modern fintech dashboard for tracking assets, crypto markets, and managing seamless money transfers.",
    techStack: ["React", "Recharts", "Crypto API", "Secure Enclaves"],
    features: ["Crypto Charts", "Quick Send", "Budget Goals", "Analytics"],
    metrics: ["Bank Grade", "Real-time"],
    componentPath: "/projects/fintech",
    gradient: "from-fuchsia-600 to-pink-600",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
  },
  {
    id: 7,
    name: "FitZone",
    category: "Health",
    description: "High-energy fitness app with HIIT timers, workout heatmaps, and class booking systems.",
    techStack: ["React", "Audio API", "Heatmap", "Social"],
    features: ["HIIT Timer", "Streak Map", "Leaderboards", "Music"],
    metrics: ["User Pulse", "Daily Active"],
    componentPath: "/projects/fitness",
    gradient: "from-lime-500 to-green-600",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80"
  },
  {
    id: 8,
    name: "WanderLux",
    category: "Lifestyle",
    description: "Luxury travel planner with drag-and-drop itinerary building and integrated weather forecasts.",
    techStack: ["React", "DnD", "Weather API", "Maps"],
    features: ["Trip Builder", "Weather", "Visual Itinerary", "Booking"],
    metrics: ["5 Star", "Global Reach"],
    componentPath: "/projects/travel",
    gradient: "from-sky-500 to-indigo-600",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80"
  },
  {
    id: 9,
    name: "PixelCraft",
    category: "SaaS",
    description: "Minimalist portfolio for creatives featuring masonry grids, lightboxes, and smooth transitions.",
    techStack: ["React", "Framer Motion", "Masonry", "WebGL"],
    features: ["Lightbox", "Filtering", "Smooth Scroll", "Contact"],
    metrics: ["Designer Choice", "Awwwards"],
    componentPath: "/projects/portfolio",
    gradient: "from-gray-700 to-gray-900",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80"
  },
  {
    id: 10,
    name: "FlavorArt",
    category: "Lifestyle",
    description: "Fine dining website with reservation systems, interactive menus, and story-driven layout.",
    techStack: ["React", "Reservations", "Parallax", "Cart"],
    features: ["Reservations", "Live Menu", "Story", "Ordering"],
    metrics: ["Michelin Star", "Top Rated"],
    componentPath: "/projects/restaurant",
    gradient: "from-red-700 to-rose-900",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80"
  },
  {
    id: 11,
    name: "NexusAI Support",
    category: "AI Automation",
    description: "Multilingual autonomous support agent for a Global 500 tech firm. Handles 85% of queries without human intervention.",
    techStack: ["OpenAI API", "Pinecone", "LangChain", "Node.js"],
    features: ["120+ Languages", "Context Memory", "CRM Sync", "Sentiment Analysis"],
    metrics: ["85% Deflection", "4.8/5 CSAT"],
    componentPath: "/",
    gradient: "from-[#FF6B00] to-amber-700",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80"
  },
  {
    id: 12,
    name: "CogniSales Bot",
    category: "AI Automation",
    description: "Hyper-personalized lead outreach system that identifies and warms prospects through behavioral analysis.",
    techStack: ["GPT-4", "Apollo.io", "SendGrid", "Python"],
    features: ["Lead Scoring", "Auto-Personalization", "Meeting Booking", "A/B Testing"],
    metrics: ["4.5x ROI", "65% Open Rate"],
    componentPath: "/",
    gradient: "from-purple-600 to-indigo-600",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
  }
];
