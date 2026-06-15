import { SectionHeading } from "./SectionHeading";
import { SkillBadge } from "./SkillBadge";
import { ExpertiseGraph } from "./ExpertiseGraph";
import { toolSkills } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-20">
      <SectionHeading eyebrow="What I Work With" title="Skills" />

      <h3 className="mb-6 text-center font-serif text-xl font-semibold sm:text-2xl">
        Tools &amp; Technologies
      </h3>
      <div className="grid gap-6 sm:grid-cols-2">
        {toolSkills.map((group) => (
          <div key={group.category} className="rounded-2xl border border-border bg-card p-6">
            <h4 className="mb-4 text-center text-sm font-semibold tracking-wide text-accent uppercase">
              {group.category}
            </h4>
            <div className="flex flex-wrap justify-center gap-4">
              {group.items.map((item) => (
                <SkillBadge key={item.name} {...item} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <h3 className="mt-16 mb-6 text-center font-serif text-xl font-semibold sm:text-2xl">
        Expertise &amp; Concepts
      </h3>
      <div className="rounded-2xl border border-border bg-card p-4 sm:p-6">
        <ExpertiseGraph />
      </div>
    </section>
  );
}
