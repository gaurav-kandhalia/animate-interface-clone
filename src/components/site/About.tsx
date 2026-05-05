import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import { SectionLabel } from "./SectionLabel";
import { ABOUT_PORTRAIT } from "@/lib/site-data";

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const sectionTopRef = useRef(0);

  // Section-relative progress — drives image Y position and headline scale
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Absolute page scroll — drives the pixel-based image zoom
  const { scrollY } = useScroll();

  // Capture section's pixel offset once after mount
  useEffect(() => {
    if (ref.current) {
      sectionTopRef.current = ref.current.offsetTop;
    }
  }, []);

  // Image rises from bottom to cover headline
  const containerY = useTransform(scrollYProgress, [0, 0.7], ["0vh", "-150vh"]);

  // Headline shrinks as image approaches
  const headlineScale = useTransform(scrollYProgress, [0.1, 0.5], [1, 0.72]);

  // Pixel-based zoom: 1.8 (zoomed in) → 1.0 (normal) over 900px of scroll
  // Starts the moment the section enters the viewport
  const imageScale = useTransform(scrollY, (px) => {
    const start = sectionTopRef.current;       // section's top pixel on the page
    const end   = start + 900;                 // 900px later, zoom is fully out
    if (px <= start) return 3.0;
    if (px >= end)   return 1.0;
    const t = (px - start) / (end - start);   // 0 → 1 over the 900px range
    return 3.0 - t * 2.0;                     // 3.0 → 1.0
  });

  return (
    <section ref={ref} className="relative bg-background">

      {/* Section label */}
      <div className="">
        <SectionLabel number="03" category="// Who Am I" meta="Since 2000" />
      </div>

      <div className="min-h-[250vh]">
        <div className="sticky top-0 h-screen overflow-hidden">

          {/* Headline — centered, shrinks as image approaches */}
          <motion.div
            style={{ scale: headlineScale }}
            className="absolute inset-0 flex flex-col items-center justify-center z-10 select-none pointer-events-none"
          >
            <p className="font-[var(--font-display)] font-bold uppercase text-6xl md:text-7xl lg:text-9xl tracking-[-0.05em] leading-[0.9]">
              MORE ABOUT
            </p>
            <h2 className="font-[var(--font-display)] font-bold uppercase text-6xl md:text-8xl lg:text-9xl tracking-[-0.05em] leading-[0.85]">
              BUZZ
            </h2>
            <h2 className="font-[var(--font-display)] font-bold uppercase text-6xl md:text-8xl lg:text-9xl tracking-[-0.05em] leading-[0.85]">
              CULTURE
            </h2>
          </motion.div>

          {/* Image card — starts off-screen, rises to mask the headline */}
          <motion.div
            style={{ y: containerY }}
            className="absolute left-1/2 -translate-x-1/2 z-20 w-[80%] max-w-xl top-full"
          >
            <div className="h-[130vh] rounded-[25px] overflow-hidden">
              {/* Zoom wrapper: starts at 1.8×, zooms out to 1.0 as user scrolls */}
              <motion.div
                style={{ scale: imageScale, transformOrigin: "center center" }}
                className="w-full h-full"
              >
                <img
                  src={ABOUT_PORTRAIT}
                  alt="About portrait"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Content below */}
      <div className="max-w-7xl mx-auto text-center space-y-8 px-6 pb-44">
        <p className="font-[var(--font-display)] font-bold uppercase text-2xl md:text-3xl lg:text-4xl tracking-[-0.03em] leading-[1.1] text-foreground">
          I&apos;M AN INNOVATIVE DESIGNER AND DIGITAL ARTIST IN USA.{" "}<br/>
          MY PASSION FOR MINIMALIST AESTHETICS, ELEGANT TYPOGRAPHY, AND INTUITIVE
          DESIGN SHINES THROUGH IN MY WORK.
        </p>
        <p className="text-foreground/50 text-xl text-semibold leading-relaxed max-w-7xl mx-auto">
          I&apos;m on the cutting edge of no-code tools that allow me to bring my creative visions to life. Though my methods may be<br/> unconventional, my dedication to the craft is unparalleled. I thrive on finding &quot;unexpected solutions&quot; and believe <br/>that with the right perspective, design can elevate the human experience.
        </p>
      </div>

    </section>
  );
}
