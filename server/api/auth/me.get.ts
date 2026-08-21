import { getSessionFromEvent } from '~~/server/utils/auth';

export default defineEventHandler(async (event) => {
  const session = getSessionFromEvent(event);

  if (!session) {
    return {
      authenticated: false,
      user: null,
    };
  }

  return {
    authenticated: true,
    user: {
      email: session.email,
      role: 'admin',
    },
  };
});
