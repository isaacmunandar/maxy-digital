<template>
  <main class="main-bg">
    <Header />
    <Services />
    <Process />
    <Services2 />
    <FAQS />
    <WorkShowcase category="web-app" />
  </main>
  <Footer />
</template>
<script setup>
import Footer from '@/components/light/modern-agency/Footer';
import Header from '@/components/light/services-details/Header';
import Services from '@/components/light/services-details/Services';
import Process from '@/components/light/services-details/Process';
import Services2 from '@/components/light/services-details/Services2';
import FAQS from '@/components/light/services-details/FAQs';
import WorkShowcase from '@/components/light/solutions/WorkShowcase';
import { pageSeo, solutionFaqs } from '@/l-data/seo';

usePageSeo({
  ...pageSeo.webApp,
  breadcrumbs: [
    { name: 'Home', item: '/' },
    { name: 'Solutions', item: '/solutions' },
    { name: 'Web & App Development', item: '/solutions/web-app' },
  ],
  service: {
    name: 'Custom Web and Mobile App Development',
    serviceType: 'Web, mobile app, SaaS, and custom software development',
    description: pageSeo.webApp.description,
    audience: 'Singapore SMEs and growth-stage companies',
  },
  faq: solutionFaqs['web-app'].items,
});
</script>
