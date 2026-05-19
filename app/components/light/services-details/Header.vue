<template>
  <header class="header page-header bg-img section-padding" style="background-image: url('/light/assets/imgs/header/b5.jpg')"
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
      eyebrow: 'Agentic AI Solutions - Singapore - Live Deployments in Singapore, United States, and Indonesia',
      title: "Singapore's Agentic AI Agency. Agents Deployed. Not Theorized.",
      subheadline:
        'MAXY Digital builds production-grade agentic AI solutions for Singapore SMEs - custom AI agents trained on your business, integrated into your stack, running in production within 4-8 weeks.',
      microcopy:
        'PSG and EDG grant-aligned. Live deployments in Singapore, the United States, and Indonesia.',
      breadcrumb: 'Agentic AI',
    },
    'web-app': {
      eyebrow: 'AI-Native Web and App Development - Singapore',
      title: 'Web and app experiences engineered to convert.',
      subheadline:
        'We build AI-native websites and apps for Singapore SMEs, with automation, analytics, and integration baked in from day one.',
      microcopy: 'Built to ship fast, scale cleanly, and plug into your stack.',
      breadcrumb: 'Web and App',
    },
    'digital-growth': {
      eyebrow: 'Digital Growth Services - Singapore',
      title: 'Growth systems that compound demand.',
      subheadline:
        'Content, performance creative, and SEO systems that drive qualified pipeline for Singapore SMEs.',
      microcopy: 'Measured on revenue, not vanity metrics.',
      breadcrumb: 'Digital Growth',
    },
  };

  return map[pageKey.value];
});
</script>
