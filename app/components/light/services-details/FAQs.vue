<template>
  <section class="faqs section-padding pt-0">
    <div class="container">
      <div class="row justify-content-between">
        <div v-reveal class="col-lg-5 valign">
          <div class="faq-img md-mb50">
            <img src="/light/assets/imgs/intro/03.png" alt="" />
          </div>
        </div>
        <div class="col-lg-6 valign">
          <div class="full-width">
            <div v-reveal class="sec-head mb-50">
              <h6 class="sub-title main-color mb-15">{{ faqContent.subTitle }}</h6>
              <h3>{{ faqContent.heading }}</h3>
            </div>
            <div class="list-serv">
              <div class="accordion bord" v-reveal:stagger="{ delay: 100 }">
                <div
                  v-for="(item, index) in faqContent.items"
                  :key="item.q"
                  class="item mb-15"
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
import { solutionFaqs } from '@/l-data/seo';

const route = useRoute();

const pageKey = computed(() => {
  if (route.path.includes('/solutions/agentic-ai')) return 'agentic-ai';
  if (route.path.includes('/solutions/web-app')) return 'web-app';
  if (route.path.includes('/solutions/digital-growth')) return 'digital-growth';
  return 'agentic-ai';
});

const faqContent = computed(() => {
  return solutionFaqs[pageKey.value];
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
