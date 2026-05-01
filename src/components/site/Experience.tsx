import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";
import { Marquee } from "./Marquee";
import { EXPERIENCE, EXPERIENCE_MARQUEE } from "@/lib/site-data";

export function Experience() {
  return (
    <section className="bg-background py-28">
      <div className="px-6 md:px-10">
        <SectionLabel number="07" category="// Experience" meta="2013 — Present" />
      </div>

      <div className="mt-20 px-6 md:px-10 max-w-5xl mx-auto">
        <h2 className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground mb-12">
          Experience
        </h2>
        <ul>
          {EXPERIENCE.map((e, i) => (
            <motion.li
              key={e.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 py-10 border-t border-border/60"
            >
              <div className="md:col-span-3">
                <h3 className="font-display text-3xl tracking-tight">
                  {e.company}
                </h3>
              </div>
              <div className="md:col-span-3 text-muted-foreground">
                {e.role}
              </div>
              <div className="md:col-span-2 font-mono text-xs tracking-widest text-muted-foreground">
                {e.period}
              </div>
              <div className="md:col-span-4 text-muted-foreground">
                {e.description}
              </div>
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="mt-24">
        <Marquee images={EXPERIENCE_MARQUEE} size="lg" speed="slow" />
      </div>
    </section>
  );
}
