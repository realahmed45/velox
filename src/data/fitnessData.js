// Fitness studio data
export const classes = [
  {
    id: 1,
    name: "HIIT Cardio Blast",
    time: "6:00 AM",
    duration: "45 min",
    instructor: { name: "Coach Mike", image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=200" },
    spots: 5,
    capacity: 20,
    difficulty: "High",
    category: "Cardio",
    description: "High-intensity interval training to boost metabolism and burn calories",
    image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800"
  },
  {
    id: 2,
    name: "Yoga Flow",
    time: "8:00 AM",
    duration: "60 min",
    instructor: { name: "Sarah J.", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200" },
    spots: 8,
    capacity: 15,
    difficulty: "Moderate",
    category: "Yoga",
    description: "Mindful movement and breathing to improve flexibility and reduce stress",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800"
  },
  {
    id: 3,
    name: "Spin Class",
    time: "10:00 AM",
    duration: "45 min",
    instructor: { name: "Tom R.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200" },
    spots: 12,
    capacity: 25,
    difficulty: "Moderate",
    category: "Cycling",
    description: "Indoor cycling with energizing music and motivating coaching",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800"
  },
  {
    id: 4,
    name: "Boxing Bootcamp",
    time: "6:00 PM",
    duration: "50 min",
    instructor: { name: "Alex K.", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200" },
    spots: 3,
    capacity: 18,
    difficulty: "High",
    category: "Boxing",
    description: "Combine boxing techniques with strength training for a full-body workout",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800"
  }
];

export const membershipPlans = [
  {
    id: 1,
    name: "Basic",
    price: 49,
    period: "month",
    features: ["Access to gym equipment", "Locker room access", "Free fitness assessment"],
    popular: false
  },
  {
    id: 2,
    name: "Premium",
    price: 89,
    period: "month",
    features: ["All Basic features", "Unlimited group classes", "One personal training session/month", "Sauna & steam room"],
    popular: true
  },
  {
    id: 3,
    name: "Elite",
    price: 149,
    period: "month",
    features: ["All Premium features", "4 personal training sessions/month", "Nutrition consultation", "Priority class booking", "Guest passes"],
    popular: false
  }
];

export const trainers = [
  {
    id: 1,
    name: "Mike Johnson",
    specialty: "Strength Training",
    certifications: ["NASM-CPT", "CSCS"],
    experience: 8,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400",
    bio: "Specializing in functional strength and athletic performance"
  },
  {
    id: 2,
    name: "Sarah Martinez",
    specialty: "Yoga & Pilates",
    certifications: ["RYT-500", "PMA-CPT"],
    experience: 10,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400",
    bio: "Helping clients find balance through mindful movement"
  }
];
