ns
# Clone of buzz culture (consistent-interface-326115.framer.app)

A pixel-faithful rebuild of your Framer site using React (TanStack Start), Tailwind CSS v4, and Framer Motion for animations. Dark, minimal, big-type aesthetic with scroll-driven motion throughout.

## Pages / Routes

- `/` — Home (long-scroll landing with all 8 numbered sections)
- `/work/seventy-seven` — Project: Automobiles
- `/work/scrambler` — Project: Events & Production Photography
- `/work/zudio-garage` — Project: Fashion & Lifestyle Business
- `/contact` — Contact page

## Global UI

- **Top nav bar (fixed/floating)**: left "LOCAL/" + live ticking clock (HH:MM:SS), center 6-dot menu trigger, right outlined pill "CONTACT NOW" button.
- **Theme**: pure black background, white text, subtle dotted/grid texture overlay, faint vertical/horizontal guide lines.
- **Type**: large geometric sans (Inter Tight / Satoshi-style) for display, monospace accents for labels (`//Approach`, `01`, etc.).
- **Custom cursor**: small circular follower that scales on hover over interactive elements.
- **Footer**: "Let's work together" giant headline → CONTACT NOW link, location, role line, social links (Instagram, Dribbble, Twitter), large portrait image.

## Home page sections (in order)

1. **Hero** — Massive "buzz culture" wordmark filling viewport. Three info pills below: "Based in Ludhiana, Punjab" (📍), "Available all around Worldwide" (🌐), "Media Company + Framer Developer" (✓). Letters animate in with stagger + slight scale.
2. **01 // Approach — Three Phases** — Heading "buzz culture" Three numbered phases (Discover & Analysis, Design & Implement, Deliver & Monitor), each with 3 stacked image cards that parallax/tilt on scroll. Below: a continuously scrolling marquee row of small image tiles.
3. **02 // Portfolio — Latest Portfolio (2020–2025)** — Three large project cards (Automobiles, Events & Production Photography, Fashion & Lifestyle Business) with hover image-zoom and label reveal. Each links to its `/work/...` route.
4. **03 // Who Am I — More About buzz culture** — Portrait image left, large statement copy right ("I'm an innovative designer…"), supporting paragraph. Scroll-reveal on text lines.
5. **04 // Services — Pro Services** — 5 service rows (Full Website Sprint, Motion Design, Full Design Package, React Development, Web Design) as expandable accordion-style list with hover underline + arrow. Side portrait image.
6. **05 // Voice of Grey** — Long single-sentence statement that animates word-by-word on scroll. Horizontal scrolling gallery of 6 portrait images with drag/scroll interaction.
7. **06 // Stats — Fun Facts** — 4 counters animating from 0 (Global Clients, Years of Experience, Awards Won, Success Rate %).
8. **07 // Experience (2013 – Present)** — Vertical timeline of 4 roles (Clavmen Studio, Losify, Gamadias, Freelance) with company, role, dates, description. Below: continuous marquee of work imagery.
9. **08 // Awards / CTA** — Giant "LET'S WORK TOGETHER" with CONTACT NOW link. Transitions into footer.

## Work detail pages (`/work/:slug`)

Shared layout:
- Hero: project title, category tag, year, large cover image with parallax.
- Two-column meta block (Client, Role, Year, Services).
- Body: alternating large images + short caption blocks.
- Bottom: "Next project" link with image preview.

Three slugs prefilled with the matching cover image and category from the home grid.

## Contact page (`/contact`)

- Giant "Get in touch" headline.
- Email + socials prominent.
- Simple form (Name, Email, Message) — submit shows success toast (no backend yet; can wire up Lovable Cloud later).
- Reuses footer.

## Animations (Framer Motion)

- Page transitions: fade + slight Y on route change.
- Scroll reveals: `whileInView` fade-up with stagger on text and cards.
- Hero letters: per-character stagger entrance.
- Marquees: infinite `x` translation loops (approach + experience rows).
- Project cards: image scale 1 → 1.05 on hover, label slides up.
- Counters: `useInView` + animated number ramp.
- Custom cursor: spring-tracked follower, grows on hover targets.
- Subtle parallax on portrait/cover images via `useScroll` + `useTransform`.

## Assets

Since this is your site, I'll reference the original `framerusercontent.com` image URLs directly. If any fail to load (hotlink protection), I'll swap to local copies in `src/assets/`.

## Tech notes

- Framework: existing TanStack Start + Tailwind v4 stack — no swap needed.
- New deps: `framer-motion`.
- New files: route files for `/contact`, `/work/$slug.tsx`; components in `src/components/` for `Nav`, `Footer`, `Marquee`, `Cursor`, `SectionLabel`, `Counter`, `ServiceRow`, `ProjectCard`, plus per-section components for the home page.
- Route metadata (`head()`) per page for proper SEO/OG.
- Mobile responsive: stack columns, scale display type down, disable custom cursor on touch.

## Out of scope (ask if you want these)

- CMS for projects (currently hardcoded — easy to add later via Lovable Cloud).
- Working contact form backend (form is UI-only until you confirm).
- Blog.
