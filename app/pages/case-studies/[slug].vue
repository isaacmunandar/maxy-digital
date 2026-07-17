<template>
  <div>
    <main class="main-bg">
      <Header :title="study.title" :summary="study.summary" :category="study.category" :metric="study.metric" :gallery="study.gallery" :image="study.image" />
      <Challenge :problem="study.problem" :solution="study.solution" :outcome="study.outcome" />
      <Story :outcome="study.outcome" :gallery="study.gallery" />
      <Next />
    </main>
    <Footer />
  </div>
</template>
<script setup>
import Footer from '@/components/light/blog-details/Footer';
import Challenge from '@/components/light/project2/Challenge';
import Header from '@/components/light/project2/Header';
import Next from '@/components/light/project2/Next';
import Story from '@/components/light/project2/Story';
import caseStudies from '@/l-data/case-studies.json';

const route = useRoute();
const study = caseStudies.find((item) => item.slug === route.params.slug);

if (!study) {
  throw createError({ statusCode: 404, statusMessage: 'Case study not found' });
}

usePageSeo({
  title: study.title,
  description: study.summary,
  breadcrumbs: [
    { name: 'Home', item: '/' },
    { name: 'Case Studies', item: '/case-studies' },
    { name: study.title, item: `/case-studies/${study.slug}` },
  ],
});

useSeoMeta({
  robots: 'noindex, nofollow',
});
</script>
