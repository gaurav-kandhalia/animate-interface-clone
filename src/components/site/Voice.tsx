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
    <section ref={ref} className=" mt-30 ">
      <SectionLabel number="05" category="// Voice of Grey" meta="Since 2000" />

      {/* Scroll canvas — 360vh gives ~260vh of sticky scroll time */}
   <div className="relative">

  {/* TEXT LAYER */}
  <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden ">
    
    <motion.div className="relative z-0 px-6 md:px-10 pointer-events-none w-[70%]">
      
      <p
        className="
          font-[family-name:var(--font-display)]
          font-bold uppercase
          text-[clamp(1.2rem,2.8vw,3rem)]
          tracking-[-0.03em]
          leading-[1.05]
          text-center
          text-foreground
        "
      >
        {words.map((w, i) => (
          <span
            key={i}
            className="inline-block mr-[0.22em]"
          >
            {w}
          </span>
        ))}
      </p>

      <div className="mt-10 text-center ">
        <span
          style={{ fontFamily: "'Dancing Script', cursive" }}
          className="text-2xl  text-foreground font-bold"
        >
          Santwayne
        </span>
      </div>

    </motion.div>
  </div>

  {/* IMAGES LAYER */}
  <div className="relative z-10">

    <div className=" flex justify-between w-[80%] mx-auto">
      
      <div className="w-[30%] md:w-1/4 flex items-end ">
        <img
          src={VOICE_GALLERY[1]}
          className="w-full md:h-[30vh] object-cover rounded-[4px]"
        />
      </div>

      <div className="w-[30%] md:w-1/4">
        <img
          src={VOICE_GALLERY[2]}
          className="w-full md:h-[50vh] object-cover rounded-[4px]"
        />
      </div>

    </div>

    <div className="w-[30%] md:w-[20%] mx-auto mt-44">
      <img
        src={VOICE_GALLERY[3]}
        className="w-full md:h-[30vh] object-cover rounded-[4px]"
      />
    </div>

    <div className="flex justify-between w-[80%] mx-auto mt-44 ">
      
      <div className="w-[30%] md:w-1/4">
        <img
          src={VOICE_GALLERY[4]}
          className="w-full h-[15vh] md:h-[40vh] object-cover rounded-[4px]"
        />
      </div>

      <div className="w-[30%] md:w-[20%] flex items-end">
        <img
          src={VOICE_GALLERY[5]}
          className="w-full h-[15vh] md:h-[25vh] object-cover rounded-[4px]"
        />
      </div>

    </div>

    <div className="h-[40vh] md:h-screen md:w-[32%] mx-auto py-4 mt-44 w-[40%] rounded-[8px]">
      <img
        src={VOICE_GALLERY[6]}
        className="w-full h-full object-cover rounded-[4px]"
      />
    </div>


  <div className="h-[50vh]"></div>
  </div>
</div>
    </section>
  );
}
