import React from "react";

/**
 * Wraps content in a rounded frame with a gradient light orbiting the border.
 */
const StarBorder = ({
  children,
  className = "",
  speed = 5,
  radius = "9999px",
}) => {
  return (
    <span
      className={`star-border ${className}`}
      style={{ "--star-duration": `${speed}s`, "--star-radius": radius }}
    >
      <span className="star-border__glow" aria-hidden="true" />
      <span className="star-border__inner">{children}</span>
    </span>
  );
};

export default StarBorder;
