import { createClient } from '@libsql/client';

let dbClient: ReturnType<typeof createClient> | null = null;

export function getDb() {
  if (dbClient) return dbClient;

  const url = process.env.TURSO_DATABASE_URL;
  const authToken = process.env.TURSO_AUTH_TOKEN;

  if (!url) {
    throw new Error('TURSO_DATABASE_URL is not defined in environment variables');
  }

  dbClient = createClient({
    url,
    authToken,
  });

  return dbClient;
}

export async function initDb() {
  const db = getDb();

  await db.execute(`
    CREATE TABLE IF NOT EXISTS posts (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      slug TEXT NOT NULL UNIQUE,
      excerpt TEXT,
      content TEXT NOT NULL,
      cover_image TEXT,
      category TEXT NOT NULL DEFAULT 'Agentic AI',
      author_name TEXT DEFAULT 'MAXY AI Team',
      author_role TEXT DEFAULT 'AI Solutions & Research',
      author_avatar TEXT DEFAULT '/light/assets/imgs/logo-maxy-dark.png',
      tags TEXT DEFAULT '["AI", "Innovation"]',
      status TEXT NOT NULL DEFAULT 'published',
      read_time TEXT DEFAULT '5 min read',
      published_at TEXT,
      created_at TEXT DEFAULT (datetime('now')),
      updated_at TEXT DEFAULT (datetime('now'))
    );
  `);

  await db.execute(`
    CREATE TABLE IF NOT EXISTS categories (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL UNIQUE,
      slug TEXT NOT NULL UNIQUE,
      created_at TEXT DEFAULT (datetime('now'))
    );
  `);

  // Check if we have initial posts, if not seed a few sample high-quality articles
  const countRes = await db.execute('SELECT COUNT(*) as count FROM posts');
  const count = Number(countRes.rows[0]?.count || 0);

  if (count === 0) {
    await seedInitialPosts(db);
  }

  // Seed categories
  const catCountRes = await db.execute('SELECT COUNT(*) as count FROM categories');
  const catCount = Number(catCountRes.rows[0]?.count || 0);

  if (catCount === 0) {
    const defaultCategories = [
      { id: 'cat-1', name: 'Agentic AI', slug: 'agentic-ai' },
      { id: 'cat-2', name: 'Software Engineering', slug: 'software-engineering' },
      { id: 'cat-3', name: 'Digital Growth', slug: 'digital-growth' },
      { id: 'cat-4', name: 'Case Study', slug: 'case-study' },
      { id: 'cat-5', name: 'Company News', slug: 'company-news' },
      { id: 'cat-uncategorized', name: 'Uncategorized', slug: 'uncategorized' },
    ];
    for (const cat of defaultCategories) {
      await db.execute({
        sql: `INSERT OR IGNORE INTO categories (id, name, slug) VALUES (?, ?, ?)`,
        args: [cat.id, cat.name, cat.slug],
      });
    }
  }
}

async function seedInitialPosts(db: ReturnType<typeof createClient>) {
  const samplePosts = [
    {
      id: 'post-1',
      title: 'How Agentic AI is Reshaping Enterprise Workflows in Singapore and Southeast Asia',
      slug: 'agentic-ai-reshaping-enterprise-workflows-singapore',
      excerpt: 'Discover how autonomous AI agents are moving beyond chat interfaces to execute complex multi-step workflows, driving measurable revenue and efficiency for enterprises.',
      category: 'Agentic AI',
      cover_image: '/light/assets/imgs/works/agentic-ai/sales-follow-up-agent.png',
      author_name: 'MAXY AI Research Team',
      author_role: 'Agentic Systems Group',
      author_avatar: '/light/assets/imgs/logo-maxy-dark.png',
      tags: JSON.stringify(['Agentic AI', 'Enterprise', 'Singapore']),
      status: 'published',
      read_time: '5 min read',
      published_at: new Date().toISOString(),
      content: `
<h2>The Shift from Generative AI to Agentic AI</h2>
<p>For the past two years, organizations have treated generative AI primarily as a conversational assistant—a chatbot to answer questions or write text. However, forward-thinking operators in Southeast Asia are now pioneering the next paradigm: <strong>Agentic AI</strong>.</p>
<p>Unlike passive chatbots, autonomous agents are equipped with goals, reasoning capabilities, memory, and direct access to external tools and APIs. They do not just generate answers; they execute workflows end-to-end.</p>

<h3>Key Enterprise Use Cases We Are Deploying</h3>
<ul>
  <li><strong>Autonomous Lead Qualification & Sales Nurturing:</strong> Agents interact across WhatsApp, email, and CRM to qualify inbound leads and schedule meetings without human intervention.</li>
  <li><strong>Intelligent Back-Office Orchestration:</strong> Processing documents, matching invoices, and reconciling cross-border accounting records in minutes.</li>
  <li><strong>Hyper-Personalized Customer Concierge:</strong> Multi-lingual agents serving hospitality and luxury retail clients 24/7 with bespoke recommendations.</li>
</ul>

<blockquote>"The question for leaders today isn't whether to adopt AI, but where agentic autonomy unlocks the highest ROI in the shortest time."</blockquote>

<p>Deploying production-grade agentic AI requires robust guardrails, deterministic fallback logic, and real-time observability. At MAXY AI, our engineering teams build custom agentic architectures that deliver ROI within 4 to 8 weeks.</p>
      `.trim(),
    },
    {
      id: 'post-2',
      title: 'Building AI-Native Web and Mobile Applications: Architecture, Speed, and Scalability',
      slug: 'building-ai-native-web-and-mobile-applications',
      excerpt: 'A deep dive into how modern full-stack architectures integrate LLMs and vector search natively to deliver lightning-fast, reactive user experiences.',
      category: 'Software Engineering',
      cover_image: '/light/assets/imgs/works/web-app/sposea.png',
      author_name: 'Isaac Munandar',
      author_role: 'Chief Technology Officer',
      author_avatar: '/light/assets/imgs/team/isaac.png',
      tags: JSON.stringify(['Engineering', 'Nuxt', 'AI Architecture']),
      status: 'published',
      read_time: '6 min read',
      published_at: new Date(Date.now() - 86400000 * 2).toISOString(),
      content: `
<h2>Rethinking Application Architecture in the AI Era</h2>
<p>Traditional web applications follow standard CRUD patterns: a frontend makes requests to REST or GraphQL APIs that query relational databases. When adding AI capabilities, many teams make the mistake of treating LLMs as simple external API endpoints.</p>
<p>In contrast, <strong>AI-native applications</strong> are designed from the ground up around semantic data representations, real-time streaming, and predictive user experiences.</p>

<h3>Three Core Pillars of AI-Native Engineering</h3>
<ol>
  <li><strong>Optimistic Streaming & Sub-Second Latency:</strong> Delivering tokens and interface updates as they generate rather than waiting for full-batch server responses.</li>
  <li><strong>Hybrid Search (Vector + Full-Text):</strong> Combining lexical precision with semantic embeddings to ensure accurate retrieval in domain-specific workflows.</li>
  <li><strong>Edge Verification & Guardrails:</strong> Validating structured JSON schema outputs before rendering interface components to eliminate hallucination risks.</li>
</ol>

<p>By blending modern frameworks like Nuxt, Nitro, and resilient distributed databases with tailored LLM pipelines, companies can build applications that feel alive, intuitive, and remarkably fast.</p>
      `.trim(),
    },
    {
      id: 'post-3',
      title: 'Deploying in 4-8 Weeks: How Agile AI Sprints Beat Multi-Month Strategy Decks',
      slug: 'deploying-ai-in-4-8-weeks-agile-sprints',
      excerpt: 'Why spending 6 months on AI strategy decks leads to obsolescence, and how high-growth companies validate and ship live production agents in rapid sprints.',
      category: 'Digital Growth',
      cover_image: '/light/assets/imgs/works/digital-growth/asia-pacific-salvage-brand.png',
      author_name: 'MAXY AI Strategy Group',
      author_role: 'Digital Transformation',
      author_avatar: '/light/assets/imgs/logo-maxy-dark.png',
      tags: JSON.stringify(['Agile', 'Strategy', 'ROI']),
      status: 'published',
      read_time: '4 min read',
      published_at: new Date(Date.now() - 86400000 * 5).toISOString(),
      content: `
<h2>The Cost of Inaction in Fast-Moving AI Markets</h2>
<p>In the landscape of artificial intelligence, models and developer tooling evolve every quarter. Companies that spend six months crafting theoretical transformation roadmaps inevitably find their strategies outdated before writing a single line of code.</p>

<h3>The 4-8 Week Sprint Methodology</h3>
<p>We believe in high-velocity, milestone-driven execution. Here is our blueprint for shipping enterprise-grade agentic AI:</p>
<ul>
  <li><strong>Week 1-2: Workflow Discovery & Data Mapping:</strong> Pinpointing the exact bottleneck where manual friction costs revenue or time.</li>
  <li><strong>Week 3-4: Prototype & Guardrail Architecture:</strong> Developing the autonomous agent with tailored system instructions and benchmark evaluation sets.</li>
  <li><strong>Week 5-6: Integration & Shadow Testing:</strong> Connecting the agent to live enterprise CRMs, databases, and communication channels in shadow mode.</li>
  <li><strong>Week 7-8: Production Launch & Observability:</strong> Full deployment with continuous telemetry, tracking response quality, resolution rates, and ROI metrics.</li>
</ul>

<p>Start small, prove measurable financial ROI, and expand from a position of verified success.</p>
      `.trim(),
    },
  ];

  for (const post of samplePosts) {
    await db.execute({
      sql: `INSERT OR IGNORE INTO posts (id, title, slug, excerpt, content, cover_image, category, author_name, author_role, author_avatar, tags, status, read_time, published_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      args: [
        post.id,
        post.title,
        post.slug,
        post.excerpt,
        post.content,
        post.cover_image,
        post.category,
        post.author_name,
        post.author_role,
        post.author_avatar,
        post.tags,
        post.status,
        post.read_time,
        post.published_at,
      ],
    });
  }
}
