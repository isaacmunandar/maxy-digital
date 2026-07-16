export type FaqItem = {
  q: string;
  a: string;
};

export const solutionFaqs: Record<
  "agentic-ai" | "web-app" | "digital-growth",
  { subTitle: string; heading: string; items: FaqItem[] }
> = {
  "agentic-ai": {
    subTitle: "Agentic AI FAQs",
    heading: "Frequently asked questions about agentic AI",
    items: [
      {
        q: "What is an agentic AI solution?",
        a: "Agentic AI is software that can plan and complete multi-step work toward a defined outcome. Unlike a basic chatbot that only responds, an AI agent can qualify a lead, update a CRM, draft a follow-up, and book a meeting within approved workflows.",
      },
      {
        q: "What agentic AI solutions does MAXY AI build?",
        a: "MAXY AI builds custom AI agents for sales follow-up, lead qualification, customer support, assessments, employee insights, hospitality concierge services, and internal knowledge retrieval.",
      },
      {
        q: "How long does custom AI agent development take?",
        a: "A focused agentic AI deployment typically takes 4-8 weeks, depending on the workflow, data readiness, integrations, security requirements, and approval process.",
      },
      {
        q: "What data does an AI agent need?",
        a: "The required data depends on the workflow. A sales agent may use CRM records, email history, and product knowledge, while a support agent may use documentation, FAQs, and ticket history. MAXY AI reviews data readiness during discovery.",
      },
    ],
  },
  "web-app": {
    subTitle: "Web & App Development FAQs",
    heading: "Frequently asked questions about web and app development",
    items: [
      {
        q: "What software development services does MAXY AI provide?",
        a: "MAXY AI designs and builds conversion-focused websites, web applications, mobile applications, SaaS products, internal business systems, and API integrations with AI, analytics, and automation built into the product architecture.",
      },
      {
        q: "Can you integrate a web or mobile app with our CRM and existing systems?",
        a: "Yes. MAXY AI can connect products with existing CRM, analytics, automation, and operational tools so customer data and workflows move through one integrated system.",
      },
      {
        q: "How long does custom web or app development take?",
        a: "A focused web or application build typically ships in 4-8 weeks. The final timeline depends on product scope, integrations, content readiness, data migration, and approval requirements.",
      },
      {
        q: "What makes a website or app AI-native?",
        a: "An AI-native product treats automation, personalization, data capture, and AI-assisted workflows as part of the core architecture rather than adding a standalone chatbot after launch.",
      },
    ],
  },
  "digital-growth": {
    subTitle: "Digital Growth FAQs",
    heading: "Frequently asked questions about digital marketing and SEO",
    items: [
      {
        q: "What digital marketing services does MAXY AI provide?",
        a: "MAXY AI provides SEO and GEO strategy, authority content, performance creative, short-form video, landing pages, lead magnets, nurture flows, analytics, and campaign optimization for qualified pipeline growth.",
      },
      {
        q: "How do you choose the right digital growth channels?",
        a: "Channel selection starts with the ideal customer profile, buying journey, existing demand, and commercial goal. MAXY AI then prioritizes the channels most likely to capture or create qualified demand.",
      },
      {
        q: "How do you measure digital marketing success?",
        a: "Success is measured against qualified pipeline and revenue outcomes. Reporting connects SEO, content, paid creative, and landing-page performance to agreed conversion goals instead of relying only on reach or engagement.",
      },
      {
        q: "Can MAXY AI work with an in-house marketing team?",
        a: "Yes. MAXY AI can lead execution or work alongside internal marketing and sales teams on strategy, production, distribution, analytics, and continuous optimization.",
      },
    ],
  },
};

export const pageSeo = {
  home: {
    title: "Agentic AI & Software Company Singapore",
    description:
      "MAXY AI is a Singapore software and agentic AI company building custom AI agents, web and mobile apps, and digital growth systems for SMEs.",
  },
  solutions: {
    title: "AI, Software & Digital Solutions Singapore",
    description:
      "Explore MAXY AI's agentic AI, custom software development, web and mobile app, SEO, and digital growth solutions for Singapore SMEs.",
  },
  agenticAi: {
    title: "Agentic AI Development Company Singapore",
    description:
      "Build custom AI agents for sales, support, operations, assessments, and knowledge workflows with MAXY AI, an agentic AI company in Singapore.",
  },
  webApp: {
    title: "Web & Mobile App Development Singapore",
    description:
      "Custom web, mobile app, SaaS, and business software development in Singapore with AI, automation, analytics, and system integrations built in.",
  },
  digitalGrowth: {
    title: "Digital Marketing & SEO Agency Singapore",
    description:
      "SEO, GEO, performance creative, content, landing pages, analytics, and lead generation systems for Singapore SMEs focused on qualified pipeline.",
  },
  roadmap: {
    title: "AI Transformation Roadmap for Singapore SMEs",
    description:
      "Plan AI adoption with a practical 12-month roadmap from the first agentic AI deployment to connected automation across sales, support, and operations.",
  },
  contact: {
    title: "AI & Software Strategy Consultation Singapore",
    description:
      "Book a strategy call with MAXY AI to identify the best first use case for agentic AI, custom software, web and app development, or digital growth.",
  },
  about: {
    title: "About MAXY AI - Founders & Company",
    description:
      "Meet the founders of MAXY AI, a HolonIQ Top 50 Southeast Asia EdTech company and the agentic AI arm of MAXY AI Holdings.",
  },
  caseStudies: {
    title: "Agentic AI Case Studies",
    description:
      "Real agentic AI deployments from MAXY AI across recruitment, sales, finance, hospitality, and marketing, with measurable outcomes for each.",
  },
  aiPlayground: {
    title: "AI Playground - Free AI Learning Tools",
    description:
      "MAXY AI's free AI Playground: six browser-based tools for coding, cybersecurity, and business strategy. No account, no payment, open to anyone.",
  },
} as const;
