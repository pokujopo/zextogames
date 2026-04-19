import apiClient from '@/lib/apiClient';
import { mockApi } from '@/mocks/apiMock';

const USE_MOCKS = import.meta.env.VITE_ENABLE_MOCKS === 'true';
const unwrap = (promise) => promise.then((res) => res.data);

export const categoriesService = {
  getCategories() {
    return USE_MOCKS ? mockApi.getCategories() : unwrap(apiClient.get('/categories'));
  },
  getCategoryBySlug(slug) {
    return USE_MOCKS ? mockApi.getCategoryBySlug(slug) : unwrap(apiClient.get(`/categories/${slug}`));
  },
};
