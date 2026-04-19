import axios from 'axios';
import { useAuthStore } from '@/store/useAuthStore';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 12000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

apiClient.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const normalizedError = {
      status: error.response?.status,
      message: error.response?.data?.message || error.message || 'Unexpected API error',
      details: error.response?.data?.errors || null,
    };
    return Promise.reject(normalizedError);
  },
);

export default apiClient;
