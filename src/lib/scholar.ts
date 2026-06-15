import * as cheerio from "cheerio";

export type ScholarPublication = {
  title: string;
  link: string;
  authors: string;
  venue: string;
  year: string;
  citations: string;
};

export type ScholarProfile = {
  name: string;
  affiliation: string;
  totalCitations: string;
  hIndex: string;
  i10Index: string;
  publications: ScholarPublication[];
};

const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36";

export function scholarProfileUrl(userId: string): string {
  return `https://scholar.google.com/citations?user=${userId}&hl=en`;
}

export async function getScholarProfile(userId: string): Promise<ScholarProfile | null> {
  try {
    const res = await fetch(`${scholarProfileUrl(userId)}&cstart=0&pagesize=100`, {
      headers: {
        "User-Agent": USER_AGENT,
        "Accept-Language": "en-US,en;q=0.9",
      },
      next: { revalidate: 60 * 60 * 24 },
    });

    if (!res.ok) return null;

    const html = await res.text();
    const $ = cheerio.load(html);

    const name = $("#gsc_prf_in").text().trim();
    const affiliation = $(".gsc_prf_il").first().text().trim();

    const stats = $("#gsc_rsb_st td.gsc_rsb_std")
      .map((_, el) => $(el).text().trim())
      .get();

    const [totalCitations, , hIndex, , i10Index] = stats;

    const publications: ScholarPublication[] = $("#gsc_a_b .gsc_a_tr")
      .map((_, row) => {
        const $row = $(row);
        const titleEl = $row.find(".gsc_a_at");
        const grayEls = titleEl.find(".gs_gray");
        const href = titleEl.attr("href") ?? "";

        return {
          title: titleEl.text().trim(),
          link: href.startsWith("http") ? href : `https://scholar.google.com${href}`,
          authors: $(grayEls.get(0)).text().trim(),
          venue: $(grayEls.get(1)).text().trim(),
          year: $row.find(".gsc_a_y .gsc_a_h").text().trim(),
          citations: $row.find(".gsc_a_c .gsc_a_ac").text().trim(),
        };
      })
      .get()
      .filter((pub) => pub.title);

    if (!name && publications.length === 0) return null;

    return {
      name,
      affiliation,
      totalCitations: totalCitations ?? "—",
      hIndex: hIndex ?? "—",
      i10Index: i10Index ?? "—",
      publications,
    };
  } catch {
    return null;
  }
}
