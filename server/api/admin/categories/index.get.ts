import { getDb, initDb } from '~~/server/utils/db';
import { getSessionFromEvent } from '~~/server/utils/auth';

export default defineEventHandler(async (event) => {
  const session = getSessionFromEvent(event);
  if (!session) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
    });
  }

  try {
    await initDb();
    const db = getDb();
    const res = await db.execute('SELECT * FROM categories ORDER BY name ASC');

    return {
      success: true,
      data: res.rows,
    };
  } catch (error: any) {
    console.error('Error fetching categories:', error);
    throw createError({
      statusCode: 500,
      statusMessage: error.message || 'Failed to fetch categories',
    });
  }
});
