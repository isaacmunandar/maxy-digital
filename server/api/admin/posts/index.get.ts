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

  try {
    await initDb();
    const db = getDb();

    const result = await db.execute(
      `SELECT id, title, slug, excerpt, category, author_name, status, read_time, published_at, created_at, updated_at FROM posts ORDER BY created_at DESC`
    );

    return {
      success: true,
      data: result.rows,
    };
  } catch (error: any) {
    console.error('Error fetching admin posts:', error);
    throw createError({
      statusCode: 500,
      statusMessage: error.message || 'Failed to fetch posts',
    });
  }
});
