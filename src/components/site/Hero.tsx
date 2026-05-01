import { motion } from "framer-motion";
import { MapPin, Globe, BadgeCheck } from "lucide-react";

const LETTERS = ["f", "l", "o", "e"];

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-background bg-grid-lines bg-dotgrid overflow-hidden">
      <div className="flex-1 flex items-center justify-center px-4 pt-28">
        <h1 className="sr-only">floe</h1>
        <div className="flex items-center justify-center w-full">
          {LETTERS.map((char, i) => (
            <motion.span
              key={i}
              initial={{ y: "60%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.2 + i * 0.08,
              }}
              className="font-display inline-block leading-none tracking-tighter text-foreground"
              style={{ fontSize: "clamp(8rem, 32vw, 30rem)", fontWeight: 700 }}
              aria-hidden
            >
              {char}
            </motion.span>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-10 pb-12 text-center"
      >
        <Pill
          icon={<MapPin className="w-5 h-5 text-brand-green" />}
          top="Based in Ludhiana,"
          bottom="Punjab"
        />
        <Pill
          icon={<Globe className="w-5 h-5 text-foreground" />}
          top="Available all around"
          bottom="Worldwide"
        />
        <Pill
          icon={<BadgeCheck className="w-5 h-5 text-brand-blue" />}
          top="Media Company"
          bottom="+ Framer Developer"
        />
      </motion.div>
    </section>
  );
}

function Pill({
  icon,
  top,
  bottom,
}: {
  icon: React.ReactNode;
  top: string;
  bottom: string;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="mb-1">{icon}</div>
      <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-foreground">
        {top}
      </p>
      <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
        {bottom}
      </p>
    </div>
  );
}
