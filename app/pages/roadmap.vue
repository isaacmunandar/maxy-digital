<template>
  <div>
    <main class="main-bg">
      <Header />
      <Intro />
      <Marquee />
      <Intro2 />
    </main>
    <Footer />
  </div>
</template>
<script setup>
import Footer from '@/components/light/blog-list/Footer';
import Header from '@/components/light/about/Header';
import Intro from '@/components/light/about/Intro';
import Marquee from '@/components/light/about/Marquee';
import Intro2 from '@/components/light/about/Intro2';
import { pageSeo } from '@/l-data/seo';

usePageSeo({
  ...pageSeo.roadmap,
  breadcrumbs: [
    { name: 'Home', item: '/' },
    { name: 'AI Transformation Roadmap', item: '/roadmap' },
  ],
  service: {
    name: 'AI Transformation Roadmap',
    serviceType: 'AI adoption strategy and transformation planning',
    description: pageSeo.roadmap.description,
    audience: 'SMEs and growth-stage companies planning practical AI adoption',
  },
});
</script>
