<template>
  <main class="main-bg">
    <header class="header page-header bg-img section-padding" style="background-image: url('/light/assets/imgs/header/b5.jpg'); background-color: #0d0d0d"
      data-overlay-dark="9">
      <div class="container pt-100">
        <div class="text-center">
          <h6 class="sub-title main-color mb-15">AI Playground</h6>
          <h1>Free AI learning tools. No account. No payment.</h1>
          <p class="mt-20">
            Six browser-based tools for coding, cybersecurity, and business strategy from
            MAXY Academy - open to anyone who wants to learn.
          </p>
          <div class="mt-15">
            <a href="/">Home</a>
            <span class="padding-rl-20">|</span>
            <span class="main-color">AI Playground</span>
          </div>
        </div>
      </div>
    </header>

    <section class="section-padding">
      <div class="container">
        <p class="fz-18 opacity-8 mb-50">
          A student in a small town and a director in a corporate tower open the same
          tools, at the same speed, for the same price: nothing.
        </p>
        <div class="row pt-50 bord-thin-top">
          <div v-for="stat in accessStats" :key="stat.label" class="col-sm-3 sm-mb30">
            <div class="item">
              <h2 class="fz-60 line-height-1">
                <span class="numb-count">{{ stat.value }}</span>
              </h2>
              <span class="sub-title opacity-7">{{ stat.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="services section-padding sub-bg">
      <div class="container">
        <div class="sec-head mb-80">
          <h6 class="sub-title main-color mb-25">The Toolkit</h6>
          <div class="bord pt-25 bord-thin-top d-flex align-items-center">
            <h2 class="fw-600">Learn by doing, <span class="fw-200">not by reading.</span></h2>
          </div>
        </div>
        <div class="row">
          <div v-for="tool in tools" :key="tool.name" class="col-lg-4 col-md-6 mb-30">
            <div class="item-box radius-15">
              <div class="icon mb-40 opacity-5">
                <img :src="tool.icon" alt="" />
              </div>
              <h5 class="mb-15">{{ tool.name }}</h5>
              <p>{{ tool.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding">
      <div class="container">
        <div class="sec-head mb-80">
          <h6 class="sub-title main-color mb-25">Why This Matters</h6>
          <div class="bord pt-25 bord-thin-top d-flex align-items-center">
            <h2 class="fw-600">Three ways to <span class="fw-200">stand with us.</span></h2>
          </div>
        </div>
        <div class="row">
          <div v-for="track in tracks" :key="track.title" class="col-lg-4 sm-mb40">
            <h6 class="sub-title mb-20 bord-thin-bottom pb-20">{{ track.title }}</h6>
            <p class="opacity-8">{{ track.desc }}</p>
          </div>
        </div>
        <div class="row mt-80 pt-50 bord-thin-top align-items-center justify-content-center">
          <div v-for="logo in partnerLogos" :key="logo" class="col-4 col-md-2 text-center mb-30">
            <img :src="`/light/assets/imgs/partners/${logo}`" :alt="`${logo.replace('.png', '').replace(/-/g, ' ')} logo`" style="max-height: 40px; width: auto; max-width: 100%;" class="opacity-7" />
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding sub-bg">
      <div class="container text-center">
        <div class="sec-head mb-50">
          <h6 class="sub-title main-color mb-25">Get Started</h6>
          <div class="bord pt-25 bord-thin-top d-flex justify-content-center">
            <h2 class="fw-600">Open the tools. <span class="fw-200">No sign-up required.</span></h2>
          </div>
        </div>
        <a href="https://ai.maxy.academy/" target="_blank" rel="noopener" class="butn butn-md butn-bord radius-30">
          <span class="text">Open AI Playground</span>
        </a>
      </div>
    </section>
  </main>
  <Footer />
</template>
<script setup>
import Footer from '@/components/light/blog-details/Footer';
import { pageSeo } from '@/l-data/seo';

usePageSeo({
  ...pageSeo.aiPlayground,
  breadcrumbs: [
    { name: 'Home', item: '/' },
    { name: 'AI Playground', item: '/ai-playground' },
  ],
});

const accessStats = [
  { value: '$ 0', label: 'Zero cost' },
  { value: '0 sec', label: 'Zero login friction' },
  { value: 'Instant', label: 'Zero wait time' },
  { value: '6', label: 'Open tools' },
];

const tools = [
  {
    name: 'MaxyBlock',
    icon: '/light/assets/imgs/serv-icons/3.png',
    desc: 'A block-based simulator that teaches computational sequence logic visually - for children and first-time learners.',
  },
  {
    name: 'MaxyBox',
    icon: '/light/assets/imgs/serv-icons/4.png',
    desc: 'A real code sandbox in the browser. Write and run multi-platform code with instant feedback, nothing to install.',
  },
  {
    name: 'MaxyCanvas',
    icon: '/light/assets/imgs/serv-icons/5.png',
    desc: 'A strategic brainstorming board with AI-assisted restructuring and marketing funnel blueprints for managers and founders.',
  },
  {
    name: 'MaXyber',
    icon: '/light/assets/imgs/serv-icons/6.png',
    desc: 'Digital safety taught as play - interactive RPG mechanics and a Red Team sandbox with real-world threat simulations.',
  },
  {
    name: 'MaxyPlayground',
    icon: '/light/assets/imgs/serv-icons/3.png',
    desc: 'An open model workspace with a practical prompt cheat sheet - compare how different models behave.',
  },
  {
    name: 'MaxyChat',
    icon: '/light/assets/imgs/serv-icons/4.png',
    desc: 'Direct conversational AI access - free, immediate, and open. Often the first place people get to ask a machine a question.',
  },
];

const tracks = [
  {
    title: 'For Investors',
    desc: 'The widest, lowest-friction entry point into the MAXY ecosystem - feeding into paid bootcamps, certification, and talent placement.',
  },
  {
    title: 'For Company Partners',
    desc: 'A ready-made surface to meet young talent while they are still learning. Co-brand modules or sponsor tracks that map to roles you are hiring for.',
  },
  {
    title: 'For CSR Collaborators',
    desc: 'Measurable, deployable public good - sponsor a school, district, or province and put working AI tools into classrooms with no lab and no budget.',
  },
];

const partnerLogos = [
  'agape.png',
  'asia-pacific-salvage.png',
  'bgo.png',
  'family-first-indonesia.png',
  'hkk.png',
  'roeamah-indonesia.png',
  'safe-care-taiwan.png',
  'sposea.png',
  'tbn-alliance.png',
];
</script>
