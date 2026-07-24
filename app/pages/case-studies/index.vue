<template>
  <div>
  <main class="main-bg">
    <header class="header page-header bg-img section-padding" style="background-image: url('/light/assets/imgs/header/b5.jpg'); background-color: #0d0d0d"
      data-overlay-dark="9">
      <div class="container pt-100">
        <div class="text-center">
          <h6 class="sub-title main-color mb-15">Case Studies</h6>
          <h1>Agentic AI systems, deployed and measured</h1>
          <p class="mt-20">Five live deployments across recruitment, sales, finance, hospitality, and marketing - anonymized, with one headline metric each.</p>
          <div class="mt-15">
            <NuxtLink to="/">Home</NuxtLink>
            <span class="padding-rl-20">|</span>
            <span class="main-color">Case Studies</span>
          </div>
        </div>
      </div>
    </header>

    <section class="work-showcase section-padding">
      <div class="container">
        <div class="sec-head mb-80">
          <h6 class="sub-title main-color mb-25">What We've Built</h6>
          <div class="bord pt-25 bord-thin-top d-flex align-items-center">
            <h2 class="fw-600">Real deployments. <span class="fw-200">Real outcomes.</span></h2>
          </div>
        </div>
        <div class="row">
          <div v-for="study in caseStudies" :key="study.slug" class="col-lg-6 col-md-6 mb-50">
            <NuxtLink :to="`/case-studies/${study.slug}`" class="showcase-card d-block">
              <div class="img o-hidden radius-15 mb-30">
                <img
                  :src="study.image || '/light/assets/imgs/works/projects/2/1.jpg'"
                  :alt="study.title"
                  loading="lazy"
                  style="width: 100%; height: 260px; object-fit: cover"
                />
              </div>
              <div class="cont">
                <span class="sub-title main-color fz-12 ls1 text-u mb-10 d-block">{{ study.category }}</span>
                <h4 class="fw-600 mb-15">{{ study.title }}</h4>
                <span class="sub-title">{{ study.metric.value }} &middot; {{ study.metric.label }}</span>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </main>
  <Footer />
  </div>
</template>
<script setup>
import Footer from '@/components/light/blog-details/Footer';
import caseStudies from '@/l-data/case-studies.json';
import { pageSeo } from '@/l-data/seo';

usePageSeo({
  ...pageSeo.caseStudies,
  breadcrumbs: [
    { name: 'Home', item: '/' },
    { name: 'Case Studies', item: '/case-studies' },
  ],
});
</script>
