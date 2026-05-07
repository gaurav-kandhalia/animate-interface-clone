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
      className="flex items-center justify-between font-display text-[13px] tracking-[0.25em] uppercase text-foreground/30 border-y border-border/60 py-4 px-10"
    >
      {/* 🔥 hide on sm + md, show on lg+ */}
      <span className="hidden lg:block text-[var(--mehron-mid)] font-medium">
        {number}
      </span>

      <span className="text-[var(--mehron-mid)] font-medium">{category}</span>

      {meta && <span className="font-medium text-foreground/40">{meta}</span>}
    </motion.div>
  );
}