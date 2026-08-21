<template>
  <div v-if="post" class="blog-detail-page">
    <!-- Article Header -->
    <header class="article-header section-padding sub-bg pb-40">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-9">
            <!-- Breadcrumbs -->
            <div class="mb-25">
              <NuxtLink to="/blog" class="back-link d-inline-flex align-items-center fz-13">
                <span class="ti-arrow-left mr-5"></span> Back to All Articles
              </NuxtLink>
            </div>

            <!-- Category & Read Time -->
            <div class="d-flex align-items-center gap-15 mb-20">
              <span class="category-tag">{{ post.category }}</span>
              <span class="dot-separator">•</span>
              <span class="read-time fz-13 opacity-7">{{ post.readTime || '5 min read' }}</span>
              <span class="dot-separator">•</span>
              <span class="pub-date fz-13 opacity-7">{{ formatDate(post.publishedAt || post.createdAt) }}</span>
            </div>

            <!-- Article Title -->
            <h1 class="article-main-title mb-25">
              {{ post.title }}
            </h1>

            <!-- Excerpt -->
            <p v-if="post.excerpt" class="article-lead fz-18 opacity-8 mb-30">
              {{ post.excerpt }}
            </p>

            <!-- Author Card -->
            <div class="author-bar pt-20 bord-thin-top d-flex align-items-center justify-content-between flex-wrap gap-15">
              <div class="d-flex align-items-center">
                <img
                  :src="post.author?.avatar || '/light/assets/imgs/logo-maxy-dark.png'"
                  :alt="post.author?.name"
                  class="author-img mr-15"
                />
                <div>
                  <div class="fw-600 fz-15">{{ post.author?.name || 'MAXY AI Team' }}</div>
                  <div class="fz-12 opacity-7">{{ post.author?.role || 'Agentic AI Solutions & Research' }}</div>
                </div>
              </div>

              <!-- Share Buttons -->
              <div class="share-actions d-flex align-items-center gap-10">
                <span class="fz-12 text-u ls1 opacity-6 mr-5">Share:</span>
                <button type="button" @click="shareLinkedIn" class="btn-share" title="Share on LinkedIn">
                  <i class="fab fa-linkedin-in"></i>
                </button>
                <button type="button" @click="shareTwitter" class="btn-share" title="Share on X (Twitter)">
                  <i class="fab fa-twitter"></i>
                </button>
                <button type="button" @click="copyLink" class="btn-share" title="Copy Link">
                  <i class="ti-link"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Article Body -->
    <main class="article-body-section section-padding pt-40 pb-80">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-9">
            <!-- Featured Cover Image -->
            <div v-if="post.coverImage" class="cover-image-container radius-20 o-hidden mb-50">
              <img
                :src="post.coverImage"
                :alt="post.title"
                class="cover-img"
              />
            </div>

            <!-- Content HTML -->
            <div class="article-prose-content" v-html="post.content"></div>

            <!-- Tags List -->
            <div v-if="post.tags && post.tags.length" class="article-tags-box mt-60 pt-30 bord-thin-top">
              <span class="fz-13 fw-600 mr-15">Topics:</span>
              <span v-for="tag in post.tags" :key="tag" class="tag-item mr-10">
                #{{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Related Articles Section -->
    <section v-if="post.relatedPosts && post.relatedPosts.length" class="related-articles-section section-padding sub-bg">
      <div class="container">
        <div class="sec-head mb-50 text-center">
          <h6 class="sub-title main-color mb-10">Continue Reading</h6>
          <h3 class="fw-600">Related Insights &amp; News</h3>
        </div>

        <div class="row">
          <div
            v-for="rel in post.relatedPosts"
            :key="rel.id"
            class="col-lg-4 col-md-6 mb-30"
          >
            <div class="related-card radius-15 o-hidden bg-white p-20">
              <NuxtLink :to="`/blog/${rel.slug}`" class="d-block mb-15 o-hidden radius-10">
                <img
                  :src="rel.coverImage || '/light/assets/imgs/works/agentic-ai/sales-follow-up-agent.png'"
                  :alt="rel.title"
                  class="related-img"
                />
              </NuxtLink>
              <div class="fz-12 main-color mb-5">{{ rel.category }}</div>
              <h5 class="fz-16 fw-600 mb-10">
                <NuxtLink :to="`/blog/${rel.slug}`" class="hover-blue">
                  {{ rel.title }}
                </NuxtLink>
              </h5>
              <p class="fz-13 opacity-7">{{ rel.excerpt }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Banner -->
    <section class="cta-mini-section section-padding main-bg text-center text-white">
      <div class="container">
        <h3 class="fw-600 mb-15">Ready to deploy agentic AI in your business?</h3>
        <p class="opacity-7 mb-30 mx-auto" style="max-width: 500px;">
          Talk to our solutions team about custom autonomous agents and AI-native software.
        </p>
        <NuxtLink to="/contact" class="butn butn-md butn-bord radius-30">
          <span>Book a Strategy Call</span>
          <span class="icon ti-arrow-top-right ml-10"></span>
        </NuxtLink>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import Footer from '@/components/light/home-main/Footer';

const route = useRoute();
const slug = computed(() => route.params.slug);

const { data: res, error } = await useFetch(`/api/blog/${slug.value}`);

if (error.value || !res.value?.success) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Article Not Found',
    fatal: true,
  });
}

const post = computed(() => res.value?.data);

const config = useRuntimeConfig();
const siteUrl = 'https://www.maxy.asia';
const currentUrl = computed(() => `${siteUrl}/blog/${post.value?.slug}`);
const fullImageUrl = computed(() => {
  const img = post.value?.coverImage || '/light/assets/imgs/works/agentic-ai/sales-follow-up-agent.png';
  return img.startsWith('http') ? img : `${siteUrl}${img}`;
});

useHead(() => ({
  title: `${post.value?.title || 'Article'} | MAXY AI`,
  link: [
    {
      rel: 'canonical',
      href: currentUrl.value,
    },
  ],
  meta: [
    {
      name: 'description',
      content: post.value?.excerpt || 'Insights and perspectives on agentic AI from MAXY AI.',
    },
    {
      name: 'author',
      content: post.value?.author?.name || 'MAXY AI Team',
    },
    {
      name: 'robots',
      content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    },
    // Open Graph
    {
      property: 'og:site_name',
      content: 'MAXY AI',
    },
    {
      property: 'og:locale',
      content: 'en_SG',
    },
    {
      property: 'og:type',
      content: 'article',
    },
    {
      property: 'og:title',
      content: post.value?.title,
    },
    {
      property: 'og:description',
      content: post.value?.excerpt,
    },
    {
      property: 'og:url',
      content: currentUrl.value,
    },
    {
      property: 'og:image',
      content: fullImageUrl.value,
    },
    {
      property: 'og:image:alt',
      content: post.value?.title,
    },
    {
      property: 'article:published_time',
      content: post.value?.publishedAt,
    },
    {
      property: 'article:modified_time',
      content: post.value?.updatedAt || post.value?.publishedAt,
    },
    {
      property: 'article:author',
      content: post.value?.author?.name,
    },
    {
      property: 'article:section',
      content: post.value?.category,
    },
    ...(Array.isArray(post.value?.tags)
      ? post.value.tags.map((tag) => ({
          property: 'article:tag',
          content: tag,
        }))
      : []),
    // Twitter Card
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:site',
      content: '@maxy_asia',
    },
    {
      name: 'twitter:title',
      content: post.value?.title,
    },
    {
      name: 'twitter:description',
      content: post.value?.excerpt,
    },
    {
      name: 'twitter:image',
      content: fullImageUrl.value,
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'NewsArticle',
            '@id': `${currentUrl.value}#article`,
            isPartOf: {
              '@type': 'WebPage',
              '@id': currentUrl.value,
              url: currentUrl.value,
              name: post.value?.title,
            },
            headline: post.value?.title,
            description: post.value?.excerpt,
            image: [fullImageUrl.value],
            datePublished: post.value?.publishedAt,
            dateModified: post.value?.updatedAt || post.value?.publishedAt,
            mainEntityOfPage: currentUrl.value,
            articleSection: post.value?.category,
            keywords: Array.isArray(post.value?.tags) ? post.value.tags.join(', ') : post.value?.tags,
            author: {
              '@type': 'Person',
              name: post.value?.author?.name || 'MAXY AI Team',
              jobTitle: post.value?.author?.role || 'AI Researcher & Solutions Architect',
            },
            publisher: {
              '@type': 'Organization',
              name: 'MAXY AI',
              url: siteUrl,
              logo: {
                '@type': 'ImageObject',
                url: `${siteUrl}/light/assets/imgs/logo-maxy-dark.png`,
              },
            },
          },
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: siteUrl,
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Blog',
                item: `${siteUrl}/blog`,
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: post.value?.title,
                item: currentUrl.value,
              },
            ],
          },
        ],
      }),
    },
  ],
}));

function formatDate(dateStr) {
  if (!dateStr) return '';
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  } catch {
    return dateStr;
  }
}

function shareLinkedIn() {
  const url = encodeURIComponent(window.location.href);
  window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
}

function shareTwitter() {
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent(post.value?.title || '');
  window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
}

function copyLink() {
  navigator.clipboard.writeText(window.location.href);
  alert('Article link copied to clipboard!');
}
</script>

<style scoped>
.back-link {
  color: #0066ff;
  font-weight: 500;
  text-decoration: none;
  transition: transform 0.2s;
}

.back-link:hover {
  transform: translateX(-3px);
}

.category-tag {
  background: #0066ff;
  color: #fff;
  font-size: 11px;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 20px;
  letter-spacing: 0.03em;
}

.dot-separator {
  color: #94a3b8;
  font-size: 12px;
}

.article-main-title {
  font-size: clamp(32px, 4vw, 48px);
  font-weight: 700;
  line-height: 1.25;
  color: #0f172a;
}

.article-lead {
  line-height: 1.65;
  color: #334155;
}

.author-img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.btn-share {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: #fff;
  color: #334155;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s;
}

.btn-share:hover {
  background: #0066ff;
  color: #fff;
  border-color: #0066ff;
}

.cover-image-container {
  max-height: 480px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.06);
}

.cover-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Prose formatting */
:deep(.article-prose-content) {
  font-size: 17px;
  line-height: 1.8;
  color: #1e293b;
}

:deep(.article-prose-content h2) {
  font-size: 28px;
  font-weight: 700;
  margin-top: 48px;
  margin-bottom: 20px;
  color: #0f172a;
  line-height: 1.35;
}

:deep(.article-prose-content h3) {
  font-size: 22px;
  font-weight: 600;
  margin-top: 36px;
  margin-bottom: 16px;
  color: #0f172a;
  line-height: 1.4;
}

:deep(.article-prose-content p) {
  margin-bottom: 24px;
  color: #334155;
}

:deep(.article-prose-content blockquote) {
  border-left: 4px solid #0066ff;
  padding: 18px 24px;
  margin: 36px 0;
  background: #f8fafc;
  border-radius: 0 12px 12px 0;
  font-style: italic;
  font-size: 19px;
  color: #0f172a;
}

:deep(.article-prose-content ul),
:deep(.article-prose-content ol) {
  margin-bottom: 24px;
  padding-left: 28px;
}

:deep(.article-prose-content li) {
  margin-bottom: 10px;
  color: #334155;
}

:deep(.article-prose-content code) {
  background: #f1f5f9;
  color: #0f172a;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.9em;
}

:deep(.article-prose-content pre) {
  background: #0f172a;
  color: #f8fafc;
  padding: 20px;
  border-radius: 12px;
  overflow-x: auto;
  margin: 30px 0;
}

:deep(.article-prose-content pre code) {
  background: transparent;
  color: inherit;
  padding: 0;
}

.tag-item {
  display: inline-block;
  background: #f1f5f9;
  color: #475569;
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 12px;
  font-weight: 500;
}

.related-img {
  width: 100%;
  height: 170px;
  object-fit: cover;
  transition: transform 0.4s;
}

.related-card:hover .related-img {
  transform: scale(1.05);
}

.hover-blue {
  color: #0f172a;
  text-decoration: none;
}

.hover-blue:hover {
  color: #0066ff;
}

.gap-10 { gap: 10px; }
.gap-15 { gap: 15px; }
</style>
