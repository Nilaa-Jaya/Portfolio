import type { ScholarProfile } from "@/lib/scholar";

// Snapshot of the Google Scholar profile, used as a fallback because Scholar
// blocks scraping from cloud/data-center IPs (so the live fetch fails on
// hosts like Vercel). Refresh these numbers periodically.
// Last updated: 2026-08-28
export const fallbackScholarProfile: ScholarProfile = {
  name: "Nilaa Raghunathan",
  affiliation: "Student at Columbia University",
  totalCitations: "91",
  hIndex: "2",
  i10Index: "1",
  publications: [
    {
      title: "Challenges and Issues in Sentiment Analysis: A Comprehensive Survey",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hgzEI_kAAAAJ&citation_for_view=hgzEI_kAAAAJ:u5HHmVD_uO8C",
      authors: "N Raghunathan, S Kandasamy",
      venue: "IEEE Access",
      year: "2023",
      citations: "88",
    },
    {
      title:
        "Sentiment Analysis for Product Reviews using Long Short-Term Memory with Layer Normalization",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hgzEI_kAAAAJ&citation_for_view=hgzEI_kAAAAJ:d1gkVwhDpl0C",
      authors: "N Raghunathan, P Shiwakoti, P Monika, M Anbarasi, S Shanmugam",
      venue: "2023 First International Conference on the Advancements of Artificial Intelligence",
      year: "2023",
      citations: "3",
    },
  ],
};
