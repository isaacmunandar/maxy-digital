import { getDb, initDb } from '~~/server/utils/db';

export default defineEventHandler(async (event) => {
  try {
    await initDb();
    const db = getDb();
    const slug = getRouterParam(event, 'slug');

    if (!slug) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Slug is required',
      });
    }

    const result = await db.execute({
      sql: `SELECT * FROM posts WHERE slug = ? AND status = 'published' LIMIT 1`,
      args: [slug],
    });

    if (!result.rows.length) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Article not found',
      });
    }

    const row: any = result.rows[0];
    let parsedTags = [];
    try {
      parsedTags = typeof row.tags === 'string' ? JSON.parse(row.tags) : row.tags || [];
    } catch {
      parsedTags = [];
    }

    // Fetch related articles in the same or other categories
    const relatedRes = await db.execute({
      sql: `SELECT id, title, slug, excerpt, cover_image, category, read_time, published_at FROM posts WHERE slug != ? AND status = 'published' ORDER BY published_at DESC LIMIT 3`,
      args: [slug],
    });

    const relatedPosts = relatedRes.rows.map((r: any) => ({
      id: r.id,
      title: r.title,
      slug: r.slug,
      excerpt: r.excerpt,
      coverImage: r.cover_image,
      category: r.category,
      readTime: r.read_time,
      publishedAt: r.published_at,
    }));

    return {
      success: true,
      data: {
        id: row.id,
        title: row.title,
        slug: row.slug,
        excerpt: row.excerpt,
        content: row.content,
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
        updatedAt: row.updated_at,
        relatedPosts,
      },
    };
  } catch (error: any) {
    if (error.statusCode) throw error;
    console.error('Error fetching blog post by slug:', error);
    throw createError({
      statusCode: 500,
      statusMessage: error.message || 'Internal Server Error',
    });
  }
});
