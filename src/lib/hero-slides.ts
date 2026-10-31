// Hero carousel content. Slide 1 is the original hero. Slides 2-4 are draft
// copy built from text already on the site (services, solution, process) so
// they claim nothing new; edit freely.
//
// Images: put files in public/assets/hero/ and set `src` (e.g.
// "/assets/hero/mcp.webp"). Recommended size 1200 x 1120 (about 6:5.6),
// WebP or JPG. Without `src` a labelled placeholder is shown.

export type HeroSlideAction = {
  label: string;
  href: string;
  variant?: "primary" | "ghost";
};

export type HeroSlideVisual =
  | { kind: "device-stack" }
  | { kind: "image"; src?: string; alt: string; placeholder: string };

export type HeroSlideData = {
  id: string;
  eyebrow?: string;
  /** Headline: `accent` is shown in brand red, `rest` follows it. */
  title: { accent: string; rest: string };
  /** A short paragraph. Use this or `points`. */
  description?: string;
  /** Bullet points, each with a title and a description. */
  points?: { title: string; body: string }[];
  actions: HeroSlideAction[];
  visual: HeroSlideVisual;
};

export const heroSlides: HeroSlideData[] = [
  {
    id: "agents",
    eyebrow: "AI engineer · W3 Stack Lab",
    title: { accent: "AI agents and automation", rest: "for businesses." },
    description:
      "I'm Shiv Pandey, an AI engineer in Gurugram. We build agents on the Claude API and MCP that take real work off your team, plus the web and mobile apps around them.",
    actions: [
      { label: "Book a free call", href: "#contact" },
      { label: "See our work", href: "#work", variant: "ghost" },
    ],
    visual: { kind: "device-stack" },
  },
  {
    id: "mcp",
    title: { accent: "Connect AI", rest: "to the tools you already use." },
    points: [
      {
        title: "MCP & LLM integrations",
        body: "Model Context Protocol servers that connect your database, APIs and internal tools to Claude and other LLMs, with sensible limits on what they can do.",
      },
      {
        title: "See what the agent did and why",
        body: "Short cycles, tested against real cases, with logging so you can see every step the agent took.",
      },
    ],
    actions: [{ label: "See services", href: "#services" }],
    visual: {
      kind: "image",
      alt: "Illustration of AI connected to business tools",
      placeholder: "MCP & LLM integrations",
    },
  },
  {
    id: "school",
    title: { accent: "School management", rest: "built for K-12." },
    points: [
      {
        title: "Everything in one place",
        body: "An AI-powered system for K-12 private schools in India, bringing school operations into one place. Currently in development.",
      },
      {
        title: "Designed around Indian schools",
        body: "Saves staff time on routine work, and is designed around how Indian private schools work.",
      },
    ],
    actions: [{ label: "Request early access", href: "#contact" }],
    visual: {
      kind: "image",
      alt: "School Information Management System dashboard",
      placeholder: "School Information Management System",
    },
  },
  {
    id: "apps",
    title: { accent: "Web and mobile apps", rest: "around the agent." },
    points: [
      {
        title: "Web apps (MERN/MEAN)",
        body: "Dashboards, portals and SaaS back ends on Node.js, Express and TypeScript, with MySQL or MongoDB, written to be maintained.",
      },
      {
        title: "Mobile apps (Flutter)",
        body: "iOS and Android apps from one Flutter codebase, connected to your back end and to the AI features.",
      },
    ],
    actions: [{ label: "See services", href: "#services" }],
    visual: {
      kind: "image",
      alt: "Web and mobile app screens",
      placeholder: "Web and mobile apps",
    },
  },
];
