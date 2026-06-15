import { Mail } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { site } from "@/data/site";
import { GithubIcon, LinkedinIcon } from "./icons";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
      <SectionHeading eyebrow="Get In Touch" title="Contact" />
      <p className="mx-auto max-w-2xl text-center text-base leading-relaxed text-muted sm:text-lg">
        I&apos;m always open to discussing new projects, research collaborations, or opportunities
        in AI and data science. Feel free to reach out.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          href={`mailto:${site.contact.email}`}
          className="flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm transition-colors hover:border-accent hover:text-accent"
        >
          <Mail size={18} />
          {site.contact.email}
        </a>
        <a
          href={site.contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm transition-colors hover:border-accent hover:text-accent"
        >
          <GithubIcon size={18} />
          GitHub
        </a>
        <a
          href={site.contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm transition-colors hover:border-accent hover:text-accent"
        >
          <LinkedinIcon size={18} />
          LinkedIn
        </a>
      </div>
    </section>
  );
}
