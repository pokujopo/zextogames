import apiClient from '@/lib/apiClient';
import { mockApi } from '@/mocks/apiMock';

const USE_MOCKS = import.meta.env.VITE_ENABLE_MOCKS === 'true';
const unwrap = (promise) => promise.then((res) => res.data);

export const gamesService = {
  getFeaturedGames() {
    return USE_MOCKS ? mockApi.getFeaturedGames() : unwrap(apiClient.get('/games/featured'));
  },
  getTrendingGames() {
    return USE_MOCKS ? mockApi.getTrendingGames() : unwrap(apiClient.get('/games/trending'));
  },
  getDownloadGames(params) {
    return USE_MOCKS ? mockApi.getDownloadGames(params) : unwrap(apiClient.get('/games/download', { params }));
  },
  getOnlineGames(params) {
    return USE_MOCKS ? mockApi.getOnlineGames(params) : unwrap(apiClient.get('/games/online', { params }));
  },
  getGameBySlug(slug) {
    return USE_MOCKS ? mockApi.getGameBySlug(slug) : unwrap(apiClient.get(`/games/${slug}`));
  },
  searchGames(params) {
    return USE_MOCKS ? mockApi.searchGames(params) : unwrap(apiClient.get('/search', { params }));
  },
};
