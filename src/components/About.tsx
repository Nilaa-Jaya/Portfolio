import { site } from "@/data/site";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-20 text-center">
      <SectionHeading eyebrow="Get to Know More" title="About Me" />
      <div className="mx-auto max-w-3xl space-y-5 text-base leading-relaxed text-muted sm:text-lg">
        {site.bio.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
