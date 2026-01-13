// Local Storage Keys
const TASKS_KEY = 'taskflow_tasks';
const ACTIVITY_KEY = 'taskflow_activity';
const PROJECTS_KEY = 'taskflow_projects';
const SETTINGS_KEY = 'taskflow_settings';
const USERS_KEY = 'taskflow_users';

// Initial Data
const INITIAL_TASKS = [
  { id: '1', title: "Design Homepage Mockups", status: "todo", priority: "high", assignee: "Alice Chen", avatar: "AC", projectId: 1 },
  { id: '2', title: "Build REST API Endpoints", status: "in-progress", priority: "high", assignee: "Bob Wilson", avatar: "BW", projectId: 2 },
  { id: '3', title: "Write User Documentation", status: "done", priority: "medium", assignee: "Carol Martinez", avatar: "CM", projectId: 1 },
  { id: '4', title: "Code Review Sprint 3", status: "in-progress", priority: "low", assignee: "David Kim", avatar: "DK", projectId: 2 },
  { id: '5', title: "Deploy to Staging", status: "todo", priority: "high", assignee: "Emma Davis", avatar: "ED", projectId: 4 },
];

const INITIAL_ACTIVITY = [
  { id: 1, user: "Alice Chen", avatar: "AC", action: "completed", task: "Homepage Design Mockups", time: "2 mins ago", color: "from-blue-500 to-cyan-500" },
  { id: 2, user: "Bob Wilson", avatar: "BW", action: "started working on", task: "API Development Sprint 4", time: "15 mins ago", color: "from-purple-500 to-pink-500" },
  { id: 3, user: "Carol Martinez", avatar: "CM", action: "commented on", task: "User Documentation Review", time: "1 hour ago", color: "from-green-500 to-emerald-500" },
];

const INITIAL_PROJECTS = [
  { id: 1, title: "Website Redesign", department: "Design", progress: 75, members: 4, color: "from-blue-500 to-cyan-500" },
  { id: 2, title: "Mobile App API", department: "Engineering", progress: 40, members: 8, color: "from-purple-500 to-pink-500" },
  { id: 3, title: "Q3 Marketing Campaign", department: "Marketing", progress: 90, members: 3, color: "from-green-500 to-emerald-500" },
  { id: 4, title: "Data Migration", department: "DevOps", progress: 20, members: 2, color: "from-yellow-500 to-orange-500" },
];

const INITIAL_USERS = [
  { id: 1, name: "Alice Chen", avatar: "AC", color: "from-blue-500 to-cyan-500", role: "Product Designer", email: "alice@example.com" },
  { id: 2, name: "Bob Wilson", avatar: "BW", color: "from-purple-500 to-pink-500", role: "Frontend Dev", email: "bob@example.com" },
  { id: 3, name: "Carol Martinez", avatar: "CM", color: "from-green-500 to-emerald-500", role: "Backend Dev", email: "carol@example.com" },
  { id: 4, name: "David Kim", avatar: "DK", color: "from-yellow-500 to-orange-500", role: "QA Engineer", email: "david@example.com" },
  { id: 5, name: "Emma Davis", avatar: "ED", color: "from-red-500 to-pink-500", role: "DevOps", email: "emma@example.com" },
];

const INITIAL_SETTINGS = {
  profile: { name: "Current User", email: "user@taskflow.pro" },
  notifications: { email: true, push: false },
  theme: "light",
  privacy: { visibleProfile: true }
};

const loadData = (key, initial) => {
  try {
    const serialized = localStorage.getItem(key);
    return serialized ? JSON.parse(serialized) : initial;
  } catch (err) {
    console.error(`Load ${key} failed:`, err);
    return initial;
  }
};

const saveData = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (err) {
    console.error(`Save ${key} failed:`, err);
  }
};

export const loadTasks = () => loadData(TASKS_KEY, INITIAL_TASKS);
export const saveTasks = (tasks) => saveData(TASKS_KEY, tasks);

export const loadActivity = () => loadData(ACTIVITY_KEY, INITIAL_ACTIVITY);
export const saveActivity = (activity) => saveData(ACTIVITY_KEY, activity);

export const loadProjects = () => loadData(PROJECTS_KEY, INITIAL_PROJECTS);
export const saveProjects = (projects) => saveData(PROJECTS_KEY, projects);

export const loadUsers = () => loadData(USERS_KEY, INITIAL_USERS);
export const saveUsers = (users) => saveData(USERS_KEY, users);

export const loadSettings = () => loadData(SETTINGS_KEY, INITIAL_SETTINGS);
export const saveSettings = (settings) => saveData(SETTINGS_KEY, settings);
