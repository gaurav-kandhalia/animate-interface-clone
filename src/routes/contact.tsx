import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

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
    <section className="min-h-screen bg-background text-foreground pt-28 pb-20 px-6 md:px-12">
      <Toaster theme="dark" />
      <div className="max-w-6xl mx-auto">

        {/* Two column: form left, photo right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">

          {/* LEFT — form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="font-display text-4xl md:text-6xl font-bold uppercase leading-tight">
              Ring a bell!
            </h1>
            <p className="mt-3 text-sm text-foreground/50 max-w-xs leading-relaxed">
              Reach out and let&apos;s create something amazing together. Let&apos;s achieve greatness.
            </p>

            <form onSubmit={onSubmit} className="mt-10 space-y-4">
              <p className="text-xs font-bold uppercase tracking-widest text-foreground/60 mb-6">
                Fill this form out
              </p>

              <Field label="Name*" name="name" type="text" />
              <Field label="Email*" name="email" type="email" />
              <Field label="Message*" name="message" textarea />

              <button
                type="submit"
                disabled={sending}
                className="mt-6 w-full bg-foreground text-background font-display font-bold uppercase tracking-wider py-4 rounded-[15px] hover:bg-foreground/90 transition-colors disabled:opacity-60"
              >
                {sending ? "Sending…" : "Submit Now"}
              </button>
            </form>
          </motion.div>

          {/* RIGHT — photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full h-[480px] md:h-auto rounded-[22px] overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80"
              alt="Contact"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Bottom info row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-20 pt-8 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-10"
        >
          <InfoBlock title="Follow Me">
            <a href="#" className="flex items-center gap-1 hover:text-foreground/60 transition-colors">Instagram <span className="text-xs">↗</span></a>
            <a href="#" className="flex items-center gap-1 hover:text-foreground/60 transition-colors">Dribbble <span className="text-xs">↗</span></a>
            <a href="#" className="flex items-center gap-1 hover:text-foreground/60 transition-colors">Twitter <span className="text-xs">↗</span></a>
          </InfoBlock>

          <InfoBlock title="Current Location">
            <p>Ludhiana, Punjab</p>
            <p>India</p>
          </InfoBlock>

          <InfoBlock title="Phone">
            <p>IND +91 98765 43210</p>
          </InfoBlock>

          <InfoBlock title="Email Me">
            <a href="mailto:hello@buzzculture.com" className="hover:text-foreground/60 transition-colors break-all">hello@buzzculture.com</a>
          </InfoBlock>
        </motion.div>

      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea = false,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
}) {
  const base =
    "w-full bg-[#111111] border border-white/5 rounded-[15px] px-5 py-4 text-foreground text-sm outline-none focus:border-white/20 transition-colors placeholder:text-foreground/40";

  return (
    <div>
      {textarea ? (
        <textarea
          name={name}
          required
          rows={4}
          placeholder={label}
          className={`${base} resize-none`}
        />
      ) : (
        <input
          type={type}
          name={name}
          required
          placeholder={label}
          className={base}
        />
      )}
    </div>
  );
}

function InfoBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 mb-3">{title}</p>
      <div className="space-y-1 text-sm font-medium text-foreground uppercase">
        {children}
      </div>
    </div>
  );
}
