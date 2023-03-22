import { create } from 'zustand'

type Theme = 'dark' | 'light';

type ThemeState = {
  setTheme(theme: Theme): void;
  theme: Theme;
};

export const useTheme = create<ThemeState>((set) => ({
  theme: 'dark',
  setTheme: (theme) => set({ theme }),
}))