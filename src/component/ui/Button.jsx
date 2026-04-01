import React from "react";
import { motion } from "framer-motion";

const variants = {
  primary:
    "bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-600 hover:to-teal-600 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40",
  outline:
    "border border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-400",
  ghost: "text-neutral-300 hover:text-white hover:bg-white/5",
};

const Button = ({
  children,
  variant = "primary",
  href,
  to,
  className = "",
  ...props
}) => {
  const baseClass = `inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${variants[variant]} ${className}`;

  const MotionTag = href ? motion.a : motion.button;
  const linkProps = href
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <MotionTag
      className={baseClass}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      {...linkProps}
      {...props}
    >
      {children}
    </MotionTag>
  );
};

export default Button;
