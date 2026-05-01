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
    <section className="px-6 md:px-10 py-28 bg-background">
      <SectionLabel number="03" category="// Who Am I" meta="Since 2000" />

      <div className="mt-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-5" ref={ref}>
          <div className="relative overflow-hidden rounded-3xl aspect-[4/5] bg-surface">
            <motion.img
              src={ABOUT_PORTRAIT}
              alt="Portrait"
              style={{ y }}
              className="w-full h-[115%] object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div className="md:col-span-7 flex flex-col justify-between">
          <div>
            <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
              More About
            </p>
            <h2 className="mt-2 font-display text-7xl md:text-9xl tracking-tighter leading-none">
              <span className="italic font-light">floe</span>
            </h2>
          </div>

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
