import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useReducedMotion from "../../../hooks/useReducedMotion";

/**
 * Cycles through phrases with a vertical roll. Each phrase animates
 * per-character so it reads as a mechanical flip rather than a fade.
 */
const RotatingText = ({
  texts = [],
  interval = 2600,
  className = "",
  stagger = 0.02,
}) => {
  const [index, setIndex] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || texts.length <= 1) return undefined;
    const id = window.setInterval(
      () => setIndex((prev) => (prev + 1) % texts.length),
      interval,
    );
    return () => window.clearInterval(id);
  }, [texts.length, interval, reduced]);

  if (!texts.length) return null;

  if (reduced) {
    return <span className={className}>{texts[0]}</span>;
  }

  return (
    <span
      className={`relative inline-flex overflow-hidden align-bottom pb-[0.15em] ${className}`}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          className="inline-flex"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: stagger } },
            exit: { transition: { staggerChildren: stagger / 2 } },
          }}
          aria-label={texts[index]}
        >
          {Array.from(texts[index]).map((char, i) => (
            <motion.span
              key={`${char}-${i}`}
              className="inline-block whitespace-pre"
              aria-hidden="true"
              variants={{
                hidden: { y: "100%", opacity: 0 },
                visible: {
                  y: "0%",
                  opacity: 1,
                  transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                },
                exit: {
                  y: "-100%",
                  opacity: 0,
                  transition: { duration: 0.3, ease: "easeIn" },
                },
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default RotatingText;
