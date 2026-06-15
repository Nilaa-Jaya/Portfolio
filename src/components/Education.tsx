import { SectionHeading } from "./SectionHeading";
import { education } from "@/data/education";

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-7xl px-6 py-20">
      <SectionHeading eyebrow="Academic Background" title="Education" />
      <div className="relative space-y-10 border-l border-border pl-8">
        {education.map((item) => (
          <div key={item.school} className="relative">
            <span className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-background" />
            <p className="font-mono text-xs text-accent">
              {item.start} – {item.end}
            </p>
            <h3 className="mt-1 text-lg font-semibold sm:text-xl">{item.school}</h3>
            <p className="text-sm text-muted">
              {item.degree} · {item.location}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
