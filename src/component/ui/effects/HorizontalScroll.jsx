import React, { useCallback, useEffect, useRef, useState } from "react";

/**
 * Turns vertical scrolling into right-to-left horizontal movement.
 *
 * The outer wrapper is made tall enough to cover the full horizontal travel,
 * and a sticky viewport inside it holds the track. Native scrolling is never
 * hijacked - we only read scrollY and write a transform.
 */
const HorizontalScroll = ({ children, className = "", showProgress = true }) => {
  const wrapperRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const progressRef = useRef(null);
  const frame = useRef(0);

  const [distance, setDistance] = useState(0);

  const measure = useCallback(() => {
    const track = trackRef.current;
    const viewport = viewportRef.current;
    if (!track || !viewport) return;
    // how far the track must slide for its last item to reach the right edge
    setDistance(Math.max(track.scrollWidth - viewport.clientWidth, 0));
  }, []);

  useEffect(() => {
    measure();

    const track = trackRef.current;
    if (!track) return undefined;

    const observer = new ResizeObserver(measure);
    observer.observe(track);
    if (viewportRef.current) observer.observe(viewportRef.current);

    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure, children]);

  useEffect(() => {
    const update = () => {
      frame.current = 0;
      const wrapper = wrapperRef.current;
      const track = trackRef.current;
      if (!wrapper || !track) return;

      const total = wrapper.offsetHeight - window.innerHeight;
      const scrolled = -wrapper.getBoundingClientRect().top;
      const progress = total > 0 ? Math.min(Math.max(scrolled / total, 0), 1) : 0;

      track.style.transform = `translate3d(${-progress * distance}px, 0, 0)`;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`;
      }
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
  }, [distance]);

  return (
    <div
      ref={wrapperRef}
      className={`relative ${className}`}
      style={{ height: `calc(100vh + ${distance}px)` }}
    >
      <div
        ref={viewportRef}
        className="sticky top-0 flex h-screen items-center overflow-hidden"
      >
        <div
          ref={trackRef}
          className="flex will-change-transform"
          style={{ transform: "translate3d(0,0,0)" }}
        >
          {children}
        </div>

        {showProgress && (
          <div className="absolute bottom-10 left-4 right-4 sm:left-8 sm:right-8 h-[2px] bg-white/10">
            <div
              ref={progressRef}
              className="h-full origin-left scale-x-0 bg-gradient-to-r from-emerald-500 to-cyan-400"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default HorizontalScroll;
