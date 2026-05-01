import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { Approach } from "@/components/site/Approach";
import { Portfolio } from "@/components/site/Portfolio";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Voice } from "@/components/site/Voice";
import { Stats } from "@/components/site/Stats";
import { Experience } from "@/components/site/Experience";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "floe — Digital Designer & Framer Developer" },
      {
        name: "description",
        content:
          "floe is a media company and Framer developer based in Ludhiana, Punjab — crafting minimalist, expressive digital experiences worldwide.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Approach />
      <Portfolio />
      <About />
      <Services />
      <Voice />
      <Stats />
      <Experience />
    </>
  );
}
