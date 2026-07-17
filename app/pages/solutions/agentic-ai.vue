<template>
  <div>
    <main class="main-bg">
      <Header />
      <Services />
      <Process />
      <Services2 />
      <FAQS />
      <WorkShowcase category="agentic-ai" />
    </main>
    <Footer />
  </div>
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
  ...pageSeo.agenticAi,
  breadcrumbs: [
    { name: 'Home', item: '/' },
    { name: 'Solutions', item: '/solutions' },
    { name: 'Agentic AI', item: '/solutions/agentic-ai' },
  ],
  service: {
    name: 'Agentic AI Development Services',
    serviceType: 'Custom agentic AI and AI agent development',
    description: pageSeo.agenticAi.description,
    audience: 'SMEs and growth-stage companies in Singapore, the US, and Southeast Asia',
  },
  faq: solutionFaqs['agentic-ai'].items,
});
</script>
