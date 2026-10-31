import { PersonCard } from "@/components/ui/person-card";
import { ScrollRow } from "@/components/ui/scroll-row";
import { Container, SectionHeading, SectionLabel } from "@/components/ui/section";
import { leadership } from "@/lib/team";

export function Leadership() {
  return (
    <section id="about" className="bg-white">
      <Container className="flex flex-wrap items-center gap-x-14 gap-y-10 py-28">
        <div className="flex min-w-0 flex-[1_1_280px] flex-col gap-[22px]">
          <SectionLabel>About</SectionLabel>
          <SectionHeading>Leadership</SectionHeading>
          <p className="m-0 max-w-[420px] text-lg text-muted">
            The people who plan, build and stand behind every project at W3
            Stack Lab. [TODO: add one line on the team&apos;s experience.]
          </p>
        </div>

        <ScrollRow
          label="Leadership team"
          className="min-w-0 flex-[2_1_480px]"
          itemClassName="flex-[0_0_min(300px,82%)]"
          controlsClassName="mt-8"
          items={leadership.map((person) => (
            <PersonCard
              key={person.id}
              name={person.name}
              role={person.role}
              photo={person.photo}
            />
          ))}
        />
      </Container>
    </section>
  );
}
