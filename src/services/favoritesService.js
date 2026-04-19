import { storage } from '@/utils/storage';

const KEY = 'zexto:favorites';

export const favoritesService = {
  getFavorites() {
    return Promise.resolve({ data: storage.get(KEY, []) });
  },
  toggleFavorite(game) {
    const favorites = storage.get(KEY, []);
    const exists = favorites.some((item) => item.id === game.id);
    const next = exists ? favorites.filter((item) => item.id !== game.id) : [game, ...favorites];
    storage.set(KEY, next);
    return Promise.resolve({ data: next, action: exists ? 'removed' : 'added' });
  },
  removeFavorite(gameId) {
    const next = storage.get(KEY, []).filter((item) => item.id !== gameId);
    storage.set(KEY, next);
    return Promise.resolve({ data: next });
  },
};
