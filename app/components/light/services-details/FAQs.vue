<template>
  <section class="faqs section-padding pt-0">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-lg-5 valign">
          <div class="faq-img md-mb50">
            <img src="/light/assets/imgs/intro/03.jpg" alt="" />
          </div>
        </div>
        <div class="col-lg-6 valign">
          <div class="full-width">
            <div class="sec-head mb-50">
              <h6 class="sub-title main-color mb-15">{{ faqContent.subTitle }}</h6>
              <h3>{{ faqContent.heading }}</h3>
            </div>
            <div class="list-serv">
              <div class="accordion bord">
                <div
                  v-for="(item, index) in faqContent.items"
                  :key="item.q"
                  class="item mb-15 wow fadeInUp"
                  :class="{ active: index === 0 }"
                >
                  <div @click="openAccordion" class="title">
                    <h6>{{ item.q }}</h6>
                    <span class="ico ti-plus"></span>
                  </div>
                  <div class="accordion-info">
                    <p>{{ item.a }}</p>
                  </div>
                </div>
              </div>
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

const faqContent = computed(() => {
  const map = {
    'agentic-ai': {
      subTitle: 'FAQs',
      heading: 'Frequently asked about agentic AI solutions in Singapore',
      items: [
        {
          q: "What makes MAXY Digital Singapore's agentic AI agency?",
          a: 'We have had agentic AI systems running in production since 2022 - before most Singapore agencies were using the term. We ship agentic AI agents for hospitality in Singapore, sales in the US, and operations in Indonesia. We are PSG/EDG-aligned and HolonIQ Top 50 SEA EdTech 2025 recognized.',
        },
        {
          q: 'Can my Singapore SME get government funding for an agentic AI project?',
          a: 'Yes. Most Singapore agentic AI deployments qualify under PSG or EDG, covering up to 50% of project costs. We scope and document your engagement to align with IMDA and Enterprise Singapore requirements.',
        },
        {
          q: 'What industries in Singapore have you deployed agentic AI for?',
          a: 'Hospitality, professional services, enterprise software, healthcare, education, and financial services. Our Singapore deployments span SMEs at SGD 5M-100M revenue range.',
        },
        {
          q: 'How is an agentic AI solution different from a chatbot?',
          a: 'A chatbot responds. An AI agent acts. Agentic AI takes autonomous multi-step actions - qualifying a lead, updating a CRM, drafting a follow-up, and booking a meeting without human initiation at each step.',
        },
        {
          q: 'What data does my AI agent need to work?',
          a: 'It depends on the agent. A sales agent needs CRM data, email history, and product knowledge. A support agent needs FAQ, ticket history, and documentation. A knowledge agent needs internal wikis and SOPs. We run a data readiness audit in Week 1.',
        },
      ],
    },
    'web-app': {
      subTitle: 'FAQs',
      heading: 'Frequently asked about AI-native web and app development',
      items: [
        {
          q: 'Do you build AI into the site or app from day one?',
          a: 'Yes. We design AI touchpoints during discovery so automation, personalization, and data capture are built in from the start.',
        },
        {
          q: 'Can you integrate with our CRM and analytics stack?',
          a: 'We integrate with existing CRM, analytics, and automation tools so the site or app plugs into your revenue workflows.',
        },
        {
          q: 'How long does a web or app build take?',
          a: 'Most builds ship in 4-8 weeks depending on scope, integrations, and content readiness.',
        },
      ],
    },
    'digital-growth': {
      subTitle: 'FAQs',
      heading: 'Frequently asked about digital growth services',
      items: [
        {
          q: 'What channels do you run?',
          a: 'SEO, paid performance creative, short-form video, landing pages, and demand capture content - selected based on where your ICP already buys.',
        },
        {
          q: 'How do you measure success?',
          a: 'We measure qualified pipeline and revenue impact, not vanity metrics. Reporting ties every channel to a defined outcome.',
        },
        {
          q: 'Can you work with our in-house team?',
          a: 'Yes. We can lead execution or partner with your internal marketing and sales teams to compound results.',
        },
      ],
    },
  };

  return map[pageKey.value];
});

function openAccordion(event) {
  document.querySelectorAll('.accordion-info').forEach((element) => {
    element.classList.remove('active');
    element.style.maxHeight = 0;
    element.parentElement.classList.remove('active');
  });
  event.currentTarget.parentElement.classList.add('active');
  event.currentTarget.nextElementSibling.style.maxHeight = '300px';
  event.currentTarget.nextElementSibling.classList.add('active');
}
</script>
