<template>
  <div>
    <main class="main-bg">
      <Header />
      <Contact />
    </main>
    <Footer />
  </div>
</template>
<script setup>
import Footer from '@/components/light/blog-details/Footer';
import Contact from '@/components/light/contact/Contact';
import Header from '@/components/light/contact/Header';
import { pageSeo } from '@/l-data/seo';

usePageSeo({
  ...pageSeo.contact,
  breadcrumbs: [
    { name: 'Home', item: '/' },
    { name: 'Contact', item: '/contact' },
  ],
});
</script>
