"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import { useRef } from "react";
import { EXPERIENCE } from "@/lib/site-data";

export function Experience() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* GRID LINES */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[22%] top-0 h-full w-px bg-white/10" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-white/10" />
      </div>

      {/* TOP BAR */}
      <div className="flex items-center justify-between px-8 pt-6 text-sm uppercase tracking-[0.2em] text-white/60">
        <span>07</span>
        <span>//Experience</span>
        <span>2013 - Present</span>
      </div>

      {/* MAIN LAYOUT */}
      <div className="flex flex-col md:flex-row  mt-24 justify-between ">

        {/* LEFT TITLE */}
        <div className="px-8 w-1/4">
          <h2
            className="
              text-3xl
              leading-none
              font-black
              uppercase
              tracking-[-0.02em]
              sticky
              top-24
              font-display
            "
          >
            Experience
          </h2>
        </div>

        {/* RIGHT CONTENT */}
        <div className="px-8 lg:px-20 w-[70%]">

          <div className="max-w-4xl ml-auto">

            {EXPERIENCE.map((e, i) => (
              <ExperienceItem
                key={e.company}
                e={e}
              />
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}

function ExperienceItem({
  e,
}: {
  e: any;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,

    // ONLY ANIMATE WHILE ENTERING
    offset: ["start end", "start center"],
  });

  // INCOMING CARD MOVES UP
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [120, 0]
  );

  // FADE IN
  const opacity = useTransform(
    scrollYProgress,
    [0, 1],
    [0.3, 1]
  );

  return (
    <motion.div
      ref={ref}
      style={{
        y,
        opacity,
      }}
      className="
        relative
        py-10
        border-b
        border-white/10
        will-change-transform
      "
    >

      {/* YEAR */}
      <div
        className="
          absolute
          right-0
          top-24
          text-sm
          text-white/40
          tracking-wide
          uppercase
        "
      >
        {e.period}
      </div>

      {/* CONTENT */}
      <div className="max-w-2xl">

        <h3
          className="
            text-2xl
            font-bold
            uppercase
            tracking-[-0.02em]
            font-display
          "
        >
          {e.company}
        </h3>

        <p
          className="
            mt-3
            text-sm
            uppercase
            text-white/70
            font-semibold
            tracking-[-0.02em]
            font-display
            
          "
        >
          {e.role}
        </p>

        <p
          className="
            mt-3
            text-xl
            tracking-[-0.05em]
            text-white/45
            max-w-xl
            leading-[1.6]
          "
        >
          {e.description}
        </p>

      </div>
    </motion.div>
  );
}