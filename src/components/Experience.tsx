import { SectionHeading } from "./SectionHeading";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-6 py-20">
      <SectionHeading eyebrow="Where I've Been" title="Experience" />
      <div className="relative space-y-10 border-l border-border pl-8">
        {experience.map((item) => (
          <div key={`${item.org}-${item.start}`} className="relative">
            <span className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-background" />
            <p className="font-mono text-xs text-accent">
              {item.start} – {item.end}
            </p>
            <h3 className="mt-1 text-lg font-semibold sm:text-xl">{item.role}</h3>
            <p className="text-sm text-muted">{item.org}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
