import { getDb, initDb } from '~~/server/utils/db';

export default defineEventHandler(async () => {
  try {
    await initDb();
    const db = getDb();

    const result = await db.execute(
      `SELECT slug, updated_at, published_at FROM posts WHERE status = 'published' ORDER BY published_at DESC`
    );

    return result.rows.map((row: any) => ({
      loc: `/blog/${row.slug}`,
      lastmod: row.updated_at || row.published_at,
      changefreq: 'weekly',
      priority: 0.8,
    }));
  } catch (error) {
    console.error('Error generating sitemap URLs for blog posts:', error);
    return [];
  }
});
