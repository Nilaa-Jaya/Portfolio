import { SectionHeading } from "./SectionHeading";
import { projects } from "@/data/projects";
import { GithubIcon } from "./icons";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-20">
      <SectionHeading eyebrow="Featured Work" title="Projects" />
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/50"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} on GitHub`}
                className="shrink-0 rounded-full border border-border p-2 text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <GithubIcon size={18} />
              </a>
            </div>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
