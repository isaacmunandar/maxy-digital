import { getDb, initDb } from '~~/server/utils/db';

export default defineEventHandler(async (event) => {
  try {
    await initDb();
    const db = getDb();
    const query = getQuery(event);

    const limit = query.limit ? parseInt(String(query.limit), 10) : 10;
    const category = query.category ? String(query.category) : '';
    const search = query.search ? String(query.search).trim() : '';

    let sql = `SELECT id, title, slug, excerpt, cover_image, category, author_name, author_role, author_avatar, tags, status, read_time, published_at, created_at FROM posts WHERE status = 'published'`;
    const args: any[] = [];

    if (category && category !== 'All') {
      sql += ` AND category = ?`;
      args.push(category);
    }

    if (search) {
      sql += ` AND (title LIKE ? OR excerpt LIKE ? OR tags LIKE ?)`;
      const searchPattern = `%${search}%`;
      args.push(searchPattern, searchPattern, searchPattern);
    }

    sql += ` ORDER BY published_at DESC LIMIT ?`;
    args.push(limit);

    const result = await db.execute({ sql, args });

    const posts = result.rows.map((row: any) => {
      let parsedTags = [];
      try {
        parsedTags = typeof row.tags === 'string' ? JSON.parse(row.tags) : row.tags || [];
      } catch {
        parsedTags = [];
      }

      return {
        id: row.id,
        title: row.title,
        slug: row.slug,
        excerpt: row.excerpt,
        coverImage: row.cover_image,
        category: row.category,
        author: {
          name: row.author_name,
          role: row.author_role,
          avatar: row.author_avatar,
        },
        tags: parsedTags,
        status: row.status,
        readTime: row.read_time,
        publishedAt: row.published_at,
        createdAt: row.created_at,
      };
    });

    return {
      success: true,
      data: posts,
    };
  } catch (error: any) {
    console.error('Error fetching blog posts:', error);
    return {
      success: false,
      error: error.message || 'Failed to fetch blog posts',
      data: [],
    };
  }
});
