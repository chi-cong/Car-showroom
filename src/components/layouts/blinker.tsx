import { AnimatePresence, motion } from "motion/react";
import { useShowcaseModeStore } from "@/store/showcase-mode";

export const Blinker = () => {
  const { showcaseBlinked } = useShowcaseModeStore();
  return (
    <AnimatePresence>
      {showcaseBlinked && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
          className='bg-black absolute w-full h-full z-10'
        />
      )}
    </AnimatePresence>
  );
};
