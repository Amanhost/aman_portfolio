import React, { useEffect, useRef } from "react";
import useReducedMotion from "../../../hooks/useReducedMotion";

/**
 * Emits a short spark burst wherever the user clicks.
 * One shared canvas, and the rAF loop only runs while sparks are alive.
 */
const ClickSpark = ({
  color = "#10b981",
  count = 10,
  distance = 42,
  duration = 480,
}) => {
  const canvasRef = useRef(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return undefined;

    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext("2d");
    let sparks = [];
    let raf = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const easeOut = (t) => 1 - Math.pow(1 - t, 3);

    const loop = (now) => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      sparks = sparks.filter((spark) => now - spark.start < duration);

      sparks.forEach((spark) => {
        const progress = (now - spark.start) / duration;
        const eased = easeOut(progress);
        const reach = distance * eased;

        ctx.globalAlpha = 1 - progress;
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.lineCap = "round";

        spark.angles.forEach((angle) => {
          const x1 = spark.x + Math.cos(angle) * reach;
          const y1 = spark.y + Math.sin(angle) * reach;
          const x2 = spark.x + Math.cos(angle) * (reach + 8 * (1 - progress));
          const y2 = spark.y + Math.sin(angle) * (reach + 8 * (1 - progress));
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();
        });
      });

      ctx.globalAlpha = 1;

      if (sparks.length) {
        raf = window.requestAnimationFrame(loop);
      } else {
        raf = 0;
      }
    };

    const onClick = (event) => {
      const angles = Array.from(
        { length: count },
        (_, i) => (i / count) * Math.PI * 2 + Math.random() * 0.2,
      );
      sparks.push({
        x: event.clientX,
        y: event.clientY,
        angles,
        start: performance.now(),
      });
      if (!raf) raf = window.requestAnimationFrame(loop);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("click", onClick);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [color, count, distance, duration, reduced]);

  if (reduced) return null;

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[95]"
      aria-hidden="true"
    />
  );
};

export default ClickSpark;
