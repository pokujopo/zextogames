import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useFavoritesStore = create(
  persist(
    (set, get) => ({
      items: [],
      setItems(items) {
        set({ items });
      },
      toggleItem(game) {
        const exists = get().items.some((item) => item.id === game.id);
        set({ items: exists ? get().items.filter((item) => item.id !== game.id) : [game, ...get().items] });
        return exists ? 'removed' : 'added';
      },
      removeItem(gameId) {
        set({ items: get().items.filter((item) => item.id !== gameId) });
      },
    }),
    { name: 'zexto:favorites' },
  ),
);
