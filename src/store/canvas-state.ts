import type { Frameloop } from "@react-three/fiber";

import { create } from "zustand";

interface CanvasState {
  frameloop: Frameloop;
  setFrameloop: (frameloop: Frameloop) => void;
}

export const useCanvasStateStore = create<CanvasState>((set) => ({
  frameloop: "demand",
  setFrameloop: (frameloop) => set({ frameloop }),
}));
