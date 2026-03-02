import { create } from "zustand";

interface CarColorsState {
  colors: Record<string, string>;
  selectedColor: string | null;
  addColor: (color: string) => void;
  setSelectedColor: (color: string | null) => void;
}

export const useCarColorsStore = create<CarColorsState>((set) => ({
  colors: { wheels: "gray", body: "#111111" },
  selectedColor: null,
  addColor: (color) => set((state) => ({ colors: { ...state.colors, color } })),
  setSelectedColor: (selectedColor) => set({ selectedColor }),
}));
