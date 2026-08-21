<template>
  <div>
    <!-- Page Header Header Section -->
    <header class="page-header section-padding sub-bg">
      <div class="container ontop">
        <div class="row justify-content-center text-center">
          <div class="col-lg-9">
            <h6 v-reveal class="sub-title main-color mb-15">MAXY AI Dispatch</h6>
            <h1 v-reveal class="fz-60 fw-700 mb-20">
              News, Insights &amp; <span class="fw-300">Engineering</span>
            </h1>
            <p v-reveal="{ delay: 100 }" class="fz-16 opacity-8 mx-auto" style="max-width: 620px;">
              Field notes, architecture teardowns, and perspectives on deploying agentic AI systems for forward-thinking enterprises.
            </p>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Blog Listing Section -->
    <section class="blog-list-section section-padding">
      <div class="container">
        <!-- Filter & Search Bar -->
        <div class="filter-search-container mb-60 d-flex flex-wrap align-items-center justify-content-between gap-20">
          <!-- Category Pills -->
          <div class="category-filters d-flex flex-wrap gap-10">
            <button
              v-for="cat in categories"
              :key="cat"
              type="button"
              :class="['filter-btn', activeCategory === cat ? 'active' : '']"
              @click="activeCategory = cat"
            >
              {{ cat }}
            </button>
          </div>

          <!-- Search Input -->
          <div class="search-input-box">
            <span class="ti-search icon"></span>
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search articles & topics..."
              class="search-input"
            />
          </div>
        </div>

        <!-- Articles Grid -->
        <div v-if="filteredArticles.length === 0" class="text-center py-60">
          <h4 class="mb-10 opacity-7">No articles found</h4>
          <p class="opacity-5 fz-14">Try searching with a different keyword or category.</p>
        </div>

        <div v-else class="row" v-reveal:stagger="{ delay: 50 }">
          <div
            v-for="post in filteredArticles"
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

                <div class="card-footer-info pt-20 bord-thin-top d-flex align-items-center justify-content-between">
                  <div class="author-info d-flex align-items-center">
                    <img
                      :src="post.author?.avatar || '/light/assets/imgs/logo-maxy-dark.png'"
                      :alt="post.author?.name"
                      class="author-avatar mr-10"
                    />
                    <span class="fz-13 fw-600 opacity-8">{{ post.author?.name || 'MAXY AI' }}</span>
                  </div>

                  <NuxtLink :to="`/blog/${post.slug}`" class="arrow-btn" title="Read Article">
                    <span class="ti-arrow-top-right"></span>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import Footer from '@/components/light/home-main/Footer';

useHead({
  title: 'Blog & News | Agentic AI Insights | MAXY AI',
  meta: [
    {
      name: 'description',
      content:
        'Read the latest perspectives, engineering teardowns, and industry news on agentic AI, AI-native software, and enterprise transformation from MAXY AI.',
    },
  ],
});

const { data: blogData } = await useFetch('/api/blog', {
  query: { limit: 50 },
});
const posts = computed(() => blogData.value?.data || []);

const categories = [
  'All',
  'Agentic AI',
  'Software Engineering',
  'Digital Growth',
  'Case Study',
  'Company News',
];

const activeCategory = ref('All');
const searchQuery = ref('');

const filteredArticles = computed(() => {
  return posts.value.filter((post) => {
    const matchesCategory =
      activeCategory.value === 'All' || post.category === activeCategory.value;

    const matchesSearch =
      !searchQuery.value ||
      post.title?.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      post.excerpt?.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      post.category?.toLowerCase().includes(searchQuery.value.toLowerCase());

    return matchesCategory && matchesSearch;
  });
});

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
.page-header {
  position: relative;
  background: #f8fafc;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.category-filters {
  display: flex;
  gap: 8px;
}

.filter-btn {
  background: #f1f5f9;
  border: 1px solid transparent;
  color: #475569;
  padding: 8px 18px;
  border-radius: 30px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.filter-btn:hover {
  background: #e2e8f0;
  color: #0f172a;
}

.filter-btn.active {
  background: #0f172a;
  color: #fff;
  font-weight: 600;
}

.search-input-box {
  position: relative;
  min-width: 260px;
}

.search-input-box .icon {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: #94a3b8;
}

.search-input {
  width: 100%;
  padding: 10px 16px 10px 38px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 30px;
  font-size: 13px;
  outline: none;
  transition: border-color 0.2s;
}

.search-input:focus {
  border-color: #0066ff;
  background: #fff;
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

.author-avatar {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  object-fit: cover;
}

.arrow-btn {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #f1f5f9;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0f172a;
  text-decoration: none;
  font-size: 12px;
  transition: background-color 0.2s, color 0.2s;
}

.arrow-btn:hover {
  background: #0066ff;
  color: #fff;
}

.gap-10 { gap: 10px; }
.gap-20 { gap: 20px; }
</style>
