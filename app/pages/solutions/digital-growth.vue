<template>
  <main class="main-bg">
    <Header />
    <Services />
    <Process />
    <Services2 />
    <FAQS />
    <WorkShowcase category="digital-growth" />
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
</script>
