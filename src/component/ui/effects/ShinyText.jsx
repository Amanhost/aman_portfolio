import React from "react";

/**
 * Metallic sheen that sweeps across the text via a masked gradient.
 */
const ShinyText = ({ children, className = "", speed = 4, disabled = false }) => {
  return (
    <span
      className={`shiny-text ${disabled ? "shiny-text--off" : ""} ${className}`}
      style={{ "--shiny-duration": `${speed}s` }}
    >
      {children}
    </span>
  );
};

export default ShinyText;
