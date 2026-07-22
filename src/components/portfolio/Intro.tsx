import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Intro({ onDone }: { onDone: () => void }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 2600);
    const d = setTimeout(() => onDone(), 3100);
    return () => {
      clearTimeout(t);
      clearTimeout(d);
    };
  }, [onDone]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <div className="relative flex items-center justify-center">
            {/* Silver line draws in */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 180, opacity: [0, 1, 1, 0] }}
              transition={{
                duration: 1.6,
                times: [0, 0.3, 0.75, 1],
                ease: [0.65, 0, 0.35, 1],
              }}
              className="absolute h-px"
              style={{ background: "var(--gradient-silver)" }}
            />
            {/* YG monogram fades in as line disappears */}
            <motion.div
              initial={{ opacity: 0, letterSpacing: "0.6em", filter: "blur(8px)" }}
              animate={{
                opacity: [0, 0, 1, 1, 0],
                letterSpacing: ["0.6em", "0.6em", "0.05em", "0.05em", "0.05em"],
                filter: ["blur(8px)", "blur(8px)", "blur(0px)", "blur(0px)", "blur(4px)"],
              }}
              transition={{
                duration: 2.6,
                times: [0, 0.45, 0.6, 0.85, 1],
                ease: [0.65, 0, 0.35, 1],
              }}
              className="text-6xl font-light text-silver-gradient md:text-7xl"
            >
              YG
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
