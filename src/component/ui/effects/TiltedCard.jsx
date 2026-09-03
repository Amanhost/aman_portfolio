import React, { useRef, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import useReducedMotion from "../../../hooks/useReducedMotion";

/**
 * 3D perspective tilt that tracks the pointer, with a moving glare highlight.
 * Falls back to a plain container under reduced-motion.
 */
const TiltedCard = ({
  children,
  className = "",
  max = 12,
  glare = true,
  scale = 1.03,
}) => {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 220, damping: 20, mass: 0.6 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [max, -max]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-max, max]), springConfig);

  const glareX = useTransform(x, [-0.5, 0.5], ["10%", "90%"]);
  const glareY = useTransform(y, [-0.5, 0.5], ["10%", "90%"]);
  const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.28), transparent 55%)`;

  const handleMove = (event) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    setHovered(false);
    x.set(0);
    y.set(0);
  };

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      style={{ perspective: 900, rotateX, rotateY, transformStyle: "preserve-3d" }}
      onPointerMove={handleMove}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={handleLeave}
      whileHover={{ scale }}
      transition={{ type: "spring", stiffness: 220, damping: 20 }}
    >
      {children}

      {glare && (
        <motion.span
          className="pointer-events-none absolute inset-0 rounded-[inherit] mix-blend-overlay"
          style={{ background: glareBackground, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.div>
  );
};

export default TiltedCard;
