import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
});

// This intercepts every request before it leaves the frontend
API.interceptors.request.use((req) => {
  // Check if we have a token saved in the browser
  const token = localStorage.getItem('adminToken');
  
  if (token) {
    // If we do, attach it to the headers (This is what the backend bouncer checks)
    req.headers.Authorization = `Bearer ${token}`;
  }
  
  return req;
});

export default API;