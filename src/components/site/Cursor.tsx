import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 400, damping: 40, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 400, damping: 40, mass: 0.5 });

  const [hover, setHover] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [view, setView] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    setEnabled(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);

      const t = e.target as HTMLElement | null;
      const interactive = t?.closest("a, button, [data-cursor='hover']");
      setHover(Boolean(interactive));
      const viewEl = t?.closest("[data-cursor='view']");
      setView(Boolean(viewEl));
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
<motion.div
  style={{ x: sx, y: sy }}
  className={`pointer-events-none fixed top-0 left-0 z-[100] ${view ? "" : "mix-blend-difference"}`}
>
  <motion.div
    animate={{ scale: view ? 1.8 : hover ? 2.4 : 1 }}
    transition={{ type: "spring", stiffness: 300, damping: 25 }}
    className="-translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
  >
    {view ? (
      <div className="px-5 py-2 rounded-full font-[var(--font-sans)] bg-white text-black text-xs font-medium tracking-wide">
        VIEW
      </div>
    ) : (
      <div className="w-3 h-3 rounded-full bg-white" />
    )}
  </motion.div>
</motion.div>
  );
}