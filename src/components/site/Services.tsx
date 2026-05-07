import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";
import { SectionLabel } from "./SectionLabel";
import { SERVICES } from "@/lib/site-data";

export function Services() {
  return (
    <section className="">
      <SectionLabel number="04" category="// Services" meta="Fast Delivery" />

      <div className="px-6 md:px-10 pt-16 pb-28 ">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row  md:items-end justify-between mb-16 ">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-[family-name:var(--font-display)] text-[clamp(4.5rem,11vw,9.5rem)] font-semibold tracking-[-0.02em] leading-[0.85] uppercase text-foreground"
          >
            Pro
            <br />
            Services
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-[family-name:var(--font-display)] text-foreground text-xl font-medium leading-relaxed max-w-[300px] md:text-left "
          >
            Discover our range of services
            <br />
            designed to elevate your brand
            <br />
            to next level.
          </motion.p>
        </div>

        {/* SERVICES LIST */}
        <ul className="border-t border-border/40 ">
          {SERVICES.map((s, i) => (
            <ServiceRow
              key={s.title}
              index={i}
              title={s.title}
              subtitle={s.subtitle}
              image={s.image}
              features={s.features}
            />
          ))}
        </ul>
      </div>

      {/* FULL-WIDTH BANNER IMAGE */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8 }}
        className="w-full overflow-hidden px-8"
      >
        <img
          src="https://framerusercontent.com/images/gPqr7rZSe49I2LnZy4JermGDfw.jpg"
          alt="Services visual"
          className="w-full h-full max-h-[780px] min-h-[320px] object-cover object-center rounded-[20px]"
        />
      </motion.div>
    </section>
  );
}

function ServiceRow({
  index,
  title,
  subtitle,
  image,
  features,
}: {
  index: number;
  title: string;
  subtitle: string;
  image: string;
  features: string[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <li className="border-b border-border/30  ">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full grid md:grid-cols-[28%_1fr_auto] items-center py-6 md:py-8 group text-left"
      >
        {/* SPACER — pushes content to the right */}
        <div />

        {/* DOTS + TEXT */}
        <div className="flex items-center md:gap-10  w-full">
          {/* DOTS */}
          <div className="md:flex hidden gap-[6px] min-w-[80px] ">
            {[0, 1, 2, 3, 4].map((dot) => (
              <span
                key={dot}
                className={`w-[9px] h-[9px] rounded-full transition-all duration-300 ${
                  dot <= index ? "bg-foreground" : "bg-foreground/20"
                }`}
              />
            ))}
          </div>

          {/* TITLE + SUBTITLE */}
          <div className="">
            <h3 className="font-[var(--font-display)] text-xl md:text-2xl font-semibold tracking-[-0.01em] leading-snug text-foreground">
              {title}
            </h3>
            <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-foreground/40">
              {subtitle}
            </p>
          </div>
        </div>

        {/* CHEVRON */}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className=" hidden md:flex text-foreground opacity-60 group-hover:opacity-100 transition flex-shrink-0 "
        >
          <ChevronDown className="w-6 h-6 md:w-7 md:h-7" />
        </motion.span>
      </button>

      {/* EXPANDED CONTENT */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.38, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className=" pb-12 pt-3 flex gap-8 md:gap-12 ">
              {/* IMAGE */}
              <div className="w-[340px] md:w-[420px] h-[195px] md:h-[215px] rounded-[20px] overflow-hidden flex-shrink-0 bg-foreground/5">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* FEATURES */}
              <ul className=" gap-[14px]">
                {features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-3 text-[10px] uppercase tracking-[0.16em] text-foreground/70"
                  >
                    <Check className="w-3 h-3 flex-shrink-0 text-foreground/50" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}
