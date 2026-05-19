<template>
  <section class="services-details section-padding">
    <div class="container">
      <div class="sec-head text-center mb-80">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div>
              <h6 class="sub-title main-color mb-15">{{ sectionContent.subTitle }}</h6>
              <h4>{{ sectionContent.headline }}</h4>
            </div>
          </div>
        </div>
      </div>
      <div class="row serv-imgs mt-80">
        <div class="col-lg-4">
          <div class="img o-hidden radius-15 fit-img md-mb30">
            <img src="/light/assets/imgs/intro/01.jpg" alt="" />
          </div>
        </div>
        <div class="col-lg-8">
          <div class="img o-hidden radius-15">
            <img src="/light/assets/imgs/background/3.jpg" alt="" data-speed="auto" data-lag="0" />
          </div>
        </div>
      </div>
      <div class="row mt-80">
        <div class="col-lg-4">
          <div class="text md-mb50">
            <p>{{ sectionContent.body }}</p>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="row">
            <div class="col-md-6">
              <ul class="rest list-arrow">
                <li
                  v-for="(item, index) in sectionContent.bulletsLeft"
                  :key="item"
                  :class="index === 0 ? 'nowrap' : 'mt-10 nowrap'"
                >
                  <span class="icon">
                    <svg width="100%" height="100%" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd"
                        d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                        fill="#14cf93"></path>
                    </svg>
                  </span>
                  <h6 class="inline fw-400">{{ item }}</h6>
                </li>
              </ul>
            </div>
            <div class="col-md-6">
              <ul class="rest list-arrow">
                <li
                  v-for="(item, index) in sectionContent.bulletsRight"
                  :key="item"
                  :class="index === 0 ? 'nowrap' : 'mt-10 nowrap'"
                >
                  <span class="icon">
                    <svg width="100%" height="100%" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd"
                        d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                        fill="#14cf93"></path>
                    </svg>
                  </span>
                  <h6 class="inline fw-400">{{ item }}</h6>
                </li>
              </ul>
            </div>
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

const sectionContent = computed(() => {
  const map = {
    'agentic-ai': {
      subTitle: 'What We Deploy',
      headline: "Agentic AI systems we've shipped - live in production.",
      body:
        'A MAXY agent is a software employee trained on your proprietary data, integrated into your stack, and accountable to a specific outcome. We deploy custom agentic AI agents for sales follow-up, lead qualification, customer support, and internal knowledge retrieval across Singapore and beyond.',
      bulletsLeft: [
        'Sales and revenue AI agents',
        'Customer experience AI agents',
        'Internal operations AI agents',
      ],
      bulletsRight: [
        'Assessment and diagnostic AI',
        'Digital twin AI systems',
        'PSG/EDG grant-aligned delivery',
      ],
    },
    'web-app': {
      subTitle: 'What We Build',
      headline: 'AI-native websites and apps engineered to convert.',
      body:
        'We design and build web and app experiences with AI baked in from day one - personalization, automation, and data capture that connect directly to your revenue workflows.',
      bulletsLeft: [
        'Conversion-first UX and UI',
        'AI-ready data capture and tracking',
        'CRM and ops integrations',
      ],
      bulletsRight: [
        'Performance-optimized builds',
        'Composable, scalable architecture',
        'SEO and GEO-ready foundations',
      ],
    },
    'digital-growth': {
      subTitle: 'What We Run',
      headline: 'Digital growth systems that feed your pipeline.',
      body:
        'Content, creative, and distribution that bring qualified demand into the workflows your agentic AI converts. Every channel is measured against revenue, not vanity metrics.',
      bulletsLeft: [
        'SEO and authority content',
        'Short-form and paid creative',
        'Landing pages built to convert',
      ],
      bulletsRight: [
        'Lead magnets and nurture flows',
        'Analytics and attribution',
        'Campaigns tied to revenue',
      ],
    },
  };

  return map[pageKey.value];
});
</script>
