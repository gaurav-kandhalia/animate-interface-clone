import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionLabel } from "./SectionLabel";
import { VOICE_GALLERY } from "@/lib/site-data";

const STATEMENT =
  "An India-based independent creative studio, specializing in helping businesses and individuals turn their ideas into impactful development and design solutions.";

// Each image: horizontal position, width, final vertical resting spot
// Pattern: left → right → center → left → right → left → right
const LAYOUT = [
  { left: "4%",  width: "23vw", top: "8vh"  },  // 1 — left
  { left: "73%", width: "23vw", top: "8vh"  },  // 2 — right
  { left: "36%", width: "28vw", top: "18vh" },  // 3 — center
  { left: "18%", width: "19vw", top: "38vh" },  // 4 — left
  { left: "63%", width: "19vw", top: "36vh" },  // 5 — right
  { left: "2%",  width: "17vw", top: "60vh" },  // 6 — left
  { left: "81%", width: "17vw", top: "58vh" },  // 7 — right
];


// Clamp t to [0,1] and interpolate 105vh → 0vh, then freeze at 0
function makeYMapper(start: number, end: number) {
  return (v: number) => {
    const t = Math.min(1, Math.max(0, (v - start) / (end - start)));
    const vh = (1 - t) * 105;
    return `${vh}vh`;
  };
}

export function Voice() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Headline shrinks as images fill the screen
  const headlineScale = useTransform(scrollYProgress, [0.0, 0.40], [1, 0.72]);

  // Mapper-based transforms — guaranteed to clamp at 0vh once the image is in place
  const y0 = useTransform(scrollYProgress, makeYMapper(0.00, 0.08));
  const y1 = useTransform(scrollYProgress, makeYMapper(0.13, 0.21));
  const y2 = useTransform(scrollYProgress, makeYMapper(0.26, 0.34));
  const y3 = useTransform(scrollYProgress, makeYMapper(0.39, 0.47));
  const y4 = useTransform(scrollYProgress, makeYMapper(0.52, 0.60));
  const y5 = useTransform(scrollYProgress, makeYMapper(0.65, 0.73));
  const y6 = useTransform(scrollYProgress, makeYMapper(0.78, 0.86));
  const yValues = [y0, y1, y2, y3, y4, y5, y6];

  const words = STATEMENT.split(" ");

  return (
    <section ref={ref} className="relative bg-background">
      <SectionLabel number="05" category="// Voice of Grey" meta="Since 2000" />

      {/* Scroll canvas — 360vh gives ~260vh of sticky scroll time */}
      <div className="min-h-[360vh]">
        <div className="sticky top-0 h-screen overflow-hidden">

          {/* FIXED TEXT — shrinks as images layer on top */}
          <motion.div
            style={{ scale: headlineScale }}
            className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6 md:px-10 select-none pointer-events-none"
          >
            <p
              className="
                font-[family-name:var(--font-display)]
                font-bold uppercase
                text-[clamp(2.2rem,4.8vw,5rem)]
                tracking-[-0.03em] leading-[1.05]
                text-center text-foreground
              "
            >
              {words.map((w, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0.08 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-20%" }}
                  transition={{ duration: 0.45, delay: i * 0.025 }}
                  className="inline-block mr-[0.22em]"
                >
                  {w}
                </motion.span>
              ))}
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10"
            >
              <span
                style={{ fontFamily: "'Dancing Script', cursive" }}
                className="text-5xl md:text-6xl text-foreground font-bold"
              >
                Santwayne
              </span>
            </motion.div>
          </motion.div>

          {/* IMAGES — rise one by one from below on each scroll step */}
          {VOICE_GALLERY.map((src, i) => (
            <motion.div
              key={i}
              style={{
                y: yValues[i],
                left: LAYOUT[i].left,
                top: LAYOUT[i].top,
                width: LAYOUT[i].width,
                zIndex: 20 + i,          // later images sit on top
              }}
              className="absolute"
            >
              <div className="h-[36vh] rounded-2xl overflow-hidden bg-foreground/5">
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
