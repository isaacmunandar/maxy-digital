export default defineNuxtRouteMiddleware(async (to) => {
  if (to.path === '/admin/login') return;

  try {
    const { data } = await useFetch('/api/auth/me');
    if (!data.value?.authenticated) {
      return navigateTo('/admin/login');
    }
  } catch {
    return navigateTo('/admin/login');
  }
});
