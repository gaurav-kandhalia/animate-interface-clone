import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";
import { Marquee } from "./Marquee";
import { APPROACH_IMAGES, APPROACH_MARQUEE } from "@/lib/site-data";

const PHASES = [
  {
    n: "01",
    title: "Discover and Analysis",
    blurb: "Discover opportunities and refine strategies for decisions.",
    images: APPROACH_IMAGES.discover,
  },
  {
    n: "02",
    title: "Design and Implement",
    blurb: "Design and implement solutions to transform ideas.",
    images: APPROACH_IMAGES.design,
  },
  {
    n: "03",
    title: "Deliver and Monitor",
    blurb: "Ensure efficient execution and performance tracking.",
    images: APPROACH_IMAGES.deliver,
  },
];

export function Approach() {
  return (
<section className="relative px-6 md:px-10 py-28 bg-transparent z-10 border-2 border-red-700">

  <div className="w-full h-screen overflow-hidden mb-16">
  <video
    src="https://framerusercontent.com/assets/gk6WdgzIrXmLcDTIslZMhlpZUk.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-full object-cover"
  />
</div>
      <SectionLabel number="01" category="// Approach" meta="Three Phases" />

      <div className="mt-20 max-w-6xl mx-auto text-center">
<motion.h2
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-20%" }}
  transition={{ duration: 0.8 }}
  className="
    font-display text-foreground text-center whitespace-nowrap
    text-[clamp(1.8rem,6vw,4rem)]
    // md:text-[clamp(2.5rem,7vw,6rem)]
   
  "
  style={{
    fontWeight: 700,
    letterSpacing: "-0.03em",
    lineHeight: "0.9",
  }}
>
  WE ARE <span className="italic font-light">FLOE</span> MEDIA & CO.
</motion.h2>
        <p className="mt-8 max-w-xl mx-auto text-muted-foreground">
          Responsive design skills employed to maintain consistency across all
          devices and contexts.
        </p>
      </div>

      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {PHASES.map((phase, idx) => (
          <motion.div
            key={phase.n}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, delay: idx * 0.1 }}
            className="space-y-6"
          >
            <p className="font-mono text-xs text-muted-foreground tracking-widest">
              {phase.n}
            </p>
            <div className="relative h-[420px]">
              {phase.images.map((src, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -6, rotate: 0 }}
                  className="absolute inset-x-0 mx-auto w-[78%] aspect-[4/5] rounded-2xl overflow-hidden bg-surface shadow-2xl"
                  style={{
                    top: i * 36,
                    rotate: `${(i - 1) * 4}deg`,
                    zIndex: 10 - i,
                  }}
                >
                  <img
                    src={src}
                    alt=""
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
            <div className="pt-4">
              <h3 className="font-display text-2xl">{phase.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground max-w-xs">
                {phase.blurb}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-28">
        <Marquee images={APPROACH_MARQUEE} size="md" />
      </div>
    </section>
  );
}
