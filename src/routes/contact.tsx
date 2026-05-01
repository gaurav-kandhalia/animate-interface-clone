import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { SectionLabel } from "@/components/site/SectionLabel";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — floe" },
      {
        name: "description",
        content:
          "Let's work together. Reach out to floe — based in Ludhiana, Punjab, available worldwide.",
      },
      { property: "og:title", content: "Contact — floe" },
      {
        property: "og:description",
        content: "Let's work together. Reach out to floe.",
      },
    ],
  }),
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
    <section className="min-h-screen pt-32 pb-32 px-6 md:px-10 bg-background ">
    {/* <section className="min-h-screen pt-32 pb-32 px-6 md:px-10 bg-background bg-dotgrid"> */}
      <Toaster theme="dark" />
      <div className="max-w-7xl mx-auto">
        <SectionLabel number="—" category="// Contact" meta="Available Worldwide" />

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-16 font-display text-7xl md:text-[12rem] tracking-tighter leading-[0.85]"
        >
          Get in
          <br />
          <span className="italic font-light">touch.</span>
        </motion.h1>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5 space-y-10">
            <div>
              <p className="font-mono text-[11px] tracking-widest uppercase text-muted-foreground">
                Email
              </p>
              <a
                href="mailto:hello@floe.studio"
                className="mt-2 inline-block font-display text-2xl md:text-3xl hover:italic transition-all"
              >
                hello@floe.studio
              </a>
            </div>
            <div>
              <p className="font-mono text-[11px] tracking-widest uppercase text-muted-foreground">
                Studio
              </p>
              <p className="mt-2 font-display text-2xl">
                Ludhiana, Punjab
                <br />
                <span className="text-muted-foreground">India</span>
              </p>
            </div>
            <div>
              <p className="font-mono text-[11px] tracking-widest uppercase text-muted-foreground">
                Socials
              </p>
              <ul className="mt-2 space-y-1">
                {["Instagram", "Dribbble", "Twitter"].map((s) => (
                  <li key={s}>
                    <a
                      href="#"
                      className="font-display text-xl hover:italic transition-all"
                    >
                      {s} →
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="md:col-span-7 space-y-8 border border-border/60 rounded-3xl p-8 md:p-10 bg-surface/40"
          >
            <Field label="Your name" name="name" />
            <Field label="Email" name="email" type="email" />
            <Field label="Subject" name="subject" />
            <div>
              <label className="font-mono text-[11px] tracking-widest uppercase text-muted-foreground">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                className="mt-3 w-full bg-transparent border-b border-border focus:border-foreground outline-none font-display text-xl py-2 resize-none transition-colors"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center justify-center rounded-full border border-foreground/50 px-8 py-4 font-mono text-xs tracking-[0.2em] uppercase hover:bg-foreground hover:text-background transition-colors disabled:opacity-50"
            >
              {sending ? "Sending…" : "Send message →"}
            </button>
          </form>
        </div>
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
