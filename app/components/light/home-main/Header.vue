<template>
  <header class="header main-header bg-img" data-background="/light/assets/imgs/header/bg1.jpg" data-overlay-dark="8">
    <div class="container pt-100">
      <div class="row justify-content-end">
        <div class="col-lg-6">
          <div class="text mb-100">
            <h4>
              MAXY Digital builds agentic AI, custom software, and growth engines
              for SMEs scaling across Southeast Asia and the United States. From your
              first AI agent to a full transformation roadmap — built, shipped, and earning.
            </h4>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid ontop">
      <div class="container">
        <div class="lg-text">
          <div class="d-flex">
            <h6>SINGAPORE HQ · HOLONIQ TOP 50 SEA EDTECH 2025</h6>
            <h6 class="ml-auto">AI AGENCY</h6>
          </div>
          <h1>Maxy Digital</h1>
        </div>
      </div>
      <div class="img">
        <img src="/light/assets/imgs/header/2.jpg" alt="" />
      </div>
    </div>
  </header>
</template>

<script setup>
import loadBackgroudImages from '@/common/loadBackgroudImage';

onMounted(() => {
  loadBackgroudImages();
});
</script>
