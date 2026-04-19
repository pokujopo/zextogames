import { create } from 'zustand';

export const useToastStore = create((set) => ({
  toasts: [],
  pushToast(toast) {
    const id = crypto.randomUUID();
    set((state) => ({ toasts: [...state.toasts, { id, variant: 'info', ...toast }] }));
    setTimeout(() => set((state) => ({ toasts: state.toasts.filter((item) => item.id !== id) })), 3200);
  },
  removeToast(id) {
    set((state) => ({ toasts: state.toasts.filter((item) => item.id !== id) }));
  },
}));
