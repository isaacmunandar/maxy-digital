<template>
  <header class="header page-header bg-img section-padding" style="background-image: url('/light/assets/imgs/header/b5.jpg'); background-color: #0d0d0d"
    data-overlay-dark="9">
    <div class="container pt-100">
      <div class="text-center">
        <h6 class="sub-title main-color mb-15">{{ pageContent.eyebrow }}</h6>
        <h1>{{ pageContent.title }}</h1>
        <p class="mt-20">{{ pageContent.subheadline }}</p>
        <p class="mt-10">{{ pageContent.microcopy }}</p>
        <div class="mt-15">
          <a href="/">Home</a>
          <span class="padding-rl-20">|</span>
          <a href="/solutions">Solutions</a>
          <span class="padding-rl-20">|</span>
          <span class="main-color">{{ pageContent.breadcrumb }}</span>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup>
import { computed } from 'vue';

const route = useRoute();

const pageKey = computed(() => {
  if (route.path.includes('/solutions/agentic-ai')) return 'agentic-ai';
  if (route.path.includes('/solutions/web-app')) return 'web-app';
  if (route.path.includes('/solutions/digital-growth')) return 'digital-growth';
  return 'agentic-ai';
});

const pageContent = computed(() => {
  const map = {
    'agentic-ai': {
      eyebrow: 'Agentic AI Solutions - Live Deployments in Singapore, the United States, and Indonesia',
      title: 'Agentic AI Development Company in Singapore',
      subheadline:
        'MAXY AI builds production-grade agentic AI solutions for SMEs and enterprises - custom AI agents trained on your business, integrated into your stack, running in production within 4-8 weeks.',
      microcopy:
        'Live deployments in Singapore, the United States, and Indonesia.',
      breadcrumb: 'Agentic AI',
    },
    'web-app': {
      eyebrow: 'AI-Native Web and App Development',
      title: 'Custom Web & Mobile App Development in Singapore',
      subheadline:
        'We build AI-native websites and apps for SMEs and enterprises, with automation, analytics, and integration baked in from day one.',
      microcopy: 'Built to ship fast, scale cleanly, and plug into your stack.',
      breadcrumb: 'Web and App',
    },
    'digital-growth': {
      eyebrow: 'Digital Growth Services',
      title: 'Digital Marketing & SEO Agency in Singapore',
      subheadline:
        'Content, performance creative, and SEO systems that drive qualified pipeline for SMEs and enterprises.',
      microcopy: 'Measured on revenue, not vanity metrics.',
      breadcrumb: 'Digital Growth',
    },
  };

  return map[pageKey.value];
});
</script>
