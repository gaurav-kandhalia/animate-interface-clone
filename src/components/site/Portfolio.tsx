import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "./SectionLabel";
import { PROJECTS } from "@/lib/site-data";

export function Portfolio() {

  const [first, second, third, ...rest] = PROJECTS;

  return (
    <section className="py-28">
      <SectionLabel number="02" category="// Portfolio" meta="2020 — 2025" />

      <div>
        <span className="text-foreground text-5xl md:text-9xl font-[var(--font-display)] uppercase font-bold ">latest</span>
        <br />
        <span className="text-foreground text-5xl md:text-9xl font-[var(--font-display)] uppercase font-bold ">portfolio</span>
      </div>

   <div className="mt-20 max-w-7xl mx-auto space-y-16 ">

  {/* ✅ MOBILE */}
  <div className="lg:hidden space-y-6">
    <Card project={first} />
    <Card project={second} />
    <Card project={third} />
  </div>

  {/* ✅ DESKTOP */}
  <div className="hidden lg:block space-y-16 ">

    {/* ROW 1 */}
    <div className="flex justify-between ">
      <div className="w-[48%]">
        <Card project={first} classNameImg="h-full" />
      </div>

      <div className="w-[42%]  flex ">
        <Card project={second} classNameImg="absolute h-[300px]  w-[100%] bottom-0" className="  w-full relative" />
      </div>
    </div>

    {/* ROW 2 (CENTER CARD) */}
    <div className="flex justify-center">
      <div className="w-[60%]">
        <Card project={third} classNameImg="h-[420px]" />
      </div>
    </div>

  </div>

  {/* ✅ REST GRID (ALL SCREENS) */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    {rest.map((p) => (
      <Card key={p.slug} project={p} />
    ))}
  </div>

</div>
    </section>
  );
}



function Card({ project, className = "",classNameImg = "" }: { project: typeof PROJECTS[0]; className?: string; classNameImg?: string }) {
  return (
    <Link
      to="/work/$slug"
      params={{ slug: project.slug }}
      className={`group block ${className}`}
    >
      {/* IMAGE */}
      <div
        data-cursor="view"
      className={` h-80 md:h-95 overflow-hidden cursor-none  w-full ${className}`}
      >
        <img
          src={project.cover}
          className={`w-full  object-cover transition duration-500 group-hover:scale-105 rounded-[10px] ${classNameImg}`}
        />

   
      </div>

<div className="mt-4 flex items-center justify-between">

  {/* LEFT → DOTS */}
  <div className="flex gap-2">
    {[0, 1, 2, 3].map((i) => (
      <span
        key={i}
        className={`w-2 h-2 rounded-full ${
          i === 0 ? "bg-white" : "bg-white/30"
        }`}
      />
    ))}
  </div>

  {/* CENTER → TITLE */}
  <h3 className="font-[var(--font-display)] text-lg text-center flex-1">
    {project.title}
  </h3>

<motion.div
  className="mt-3 flex justify-between items-center group"
  initial="initial"
  whileHover="hover"
>
  {/* LEFT SIDE (can be dots or empty) */}
  <div />

  {/* ARROW */}
  <motion.span
    variants={{
      initial: { x: -6 },
      hover: { x: 10 },
    }}
    transition={{
      type: "spring",
      stiffness: 300,
      damping: 20,
    }}
    className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 text-lg"
  >
    ➝
  </motion.span>
</motion.div>
</div>

{/* CATEGORY */}
<p className="text-xs text-muted-foreground mt-1 text-center">
  {project.category}
</p>
    </Link>
  );
}