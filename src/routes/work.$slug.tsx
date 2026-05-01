import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS, type Project } from "@/lib/site-data";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }): { project: Project } => {
    const project = PROJECTS.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    if (!p) return { meta: [{ title: "Work — floe" }] };
    return {
      meta: [
        { title: `${p.title} — floe` },
        { name: "description", content: p.intro },
        { property: "og:title", content: `${p.title} — floe` },
        { property: "og:description", content: p.intro },
        { property: "og:image", content: p.cover },
        { name: "twitter:image", content: p.cover },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="font-display text-6xl">Project not found</h1>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full border border-foreground/40 px-6 py-3 font-mono text-xs tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors"
        >
          ← Back home
        </Link>
      </div>
    </div>
  ),
  component: WorkPage,
});

function WorkPage() {
  const { project } = Route.useLoaderData();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const idx = PROJECTS.findIndex((p) => p.slug === project.slug);
  const next = PROJECTS[(idx + 1) % PROJECTS.length];

  return (
    <article className="bg-background">
      {/* Hero */}
      <section ref={ref} className="relative h-[100vh] overflow-hidden">
        <motion.img
          src={project.cover}
          alt={project.title}
          style={{ y }}
          className="absolute inset-0 w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
        <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-10 pb-16">
          <p className="font-mono text-xs tracking-widest uppercase text-foreground/80">
            {project.category} · {project.year}
          </p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-4 font-display text-7xl md:text-[12rem] tracking-tighter leading-[0.85]"
          >
            {project.title}
          </motion.h1>
        </div>
      </section>

      {/* Meta */}
      <section className="px-6 md:px-10 py-24 max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-border/60">
        <Meta label="Client" value={project.client} />
        <Meta label="Role" value={project.role} />
        <Meta label="Year" value={project.year} />
        <Meta label="Services" value={project.services.join(", ")} />
      </section>

      {/* Intro */}
      <section className="px-6 md:px-10 py-24 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-3xl md:text-5xl tracking-tight leading-tight"
        >
          {project.intro}
        </motion.p>
      </section>

      {/* Gallery */}
      <section className="px-6 md:px-10 pb-24 space-y-6 max-w-7xl mx-auto">
        {project.gallery.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7 }}
            className={`overflow-hidden rounded-3xl bg-surface ${
              i % 2 === 0 ? "aspect-[16/9]" : "aspect-[4/3] md:max-w-3xl md:mx-auto"
            }`}
          >
            <img src={src} alt="" className="w-full h-full object-cover" />
          </motion.div>
        ))}
      </section>

      {/* Next */}
      <section className="px-6 md:px-10 py-24 border-t border-border/60">
        <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
          Next project
        </p>
        <Link
          to="/work/$slug"
          params={{ slug: next.slug }}
          className="group mt-6 flex items-center justify-between gap-8"
        >
          <h2 className="font-display text-5xl md:text-8xl tracking-tighter group-hover:italic transition-all">
            {next.title}
          </h2>
          <ArrowUpRight className="w-10 h-10 group-hover:rotate-45 transition-transform" />
        </Link>
      </section>
    </article>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-mono text-[11px] tracking-widest uppercase text-muted-foreground">
        {label}
      </p>
      <p className="mt-2 font-display text-lg">{value}</p>
    </div>
  );
}
