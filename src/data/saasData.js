// Real SaaS project management data
export const projectsData = [
  {
    id: 1,
    name: "Website Redesign 2025",
    description: "Complete overhaul of company website with modern tech stack",
    owner: { name: "Sarah Johnson", avatar: "SJ" },
    team: ["Sarah Johnson", "Mike Chen", "Emily Davis"],
    status: "in-progress",
    deadline: "2025-02-15",
    progress: 67,
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    name: "Mobile App Launch",
    description: "iOS and Android app development and deployment",
    owner: { name: "David Kim", avatar: "DK" },
    team: ["David Kim", "Alice Chen", "Bob Wilson"],
    status: "in-progress",
    deadline: "2025-03-01",
    progress: 45,
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    name: "Marketing Campaign Q1",
    description: "Social media and digital marketing initiative",
    owner: { name: "Carol Martinez", avatar: "CM" },
    team: ["Carol Martinez", "Tom Rodriguez"],
    status: "planning",
    deadline: "2025-01-30",
    progress: 20,
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 4,
    name: "API Integration",
    description: "Third-party service integration and testing",
    owner: { name: "Mike Chen", avatar: "MC" },
    team: ["Mike Chen", "Sarah Johnson"],
    status: "completed",
    deadline: "2025-01-05",
    progress: 100,
    color: "from-yellow-500 to-orange-500"
  },
  {
    id: 5,
    name: "Security Audit",
    description: "Comprehensive security review and penetration testing",
    owner: { name: "Emma Davis", avatar: "ED" },
    team: ["Emma Davis", "James Wilson"],
    status: "in-progress",
    deadline: "2025-02-01",
    progress: 80,
    color: "from-red-500 to-pink-500"
  }
];

export const tasksData = [
  // Website Redesign tasks
  { id: 1, projectId: 1, title: "Design Homepage Mockups", description: "Create high-fidelity mockups for new homepage design", assignee: { name: "Alice Chen", avatar: "AC" }, status: "done", priority: "high", dueDate: "2025-01-10", tags: ["design", "ui"], estimatedHours: 8 },
  { id: 2, projectId: 1, title: "Implement Navigation Component", description: "Build responsive navigation with React", assignee: { name: "Mike Chen", avatar: "MC" }, status: "in-progress", priority: "high", dueDate: "2025-01-15", tags: ["frontend", "react"], estimatedHours: 12 },
  { id: 3, projectId: 1, title: "Set Up Analytics Tracking", description: "Integrate Google Analytics and custom events", assignee: { name: "Sarah Johnson", avatar: "SJ" }, status: "todo", priority: "medium", dueDate: "2025-01-20", tags: ["analytics"], estimatedHours: 4 },
  { id: 4, projectId: 1, title: "Content Migration", description: "Migrate existing content to new CMS", assignee: { name: "Emily Davis", avatar: "ED" }, status: "in-progress", priority: "high", dueDate: "2025-01-18", tags: ["content"], estimatedHours: 16 },
  
  // Mobile App tasks
  { id: 5, projectId: 2, title: "User Authentication Flow", description: "Implement login, signup, and password reset", assignee: { name: "David Kim", avatar: "DK" }, status: "in-progress", priority: "high", dueDate: "2025-01-22", tags: ["auth", "backend"], estimatedHours: 20 },
  { id: 6, projectId: 2, title: "Push Notifications Setup", description: "Configure Firebase Cloud Messaging", assignee: { name: "Bob Wilson", avatar: "BW" }, status: "todo", priority: "medium", dueDate: "2025-01-25", tags: ["notifications"], estimatedHours: 8 },
  { id: 7, projectId: 2, title: "App Store Submission", description: "Prepare and submit to Apple App Store", assignee: { name: "Alice Chen", avatar: "AC" }, status: "todo", priority: "low", dueDate: "2025-02-28", tags: ["deployment"], estimatedHours: 6 },
  
  // Marketing Campaign tasks
  { id: 8, projectId: 3, title: "Social Media Content Calendar", description: "Plan posts for Instagram, Twitter, LinkedIn", assignee: { name: "Carol Martinez", avatar: "CM" }, status: "in-progress", priority: "high", dueDate: "2025-01-15", tags: ["content", "social"], estimatedHours: 10 },
  { id: 9, projectId: 3, title: "Email Campaign Design", description: "Design newsletter templates", assignee: { name: "Tom Rodriguez", avatar: "TR" }, status: "todo", priority: "medium", dueDate: "2025-01-20", tags: ["email", "design"], estimatedHours: 6 },
  
  // API Integration tasks
  { id: 10, projectId: 4, title: "Stripe Payment Integration", description: "Implement payment processing", assignee: { name: "Mike Chen", avatar: "MC" }, status: "done", priority: "high", dueDate: "2025-01-03", tags: ["backend", "payments"], estimatedHours: 16 },
  { id: 11, projectId: 4, title: "API Documentation", description: "Write comprehensive API docs", assignee: { name: "Sarah Johnson", avatar: "SJ" }, status: "done", priority: "medium", dueDate: "2025-01-04", tags: ["documentation"], estimatedHours: 8 },
  
  // Security Audit tasks
  { id: 12, projectId: 5, title: "Penetration Testing", description: "Conduct security penetration tests", assignee: { name: "Emma Davis", avatar: "ED" }, status: "in-progress", priority: "high", dueDate: "2025-01-30", tags: ["security"], estimatedHours: 24 },
  { id: 13, projectId: 5, title: "Security Report", description: "Compile findings and recommendations", assignee: { name: "James Wilson", avatar: "JW" }, status: "todo", priority: "high", dueDate: "2025-02-01", tags: ["security", "documentation"], estimatedHours: 12 },
  
  // Additional tasks
  { id: 14, projectId: 1, title: "SEO Optimization", description: "Optimize meta tags and structured data", assignee: { name: "Sarah Johnson", avatar: "SJ" }, status: "todo", priority: "medium", dueDate: "2025-01-25", tags: ["seo"], estimatedHours: 6 },
  { id: 15, projectId: 2, title: "Beta Testing Program", description: "Recruit and manage beta testers", assignee: { name: "Alice Chen", avatar: "AC" }, status: "in-progress", priority: "medium", dueDate: "2025-02-15", tags: ["testing"], estimatedHours: 10 },
];

export const teamMembers = [
  { id: 1, name: "Alice Chen", avatar: "AC", role: "Senior Developer", email: "alice.chen@taskflow.com", activeProjects: 3, tasksCompleted: 45 },
  { id: 2, name: "Bob Wilson", avatar: "BW", role: "Full Stack Developer", email: "bob.wilson@taskflow.com", activeProjects: 2, tasksCompleted: 38 },
  { id: 3, name: "Carol Martinez", avatar: "CM", role: "Marketing Manager", email: "carol.martinez@taskflow.com", activeProjects: 2, tasksCompleted: 52 },
  { id: 4, name: "David Kim", avatar: "DK", role: "Product Manager", email: "david.kim@taskflow.com", activeProjects: 3, tasksCompleted: 41 },
  { id: 5, name: "Emily Davis", avatar: "ED", role: "Content Strategist", email: "emily.davis@taskflow.com", activeProjects: 2, tasksCompleted: 35 },
  { id: 6, name: "James Wilson", avatar: "JW", role: "Security Engineer", email: "james.wilson@taskflow.com", activeProjects: 1, tasksCompleted: 29 },
  { id: 7, name: "Mike Chen", avatar: "MC", role: "Backend Developer", email: "mike.chen@taskflow.com", activeProjects: 4, tasksCompleted: 48 },
  { id: 8, name: "Sarah Johnson", avatar: "SJ", role: "Lead Designer", email: "sarah.johnson@taskflow.com", activeProjects: 3, tasksCompleted: 56 },
  { id: 9, name: "Tom Rodriguez", avatar: "TR", role: "Social Media Manager", email: "tom.rodriguez@taskflow.com", activeProjects: 1, tasksCompleted: 31 },
];

export const activityFeed = [
  { user: "Alice Chen", avatar: "AC", action: "completed task", task: "Design Homepage Mockups", project: "Website Redesign 2025", time: "2 mins ago", color: "from-blue-500 to-cyan-500" },
  { user: "Mike Chen", avatar: "MC", action: "commented on", task: "Implement Navigation Component", project: "Website Redesign 2025", time: "15 mins ago", color: "from-purple-500 to-pink-500" },
  { user: "Carol Martinez", avatar: "CM", action: "started working on", task: "Social Media Content Calendar", project: "Marketing Campaign Q1", time: "1 hour ago", color: "from-green-500 to-emerald-500" },
  { user: "David Kim", avatar: "DK", action: "created new task", task: "User Authentication Flow", project: "Mobile App Launch", time: "2 hours ago", color: "from-yellow-500 to-orange-500" },
  { user: "Emma Davis", avatar: "ED", action: "updated priority for", task: "Penetration Testing", project: "Security Audit", time: "3 hours ago", color: "from-red-500 to-pink-500" },
];
