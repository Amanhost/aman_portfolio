import React from "react";
import { motion } from "framer-motion";

const SectionWrapper = ({ id, children, className = "" }) => {
  return (
    <motion.section
      id={id}
      className={`relative py-24 bg-brand-bg overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {children}
      </div>
    </motion.section>
  );
};

export default SectionWrapper;
