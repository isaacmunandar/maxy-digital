<template>
  <div>
    <main class="main-bg o-hidden">
      <Header />
      <Intro />
      <Services2 />
      <Services />
      <Marquee />
      <Clients />
      <BlogSection />
    </main>
    <Footer />
  </div>
</template>
<script setup>
import BlogSection from '@/components/light/home-main/BlogSection';
import Clients from '@/components/light/home-main/Clients';
import Footer from '@/components/light/home-main/Footer';
import Header from '@/components/light/home-main/Header';
import Intro from '@/components/light/home-main/Intro';
import Marquee from '@/components/light/home-main/Marquee';
import Services from '@/components/light/home-main/Services';
import Services2 from '@/components/light/home-main/Services2';
import { pageSeo } from '@/l-data/seo';

usePageSeo(pageSeo.home);

useHead({
  link: [
    {
      rel: "preload",
      as: "image",
      href: "/light/assets/imgs/header/bg1.jpg",
      fetchpriority: "high",
    },
  ],
});
</script>
