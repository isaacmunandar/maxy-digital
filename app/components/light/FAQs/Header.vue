<template>
  <header class="header page-header bg-img section-padding" data-background="/light/assets/imgs/header/bg1.jpg"
    data-overlay-dark="9">
    <div class="container pt-100 ontop">
      <div class="text-center">
        <h1 class="fz-100 text-u">FAQs.</h1>
        <div class="mt-15">
          <a href="/">Home</a>
          <span class="padding-rl-20">|</span>
          <span class="main-color">FAQs</span>
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
