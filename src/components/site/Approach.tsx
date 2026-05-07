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
    <section className="relative px-0  py-18 bg-transparent z-10 w-full">

      <div className="w-full h-screen overflow-hidden !mb-26">
        <video
          src="https://res.cloudinary.com/dxn9c9m1m/video/upload/v1777896763/gk6WdgzIrXmLcDTIslZMhlpZUk_nzdaeq.mov"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
      <SectionLabel number="01" category="// Approach" meta="Three Phases" />

      <div className="!mt-16 w-full overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.8 }}
          className="font-display text-foreground whitespace-nowrap text-center"
          style={{
            fontWeight: 600,
            letterSpacing: "-0.02em",
            lineHeight: "0.9",
            fontSize: "clamp(2rem, 7vw, 14rem)",
          }}
        >
          WE ARE BUZZ CULTURE
        </motion.h2>
        <p className="mt-8 max-w-xl mx-auto text-center text-foreground/60 text-xl">
          I employed responsive design skills to maintain <br />consistency across all devices.
        </p>
      </div>



      <div className="relative mt-10">
        <div className="flex justify-center gap-28 text-md font-medium tracking-widest relative z-10 ">

          <CircleNumber num="01" />
          <CircleNumber num="02" />
          <CircleNumber num="03" />

        </div>
      </div>




      <div className="relative mt-16 max-w-7xl mx-auto">

        <div className="relative z-0 grid grid-cols-1 md:grid-cols-3 bg-background text-center">

          {PHASES.map((phase, idx) => (
            <motion.div
              key={phase.n}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="space-y-6 pt-8 pb-10 border border-border/40"
            >
              {/* dots */}
              <div className="flex justify-center gap-2">
                {[0, 1, 2].map(dotIdx => (
                  <span
                    key={dotIdx}
                    className={`w-3 h-3 rounded-full ${dotIdx < idx + 1 ? 'bg-white' : 'bg-white/20'}`}
                  />
                ))}
              </div>

              {/* images */}
              <div className="flex justify-center gap-2">
                {phase.images.slice(0, 3).map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    className="w-15 h-16 rounded-[18px] object-cover"
                  />
                ))}
              </div>

              {/* text */}
              <div>
                <h3 className="font-display text-3xl font-semibold uppercase tracking-tight text-foreground">
                  {phase.title}
                </h3>
                <p className="mt-3 text-xl font-medium text-white/50 max-w-xs mx-auto">
                  {phase.blurb}
                </p>
              </div>
            </motion.div>
          ))}

        </div>
      </div>

      <div className="!mt-30  w-full">
        <Marquee images={APPROACH_MARQUEE} size="md" />
      </div>
    </section>
  );
}



const CircleNumber = ({ num }) => (
  <div className="relative w-10 h-10 flex items-center justify-center">

    {/* glow (optional, adapts with text color) */}
    <div className="absolute inset-0 bg-foreground/10 blur-md rounded-full "></div>

    {/* circle */}
    <div className="relative w-10 h-10 rounded-full
       text-foreground
      border border-foreground/30
      text-xs font-display font-bold flex items-center justify-center shadow-lg bg-[var(--secondary-foreground)]"
    >
      {num}
    </div>
  </div>
);