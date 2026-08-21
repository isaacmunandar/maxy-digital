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

  const id = event.context.params?.id;
  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Category ID is required',
    });
  }

  if (id === 'cat-uncategorized') {
    throw createError({
      statusCode: 400,
      statusMessage: 'Cannot delete the default Uncategorized category',
    });
  }

  try {
    await initDb();
    const db = getDb();

    // Get the category name to update existing posts
    const catRes = await db.execute({
      sql: 'SELECT name FROM categories WHERE id = ?',
      args: [id],
    });

    const category = catRes.rows[0];
    if (!category) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Category not found',
      });
    }

    const catName = category.name as string;

    // Delete the category
    await db.execute({
      sql: 'DELETE FROM categories WHERE id = ?',
      args: [id],
    });

    // Move all posts in this category to Uncategorized
    await db.execute({
      sql: 'UPDATE posts SET category = ? WHERE category = ?',
      args: ['Uncategorized', catName],
    });

    return {
      success: true,
      message: 'Category deleted successfully and associated articles moved to Uncategorized',
    };
  } catch (error: any) {
    console.error('Error deleting category:', error);
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || error.message || 'Failed to delete category',
    });
  }
});
