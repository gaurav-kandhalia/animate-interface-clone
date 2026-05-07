import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { SectionLabel } from "./SectionLabel";
import { STATS } from "@/lib/site-data";

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const mv = useMotionValue(0);
  const sp = useSpring(mv, { stiffness: 60, damping: 20 });

  useEffect(() => {
    if (inView) mv.set(to);
  }, [inView, to, mv]);

  useEffect(() => {
    return sp.on("change", (v) => {
      if (ref.current) ref.current.textContent = `${Math.round(v)}${suffix}`;
    });
  }, [sp, suffix]);

  return (
    <span ref={ref} className="tabular-nums">
      0{suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="px-6 md:px-10 py-28 ">
      <SectionLabel number="06" category="// Stats" meta="Fun Facts" />

      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="text-center md:text-left"
          >
            <p className="font-display text-6xl md:text-8xl tracking-tighter leading-none">
              <Counter to={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-4 font-mono text-[11px] tracking-widest uppercase text-muted-foreground">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
