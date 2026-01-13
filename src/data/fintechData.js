// Fintech wallet data
export const transactions = [
  { id: 1, type: "expense", category: "Food & Dining", merchant: "Starbucks", amount: 4.50, date: "2025-01-06", time: "08:30 AM", status: "completed", icon: "☕" },
  { id: 2, type: "income", category: "Salary", merchant: "Acme Corp", amount: 3500.00, date: "2025-01-05", time: "09:00 AM", status: "completed", icon: "💼" },
  { id: 3, type: "expense", category: "Shopping", merchant: "Amazon", amount: 89.99, date: "2025-01-04", time: "02:15 PM", status: "completed", icon: "🛍️" },
  { id: 4, type: "expense", category: "Transportation", merchant: "Uber", amount: 12.30, date: "2025-01-04", time: "06:45 PM", status: "completed", icon: "🚗" },
  { id: 5, type: "income", category: "Refund", merchant: "Best Buy", amount: 45.00, date: "2025-01-03", time: "11:20 AM", status: "completed", icon: "↩️" },
  { id: 6, type: "expense", category: "Utilities", merchant: "Electric Company", amount: 125.00, date: "2025-01-03", time: "10:00 AM", status: "completed", icon: "⚡" },
  { id: 7, type: "expense", category: "Entertainment", merchant: "Netflix", amount: 15.99, date: "2025-01-02", time: "03:00 PM", status: "completed", icon: "🎬" },
  { id: 8, type: "expense", category: "Food & Dining", merchant: "Whole Foods", amount: 156.78, date: "2025-01-02", time: "05:30 PM", status: "completed", icon: "🛒" },
  { id: 9, type: "expense", category: "Healthcare", merchant: "CVS Pharmacy", amount: 32.50, date: "2025-01-01", time: "01:15 PM", status: "completed", icon: "💊" },
  { id: 10, type: "income", category: "Freelance", merchant: "Client Project", amount: 800.00, date: "2024-12-31", time: "04:00 PM", status: "completed", icon: "💻" }
];

export const cards = [
  {
    id: 1,
    name: "PayFlow Visa",
    number: "**** **** **** 4532",
    type: "Visa",
    bank: "Chase Bank",
    exp: "12/27",
    balance: 2500.00,
    limit: 10000,
    color: "from-purple-600 to-pink-600"
  },
  {
    id: 2,
    name: "Business Card",
    number: "**** **** **** 8821",
    type: "Mastercard",
    bank: "Bank of America",
    exp: "08/26",
    balance: 1200.00,
    limit: 15000,
    color: "from-blue-600 to-cyan-600"
  }
];

export const budgetCategories = [
  { category: "Food & Dining", budget: 500, spent: 246.28, color: "bg-orange-500" },
  { category: "Shopping", budget: 300, spent: 89.99, color: "bg-purple-500" },
  { category: "Transportation", budget: 200, spent: 12.30, color: "bg-blue-500" },
  { category: "Utilities", budget: 150, spent: 125.00, color: "bg-yellow-500" },
  { category: "Entertainment", budget: 100, spent: 15.99, color: "bg-pink-500" }
];

export const savingsGoals = [
  { id: 1, name: "Emergency Fund", target: 10000, current: 7500, color: "from-green-500 to-emerald-500" },
  { id: 2, name: "Vacation", target: 3000, current: 1200, color: "from-blue-500 to-cyan-500" },
  { id: 3, name: "New Car", target: 25000, current: 8500, color: "from-purple-500 to-pink-500" }
];
