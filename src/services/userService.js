import apiClient from '@/lib/apiClient';
import { mockApi } from '@/mocks/apiMock';

const USE_MOCKS = import.meta.env.VITE_ENABLE_MOCKS === 'true';

export const userService = {
  getProfile() {
    return USE_MOCKS ? mockApi.getProfile() : apiClient.get('/me').then((res) => res.data);
  },
};
