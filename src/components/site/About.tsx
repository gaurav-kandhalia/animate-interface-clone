import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionLabel } from "./SectionLabel";
import { ABOUT_PORTRAIT } from "@/lib/site-data";

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section className="  py-28 bg-background">
    <div className="px-10">
        <SectionLabel number="03" category="// Who Am I" meta="Since 2000" />
    </div>

      <div className="mt-20   text-center border-2 border-red-700 mx-auto">

<div className="text-center">

  <p
    className="
      font-[var(--font-display)]
      font-bold
      uppercase
      text-4xl md:text-7xl lg:text-8xl
      tracking-[-0.05em]
      leading-[0.9]
      text-foreground
    "
  >
    MORE ABOUT
  </p>

  <h2
    className="
      font-[var(--font-display)]
      font-bold
      uppercase
      text-5xl md:text-8xl lg:text-9xl
      tracking-[-0.05em]
      leading-[0.85]
    "
  >
    FLOE
  </h2>

</div>
      <div className=" border-2 border-blue-700  w-full">
          <div className="w-1/5 border-2 border-green-700" ref={ref}>
          <div className="relative overflow-hidden  aspect-[4/5] bg-surface  min-h-screen rounded-[4px]">
            <motion.img
              src={ABOUT_PORTRAIT}
              alt="Portrait"
              style={{ y }}
              className="w-full  object-cover rounded-[4px]"
              loading="lazy"
            />
          </div>
        </div>

      </div>
        

        <div className="md:col-span-7 flex flex-col justify-between">
        

          <div className="mt-12 space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-display text-2xl md:text-3xl leading-snug tracking-tight"
            >
              An innovative designer and digital artist working from India for
              clients around the world.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-2xl md:text-3xl leading-snug tracking-tight"
            >
              A passion for minimalist aesthetics, elegant typography, and
              intuitive design shines through in the work.
            </motion.p>
            <p className="text-muted-foreground max-w-xl">
              On the cutting edge of no-code tools that allow creative visions
              to come to life. Methods may be unconventional; dedication to the
              craft is unparalleled. Thrives on finding unexpected solutions and
              believes design can elevate the human experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
