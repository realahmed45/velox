// Healthcare platform data
export const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    rating: 4.9,
    reviewCount: 234,
    experience: 15,
    education: "Harvard Medical School",
    hospital: "Memorial Hospital",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400",
    bio: "Board-certified cardiologist specializing in preventive cardiology and heart disease management.",
    available: true,
    nextAvailable: "2025-01-08",
    languages: ["English", "Spanish"],
    insurance: ["Blue Cross", "Aetna", "UnitedHealthcare"],
    availability: [
      { date: "2025-01-08", slots: ["9:00 AM", "10:30 AM", "2:00 PM", "4:00 PM"] },
      { date: "2025-01-09", slots: ["9:00 AM", "11:00 AM", "3:00 PM"] },
      { date: "2025-01-10", slots: ["10:00 AM", "1:00 PM", "3:30 PM"] }
    ]
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Pediatrics",
    rating: 4.8,
    reviewCount: 412,
    experience: 12,
    education: "Johns Hopkins University",
    hospital: "Children's Medical Center",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400",
    bio: "Experienced pediatrician dedicated to providing compassionate care for children of all ages.",
    available: true,
    nextAvailable: "2025-01-07",
    languages: ["English", "Mandarin"],
    insurance: ["Cigna", "Blue Shield", "Kaiser"],
    availability: [
      { date: "2025-01-07", slots: ["8:00 AM", "9:30 AM", "11:00 AM", "2:30 PM"] },
      { date: "2025-01-08", slots: ["8:00 AM", "10:00 AM", "1:00 PM"] }
    ]
  },
  {
    id: 3,
    name: "Dr. Emily Davis",
    specialty: "Dermatology",
    rating: 4.9,
    reviewCount: 567,
    experience: 10,
    education: "Stanford Medical School",
    hospital: "Skin Health Institute",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400",
    bio: "Expert in medical and cosmetic dermatology with focus on skin cancer prevention and treatment.",
    available: false,
    nextAvailable: "2025-01-15",
    languages: ["English"],
    insurance: ["All major insurance accepted"],
    availability: []
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    specialty: "Orthopedics",
    rating: 4.7,
    reviewCount: 321,
    experience: 18,
    education: "Mayo Clinic School of Medicine",
    hospital: "Sports Medicine Center",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400",
    bio: "Orthopedic surgeon specializing in sports injuries and joint replacement.",
    available: true,
    nextAvailable: "2025-01-09",
    languages: ["English", "French"],
    insurance: ["Blue Cross", "UnitedHealthcare", "Humana"],
    availability: [
      { date: "2025-01-09", slots: ["9:00 AM", "11:30 AM", "2:00 PM"] },
      { date: "2025-01-10", slots: ["10:00 AM", "1:30 PM", "4:00 PM"] }
    ]
  }
];

export const appointmentReasons = [
  "Annual Checkup",
  "Follow-up Visit",
  "New Symptoms",
  "Prescription Refill",
  "Lab Results Review",
  "Vaccination",
  "Second Opinion",
  "Other"
];
