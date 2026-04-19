import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      token: null,
      role: 'user',
      setSession(payload) {
        set({ user: payload.user, token: payload.token, role: payload.user?.role || 'user' });
      },
      logout() {
        set({ user: null, token: null, role: 'guest' });
      },
    }),
    { name: 'zexto:auth' },
  ),
);
