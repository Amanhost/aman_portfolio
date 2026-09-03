import React, { useEffect, useRef, useState } from "react";

/**
 * Fixed left-to-right reading progress bar.
 * Reads scroll position inside rAF so it never blocks the scroll thread.
 */
const ScrollProgress = ({ showPercent = true }) => {
  const barRef = useRef(null);
  const frame = useRef(0);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const update = () => {
      frame.current = 0;
      const max =
        document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? Math.min(window.scrollY / max, 1) : 0;

      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${ratio})`;
      }
      setPercent(Math.round(ratio * 100));
    };

    const onScroll = () => {
      if (frame.current) return;
      frame.current = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame.current) window.cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[100] pointer-events-none"
      aria-hidden="true"
    >
      <div className="h-[3px] w-full bg-white/5">
        <div
          ref={barRef}
          className="h-full w-full origin-left scale-x-0 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 shadow-[0_0_12px_rgba(16,185,129,0.6)]"
          style={{ willChange: "transform" }}
        />
      </div>

      {showPercent && (
        <span className="hidden md:block absolute right-4 top-3 text-[10px] font-medium tracking-[0.2em] text-emerald-400/70 tabular-nums">
          {percent}%
        </span>
      )}
    </div>
  );
};

export default ScrollProgress;
