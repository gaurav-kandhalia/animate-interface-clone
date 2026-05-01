import { motion } from "framer-motion";
import { MapPin, Globe, BadgeCheck } from "lucide-react";

const LETTERS = ["f", "l", "o", "e"];

export function Hero() {
  return (
<section className="relative min-h-screen flex flex-col justify-center overflow-hidden">

  <div className="flex-1 flex items-center justify-center pt-28">
    <h1 className="sr-only">floe</h1>

 <div className="w-full flex justify-center overflow-hidden">
  <motion.h1
    className="flex text-foreground leading-none whitespace-nowrap
 text-[clamp(7.5rem,34vw,75rem)]
    md:text-[clamp(9.5rem,42vw,85rem)]
    lg:text-[clamp(13rem,50vw,110rem)]
    "
    style={{
      // fontSize: "clamp(10rem, 30vw, 40rem)",
      fontWeight: 900,
      letterSpacing: "0.02em",
      whiteSpace: "nowrap",
       lineHeight: "0.8"
    }}
  >
    {LETTERS.map((char, i) => (
      <motion.span
        key={i}
        initial={{ y: "-60%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.2 + i * 0.08,
        }}
        className="inline-block"
      >
        {char}
      </motion.span>
    ))}
  </motion.h1>
</div>
  </div>

<div className="mt-18 border-y border-border/60">

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.9, duration: 0.6 }}
    className="
      grid grid-cols-1 md:grid-cols-3
      divide-y md:divide-y-0 md:divide-x
      divide-border/60
      px-6 md:px-10 py-2 text-center
    "
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
</div>

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
