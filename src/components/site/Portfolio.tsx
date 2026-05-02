import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "./SectionLabel";
import { PROJECTS } from "@/lib/site-data";

export function Portfolio() {

  const [first, second, third, ...rest] = PROJECTS;

  return (
    <section className="md:px-10 py-28">
      <SectionLabel number="02" category="// Portfolio" meta="2020 — 2025" />

      <div className="mt-20 max-w-7xl mx-auto px-4 space-y-16">

        {/* 🔥 ROW 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <Card project={first} className="lg:col-span-2" />
          <Card project={second} />
        </div>

        {/* 🔥 ROW 2 (CENTER CARD) */}
        <div className="flex justify-center">
          <div className="w-full lg:w-[60%]">
            <Card project={third} />
          </div>
        </div>

        {/* 🔥 REST GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {rest.map((p) => (
            <Card key={p.slug} project={p} />
          ))}
        </div>

      </div>
    </section>
  );
}



function Card({ project, className = "" }) {
  return (
    <Link
      to="/work/$slug"
      params={{ slug: project.slug }}
      className={`group block ${className}`}
    >
      {/* IMAGE */}
      <div
        data-cursor="view"
        className="relative h-[320px] md:h-[380px] overflow-hidden rounded-xl cursor-none"
      >
        <img
          src={project.cover}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* VIEW */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
          <div className="px-6 py-2 rounded-full bg-white text-black text-sm font-medium">
            VIEW
          </div>
        </div>
      </div>

      {/* DOTS */}
      <div className="flex gap-2 mt-4">
        {[0,1,2,3].map((i) => (
          <span
            key={i}
            className={`w-2 h-2 rounded-full ${
              i === 0 ? "bg-white" : "bg-white/30"
            }`}
          />
        ))}
      </div>

      {/* TITLE + ARROW */}
      <div className="mt-3 flex justify-between items-center">
        <h3 className="font-[var(--font-display)] text-lg">
          {project.title}
        </h3>

        <ArrowUpRight className="w-5 h-5 opacity-70 group-hover:translate-x-1 transition" />
      </div>

      {/* CATEGORY */}
      <p className="text-xs text-muted-foreground mt-1">
        {project.category}
      </p>
    </Link>
  );
}