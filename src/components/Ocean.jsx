import { useEffect, useRef } from "react";

const REDUCE = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Animated sea of contour lines drawn on a canvas. `tint` is the line colour.
// With `transparent`, the canvas draws only the lines (over a CSS background) and
// takes their colour from the --hero-line custom property, so it follows the theme.
export default function Ocean({ glow = true, tint = [253, 195, 0], transparent = false }) {
  const ref = useRef(null);
  useEffect(() => {
    const cv = ref.current, ctx = cv.getContext("2d");
    let raf = 0, W = 0, H = 0, dpr = 1, alive = true;
    const size = () => {
      const r = cv.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = r.width; H = r.height; cv.width = W * dpr; cv.height = H * dpr;
    };
    const draw = t => {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      let rgb = tint, strength = 1;
      if (transparent) {
        ctx.clearRect(0, 0, W, H);
        rgb = getComputedStyle(cv).getPropertyValue("--hero-line").split(",").map(Number);
        strength = .7;
      } else {
        const g = ctx.createLinearGradient(0, 0, 0, H);
        g.addColorStop(0, "#141518"); g.addColorStop(1, "#24201A");
        ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
      }
      if (glow) {
        const rg = ctx.createRadialGradient(W * .78, H * .34, 0, W * .78, H * .34, Math.max(W, H) * .55);
        rg.addColorStop(0, "rgba(253,195,0,.5)"); rg.addColorStop(.35, "rgba(243,146,0,.18)"); rg.addColorStop(1, "rgba(243,146,0,0)");
        ctx.fillStyle = rg; ctx.fillRect(0, 0, W, H);
      }
      const s = t / 1000, lines = Math.round(H / 14);
      for (let i = 0; i < lines; i++) {
        const y0 = H * .38 + (i / lines) * H * .75, depth = i / lines;
        ctx.beginPath();
        for (let x = 0; x <= W; x += 8) {
          const y = y0 + Math.sin(x * .006 + s * .5 + i * .35) * (6 + depth * 18) + Math.sin(x * .013 - s * .32 + i * .9) * (3 + depth * 8) - Math.cos(x * .0021 + s * .15) * 20 * depth;
          x ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
        }
        ctx.strokeStyle = `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${(.07 + depth * .26) * strength})`;
        ctx.lineWidth = .6 + depth * 1.1; ctx.stroke();
      }
      if (!REDUCE && alive) raf = requestAnimationFrame(draw);
    };
    size(); draw(0);
    const ro = new ResizeObserver(() => { size(); if (REDUCE) draw(0); });
    ro.observe(cv);
    return () => { alive = false; cancelAnimationFrame(raf); ro.disconnect(); };
  }, [glow, tint, transparent]);
  return <canvas ref={ref} aria-hidden="true" />;
}
