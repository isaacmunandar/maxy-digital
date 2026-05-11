<template>
  <header class="page-header bg-img section-padding" data-background="/light/assets/imgs/header/bg1.jpg"
    data-overlay-dark="9">
    <div class="container pt-100 pb-100">
      <div class="text-center">
        <h1 class="fz-100 text-u">About MAXY.</h1>
        <div class="mt-15">
          <a href="/">Home</a>
          <span class="padding-rl-20">|</span>
          <span class="main-color">About MAXY</span>
        </div>
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
