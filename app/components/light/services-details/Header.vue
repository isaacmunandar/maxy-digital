<template>
  <header class="header page-header bg-img section-padding" data-background="/light/assets/imgs/header/b5.jpg"
    data-overlay-dark="9">
    <div class="container pt-100">
      <div class="text-center">
        <h1>Solutions.</h1>
        <div class="mt-15">
          <a href="/">Home</a>
          <span class="padding-rl-20">|</span>
          <a href="/solutions">Solutions</a>
          <span class="padding-rl-20">|</span>
          <span class="main-color">Detail</span>
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
