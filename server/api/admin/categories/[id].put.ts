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

  const body = await readBody(event);
  const { name } = body || {};

  if (!name || typeof name !== 'string' || !name.trim()) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Category name is required',
    });
  }

  if (id === 'cat-uncategorized') {
    throw createError({
      statusCode: 400,
      statusMessage: 'Cannot modify the default Uncategorized category',
    });
  }

  const cleanName = name.trim();
  const slug = cleanName
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');

  try {
    await initDb();
    const db = getDb();

    // Get the old category name so we can update posts
    const oldCatRes = await db.execute({
      sql: 'SELECT name FROM categories WHERE id = ?',
      args: [id],
    });

    if (oldCatRes.rows.length === 0) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Category not found',
      });
    }

    const oldName = oldCatRes.rows[0].name as string;

    // Update category
    await db.execute({
      sql: 'UPDATE categories SET name = ?, slug = ? WHERE id = ?',
      args: [cleanName, slug, id],
    });

    // Cascade update to posts
    if (oldName !== cleanName) {
      await db.execute({
        sql: 'UPDATE posts SET category = ? WHERE category = ?',
        args: [cleanName, oldName],
      });
    }

    return {
      success: true,
      message: 'Category updated successfully',
      data: { id, name: cleanName, slug },
    };
  } catch (error: any) {
    console.error('Error updating category:', error);
    if (error.message && error.message.includes('UNIQUE constraint failed')) {
      throw createError({
        statusCode: 409,
        statusMessage: 'A category with this name already exists.',
      });
    }
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || error.message || 'Failed to update category',
    });
  }
});
