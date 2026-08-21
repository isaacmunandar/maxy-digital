<template>
  <section class="blog-home-section section-padding sub-bg">
    <div class="container">
      <div v-reveal class="sec-head mb-60">
        <h6 class="sub-title main-color mb-25">Latest News &amp; Insights</h6>
        <div class="bord pt-25 bord-thin-top d-flex align-items-center justify-content-between flex-wrap gap-20">
          <div>
            <h2 class="fw-600 mb-0">
              Field notes on shipping <span class="fw-200">agentic AI.</span>
            </h2>
          </div>
          <div class="d-flex align-items-center">
            <div class="blog-swiper-controls d-flex align-items-center gap-10">
              <button
                id="blog-swiper-prev"
                type="button"
                class="blog-swiper-nav-btn"
                aria-label="Previous Article"
              >
                <span class="ti-arrow-left"></span>
              </button>
              <button
                id="blog-swiper-next"
                type="button"
                class="blog-swiper-nav-btn"
                aria-label="Next Article"
              >
                <span class="ti-arrow-right"></span>
              </button>
            </div>
            <NuxtLink to="/blog" class="butn butn-md butn-bord radius-30 d-none d-sm-inline-flex ml-20">
              <span class="text">All Articles</span>
              <span class="icon ti-arrow-top-right ml-10"></span>
            </NuxtLink>
          </div>
        </div>
      </div>

      <div v-reveal="{ delay: 150 }" class="blog-swiper-wrapper">
        <Swiper
          id="blog-swiper-container"
          class="swiper-container blog-swiper"
          v-bind="swiperOptions"
        >
          <SwiperSlide
            v-for="post in sortedPosts"
            :key="post.id || post.slug"
            class="blog-swiper-slide"
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
                <span class="category-badge">{{ post.category || 'Agentic AI' }}</span>
              </NuxtLink>

              <div class="blog-card-content">
                <div class="meta-info mb-15 d-flex align-items-center justify-content-between fz-13 opacity-7">
                  <span class="d-inline-flex align-items-center">
                    <span class="ti-calendar mr-5"></span>
                    {{ formatDate(post.publishedAt || post.createdAt) }}
                  </span>
                  <span class="d-inline-flex align-items-center">
                    <span class="ti-time mr-5"></span>
                    {{ post.readTime || '5 min read' }}
                  </span>
                </div>

                <h4 class="blog-card-title mb-15">
                  <NuxtLink :to="`/blog/${post.slug}`">
                    {{ post.title }}
                  </NuxtLink>
                </h4>

                <p class="blog-card-excerpt fz-14 opacity-7 mb-25">
                  {{ post.excerpt }}
                </p>

                <div class="card-footer-action mt-auto pt-15 bord-thin-top d-flex align-items-center justify-content-between">
                  <span class="author-name fz-12 opacity-6">
                    {{ post.author?.name || 'MAXY AI Team' }}
                  </span>
                  <NuxtLink
                    :to="`/blog/${post.slug}`"
                    class="read-more-link d-inline-flex align-items-center fz-13 fw-600"
                  >
                    <span>Read Article</span>
                    <span class="ti-arrow-top-right ml-5"></span>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div class="text-center mt-40 d-sm-none">
        <NuxtLink to="/blog" class="butn butn-md butn-bord radius-30">
          <span class="text">View All Articles</span>
          <span class="icon ti-arrow-top-right ml-10"></span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay } from 'swiper/modules';

const swiperOptions = {
  modules: [Navigation, Autoplay],
  speed: 600,
  grabCursor: true,
  loop: false,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
    pauseOnMouseEnter: true,
  },
  navigation: {
    nextEl: '#blog-swiper-next',
    prevEl: '#blog-swiper-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1.15,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 2.1,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
};

const defaultPosts = [
  {
    id: 'post-1',
    title: 'How Agentic AI is Reshaping Enterprise Workflows in Singapore and Southeast Asia',
    slug: 'agentic-ai-reshaping-enterprise-workflows-singapore',
    excerpt: 'Discover how autonomous AI agents are moving beyond chat interfaces to execute complex multi-step workflows, driving measurable revenue and efficiency for enterprises.',
    category: 'Agentic AI',
    coverImage: '/light/assets/imgs/works/agentic-ai/sales-follow-up-agent.png',
    author: {
      name: 'MAXY AI Research Team',
      role: 'Agentic Systems Group',
    },
    readTime: '5 min read',
    publishedAt: '2026-08-20T10:00:00.000Z',
  },
  {
    id: 'post-2',
    title: 'Building AI-Native Web and Mobile Applications: Architecture, Speed, and Scalability',
    slug: 'building-ai-native-web-and-mobile-applications',
    excerpt: 'A deep dive into how modern full-stack architectures integrate LLMs and vector search natively to deliver lightning-fast, reactive user experiences.',
    category: 'Software Engineering',
    coverImage: '/light/assets/imgs/works/web-app/sposea.png',
    author: {
      name: 'Isaac Munandar',
      role: 'Chief Technology Officer',
    },
    readTime: '6 min read',
    publishedAt: '2026-08-18T14:30:00.000Z',
  },
  {
    id: 'post-3',
    title: 'Deploying in 4-8 Weeks: How Agile AI Sprints Beat Multi-Month Strategy Decks',
    slug: 'deploying-ai-in-4-8-weeks-agile-sprints',
    excerpt: 'Why spending 6 months on AI strategy decks leads to obsolescence, and how high-growth companies validate and ship live production agents in rapid sprints.',
    category: 'Digital Growth',
    coverImage: '/light/assets/imgs/works/digital-growth/asia-pacific-salvage-brand.png',
    author: {
      name: 'MAXY AI Strategy Group',
      role: 'Digital Transformation',
    },
    readTime: '4 min read',
    publishedAt: '2026-08-15T09:00:00.000Z',
  },
  {
    id: 'post-4',
    title: 'Hospitality Concierge AI: Transforming Guest Experience with Multilingual Realtime Agents',
    slug: 'hospitality-concierge-ai-guest-experience',
    excerpt: 'How leading luxury hotels leverage agentic concierge workflows to handle bespoke reservations, dietary queries, and localized recommendations around the clock.',
    category: 'Agentic AI',
    coverImage: '/light/assets/imgs/works/agentic-ai/hospitality-concierge-ai.png',
    author: {
      name: 'MAXY AI Team',
      role: 'Solutions Engineering',
    },
    readTime: '5 min read',
    publishedAt: '2026-08-10T12:00:00.000Z',
  },
  {
    id: 'post-5',
    title: 'Automated HR Assessment & Talent Intelligence: Slashing Hiring Cycles by 70%',
    slug: 'automated-hr-assessment-talent-intelligence',
    excerpt: 'Case study on automating initial candidate screening, technical rubric assessments, and structured interview scheduling with high precision.',
    category: 'Software Engineering',
    coverImage: '/light/assets/imgs/works/agentic-ai/hr-assessment-ai.png',
    author: {
      name: 'MAXY AI Engineering',
      role: 'Talent Systems',
    },
    readTime: '4 min read',
    publishedAt: '2026-08-05T08:00:00.000Z',
  },
];

const { data: blogData } = await useFetch('/api/blog', {
  query: { limit: 10 },
  default: () => ({ data: [] }),
});

// Always sort by newest publishedAt / createdAt first
const sortedPosts = computed(() => {
  const apiPosts = blogData.value?.data && blogData.value.data.length > 0
    ? blogData.value.data
    : defaultPosts;

  return [...apiPosts].sort((a, b) => {
    const timeA = new Date(a.publishedAt || a.createdAt || 0).getTime();
    const timeB = new Date(b.publishedAt || b.createdAt || 0).getTime();
    return timeB - timeA; // Newest first
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
.blog-home-section {
  position: relative;
  overflow: hidden;
}

.blog-swiper-wrapper {
  position: relative;
  width: 100%;
}

.blog-swiper {
  overflow: visible;
  padding-bottom: 20px;
}

.blog-swiper-slide {
  height: auto;
  display: flex;
}

.blog-card {
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
  width: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease;
}

.blog-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.09);
  border-color: rgba(0, 102, 255, 0.2);
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
  transform: scale(1.06);
}

.category-badge {
  position: absolute;
  top: 14px;
  left: 14px;
  background: rgba(13, 17, 28, 0.88);
  color: #fff;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.03em;
  backdrop-filter: blur(8px);
  z-index: 2;
}

.blog-card-content {
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.blog-card-title {
  font-size: 18px;
  font-weight: 600;
  line-height: 1.45;
  min-height: 52px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.blog-card-title a {
  color: #111827;
  text-decoration: none;
  transition: color 0.2s ease;
}

.blog-card-title a:hover {
  color: #0066ff;
}

.blog-card-excerpt {
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: #4b5563;
}

.card-footer-action {
  border-top: 1px solid rgba(0, 0, 0, 0.06);
}

.read-more-link {
  color: #0066ff;
  text-decoration: none;
  transition: transform 0.2s ease, color 0.2s ease;
}

.read-more-link:hover {
  color: #0044cc;
  transform: translateX(3px);
}

.blog-swiper-nav-btn {
  appearance: none;
  -webkit-appearance: none;
  font: inherit;
  cursor: pointer;
  padding: 0;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.12);
  background: #ffffff;
  color: #111827;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  position: static;
  margin: 0;
}

.blog-swiper-nav-btn:hover {
  background: #111827;
  color: #ffffff;
  border-color: #111827;
}

.gap-15 {
  gap: 15px;
}

.gap-20 {
  gap: 20px;
}

.mr-5 {
  margin-right: 5px;
}
</style>
