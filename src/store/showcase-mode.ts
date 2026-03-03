import { create } from "zustand";

interface ShowcaseModeState {
  isShowcaseMode: boolean;
  showcaseBlinked: boolean;
  setIsShowcaseMode: (isShowcaseMode: boolean) => void;
  setIsShowCaseBlinked: (isBlink: boolean) => void;
}

export const useShowcaseModeStore = create<ShowcaseModeState>((set) => ({
  isShowcaseMode: false,
  setIsShowcaseMode: (isShowcaseMode) => set({ isShowcaseMode }),
  showcaseBlinked: false,
  setIsShowCaseBlinked: (isBlink) => set({ showcaseBlinked: isBlink }),
}));
