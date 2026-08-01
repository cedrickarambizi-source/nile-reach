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

export type Insight = { category: string; title: string; excerpt: string; readTime: string };

export const insights: Insight[] = [
  {
    category: "AI & Automation",
    title: "What AI automation actually changes for a mid-sized African company",
    excerpt:
      "Beyond chatbots: where automation removes real cost from quoting, scheduling and customer follow-up.",
    readTime: "6 min read",
  },
  {
    category: "Digital Strategy",
    title: "Why construction and engineering firms lose tenders before the bid",
    excerpt:
      "Credibility is now checked online first. What decision-makers look for — and what they find instead.",
    readTime: "5 min read",
  },
  {
    category: "Data & Analytics",
    title: "The four numbers every CEO should see every Monday",
    excerpt:
      "A simple leadership dashboard that connects marketing activity to pipeline and revenue.",
    readTime: "4 min read",
  },
  {
    category: "Growth Marketing",
    title: "Google Business Profile is still the highest-ROI asset in Rwanda",
    excerpt: "How local search intent converts, and the setup mistakes that quietly cost inquiries.",
    readTime: "5 min read",
  },
];
