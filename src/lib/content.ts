// All homepage copy lives here, ported from the W3 Stack Lab design canvas.
// Anything marked [TODO ...] still needs real content: do not publish invented
// clients, metrics or testimonials.

export const site = {
  name: "W3 Stack Lab",
  handle: "@w3stacklab",
  email: "[TODO: hello@w3stacklab.com, confirm mailbox]",
  emailShort: "[TODO: email]",
  whatsapp: "[TODO: +91 number]",
  location: "Gurugram, India",
};

export const techStack = [
  "CLAUDE API",
  "LANGCHAIN.JS",
  "MCP",
  "AI AGENTS",
  "NODE.JS",
  "EXPRESS",
  "TYPESCRIPT",
  "MERN / MEAN",
  "FLUTTER",
  "MYSQL",
  "PHP",
];

// TODO: replace [00+] placeholders with real numbers, or delete the proof bar.
export const stats = [
  { value: "[00+]", label: "Projects delivered" },
  { value: "[00+]", label: "Years of engineering experience" },
  { value: "[00]", label: "Countries served" },
];

export const services = [
  {
    title: "AI Agents & Automation",
    body: "Agents on the Claude API and LangChain.js that qualify leads, triage support, draft replies and run back-office work, inside the tools your team already uses.",
  },
  {
    title: "MCP & LLM Integrations",
    body: "Model Context Protocol servers that connect your database, APIs and internal tools to Claude and other LLMs, with sensible limits on what they can do.",
  },
  {
    title: "Web Apps (MERN/MEAN)",
    body: "Dashboards, portals and SaaS back ends on Node.js, Express and TypeScript, with MySQL or MongoDB, written to be maintained.",
  },
  {
    title: "Mobile Apps (Flutter)",
    body: "iOS and Android apps from one Flutter codebase, connected to your back end and to the AI features above.",
  },
];

export const featuredPoints = [
  "Everything in one place, built for K-12 schools",
  "AI that saves staff time on routine work",
  "Designed around how Indian private schools work",
];

// TODO: fill in 2-4 real projects. No invented clients or metrics.
export const caseStudies = [1, 2, 3].map((n) => ({
  label: `CASE STUDY 0${n}`,
  title: "[TODO: project name]",
  rows: [
    { k: "Problem", v: "[TODO: what the client needed solved]" },
    { k: "What I built", v: "[TODO: the agent / app / integration]" },
    { k: "Tech used", v: "[TODO: stack for this project]" },
    { k: "Result", v: "[TODO: a real outcome. Only add numbers you can prove]" },
  ],
}));

export const processSteps = [
  {
    title: "Discover",
    body: "I start with a call to understand the task you want off your plate, then agree what is worth automating.",
  },
  {
    title: "Prototype",
    body: "You see a working agent on your own data within days, before anything is committed to a full build.",
  },
  {
    title: "Build",
    body: "Short cycles, tested against real cases, with logging so you can see what the agent did and why.",
  },
  {
    title: "Support",
    body: "After launch I monitor, fix and tune it as your process and the models change.",
  },
];

export const aboutSkills = [
  "Claude API",
  "LangChain.js",
  "MCP",
  "AI agents",
  "MEAN / MERN",
  "Node.js",
  "Express",
  "TypeScript",
  "Flutter",
  "MySQL",
  "PHP",
];

export const posts = [1, 2, 3].map(() => ({
  category: "[Category]",
  title: "[Blog post title goes here]",
  meta: "[Date] · [X] min read",
}));

// TODO: replace with real client testimonials, added with permission, or remove.
export const testimonials = [1, 2, 3].map(() => ({
  quote: "[TODO: real client quote. Add only with the client's permission.]",
  name: "[Client name]",
  role: "[Role, Company]",
}));

export const serviceOptions = [
  "AI agents or automation",
  "MCP or LLM integration",
  "Web app (MERN/MEAN)",
  "Mobile app (Flutter)",
  "School Information Management System",
  "Something else",
];

// TODO: confirm every social URL exists before launch.
export const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Work", href: "#work" },
      { label: "Blog", href: "#blog" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Book a free call", href: "#contact" },
      { label: site.emailShort, href: "#contact" },
      { label: "Privacy Policy", href: "#contact" },
      { label: "Terms", href: "#contact" },
    ],
  },
  {
    title: site.handle,
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/company/w3stacklab" },
      { label: "GitHub", href: "https://github.com/w3stacklab" },
      { label: "Instagram", href: "https://www.instagram.com/w3stacklab" },
      { label: "X", href: "https://x.com/w3stacklab" },
      { label: "YouTube", href: "https://www.youtube.com/@w3stacklab" },
      { label: "Facebook", href: "https://www.facebook.com/w3stacklab" },
    ],
  },
];
