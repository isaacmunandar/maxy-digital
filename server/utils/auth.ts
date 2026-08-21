import type { H3Event } from 'h3';
import crypto from 'node:crypto';

const COOKIE_NAME = 'maxy_admin_session';

export function createSessionToken(userEmail: string): string {
  const secret = process.env.ADMIN_JWT_SECRET || 'maxy_secret_auth_token_key_2026_super_secure';
  const header = Buffer.from(JSON.stringify({ alg: 'HS256', typ: 'JWT' })).toString('base64url');
  const payload = Buffer.from(
    JSON.stringify({
      email: userEmail,
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7, // 7 days validity
    })
  ).toString('base64url');

  const signature = crypto
    .createHmac('sha256', secret)
    .update(`${header}.${payload}`)
    .digest('base64url');

  return `${header}.${payload}.${signature}`;
}

export function verifySessionToken(token: string): { email: string; exp: number } | null {
  try {
    const [header, payload, signature] = token.split('.');
    if (!header || !payload || !signature) return null;

    const secret = process.env.ADMIN_JWT_SECRET || 'maxy_secret_auth_token_key_2026_super_secure';
    const expectedSignature = crypto
      .createHmac('sha256', secret)
      .update(`${header}.${payload}`)
      .digest('base64url');

    if (signature !== expectedSignature) return null;

    const decoded = JSON.parse(Buffer.from(payload, 'base64url').toString());
    if (decoded.exp && decoded.exp < Math.floor(Date.now() / 1000)) {
      return null; // Expired
    }

    return decoded;
  } catch {
    return null;
  }
}

export function getSessionFromEvent(event: H3Event): { email: string } | null {
  const token = getCookie(event, COOKIE_NAME);
  if (!token) return null;
  return verifySessionToken(token);
}

export function setSessionCookie(event: H3Event, token: string) {
  setCookie(event, COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: '/',
  });
}

export function clearSessionCookie(event: H3Event) {
  deleteCookie(event, COOKIE_NAME, {
    path: '/',
  });
}
