import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionLabel } from "./SectionLabel";
import { SERVICES, SERVICES_PORTRAIT } from "@/lib/site-data";

export function Services() {
  return (
    <section className="md:px-10 py-28 bg-background">
      <SectionLabel number="04" category="// Services" meta="Fast Delivery" />

      <div className="mt-20 border-2 border-red-700 mx-auto">

        {/* LEFT TITLE */}
        <div className="mb-20 border-2 border-red-700 flex justify-between">
          <h2
            className="
              font-[var(--font-display)]
              text-6xl md:text-8xl
              font-semibold
              tracking-[-0.08em]
              leading-[0.9]
              uppercase
              text-foreground
            "
          >
            Pro
            <br />
            <span className="font-bold">Services</span>
          </h2>

         <div className="flex">
           <p className="mt-6 text-muted-foreground max-w-md">
            A curated range of services designed to elevate your brand to the next level.
          </p>
         </div>
        </div>

        {/* SERVICES LIST */}
        <ul className="border-t border-border/40">
          {SERVICES.map((s, i) => (
            <ServiceRow
              key={s.title}
              index={i}
              title={s.title}
              subtitle={s.subtitle}
            />
          ))}
        </ul>

<div className="relative w-full  h-screen py-10">
  <div
    className="  bg-center  bg-cover w-full h-full bg-no-repeat rounded-[3px]"
    style={{ backgroundImage: `url(${SERVICES_PORTRAIT})` }}
  />

  <div className="h-full" />
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
    <li className="border-b border-border/30">

      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between py-10 md:py-14 group text-left"
      >

        {/* LEFT SIDE */}
        <div className="flex items-start gap-10">

          {/* DOTS */}
          <div className="flex gap-2 mt-4 min-w-[80px]">
            {[0, 1, 2, 3, 4].map((i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i <= index
                    ? "bg-foreground"
                    : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>

          {/* TEXT */}
          <div>
            <h3
              className="
                font-[var(--font-display)]
                text-4xl md:text-6xl lg:text-7xl
                tracking-[-0.05em]
                leading-[0.95]
                text-foreground
                transition-all duration-300
                
              "
            >
              {title}
            </h3>

            <p className="mt-2 text-xs uppercase tracking-[0.12em] text-muted-foreground">
              {subtitle}
            </p>
          </div>

        </div>

        {/* RIGHT ICON */}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-foreground opacity-70 group-hover:opacity-100 transition"
        >
          <ChevronDown className="w-6 h-6 md:w-7 md:h-7" />
        </motion.span>

      </button>

      {/* EXPAND CONTENT */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden"
          >
            <div className="pl-[90px] pb-12 pt-2">

              <p className="text-muted-foreground max-w-xl text-sm md:text-base leading-relaxed">
                {subtitle}
              </p>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </li>
  );
}
