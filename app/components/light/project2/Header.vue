<template>
  <header class="header-project2 section-padding pb-0">
    <div class="container mt-30 mb-50">
      <div class="row align-items-end">
        <div class="col-lg-6">
          <div class="full-width mb-30">
            <h1 class="mb-10">{{ title }}</h1>
            <p>{{ summary }}</p>
          </div>
        </div>
        <div class="col-lg-5 offset-lg-1">
          <div class="info">
            <div class="row">
              <div class="col-md-4 sm-mb30">
                <div class="item mb-30">
                  <span class="opacity-8 mb-5">Category :</span>
                  <h6>{{ category }}</h6>
                </div>
              </div>
              <div class="col-md-4 sm-mb30">
                <div class="item mb-30">
                  <span class="opacity-8 mb-5">Built by :</span>
                  <h6>MAXY AI</h6>
                </div>
              </div>
              <div class="col-md-4">
                <div class="item">
                  <span class="opacity-8 mb-5">Deployment :</span>
                  <h6>Agentic AI</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-30 pt-30 bord-thin-top">
        <div class="col-12">
          <div class="item d-flex align-items-center">
            <h2 class="fz-60 line-height-1">
              <span class="numb-count">{{ metric.value }}</span>
            </h2>
            <span class="sub-title opacity-7 ml-30">{{ metric.label }}</span>
          </div>
        </div>
      </div>
    </div>
    <div v-if="slides.length" class="container-fluid rest">
      <div class="project2" data-carousel="swiper" data-items="2" data-loop="true" data-space="30" data-center="true">
        <div id="content-carousel-container-unq-project2" class="swiper-container" data-swiper="container">
          <div class="swiper-wrapper">
            <div v-for="(slide, i) in slides" :key="i" class="swiper-slide">
              <div class="img">
                <img :src="slide" :alt="`${title} product interface`" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup>
import { computed } from 'vue';

const props = defineProps({
  title: { type: String, required: true },
  summary: { type: String, required: true },
  category: { type: String, required: true },
  metric: { type: Object, required: true },
  gallery: { type: Array, default: () => [] },
  image: { type: String, default: '' },
});

const slides = computed(() => (props.gallery.length ? props.gallery : props.image ? [props.image] : []));
</script>

<style scoped>
.project2 .img {
  height: min(50vh, 520px);
  min-height: 320px;
}

@media (max-width: 767px) {
  .project2 .img {
    height: auto;
    min-height: 0;
  }
}
</style>
