import { storage } from '@/utils/storage';

const KEY = 'zexto:recent';

export const recentlyPlayedService = {
  getRecentlyPlayed() {
    return Promise.resolve({ data: storage.get(KEY, []) });
  },
  addRecent(game) {
    const recent = storage.get(KEY, []);
    const next = [game, ...recent.filter((item) => item.id !== game.id)].slice(0, 12);
    storage.set(KEY, next);
    return Promise.resolve({ data: next });
  },
};
