import { motion } from "framer-motion";

type Props = {
  number: string;
  category: string;
  meta?: string;
};

export function SectionLabel({ number, category, meta }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.6 }}
      className="flex items-center justify-between font-mono text-[11px] tracking-[0.25em] uppercase text-muted-foreground border-y border-border/60 py-4"
    >
      {/* 🔥 hide on sm + md, show on lg+ */}
      <span className="hidden lg:block text-foreground">
        {number}
      </span>

      <span>{category}</span>

      {meta && <span>{meta}</span>}
    </motion.div>
  );
}