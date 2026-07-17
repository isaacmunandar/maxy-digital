<template>
  <section class="services section-padding">
    <div class="container">
      <div class="sec-head mb-80">
        <h6 class="sub-title main-color mb-25">
          What we ship
        </h6>
        <div class="bord pt-25 bord-thin-top d-flex align-items-center">
          <h2 v-reveal:clip class="fw-600">
            Three ways we put agentic AI to <span class="fw-200">work.</span>
          </h2>
          <div class="ml-auto">
            <div class="swiper-arrow-control">
              <button type="button" class="swiper-button-prev" aria-label="Previous">
                <span class="ti-arrow-left"></span>
              </button>
              <button type="button" class="swiper-button-next" aria-label="Next">
                <span class="ti-arrow-right"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div v-reveal="{ delay: 150 }" class="serv-swiper" data-carousel="swiper" data-loop="true" data-space="30">
        <Swiper id="content-carousel-container-unq-serv" class="swiper-container" data-swiper="container"
          v-bind="swiperOptions">
          <SwiperSlide v-for="(item, i) in data.slice(0, 4)" :key="i">
            <div class="item-box radius-15">
              <div class="icon mb-40 opacity-5">
                <img :src="item.img" alt="" />
              </div>
              <h5 class="mb-15">{{ item.title }}</h5>
              <p>{{ item.desc }}</p>
              <NuxtLink :to="item.link" class="rmore mt-30">
                <span class="sub-title">Explore {{ item.title }}</span>
                <img src="/light/assets/imgs/arrow-right.png" alt="" class="icon-img-20 ml-5" />
              </NuxtLink>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>
<script setup>
import data from '@/l-data/services.json';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';

const swiperOptions = {
  modules: [Navigation],
  speed: 600,
  loop: false,
  navigation: {
    nextEl: '.swiper-arrow-control .swiper-button-next',
    prevEl: '.swiper-arrow-control .swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1.1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
};
</script>
<style scoped>
.swiper-button-prev,
.swiper-button-next {
  appearance: none;
  -webkit-appearance: none;
  font: inherit;
  cursor: pointer;
  padding: 0;
}
</style>
