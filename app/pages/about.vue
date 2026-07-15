<template>
  <main class="main-bg">
    <header class="header page-header bg-img section-padding" style="background-image: url('/light/assets/imgs/header/b5.jpg'); background-color: #0d0d0d"
      data-overlay-dark="9">
      <div class="container pt-100">
        <div class="text-center">
          <h6 class="sub-title main-color mb-15">About MAXY AI</h6>
          <h1>The team building agentic AI for Singapore SMEs</h1>
          <p class="mt-20">
            MAXY AI is the agentic AI and software arm of MAXY AI Holdings, recognized as a
            HolonIQ Top 50 Southeast Asia EdTech company in 2025.
          </p>
          <div class="mt-15">
            <a href="/">Home</a>
            <span class="padding-rl-20">|</span>
            <span class="main-color">About</span>
          </div>
        </div>
      </div>
    </header>

    <section class="section-padding">
      <div class="container">
        <div class="sec-head mb-80">
          <h6 class="sub-title main-color mb-25">Founders</h6>
          <div class="bord pt-25 bord-thin-top d-flex align-items-center">
            <h2 class="fw-600">Built by operators <span class="fw-200">who ship.</span></h2>
          </div>
        </div>
        <div class="row">
          <div v-for="(person, i) in team" :key="i" class="col-md-6 md-mb40">
            <div class="founder-card">
              <div class="img mb-30">
                <img :src="person.img" :alt="person.name" class="radius-15" />
              </div>
              <h4 class="fw-600 mb-10">{{ person.name }}</h4>
              <span class="sub-title main-color d-block mb-15">{{ person.subName }}</span>
              <p class="opacity-8 mb-20">{{ person.bio }}</p>
              <a v-if="person.linkedin" :href="person.linkedin" target="_blank" rel="noopener" class="linkedin-circle">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <span v-else class="linkedin-circle opacity-5" title="LinkedIn URL TODO">
                <i class="fab fa-linkedin-in"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding sub-bg">
      <div class="container">
        <div class="sec-head mb-60">
          <h6 class="sub-title main-color mb-25">Recognition &amp; Structure</h6>
          <div class="bord pt-25 bord-thin-top d-flex align-items-center">
            <h2 class="fw-600">Backed by structure, <span class="fw-200">recognized for results.</span></h2>
          </div>
        </div>

        <!-- TODO: swap for official HolonIQ badge art when provided -->
        <div class="holoniq-badge mb-60">
          <i class="fas fa-award mr-10 main-color"></i>
          <span class="sub-title main-color">HolonIQ &middot; Top 50 SEA EdTech 2025</span>
        </div>

        <div class="item-box radius-15 text-center">
          <h4 class="mb-10">MAXY AI Holdings</h4>
          <p class="opacity-8">Parent holding company</p>
        </div>
        <div class="row mt-40 pt-40 bord-thin-top">
          <div class="col-md-4 md-mb30">
            <div class="item-box radius-15 text-center">
              <h5 class="mb-10">MAXY AI</h5>
              <p class="opacity-8">Agentic AI &amp; software</p>
            </div>
          </div>
          <div class="col-md-4 md-mb30">
            <div class="item-box radius-15 text-center">
              <h5 class="mb-10">MAXY Academy</h5>
              <p class="opacity-8">maxy.academy</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="item-box radius-15 text-center">
              <h5 class="mb-10">AI Playground</h5>
              <p class="opacity-8">ai.maxy.academy</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding">
      <div class="container">
        <div class="sec-head mb-50">
          <h6 class="sub-title main-color mb-25">By The Numbers</h6>
          <div class="bord pt-25 bord-thin-top d-flex align-items-center">
            <h2 class="fw-600">Credibility built <span class="fw-200">across markets.</span></h2>
          </div>
        </div>
        <div class="row mt-50 pt-50 bord-thin-top">
          <div class="col-sm-4 sm-mb30">
            <div class="item d-flex align-items-center">
              <h2 class="fz-60 line-height-1">
                <span class="numb-count">100+</span>
              </h2>
              <span class="sub-title opacity-7 ml-30">
                Company partners<br />across Asia
              </span>
            </div>
          </div>
          <div class="col-sm-4 sm-mb30">
            <div class="item d-flex align-items-center">
              <h2 class="fz-60 line-height-1">
                <span class="numb-count">6</span>
              </h2>
              <span class="sub-title opacity-7 ml-30">
                Markets with<br />live deployments
              </span>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="item d-flex align-items-center">
              <h2 class="fz-60 line-height-1">
                <span class="numb-count">50+</span>
              </h2>
              <span class="sub-title opacity-7 ml-30">
                Enterprises<br />served
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <Footer />
</template>
<script setup>
import Footer from '@/components/light/blog-details/Footer';
import team from '@/l-data/team.json';
import { pageSeo } from '@/l-data/seo';

usePageSeo({
  ...pageSeo.about,
  breadcrumbs: [
    { name: 'Home', item: '/' },
    { name: 'About', item: '/about' },
  ],
});
</script>
<style scoped>
.founder-card .img img {
  width: 100%;
  height: 380px;
  object-fit: cover;
}
.linkedin-circle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid #1a1a1a;
  border-radius: 50%;
}

.holoniq-badge {
  display: inline-flex;
  align-items: center;
  border: 1px solid #14cf93;
  border-radius: 30px;
  padding: 12px 24px;
}
</style>
