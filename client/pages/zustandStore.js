import create from "zustand";
import { devtools } from "zustand/middleware";

export const useStore = create(
  devtools((set) => ({
    guestInfo: {},
    setGuestInfo: (guestInfo) =>
      set(() => ({ guestInfo }), false, "setGuestInfo"),
    showConfirm: false,
    setShowConfirm: (showConfirm) =>
      set(() => ({ showConfirm }), false, "setLevelUp"),
  }))
);
