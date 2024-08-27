import { create } from "zustand";

export const useNotifStore = create((set) => ({
  notifIsOpen: true,
  setNotifIsOpen: (notifIsOpen) => set((state) => ({ ...state, notifIsOpen })),
}));
