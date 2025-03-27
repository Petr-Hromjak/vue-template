import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api', // replace with your backend base URL
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // if you're using cookies for auth
});

// Optional: Add request/response interceptors here if needed

export default api;
