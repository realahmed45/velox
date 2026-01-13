export const doctors = [
  { 
    id: 1, 
    name: "Dr. Sarah Johnson", 
    specialty: "Cardiology", 
    hospital: "Central Heart Institute",
    rating: 4.9, 
    consultations: 1240,
    available: true,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80",
    fee: "$150"
  },
  { 
    id: 2, 
    name: "Dr. Michael Chen", 
    specialty: "Pediatrics", 
    hospital: "City Children's Hospital",
    rating: 4.8, 
    consultations: 890,
    available: true,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80",
    fee: "$120"
  },
  { 
    id: 3, 
    name: "Dr. Emily Davis", 
    specialty: "Dermatology", 
    hospital: "Skin & Glow Clinic",
    rating: 4.9, 
    consultations: 2100,
    available: false,
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80",
    fee: "$140"
  },
  { 
    id: 4, 
    name: "Dr. James Wilson", 
    specialty: "Orthopedics", 
    hospital: "Movement Center",
    rating: 4.7, 
    consultations: 650,
    available: true,
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80",
    fee: "$180"
  }
];

export const labResults = [
    { name: "Hemoglobin", value: 14.2, unit: "g/dL", range: "13.5-17.5", status: "normal" },
    { name: "Cholesterol", value: 185, unit: "mg/dL", range: "<200", status: "normal" },
    { name: "Blood Sugar", value: 98, unit: "mg/dL", range: "70-99", status: "normal" },
    { name: "Vitamin D", value: 28, unit: "ng/mL", range: "30-100", status: "low" },
];
