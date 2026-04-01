import React from "react";
import { motion } from "framer-motion";

const GlassCard = ({
  children,
  className = "",
  hover = true,
  delay = 0,
  ...props
}) => {
  return (
    <motion.div
      className={`
        relative p-6 rounded-2xl
        bg-white/[0.03] backdrop-blur-md
        border border-white/[0.06]
        ${hover ? "hover:border-emerald-500/30 hover:bg-white/[0.06] hover:shadow-lg hover:shadow-emerald-500/5" : ""}
        transition-all duration-500
        ${className}
      `}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -4 } : {}}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
