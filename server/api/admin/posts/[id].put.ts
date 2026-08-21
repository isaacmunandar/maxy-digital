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

  const body = await readBody(event);
  const {
    title,
    slug,
    excerpt,
    content,
    coverImage,
    category,
    authorName,
    authorRole,
    authorAvatar,
    tags,
    status,
    readTime,
  } = body || {};

  if (!title || !content) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Title and content are required',
    });
  }

  const cleanSlug = (slug || title)
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');

  const now = new Date().toISOString();

  try {
    await initDb();
    const db = getDb();

    // Check if current post was already published
    const existing = await db.execute({
      sql: 'SELECT status, published_at FROM posts WHERE id = ? LIMIT 1',
      args: [id],
    });

    if (!existing.rows.length) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Article not found',
      });
    }

    let publishedAt: any = existing.rows[0].published_at;
    if (status === 'published' && !publishedAt) {
      publishedAt = now;
    }

    await db.execute({
      sql: `UPDATE posts SET
              title = ?,
              slug = ?,
              excerpt = ?,
              content = ?,
              cover_image = ?,
              category = ?,
              author_name = ?,
              author_role = ?,
              author_avatar = ?,
              tags = ?,
              status = ?,
              read_time = ?,
              published_at = ?,
              updated_at = ?
            WHERE id = ?`,
      args: [
        title,
        cleanSlug,
        excerpt || '',
        content,
        coverImage || '',
        category || 'Agentic AI',
        authorName || 'MAXY AI Team',
        authorRole || 'AI Solutions & Research',
        authorAvatar || '/light/assets/imgs/logo-maxy-dark.png',
        typeof tags === 'string' ? tags : JSON.stringify(tags || ['AI']),
        status || 'published',
        readTime || '5 min read',
        publishedAt,
        now,
        id,
      ],
    });

    return {
      success: true,
      message: 'Article updated successfully',
      data: {
        id,
        slug: cleanSlug,
      },
    };
  } catch (error: any) {
    if (error.statusCode) throw error;
    console.error('Error updating post:', error);
    if (error.message && error.message.includes('UNIQUE constraint failed')) {
      throw createError({
        statusCode: 409,
        statusMessage: 'An article with this URL slug already exists. Please choose a different slug.',
      });
    }
    throw createError({
      statusCode: 500,
      statusMessage: error.message || 'Failed to update article',
    });
  }
});
