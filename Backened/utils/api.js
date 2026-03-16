import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Contact API
export const contactAPI = {
  sendMessage: (data) => api.post('/contact', data),
  trackDownload: (data) => api.post('/contact/track-download', data),
};

// Analytics API
export const analyticsAPI = {
  trackVisit: (data) => api.post('/analytics/track', data),
  getStats: () => api.get('/analytics/stats'),
};

// Projects API
export const projectsAPI = {
  getAll: () => api.get('/projects'),
  getById: (id) => api.get(`/projects/${id}`),
};

export default api;