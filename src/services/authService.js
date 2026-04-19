import apiClient from '@/lib/apiClient';
import { mockApi } from '@/mocks/apiMock';

const USE_MOCKS = import.meta.env.VITE_ENABLE_MOCKS === 'true';

export const authService = {
  loginUser(payload) {
    return USE_MOCKS ? mockApi.loginUser(payload) : apiClient.post('/auth/login', payload).then((res) => res.data);
  },
  registerUser(payload) {
    return USE_MOCKS ? mockApi.registerUser(payload) : apiClient.post('/auth/register', payload).then((res) => res.data);
  },
  forgotPassword(payload) {
    return apiClient.post('/auth/forgot-password', payload).then((res) => res.data);
  },
  resetPassword(payload) {
    return apiClient.post('/auth/reset-password', payload).then((res) => res.data);
  },
  logoutUser() {
    return apiClient.post('/auth/logout').then((res) => res.data);
  },
};
