import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "./SectionLabel";
import { PROJECTS } from "@/lib/site-data";

export function Portfolio() {
  return (
    <section className="px-6 md:px-10 py-28 bg-background">
      <SectionLabel number="02" category="// Portfolio" meta="2020 — 2025" />

      <div className="mt-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.8 }}
          className="font-display text-6xl md:text-8xl lg:text-9xl tracking-tighter leading-[0.9]"
        >
          Latest
          <br />
          <span className="italic font-light">Portfolio</span>
        </motion.h2>
        <p className="mt-8 max-w-xl mx-auto text-muted-foreground">
          A creative spirit alive in the digital realm — nimble fingers flying
          across devices, ideas pouring out as work.
        </p>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {PROJECTS.map((p, i) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, delay: i * 0.08 }}
          >
            <Link
              to="/work/$slug"
              params={{ slug: p.slug }}
              className="group block"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-surface">
                <motion.img
                  src={p.cover}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {p.category}
                  </p>
                </div>
                <span className="font-mono text-xs text-muted-foreground">
                  {p.year}
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
