import create from "zustand";
import { devtools } from "zustand/middleware";

export interface IGuestInfo {
  name: string;
  email: string;
  title: string;
  message: string;
  phone?: string | number;
  people?: string |number;
}

export interface IWeeks {
  Vecka: string;
  Ankomst: string;
  Avresa: string;
  _id: string;
  år?: string;
  isAvailable?: boolean;
}

interface IUserState {
  guestInfo: IGuestInfo;
  setGuestInfo: (guestInfo: IGuestInfo) => void;
  showConfirm: boolean;
  setShowConfirm: (showConfirm: boolean) => void;
  selectedWeeks: IWeeks[];
  setSelectedWeeks: (selectedWeeks: IWeeks[]) => void;
}


export const useStore = create<IUserState>()(
  devtools((set) => ({
    guestInfo: <IGuestInfo>{},
    setGuestInfo: (guestInfo: IGuestInfo) =>
      set(() => ({ guestInfo }), false, "setGuestInfo"),
    showConfirm: false,
    setShowConfirm: (showConfirm: boolean) =>
      set(() => ({ showConfirm }), false, "selectedWeeks"),
    selectedWeeks: [],
    setSelectedWeeks: (selectedWeeks) =>
      set((state) => ({ ...state, selectedWeeks })),
  }))
);