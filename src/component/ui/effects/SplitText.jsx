import React from "react";
import { motion } from "framer-motion";
import useReducedMotion from "../../../hooks/useReducedMotion";

/**
 * Staggered character or word reveal that fires when it scrolls into view.
 */
const SplitText = ({
  text,
  as = "span",
  by = "chars",
  className = "",
  delay = 0,
  stagger = 0.03,
  once = true,
}) => {
  const reduced = useReducedMotion();
  const MotionTag = motion[as] || motion.span;

  if (reduced) {
    const Tag = as;
    return <Tag className={className}>{text}</Tag>;
  }

  const units = by === "words" ? text.split(" ") : Array.from(text);

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <MotionTag
      className={`inline-block ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.4 }}
      aria-label={text}
    >
      {units.map((unit, index) => (
        <motion.span
          key={`${unit}-${index}`}
          variants={child}
          className="inline-block whitespace-pre"
          aria-hidden="true"
        >
          {unit === " " ? "\u00A0" : unit}
          {by === "words" && index < units.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </MotionTag>
  );
};

export default SplitText;
