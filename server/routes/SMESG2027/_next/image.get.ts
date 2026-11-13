export default defineEventHandler((event) => {
  const query = getQuery(event);
  const rawUrl = String(query.url || "");
  if (!rawUrl) {
    return { error: "No image url provided" };
  }
  const cleanPath = rawUrl.startsWith("/") ? rawUrl : `/${rawUrl}`;
  return sendRedirect(event, `/SMESG2027${cleanPath}`, 307);
});
