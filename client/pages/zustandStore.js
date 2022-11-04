import create from "zustand";
import { devtools } from "zustand/middleware";

export const useStore = create(
  devtools((set) => ({
    bears: 0,
    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),
  }))
);
