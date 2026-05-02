// Centralized content for the floe clone.
// Image URLs reference the original Framer-hosted assets (user-owned site).

export const APPROACH_IMAGES = {
  discover: [
    "https://framerusercontent.com/images/My7SNbGqP7RXWC7NQ2gn0m4yxl8.png",
    "https://framerusercontent.com/images/lQJ6q0QJYyTWboBcFRZQhAcixR4.png",
    "https://framerusercontent.com/images/30SgNEcdoaIQjP9SX778MdNs1o.png",
  ],
  design: [
    "https://framerusercontent.com/images/GsvUhduUuKpqabW4bstAZkXg2I.png",
    "https://framerusercontent.com/images/mdHohhCEac2dy5qj6Hz8xLx3o.png",
    "https://framerusercontent.com/images/3l7cpJjfC1VLeRWLg54tkWCEA.png",
  ],
  deliver: [
    "https://framerusercontent.com/images/dfa6kXeZNdp07AUexK86lC0Av1Q.png",
    "https://framerusercontent.com/images/aBDs4HUqRid8nL96E0hRXrwJBRg.png",
    "https://framerusercontent.com/images/uNKtEHPNTpmZAxn4jjdzE9O6BU.png",
  ],
};

export const APPROACH_MARQUEE = [
  "https://framerusercontent.com/images/ptUMyGToq4XcV1sOSWdV1bzmaM.png",
  "https://framerusercontent.com/images/42Jguk0yaR8pNwMppFsAtfK05Go.png",
  "https://framerusercontent.com/images/yhbSJ5fWw5eGw8KkqicZtnjhLNY.png",
  "https://framerusercontent.com/images/2muA4LxkOuvSv8T9LH67QD2wVpI.png",
  "https://framerusercontent.com/images/tzgCv6dwyO8v0xInhaweQBOmB0U.png",
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  cover: string;
  year: string;
  client: string;
  role: string;
  services: string[];
  intro: string;
  gallery: string[];
};

export const PROJECTS: Project[] = [
  {
    slug: "seventy-seven",
    title: "Seventy Seven",
    category: "Automobiles",
    cover: "https://framerusercontent.com/images/lcBHCqWDW2WLF250v2c9Gd7G6Hk.jpg?scale-down-to=512",
    year: "2024",
    client: "Seventy Seven Motors",
    role: "Brand & Web",
    services: ["Art Direction", "Web Design", "Framer Development", "Motion"],
    intro:
      "A bold identity and immersive web experience for an automotive house obsessed with craft and speed.",
    gallery: [
      "https://framerusercontent.com/images/CkRGbZ3Tef83yc5ibFgim9s6w.jpg",
      "https://framerusercontent.com/images/VX1rSkalWuRIsRIh7yoySMaSpWU.jpg",
      "https://framerusercontent.com/images/lcBHCqWDW2WLF250v2c9Gd7G6Hk.jpg",
    ],
  },
  {
    slug: "scrambler",
    title: "Scrambler",
    category: "Events & Production Photography",
    cover: "https://framerusercontent.com/images/pCoD88DKMR6u8sV967pM6PHtCQ.jpg",
    year: "2023",
    client: "Scrambler Co.",
    role: "Visual Identity",
    services: ["Photography", "Editorial Design", "Web Design"],
    intro:
      "An editorial-driven site capturing the energy of live productions and the people behind them.",
    gallery: [
      "https://framerusercontent.com/images/pCoD88DKMR6u8sV967pM6PHtCQ.jpg",
      "https://framerusercontent.com/images/TwPnCUkRbYkKlfJL4ZCaWKgdY.jpg",
      "https://framerusercontent.com/images/5Vg5yv5EupF47u9k0JSlIej05kk.jpg",
    ],
  },
  {
    slug: "zudio-garage",
    title: "Zudio Garage",
    category: "Fashion & Lifestyle Business",
    cover: "https://framerusercontent.com/images/niBAdMw0P4uWuJBe7CqezeO87Bo.jpg",
    year: "2025",
    client: "Zudio Garage",
    role: "End-to-end Design",
    services: ["Brand", "Web Design", "Lookbook", "Framer Development"],
    intro:
      "A fashion-forward digital storefront blending lifestyle storytelling with rapid e-commerce.",
    gallery: [
      "https://framerusercontent.com/images/niBAdMw0P4uWuJBe7CqezeO87Bo.jpg",
      "https://framerusercontent.com/images/4GeZH9tDnTqh21vfDk8tqPUurU.jpg",
      "https://framerusercontent.com/images/OATXG2GnXto6ab0AfvxOG7cKU.jpg",
    ],
  },
];

export const SERVICES = [
  { title: "Full Website Sprint", subtitle: "Effortless Execution, Rapid Results" },
  { title: "Motion Design", subtitle: "Interaction Design, Usability Audits" },
  { title: "Full Design Package", subtitle: "Logo creation, typography, materials" },
  { title: "React Development", subtitle: "Full Website Development" },
  { title: "Web Design", subtitle: "Figma File, Sketch File" },
];

export const VOICE_GALLERY = [
  "https://framerusercontent.com/images/qDUMiDuI5ao4dPjdKcx8B6eoBds.png",
  "https://framerusercontent.com/images/R84IjjWIM9LGPSTUT6xDg5XHh4.jpg",
  "https://framerusercontent.com/images/OATXG2GnXto6ab0AfvxOG7cKU.jpg",
  "https://framerusercontent.com/images/tFHhhUtMBpyKrQOMIiUcurylcQ.jpg",
  "https://framerusercontent.com/images/4GeZH9tDnTqh21vfDk8tqPUurU.jpg",
  "https://framerusercontent.com/images/5Vg5yv5EupF47u9k0JSlIej05kk.jpg",
  "https://framerusercontent.com/images/TwPnCUkRbYkKlfJL4ZCaWKgdY.jpg",
];

export const STATS = [
  { value: 120, suffix: "+", label: "Global Clients" },
  { value: 12, suffix: "+", label: "Years of Experience" },
  { value: 38, suffix: "+", label: "Awards Won" },
  { value: 99, suffix: "%", label: "Success Rate" },
];

export const EXPERIENCE = [
  {
    company: "Clavmen Studio",
    role: "Senior UX Designer",
    period: "2022 - Present",
    description:
      "Clavmen inspires creativity and makes learning piano fun. The sleek, lightweight body fits easily into gig bags for portability.",
  },
  {
    company: "Losify",
    role: "Lead Product Designer",
    period: "2013 – 2022",
    description:
      "Fitness and well-being with personalized coaching and innovative wellness solutions.",
  },
  {
    company: "Gamadias",
    role: "Junior UX Designer",
    period: "2012 – 2013",
    description:
      "Gaming experiences with innovative technology and unparalleled performance.",
  },
  {
    company: "Freelance",
    role: "Web Designer",
    period: "2010 – 2012",
    description:
      "Bringing creativity, technical expertise, and a passion for design to every project.",
  },
];

export const EXPERIENCE_MARQUEE = [
  "https://framerusercontent.com/images/xcxQQ1waNtZJqJFNv1uOoAOs.jpg",
  "https://framerusercontent.com/images/CkRGbZ3Tef83yc5ibFgim9s6w.jpg",
  "https://framerusercontent.com/images/JwJTxroeEh0a7U32iDMSI6d6R8.jpg",
  "https://framerusercontent.com/images/VX1rSkalWuRIsRIh7yoySMaSpWU.jpg",
];

export const FOOTER_PORTRAIT =
  "https://framerusercontent.com/images/u6Idk7qL4dVIYM1Dq4mj29hIpaM.jpg";

export const ABOUT_PORTRAIT =
  "https://framerusercontent.com/images/R0Rfx8BGTyQo3dKWrYUmLBgtI.jpg";

export const SERVICES_PORTRAIT =
  "https://framerusercontent.com/images/gPqr7rZSe49I2LnZy4JermGDfw.jpg";

export const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/" },
  { label: "Dribbble", href: "https://dribbble.com/" },
  { label: "Twitter", href: "https://x.com/" },
];
