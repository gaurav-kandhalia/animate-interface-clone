import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { PROJECTS, type Project } from "@/lib/site-data";

function ScrollImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.0, 1.15, 1.0]);

  return (
    <div ref={ref} className={`overflow-hidden ${className ?? ""}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ scale }}
        className="w-full h-full object-cover will-change-transform"
      />
    </div>
  );
}

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }): { project: Project } => {
    const project = PROJECTS.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
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

const CONTENT_SECTIONS = [
  {
    label: "Research",
    text: "Research is the cornerstone of innovation and progress, involving the systematic investigation of questions, problems, or phenomena to uncover new knowledge or insights. It enables us to validate theories, develop solutions, and deepen our understanding of the world.",
  },
  {
    label: "Design",
    text: "Design plays a crucial role in shaping perceptions and creating memorable experiences. A well-crafted design not only communicates ideas effectively but also evokes emotions, captures attention, and builds trust. From striking visuals to thoughtful layouts, every element contributes to telling a unique story.",
  },
  {
    label: "Development",
    text: "The project is meticulously crafted with cutting-edge web technologies to ensure a seamless user experience. Built for speed, responsiveness, and adaptability across devices, making it accessible to all audiences. Every detail, from interactive elements to smooth animations, has been carefully optimized.",
  },
  {
    label: "Concept",
    text: "It embraces a clean, minimalistic layout that puts the spotlight on visual storytelling, allowing designers, photographers, and creators to present their work with clarity and impact. The project is inspired by the idea of timeless design, blending functionality with style.",
  },
];

const FAQS = [
  {
    q: "What do I need to get started?",
    a: "To get started, simply share your project details and goals with us. We'll guide you through the process and provide the tools and support needed to bring your vision to life.",
  },
  {
    q: "What kind of customization is available?",
    a: "We offer full customization options, including layout changes, color schemes, typography, and content sections to align with your brand.",
  },
  {
    q: "How easy is it to edit for beginners?",
    a: "Our platform is designed with beginners in mind, offering an intuitive drag-and-drop interface that makes editing simple and straightforward. No coding skills required—just customize and go!",
  },
  {
    q: "Let me know more about moneyback guarantee?",
    a: "Our money-back guarantee ensures peace of mind by offering a full refund if you're not satisfied with the final product within a specified time frame.",
  },
  {
    q: "Do I need to know how to code?",
    a: "No, you don't need to know how to code. Our platform offers intuitive tools and templates that allow you to create and manage your website with ease.",
  },
  {
    q: "What will I get after purchasing the template?",
    a: "After purchasing the template, you'll receive a fully customizable, ready-to-use design with all necessary files and documentation.",
  },
];

function WorkPage() {
  const { project } = Route.useLoaderData();
  const idx = PROJECTS.findIndex((p) => p.slug === project.slug);
  const moreProjects = PROJECTS.filter((_, i) => i !== idx).slice(0, 2);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [project.slug]);

  return (
    <article className="bg-background text-foreground">

      {/* ── Hero ── */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-1 pb-1">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs tracking-[0.3em] uppercase text-foreground/40 font-mono mb-6"
        >
          {project.year}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display font-bold uppercase leading-none"
          style={{ fontSize: "clamp(3rem, 10vw, 13rem)", letterSpacing: "-0.02em" }}
        >
          {project.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-8 max-w-xl text-foreground/50 text-lg leading-relaxed"
        >
          {project.intro}
        </motion.p>

        {project.liveUrl && (
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 inline-flex items-center gap-2 rounded-full border border-foreground/40 px-8 py-3 font-display font-bold text-sm uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors"
          >
            Live Preview
          </motion.a>
        )}
      </section>

      {/* ── Cover image ── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="px-6 md:px-10"
      >
        <ScrollImage
          src={project.cover}
          alt={project.title}
          className="w-full aspect-[16/9] rounded-[22px]"
        />
      </motion.div>

      {/* ── Meta row ── */}
      <div className="grid grid-cols-2 md:grid-cols-4 border-y border-border/60 mt-16">
        {[
          { label: "Year", value: project.year },
          { label: "Client", value: project.client },
          { label: "Category", value: project.role },
          { label: "Product Duration", value: project.duration ?? "3 – 4 Weeks" },
        ].map((item, i) => (
          <div
            key={i}
            className={`px-6 md:px-10 py-10 ${i < 3 ? "border-r border-border/60" : ""}`}
          >
            <p className="text-[10px] tracking-[0.25em] uppercase text-foreground/60 font-medium mb-3">
              {item.label}
            </p>
            <p className="font-display font-semibold text-2xl uppercase tracking-tight">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      {/* ── Content sections + gallery ── */}
      {CONTENT_SECTIONS.map((section, i) => (
        <div key={section.label}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-4 border-b border-border/60 px-6 md:px-10 py-16 gap-8"
          >
            <div className="md:col-span-1">
              <h3 className="font-display font-semibold text-xl uppercase tracking-wide">
                {section.label}
              </h3>
            </div>
            <div className="md:col-span-2 md:col-start-3">
              <p className="text-foreground/60 leading-relaxed text-lg">{section.text}</p>
            </div>
          </motion.div>

          {project.gallery[i] && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="px-6 md:px-10 py-8"
            >
              <ScrollImage
                src={project.gallery[i]}
                alt=""
                className="w-full aspect-[16/7] rounded-[22px]"
              />
            </motion.div>
          )}
        </div>
      ))}

      {/* ── MORE WORKS marquee ── */}
      <div className="overflow-hidden border-y border-border/60 py-5 mt-12">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="font-display font-bold uppercase mx-10 text-foreground"
              style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)", letterSpacing: "-0.02em" }}
            >
              MORE WORKS
            </span>
          ))}
          {[...Array(4)].map((_, i) => (
            <span
              key={`b${i}`}
              className="font-display font-bold uppercase mx-10 text-foreground/20"
              style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)", letterSpacing: "-0.02em" }}
            >
              MORE WORKS
            </span>
          ))}
        </div>
      </div>

      {/* ── Related works grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-10">
        {moreProjects.map((p) => (
          <Link
            key={p.slug}
            to="/work/$slug"
            params={{ slug: p.slug }}
            className="group relative h-[520px] md:h-[620px] overflow-hidden rounded-[22px] border border-border/30 bg-[#0d0d0d] cursor-pointer block"
          >
            <motion.img
              src={p.cover}
              alt={p.title}
              className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <span className="bg-foreground text-background font-display font-bold px-7 py-2.5 rounded-full text-sm uppercase tracking-widest">
                View
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/90 to-transparent pointer-events-none">
              <div className="flex gap-1.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`w-2 h-2 rounded-full ${i === 0 ? "bg-foreground" : "bg-foreground/20"}`}
                  />
                ))}
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <p className="font-display font-bold text-xl uppercase tracking-tight">{p.title}</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/40 mt-0.5">{p.role}</p>
                </div>
                <span className="text-2xl">→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* ── FAQ ── */}
      <section className="px-6 md:px-10 py-28">
        <div className="flex items-center justify-between text-[10px] font-mono tracking-[0.25em] uppercase text-foreground/30 mb-16">
          <span>03</span>
          <span>// FAQ</span>
          <span>Concerns</span>
        </div>

        <h2
          className="font-display font-semibold uppercase text-center mb-16"
          style={{ fontSize: "clamp(2.5rem, 3vw, 7rem)", letterSpacing: "-0.02em", lineHeight: 1 }}
        >
          Frequently<br />Asked Questions
        </h2>

        <div className="max-w-5xl mx-auto divide-y divide-border/60">
          {FAQS.map((faq, i) => (
            <FaqItem key={i} num={`0${i + 1}`} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </section>

    </article>
  );
}

function FaqItem({ num, question, answer }: { num: string; question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-6">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-6 text-left group"
      >
        <span className="text-xs font-mono text-foreground/50 shrink-0 w-8">{num}</span>
        <span className="font-display font-bold text-medium md:text-xl uppercase tracking-wide flex-1">
          {question}
        </span>
        <span className="text-2xl text-foreground/50 group-hover:text-foreground transition-colors shrink-0">
          {open ? "−" : "+"}
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 pl-14 text-foreground/50 leading-relaxed overflow-hidden"
          >
            {answer}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
