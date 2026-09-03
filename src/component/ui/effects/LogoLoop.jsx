import React from "react";

/**
 * Seamless marquee. The track holds two copies of the children and shifts
 * by exactly -50%, so the loop point is invisible.
 */
const LogoLoop = ({
  children,
  speed = 30,
  direction = "left",
  pauseOnHover = true,
  fade = true,
  className = "",
}) => {
  const items = React.Children.toArray(children);

  return (
    <div
      className={`logo-loop relative w-full overflow-hidden ${
        fade ? "logo-loop--fade" : ""
      } ${className}`}
    >
      <div
        className={`logo-loop__track ${
          pauseOnHover ? "logo-loop__track--pausable" : ""
        }`}
        style={{
          "--loop-duration": `${speed}s`,
          "--loop-direction": direction === "right" ? "reverse" : "normal",
        }}
      >
        {[0, 1].map((copy) => (
          <div className="logo-loop__group" key={copy} aria-hidden={copy === 1}>
            {items.map((item, index) => (
              <div className="logo-loop__item" key={`${copy}-${index}`}>
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoLoop;
