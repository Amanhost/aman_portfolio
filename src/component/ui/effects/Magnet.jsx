import React, { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import useReducedMotion from "../../../hooks/useReducedMotion";

/**
 * Pulls its child toward the cursor while hovered, then springs back.
 * Skipped on coarse pointers so touch users aren't affected.
 */
const Magnet = ({ children, strength = 0.35, className = "" }) => {
  const ref = useRef(null);
  const reduced = useReducedMotion();

  const x = useSpring(useMotionValue(0), { stiffness: 260, damping: 18 });
  const y = useSpring(useMotionValue(0), { stiffness: 260, damping: 18 });

  const isFinePointer =
    typeof window !== "undefined" &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  const enabled = !reduced && isFinePointer;

  const handleMove = (event) => {
    if (!enabled) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((event.clientX - rect.left - rect.width / 2) * strength);
    y.set((event.clientY - rect.top - rect.height / 2) * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`inline-flex ${className}`}
      style={enabled ? { x, y } : undefined}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      {children}
    </motion.div>
  );
};

export default Magnet;
