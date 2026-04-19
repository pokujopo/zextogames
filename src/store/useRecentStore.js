import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useRecentStore = create(
  persist(
    (set, get) => ({
      items: [],
      addRecent(game) {
        const next = [game, ...get().items.filter((item) => item.id !== game.id)].slice(0, 12);
        set({ items: next });
      },
      setItems(items) {
        set({ items });
      },
    }),
    { name: 'zexto:recent' },
  ),
);
