import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  loadTasks, saveTasks, 
  loadActivity, saveActivity,
  loadProjects, saveProjects,
  loadUsers, saveUsers,
  loadSettings, saveSettings
} from '../../../utils/taskStorage';

const TaskContext = createContext();

export function useTaskContext() {
  return useContext(TaskContext);
}

export function TaskProvider({ children }) {
  const [currentView, setCurrentView] = useState('Dashboard');
  const [tasks, setTasks] = useState([]);
  const [activityLog, setActivityLog] = useState([]);
  const [projects, setProjects] = useState([]);
  const [users, setUsers] = useState([]);
  const [settings, setSettings] = useState({});

  // Load initial data
  useEffect(() => {
    setTasks(loadTasks());
    setActivityLog(loadActivity());
    setProjects(loadProjects());
    setUsers(loadUsers());
    setSettings(loadSettings());
  }, []);

  // Save on change
  useEffect(() => { if (tasks.length > 0) saveTasks(tasks); }, [tasks]);
  useEffect(() => { if (activityLog.length > 0) saveActivity(activityLog); }, [activityLog]);
  useEffect(() => { if (projects.length > 0) saveProjects(projects); }, [projects]);
  useEffect(() => { if (users.length > 0) saveUsers(users); }, [users]);
  useEffect(() => { if (Object.keys(settings).length > 0) saveSettings(settings); }, [settings]);

  const logActivity = (action, taskTitle) => {
    const newLog = {
      id: Date.now(),
      user: "You",
      avatar: "ME",
      action,
      task: taskTitle,
      time: "Just now",
      color: "from-gray-700 to-gray-900"
    };
    setActivityLog(prev => [newLog, ...prev].slice(0, 20));
  };

  const addTask = (task) => {
    const newTask = {
      id: Date.now().toString(),
      ...task,
      status: 'todo',
      createdAt: new Date().toISOString()
    };
    setTasks(prev => [...prev, newTask]);
    logActivity("created task", newTask.title);
  };

  const updateTask = (id, updates) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, ...updates } : t));
    const task = tasks.find(t => t.id === id);
    if (updates.status && task && task.status !== updates.status) {
      logActivity(`moved to ${updates.status.replace('-', ' ')}`, task.title);
    } else if (task) {
        logActivity("updated task", task.title);
    }
  };

  const deleteTask = (id) => {
    const task = tasks.find(t => t.id === id);
    if (task) {
      setTasks(prev => prev.filter(t => t.id !== id));
      logActivity("deleted task", task.title);
    }
  };

  const moveTask = (taskId, newStatus) => {
    setTasks(prev => prev.map(t => t.id === taskId ? { ...t, status: newStatus } : t));
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        logActivity(`moved to ${newStatus.replace('-', ' ')}`, task.title);
    }
  };

  const addProject = (project) => {
    const newProject = {
      id: Date.now(),
      progress: 0,
      members: 1,
      ...project
    };
    setProjects(prev => [...prev, newProject]);
    logActivity("created project", newProject.title);
  };

  const addTeamMember = (member) => {
    const newMember = {
      id: Date.now(),
      ...member
    };
    setUsers(prev => [...prev, newMember]);
    logActivity("invted member", member.name);
  };

  const updateSettings = (section, key, value) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value
      }
    }));
  };

  return (
    <TaskContext.Provider value={{
      currentView,
      setCurrentView,
      tasks,
      users,
      projects,
      settings,
      activityLog,
      addTask,
      updateTask,
      deleteTask,
      moveTask,
      addProject,
      addTeamMember,
      updateSettings
    }}>
      {children}
    </TaskContext.Provider>
  );
}
