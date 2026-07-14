# MAXY Digital SEO & GEO Audit

**Audit date:** 14 July 2026  
**Canonical domain:** <https://www.maxy.asia>  
**Market focus:** Singapore, Southeast Asia, and selected international clients  
**Primary audience:** SMEs and growth-stage companies seeking agentic AI, custom software, web/app development, or digital growth services

## Executive Summary

Before this implementation, the live website redirected visitors to `www.maxy.asia` but emitted canonical URLs for `maxy.asia`, used one generic title across pages, duplicated the brand in the homepage title, and returned HTTP 500 for `/sitemap.xml`. Search tests did not consistently surface the domain for branded or service queries.

The implementation now provides:

- One consistent `https://www.maxy.asia` canonical host.
- Unique titles and meta descriptions for all seven public pages.
- Search-intent-focused H1 headings and clearer internal link anchors.
- Organization, Service, Breadcrumb, and FAQ structured data that matches visible content.
- A statically generated sitemap containing only seven canonical public URLs.
- Robots rules that allow search and AI-search crawlers while excluding placeholder case-study routes.
- Open Graph and X/Twitter metadata for professional link previews.
- A supplemental `/llms.txt` directory for machine-readable site discovery.
- `noindex` protection for the placeholder dynamic case-study route.

These changes improve crawlability, relevance, entity clarity, and extractability. They do not guarantee rankings, AI citations, rich results, or sitelinks. Google and AI search systems also evaluate authority, reputation, query fit, content quality, links, and user signals.

## Implemented Keyword Map

### Homepage `/`

**Primary intent:** Find a Singapore company that can deliver agentic AI and custom software.

**Primary keyword:** agentic AI and software company Singapore

**Secondary keywords:**

- software company Singapore
- software house Singapore
- software development company Singapore
- AI software company Singapore
- AI agency Singapore
- Singapore software agency
- custom AI solutions Singapore
- technology partner for Singapore SMEs

**Long-tail and use-case queries:**

- agentic AI company for Singapore SMEs
- company that builds AI agents in Singapore
- software house for AI automation Singapore
- AI and software development partner Singapore
- custom software and digital marketing agency Singapore
- Singapore company for AI transformation

### Solutions `/solutions`

**Primary intent:** Compare MAXY Digital's capabilities before selecting a specialist service.

**Primary keyword:** AI software and digital solutions Singapore

**Secondary keywords:**

- AI solutions for Singapore SMEs
- software development services Singapore
- digital transformation solutions Singapore
- AI web app and marketing services Singapore
- business automation solutions Singapore

**Long-tail and use-case queries:**

- AI solutions for sales support and operations
- software and marketing agency for SMEs Singapore
- end-to-end AI implementation company Singapore
- AI automation web development and SEO agency

### Agentic AI `/solutions/agentic-ai`

**Primary intent:** Hire a company to design, integrate, and deploy production AI agents.

**Primary keyword:** agentic AI development company Singapore

**Secondary keywords:**

- AI agent development Singapore
- custom AI agents Singapore
- AI automation agency Singapore
- custom AI solutions Singapore
- AI workflow automation Singapore
- enterprise AI agents Singapore
- AI consulting Singapore
- generative AI development Singapore

**Commercial use-case queries:**

- sales follow-up AI agent
- lead qualification AI agent
- customer support AI agent Singapore
- CRM follow-up automation
- AI chatbot development Singapore
- internal knowledge AI assistant
- AI knowledge retrieval system
- hospitality concierge AI
- hotel concierge AI agent Singapore
- HR assessment AI
- employee insight AI
- automated candidate assessment AI
- AI agent integrated with CRM
- custom AI agent trained on company data
- AI agent development for SMEs
- production AI agent in 4-8 weeks
- difference between agentic AI and chatbot
- what data is needed for an AI agent

### Web & App `/solutions/web-app`

**Primary intent:** Hire a Singapore team for custom web, app, SaaS, or internal software development.

**Primary keyword:** web and mobile app development Singapore

**Secondary keywords:**

- custom software development Singapore
- web application development Singapore
- mobile app development Singapore
- software house Singapore
- SaaS development company Singapore
- AI app development Singapore
- custom business software Singapore
- full-stack development company Singapore
- website development company Singapore
- API integration Singapore

**Commercial use-case queries:**

- AI-powered web app development
- CRM integrated website development
- internal business system development Singapore
- customer portal development Singapore
- workflow automation software Singapore
- conversion-focused website development Singapore
- analytics and automation website Singapore
- MVP development company Singapore
- scalable SaaS product development Singapore
- company to modernize business software Singapore

### Digital Growth `/solutions/digital-growth`

**Primary intent:** Hire a Singapore growth partner for qualified pipeline, SEO, GEO, content, and performance campaigns.

**Primary keyword:** digital marketing and SEO agency Singapore

**Secondary keywords:**

- digital marketing agency Singapore
- SEO agency Singapore
- GEO agency Singapore
- generative engine optimization Singapore
- performance marketing Singapore
- B2B lead generation Singapore
- content marketing Singapore
- growth marketing agency Singapore
- landing page agency Singapore
- digital growth for Singapore SMEs

**Commercial use-case queries:**

- SEO and AI search optimization Singapore
- how to appear in ChatGPT search Singapore
- AI visibility optimization Singapore
- B2B pipeline generation agency Singapore
- SEO content and paid creative agency
- landing page conversion optimization Singapore
- short-form video marketing Singapore
- lead magnet and nurture campaign agency
- digital marketing measured by revenue
- marketing agency that works with in-house teams

### Roadmap `/roadmap`

**Primary intent:** Understand how to prioritize and phase practical AI adoption.

**Primary keyword:** AI transformation roadmap Singapore SMEs

**Secondary keywords:**

- AI adoption strategy Singapore
- AI transformation consulting Singapore
- AI consulting for SMEs Singapore
- digital transformation roadmap Singapore
- AI implementation roadmap
- enterprise AI strategy Singapore

**Long-tail and use-case queries:**

- how to start AI transformation in an SME
- first AI agent use case for business
- 12-month AI adoption roadmap
- how to automate sales support and operations with AI
- AI readiness and workflow assessment Singapore
- phased agentic AI implementation
- multi-agent system roadmap

### Contact `/contact`

**Primary intent:** Speak with a provider and evaluate project fit.

**Primary keyword:** AI software strategy consultation Singapore

**Secondary keywords:**

- AI consultation Singapore
- software development consultation Singapore
- agentic AI strategy call
- digital transformation consultation Singapore
- AI agency contact Singapore

## Technical SEO Decisions

### Canonicalization

All generated canonical, sitemap, schema, and social URLs use `https://www.maxy.asia`. The hosting layer should continue redirecting these variants to the canonical version with a single permanent redirect:

- `http://maxy.asia/*`
- `https://maxy.asia/*`
- `http://www.maxy.asia/*`

### Sitemap

`/sitemap.xml` is prerendered during build to avoid the runtime failure observed on production. It includes only:

- `/`
- `/solutions`
- `/solutions/agentic-ai`
- `/solutions/web-app`
- `/solutions/digital-growth`
- `/roadmap`
- `/contact`

The placeholder `/case-studies/[slug]` route is excluded until each slug has unique, factual project data.

### Robots and AI Crawlers

The wildcard crawler group allows public pages. This includes Googlebot, Bingbot, OAI-SearchBot, PerplexityBot, ClaudeBot, and other compliant crawlers unless a more specific infrastructure rule blocks them.

Do not block `OAI-SearchBot` if inclusion in ChatGPT Search is desired. AI training controls and AI search visibility are separate concerns; any future crawler policy should distinguish them deliberately.

### Structured Data

The site emits only schema supported by visible content:

- `Organization` for MAXY Digital's identity, Singapore address, logo, email, and canonical URL.
- `WebSite` and `WebPage` defaults from Nuxt SEO.
- `Service` for Agentic AI, custom web/app development, digital growth, and the AI transformation roadmap.
- `BreadcrumbList` on non-homepage routes.
- `FAQPage` and `Question` nodes on service pages using the same FAQ source rendered to users.

FAQ markup helps machines understand page content, but Google deprecated FAQ rich results in May 2026. It should not be presented as a guaranteed SERP enhancement.

### GEO

Google states that AI Overviews and AI Mode do not require special AI schema or files. Pages must remain indexable, snippet-eligible, internally linked, and textually clear. The implementation therefore prioritizes:

- Answer-first FAQ passages.
- Clear service, audience, geography, and use-case language.
- Consistent organization and service entities.
- Crawlable HTML text instead of important claims embedded only in images.
- Descriptive internal links.
- Structured data that matches visible copy.

`/llms.txt` is included as a supplemental directory, not as a replacement for crawlable pages, sitemap submission, or conventional SEO.

## Content Gaps and Growth Plan

The current site is a compact service website. To compete for non-branded commercial queries, add evidence-rich pages over time.

### Priority 1: Real Case Studies

Publish one unique page per verified deployment. Each should include the client context, market, problem, constraints, architecture at a safe level, implementation process, timeline, outcome, screenshots, and attributable quotes where approval exists. Do not publish generic pages on arbitrary slugs.

Suggested clusters:

- Sales follow-up AI agent case study
- Hospitality concierge AI case study Singapore
- HR assessment AI case study
- Employee insights AI case study
- Healthcare web application case study
- Foundation or nonprofit website case study
- B2B event lead-generation campaign case study

### Priority 2: Commercial Landing Pages

Create dedicated pages only where MAXY Digital can provide substantial unique evidence:

- `/ai-agent-development-singapore`
- `/custom-software-development-singapore`
- `/web-application-development-singapore`
- `/mobile-app-development-singapore`
- `/ai-automation-singapore`
- `/seo-geo-singapore`

Do not create near-duplicate city or keyword doorway pages. Each page must answer a distinct buyer need.

### Priority 3: Expert Resources

Potential resource topics:

- Agentic AI vs chatbot: architecture, autonomy, risk, and use cases
- How to choose the first AI agent workflow in an SME
- AI agent data-readiness checklist
- AI agent governance for Singapore companies
- Build vs buy for business AI agents
- Cost drivers in custom software development in Singapore
- Web app vs mobile app for an SME product
- How CRM integration changes lead follow-up
- SEO vs GEO: what Singapore B2B companies need in 2026
- How to make service content citable by AI search systems

Every article should name an expert reviewer, show a reviewed/updated date, link to the relevant service page, and include original examples or experience. Avoid mass-produced keyword articles.

## Post-Deployment Indexing Checklist

1. Deploy the code and confirm the live host uses `https://www.maxy.asia` everywhere.
2. Verify `https://www.maxy.asia/robots.txt` returns HTTP 200 with one crawler group.
3. Verify `https://www.maxy.asia/sitemap.xml` returns HTTP 200 and exactly seven canonical URLs.
4. Add or verify the domain property in Google Search Console.
5. Submit `https://www.maxy.asia/sitemap.xml` in Google Search Console.
6. Use URL Inspection to request indexing for the homepage and six primary pages.
7. Add the site to Bing Webmaster Tools and submit the same sitemap.
8. Monitor Coverage/Pages, canonical selection, Core Web Vitals, search queries, impressions, click-through rate, and conversions.
9. Create or improve the Google Business Profile using the verified Singapore business details.
10. Keep business name, address, website, and contact details consistent on LinkedIn, Clutch, relevant Singapore directories, partner sites, and press profiles.
11. Earn relevant editorial links through partnerships, deployment stories, expert commentary, events, and original research. Do not buy low-quality bulk links.
12. Add verified social profile URLs to Organization `sameAs` only after the official URLs are confirmed.

## Measurement

Track performance by page and intent rather than one aggregate ranking:

- Non-branded impressions for each service cluster.
- Branded impressions and correct site-name presentation.
- Indexed URL count and canonical accuracy.
- Search result click-through rate by title/description.
- Qualified contact-form submissions by landing page.
- Referral traffic from AI assistants where identifiable.
- Mentions or citations in Google AI features, ChatGPT Search, Bing Copilot, and Perplexity through a repeatable monthly query set.

## Primary References

- [Google Search Essentials](https://developers.google.com/search/docs/essentials)
- [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
- [Google: Control snippets in search results](https://developers.google.com/search/docs/appearance/snippet)
- [Google: Organization structured data](https://developers.google.com/search/docs/appearance/structured-data/organization)
- [Google: Site names](https://developers.google.com/search/docs/appearance/site-names)
- [Google: Sitelinks](https://developers.google.com/search/docs/appearance/sitelinks)
- [Google: Breadcrumb structured data](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb)
- [OpenAI publisher and developer FAQ](https://help.openai.com/en/articles/12627856-publishers-and-developers-faq)
- [Nuxt SEO documentation](https://nuxtseo.com/)

