import { getDb, initDb } from '~~/server/utils/db';
import { getSessionFromEvent } from '~~/server/utils/auth';
import crypto from 'node:crypto';

export default defineEventHandler(async (event) => {
  const session = getSessionFromEvent(event);
  if (!session) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
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

  const cleanName = name.trim();
  const slug = cleanName
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');

  if (!slug) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid category name',
    });
  }

  const id = `cat-${Date.now()}-${crypto.randomBytes(4).toString('hex')}`;

  try {
    await initDb();
    const db = getDb();
    await db.execute({
      sql: `INSERT INTO categories (id, name, slug) VALUES (?, ?, ?)`,
      args: [id, cleanName, slug],
    });

    return {
      success: true,
      message: 'Category created successfully',
      data: { id, name: cleanName, slug },
    };
  } catch (error: any) {
    console.error('Error creating category:', error);
    if (error.message && error.message.includes('UNIQUE constraint failed')) {
      throw createError({
        statusCode: 409,
        statusMessage: 'A category with this name already exists.',
      });
    }
    throw createError({
      statusCode: 500,
      statusMessage: error.message || 'Failed to create category',
    });
  }
});
