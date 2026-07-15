<template>
  <header class="header-project2 section-padding pb-0">
    <div class="container mt-80 mb-80">
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
      <div class="row mt-50 pt-50 bord-thin-top">
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
    <div class="container-fluid rest">
      <div class="project2" data-carousel="swiper" data-items="2" data-loop="true" data-space="30" data-center="true">
        <div id="content-carousel-container-unq-project2" class="swiper-container" data-swiper="container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="img">
                <img src="/light/assets/imgs/works/projects/2/1.jpg" alt="" />
              </div>
            </div>
            <div class="swiper-slide">
              <div class="img">
                <img src="/light/assets/imgs/works/projects/2/2.jpg" alt="" />
              </div>
            </div>
            <div class="swiper-slide">
              <div class="img">
                <img src="/light/assets/imgs/works/projects/2/3.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup>
defineProps({
  title: { type: String, required: true },
  summary: { type: String, required: true },
  category: { type: String, required: true },
  metric: { type: Object, required: true },
});
</script>
