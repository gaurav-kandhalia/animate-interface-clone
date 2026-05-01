import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionLabel } from "./SectionLabel";
import { VOICE_GALLERY } from "@/lib/site-data";

const STATEMENT =
  "An India-based independent creative studio, specializing in helping businesses and individuals turn their ideas into impactful development and design solutions.";

export function Voice() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-25%"]);

  const words = STATEMENT.split(" ");

  return (
    <section className="py-28 bg-background overflow-hidden">
      <div className="px-6 md:px-10">
        <SectionLabel number="05" category="// Voice of Grey" meta="Since 2000" />
      </div>

      <div ref={ref} className="mt-24 px-6 md:px-10 max-w-7xl mx-auto">
        <p className="font-display text-3xl md:text-5xl lg:text-6xl tracking-tight leading-tight text-balance">
          {words.map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0.15 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, margin: "-30%" }}
              transition={{ duration: 0.4, delay: i * 0.02 }}
              className="inline-block mr-[0.25em]"
            >
              {w}
            </motion.span>
          ))}
        </p>
      </div>

      <motion.div style={{ x }} className="mt-20 flex gap-4 w-max">
        {VOICE_GALLERY.map((src, i) => (
          <div
            key={i}
            className="h-[55vh] w-[40vw] md:w-[28vw] lg:w-[22vw] flex-shrink-0 overflow-hidden rounded-2xl bg-surface"
          >
            <img
              src={src}
              alt=""
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
