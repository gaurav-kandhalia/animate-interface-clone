import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Cursor } from "@/components/site/Cursor";

import appCss from "../styles.css?url";

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
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "floe — Digital Designer & Framer Developer" },
      {
        name: "description",
        content:
          "floe is a media company and Framer developer based in Ludhiana, Punjab — crafting minimalist, expressive digital experiences worldwide.",
      },
      { name: "author", content: "floe" },
      { property: "og:title", content: "floe — Digital Designer & Framer Developer" },
      {
        property: "og:description",
        content:
          "Minimalist, expressive digital experiences. Based in Ludhiana, available worldwide.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "floe — Digital Designer & Framer Developer" },
      { name: "description", content: "A React application cloning a Framer website, featuring interactive elements and animations." },
      { property: "og:description", content: "A React application cloning a Framer website, featuring interactive elements and animations." },
      { name: "twitter:description", content: "A React application cloning a Framer website, featuring interactive elements and animations." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e31f7302-5946-416b-923c-1a764cbd5376/id-preview-5eb0e88e--0f85ea20-272f-4ab2-9a1c-244133d21ded.lovable.app-1777620803991.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e31f7302-5946-416b-923c-1a764cbd5376/id-preview-5eb0e88e--0f85ea20-272f-4ab2-9a1c-244133d21ded.lovable.app-1777620803991.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter+Tight:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
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
    </>
  );
}
