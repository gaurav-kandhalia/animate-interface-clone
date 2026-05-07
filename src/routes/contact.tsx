import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { SectionLabel } from "@/components/site/SectionLabel";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message sent. We'll be in touch soon.");
      (e.target as HTMLFormElement).reset();
    }, 700);
  };

  return (
    <section className="min-h-screen pt-32 pb-32 px-6 md:px-10">
      <Toaster theme="dark" />
      <div className="max-w-7xl mx-auto">
        <SectionLabel number="—" category="// Contact" meta="Available Worldwide" />

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-16 font-display text-7xl md:text-[12rem] tracking-tighter leading-[0.85] uppercase"
        >
          Ring a bell!
          <br />
          <span>
            Reach out and let&apos;s create something amazing together. Let&apos;s achieve greatness.
          </span>
        </motion.h1>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-12 gap-12" />
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
}: {
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <div>
      <label className="font-mono text-[11px] tracking-widest uppercase text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required
        className="mt-3 w-full bg-transparent border-b border-border focus:border-foreground outline-none font-display text-xl py-2 transition-colors"
      />
    </div>
  );
}
