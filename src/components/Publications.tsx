import { ExternalLink, Quote } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { site } from "@/data/site";
import { getScholarProfile, scholarProfileUrl } from "@/lib/scholar";

const FALLBACK_NOTE =
  "Live data from Google Scholar is temporarily unavailable. Visit the profile directly for the latest publications and citation metrics.";

export async function Publications() {
  const profile = await getScholarProfile(site.scholarUserId);
  const profileUrl = scholarProfileUrl(site.scholarUserId);

  return (
    <section id="publications" className="mx-auto max-w-7xl px-6 py-20">
      <SectionHeading eyebrow="Research" title="Publications" />

      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-xl font-semibold">{profile?.name || site.name}</h3>
            {profile?.affiliation && <p className="mt-1 text-sm text-muted">{profile.affiliation}</p>}
          </div>

          {profile && (
            <div className="flex gap-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-accent">{profile.totalCitations}</p>
                <p className="text-xs text-muted">Citations</p>
              </div>
            </div>
          )}
        </div>

        {profile && profile.publications.length > 0 ? (
          <ul className="mt-8 space-y-5 divide-y divide-border">
            {profile.publications.map((pub) => (
              <li key={pub.link} className="pt-5 first:pt-0">
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start justify-between gap-3"
                >
                  <span className="font-medium transition-colors group-hover:text-accent">
                    {pub.title}
                  </span>
                  <ExternalLink
                    size={16}
                    className="mt-1 shrink-0 text-muted transition-colors group-hover:text-accent"
                  />
                </a>
                {pub.authors && <p className="mt-1 text-sm text-muted">{pub.authors}</p>}
                <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-muted">
                  {pub.venue && <span>{pub.venue}</span>}
                  {pub.year && <span>{pub.year}</span>}
                  {pub.citations && (
                    <span className="flex items-center gap-1">
                      <Quote size={12} />
                      {pub.citations} citations
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-6 text-sm text-muted">{FALLBACK_NOTE}</p>
        )}

        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent transition-opacity hover:opacity-80"
        >
          View full profile on Google Scholar
          <ExternalLink size={14} />
        </a>
      </div>
    </section>
  );
}
