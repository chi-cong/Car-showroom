// components/ui/LoadingScreen.jsx
import { useProgress } from "@react-three/drei";
import { motion, AnimatePresence } from "motion/react";

export default function LoadingScreen() {
  // active: true if things are loading. progress: a number from 0 to 100
  const { active, progress } = useProgress();

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className='absolute inset-0 z-50 flex flex-col items-center justify-center bg-neutral-950 text-white'
        >
          {/* A sleek, technical loading text */}
          <div className='mb-4 text-sm tracking-[0.2em] text-neutral-400 uppercase'>
            Initializing Showroom
          </div>

          {/* A minimalist progress bar */}
          <div className='w-64 h-[2px] bg-neutral-800 overflow-hidden'>
            <motion.div
              className='h-full bg-white'
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>

          {/* The percentage read-out */}
          <div className='mt-4 font-mono text-xs text-neutral-500'>
            {Math.round(progress)}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
