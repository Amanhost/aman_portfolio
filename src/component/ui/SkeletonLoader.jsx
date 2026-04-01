import React from "react";

const SkeletonLoader = ({ className = "", count = 1 }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={`animate-shimmer bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-800 bg-[length:200%_100%] rounded-xl ${className}`}
        />
      ))}
    </>
  );
};

export default SkeletonLoader;
