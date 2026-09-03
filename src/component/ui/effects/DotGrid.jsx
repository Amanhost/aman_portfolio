import React, { useEffect, useRef } from "react";
import useReducedMotion from "../../../hooks/useReducedMotion";

/**
 * Canvas dot field that lights up and pushes away from the cursor.
 * Single canvas + one rAF loop, so it stays cheap regardless of dot count.
 */
const DotGrid = ({
  gap = 32,
  dotSize = 1.6,
  baseColor = "rgba(148, 163, 184, 0.18)",
  activeColor = "16, 185, 129",
  proximity = 130,
  className = "",
}) => {
  const canvasRef = useRef(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const pointer = { x: -9999, y: -9999 };
    let dots = [];
    let raf = 0;
    let dpr = 1;

    const build = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      dots = [];
      const cols = Math.ceil(rect.width / gap);
      const rows = Math.ceil(rect.height / gap);
      const offsetX = (rect.width - (cols - 1) * gap) / 2;
      const offsetY = (rect.height - (rows - 1) * gap) / 2;

      for (let r = 0; r < rows; r += 1) {
        for (let c = 0; c < cols; c += 1) {
          const x = offsetX + c * gap;
          const y = offsetY + r * gap;
          dots.push({ x, y, ox: x, oy: y, vx: 0, vy: 0 });
        }
      }
    };

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      for (let i = 0; i < dots.length; i += 1) {
        const dot = dots[i];
        const dx = pointer.x - dot.ox;
        const dy = pointer.y - dot.oy;
        const dist = Math.hypot(dx, dy);

        let targetX = dot.ox;
        let targetY = dot.oy;
        let glow = 0;

        if (dist < proximity) {
          const force = (1 - dist / proximity) ** 2;
          glow = force;
          // push the dot away from the cursor
          const angle = Math.atan2(dy, dx);
          targetX = dot.ox - Math.cos(angle) * force * 14;
          targetY = dot.oy - Math.sin(angle) * force * 14;
        }

        // spring toward the target for smooth settle
        dot.vx += (targetX - dot.x) * 0.12;
        dot.vy += (targetY - dot.y) * 0.12;
        dot.vx *= 0.82;
        dot.vy *= 0.82;
        dot.x += dot.vx;
        dot.y += dot.vy;

        const radius = dotSize + glow * 1.9;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, radius, 0, Math.PI * 2);
        ctx.fillStyle =
          glow > 0.02
            ? `rgba(${activeColor}, ${0.18 + glow * 0.75})`
            : baseColor;
        ctx.fill();
      }

      raf = window.requestAnimationFrame(draw);
    };

    const onPointerMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
    };

    const onPointerLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
    };

    build();

    if (reduced) {
      // paint one static frame, no loop
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      dots.forEach((dot) => {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dotSize, 0, Math.PI * 2);
        ctx.fillStyle = baseColor;
        ctx.fill();
      });
      return undefined;
    }

    draw();

    const onResize = () => build();
    window.addEventListener("resize", onResize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave);

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [gap, dotSize, baseColor, activeColor, proximity, reduced]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 h-full w-full pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
};

export default DotGrid;
