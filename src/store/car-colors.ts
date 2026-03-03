import { create } from "zustand";

interface CarColorsState {
  colors: Record<string, string>;
  selectedColor: string | null;
  addColor: (color: string) => void;
  setPartColor: (part: string, color: string) => void;
  setSelectedColor: (color: string | null) => void;
}

export const useCarColorsStore = create<CarColorsState>((set) => ({
  colors: { wheels: "gray", body: "#40c9ea" },
  selectedColor: null,
  addColor: (color) => set((state) => ({ colors: { ...state.colors, color } })),
  setPartColor: (part, color) =>
    set((state) => ({ colors: { ...state.colors, [part]: color } })),
  setSelectedColor: (selectedColor) => set({ selectedColor }),
}));
