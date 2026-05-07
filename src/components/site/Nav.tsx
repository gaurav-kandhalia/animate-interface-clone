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
      className="px-7.5  py-7"
    >
      <div className="flex items-center justify-between">
        <div className="font-display text-lg tracking-normal font-medium text-foreground/80 uppercase">
          <span className="text-foreground/60 hidden md:block">LOCAL/</span>
          <span className="tabular-nums text-foreground">{time}</span>
        </div>

        <button
          aria-label="Menu"
          className="grid grid-cols-2 gap-[5px] p-2 rounded-full hover:bg-white/10 transition-colors"
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="w-[5px] h-[5px] rounded-full bg-foreground" />
          ))}
        </button>

        <Link
          to="/contact"
          className="hidden  md:inline-flex items-center justify-center rounded-full border-2 border-foreground px-1 md:px-5  py-2 font-display text-sm md:text-lg  tracking-normal font-bold uppercase hover:bg-foreground hover:text-background transition-colors duration-200"
        >
          Contact Now
        </Link>
        <Link
          to="/contact"
          className="md:hidden inline-flex items-center justify-center rounded-full border-2 border-foreground px-5  py-2 font-display text-sm md:text-lg  tracking-normal font-bold uppercase hover:bg-foreground hover:text-background transition-colors duration-200"
        >
          Contact 
        </Link>
      </div>
    </motion.header>
  );
}
