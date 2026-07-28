export type Project = {
  slug: string;
  name: string;
  industry: string;
  website?: string;
  domain?: string;
  services: string[];
  description: string;
  badge: string;
  tech?: string[];
};

export const projects: Project[] = [
  {
    slug: "fadmoor",
    name: "Fadmoor",
    industry: "Fashion & Lifestyle",
    website: "https://www.fadmoor.com/",
    domain: "fadmoor.com",
    services: ["Website Design & Development"],
    description:
      "A modern, responsive website showcasing the client's brand identity, products, and online presence with an engaging user experience.",
    badge: "Fashion Brand",
    tech: ["Responsive Design", "Brand UI", "CMS"],
  },
  {
    slug: "mep-erictric-technology",
    name: "MEP ERICTRIC TECHNOLOGY LTD",
    industry: "Mechanical, Electrical & Plumbing (MEP) Engineering",
    website: "https://meperictrictech.com/",
    domain: "meperictrictech.com",
    services: [
      "Website Design & Development",
      "Company Profile Design",
      "Google Business Profile",
      "Search Engine Optimization (SEO)",
      "Professional Business Email",
    ],
    description:
      "Complete digital transformation for one of Rwanda's leading MEP engineering companies — a modern corporate website, optimized online visibility, a professional company profile, branded email, and SEO for search rankings.",
    badge: "Complete Digital Branding",
    tech: ["Corporate Site", "SEO", "Google Business", "Email Suite"],
  },
  {
    slug: "pro-mep-technology",
    name: "PRO MEP TECHNOLOGY LTD",
    industry: "MEP Engineering",
    website: "https://www.protechmeptechnologyltd.com/",
    domain: "protechmeptechnologyltd.com",
    services: [
      "Website Design & Development",
      "Company Profile Design",
      "Google Business Profile",
      "Search Engine Optimization (SEO)",
      "Professional Email Creation",
    ],
    description:
      "A complete online identity including a responsive corporate website, Google Business optimization, professional branding materials, SEO implementation, and business email setup.",
    badge: "Full Business Branding",
    tech: ["Corporate Site", "SEO", "Branding", "Email Suite"],
  },
  {
    slug: "nile-reach",
    name: "Nile Reach",
    industry: "Digital Marketing Agency",
    website: "https://nilereach.com/",
    domain: "nilereach.com",
    services: [
      "Website Design & Development",
      "Company Profile Design",
      "Google Business Profile",
      "Search Engine Optimization (SEO)",
      "Professional Email Creation",
    ],
    description:
      "Built the agency's own online presence with a premium website, optimized search visibility, a professional company profile, business email, and Google Business for credibility.",
    badge: "Marketing Agency",
    tech: ["Premium Web", "SEO", "Brand System"],
  },
  {
    slug: "rwasoft",
    name: "RwaSoft",
    industry: "Technology",
    services: ["Website Design & Development", "Google Business Profile Setup"],
    description:
      "Developed the company website and established its Google Business Profile to strengthen online presence and improve local search visibility.",
    badge: "Software & Technology",
    tech: ["Web", "Local SEO"],
  },
  {
    slug: "hope-technical",
    name: "Hope Technical Ltd",
    industry: "Engineering & Technical Services",
    services: [
      "Website Design & Development",
      "Company Profile Design",
      "Google Business Profile",
      "Search Engine Optimization (SEO)",
      "Professional Email Creation",
    ],
    description:
      "A complete digital branding package — professional website, company profile, SEO optimization, Google Business setup, and branded business email system.",
    badge: "Engineering Company",
    tech: ["Corporate Site", "SEO", "Branding", "Email Suite"],
  },
];

export function screenshotUrl(domain?: string) {
  if (!domain) return null;
  return `https://image.thum.io/get/width/1200/crop/800/https://${domain}`;
}

export function faviconUrl(domain?: string) {
  if (!domain) return null;
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
}
