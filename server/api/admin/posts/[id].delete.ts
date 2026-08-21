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

    await db.execute({
      sql: `DELETE FROM posts WHERE id = ?`,
      args: [id],
    });

    return {
      success: true,
      message: 'Article deleted successfully',
    };
  } catch (error: any) {
    console.error('Error deleting post:', error);
    throw createError({
      statusCode: 500,
      statusMessage: error.message || 'Failed to delete article',
    });
  }
});
