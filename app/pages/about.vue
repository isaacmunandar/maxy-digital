<template>
  <main class="main-bg">
    <header class="header page-header bg-img section-padding" style="background-image: url('/light/assets/imgs/header/b5.jpg'); background-color: #0d0d0d"
      data-overlay-dark="9">
      <div class="container pt-100">
        <div class="text-center">
          <h6 class="sub-title main-color mb-15">About MAXY AI</h6>
          <h1>The operators behind MAXY AI</h1>
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

    <!-- TODO: verify exact years for the 2024 (6-market expansion) and 2025 (HolonIQ recognition) milestones -->
    <!-- TODO: real founder bios + LinkedIn URLs from user -->
    <section class="section-padding">
      <div class="container">
        <div class="sec-head mb-50">
          <h6 class="sub-title main-color mb-25">Our Story</h6>
          <div class="bord pt-25 bord-thin-top d-flex align-items-center">
            <h2 class="fw-600">Shipping agentic AI <span class="fw-200">since 2022.</span></h2>
          </div>
        </div>
        <div class="row">
          <div v-for="(item, i) in timeline" :key="i" class="col-md-3 col-6 mb-30">
            <h2 class="fz-100 numb-font">{{ i + 1 }}.</h2>
            <h4>{{ item.year }} &middot; {{ item.title }}</h4>
            <p class="opacity-8 mt-15">{{ item.body }}</p>
          </div>
        </div>

        <div class="mt-60">
          <h6 class="sub-title main-color mb-25">Founders</h6>
          <div class="bord pt-25 bord-thin-top"></div>
          <div class="row mt-40">
            <div v-for="(person, i) in team" :key="i" class="col-md-6 md-mb30">
              <div class="founder-card radius-15">
                <div class="img o-hidden mb-25">
                  <img :src="person.img" :alt="person.name" class="radius-15" />
                </div>
                <div class="d-flex align-items-center">
                  <h4 class="fw-600">{{ person.name }}</h4>
                  <a v-if="person.linkedin" :href="person.linkedin" target="_blank" rel="noopener" class="linkedin-circle ml-auto">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                  <span v-else class="linkedin-circle ml-auto opacity-5" title="LinkedIn URL TODO">
                    <i class="fab fa-linkedin-in"></i>
                  </span>
                </div>
                <span class="sub-title main-color d-block mb-15">{{ person.subName }}</span>
                <p class="opacity-8">{{ person.bio }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding sub-bg">
      <div class="container">
        <div class="sec-head mb-50">
          <h6 class="sub-title main-color mb-25">Recognition &amp; Structure</h6>
          <div class="bord pt-25 bord-thin-top d-flex align-items-center">
            <h2 class="fw-600">Backed by structure, <span class="fw-200">recognized for results.</span></h2>
            <div class="ml-auto">
              <!-- TODO: swap for official HolonIQ badge art when provided -->
              <div class="holoniq-badge">
                <i class="fas fa-award mr-10 main-color"></i>
                <span class="sub-title main-color">HolonIQ &middot; Top 50 SEA EdTech 2025</span>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center">
          <div class="item-box radius-15 d-inline-block">
            <h4 class="mb-10">MAXY AI Holdings</h4>
            <p class="opacity-8">Parent holding company</p>
          </div>
        </div>
        <div class="row mt-30 pt-30 bord-thin-top">
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

        <div class="mt-60">
          <h6 class="sub-title main-color mb-25">100+ partners across Asia</h6>
          <PartnersMarquee />
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
        <div class="row mt-40">
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
import PartnersMarquee from '@/components/light/common/PartnersMarquee';
import team from '@/l-data/team.json';
import { pageSeo } from '@/l-data/seo';

usePageSeo({
  ...pageSeo.about,
  breadcrumbs: [
    { name: 'Home', item: '/' },
    { name: 'About', item: '/about' },
  ],
});

const timeline = [
  { year: '2022', title: 'First agentic AI deployments', body: 'Shipped the first production agentic AI systems for early operators.' },
  { year: '2024', title: 'Expansion across 6 markets', body: 'Scaled delivery across Singapore, Southeast Asia, and the United States.' },
  { year: '2025', title: 'HolonIQ Top 50 SEA EdTech', body: 'Recognized under MAXY AI Holdings as a Top 50 Southeast Asia EdTech company.' },
  { year: 'Today', title: 'Serving SMEs and enterprises', body: 'Live deployments across Asia and the US, from first agent to full transformation.' },
];
</script>
<style scoped>
.founder-card {
  background: #f5f7f9;
  padding: 30px;
}
.founder-card .img {
  max-width: 420px;
  margin-right: auto;
  margin-left: auto;
}
.founder-card .img img {
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 5;
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
  flex-shrink: 0;
}

.holoniq-badge {
  display: inline-flex;
  align-items: center;
  border: 1px solid #14cf93;
  border-radius: 30px;
  padding: 12px 24px;
}
</style>
