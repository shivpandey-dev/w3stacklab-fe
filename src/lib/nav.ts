// Header navigation, from the "Website update guide" (section 4).
//
// Launch rule: an entry goes live only when its page or section exists. Entries
// with `live: false` are kept here so they can be switched on with one edit,
// but they are not rendered. Do not list more entries than there are real pages.

export type MenuItem = {
  name: string;
  /** One line, 80 characters or fewer in the guide. */
  description: string;
  href: string;
  /** Status tag, e.g. "In development". */
  tag?: string;
};

export type NavEntry = {
  id: string;
  label: string;
  live: boolean;
  /** Plain link. Entries with a `menu` open a panel instead. */
  href?: string;
  menu?: {
    items: MenuItem[];
    viewAll?: { label: string; href: string };
    prompt: { text: string; linkLabel: string; href: string };
  };
};

export const bookCall = { label: "Book a call", href: "#contact" };

export const navEntries: NavEntry[] = [
  {
    id: "services",
    label: "Services",
    live: true,
    menu: {
      // TODO: every entry points at the Services section until the dedicated
      // pages exist (AI Agents & Automation and SaaS & MVP get their own pages).
      items: [
        {
          name: "AI Agents & Automation",
          description:
            "Agents that handle repetitive work across your tools, with people in control.",
          href: "#services",
        },
        {
          name: "LLM Apps & RAG",
          description:
            "Assistants that answer from your own documents and data, and show sources.",
          href: "#services",
        },
        {
          name: "MCP & System Integrations",
          description:
            "Connect AI to your CRM, database and internal tools through secure integrations.",
          href: "#services",
        },
        {
          name: "AI Audit & Roadmap",
          description:
            "A 2-5 day review that finds where automation will pay off first.",
          href: "#services",
        },
        {
          name: "SaaS & MVP Development",
          description: "Launch a working product in 6-10 weeks at a fixed price.",
          href: "#services",
        },
        {
          name: "Web App Development",
          description:
            "Fast, secure web apps and dashboards built with MERN and Next.js.",
          href: "#services",
        },
        {
          name: "Mobile App Development",
          description:
            "Cross-platform iOS and Android apps built with Flutter.",
          href: "#services",
        },
        {
          name: "Dedicated Developers & Support",
          description:
            "A senior developer or small pod on a monthly plan, plus maintenance.",
          href: "#services",
        },
      ],
      viewAll: { label: "View all services", href: "#services" },
      prompt: {
        text: "Not sure where to start?",
        linkLabel: bookCall.label,
        href: bookCall.href,
      },
    },
  },
  {
    // Hidden at launch: the guide says to hide this menu unless at least three
    // industries are backed by a demo, case study or real project. Only
    // Education qualifies (partly). Flip `live` once three do.
    id: "industries",
    label: "Industries",
    live: false,
    menu: {
      items: [],
      viewAll: { label: "View all industries", href: "#industries" },
      prompt: {
        text: "Building for another sector?",
        linkLabel: bookCall.label,
        href: bookCall.href,
      },
    },
  },
  {
    id: "solutions",
    label: "Solutions",
    live: true,
    menu: {
      items: [
        {
          name: "School Information Management System",
          description:
            "AI-assisted timetables and substitute planning for K-12 schools.",
          href: "#solutions",
          tag: "In development",
        },
      ],
      viewAll: { label: "View all solutions", href: "#solutions" },
      prompt: {
        text: "Need something custom?",
        linkLabel: "Talk to us",
        href: "#contact",
      },
    },
  },
  { id: "work", label: "Work", live: true, href: "#work" },
  // Hidden at launch: there is no Pricing section or page yet.
  { id: "pricing", label: "Pricing", live: false, href: "#pricing" },
  {
    id: "about",
    label: "About",
    live: true,
    menu: {
      items: [
        {
          name: "About us",
          description: "Who builds your product, and where we are based.",
          href: "#about",
        },
        {
          name: "How we work",
          description: "Discover, prototype, build and support, in plain steps.",
          href: "#process",
        },
        {
          name: "Insights",
          description: "Notes on building AI agents and software.",
          href: "#blog",
        },
      ],
      prompt: {
        text: "Want to talk it through?",
        linkLabel: bookCall.label,
        href: bookCall.href,
      },
    },
  },
];

export const liveNavEntries = navEntries.filter((entry) => entry.live);
