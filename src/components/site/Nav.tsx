import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function useClock() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const pad = (n: number) => n.toString().padStart(2, "0");
  return `${pad(time.getHours())}:${pad(time.getMinutes())}:${pad(time.getSeconds())}`;
}

export function Nav() {
  const time = useClock();

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-5"
    >
      <div className="flex items-center justify-between">
        <div className="font-mono text-xs md:text-sm tracking-widest text-foreground/80">
          <span className="text-muted-foreground">LOCAL/</span>{" "}
          <span className="tabular-nums">{time}</span>
        </div>

        <button
          aria-label="Menu"
          className="hidden md:grid grid-cols-2 gap-1.5 p-2 rounded-full hover:bg-accent transition-colors"
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="w-1 h-1 rounded-full bg-foreground/80" />
          ))}
        </button>

        <Link
          to="/contact"
          className="group relative inline-flex items-center justify-center rounded-full border border-foreground/40 px-5 md:px-6 py-2.5 md:py-3 font-mono text-[11px] md:text-xs tracking-[0.18em] uppercase hover:bg-foreground hover:text-background transition-colors"
        >
          Contact Now
        </Link>
      </div>
    </motion.header>
  );
}
