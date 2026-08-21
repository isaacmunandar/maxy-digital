import { getDb, initDb } from '~~/server/utils/db';
import { getSessionFromEvent } from '~~/server/utils/auth';
import crypto from 'node:crypto';

export default defineEventHandler(async (event) => {
  const session = getSessionFromEvent(event);
  if (!session) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized. Please login to access admin features.',
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

  // Generate unique slug if not provided or clean it up
  const cleanSlug = (slug || title)
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');

  const id = `post-${Date.now()}-${crypto.randomBytes(4).toString('hex')}`;
  const now = new Date().toISOString();
  const publishedAt = status === 'published' ? now : null;

  try {
    await initDb();
    const db = getDb();

    await db.execute({
      sql: `INSERT INTO posts (
              id, title, slug, excerpt, content, cover_image, category,
              author_name, author_role, author_avatar, tags, status,
              read_time, published_at, created_at, updated_at
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      args: [
        id,
        title,
        cleanSlug,
        excerpt || '',
        content,
        coverImage || '/light/assets/imgs/works/agentic-ai/sales-follow-up-agent.png',
        category || 'Agentic AI',
        authorName || 'MAXY AI Team',
        authorRole || 'AI Solutions & Research',
        authorAvatar || '/light/assets/imgs/logo-maxy-dark.png',
        typeof tags === 'string' ? tags : JSON.stringify(tags || ['AI']),
        status || 'published',
        readTime || '5 min read',
        publishedAt,
        now,
        now,
      ],
    });

    return {
      success: true,
      message: 'Article created successfully',
      data: {
        id,
        slug: cleanSlug,
      },
    };
  } catch (error: any) {
    console.error('Error creating post:', error);
    if (error.message && error.message.includes('UNIQUE constraint failed')) {
      throw createError({
        statusCode: 409,
        statusMessage: 'An article with this URL slug already exists. Please choose a different slug.',
      });
    }
    throw createError({
      statusCode: 500,
      statusMessage: error.message || 'Failed to create article',
    });
  }
});
