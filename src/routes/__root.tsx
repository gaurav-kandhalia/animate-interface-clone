import { Outlet, Link, createRootRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Cursor } from "@/components/site/Cursor";
import GridLines from "@/components/background/GridLines";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full border border-foreground/40 px-6 py-3 font-mono text-xs tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootComponent() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <div className="absolute inset-0 z-[1] pointer-events-none" />

      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          backgroundImage:
            "url('https://framerusercontent.com/images/ldf53R2pKtKErtQpdz1GxxWt2I.svg')",
          backgroundRepeat: "repeat",
          backgroundSize: "13px auto",
          opacity: 0.06,
        }}
      />

      <GridLines />

      <div className="relative z-10">
        <Cursor />
        <Nav />

        <AnimatePresence mode="wait">
          <motion.main
            key="main"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Outlet />
            <Footer />
          </motion.main>
        </AnimatePresence>
      </div>
    </div>
  );
}
