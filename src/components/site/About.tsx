import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionLabel } from "./SectionLabel";
import { ABOUT_PORTRAIT } from "@/lib/site-data";

export function About() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // 🔥 IMAGE moves (front layer)
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  // 🔥 TEXT stays in place but shrinks (goes behind illusion)
  const textScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.5, 0.2]);

  return (
    <section ref={ref} className="py-28 bg-background overflow-hidden">

      {/* HEADER */}
      <div className="px-10">
        <SectionLabel number="03" category="// Who Am I" meta="Since 2000" />
      </div>

      {/* 🔥 TEXT (NO MOVEMENT, ONLY SCALE) */}
      <motion.div
        style={{
          scale: textScale,
          opacity: textOpacity,
        }}
        className="mt-20 text-center relative z-10 origin-center"
      >
        <p className="font-[var(--font-display)] font-bold uppercase text-4xl md:text-7xl lg:text-8xl tracking-[-0.05em] leading-[0.9]">
          MORE ABOUT
        </p>

        <h2 className="font-[var(--font-display)] font-bold uppercase text-5xl md:text-8xl lg:text-9xl tracking-[-0.05em] leading-[0.85]">
          FLOE
        </h2>
      </motion.div>

      {/* 🔥 IMAGE (FRONT LAYER) */}
      <div className="mt-24 flex justify-center relative z-20">
        <motion.div
          style={{ y: imageY, scale: imageScale }}
          className="w-full max-w-4xl h-[500px] rounded-2xl overflow-hidden"
        >
          <img
            src={ABOUT_PORTRAIT}
            alt="portrait"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* CONTENT BELOW */}
      <div className="mt-32 max-w-3xl mx-auto text-center space-y-6">
        <p className="font-[var(--font-display)] text-2xl md:text-3xl">
          An innovative designer and digital artist working from India for
          clients around the world.
        </p>

        <p className="text-muted-foreground">
          A passion for minimalist aesthetics, elegant typography, and intuitive
          design shines through in the work.
        </p>
      </div>

    </section>
  );
}