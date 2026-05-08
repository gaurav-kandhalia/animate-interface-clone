import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";
import { PROJECTS } from "@/lib/site-data";

export function Portfolio() {

  const [first, second, third, ...rest] = PROJECTS;

  return (
    <section className="py-16">
      <SectionLabel number="02" category="// Portfolio" meta="2020 — 2025" />
      <div className="px-6 pt-18">
        <div className="flex md:items-end justify-between gap-8 flex-col md:flex-row ">
          <div className="leading-none">
<div
  className="font-display text-foreground uppercase font-semibold tracking-tight"
  style={{
    fontSize: "clamp(2.8rem, 9vw, 14rem)",
    lineHeight: 0.85,
    letterSpacing: "-0.02em",
  }}
>
  Latest
</div>

<div
  className="font-display text-foreground uppercase font-semibold tracking-tight"
  style={{
    fontSize: "clamp(2.8rem, 9vw, 14rem)",
    lineHeight: 0.85,
    letterSpacing: "-0.02em",
  }}
>
  Portfolio
</div>
          </div>

          <p className="max-w-xs text-white text-xl font-semibold leading-snug mb-2 flex-shrink-0">
            My creative spirit comes alive in the digital realm. With nimble fingers flying across the device.
          </p>
        </div>

        <div className="mt-20 max-w-7xl mx-auto space-y-16">

          {/* MOBILE */}
          <div className="lg:hidden space-y-6">
            <Card project={first} />
            <Card project={second} />
            <Card project={third} />
          </div>

          {/* DESKTOP */}
          <div className="hidden lg:block space-y-16">

            {/* ROW 1 — side by side, second card bottom-aligned */}
            <div className="flex items-end gap-20 !pb-10">
              <div className="w-[55%]">
                <Card project={first} imageHeight="h-[480px]" />
              </div>
              <div className="w-[45%]">
                <Card project={second} imageHeight="h-[320px]" />
              </div>
            </div>

            {/* ROW 2 — centered */}
            <div className="flex justify-center">
              <div className="w-[50%]">
                <Card project={third} imageHeight="h-[700px]" />
              </div>
            </div>

          </div>

          {/* REST GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {rest.map((p) => (
              <Card key={p.slug} project={p} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

function Card({
  project,
  imageHeight = "h-[320px]",
}: {
  project: typeof PROJECTS[0];
  imageHeight?: string;
}) {
  return (
    <Link
      to="/work/$slug"
      params={{ slug: project.slug }}
      className="group block"
    >
      <div
        data-cursor="view"
        className={`relative ${imageHeight} overflow-hidden cursor-none w-full rounded-[10px]`}
      >
        <img
          src={project.cover}
          className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
        />
        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500 rounded-[10px]" />
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex gap-2">
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className={`w-2 h-2 rounded-full ${i === 0 ? "bg-white" : "bg-white/30"}`} />
          ))}
        </div>

        <h3 className="font-display font-medium text-lg text-center flex-1">
          {project.title}
        </h3>

        <motion.span
          initial={{ x: -6 }}
          whileHover={{ x: 10 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 text-lg"
        >
          ➝
        </motion.span>
      </div>

     
    </Link>
  );
}
