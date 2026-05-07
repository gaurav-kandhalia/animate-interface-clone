import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FOOTER_PORTRAIT, SOCIAL_LINKS } from "@/lib/site-data";
import { SectionLabel } from "./SectionLabel";
 import { ArrowUpRight } from "lucide-react";
 import {  useScroll, useTransform,useSpring } from "framer-motion";
import { useRef } from "react";


export function Footer() {

  const ref = useRef<HTMLDivElement>(null);

const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["start end", "center center"],
});

const buzzRaw = useTransform(
  scrollYProgress,
  [0, 1],
  [80, 0]
);

const cultureRaw = useTransform(
  scrollYProgress,
  [0, 1],
  [100, 0]
);

const opacityRaw = useTransform(
  scrollYProgress,
  [0, 1],
  [0.2, 1]
);

const buzzY = useSpring(buzzRaw, {
  stiffness: 40,
  damping: 18,
  mass: 1.2,
});

const cultureY = useSpring(cultureRaw, {
  stiffness: 40,
  damping: 18,
  mass: 1.2,
});

const opacity = useSpring(opacityRaw, {
  stiffness: 40,
  damping: 18,
});
  
  return (
    <footer className="relative  border-t border-border/40 overflow-hidden ">
      <div className="">
         <SectionLabel number="08" category="//Award" meta="Recogination" />
      {/* <div className="bg-dotgrid"> */}
        <div className="px-6 md:px-10 pt-24 pb-12">
          {/* CTA */}
          <div className="text-center   mx-auto mt-20">
       
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.8 }}
              className=" font-[var(--font-display)]
  text-6xl
  md:text-9xl
  font-bold
  leading-[0.77]
  uppercase
  tracking-[-0.08em]
  md:tracking-[-0.4rem]
  whitespace-nowrap"
            >
              Let&apos;s Work
              <br />
              <span className=" font-[var(--font-display)]">Together</span>
            </motion.h2>

<Link
  to="/contact"
  className="group relative mt-10 inline-flex overflow-hidden rounded-full border border-foreground/50 px-7 py-2 font-[var(--font-display)] text-sn tracking-[-0.02em] uppercase bg-white font-bold"
>
  {/* Curtain Layer */}
  <span className="absolute inset-0 bg-black translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0" />

  {/* Text */}
  <span className="relative z-10 flex items-center gap-3 text-black transition-colors duration-300 group-hover:text-white">
    Contact Now
  </span>
</Link>
          </div>

          {/* Lower row */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-10 items-end ">
            <div className="  flex flex-col justify-center mx-auto my-auto ">
              <p className="font-[var(--font-display)] text-sm font-bold"> Based In Ludhiana,</p>
              <p className="font-[var(--font-display)] text-sm tracking-widest text-muted-foreground uppercase text-center ">
                Punjab
              </p>
              
            </div>

            <div className="flex justify-center ">
              <div className=" md:h-125 overflow-hidden rounded-[8px]">
                <img
                  src={FOOTER_PORTRAIT}
                  alt=""
                  className="w-full h-full object-cover "
                />
              </div>
            </div>

            <div className="space-y-2 md:text-right  mx-auto my-auto">
            
              <p className="font-[var(--font-display)] text-sm font-bold text-center">
                Digital Designer
                <br />
                <span className="text-muted-foreground text-sm font-[var(--font-display)] ">+ Framer Developer</span>
              </p>
            </div>
          </div>

          <div className="mt-20 max-w-4xl mx-auto text-center">
            <p className="font-display text-xl md:text-2xl leading-snug">
              Based in India, an innovative designer and digital studio. A passion
              for minimalist aesthetics, elegant typography, and intuitive design
              evident in every project.
            </p>
          </div>

        

<div className="flex flex-col md:flex-row items-center gap-10 justify-center mt-8">
  
  <div className="flex items-center gap-1 cursor-pointer group">
    <p className="font-[var(--font-display)] uppercase text-lg font-bold">
      instagram
    </p>

    <ArrowUpRight
      className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
      strokeWidth={2.5}
    />
  </div>

  <div className="flex items-center gap-1 cursor-pointer group">
    <p className="font-[var(--font-display)] uppercase text-lg font-bold">
      dribbble
    </p>

    <ArrowUpRight
      className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
      strokeWidth={2.5}
    />
  </div>

  <div className="flex items-center gap-1 cursor-pointer group">
    <p className="font-[var(--font-display)] uppercase text-lg font-bold">
      twitter
    </p>

    <ArrowUpRight
      className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
      strokeWidth={2.5}
    />
  </div>

</div>

<div
  ref={ref}
  className="
    flex-1
    flex
    flex-col
    items-center
    justify-center
    pt-2
    gap-0
    md:mt-20
    mt-14
    text-white
   
    
  "
>
  <h1 className="sr-only text-center">Buzz Culture</h1>

  {/* BUZZ */}
  <div className="w-full flex justify-center ">

    <motion.span
      className="
        font-display
        text-foreground
        leading-none
        whitespace-nowrap
        text-[24vw]
        will-change-transform
      "
      style={{
        y: buzzY,
        opacity,
        fontWeight: 600,
        letterSpacing: "-0.03em",
        lineHeight: "0.85",
      }}
    >
      buzz
    </motion.span>

  </div>

  {/* CULTURE */}
  <div className="w-full flex justify-center ">

    <motion.span
      className="
        font-display
        text-foreground
        leading-none
        whitespace-nowrap
        text-[24vw]
        will-change-transform
      "
      style={{
        y: cultureY,
        opacity,
        fontWeight: 600,
        letterSpacing: "-0.03em",
        lineHeight: "0.8",
      }}
    >
      culture
    </motion.span>

  </div>
</div>

         <div className="flex flex-col md:flex-row justify-between mt-10">
          <div><p className="font-[var(--font-display)] font-bold text-lg uppercase text-center">&copy;2024 Mandro design</p></div>
          <div>
  <button
    onClick={() => {
      const hero = document.getElementById("hero");

      hero?.scrollIntoView({
        behavior: "smooth",
      });
    }}
    className="
      group
      relative
      cursor-pointer
     w-full
    "
  >
    <p
      className="
        font-[var(--font-display)]
        font-bold
        text-lg
        uppercase
        
      "
    >
      Back to top
    </p>

    {/* UNDERLINE */}
    <span
      className="
        absolute
        left-0
        bottom-[-4px]
        h-[2px]
        w-full
        origin-left
        scale-x-0
        bg-foreground
        transition-transform
        duration-500
        ease-[cubic-bezier(0.22,1,0.36,1)]
        group-hover:scale-x-100
      "
    />
  </button>
</div>
         </div>
        </div>
      </div>
    </footer>
  );
}
