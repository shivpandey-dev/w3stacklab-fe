import { aboutSkills } from "@/lib/content";
import { Container, SectionHeading, SectionLabel } from "@/components/ui/section";

export function About() {
  return (
    <section id="about" className="bg-white">
      <Container className="flex flex-wrap items-center gap-16 py-28">
        <div className="relative max-w-[420px] flex-[1_1_320px]">
          <div
            aria-hidden
            className="absolute inset-[18px_-18px_-18px_18px] rounded-[20px] border-2 border-brand"
          />
          <div className="relative flex aspect-[4/5] items-center justify-center rounded-[20px] bg-line text-sm text-muted">
            [TODO: your photo]
          </div>
        </div>

        <div className="flex min-w-0 flex-[2_1_460px] flex-col gap-[22px]">
          <SectionLabel>About</SectionLabel>
          <SectionHeading>I&apos;m Shiv, an AI engineer who ships.</SectionHeading>
          <p className="m-0 max-w-[620px] text-lg text-muted">
            I&apos;m a full-stack JavaScript and TypeScript developer based in
            Gurugram. I started on MEAN and MERN web apps, and now spend most of
            my time building AI agents with the Claude API, LangChain.js and the
            Model Context Protocol.
          </p>
          <p className="m-0 max-w-[620px] text-lg text-muted">
            W3 Stack Lab is the umbrella I work under. When a project needs a
            web app or a Flutter mobile app around the agent, we build that too.
            [TODO: add one line on who else works with you.]
          </p>
          <ul className="m-0 flex list-none flex-wrap gap-2.5 p-0">
            {aboutSkills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-line-strong bg-white px-3.5 py-1.5 font-mono text-[13px]"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
