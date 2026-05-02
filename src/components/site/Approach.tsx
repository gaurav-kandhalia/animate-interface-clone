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
<section className="relative px-6 md:px-10 py-28 bg-transparent z-10 w-full">

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

      <div className="mt-20 max-w-6xl mx-auto text-center ">
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

    

<div className="relative mt-20">

  {/* 🔥 GRID LINES */}
  <div className="absolute inset-0 pointer-events-none">

    {/* Horizontal line (through center of numbers) */}
    <div className="absolute left-0 right-0 top-1/2 h-px bg-white/10" />

    {/* Vertical lines aligned with numbers */}
    <div className="absolute top-1/2 bottom-0 left-1/2 -translate-x-[140px] w-px bg-white/10" />
    <div className="absolute top-1/2 bottom-0 left-1/2 w-px bg-white/10" />
    <div className="absolute top-1/2 bottom-0 left-1/2 translate-x-[140px] w-px bg-white/10" />
  </div>

  {/* 🔥 NUMBERS */}
  <div className="flex justify-center gap-28 text-sm font-mono tracking-widest relative z-10">
    
    <CircleNumber num="01" />
    <CircleNumber num="02" />
    <CircleNumber num="03" />

  </div>
</div>


      

  <div className="relative mt-20 max-w-7xl mx-auto">

  {/* ========================= */}
  {/* 🔥 LAYER 1: GRID + NUMBERS */}
  {/* ========================= */}

  {/* ========================= */}
  {/* 🔥 LAYER 2: CONTENT */}
  {/* ========================= */}
  <div className="relative z-0 grid grid-cols-1 md:grid-cols-3 bg-background text-center border-l border-r">

    {PHASES.map((phase, idx) => (
      <motion.div
        key={phase.n}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: idx * 0.15 }}
        className="space-y-6 pt-40 border-l border-t border-b  "
      >
        {/* dots */}
        <div className="flex justify-center gap-2">
          <span className="w-2 h-2 bg-white rounded-full" />
          <span className="w-2 h-2 bg-white/30 rounded-full" />
          <span className="w-2 h-2 bg-white/30 rounded-full" />
        </div>

        {/* images */}
        <div className="flex justify-center -space-x-3">
          {phase.images.slice(0, 3).map((src, i) => (
            <img
              key={i}
              src={src}
              className="w-12 h-12 rounded-xl object-cover border border-white/10"
            />
          ))}
        </div>

        {/* text */}
        <div>
          <h3 className="text-xl font-semibold uppercase tracking-wide">
            {phase.title}
          </h3>
          <p className="mt-2 text-sm text-white/60 max-w-xs mx-auto">
            {phase.blurb}
          </p>
        </div>
      </motion.div>
    ))}

  </div>
</div>

      <div className="mt-20 bg-background border-t border-b w-full">
        <Marquee images={APPROACH_MARQUEE} size="md" />
      </div>
    </section>
  );
}



const CircleNumber = ({ num }) => (
  <div className="relative w-10 h-10 flex items-center justify-center">

    {/* glow (optional, adapts with text color) */}
    <div className="absolute inset-0 bg-foreground/10 blur-md rounded-full"></div>

    {/* circle */}
    <div className="relative w-10 h-10 rounded-full 
      bg-foreground text-background 
      border border-foreground/20 
      text-xs flex items-center justify-center shadow-lg"
    >
      {num}
    </div>
  </div>
);