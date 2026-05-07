"use client";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import { useEffect, useState } from "react";
import { EXPERIENCE } from "@/lib/site-data";

const images = [
  "https://framerusercontent.com/images/JwJTxroeEh0a7U32iDMSI6d6R8.jpg?scale-down-to=2048",
  "https://framerusercontent.com/images/xcxQQ1waNtZJqJFNv1uOoAOs.jpg?scale-down-to=1024",
  "https://framerusercontent.com/images/CkRGbZ3Tef83yc5ibFgim9s6w.jpg?scale-down-to=1024",
  "https://framerusercontent.com/images/VX1rSkalWuRIsRIh7yoySMaSpWU.jpg?scale-down-to=1024",
];

export function Experience() {
  const [current, setCurrent] = useState(0);

  // MOBILE AUTO SLIDER
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen py-20 text-white">

      {/* GRID */}
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

      {/* MAIN */}
      <div className="relative mt-24">

        {/* DESKTOP */}
        <div className="hidden md:flex items-start">

          {/* LEFT TITLE — sticky flex child sticks within the height of the right column */}
          <div className="w-[30%] sticky top-12 self-start pl-8">
            <h2 className="text-3xl leading-none font-black uppercase tracking-[-0.02em] font-[var(--font-display)]">
              Experience
            </h2>
          </div>

          {/* RIGHT CONTENT — scrolls naturally, defines the sticky bounds */}
          <div className="w-[70%] px-8 lg:px-20">
            <div className="max-w-4xl ml-auto">
              {EXPERIENCE.map((e) => (
                <ExperienceItem key={e.company} e={e} />
              ))}
            </div>
          </div>

        </div>

        {/* MOBILE TITLE */}
        <div className="mb-14 px-6 md:hidden">
          <h2
            className="
              text-3xl
              leading-none
              font-black
              uppercase
              tracking-[-0.02em]
              font-[var(--font-display)]
            "
          >
            Experience
          </h2>
        </div>

        {/* MOBILE CONTENT */}
        <div className="px-6 md:hidden">

          {EXPERIENCE.map((e) => (
            <ExperienceItem
              key={e.company}
              e={e}
            />
          ))}

        </div>

      </div>

      {/* DESKTOP IMAGES */}
      <div className="mt-28 hidden justify-center gap-[2%] md:flex">

        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            className="relative w-[23%] overflow-hidden rounded-[8px]"
          >

            <img
              src={img}
              alt={`gallery-${index}`}
              className="
                h-[220px]
                w-full
                object-cover
                transition-transform
                duration-700
                hover:scale-105
              "
            />

            {/* LEFT FADE */}
            {index === 0 && (
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
            )}

            {/* RIGHT FADE */}
            {index === images.length - 1 && (
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-black via-black/40 to-transparent" />
            )}

          </motion.div>
        ))}

      </div>

      {/* MOBILE SLIDER */}
      <div className="relative mt-20 overflow-hidden rounded-[28px] md:hidden">

        <div className="relative h-[260px] w-full">

          <AnimatePresence mode="wait">
            <motion.img
              key={images[current]}
              src={images[current]}
              alt="mobile-slider"
              className="absolute inset-0 h-full w-full object-cover"
              initial={{ opacity: 0, scale: 1.08, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.96, x: -40 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          </AnimatePresence>

          <div className="absolute inset-0 bg-black/10" />

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
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 45,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: false,
        amount: 0.15,
      }}
      transition={{
        duration: 2,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative
        border-b
        border-white/10
        py-10
      "
    >

      {/* YEAR */}
      <div
        className="
          absolute
          right-0
          top-24
          text-sm
          uppercase
          tracking-wide
          text-white/40
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
            font-[var(--font-display)]
          "
        >
          {e.company}
        </h3>

        <p
          className="
            mt-3
            text-sm
            font-semibold
            uppercase
            tracking-[-0.02em]
            text-white/70
            font-[var(--font-display)]
          "
        >
          {e.role}
        </p>

        <p
          className="
            mt-3
            max-w-xl
            text-xl
            leading-[1.6]
            tracking-[-0.05em]
            text-white/45
          "
        >
          {e.description}
        </p>

      </div>
    </motion.div>
  );
}