// Education platform data
export const courses = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp 2025",
    instructor: { name: "John Doe", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200", bio: "Senior Full-Stack Developer with 10+ years experience" },
    price: 49.99,
    originalPrice: 99.99,
    rating: 4.9,
    students: 12543,
    duration: "42 hours",
    level: "Beginner",
    category: "Development",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
    description: "Master web development from scratch. Learn HTML, CSS, JavaScript, React, Node.js, and deploy real-world projects.",
    whatYoullLearn: [
      "Build responsive websites with HTML5 and CSS3",
      "Master JavaScript and modern ES6+ features",
      "Create interactive UIs with React and Redux",
      "Build RESTful APIs with Node.js and Express",
      "Work with MongoDB and SQL databases",
      "Deploy applications to production"
    ],
    curriculum: [
      {
        section: "Frontend Fundamentals",
        lectures: [
          { title: "Introduction to HTML", duration: "12:34" },
          { title: "CSS Styling Basics", duration: "18:45" },
          { title: "Responsive Design with Flexbox", duration: "25:12" }
        ]
      },
      {
        section: "JavaScript Mastery",
        lectures: [
          { title: "Variables and Data Types", duration: "15:23" },
          { title: "Functions and Scope", duration: "22:45" },
          { title: "Async JavaScript and Promises", duration: "28:56" }
        ]
      }
    ],
    requirements: ["No programming experience needed", "Computer with internet connection"],
    tags: ["Web Development", "JavaScript", "React", "Node.js"]
  },
  {
    id: 2,
    title: "Data Science & Machine Learning Masterclass",
    instructor: { name: "Jane Smith", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200", bio: "PhD in Computer Science, AI Researcher" },
    price: 59.99,
    originalPrice: 129.99,
    rating: 4.8,
    students: 8234,
    duration: "56 hours",
    level: "Intermediate",
    category: "Data Science",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    description: "Comprehensive data science course covering Python, statistics, machine learning algorithms, and deep learning with real-world projects.",
    whatYoullLearn: [
      "Python programming for data analysis",
      "Statistical analysis and probability",
      "Machine learning algorithms",
      "Deep learning with TensorFlow",
      "Data visualization with Matplotlib and Seaborn",
      "Build and deploy ML models"
    ],
    curriculum: [
      {
        section: "Python for Data Science",
        lectures: [
          { title: "NumPy Fundamentals", duration: "20:15" },
          { title: "Pandas for Data Manipulation", duration: "32:40" }
        ]
      }
    ],
    requirements: ["Basic Python knowledge", "Understanding of high school mathematics"],
    tags: ["Data Science", "Python", "Machine Learning", "AI"]
  },
  {
    id: 3,
    title: "UI/UX Design Fundamentals",
    instructor: { name: "Mike Johnson", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200", bio: "Lead Designer at Tech Startup" },
    price: 39.99,
    originalPrice: 79.99,
    rating: 4.9,
    students: 15678,
    duration: "28 hours",
    level: "Beginner",
    category: "Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800",
    description: "Learn to create beautiful, user-friendly interfaces. Master Figma, design principles, user research, and prototyping.",
    whatYoullLearn: [
      "Design thinking and user research",
      "Figma and design tools mastery",
      "Color theory and typography",
      "Wireframing and prototyping",
      "Usability testing and iteration",
      "Build a professional portfolio"
    ],
    curriculum: [
      {
        section: "Design Foundations",
        lectures: [
          { title: "Introduction to UI/UX", duration: "10:20" },
          { title: "Design Thinking Process", duration: "18:35" }
        ]
      }
    ],
    requirements: ["No prior design experience needed", "Computer with Figma installed"],
    tags: ["UI Design", "UX Design", "Figma", "Prototyping"]
  }
];
