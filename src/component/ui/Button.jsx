import React from "react";
import { motion } from "framer-motion";

const variants = {
  primary:
    "bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-600 hover:to-teal-600 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40",
  outline:
    "border border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-400",
  ghost: "text-neutral-300 hover:text-white hover:bg-white/5",
};

// Height of the fixed header, so anchored sections aren't hidden behind it.
const HEADER_OFFSET = 80;

const isSameTab = (href) =>
  href.startsWith("#") ||
  href.startsWith("/") ||
  href.startsWith("mailto:") ||
  href.startsWith("tel:");

const Button = ({
  children,
  variant = "primary",
  href,
  className = "",
  onClick,
  ...props
}) => {
  const baseClass = `inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${variants[variant]} ${className}`;

  const MotionTag = href ? motion.a : motion.button;

  // Only external destinations should open a new tab.
  const linkProps = href
    ? {
        href,
        ...(isSameTab(href)
          ? {}
          : { target: "_blank", rel: "noopener noreferrer" }),
      }
    : {};

  const handleClick = (event) => {
    if (href?.startsWith("#")) {
      const target = document.querySelector(href);
      if (target) {
        event.preventDefault();
        const top =
          target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
        const reduced = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;
        window.scrollTo({ top, behavior: reduced ? "auto" : "smooth" });
      }
    }

    onClick?.(event);
  };

  return (
    <MotionTag
      className={baseClass}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={handleClick}
      {...linkProps}
      {...props}
    >
      {children}
    </MotionTag>
  );
};

export default Button;
