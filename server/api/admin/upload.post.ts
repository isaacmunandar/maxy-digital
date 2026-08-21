import { getSessionFromEvent } from '~~/server/utils/auth';
import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';

export default defineEventHandler(async (event) => {
  const session = getSessionFromEvent(event);
  if (!session) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized. Please login to access admin features.',
    });
  }

  const files = await readMultipartFormData(event);
  if (!files || !files.length) {
    throw createError({
      statusCode: 400,
      statusMessage: 'No file uploaded',
    });
  }

  const file = files[0];
  if (!file.filename || !file.data) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid file payload',
    });
  }

  const ext = path.extname(file.filename) || '.jpg';
  const cleanExt = ext.toLowerCase();
  const safeName = `blog-${Date.now()}-${crypto.randomBytes(4).toString('hex')}${cleanExt}`;

  const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'blog');
  await fs.mkdir(uploadDir, { recursive: true });

  const filePath = path.join(uploadDir, safeName);
  await fs.writeFile(filePath, file.data);

  return {
    success: true,
    url: `/uploads/blog/${safeName}`,
  };
});
