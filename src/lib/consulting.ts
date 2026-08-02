export type Problem = {
  problem: string;
  pain: string;
  solutions: string[];
  icon: string;
};

export const problems: Problem[] = [
  {
    problem: "Low online visibility",
    pain:
      "Buyers search, competitors appear, and you don't. No ranking presence, no verified Google profile, no content answering the questions decision-makers actually ask.",
    solutions: ["SEO", "Website optimization", "Google Business Profile", "Content strategy"],
    icon: "◎",
  },
  {
    problem: "Difficulty generating qualified leads",
    pain:
      "Traffic arrives but pipeline doesn't. Inquiries go untracked, follow-up is inconsistent, and marketing spend can't be tied to revenue.",
    solutions: ["Performance marketing", "CRM systems", "Marketing automation", "Conversion optimization"],
    icon: "◈",
  },
  {
    problem: "Manual business processes",
    pain:
      "Quotes, bookings, approvals and customer replies still run on WhatsApp threads and spreadsheets — capping how fast the business can scale.",
    solutions: ["AI automation", "Workflow systems", "Digital tools", "Internal portals"],
    icon: "⌬",
  },
  {
    problem: "Lack of data-driven decisions",
    pain:
      "Leadership reviews last month's numbers in fragments. There's no single view of marketing, sales and operations performance to steer by.",
    solutions: ["Analytics dashboards", "Reporting systems", "Business intelligence", "KPI frameworks"],
    icon: "▤",
  },
];

export type ServiceCategory = {
  letter: string;
  title: string;
  body: string;
  items: string[];
  visual: string;
};

export const serviceCategories: ServiceCategory[] = [
  {
    letter: "A · Consulting",
    title: "Digital Transformation Consulting",
    body:
      "We assess where technology is holding the business back, then write the roadmap that fixes it — sequenced by commercial impact.",
    items: ["Digital strategy", "Business technology assessment", "Growth roadmap", "Process improvement"],
    visual: "prism",
  },
  {
    letter: "B · Automation",
    title: "AI & Business Automation",
    body:
      "AI systems that answer customers, qualify leads and move work through your business without adding headcount.",
    items: [
      "AI assistants",
      "WhatsApp automation",
      "Customer service bots",
      "Workflow automation",
      "AI knowledge systems",
    ],
    visual: "particles",
  },
  {
    letter: "C · Growth",
    title: "Digital Growth Marketing",
    body:
      "Demand generation engineered around pipeline and revenue — not impressions, likes or vanity reporting.",
    items: ["SEO", "Paid advertising", "Social media strategy", "Content marketing", "Email marketing"],
    visual: "orbit",
  },
  {
    letter: "D · Technology",
    title: "Web & Software Solutions",
    body:
      "Corporate platforms and applications engineered for speed, credibility and conversion — instrumented from day one.",
    items: ["Corporate websites", "E-commerce platforms", "Web applications", "CRM integrations"],
    visual: "wave",
  },
  {
    letter: "E · Data",
    title: "Data & Analytics",
    body:
      "One version of the truth for leadership: dashboards that connect marketing, sales and operations to the P&L.",
    items: ["Business dashboards", "Marketing analytics", "Performance tracking", "Reporting systems"],
    visual: "constellation",
  },
];

export type Industry = { name: string; body: string };

export const industries: Industry[] = [
  {
    name: "Construction & Engineering",
    body:
      "Helping contractors and engineering firms improve visibility, generate opportunities, and build stronger digital brands.",
  },
  {
    name: "Real Estate",
    body: "Helping developers attract buyers and manage digital sales pipelines end to end.",
  },
  {
    name: "Healthcare",
    body: "Helping healthcare providers improve patient engagement and simplify the path to care.",
  },
  {
    name: "Hospitality",
    body: "Helping hotels increase direct bookings and strengthen online reputation.",
  },
  {
    name: "Retail",
    body: "Helping retail companies improve customer experience and grow sales across channels.",
  },
  {
    name: "SMEs & Growing Enterprises",
    body: "Helping ambitious African companies install the digital foundations that make scale possible.",
  },
];

export type ProcessStep = { title: string; body: string; outputs: string[] };

export const process: ProcessStep[] = [
  {
    title: "Discovery & Business Audit",
    body: "We map how customers find you, how leads are handled, and where operations lose time or money.",
    outputs: ["Digital maturity audit", "Competitor benchmark", "Opportunity sizing"],
  },
  {
    title: "Strategy & Roadmap",
    body: "A prioritised transformation plan with owners, timelines, budget and the KPIs each phase moves.",
    outputs: ["Growth roadmap", "Technology plan", "KPI framework"],
  },
  {
    title: "Implementation",
    body: "Our team builds it — websites, automation, campaigns, CRM and dashboards — in tight delivery phases.",
    outputs: ["Platforms shipped", "AI workflows live", "Campaigns running"],
  },
  {
    title: "Optimisation & Growth",
    body: "Continuous testing, reporting and quarterly business reviews that compound results over time.",
    outputs: ["Monthly reporting", "Experiment backlog", "Quarterly review"],
  },
];

export type Reason = { title: string; body: string };

export const whyNileReach: Reason[] = [
  { title: "Business-focused approach", body: "Every recommendation is tied to revenue, cost or risk — never to a channel for its own sake." },
  { title: "AI-powered solutions", body: "Automation and AI are built into delivery, so our clients operate leaner than their competitors." },
  { title: "Industry-specific strategies", body: "Playbooks tailored to construction, real estate, healthcare, hospitality and retail." },
  { title: "Modern technology expertise", body: "Engineering-grade websites, integrations and data infrastructure, not template work." },
  { title: "Understanding of African markets", body: "Kigali-born, regionally fluent — we build for how buyers here actually search, pay and decide." },
  { title: "Long-term growth partnership", body: "We stay accountable to outcomes through quarterly reviews, not one-off project handoffs." },
];

export type Testimonial = { quote: string; author: string; role: string };

export const testimonials: Testimonial[] = [
  {
    quote:
      "We went from having no online presence at all to being found by clients who had never heard of us. The website and Google profile changed how seriously we're taken in tenders.",
    author: "Management",
    role: "MEP Erictric Technology Ltd",
  },
  {
    quote:
      "Nile Reach treated our website as a business tool, not a design project. They asked about our sales process before they asked about colours.",
    author: "Management",
    role: "Hope Technical Ltd",
  },
  {
    quote:
      "Clear roadmap, fast delivery, and they stayed with us after launch to keep improving results. That's rare here.",
    author: "Management",
    role: "Pro Mep Technology Ltd",
  },
];

export type Insight = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  published: string;
  /** Article body — plain paragraphs and H2 headings, rendered by /insights/$slug. */
  body: { heading?: string; text: string }[];
};

export const insights: Insight[] = [
  {
    slug: "ai-automation-mid-sized-african-company",
    category: "AI & Automation",
    title: "What AI automation actually changes for a mid-sized African company",
    excerpt:
      "Beyond chatbots: where automation removes real cost from quoting, scheduling and customer follow-up.",
    readTime: "6 min read",
    published: "2026-03-04",
    body: [
      {
        text: "Most AI conversations in Kigali boardrooms start with a chatbot demo and end with nothing shipped. The reason is simple: a chatbot answers questions the business was already answering. It does not remove a cost line.",
      },
      {
        heading: "Start where work is repeated, not where it is visible",
        text: "The highest-value automation we deploy is rarely customer-facing. It is the quotation that a project engineer rebuilds in Excel every week, the site report typed twice, the WhatsApp inquiry that never reaches the sales sheet. Each of those is a repeated, rule-shaped task with a measurable hourly cost.",
      },
      {
        heading: "Three automations that pay for themselves",
        text: "First, inbound capture: every WhatsApp, form and call logged into one pipeline with an owner and a due date. Second, document generation: quotations, proposals and profiles produced from structured data instead of retyped. Third, follow-up: automated sequences so no inquiry goes cold because someone was on site.",
      },
      {
        heading: "What to measure",
        text: "Hours returned per week, response time to a new inquiry, and the percentage of inquiries that receive a documented follow-up. If an automation does not move one of those three, it is a demo, not a system.",
      },
    ],
  },
  {
    slug: "construction-firms-lose-tenders-before-the-bid",
    category: "Digital Strategy",
    title: "Why construction and engineering firms lose tenders before the bid",
    excerpt:
      "Credibility is now checked online first. What decision-makers look for — and what they find instead.",
    readTime: "5 min read",
    published: "2026-02-18",
    body: [
      {
        text: "Before a procurement officer reads a technical submission, they search the company name. That search is now part of the evaluation, whether or not it appears on the scoring sheet.",
      },
      {
        heading: "What they are checking",
        text: "Does the company exist online with a consistent name and address? Is there evidence of completed projects? Is there a real business email rather than a personal Gmail address? Are the certifications, team and equipment visible? Each unanswered question adds perceived risk to awarding the contract.",
      },
      {
        heading: "What they usually find",
        text: "In our audits of Rwandan MEP and civil contractors, the most common result is no website at all, an unclaimed Google listing with a wrong phone number, and a company profile PDF circulating in three different versions.",
      },
      {
        heading: "The fix is unglamorous",
        text: "A corporate site with a project register, a verified Google Business Profile, one controlled company profile document, and branded email. This is roughly four weeks of work and it changes how a firm is read in every tender that follows.",
      },
    ],
  },
  {
    slug: "four-numbers-every-ceo-should-see-weekly",
    category: "Data & Analytics",
    title: "The four numbers every CEO should see every Monday",
    excerpt:
      "A simple leadership dashboard that connects marketing activity to pipeline and revenue.",
    readTime: "4 min read",
    published: "2026-01-27",
    body: [
      {
        text: "Leadership dashboards fail when they show everything. A weekly executive view needs four numbers, each one tied to a decision someone can make that week.",
      },
      {
        heading: "1 — New qualified inquiries",
        text: "Not traffic, not impressions. Inquiries that match your target sector and budget, counted by source so you know which channel to fund next.",
      },
      {
        heading: "2 — Response time to first contact",
        text: "The single most predictive number in African B2B sales. Under one hour converts materially better than same-day, and same-day beats next-day by a wide margin.",
      },
      {
        heading: "3 — Pipeline value by stage",
        text: "What is quoted, what is in negotiation, what is awarded. If your team cannot produce this in under five minutes, the CRM is not being used.",
      },
      {
        heading: "4 — Revenue against plan",
        text: "Month-to-date and quarter-to-date, with the variance called out. Everything else on the dashboard exists to explain this line.",
      },
    ],
  },
  {
    slug: "google-business-profile-highest-roi-asset-rwanda",
    category: "Growth Marketing",
    title: "Google Business Profile is still the highest-ROI asset in Rwanda",
    excerpt: "How local search intent converts, and the setup mistakes that quietly cost inquiries.",
    readTime: "5 min read",
    published: "2026-01-09",
    body: [
      {
        text: "For most Rwandan companies, the cheapest source of qualified demand is not advertising. It is a properly configured Google Business Profile — and it is usually either missing or half finished.",
      },
      {
        heading: "Why it converts",
        text: "Someone searching \"electrical contractor Kigali\" is not browsing. They have a project and a shortlist to build. A verified profile with photos, service categories, hours and reviews puts you on that shortlist before any website is opened.",
      },
      {
        heading: "The mistakes we correct most often",
        text: "Unverified listings; a category that does not match what the business actually sells; a phone number nobody answers; zero photos of completed work; and no review requests built into project handover.",
      },
      {
        heading: "The routine that keeps it working",
        text: "One post a month, photos from each completed project, and a review request sent at handover while the client is still satisfied. Thirty minutes a month, compounding.",
      },
    ],
  },
];

export function getInsight(slug: string) {
  return insights.find((a) => a.slug === slug);
}
