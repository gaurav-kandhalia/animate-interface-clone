import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionLabel } from "./SectionLabel";
import { SERVICES, SERVICES_PORTRAIT } from "@/lib/site-data";

export function Services() {
  return (
    <section className="px-6 md:px-10 py-28 bg-background">
      <SectionLabel number="04" category="// Services" meta="Fast Delivery" />

      <div className="mt-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <h2 className="font-display text-6xl md:text-8xl tracking-tighter leading-[0.9]">
            Pro
            <br />
            <span className="italic font-light">Services</span>
          </h2>
          <p className="mt-8 text-muted-foreground max-w-md">
            A curated range of services designed to elevate your brand to the
            next level.
          </p>
          <div className="mt-10 hidden md:block aspect-[4/5] w-full max-w-sm rounded-3xl overflow-hidden bg-surface">
            <img
              src={SERVICES_PORTRAIT}
              alt=""
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div className="md:col-span-7">
          <ul className="border-t border-border/60">
            {SERVICES.map((s, i) => (
              <ServiceRow key={s.title} index={i} title={s.title} subtitle={s.subtitle} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ServiceRow({
  index,
  title,
  subtitle,
}: {
  index: number;
  title: string;
  subtitle: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <li className="border-b border-border/60">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between py-7 text-left group"
      >
        <div className="flex items-center gap-6">
          <span className="font-mono text-xs text-muted-foreground tracking-widest w-8">
            0{index + 1}
          </span>
          <span className="font-display text-3xl md:text-5xl tracking-tight group-hover:italic transition-all">
            {title}
          </span>
        </div>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-foreground"
        >
          <Plus className="w-6 h-6" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="pb-7 pl-14 text-muted-foreground max-w-xl">
              {subtitle}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}
