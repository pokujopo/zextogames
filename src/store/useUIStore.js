import { create } from 'zustand';

export const useUIStore = create((set) => ({
  mobileMenuOpen: false,
  commandPaletteOpen: false,
  previewGame: null,
  adminSidebarOpen: true,
  openMobileMenu() { set({ mobileMenuOpen: true }); },
  closeMobileMenu() { set({ mobileMenuOpen: false }); },
  toggleCommandPalette(value) { set((state) => ({ commandPaletteOpen: value ?? !state.commandPaletteOpen })); },
  openPreview(game) { set({ previewGame: game }); },
  closePreview() { set({ previewGame: null }); },
  toggleAdminSidebar() { set((state) => ({ adminSidebarOpen: !state.adminSidebarOpen })); },
}));
