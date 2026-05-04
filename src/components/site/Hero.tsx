import { motion } from "framer-motion";
import { MapPin, Globe, BadgeCheck } from "lucide-react";


export function Hero() {
  return (
<section className="relative min-h-screen flex flex-col justify-center overflow-hidden">

  <div className="flex-1 flex flex-col items-center justify-center pt-2 gap-0">
    <h1 className="sr-only">Buzz Culture</h1>

    {/* buzz - large */}
    <div className="w-full flex justify-center overflow-hidden">
      <motion.span
        className="font-display text-foreground leading-none whitespace-nowrap text-[24vw]"
        style={{ fontWeight: 600, letterSpacing: "-0.01em", lineHeight: "0.85" }}
        initial={{ y: "-60%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      >
        buzz
      </motion.span>
    </div>

    {/* culture - smaller */}
    <div className="w-full flex justify-center overflow-hidden">
      <motion.span
        className="font-display text-foreground leading-none whitespace-nowrap text-[28vw]"
        style={{ fontWeight: 600, letterSpacing: "-0.01em", lineHeight: "0.85" }}
        initial={{ y: "60%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
      >
        culture
      </motion.span>
    </div>
  </div>

<div className="mt-10 border-y border-border/60">

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.9, duration: 0.6 }}
    className="
      grid grid-cols-1 md:grid-cols-3
      divide-y md:divide-y-0 md:divide-x
      divide-border/60
      px-22 py-4
    "
  >
    <Pill
      icon={<MapPin className="w-5 h-5 text-brand-green" />}
      top="Based in Ludhiana,"
      bottom="Punjab"
      align="left"
    />
    <Pill
      icon={<Globe className="w-5 h-5 text-foreground" />}
      top="Available all around"
      bottom="Worldwide"
      align="center"
    />
    <Pill
      icon={<BadgeCheck className="w-5 h-5 text-brand-blue" />}
      top="Media Company"
      bottom="+ Framer Developer"
      align="right"
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
  align = "center",
}: {
  icon: React.ReactNode;
  top: string;
  bottom: string;
  align?: "left" | "center" | "right";
}) {
  const cellAlign = {
    left: "items-start",
    center: "items-center",
    right: "items-end",
  }[align];

  return (
    <div className={`flex flex-col py-2 ${cellAlign}`}>
      <div className="flex flex-col items-center gap-1 w-fit">
        <div className="mb-3">{icon}</div>
        <p className="font-display text-sm font-semibold uppercase tracking-normal text-foreground whitespace-nowrap">
          {top}
        </p>
        <p className="font-display text-sm font-normal uppercase tracking-normal text-muted-foreground whitespace-nowrap">
          {bottom}
        </p>
      </div>
    </div>
  );
}
