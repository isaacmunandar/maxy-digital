import { getDb, initDb } from '~~/server/utils/db';
import { getSessionFromEvent } from '~~/server/utils/auth';

export default defineEventHandler(async (event) => {
  const session = getSessionFromEvent(event);
  if (!session) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized. Please login to access admin features.',
    });
  }

  const id = getRouterParam(event, 'id');
  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Article ID is required',
    });
  }

  try {
    await initDb();
    const db = getDb();

    const result = await db.execute({
      sql: `SELECT * FROM posts WHERE id = ? LIMIT 1`,
      args: [id],
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
        authorName: row.author_name,
        authorRole: row.author_role,
        authorAvatar: row.author_avatar,
        tags: parsedTags,
        status: row.status,
        readTime: row.read_time,
        publishedAt: row.published_at,
        createdAt: row.created_at,
        updatedAt: row.updated_at,
      },
    };
  } catch (error: any) {
    if (error.statusCode) throw error;
    console.error('Error fetching admin post:', error);
    throw createError({
      statusCode: 500,
      statusMessage: error.message || 'Failed to fetch article',
    });
  }
});
