import React, { useRef, useState } from "react";

/**
 * Card that casts a soft spotlight following the cursor.
 * Position is written straight to CSS custom properties to avoid re-renders.
 */
const SpotlightCard = ({
  children,
  className = "",
  color = "rgba(16, 185, 129, 0.18)",
  size = 320,
}) => {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  const handleMove = (event) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
    node.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onPointerMove={handleMove}
      onPointerEnter={() => setActive(true)}
      onPointerLeave={() => setActive(false)}
      className={`relative overflow-hidden ${className}`}
      style={{ "--spot-size": `${size}px`, "--spot-color": color }}
    >
      <span
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: active ? 1 : 0,
          background:
            "radial-gradient(var(--spot-size) circle at var(--spot-x) var(--spot-y), var(--spot-color), transparent 70%)",
        }}
        aria-hidden="true"
      />
      {children}
    </div>
  );
};

export default SpotlightCard;
