import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 5000,
  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY,
  },
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
