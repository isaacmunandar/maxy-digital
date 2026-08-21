import { createSessionToken, setSessionCookie } from '~~/server/utils/auth';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { username, password } = body || {};

  const expectedUser = process.env.ADMIN_USER || 'admin@maxy.asia';
  const expectedPassword = process.env.ADMIN_PASSWORD || 'MaxyAdmin2026!';

  if (!username || !password) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Username and password are required',
    });
  }

  // Verify credentials
  if (
    username.trim().toLowerCase() !== expectedUser.toLowerCase() ||
    password !== expectedPassword
  ) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Invalid email or password',
    });
  }

  const token = createSessionToken(username);
  setSessionCookie(event, token);

  return {
    success: true,
    message: 'Login successful',
    user: {
      email: username,
      role: 'admin',
    },
  };
});
