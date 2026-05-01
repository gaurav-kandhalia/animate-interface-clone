import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FOOTER_PORTRAIT, SOCIAL_LINKS } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="relative bg-background border-t border-border/40 overflow-hidden">
      <div className="bg-dotgrid">
        <div className="px-6 md:px-10 pt-24 pb-12">
          {/* CTA */}
          <div className="text-center">
            <p className="font-mono text-xs tracking-[0.25em] text-muted-foreground uppercase mb-4">
              08 // Awards · Recognition
            </p>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.8 }}
              className="font-display text-[18vw] md:text-[14vw] leading-[0.85] tracking-tighter"
            >
              Let&apos;s Work
              <br />
              <span className="italic font-light">Together</span>
            </motion.h2>

            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-3 rounded-full border border-foreground/50 px-7 py-4 font-mono text-xs tracking-[0.2em] uppercase hover:bg-foreground hover:text-background transition-colors"
            >
              Contact Now →
            </Link>
          </div>

          {/* Lower row */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-10 items-end">
            <div className="space-y-2">
              <p className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
                Based In
              </p>
              <p className="font-display text-2xl">Ludhiana, Punjab</p>
            </div>

            <div className="flex justify-center">
              <div className="w-40 h-52 md:w-56 md:h-72 overflow-hidden rounded-2xl">
                <img
                  src={FOOTER_PORTRAIT}
                  alt=""
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </div>

            <div className="space-y-2 md:text-right">
              <p className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
                Role
              </p>
              <p className="font-display text-2xl">
                Digital Designer
                <br />
                <span className="text-muted-foreground">+ Framer Developer</span>
              </p>
            </div>
          </div>

          <div className="mt-20 max-w-4xl mx-auto text-center">
            <p className="font-display text-xl md:text-2xl leading-snug">
              Based in India, an innovative designer and digital studio. A passion
              for minimalist aesthetics, elegant typography, and intuitive design
              evident in every project.
            </p>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-border/40 pt-8">
            <p className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
              © {new Date().getFullYear()} floe. All rights reserved.
            </p>
            <nav className="flex gap-6">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-[11px] tracking-widest uppercase hover:text-foreground text-muted-foreground transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
