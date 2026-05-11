<template>
  <LoadingScreen />
  <Cursor />
  <ProgressScroll />
  <Lines />
  <div id="smooth-wrapper">
    <Navbar />
    <div id="smooth-content">
      <main class="main-bg">
        <Header />
        <FAQS />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  </div>
</template>
<script setup>
import Footer from '@/components/light/modern-agency/Footer';
import Lines from '@/components/light/common/Lines';
import ProgressScroll from '@/components/light/common/ProgressScroll';
import Cursor from '@/components/light/common/cusor';
import LoadingScreen from '@/components/light/common/loader';
import Navbar from '@/components/light/creative-agency/Navbar';
import Header from '@/components/light/FAQS/Header';
import FAQS from '@/components/light/FAQS/FAQS';
import Testimonials from '@/components/light/FAQS/Testimonials';
import Blog from '@/components/light/FAQS/Blog';
import { onMounted } from 'vue';

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  ScrollTrigger.normalizeScroll(true);
  ScrollSmoother.create({
    smooth: 2,
    effects: true,
  });
});
</script>
