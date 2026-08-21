<template>
  <section class="blog-home-section section-padding sub-bg">
    <div class="container">
      <div v-reveal class="sec-head mb-80">
        <h6 class="sub-title main-color mb-25">Latest News &amp; Insights</h6>
        <div class="bord pt-25 bord-thin-top d-flex align-items-center justify-content-between flex-wrap gap-20">
          <h2 class="fw-600">
            Field notes on shipping <span class="fw-200">agentic AI.</span>
          </h2>
          <div>
            <NuxtLink to="/blog" class="butn butn-md butn-bord radius-30">
              <span class="text">View All Articles</span>
              <span class="icon ti-arrow-top-right ml-10"></span>
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="row" v-reveal:stagger="{ delay: 100 }">
        <div
          v-for="post in posts"
          :key="post.id"
          class="col-lg-4 col-md-6 mb-40"
        >
          <div class="blog-card radius-20 o-hidden">
            <NuxtLink :to="`/blog/${post.slug}`" class="img-wrapper d-block o-hidden">
              <img
                :src="post.coverImage || '/light/assets/imgs/works/agentic-ai/sales-follow-up-agent.png'"
                :alt="post.title"
                loading="lazy"
                decoding="async"
                class="blog-card-img"
              />
              <span class="category-badge">{{ post.category }}</span>
            </NuxtLink>

            <div class="blog-card-content">
              <div class="meta-info mb-15 d-flex align-items-center justify-content-between fz-13 opacity-7">
                <span>{{ formatDate(post.publishedAt || post.createdAt) }}</span>
                <span>{{ post.readTime || '5 min read' }}</span>
              </div>

              <h4 class="blog-card-title mb-15">
                <NuxtLink :to="`/blog/${post.slug}`">
                  {{ post.title }}
                </NuxtLink>
              </h4>

              <p class="blog-card-excerpt fz-14 opacity-7 mb-25">
                {{ post.excerpt }}
              </p>

              <NuxtLink :to="`/blog/${post.slug}`" class="read-more-link d-inline-flex align-items-center">
                <span>Read Full Article</span>
                <span class="ti-arrow-top-right ml-10"></span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { data: blogData } = await useFetch('/api/blog', {
  query: { limit: 3 },
});
const posts = computed(() => blogData.value?.data || []);

function formatDate(dateStr) {
  if (!dateStr) return '';
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  } catch {
    return dateStr;
  }
}
</script>

<style scoped>
.blog-home-section {
  position: relative;
}

.blog-card {
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.blog-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
}

.img-wrapper {
  position: relative;
  width: 100%;
  height: 220px;
  background: #f1f3f5;
}

.blog-card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.blog-card:hover .blog-card-img {
  transform: scale(1.05);
}

.category-badge {
  position: absolute;
  top: 14px;
  left: 14px;
  background: rgba(13, 17, 28, 0.85);
  color: #fff;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.03em;
  backdrop-filter: blur(8px);
}

.blog-card-content {
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.blog-card-title {
  font-size: 19px;
  font-weight: 600;
  line-height: 1.4;
}

.blog-card-title a {
  color: #111827;
  text-decoration: none;
  transition: color 0.2s;
}

.blog-card-title a:hover {
  color: #0066ff;
}

.blog-card-excerpt {
  line-height: 1.6;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.read-more-link {
  color: #0066ff;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.2s;
}

.read-more-link:hover {
  color: #0044cc;
  transform: translateX(3px);
}

.gap-20 {
  gap: 20px;
}
</style>
