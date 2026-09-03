import React from "react";

/**
 * CSS-only aurora wash. Kept off the main thread by animating
 * transform/opacity on a few blurred layers instead of using WebGL.
 */
const Aurora = ({ className = "" }) => {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <span className="aurora-band aurora-band-1" />
      <span className="aurora-band aurora-band-2" />
      <span className="aurora-band aurora-band-3" />
      <span className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(16,185,129,0.10),transparent_60%)]" />
    </div>
  );
};

export default Aurora;
