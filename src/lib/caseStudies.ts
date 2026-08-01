import { projects, type Project } from "./projects";

export type CaseStudyResult = { label: string; value: string };

export type CaseStudy = {
  /** Must match a slug in projects.ts */
  slug: string;
  /** Where the company was before working with Nile Reach */
  startingPoint: string;
  /** What Nile Reach actually did, step by step */
  approach: string[];
  /**
   * Headline outcomes. NOTE: these are placeholders — swap in the real,
   * verified figures for each client before publishing. Publishing invented
   * numbers about a real named business is a false-advertising risk, so
   * every value below is intentionally left as "Add real figure" until the
   * true number is supplied.
   */
  results: CaseStudyResult[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "mep-erictric-technology",
    startingPoint:
      "MEP Erictric Technology Ltd had no website and no Google Business Profile. Potential clients searching online for MEP engineering services in Rwanda had no way to find the company, verify its legitimacy, or see its work — all business came through word of mouth and existing contacts.",
    approach: [
      "Built a modern corporate website that presents the company's services and credibility to new prospects",
      "Set up and optimized a Google Business Profile so the company appears in local Google Search and Maps results",
      "Implemented on-page SEO so the site ranks for the MEP engineering searches buyers actually use",
      "Designed a professional company profile document for tenders and client pitches",
      "Set up branded professional email on the company's own domain",
    ],
    results: [
      { label: "Google Business views", value: "Add real figure" },
      { label: "Website inquiries", value: "Add real figure" },
      { label: "Search ranking", value: "Add real figure" },
    ],
  },
  {
    slug: "pro-mep-technology",
    startingPoint:
      "Pro Mep Technology Ltd was operating with no online presence at all — no website, no verified Google listing, and no professional email — which made it difficult to be found or trusted by larger commercial clients evaluating MEP contractors.",
    approach: [
      "Designed and built a responsive corporate website showcasing services and past work",
      "Set up and optimized the company's Google Business Profile for local search visibility",
      "Implemented SEO fundamentals so the site is discoverable for relevant search terms",
      "Created professional branding materials for client-facing use",
      "Configured business email on the company's own domain",
    ],
    results: [
      { label: "Google Business views", value: "Add real figure" },
      { label: "Website inquiries", value: "Add real figure" },
      { label: "Search ranking", value: "Add real figure" },
    ],
  },
  {
    slug: "hope-technical",
    startingPoint:
      "Hope Technical Ltd had no website, no Google Business Profile, and no consistent branding — making it hard for the engineering and technical services company to compete for visibility against better-established competitors online.",
    approach: [
      "Built a professional corporate website that clearly presents the company's technical services",
      "Set up and optimized a Google Business Profile for local search and Maps visibility",
      "Implemented SEO so the site is findable for relevant engineering and technical-services searches",
      "Designed a company profile for use in proposals and tenders",
      "Set up branded professional email",
    ],
    results: [
      { label: "Google Business views", value: "Add real figure" },
      { label: "Website inquiries", value: "Add real figure" },
      { label: "Search ranking", value: "Add real figure" },
    ],
  },
  {
    slug: "rwasoft",
    startingPoint:
      "RwaSoft, a technology company, had no website and no Google Business Profile — an unusual gap for a tech business, and one that made it harder for potential clients to find or verify the company through the channels they'd naturally expect.",
    approach: [
      "Designed and built the company's website",
      "Set up and optimized its Google Business Profile to strengthen local search visibility",
    ],
    results: [
      { label: "Google Business views", value: "Add real figure" },
      { label: "Website visits", value: "Add real figure" },
    ],
  },
  {
    slug: "fadmoor",
    startingPoint:
      "Fadmoor needed a proper online home for the brand — a place to showcase products and identity with the same quality as the brand itself, rather than relying on social media alone.",
    approach: [
      "Designed a modern, responsive website reflecting the brand's identity",
      "Built out product and brand storytelling pages for an engaging customer experience",
    ],
    results: [
      { label: "Website visits", value: "Add real figure" },
      { label: "Online inquiries", value: "Add real figure" },
    ],
  },
];

export type FullCaseStudy = Project & CaseStudy;

export function getCaseStudy(slug: string): FullCaseStudy | null {
  const cs = caseStudies.find((c) => c.slug === slug);
  const project = projects.find((p) => p.slug === slug);
  if (!cs || !project) return null;
  return { ...project, ...cs };
}

export function getAllCaseStudies(): FullCaseStudy[] {
  return caseStudies
    .map((cs) => getCaseStudy(cs.slug))
    .filter((cs): cs is FullCaseStudy => cs !== null);
}
