export const BASE_URL = "http://localhost:8000";

// utils/apiPaths.js
export const API_PATHS = {
  AUTH: {
    REGISTER: "/api/auth/register", // Register a new user
    LOGIN: "/api/auth/login", // Authenticate user & return JWT token
    GET_PROFILE: "/api/auth/profile", // Get logged-in user details
  },
  USERS: {
   GET_ALL_USERS: "/api/users", // Get all users
    GET_USER_BY_ID: (userId) => `/api/users/${userId}`, // Get user by ID
    CREATE_USER: "/api/users", // Create a new user
    UPDATE_USER: (userId) => `/api/users/${userId}`, // Update user by ID
    DELETE_USER: (userId) => `/api/users/${userId}`, // Delete user by ID
  },
  TASKS: {
    GET_DASHBOARD_DATA: "/api/tasks/dashboard-data", // Get dashboard data
    GET_USER_DASHBOARD_DATA: "/api/tasks/user-dashboard-data", // Get user dashboard data
    GET_ALL_TASKS: "/api/tasks", // Get all tasks
    GET_TASK_BY_ID: (taskId) => `/api/tasks/${taskId}`, // Get task by ID
    CREATE_TASK: "/api/tasks", // Create a new task
    UPDATE_TASK: (taskId) => `/api/tasks/${taskId}`, // Update task by ID
    DELETE_TASK: (taskId) => `/api/tasks/${taskId}`, // Delete task by ID

    UPDATE_TASK_STATUS: (taskId) => `/api/tasks/${taskId}/status`, // Update task status
    UPDATE_TASK_CHECKLIST: (taskId) => `/api/tasks/${taskId}/todo`, // Update task checklist

  },
  REPORTS: {
    EXPORT_TASKS: "/api/reports/export/tasks", // Dowload all tasks as an Excel file
    EXPORT_USERS: "/api/reports/export/users", // Download user task report
  },

  IMAGE: {
    UPLOAD_IMAGE: "api/auth/upload-image", // Upload an image
  },
};