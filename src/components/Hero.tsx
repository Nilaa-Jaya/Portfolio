import Image from "next/image";
import { site } from "@/data/site";
import { RotatingText } from "./RotatingText";
import { GithubIcon, LinkedinIcon } from "./icons";
import { ResumeViewer } from "./ResumeViewer";

const iconButtonClass =
  "flex h-12 w-12 items-center justify-center rounded-lg bg-cream text-cream-foreground transition-opacity hover:opacity-85";

export function Hero() {
  return (
    <section id="home" className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-center lg:gap-16">
        <div className="flex flex-col items-start">
          <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-border sm:h-40 sm:w-40">
            <Image
              src={site.profileImage}
              alt={site.name}
              fill
              sizes="160px"
              priority
              className="object-cover object-[center_25%]"
            />
          </div>

          <h1 className="mt-6 font-serif text-4xl font-bold tracking-tight sm:text-5xl">
            {site.name}
          </h1>

          <p className="mt-3 text-lg text-muted sm:text-xl">
            <span className="font-semibold text-accent">{site.rolePrefix}</span> and{" "}
            <RotatingText words={site.roles} className="font-semibold text-accent" />
          </p>

          <p className="mt-4 max-w-md text-base text-muted">{site.tagline}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={site.resume}
              download
              className="rounded-lg bg-cream px-5 py-3 text-sm font-semibold text-cream-foreground transition-opacity hover:opacity-85"
            >
              Download CV
            </a>
            <a
              href={site.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={iconButtonClass}
            >
              <GithubIcon size={20} />
            </a>
            <a
              href={site.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={iconButtonClass}
            >
              <LinkedinIcon size={20} />
            </a>
          </div>
        </div>

        <div className="h-[480px] sm:h-[560px] lg:h-[640px]">
          <ResumeViewer />
        </div>
      </div>
    </section>
  );
}
