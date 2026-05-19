<template>
  <section class="process section-padding pt-0">
    <div class="container">
      <div class="sec-head mb-80">
        <h6 class="sub-title main-color mb-25">{{ pageContent.subTitle }}</h6>
        <div class="bord pt-25 bord-thin-top d-flex align-items-center">
          <h2 class="fw-600">{{ pageContent.headline }}</h2>
          <div class="ml-auto">
            <a href="/roadmap" class="go-more">
              <span class="text">Full Roadmap</span>
              <span class="icon ti-arrow-top-right"></span>
            </a>
          </div>
        </div>
        <p v-if="pageContent.note" class="mt-20">{{ pageContent.note }}</p>
      </div>
      <div class="row md-marg">
        <div
          v-for="(step, index) in pageContent.steps"
          :key="step.title"
          class="col-lg-3 col-md-6 item"
          :class="step.className"
        >
          <div class="icon-img-60 mb-30">
            <img :src="step.icon" alt="" />
          </div>
          <h5 class="mb-15">{{ step.title }}</h5>
          <p>{{ step.text }}</p>
          <div class="o-hidden">
            <a href="/roadmap" class="rmore to-in mt-30">
              <span class="sub-title">Read More</span>
              <img src="/light/assets/imgs/arrow-right.png" alt="" class="icon-img-20 ml-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { computed } from 'vue';

const route = useRoute();

const pageKey = computed(() => {
  if (route.path.includes('/solutions/agentic-ai')) return 'agentic-ai';
  if (route.path.includes('/solutions/web-app')) return 'web-app';
  if (route.path.includes('/solutions/digital-growth')) return 'digital-growth';
  return 'agentic-ai';
});

const pageContent = computed(() => {
  const map = {
    'agentic-ai': {
      subTitle: 'How We Build',
      headline: 'Six weeks from explore to agentic AI in production in Singapore.',
      note: 'Singapore engagements are scoped to PSG and EDG grant frameworks from day 1.',
      steps: [
        {
          title: 'Diagnose',
          text: 'Identify the one workflow where agentic AI earns first, then scope a tight, measurable deployment.',
          icon: '/light/assets/imgs/serv-icons/3.png',
          className: 'md-mb50',
        },
        {
          title: 'Design',
          text: 'Architecture, data flows, and model selection designed around your stack - not a generic template.',
          icon: '/light/assets/imgs/serv-icons/4.png',
          className: 'md-mb50',
        },
        {
          title: 'Build & Train',
          text: 'Full-stack development - agents, APIs, interfaces, and model training - completed in 4-8 weeks.',
          icon: '/light/assets/imgs/serv-icons/5.png',
          className: 'sm-mb50',
        },
        {
          title: 'Deploy & Optimize',
          text: 'Live in production with ongoing optimization and outcome accountability.',
          icon: '/light/assets/imgs/serv-icons/6.png',
          className: '',
        },
      ],
    },
    'web-app': {
      subTitle: 'How We Build',
      headline: 'From discovery to AI-native web and app production.',
      note: '',
      steps: [
        {
          title: 'Discover',
          text: 'Clarify the conversion goal, audience, and data signals that drive your product.',
          icon: '/light/assets/imgs/serv-icons/3.png',
          className: 'md-mb50',
        },
        {
          title: 'Architect',
          text: 'Define IA, UX, and AI touchpoints that connect to your stack.',
          icon: '/light/assets/imgs/serv-icons/4.png',
          className: 'md-mb50',
        },
        {
          title: 'Build & Launch',
          text: 'Ship the site or app with analytics, automation, and integrations built in.',
          icon: '/light/assets/imgs/serv-icons/5.png',
          className: 'sm-mb50',
        },
        {
          title: 'Optimize',
          text: 'Iterate on performance, conversion, and SEO/GEO visibility.',
          icon: '/light/assets/imgs/serv-icons/6.png',
          className: '',
        },
      ],
    },
    'digital-growth': {
      subTitle: 'How We Run',
      headline: 'From demand diagnosis to compounding growth.',
      note: '',
      steps: [
        {
          title: 'Diagnose',
          text: 'Find where demand drops and define the ICP, channels, and goals.',
          icon: '/light/assets/imgs/serv-icons/3.png',
          className: 'md-mb50',
        },
        {
          title: 'Plan',
          text: 'Build a content, creative, and distribution plan tied to revenue outcomes.',
          icon: '/light/assets/imgs/serv-icons/4.png',
          className: 'md-mb50',
        },
        {
          title: 'Produce & Publish',
          text: 'Ship campaigns and assets across SEO, paid, and social.',
          icon: '/light/assets/imgs/serv-icons/5.png',
          className: 'sm-mb50',
        },
        {
          title: 'Optimize',
          text: 'Measure pipeline impact and compound what works.',
          icon: '/light/assets/imgs/serv-icons/6.png',
          className: '',
        },
      ],
    },
  };

  return map[pageKey.value];
});
</script>
