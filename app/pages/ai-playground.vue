<template>
  <div>
  <main class="main-bg">
    <header class="header page-header bg-img section-padding" style="background-image: url('/light/assets/imgs/header/b5.jpg'); background-color: #0d0d0d"
      data-overlay-dark="9">
      <div class="container pt-100">
        <div class="text-center">
          <h6 v-reveal class="sub-title main-color mb-15">AI Playground</h6>
          <h1 class="hero-split">Free AI learning tools. No account. No payment.</h1>
          <p v-reveal="{ delay: 150 }" class="mt-20">
            Six browser-based tools for coding, cybersecurity, and business strategy from
            MAXY Academy - open to anyone who wants to learn.
          </p>
          <a v-reveal="{ delay: 200 }" href="https://ai.maxy.academy/" target="_blank" rel="noopener" class="butn butn-md butn-bord radius-30 mt-30 hero-cta">
            <span class="text">Open AI Playground Now</span>
            <span class="icon ti-arrow-top-right ml-10"></span>
          </a>
          <div v-reveal="{ delay: 300 }" class="mt-25">
            <NuxtLink to="/">Home</NuxtLink>
            <span class="padding-rl-20">|</span>
            <span class="main-color">AI Playground</span>
          </div>
        </div>
      </div>
    </header>

    <section class="section-padding">
      <div class="container">
        <p v-reveal class="fz-18 opacity-8 mb-50">
          A student in a small town and a director in a corporate tower open the same
          tools, at the same speed, for the same price: nothing.
        </p>
        <div class="row pt-50 bord-thin-top" v-reveal:stagger>
          <div v-for="stat in accessStats" :key="stat.label" class="col-sm-3 sm-mb30">
            <div class="item">
              <h2 class="fz-60 line-height-1">
                <span v-count class="numb-count">{{ stat.value }}</span>
              </h2>
              <span class="sub-title opacity-7">{{ stat.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="services section-padding sub-bg">
      <div class="container">
        <div v-reveal class="sec-head mb-80">
          <h6 class="sub-title main-color mb-25">The Toolkit</h6>
          <div class="bord pt-25 bord-thin-top d-flex align-items-center">
            <h2 class="fw-600">Learn by doing, <span class="fw-200">not by reading.</span></h2>
          </div>
        </div>
        <div class="row" v-reveal:stagger>
          <div v-for="tool in tools" :key="tool.slug" class="col-lg-4 col-md-6 mb-30">
            <div
              class="tool-card radius-15"
              :class="{ 'is-flipped': flipped.has(tool.slug) }"
              role="button"
              tabindex="0"
              :aria-pressed="flipped.has(tool.slug)"
              :aria-label="`Preview ${tool.name}`"
              @click="toggleFlip(tool.slug)"
              @keydown.enter.prevent="toggleFlip(tool.slug)"
              @keydown.space.prevent="toggleFlip(tool.slug)"
            >
              <div class="tool-card-inner">
                <div class="tool-card-face tool-card-front item-box radius-15">
                  <div class="icon mb-40 opacity-5">
                    <img :src="tool.icon" alt="" />
                  </div>
                  <h5 class="mb-15">{{ tool.name }}</h5>
                  <p>{{ tool.desc }}</p>
                  <span class="tool-card-hint">Hover or tap to preview</span>
                </div>
                <div class="tool-card-face tool-card-back">
                  <img :src="tool.shot" :alt="`${tool.name} screenshot`" class="tool-card-shot" />
                  <div class="tool-card-overlay">
                    <h5 class="mb-20">{{ tool.name }}</h5>
                    <a
                      :href="toolUrl(tool.slug)"
                      target="_blank"
                      rel="noopener"
                      class="tool-card-cta"
                      :tabindex="flipped.has(tool.slug) ? 0 : -1"
                      @click.stop
                    >
                      <span class="text">Open {{ tool.name }}</span>
                      <span class="icon ti-arrow-top-right ml-10"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding sub-bg">
      <div class="container text-center">
        <div v-reveal class="sec-head mb-40">
          <h2 class="fw-600">Like what you see? <span class="fw-200">Go try it yourself.</span></h2>
        </div>
        <a v-reveal="{ delay: 100 }" href="https://ai.maxy.academy/" target="_blank" rel="noopener" class="butn butn-md butn-bord radius-30">
          <span class="text">Open AI Playground</span>
          <span class="icon ti-arrow-top-right ml-10"></span>
        </a>
      </div>
    </section>

    <section class="section-padding">
      <div class="container">
        <div v-reveal class="sec-head mb-80">
          <h6 class="sub-title main-color mb-25">Why This Matters</h6>
          <div class="bord pt-25 bord-thin-top d-flex align-items-center">
            <h2 class="fw-600">Three ways to <span class="fw-200">stand with us.</span></h2>
          </div>
        </div>
        <div class="row" v-reveal:stagger>
          <div v-for="track in tracks" :key="track.title" class="col-lg-4 sm-mb40">
            <h6 class="sub-title mb-20 bord-thin-bottom pb-20">{{ track.title }}</h6>
            <p class="opacity-8">{{ track.desc }}</p>
          </div>
        </div>
        <div class="row mt-80 pt-50 bord-thin-top align-items-center justify-content-center" v-reveal:stagger>
          <div v-for="logo in partnerLogos" :key="logo" class="col-4 col-md-2 text-center mb-30">
            <img :src="`/light/assets/imgs/partners/${logo}`" :alt="`${logo.replace('.png', '').replace(/-/g, ' ')} logo`" style="max-height: 40px; width: auto; max-width: 100%;" class="opacity-7" />
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding sub-bg">
      <div class="container text-center">
        <div v-reveal class="sec-head mb-50">
          <h6 class="sub-title main-color mb-25">Get Started</h6>
          <div class="bord pt-25 bord-thin-top d-flex justify-content-center">
            <h2 class="fw-600">Open the tools. <span class="fw-200">No sign-up required.</span></h2>
          </div>
        </div>
        <a v-reveal="{ delay: 150 }" href="https://ai.maxy.academy/" target="_blank" rel="noopener" class="butn butn-md butn-bord radius-30">
          <span class="text">Open AI Playground</span>
        </a>
      </div>
    </section>
  </main>
  <Footer />
  </div>
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

useHeroSplitReveal('.hero-split', 'words');

const accessStats = [
  { value: '$ 0', label: 'Zero cost' },
  { value: '0 sec', label: 'Zero login friction' },
  { value: 'Instant', label: 'Zero wait time' },
  { value: '6', label: 'Open tools' },
];

const tools = [
  {
    name: 'MaxyBlock',
    slug: 'maxyblock',
    icon: '/light/assets/imgs/serv-icons/3.png',
    shot: '/light/assets/imgs/ai-playground/maxy-block.png',
    desc: 'A block-based simulator that teaches computational sequence logic visually - for children and first-time learners.',
  },
  {
    name: 'MaxyBox',
    slug: 'maxybox',
    icon: '/light/assets/imgs/serv-icons/4.png',
    shot: '/light/assets/imgs/ai-playground/maxy-box.png',
    desc: 'A real code sandbox in the browser. Write and run multi-platform code with instant feedback, nothing to install.',
  },
  {
    name: 'MaxyCanvas',
    slug: 'canvas',
    icon: '/light/assets/imgs/serv-icons/5.png',
    shot: '/light/assets/imgs/ai-playground/maxy-canvas.png',
    desc: 'A strategic brainstorming board with AI-assisted restructuring and marketing funnel blueprints for managers and founders.',
  },
  {
    name: 'MaXyber',
    slug: 'maxyber',
    icon: '/light/assets/imgs/serv-icons/6.png',
    shot: '/light/assets/imgs/ai-playground/maxy-xyber.png',
    desc: 'Digital safety taught as play - interactive RPG mechanics and a Red Team sandbox with real-world threat simulations.',
  },
  {
    name: 'MaxyPlayground',
    slug: 'playground',
    icon: '/light/assets/imgs/serv-icons/3.png',
    shot: '/light/assets/imgs/ai-playground/maxy-playground.png',
    desc: 'An open model workspace with a practical prompt cheat sheet - compare how different models behave.',
  },
  {
    name: 'MaxyChat',
    slug: 'chat',
    icon: '/light/assets/imgs/serv-icons/4.png',
    shot: '/light/assets/imgs/ai-playground/maxy-chat.png',
    desc: 'Direct conversational AI access - free, immediate, and open. Often the first place people get to ask a machine a question.',
  },
];

const flipped = reactive(new Set());
function toggleFlip(slug) {
  if (flipped.has(slug)) flipped.delete(slug);
  else flipped.add(slug);
}
function toolUrl(slug) {
  return `https://ai.maxy.academy/${slug}`;
}

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

<style scoped>
.hero-cta {
  border-color: rgba(255, 255, 255, 0.5);
}
.hero-cta:hover {
  background: #fff;
  border-color: #fff;
}
.hero-cta:hover .text {
  color: #1a1a1a !important;
}

.tool-card {
  perspective: 1400px;
  cursor: pointer;
  outline-offset: 6px;
}

.tool-card-inner {
  position: relative;
  width: 100%;
  height: 380px;
  transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  transform-style: preserve-3d;
}

.tool-card:hover .tool-card-inner,
.tool-card.is-flipped .tool-card-inner {
  transform: rotateY(180deg) scale(1.04);
}

.tool-card-face {
  position: absolute;
  inset: 0;
  overflow: hidden;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

.tool-card-front {
  display: flex;
  flex-direction: column;
}

.tool-card-front .icon img {
  width: 56px;
}

.tool-card-hint {
  display: block;
  margin-top: 20px;
  font-size: 12px;
  opacity: 0.5;
}

.tool-card-back {
  transform: rotateY(180deg);
  border: 1px solid rgba(0, 0, 0, 0.12);
}

.tool-card-shot {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.tool-card-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 30px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.75) 100%);
}

.tool-card-overlay h5 {
  color: #fff;
  position: relative;
  z-index: 2;
}

.tool-card-cta {
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  background: #2563eb;
  color: #fff;
  padding: 10px 22px;
  border-radius: 30px;
  transition: background 0.3s;
}

.tool-card-cta:hover {
  background: #fbb041;
  color: #1a1a1a;
}

@media (max-width: 768px) {
  .tool-card-inner {
    height: 340px;
  }
  .tool-card-front {
    padding: 40px 30px;
  }
}
</style>

